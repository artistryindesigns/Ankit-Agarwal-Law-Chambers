import { PracticeArea, Testimonial, AdvocateMilestone, LegalArticle } from '../types';
import heroImage from '../assets/images/hero image.png';
import officialLogo from '../assets/images/Ankit Agarwal Law Chambers Logo.png';
import advocatePortrait from '../assets/images/advocate_portrait_1790132950132.jpg';
import justiceScales from '../assets/images/justice_scales_books_1790132969487.jpg';
import chambersImg from '../assets/images/law_chambers_architectural_1790132983165.jpg';

export const IMAGES = {
  heroDesk: heroImage,
  advocatePortrait: advocatePortrait,
  justiceScales: justiceScales,
  chambers: chambersImg,
  officialLogo: officialLogo,
};

export const ADVOCATE_INFO = {
  firmName: 'Ankit Agarwal Law Chambers',
  shortName: 'Ankit Agarwal',
  subtitle: 'Advocate & Legal Counsel',
  advocateName: 'Ankit Agarwal',
  title: 'Advocate & Principal Counsel',
  tagline: 'Advocacy with Integrity',
  phone: '+91 8876154321',
  displayPhone: '+91 8876154321',
  email: 'info@ankitagarwallaw.com',
  secondaryEmail: 'chambers@ankitagarwallaw.com',
  address: 'Bordoloi Nagar, Bhaben Gogoi Path, Near Namghar Road, Tinsukia, Assam. 786125',
  officeHours: 'Monday – Friday: 8:30 AM – 6:30 PM (By Prior Appointment)',
  courtHours: 'Court Appearances: Mon / Wed / Fri Morning Sessions',
  quote: 'At Ankit Agarwal Law Chambers, the law isn\'t just rules—it\'s strategy, foresight, and opportunity.',
  heroDescription: 'Providing principled, high-stakes legal advocacy, strategic business counsel, and uncompromising courtroom representation.',
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'health-insurance-claims',
    number: '01',
    title: 'Health Insurance Claims',
    summary: 'Rejected and short-paid health insurance claims, including rejections for pre-existing disease, waiting periods and non-disclosure, and wrongful deductions.',
    fullDescription: 'Review of the policy wording against the insurer\'s reasons, drafting of grievances to the insurer and complaints on the IRDAI Bima Bharosa portal, preparation of the Insurance Ombudsman complaint and of the policyholder\'s case for the hearing, and consumer complaints before the District and State Commissions.',
    keyServices: [
      'Challenging Wrongful Repudiation & Pre-Existing Disease (PED) Rejections',
      'Disputes Over Cashless Facility Denial & Arbitrary Deduction of Hospital Bills',
      'Representations Before the Insurance Grievance Cell & Insurance Ombudsman (Guwahati)',
      'Consumer Complaints for Deficiency in Service & Mental Harassment Compensation',
      'Group Mediclaim, Critical Illness & Personal Accident Policy Enforcement',
    ],
    applicableForums: [
      'Office of the Insurance Ombudsman, Guwahati',
      'District Consumer Disputes Redressal Commissions (Tinsukia, Dibrugarh & Kamrup)',
      'Assam State Consumer Disputes Redressal Commission, Guwahati',
    ],
    statutoryFramework: [
      'Insurance Act, 1938 & IRDAI Regulations',
      'Consumer Protection Act, 2019',
      'Insurance Ombudsman Rules, 2017',
    ],
  },
  {
    id: 'consumer-disputes',
    number: '02',
    title: 'Consumer Disputes',
    summary: 'Complaints under the Consumer Protection Act, 2019 before the District Commission and the State Commission.',
    fullDescription: 'Deficiency in service and unfair trade practice claims, including disputes with airlines, travel portals, insurers, banks, builders and sellers, and appeals from District Commission orders.',
    keyServices: [
      'Complaints Against Defective Goods & Deficient Services',
      'Disputes with Airlines, Travel Portals, Insurers, Banks, Builders & Sellers',
      'Appeals Before the State Consumer Disputes Redressal Commission, Guwahati',
    ],
    applicableForums: [
      'District Consumer Disputes Redressal Commission, Tinsukia & Dibrugarh',
      'Assam State Consumer Disputes Redressal Commission, Guwahati',
    ],
    statutoryFramework: [
      'Consumer Protection Act, 2019',
    ],
  },
  {
    id: 'motor-accident-claims',
    number: '03',
    title: 'Motor Accident Claims',
    summary: 'Compensation claims for death and injury arising from road accidents, before the Motor Accident Claims Tribunal.',
    fullDescription: 'Claim petitions, appeals and cross-objections before the Gauhati High Court, and assistance with the FIR and police records needed for a claim.',
    keyServices: [
      'Injury & Fatal Accident Dependency Claims Before MACT',
      'Contesting Insurer Defences on Licence, Permit & Policy Conditions',
      'MACT Appeals Before the Gauhati High Court',
    ],
    applicableForums: [
      'Motor Accident Claims Tribunal (MACT), Tinsukia, Dibrugarh & Guwahati',
      'Gauhati High Court',
    ],
    statutoryFramework: [
      'Motor Vehicles Act, 1988',
    ],
  },
  {
    id: 'criminal-matters',
    number: '04',
    title: 'Criminal Matters',
    summary: 'Complaints and cases under the Bharatiya Nyaya Sanhita, 2023 and the Bharatiya Nagarik Suraksha Sanhita, 2023.',
    fullDescription: 'Drafting of FIRs and complaint cases, bail, trial, and criminal revision petitions before the Magistrates\' and Sessions Courts.',
    keyServices: [
      'Anticipatory Bail & Regular Bail Applications',
      'Criminal Trials, Complaint Cases & Revisions',
      'Quashing Petitions & Criminal Appeals Before the Gauhati High Court',
    ],
    applicableForums: [
      'Magistrate Courts & Sessions Courts, Tinsukia, Dibrugarh & Guwahati',
      'Gauhati High Court',
    ],
    statutoryFramework: [
      'Bharatiya Nyaya Sanhita (BNS) / IPC & Bharatiya Nagarik Suraksha Sanhita (BNSS) / CrPC',
    ],
  },
  {
    id: 'cheque-dishonour',
    number: '05',
    title: 'Cheque Dishonour',
    summary: 'Cases under Section 138 of the Negotiable Instruments Act, 1881.',
    fullDescription: 'Statutory demand notices, filing of complaints, and defence of accused persons, including applications for exemption from personal appearance.',
    keyServices: [
      'Statutory Demand Notices & Replies under Section 138 NI Act',
      'Filing, Prosecution & Defence of Cheque Dishonour Complaints',
      'Interim Compensation Applications, Appeals & Revisions',
    ],
    applicableForums: [
      'Courts of the Judicial Magistrate First Class, Tinsukia, Dibrugarh & Guwahati',
      'Sessions Courts & Gauhati High Court',
    ],
    statutoryFramework: [
      'Negotiable Instruments Act, 1881',
    ],
  },
  {
    id: 'land-disputes',
    number: '06',
    title: 'Land Disputes',
    summary: 'Disputes over the title and possession of land.',
    fullDescription: 'Title suits, suits for declaration and injunction, proceedings under the Assam land-grabbing law, and complaints where land has been sold by persons without title.',
    keyServices: [
      'Title Suits for Declaration of Right, Title, Interest & Possession',
      'Partition Suits & Boundary Dispute Litigation',
      'Temporary & Permanent Injunction Proceedings',
    ],
    applicableForums: [
      'Civil Courts & District Courts, Tinsukia, Dibrugarh & Guwahati',
      'Gauhati High Court',
    ],
    statutoryFramework: [
      'Code of Civil Procedure, 1908, Specific Relief Act, 1963 & Transfer of Property Act, 1882',
    ],
  },
  {
    id: 'land-records-and-revenue-matters',
    number: '07',
    title: 'Land Records and Revenue Matters',
    summary: 'Revenue records and permissions relating to land in Assam.',
    fullDescription: 'Chain-of-title examination from jamabandi and patta records, mutation, Non-Encumbrance Certificates, No Objection Certificates for land sale, and revenue appeals and restoration petitions before revenue authorities.',
    keyServices: [
      'Mutation, Partition (Batwara) & Jamabandi Rectification',
      'Annual to Periodic Patta Conversion & Land Reclassification',
      'Revenue Appeals & Writ Proceedings',
    ],
    applicableForums: [
      'Offices of the Circle Officer & District Commissioner (Revenue), Tinsukia, Dibrugarh & Guwahati',
      'Gauhati High Court',
    ],
    statutoryFramework: [
      'Assam Land and Revenue Regulation, 1886',
    ],
  },
  {
    id: 'property-documentation-and-registration',
    number: '08',
    title: 'Property Documentation and Registration',
    summary: 'Drafting and registration of property documents.',
    fullDescription: 'Sale, gift, lease and partition deeds, agreements for sale, powers of attorney and their revocation, rent agreements, and title papers and bank NOCs for property sales.',
    keyServices: [
      'Title Search Reports & Non-Encumbrance Verification',
      'Drafting of Sale Deeds, Gift Deeds, Lease Deeds, PoA & Wills',
      'Land Sale Permission (NOC) & Sub-Registrar Registration',
    ],
    applicableForums: [
      'Offices of the Sub-Registrar & District Registrar, Tinsukia, Dibrugarh & Guwahati',
    ],
    statutoryFramework: [
      'Registration Act, 1908, Indian Stamp Act, 1899 & Transfer of Property Act, 1882',
    ],
  },
  {
    id: 'trademark-matters',
    number: '09',
    title: 'Trademark Matters',
    summary: 'Protection of brand names and marks.',
    fullDescription: 'Trademark applications, replies to examination reports, oppositions, cancellation (rectification) proceedings against registered marks, and action against deceptively similar marks.',
    keyServices: [
      'Trademark Search & Application Filing',
      'Examination Report Replies & Show-Cause Hearings',
      'Opposition, Renewal & Infringement Notices',
    ],
    applicableForums: [
      'Trade Marks Registry',
      'District Courts & Commercial Courts',
    ],
    statutoryFramework: [
      'Trade Marks Act, 1999 & Trade Marks Rules, 2017',
    ],
  },
  {
    id: 'money-recovery-and-legal-notices',
    number: '10',
    title: 'Money Recovery and Legal Notices',
    summary: 'Recovery of dues and pre-litigation notices.',
    fullDescription: 'Legal notices for unpaid bills and contracts, including non-payment for supplies on the Government e-Marketplace (GeM).',
    keyServices: [
      'Legal Demand Notices & Replies',
      'Money Suits & Summary Suits (Order XXXVII CPC)',
      'Decree Execution Proceedings',
    ],
    applicableForums: [
      'Civil Courts & Commercial Courts, Tinsukia, Dibrugarh & Guwahati',
    ],
    statutoryFramework: [
      'Code of Civil Procedure, 1908 & Indian Contract Act, 1872',
    ],
  },
  {
    id: 'shares-securities-and-investor-complaints',
    number: '11',
    title: 'Shares, Securities and Investor Complaints',
    summary: 'Recovery of shares and dividends, and complaints against listed companies and market intermediaries.',
    fullDescription: 'Documents for transmission, duplicate certificates and dematerialisation of physical shares, claims for shares and dividends transferred to the IEPF, and complaints on SEBI SCORES.',
    keyServices: [
      'Share Transmission, Duplicate Certificates & RTA Correspondence',
      'IEPF Unclaimed Shares & Dividend Recovery Claims',
      'SEBI SCORES Grievances & Succession Documentation for Securities',
    ],
    applicableForums: [
      'IEPF Authority, SEBI SCORES Portal & Stock Exchange Grievance Panels',
      'District Courts (Succession Certificate & Probate Proceedings)',
    ],
    statutoryFramework: [
      'Companies Act, 2013, SEBI Act, 1992 & Indian Succession Act, 1925',
    ],
  },
  {
    id: 'banking-loans-and-credit-reports',
    number: '12',
    title: 'Banking, Loans and Credit Reports',
    summary: 'Disputes with banks and lenders.',
    fullDescription: 'Legal notices to banks, loan restructuring representations, disputes over mortgaged property, and correction of errors in credit (CIBIL) reports.',
    keyServices: [
      'SARFAESI Representations & DRT Guwahati Proceedings',
      'RBI Ombudsman Complaints for Banking Deficiencies',
      'Rectification of Inaccurate CIBIL / Credit Bureau Reports',
    ],
    applicableForums: [
      'Debts Recovery Tribunal (DRT), Guwahati & RBI Integrated Ombudsman',
      'Consumer Commissions & Gauhati High Court',
    ],
    statutoryFramework: [
      'SARFAESI Act, 2002 & Credit Information Companies (Regulation) Act, 2005',
    ],
  },
  {
    id: 'business-documentation',
    number: '13',
    title: 'Business Documentation',
    summary: 'Documents for firms, LLPs and business arrangements.',
    fullDescription: 'Partnership deeds, including admission and retirement of partners, LLP agreements, settlement deeds, and commercial tenancy agreements.',
    keyServices: [
      'Partnership Deeds, Reconstitution & Dissolution Deeds',
      'Commercial Contracts, MoUs, Leases & Service Agreements',
      'Indemnity Bonds, Affidavits & Registration with Registrar of Firms',
    ],
    applicableForums: [
      'Registrar of Firms & Societies, Assam & Sub-Registrar Offices',
    ],
    statutoryFramework: [
      'Indian Contract Act, 1872 & Indian Partnership Act, 1932',
    ],
  },
  {
    id: 'trusts-and-societies',
    number: '14',
    title: 'Trusts and Societies',
    summary: 'Formation and registration of trusts and societies.',
    fullDescription: 'Trust deeds, registration of societies with their bye-laws, post-registration compliance, and representations before government authorities on the registration of institutions.',
    keyServices: [
      'Public Charitable & Private Trust Deed Drafting and Registration',
      'Society Formation & Bylaws under the Societies Registration Act, 1860',
      'Supplementary Deeds & Governing Body Documentation',
    ],
    applicableForums: [
      'Registrar of Firms & Societies, Assam & Sub-Registrar Offices',
    ],
    statutoryFramework: [
      'Societies Registration Act, 1860 & Indian Trusts Act, 1882',
    ],
  },
  {
    id: 'matrimonial-and-family-matters',
    number: '15',
    title: 'Matrimonial and Family Matters',
    summary: 'Matrimonial proceedings under the Hindu Marriage Act, 1955 and related family law.',
    fullDescription: 'Divorce and restitution petitions, interim maintenance and litigation expenses under Section 24, maintenance under the BNSS, and recovery of stridhan.',
    keyServices: [
      'Mutual Consent & Contested Matrimonial Petitions',
      'Maintenance, Custody & Guardianship Proceedings',
      'Succession Certificates, Probate & Letters of Administration',
    ],
    applicableForums: [
      'Family Courts & District Courts, Tinsukia, Dibrugarh & Guwahati',
      'Gauhati High Court',
    ],
    statutoryFramework: [
      'Hindu Marriage Act, 1955, Special Marriage Act, 1954 & Indian Succession Act, 1925',
    ],
  },
  {
    id: 'right-to-information',
    number: '16',
    title: 'Right to Information',
    summary: 'Applications and appeals under the Right to Information Act, 2005.',
    fullDescription: 'Drafting of RTI applications, first appeals, and second appeals before the Assam State Information Commission.',
    keyServices: [
      'Drafting of RTI Applications (Section 6)',
      'First Appeals Before Departmental Appellate Authorities',
      'Second Appeals & Complaints Before Information Commissions',
    ],
    applicableForums: [
      'Assam Information Commission, Guwahati & Central Information Commission',
    ],
    statutoryFramework: [
      'Right to Information Act, 2005',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [];

export const ADVOCATE_MILESTONES: AdvocateMilestone[] = [
  {
    year: '2008',
    title: 'Admission to the Bar & Federal Appellate Clerkship',
    description: 'Admitted to the Bar following graduation with honors from law school. Served a prestigious judicial clerkship for the Federal Court of Appeals, drafting opinions on complex constitutional, statutory, and commercial questions.',
  },
  {
    year: '2013',
    title: 'Senior Litigation Counsel in High-Stakes Chambers',
    description: 'Led trial advocacy in prominent commercial dispute chambers, representing institutional clients in contract breaches, injunctions, and contested corporate restructurings.',
  },
  {
    year: '2019',
    title: 'Establishment of Ankit Agarwal Law Chambers',
    description: 'Founded the independent practice to provide direct, partner-level counsel to entrepreneurs, founders, and individuals requiring principled, meticulous representation without impersonal firm bureaucracy.',
  },
  {
    year: '2023',
    title: 'Bar Council & Appellate Excellence Commendation',
    description: 'Recognized for meritorious advocacy in corporate governance jurisprudence and appointed as a designated mediator in high-stakes commercial disputes.',
  },
  {
    year: '2026',
    title: 'Pioneering Compliance with Legal Practice & Privacy Standards 2026',
    description: 'Fully integrated client data confidentiality systems conforming to the 2026 statutory standards for advocate privilege, digital protection, and transparent client communication.',
  },
];

export const COMPLIANCE_DISCLAIMER_2026 = {
  actName: 'Bar Council of India Regulations & Compliance Standards',
  leadParagraph: 'The Bar Council of India does not permit advocates to advertise or solicit work. By clicking “I Agree”, you confirm that:',
  bulletPoints: [
    'You are visiting this website on your own, to obtain information about Ankit Agarwal, Advocate, and Ankit Agarwal Law Chambers;',
    'There has been no advertisement, solicitation, invitation or inducement of any kind from the Chambers;',
    'The content is for general information only and is not legal advice;',
    'No advocate-client relationship is created by using this website or by contacting the Chambers through it;',
    'The Chambers is not responsible for any action taken on the basis of the information on this website.',
  ],
  fullLegalText: `Disclaimer

The Bar Council of India does not permit advocates to advertise or solicit work. By clicking “I Agree”, you confirm that:

• You are visiting this website on your own, to obtain information about Ankit Agarwal, Advocate, and Ankit Agarwal Law Chambers;
• There has been no advertisement, solicitation, invitation or inducement of any kind from the Chambers;
• The content is for general information only and is not legal advice;
• No advocate-client relationship is created by using this website or by contacting the Chambers through it;
• The Chambers is not responsible for any action taken on the basis of the information on this website.`,
  shortSummary: 'The Bar Council of India does not permit advocates to advertise or solicit work. The content on this website is for general information only and is not legal advice.',
};

export const LEGAL_INSIGHTS_ARTICLES: LegalArticle[] = [
  {
    id: 'commercial-arbitration-2026',
    title: 'Navigating Commercial Arbitration under New Statutory Protocols (2026)',
    category: 'Dispute Resolution & Arbitration',
    readTime: '5 min read',
    date: 'August 2026',
    summary: 'A strategic review of accelerated arbitral proceedings, emergency arbitrator powers, and cross-border enforcement protocols.',
    practiceAreaId: 'litigation-dispute-resolution',
    keyTakeaways: [
      'Statutory timelines for interim relief petitions require strict evidentiary readiness within 14 days.',
      'Emergency arbitrators now hold statutory recognition for issuing pre-tribunal protective asset freeze orders.',
      'Document disclosure rules have tightened to curb fishing expeditions in commercial disputes.',
    ],
    content: [
      'Commercial dispute resolution has entered an era prioritizing expedited determinations and minimized judicial interference. The latest 2026 statutory amendments redefine how tribunals manage preliminary hearings, evidentiary submissions, and interim measures.',
      'Parties engaging in domestic and international contracts must deliberately structure their arbitration clauses to specify the seat, governing procedural rules, and the jurisdiction of emergency arbitrators. Failure to specify seat versus venue continues to generate preventable appellate litigation.',
      'At Ankit Agarwal Law Chambers, our arbitration practice emphasizes pre-dispute risk auditing and disciplined evidentiary marshaling to secure favorable arbitral awards without protracted courtroom attrition.',
    ],
  },
  {
    id: 'corporate-governance-mergers',
    title: "Corporate Governance & Directors' Fiduciary Duties in Contested Mergers",
    category: 'Corporate & M&A',
    readTime: '6 min read',
    date: 'July 2026',
    summary: 'Essential due diligence steps, conflict-of-interest safeguards, and Delaware-standard board oversight in high-stakes corporate acquisitions.',
    practiceAreaId: 'mergers-acquisitions',
    keyTakeaways: [
      'Independent special committees must maintain complete arm’s-length advisory independence.',
      'Board minutes and financial fairness opinions require verifiable documentation of dissenting considerations.',
      'Post-closing indemnity caps must be harmonized with representation and warranty insurance (RWI) terms.',
    ],
    content: [
      'When corporate boards evaluate tender offers, unsolicited bids, or cross-border mergers, the legal scrutiny applied to fiduciary conduct is exacting. Directors are legally bound to uphold the business judgment rule by demonstrating informed, disinterested decision-making.',
      'A robust defense against minority shareholder derivative suits begins long before definitive transaction agreements are executed. Special committees must engage independent legal counsel and valuation experts to construct an impenetrable evidentiary record.',
      'Ankit Agarwal Law Chambers counsels corporate boards, founders, and private equity sponsors through high-value acquisitions, safeguarding managerial integrity and enterprise value.',
    ],
  },
  {
    id: 'ip-audits-software-assets',
    title: 'Intellectual Property Audits: Safeguarding Software & Proprietary Assets',
    category: 'Intellectual Property & Technology',
    readTime: '4 min read',
    date: 'June 2026',
    summary: 'Conducting comprehensive copyright, trademark portfolio, and trade secret health checks for growth technology enterprises.',
    practiceAreaId: 'intellectual-property-technology-law',
    keyTakeaways: [
      'Open-source license compliance audits prevent catastrophic copyleft infringement liabilities.',
      'Proprietary source code and algorithmic weights require multi-tiered non-disclosure and role-based access covenants.',
      'International trademark filings must be synchronized under the Madrid System before public product rollouts.',
    ],
    content: [
      'In tech-enabled and algorithmic enterprises, intangible assets frequently represent the vast majority of enterprise valuation. Yet many companies fail to formalize IP assignment agreements with early employees, founders, and contract developers.',
      'An annual IP audit identifies vulnerabilities in trademark registrations, expired patent maintenance windows, and ambiguous licensing provisions before institutional investors conduct financing due diligence.',
      'Our IP practice designs proactive defense frameworks, prosecutes trademark portfolios, and defends software trade secrets against competitive misappropriation.',
    ],
  },
  {
    id: 'legal-practice-privacy-standards',
    title: 'Legal Practice & Digital Personal Data Privacy Standards 2026',
    category: 'Regulatory Compliance & Privacy',
    readTime: '5 min read',
    date: 'May 2026',
    summary: 'Statutory obligations, attorney-client privileged digital handling, and cybersecurity protocols under the 2026 legal practice rules.',
    practiceAreaId: 'corporate-business-law',
    keyTakeaways: [
      'Electronic client communications require encrypted transmission and strict zero-third-party tracker policies.',
      'Data subject access requests must be harmonized with statutory legal privilege exceptions.',
      'Data retention periods for court case records require immutable archival compliance.',
    ],
    content: [
      'The intersection of digital personal data privacy statutes and the time-honored sanctity of advocate-client privilege has created new compliance obligations for practitioners and client enterprises alike.',
      'Under the 2026 standards, legal chambers and corporate legal departments must maintain rigorous data boundary isolation, ensuring that confidential litigation strategy and discovery documents remain tamper-proof.',
      'Ankit Agarwal Law Chambers operates on a zero-tracking digital architecture, ensuring that every client inquiry and privileged briefing remains strictly protected.',
    ],
  },
  {
    id: 'emergency-injunctions-asset-preservation',
    title: 'Enforcing Emergency Commercial Injunctions & Asset Preservation Orders',
    category: 'Litigation & Courtroom Defense',
    readTime: '7 min read',
    date: 'April 2026',
    summary: 'Strategic preparation of ex-parte interim injunction applications, balance of convenience tests, and irreparable harm proof in trial courts.',
    practiceAreaId: 'litigation-dispute-resolution',
    keyTakeaways: [
      'Prima facie case threshold requires clear documentary evidence of ongoing contractual breach.',
      'Irreparable harm arguments must establish that monetary damages alone cannot remedy the impending injury.',
      'Undertakings as to damages must be pre-calculated and vetted with client financial officers.',
    ],
    content: [
      'When an adversary attempts to dissipate assets, breach an exclusive covenant, or misappropriate proprietary blueprints, the difference between enterprise survival and catastrophic loss is measured in hours.',
      'Securing urgent judicial relief demands meticulous affidavits, incontrovertible chronological exhibits, and rapid filing readiness. Trial courts scrutinize ex-parte applications with immense caution to avoid premature prejudice.',
      'Ankit Agarwal, Advocate, brings extensive trial and courtroom experience to emergency injunction hearings, securing urgent restraining orders when critical commercial rights are threatened.',
    ],
  },
  {
    id: 'executive-severance-non-competes',
    title: 'Executive Severance, Non-Competes & Restrictive Covenants Landscape',
    category: 'Employment & Executive Counsel',
    readTime: '4 min read',
    date: 'March 2026',
    summary: 'Drafting enforceable post-employment restraints and navigating shifting statutory trade secret and non-solicitation protections.',
    practiceAreaId: 'employment-labor-law',
    keyTakeaways: [
      'Geographic and temporal scopes of non-competes must strictly reflect legitimate protectable business interests.',
      'Customer non-solicitation clauses must be carefully tailored to accounts with personal executive engagement.',
      'Garden leave compensation provisions enhance the judicial enforceability of restrictive covenants.',
    ],
    content: [
      'Statutory regulations governing restrictive covenants have undergone nationwide transformation. Overbroad non-compete agreements are routinely invalidated by courts seeking to protect talent mobility.',
      'Modern executive retention and severance agreements must rely instead on precise non-solicitation of clients, rigorous trade secret covenants, and enforceable garden leave mechanisms.',
      'Ankit Agarwal Law Chambers advises both corporate employers seeking to safeguard trade secrets and high-level executives negotiating employment contracts or separation packages.',
    ],
  },
];

