'use client';

import * as React from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const DEPARTMENTS = [
  'General Inquiry',
  'Business Partnership',
  'Trading / Import-Export',
  'Digital & Technology',
  'E-commerce',
  'Agriculture',
  'Consultancy & Advisory',
  'Document Verification',
  'Careers',
] as const;

interface FormState {
  name: string;
  email: string;
  organisation: string;
  department: string;
  message: string;
}

interface Errors {
  [key: string]: string | undefined;
}

const initialState: FormState = {
  name: '',
  email: '',
  organisation: '',
  department: DEPARTMENTS[0],
  message: '',
};

/**
 * UI-only contact form with client-side validation. No data is transmitted by
 * default (safe placeholder). Wire CONTACT_FORM_ENDPOINT via a server action to
 * enable real submissions.
 */
export function ContactForm({
  defaultDepartment,
}: {
  defaultDepartment?: string;
}) {
  const [values, setValues] = React.useState<FormState>({
    ...initialState,
    department: defaultDepartment ?? initialState.department,
  });
  const [errors, setErrors] = React.useState<Errors>({});
  const [submitted, setSubmitted] = React.useState(false);

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim()) {
      next.message = 'Please add a short message.';
    } else if (values.message.trim().length < 10) {
      next.message = 'Please provide a little more detail (10+ characters).';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Safe placeholder: no network call by default.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-emerald/30 bg-emerald/5 p-10 text-center"
      >
        <CheckCircle2
          className="size-12 [color:hsl(var(--emerald))]"
          aria-hidden="true"
        />
        <h3 className="mt-4 text-xl font-semibold text-navy-900">
          Thank you — your inquiry is noted
        </h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          This is a demonstration form. In production, your message would be
          routed securely to the{' '}
          <strong className="text-navy-800">{values.department}</strong> team
          and followed up through a verified channel.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setValues(initialState);
            setSubmitted(false);
          }}
        >
          Submit another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          required
          error={errors.name}
          value={values.name}
          onChange={update('name')}
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email address"
          type="email"
          required
          error={errors.email}
          value={values.email}
          onChange={update('email')}
          autoComplete="email"
        />
      </div>

      <Field
        id="organisation"
        label="Organisation (optional)"
        value={values.organisation}
        onChange={update('organisation')}
        autoComplete="organization"
      />

      <div>
        <label
          htmlFor="department"
          className="mb-1.5 block text-sm font-medium text-navy-800"
        >
          Department
        </label>
        <select
          id="department"
          value={values.department}
          onChange={update('department')}
          className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {DEPARTMENTS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-navy-800"
        >
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={update('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(
            'w-full rounded-xl border bg-background px-3.5 py-3 text-sm text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            errors.message ? 'border-destructive' : 'border-input',
          )}
          placeholder="Tell us about your inquiry…"
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <p className="text-xs text-muted-foreground">
        We respect your privacy. Do not include sensitive personal identifiers
        in this form. We will respond through a verified channel.
      </p>

      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="w-full sm:w-auto"
      >
        <Send className="size-4" />
        Send inquiry
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  type = 'text',
  ...props
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-navy-800"
      >
        {label} {required ? <span className="text-destructive">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'h-11 w-full rounded-xl border bg-background px-3.5 text-sm text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          error ? 'border-destructive' : 'border-input',
        )}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
