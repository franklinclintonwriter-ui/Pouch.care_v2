import type { FaqItem } from '@/lib/types';

export const faqs: FaqItem[] = [
  {
    id: 'faq-legal-status',
    question: 'What is the legal status of Pouch Care International Ltd.?',
    answer:
      'Pouch Care International Ltd. is a private company limited by shares, incorporated in Bangladesh under the Companies Act, 1994. It is registered with the RJSC under Certificate of Incorporation No. C-202769/2025, dated 18 June 2025.',
    category: 'Company',
  },
  {
    id: 'faq-verification',
    question: 'How can I verify the company’s documents?',
    answer:
      'Public-safe verification is available through our Verification Center, which presents document metadata, verification status and redacted previews. For an official copy, you can submit a verification request through our contact channel.',
    category: 'Verification',
  },
  {
    id: 'faq-privacy',
    question: 'Why are some document fields masked or hidden?',
    answer:
      'To protect privacy and security, we never publish sensitive data such as personal identifiers (NID/passport), personal contact details, signatures, seals, QR codes, or unredacted document scans. Public previews are redacted by design.',
    category: 'Privacy',
  },
  {
    id: 'faq-divisions',
    question: 'What business areas does the company operate in?',
    answer:
      'The company has a diversified set of legal objects spanning trading and import/export, digital marketing, technology and IT/ITES, e-commerce, agriculture, consultancy, and contracting. These are organised into seven business divisions.',
    category: 'Business',
  },
  {
    id: 'faq-roadmap',
    question: 'Are the divisions fully operational today?',
    answer:
      'The company has a verified legal foundation and is building out its divisions with documented standards. Forward-looking initiatives are presented as roadmap items. We do not claim revenue, clients, offices or partnerships that are not yet established.',
    category: 'Business',
  },
  {
    id: 'faq-contact',
    question: 'How do I start a business or partnership inquiry?',
    answer:
      'Use the contact page to submit a business, partnership, or document-verification inquiry. Select the relevant department and our team will follow up through a verified channel.',
    category: 'Contact',
  },
];
