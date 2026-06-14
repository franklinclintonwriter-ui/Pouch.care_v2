import { Lock, ShieldAlert, FileText } from 'lucide-react';
import type { LegalDocument } from '@/lib/types';

/**
 * A public-safe, redacted document preview. This is a STYLISED representation —
 * it never renders a real scan. Disclosed fields are shown; sensitive fields
 * are explicitly redacted with masked bars.
 */
export function RedactedDocumentPreview({ doc }: { doc: LegalDocument }) {
  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-border bg-white shadow-soft">
        {/* Document chrome */}
        <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-5 py-3">
          <div className="flex items-center gap-2 text-navy-800">
            <FileText className="size-4 text-gold-700" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em]">
              Redacted preview
            </span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-navy-900 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ivory">
            <Lock className="size-3" aria-hidden="true" />
            Public-safe
          </span>
        </div>

        {/* Body */}
        <div className="space-y-5 p-6">
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {doc.issuingAuthority}
            </p>
            <h3 className="mt-1 font-serif text-lg font-semibold text-navy-900">
              {doc.title}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {doc.referenceLabel}
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {doc.disclosedFields.map((field) => (
              <div
                key={field.label}
                className="border-b border-dashed border-border pb-2"
              >
                <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  {field.label}
                </dt>
                <dd className="text-sm font-semibold text-navy-900">
                  {field.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Redacted/masked sensitive fields */}
          <div className="rounded-lg border border-dashed border-destructive/30 bg-destructive/5 p-4">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-destructive">
              <ShieldAlert className="size-3.5" aria-hidden="true" />
              Redacted for privacy &amp; security
            </p>
            <ul className="mt-3 space-y-2.5">
              {doc.maskedFields.map((label) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="w-44 shrink-0 text-xs text-muted-foreground">
                    {label}
                  </span>
                  <span
                    className="h-3 flex-1 rounded bg-[repeating-linear-gradient(45deg,theme(colors.navy.200),theme(colors.navy.200)_6px,transparent_6px,transparent_12px)]"
                    aria-label="Redacted"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        This preview is a public-safe representation. The original document and
        all sensitive fields are protected. To confirm authenticity, request an
        official verification through our contact channel.
      </p>
    </div>
  );
}
