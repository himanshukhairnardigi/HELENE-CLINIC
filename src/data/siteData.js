/* =================================================================
   HELENE CLINIC INDIA — Site Data (DOCX-sourced, India LP)
   All content from the official India Landing Page brief.
   ================================================================= */

export const META = {
  title:         'Helene Clinic | Regenerative Medicine in Japan for Indian Patients',
  description:   'Explore whether stem cell-based regenerative medicine in Japan could be suitable for your diabetes or knee condition. Speak with our medical experts. Free suitability assessment.',
  keywords:      'stem cell therapy Japan, regenerative medicine Japan India, MSC therapy diabetes, knee osteoarthritis stem cell, Helene Clinic Japan',
  canonical:     'https://heleneclinic.com/india_lp/',
  ogImage:       '/og-helene-clinic-india.jpg',
  twitterHandle: '@heleneclinic',
  locale:        'en_IN',
};

export const CONTACT = {
  phone:      '+91 98100 00000',
  whatsapp:   '919810000000',
  email:      'india@heleneclinic.com',
  address:    'Omotesando, Tokyo, Japan',
  hours:      'Mon–Sat, 9:00 AM – 6:00 PM JST',
  clinicName: 'Omotesando Helene Clinic',
};

export const NAV = {
  logo: {
    text:    'HELENE CLINIC',
    tagline: 'Regenerative Medicine',
  },
  links: [
    { label: 'About',      href: '#about' },
    { label: 'Treatment',  href: '#treatment' },
    { label: 'Research',   href: '#research' },
    { label: 'Process',    href: '#process' },
    { label: 'FAQ',        href: '#faq' },
  ],
  cta: { label: 'Talk to Our Team', href: '#contact' },
};

/* ── HERO ── */
export const HERO = {
  preheading:  'Regenerative Medicine in Japan',
  headlines: [
    {
      condition: 'diabetes',
      headline:  'Still struggling with diabetes despite medications, diet and lifestyle changes?',
      sub:       'Regenerative medicine in Japan can be an option worth discussing with our medical experts.',
    },
    {
      condition: 'osteoarthritis',
      headline:  'Tired of living with knee pain and being told surgery is your only option?',
      sub:       'Discover whether stem cell-based regenerative medicine in Japan could be suitable for your condition.',
    },
  ],
  /* default shown headline */
  headline:    'Still struggling with diabetes despite medications, diet and lifestyle changes?',
  subheadline: 'Regenerative medicine in Japan can be an option worth discussing with our medical experts.',
  cta: {
    primary:   { label: 'Talk to Our Medical Team on WhatsApp', href: '#contact' },
    secondary: { label: 'Learn About Treatment',                href: '#about' },
  },
  trustBadges: [
    'Medical consultation by experts',
    'Treatment performed in Japan',
    'Regenerative medicine under Japanese regulatory framework',
    'Personalised suitability assessment',
  ],
  stats: [
    { value: '12+',    label: 'Years of\nExperience' },
    { value: '2,504',  label: 'Patients in\nSafety Study' },
    { value: '0.2%',   label: 'Major Adverse\nEvent Rate' },
    { value: '40+',    label: 'Countries\nServed' },
  ],
};

/* ── EMPATHY SECTION ── */
export const EMPATHY = {
  headline: "If You're Reading This, You've Probably Already Tried Everything.",
  intro:    "Maybe it's the diabetes that won't respond no matter how careful you are. Maybe it's the knee that makes you think twice before taking the stairs. Either way, you didn't land on this page by accident — you've already put in the work.",
  tabs: [
    {
      label: 'For Diabetes',
      key:   'diabetes',
      points: [
        'Years of metformin, insulin shots, and being told to "just manage your sugar"',
        'An HbA1c number that refuses to move, no matter how disciplined you are with diet and exercise',
        'The quiet, constant worry about complications — your kidneys, your eyes, your nerves',
        'Doctors who treat the lab report in front of them, not the life you\'re trying to live',
      ],
    },
    {
      label: 'For Knee Pain',
      key:   'osteoarthritis',
      points: [
        'Painkillers that dull the ache for a few hours and fix nothing',
        'Physiotherapy that helps for a week, until the pain creeps back',
        'Being told, sometimes as early as your 50s, that "replacement surgery is your only real option"',
        'Skipping stairs, skipping walks, sitting out when your grandchildren want to play',
      ],
    },
  ],
  closing: "Conventional treatment is built to manage symptoms. It was never designed to address what's happening inside your cells. That's the space regenerative medicine is being studied for — and why it matters which clinic you trust with it.",
  cta:     { label: 'Talk to an Expert', href: '#contact' },
};

/* ── WHY REGEN ── */
export const WHY_REGEN = {
  headline: 'What makes regenerative medicine different?',
  intro:    'Stem cells are being studied because of their potential regenerative and immunomodulatory properties. Researchers are exploring their role in:',
  points: [
    { icon: '🔬', title: 'Supporting tissue repair',         body: 'MSCs have been studied for their ability to support the body\'s natural repair processes at the cellular level.' },
    { icon: '🧬', title: 'Reducing inflammation',           body: 'Mesenchymal stem cells exhibit immunomodulatory properties that may help reduce chronic systemic inflammation.' },
    { icon: '⚙️', title: 'Improving cellular function',    body: 'Research suggests MSCs may support mitochondrial function and improve metabolic signalling in affected tissues.' },
    { icon: '🌱', title: 'Supporting quality of life',     body: 'Multiple studies report patient-reported improvements in energy, mobility, and daily function following MSC therapy.' },
  ],
  disclaimer: 'Stem cell therapy is not appropriate for everyone, and individual outcomes can vary. Always seek medical advice for your specific situation.',
};

/* ── WHY JAPAN ── */
export const WHY_JAPAN = {
  headline: 'Why do international patients choose Japan for regenerative medicine?',
  cards: [
    {
      icon:  '🏛️',
      title: 'Advanced regenerative medicine ecosystem',
      body:  'Japan operates under a dedicated Act on the Safety of Regenerative Medicine — one of the world\'s most progressive frameworks for clinical stem cell therapy.',
    },
    {
      icon:  '🔒',
      title: 'High clinical standards',
      body:  'Physician-supervised protocols, rigorous patient screening, and mandatory safety monitoring set Japan\'s clinical standards apart from many other destinations.',
    },
    {
      icon:  '🧫',
      title: 'GMP-compliant cell processing',
      body:  'Our Omotesando facility processes cells under pharmaceutical-grade Good Manufacturing Practice (GMP) conditions — ensuring consistent potency, purity, and safety.',
    },
    {
      icon:  '👨‍⚕️',
      title: 'Physician-supervised treatment protocols',
      body:  'Every treatment plan is designed and administered by specialist physicians, not delegated to technicians. Medical oversight is present throughout your stay.',
    },
    {
      icon:  '📚',
      title: 'Long-standing expertise in stem cell research',
      body:  'Japan has been at the forefront of stem cell research for decades. Helene Clinic draws on this institutional knowledge and clinical experience.',
    },
  ],
  cta: { label: 'Understand Treatment Options', href: '#treatment' },
};

/* ── WHY HELENE ── */
export const WHY_HELENE = {
  headline: 'Why Helene Clinic',
  cards: [
    { icon: '📅', title: 'More than a decade of regenerative medicine experience',    body: 'Helene Clinic has been performing regenerative medicine treatments since 2012 — building clinical knowledge across thousands of cases.' },
    { icon: '💉', title: 'Thousands of stem cell administrations performed',          body: 'Our clinical experience spans a wide range of conditions, patient profiles, and treatment protocols.' },
    { icon: '👩‍⚕️', title: 'Physician-led treatment protocols',                       body: 'Every patient receives a bespoke treatment plan designed by specialist physicians and reviewed by our medical board.' },
    { icon: '🌍', title: 'International patient support',                             body: 'Dedicated coordinators guide patients from initial enquiry to post-treatment follow-up, in multiple languages.' },
    { icon: '🛡️', title: 'Focus on patient safety and medical evaluation',           body: 'We will not offer treatment when evidence does not support it. Clinical integrity comes before case volume.' },
  ],
};

/* ── RESEARCH SECTION ── */
export const RESEARCH = {
  headline: 'Research that informs our approach',
  intro:    'Our clinical protocols are informed by published peer-reviewed research. Below are two key studies relevant to conditions we see most frequently.',
  studies: [
    {
      id:       'safety',
      badge:    'Safety Study',
      headline: 'Intravenous MSC Safety — Retrospective Analysis',
      detail:   'A retrospective study involving 2,504 patients receiving intravenous mesenchymal stem cell therapy reported:',
      findings: [
        'Major adverse cardiac and cerebrovascular event rate: 0.2%',
        'Minor adverse events: 0.8%',
        'No severe adverse events reported',
      ],
      note:     'These findings suggest a favorable safety profile, while further randomized studies are still needed.',
    },
    {
      id:       'diabetes',
      badge:    'Diabetes Study',
      headline: 'Type 2 Diabetes — Single IV MSC Infusion',
      detail:   'A study involving 61 patients with Type 2 Diabetes receiving a single intravenous MSC infusion reported:',
      findings: [
        'Average HbA1c reduction from 7.49% to 6.7%',
        'Greater improvements observed in severe diabetes cases',
        'Median follow-up exceeding three years',
        'No serious adverse events reported',
      ],
      note:     'Further randomized controlled studies are required to validate these findings.',
    },
  ],
  cta: { label: 'Discuss Whether You May Be a Suitable Candidate', href: '#contact' },
};

/* ── VIDEO SECTION ── */
export const VIDEO_SECTION = {
  headline:    'See How It Actually Works, Inside Our Tokyo Clinic',
  body:        'Rather than just take our word for it, here\'s a look inside the process itself — from how we collect and culture your own cells to how the infusion is administered, under Japan\'s regulatory framework for regenerative medicine.',
  youtubeId:   'JxVk7_Kpvt0',
  caption:     'Omotesando Helene Clinic — autologous stem cell collection, culturing, and administration.',
};

/* ── COMPARISON TABLES ── */
export const COMPARISON = {
  headline:    'What You\'ve Already Tried, vs. What This Offers',
  intro:       "Before you decide whether this is worth exploring, here's an honest look at how it compares to treatments you've likely already tried in India.",
  disclaimer:  'Cost figures shown for Indian treatment options are illustrative market ranges and may vary by provider, patient condition, and city. This is not a guarantee of outcome or savings. No treatment option is universally superior. Suitability depends on individual medical circumstances.',
  tables: [
    {
      id:      'diabetes',
      label:   'Type 2 Diabetes',
      columns: ['Option', 'Typical Cost in India', 'Frequency', 'What It Targets', 'Key Limitation'],
      rows: [
        {
          option:      'Oral hypoglycemics (e.g., metformin)',
          cost:        '₹1,500–4,000/month',
          frequency:   'Lifelong, daily',
          targets:     'Blood sugar symptom control',
          limitation:  "Doesn't address beta-cell decline; needs lifelong adherence",
          highlight:   false,
        },
        {
          option:      'Insulin therapy',
          cost:        '₹3,000–9,000/month',
          frequency:   'Lifelong, daily injections',
          targets:     'Blood sugar control',
          limitation:  "Doesn't address insulin resistance; daily injection burden",
          highlight:   false,
        },
        {
          option:      'Newer GLP-1 medications',
          cost:        '₹6,000–18,000/month',
          frequency:   'Lifelong',
          targets:     'Blood sugar + weight',
          limitation:  'High ongoing cost, indefinite use',
          highlight:   false,
        },
        {
          option:      'Bariatric/metabolic surgery',
          cost:        '₹2,50,000–4,50,000 (one-time)',
          frequency:   'One-time, major surgery',
          targets:     'Severe insulin resistance',
          limitation:  'Invasive, surgical risk, not suitable for everyone',
          highlight:   false,
        },
        {
          option:      'MSC IV therapy (Helene, Japan)',
          cost:        'Speak with coordinator',
          frequency:   'Single infusion, outpatient',
          targets:     'Underlying inflammation & metabolic environment (per published data)',
          limitation:  'Emerging therapy; long-term durability still being studied; travel required',
          highlight:   true,
        },
      ],
    },
    {
      id:      'osteoarthritis',
      label:   'Knee Osteoarthritis',
      columns: ['Option', 'Typical Cost in India', 'Frequency', 'What It Targets', 'Key Limitation'],
      rows: [
        {
          option:      'NSAIDs / painkillers',
          cost:        '₹1,000–3,000/month',
          frequency:   'Lifelong, daily',
          targets:     'Pain symptom relief',
          limitation:  'No cartilage repair; long-term GI/kidney risk',
          highlight:   false,
        },
        {
          option:      'Physiotherapy',
          cost:        '₹15,000–30,000/course',
          frequency:   'Ongoing, weekly',
          targets:     'Strength & mobility',
          limitation:  "Requires continual sessions; doesn't stop progression",
          highlight:   false,
        },
        {
          option:      'Intra-articular injections (PRP/HA)',
          cost:        '₹15,000–40,000/session',
          frequency:   'Repeated every 6–12 months',
          targets:     'Local joint lubrication/inflammation',
          limitation:  'Localised & temporary effect',
          highlight:   false,
        },
        {
          option:      'Knee/hip replacement surgery',
          cost:        '₹2,50,000–4,50,000/joint',
          frequency:   'One-time, major surgery',
          targets:     'Replaces the joint',
          limitation:  'Invasive, surgical/anaesthesia risk, age limitations',
          highlight:   false,
        },
        {
          option:      'MSC IV therapy (Helene, Japan)',
          cost:        'Speak with coordinator',
          frequency:   'Single infusion, outpatient',
          targets:     'Systemic anti-inflammatory & supportive effect',
          limitation:  'Not a substitute for joint replacement in severe structural damage; emerging evidence',
          highlight:   true,
        },
      ],
    },
  ],
};

/* ── PROCESS ── */
export const PROCESS = [
  {
    step:  '01',
    title: 'Share your medical reports on WhatsApp',
    body:  'Send your recent blood reports, imaging, or medical history to our team on WhatsApp. No commitment required at this stage.',
    icon:  '💬',
  },
  {
    step:  '02',
    title: 'Initial review by medical team',
    body:  'Our physicians review your case and assess whether regenerative medicine may be appropriate for your specific condition.',
    icon:  '🔍',
  },
  {
    step:  '03',
    title: 'Suitability assessment',
    body:  'You receive a personalised suitability assessment — honest, evidence-based, and at no cost to you.',
    icon:  '📋',
  },
  {
    step:  '04',
    title: 'Treatment discussion and planning',
    body:  'If appropriate, our team walks you through the proposed protocol, expected outcomes, costs, and your Japan visit itinerary.',
    icon:  '🗓️',
  },
  {
    step:  '05',
    title: 'Travel to Japan if appropriate',
    body:  'Most patients spend 4–6 days in Japan. We assist with visa letters, airport transfers, and accommodation.',
    icon:  '✈️',
  },
  {
    step:  '06',
    title: 'Post-treatment follow-up guidance',
    body:  'Structured check-ins at 1, 3, 6, and 12 months. Your coordinator remains available throughout your recovery.',
    icon:  '📞',
  },
];

/* ── ELIGIBILITY ── */
export const ELIGIBILITY = {
  headline: 'Am I a Candidate?',
  intro:    'Eligibility depends on your medical history, reports, and physician assessment. We assess every patient individually.',
  suitable: [
    'Adults with Type 2 Diabetes not adequately controlled with current medications',
    'Knee or hip osteoarthritis patients seeking alternatives to surgery',
    'Patients with chronic inflammation unresponsive to conventional treatment',
    'Individuals aged 18–80 with no active malignancy',
    'Patients in stable health seeking functional improvement',
    'Those willing to travel to Japan for treatment',
  ],
  notSuitable: [
    'Active cancer or haematological malignancy',
    'Uncontrolled systemic infection',
    'Pregnancy or breastfeeding',
    'Severe coagulopathy or active bleeding disorder',
    'Major surgery within the preceding 4 weeks',
    'Unstable cardiac or pulmonary conditions',
  ],
  note: 'This list is indicative only. All eligibility decisions are made by our medical team following full case review. We will never offer treatment where evidence does not support it.',
};

/* ── TESTIMONIALS ── */
export const TESTIMONIALS = [
  {
    name:      'Rajesh K.',
    location:  'Mumbai, India',
    condition: 'Knee Osteoarthritis',
    rating:    5,
    quote:     'I was told surgery was my only option. After speaking with the Helene team and travelling to Japan, the improvement has been remarkable. I\'m walking without pain for the first time in years.',
  },
  {
    name:      'Priya S.',
    location:  'Delhi, India',
    condition: 'Type 2 Diabetes',
    rating:    5,
    quote:     'My HbA1c had not moved in two years despite everything I tried. After treatment in Tokyo, my numbers improved in a way my own doctor found difficult to believe. I\'m genuinely hopeful for the first time.',
  },
  {
    name:      'Anand M.',
    location:  'Bangalore, India',
    condition: 'Knee Osteoarthritis',
    rating:    5,
    quote:     'The team was completely transparent — they told me exactly what to expect and didn\'t oversell. The process was smooth, the Tokyo clinic was world-class, and I have my mobility back.',
  },
  {
    name:      'Sunita R.',
    location:  'Hyderabad, India',
    condition: 'Type 2 Diabetes',
    rating:    5,
    quote:     'What struck me most was the honesty. They told me there are no guarantees, but gave me the research. Six months later, my medication has been reduced and I feel a quality of life I had lost years ago.',
  },
];

/* ── FAQS ── */
export const FAQS = [
  {
    q: 'Is stem cell therapy legal in Japan?',
    a: 'Regenerative medicine in Japan operates under specific regulatory frameworks and treatment protocols, including the Act on the Safety of Regenerative Medicine. Helene Clinic complies with all applicable Japanese regulatory standards governing stem cell administration.',
  },
  {
    q: 'Can you guarantee results?',
    a: 'No. Individual outcomes vary and no medical treatment can guarantee specific results. We present published research findings transparently and set realistic, condition-specific expectations during your pre-treatment consultation. We will not offer treatment when evidence does not support a patient\'s specific case.',
  },
  {
    q: 'How do I know if I am eligible?',
    a: 'Eligibility depends on your medical history, reports, and physician assessment. Share your recent medical reports with us on WhatsApp and our team will conduct a no-obligation suitability review. This process is free of charge.',
  },
  {
    q: 'How much does treatment cost?',
    a: 'Treatment recommendations and associated costs depend on individual evaluation, condition severity, and treatment plans. Please speak with our coordinator for a personalised cost estimate after your suitability assessment.',
  },
  {
    q: 'Is stem cell therapy safe?',
    a: 'Published studies have reported favorable safety outcomes, including a retrospective study of 2,504 patients that reported a major adverse event rate of 0.2%. All medical treatments involve potential risks and should be discussed with your physician. We screen every patient thoroughly before recommending treatment.',
  },
  {
    q: 'Do I need to travel to Japan?',
    a: 'Yes. Treatment is performed at our Omotesando Helene Clinic in Tokyo. Most patients require a stay of approximately 4–6 days. We assist with invitation letters for visa purposes, airport transfers, and preferred accommodation options near the clinic.',
  },
  {
    q: 'How do I get started?',
    a: 'The simplest first step is to share your recent medical reports with us on WhatsApp. Our medical team will review your case and come back to you with an honest assessment of whether treatment may be suitable. No obligation, no cost.',
  },
];

/* ── FOOTER ── */
export const FOOTER = {
  tagline:    'Regenerative medicine in Japan, accessible to patients from India.',
  disclaimer: 'Medical Disclaimer: Stem cell therapy outcomes vary between individuals. Published research findings referenced on this page represent study results and may not reflect individual outcomes. Nothing on this website constitutes medical advice. Treatment decisions should always be made in consultation with a qualified medical professional. Regenerative medicine in Japan operates under specific regulatory frameworks. Suitability for treatment is determined by physician assessment on a case-by-case basis.',
  columns: [
    {
      heading: 'Conditions',
      links: [
        { label: 'Type 2 Diabetes',     href: '#treatment' },
        { label: 'Knee Osteoarthritis', href: '#treatment' },
        { label: 'Other Conditions',    href: '#contact' },
      ],
    },
    {
      heading: 'Information',
      links: [
        { label: 'Why Japan',    href: '#why-japan' },
        { label: 'Why Helene',  href: '#about' },
        { label: 'Research',    href: '#research' },
        { label: 'Our Process', href: '#process' },
        { label: 'FAQ',         href: '#faq' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy',     href: '/privacy' },
        { label: 'Terms of Service',   href: '/terms' },
        { label: 'Medical Disclaimer', href: '/disclaimer' },
      ],
    },
  ],
  social: [
    { platform: 'YouTube',   href: 'https://www.youtube.com/@helene_clinic',        label: 'Helene Clinic on YouTube' },
    { platform: 'Instagram', href: 'https://www.instagram.com/helene_omotesandou/', label: 'Helene Clinic on Instagram' },
  ],
};

/* ── INQUIRY FORM ── */
export const INQUIRY_CONDITIONS = [
  'Type 2 Diabetes',
  'Knee Osteoarthritis',
  'Hip Osteoarthritis',
  'Rheumatoid Arthritis',
  'Other Autoimmune Condition',
  'Neurological Condition',
  'Anti-Ageing / Longevity',
  'Other — Please describe',
];
