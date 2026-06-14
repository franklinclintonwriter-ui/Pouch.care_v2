'use client';

import * as React from 'react';
import {
  Eye,
  FileSearch,
  Building2,
  CalendarDays,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StatusBadge } from '@/components/ui/status-badge';
import { Dialog } from '@/components/ui/dialog';
import { RedactedDocumentPreview } from './redacted-document-preview';
import { resolveDocumentStatus } from '@/data/documents';
import type { LegalDocument } from '@/lib/types';

export function DocumentCard({ doc }: { doc: LegalDocument }) {
  const [open, setOpen] = React.useState(false);
  // Resolve date-dependent statuses on the client to reflect "today".
  const [status, setStatus] = React.useState(doc.status);
  React.useEffect(() => {
    setStatus(resolveDocumentStatus(doc));
  }, [doc]);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-300/70 hover:shadow-elevated">
      <div className="flex items-start justify-between gap-3">
        <Badge variant="gold">{doc.category}</Badge>
        <StatusBadge status={status} />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-navy-900">{doc.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {doc.publicSummary}
      </p>

      <dl className="mt-5 space-y-2.5 border-t border-border pt-4 text-sm">
        <div className="flex items-start gap-2.5">
          <Building2
            className="mt-0.5 size-4 shrink-0 text-gold-700"
            aria-hidden="true"
          />
          <div>
            <dt className="sr-only">Issuing authority</dt>
            <dd className="text-navy-800">{doc.issuingAuthority}</dd>
            <dd className="text-xs text-muted-foreground">{doc.entityName}</dd>
          </div>
        </div>
        {doc.issueDateLabel ? (
          <div className="flex items-center gap-2.5">
            <CalendarDays
              className="size-4 shrink-0 text-gold-700"
              aria-hidden="true"
            />
            <dt className="sr-only">Dates</dt>
            <dd className="text-navy-800">
              Issued {doc.issueDateLabel}
              {doc.validUntilLabel ? (
                <span className="text-muted-foreground">
                  {' '}
                  · Valid until {doc.validUntilLabel}
                </span>
              ) : null}
            </dd>
          </div>
        ) : null}
        <div className="flex items-center gap-2.5">
          <ShieldCheck
            className="size-4 shrink-0 text-gold-700"
            aria-hidden="true"
          />
          <dt className="sr-only">Business category</dt>
          <dd className="text-navy-800">{doc.businessCategory}</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Button
          variant="primary"
          size="sm"
          className="flex-1"
          onClick={() => setOpen(true)}
        >
          <Eye className="size-4" />
          View redacted preview
        </Button>
        <Button
          variant="outline"
          size="sm"
          href={`/contact?type=verification&doc=${doc.slug}`}
          className="flex-1"
        >
          <FileSearch className="size-4" />
          Request official copy
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title={doc.title}
        description="Public-safe redacted preview — sensitive fields are masked."
      >
        <RedactedDocumentPreview doc={doc} />
      </Dialog>
    </article>
  );
}
