'use client';

import * as React from 'react';
import { StatusBadge } from '@/components/ui/status-badge';
import { resolveDocumentStatus } from '@/data/documents';
import type { LegalDocument } from '@/lib/types';

/** Responsive registry: a real table on desktop, stacked cards on mobile. */
export function DocumentRegistryTable({ docs }: { docs: LegalDocument[] }) {
  const [now, setNow] = React.useState<Date | null>(null);
  React.useEffect(() => setNow(new Date()), []);
  const statusFor = (doc: LegalDocument) =>
    resolveDocumentStatus(doc, now ?? new Date(doc.issueDate ?? Date.now()));

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      {/* Desktop table */}
      <table className="hidden w-full text-left text-sm md:table">
        <caption className="sr-only">
          Registry of public-safe legal documents
        </caption>
        <thead>
          <tr className="border-b border-border bg-secondary/50 text-xs uppercase tracking-wide text-muted-foreground">
            <th scope="col" className="px-5 py-3.5 font-semibold">
              Document
            </th>
            <th scope="col" className="px-5 py-3.5 font-semibold">
              Category
            </th>
            <th scope="col" className="px-5 py-3.5 font-semibold">
              Authority
            </th>
            <th scope="col" className="px-5 py-3.5 font-semibold">
              Dates
            </th>
            <th scope="col" className="px-5 py-3.5 font-semibold">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {docs.map((doc) => (
            <tr
              key={doc.id}
              className="align-top transition-colors hover:bg-secondary/30"
            >
              <th scope="row" className="px-5 py-4 font-semibold text-navy-900">
                {doc.title}
                <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                  {doc.entityName}
                </span>
              </th>
              <td className="px-5 py-4 text-muted-foreground">
                {doc.category}
              </td>
              <td className="px-5 py-4 text-muted-foreground">
                {doc.issuingAuthority}
              </td>
              <td className="px-5 py-4 text-muted-foreground">
                {doc.issueDateLabel ?? '—'}
                {doc.validUntilLabel ? (
                  <span className="block text-xs">
                    Valid until {doc.validUntilLabel}
                  </span>
                ) : null}
              </td>
              <td className="px-5 py-4">
                <StatusBadge status={statusFor(doc)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile stacked */}
      <ul className="divide-y divide-border md:hidden">
        {docs.map((doc) => (
          <li key={doc.id} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-navy-900">{doc.title}</p>
                <p className="text-xs text-muted-foreground">
                  {doc.entityName}
                </p>
              </div>
              <StatusBadge status={statusFor(doc)} />
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <div>
                <dt className="text-muted-foreground">Category</dt>
                <dd className="font-medium text-navy-800">{doc.category}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Authority</dt>
                <dd className="font-medium text-navy-800">
                  {doc.issuingAuthority}
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="text-muted-foreground">Dates</dt>
                <dd className="font-medium text-navy-800">
                  {doc.issueDateLabel ?? '—'}
                  {doc.validUntilLabel
                    ? ` · Valid until ${doc.validUntilLabel}`
                    : ''}
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
