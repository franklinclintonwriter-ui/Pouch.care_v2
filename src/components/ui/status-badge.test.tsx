import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusBadge, STATUS_CONFIG } from './status-badge';
import type { VerificationStatus } from '@/lib/types';

describe('StatusBadge', () => {
  const cases: VerificationStatus[] = [
    'verified',
    'active',
    'renewal-required',
    'archived',
    'pending',
  ];

  it.each(cases)('renders the correct label for "%s"', (status) => {
    render(<StatusBadge status={status} />);
    expect(screen.getByText(STATUS_CONFIG[status].label)).toBeInTheDocument();
  });

  it('exposes the status via a data attribute for testing/automation', () => {
    const { container } = render(<StatusBadge status="verified" />);
    expect(container.querySelector('[data-status="verified"]')).not.toBeNull();
  });

  it('falls back to pending config for an unknown status', () => {
    render(<StatusBadge status={'unknown' as VerificationStatus} />);
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });
});
