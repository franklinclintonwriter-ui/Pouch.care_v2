import type { BusinessDivision } from '@/lib/types';

/**
 * Business divisions. Each maps to a legal object in the company's MOA.
 * Forward-looking statements are framed as roadmap / planned only — no claims
 * of existing revenue, clients, partnerships, offices, or certifications.
 */
export const divisions: BusinessDivision[] = [
  {
    slug: 'trading-import-export',
    name: 'Trading, Import & Export',
    shortName: 'Trading & Trade',
    icon: 'Ship',
    tagline: 'Cross-border trade built on compliance and reliability.',
    summary:
      'A general trading division focused on import, export and distribution of goods, operating with documented compliance and disciplined sourcing.',
    heroStatement:
      'Connecting Bangladeshi commerce to international markets through compliant, transparent and reliable trading operations.',
    legalBasis:
      'Authorised under the company objects covering general trading, import, export and distribution, supported by the Export-Import trade license held under the Pouch Care Enterprise trading name.',
    services: [
      'Import sourcing and procurement coordination',
      'Export facilitation and market access',
      'Wholesale and distribution operations',
      'Supply-chain and logistics coordination',
      'Trade documentation and compliance support',
    ],
    operatingModel: [
      {
        title: 'Compliant sourcing',
        description:
          'Structured supplier evaluation with documentation and quality checks before commitment.',
      },
      {
        title: 'Transparent trade flow',
        description:
          'Clear documentation across procurement, shipping and delivery to support auditability.',
      },
      {
        title: 'Risk-managed execution',
        description:
          'Phased scaling of trade volumes aligned with verified demand and working-capital discipline.',
      },
    ],
    industriesServed: [
      'Consumer goods',
      'Agro commodities',
      'Industrial supplies',
      'General merchandise',
    ],
    compliance: [
      'Operates under a registered trade license for export/import activity',
      'Trade documentation maintained for audit readiness',
      'Privacy-first handling of counterparty information',
    ],
    roadmap: [
      {
        phase: 'Phase 1',
        title: 'Foundation',
        description:
          'Establish compliant trade documentation, banking and sourcing relationships.',
      },
      {
        phase: 'Phase 2',
        title: 'Selective scaling',
        description:
          'Grow priority import/export categories with verified demand signals.',
      },
      {
        phase: 'Phase 3',
        title: 'Market expansion',
        description:
          'Target additional corridors and distribution partnerships (planned).',
      },
    ],
    caseStudyPlaceholder: {
      title: 'Case study — coming soon',
      description:
        'Documented trade engagements will be published here as the division builds its verified track record.',
    },
    order: 1,
  },
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    shortName: 'Digital Marketing',
    icon: 'Megaphone',
    tagline: 'Performance-driven growth and brand authority.',
    summary:
      'A digital marketing division delivering SEO, content, and performance services designed to build measurable brand authority.',
    heroStatement:
      'Building measurable brand authority through SEO, content, and performance marketing grounded in transparent reporting.',
    legalBasis:
      'Authorised under the company objects covering digital marketing, SEO, and brand services.',
    services: [
      'Search engine optimisation (SEO)',
      'Content strategy and production',
      'Performance and paid media management',
      'Brand identity and creative direction',
      'Analytics, measurement and reporting',
    ],
    operatingModel: [
      {
        title: 'Strategy first',
        description:
          'Engagements begin with research, positioning and measurable objectives.',
      },
      {
        title: 'Transparent reporting',
        description:
          'Clear dashboards and reporting cadence so outcomes are verifiable.',
      },
      {
        title: 'Compounding growth',
        description:
          'Focus on durable organic assets alongside performance channels.',
      },
    ],
    industriesServed: [
      'SMEs and growth brands',
      'E-commerce',
      'Professional services',
      'Technology',
    ],
    compliance: [
      'Privacy-respecting analytics practices',
      'Transparent attribution and reporting',
      'Brand-safe media standards',
    ],
    roadmap: [
      {
        phase: 'Phase 1',
        title: 'Service foundation',
        description:
          'Define service catalogue, delivery playbooks and reporting standards.',
      },
      {
        phase: 'Phase 2',
        title: 'Capability depth',
        description: 'Expand specialist capability across channels (planned).',
      },
      {
        phase: 'Phase 3',
        title: 'Productised offerings',
        description: 'Develop repeatable, productised growth packages.',
      },
    ],
    caseStudyPlaceholder: {
      title: 'Case study — coming soon',
      description:
        'Campaign outcomes will be published here once verified results are available.',
    },
    order: 2,
  },
  {
    slug: 'technology-ites',
    name: 'Technology & ITES',
    shortName: 'Technology & ITES',
    icon: 'Cpu',
    tagline: 'Software, IT-enabled services and digital infrastructure.',
    summary:
      'A technology division covering software, web development, hosting and IT-enabled services built to professional engineering standards.',
    heroStatement:
      'Delivering software, web platforms, hosting and IT-enabled services engineered for reliability and scale.',
    legalBasis:
      'Authorised under the company objects covering IT/ITES, software, hardware, web development, hosting/domain services, and computer training.',
    services: [
      'Web and application development',
      'Hosting, domain and managed services',
      'IT-enabled services and process support',
      'Software solutions and integrations',
      'Computer training and capability building',
    ],
    operatingModel: [
      {
        title: 'Engineering discipline',
        description:
          'Version control, testing and documentation as default practice.',
      },
      {
        title: 'Security by design',
        description:
          'Privacy-first and security-aware delivery across the stack.',
      },
      {
        title: 'Scalable delivery',
        description:
          'Architectures designed to grow with demand without rework.',
      },
    ],
    industriesServed: [
      'Startups and SMEs',
      'E-commerce',
      'Professional services',
      'Public-facing organisations',
    ],
    compliance: [
      'Secure development practices',
      'Data-privacy aware architecture',
      'Documented delivery and handover',
    ],
    roadmap: [
      {
        phase: 'Phase 1',
        title: 'Core capability',
        description:
          'Establish delivery standards and reference architectures.',
      },
      {
        phase: 'Phase 2',
        title: 'Service expansion',
        description:
          'Broaden managed services and platform offerings (planned).',
      },
      {
        phase: 'Phase 3',
        title: 'Product development',
        description: 'Invest in proprietary tools and platforms.',
      },
    ],
    caseStudyPlaceholder: {
      title: 'Case study — coming soon',
      description:
        'Delivered platforms and engagements will be documented here as the portfolio grows.',
    },
    order: 3,
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce & Digital Commerce',
    shortName: 'E-commerce',
    icon: 'ShoppingCart',
    tagline: 'Modern commerce experiences and digital storefronts.',
    summary:
      'An e-commerce division building digital storefronts, marketplace operations and fulfilment-ready commerce experiences.',
    heroStatement:
      'Building trustworthy digital commerce — from storefronts to fulfilment-ready operations.',
    legalBasis:
      'Authorised under the company objects covering e-commerce and digital commerce.',
    services: [
      'Online storefront design and build',
      'Marketplace and catalogue operations',
      'Payments and checkout integration',
      'Order management and fulfilment coordination',
      'Conversion and retention optimisation',
    ],
    operatingModel: [
      {
        title: 'Trust-first commerce',
        description:
          'Transparent product information and secure checkout experiences.',
      },
      {
        title: 'Operational rigour',
        description: 'Documented order, inventory and fulfilment processes.',
      },
      {
        title: 'Data-informed growth',
        description: 'Continuous optimisation based on commerce analytics.',
      },
    ],
    industriesServed: [
      'Retail and consumer brands',
      'Agro and food products',
      'Specialty goods',
      'Direct-to-consumer brands',
    ],
    compliance: [
      'Secure payment integration standards',
      'Clear consumer information practices',
      'Privacy-respecting customer data handling',
    ],
    roadmap: [
      {
        phase: 'Phase 1',
        title: 'Storefront foundation',
        description: 'Establish commerce stack, payments and operations.',
      },
      {
        phase: 'Phase 2',
        title: 'Channel growth',
        description: 'Expand across marketplaces and channels (planned).',
      },
      {
        phase: 'Phase 3',
        title: 'Brand portfolio',
        description: 'Develop and scale owned commerce brands.',
      },
    ],
    caseStudyPlaceholder: {
      title: 'Case study — coming soon',
      description:
        'Live storefronts and commerce results will be featured here as they launch.',
    },
    order: 4,
  },
  {
    slug: 'agriculture',
    name: 'Agriculture & Agro-based Operations',
    shortName: 'Agriculture',
    icon: 'Sprout',
    tagline: 'Agro, dairy, poultry and fishery operations.',
    summary:
      'An agriculture division covering agro-based production, dairy, poultry and fishery, oriented toward quality and sustainable practice.',
    heroStatement:
      'Cultivating sustainable value across agro-based production, dairy, poultry and fishery.',
    legalBasis:
      'Authorised under the company objects covering agriculture, agro-based operations, dairy, poultry and fishery.',
    services: [
      'Agro-based production and sourcing',
      'Dairy operations',
      'Poultry operations',
      'Fishery operations',
      'Agro supply and distribution',
    ],
    operatingModel: [
      {
        title: 'Quality orientation',
        description: 'Focus on consistent quality and responsible practice.',
      },
      {
        title: 'Sustainable approach',
        description:
          'Operating models that consider long-term resource stewardship.',
      },
      {
        title: 'Market linkage',
        description:
          'Connecting production to trading and e-commerce channels within the group.',
      },
    ],
    industriesServed: [
      'Food and agro supply',
      'Wholesale and distribution',
      'Retail and e-commerce',
      'Institutional buyers',
    ],
    compliance: [
      'Responsible agricultural practice',
      'Quality and food-safety awareness',
      'Documented sourcing where applicable',
    ],
    roadmap: [
      {
        phase: 'Phase 1',
        title: 'Pilot operations',
        description: 'Define agro focus areas and operating standards.',
      },
      {
        phase: 'Phase 2',
        title: 'Capacity building',
        description: 'Expand production capacity in priority areas (planned).',
      },
      {
        phase: 'Phase 3',
        title: 'Integrated value chain',
        description: 'Link production to group trading and commerce channels.',
      },
    ],
    caseStudyPlaceholder: {
      title: 'Case study — coming soon',
      description:
        'Agro operations and outcomes will be documented here as they develop.',
    },
    order: 5,
  },
  {
    slug: 'consultancy',
    name: 'Consultancy & Advisory',
    shortName: 'Consultancy',
    icon: 'Briefcase',
    tagline: 'Strategic advisory grounded in execution.',
    summary:
      'A consultancy division offering business, digital and operational advisory services informed by hands-on execution across the group.',
    heroStatement:
      'Advisory services that pair strategic thinking with practical, execution-ready guidance.',
    legalBasis:
      'Authorised under the company objects covering consultancy and advisory services.',
    services: [
      'Business strategy and planning',
      'Digital transformation advisory',
      'Market entry and trade advisory',
      'Operations and process advisory',
      'Compliance and documentation advisory',
    ],
    operatingModel: [
      {
        title: 'Evidence-based',
        description: 'Recommendations grounded in data and real constraints.',
      },
      {
        title: 'Execution-aware',
        description:
          'Advice shaped by hands-on delivery experience across divisions.',
      },
      {
        title: 'Accountable outcomes',
        description: 'Clear scopes, deliverables and success measures.',
      },
    ],
    industriesServed: [
      'SMEs and growth businesses',
      'Trade and commerce',
      'Technology and digital',
      'Agro and food sectors',
    ],
    compliance: [
      'Confidentiality-first engagement model',
      'Transparent scoping and deliverables',
      'Privacy-respecting information handling',
    ],
    roadmap: [
      {
        phase: 'Phase 1',
        title: 'Advisory foundation',
        description: 'Define advisory practice areas and methodologies.',
      },
      {
        phase: 'Phase 2',
        title: 'Specialist depth',
        description: 'Develop sector-specific advisory depth (planned).',
      },
      {
        phase: 'Phase 3',
        title: 'Advisory programmes',
        description: 'Offer structured, repeatable advisory programmes.',
      },
    ],
    caseStudyPlaceholder: {
      title: 'Case study — coming soon',
      description:
        'Advisory engagements will be referenced here in anonymised, public-safe form.',
    },
    order: 6,
  },
  {
    slug: 'contracting',
    name: 'Contracting & Tender Operations',
    shortName: 'Contracting',
    icon: 'FileSignature',
    tagline: 'Tendering, contracting and joint ventures.',
    summary:
      'A contracting division focused on tender participation, contracting and structured joint ventures with disciplined governance.',
    heroStatement:
      'Pursuing tenders, contracts and joint ventures with disciplined governance and compliance.',
    legalBasis:
      'Authorised under the company objects covering tenders, contracting and joint ventures.',
    services: [
      'Tender identification and participation',
      'Contracting and project delivery coordination',
      'Joint-venture structuring',
      'Procurement and supplier coordination',
      'Compliance and documentation management',
    ],
    operatingModel: [
      {
        title: 'Governed participation',
        description:
          'Structured evaluation before pursuing tenders and contracts.',
      },
      {
        title: 'Documented delivery',
        description: 'Clear records across the contract lifecycle.',
      },
      {
        title: 'Partnership discipline',
        description: 'Joint ventures structured with defined roles and terms.',
      },
    ],
    industriesServed: [
      'Public and institutional tenders',
      'Corporate procurement',
      'Trade and supply',
      'Technology services',
    ],
    compliance: [
      'Eligibility and documentation discipline',
      'Transparent procurement practices',
      'Governed joint-venture structuring',
    ],
    roadmap: [
      {
        phase: 'Phase 1',
        title: 'Readiness',
        description:
          'Build tender documentation, eligibility and process readiness.',
      },
      {
        phase: 'Phase 2',
        title: 'Selective bidding',
        description: 'Pursue qualified tenders and contracts (planned).',
      },
      {
        phase: 'Phase 3',
        title: 'Partnership growth',
        description: 'Develop structured joint ventures for larger mandates.',
      },
    ],
    caseStudyPlaceholder: {
      title: 'Case study — coming soon',
      description:
        'Awarded contracts and engagements will be documented here in public-safe form.',
    },
    order: 7,
  },
];

export function getDivisionBySlug(slug: string): BusinessDivision | undefined {
  return divisions.find((d) => d.slug === slug);
}

export const sortedDivisions = [...divisions].sort((a, b) => a.order - b.order);
