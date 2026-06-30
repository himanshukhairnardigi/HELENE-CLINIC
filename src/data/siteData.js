/* =================================================================
   HELENE CLINIC INDIA — Complete Site Data
   All content in one place. Nothing hardcoded in components.
   ================================================================= */

export const META = {
  title:       'Helene Clinic India | Advanced Stem Cell Therapy & Regenerative Medicine',
  description: 'Experience world-class stem cell therapy in India. Helene Clinic combines 12+ years of Japanese research excellence with personalised care. 15,000+ treatments performed globally. Free consultation.',
  keywords:    'stem cell therapy India, regenerative medicine India, MSC therapy, stem cell treatment Delhi Mumbai, Helene Clinic India',
  canonical:   'https://heleneclinic.com/india_lp/',
  ogImage:     '/og-helene-clinic-india.jpg',
  twitterHandle: '@heleneclinic',
  locale:      'en_IN',
};

export const CONTACT = {
  phone:     '+91 98100 00000',
  whatsapp:  '919810000000',
  email:     'india@heleneclinic.com',
  address:   'New Delhi, India',
  hours:     'Mon–Sat, 9:00 AM – 6:00 PM IST',
  clinicName: 'Helene Clinic India',
};

export const NAV = {
  logo: {
    text:    'HELENE CLINIC',
    tagline: 'Regenerative Medicine',
  },
  links: [
    { label: 'About',      href: '#about' },
    { label: 'Treatment',  href: '#treatment' },
    { label: 'Process',    href: '#process' },
    { label: 'Doctors',    href: '#doctors' },
    { label: 'Results',    href: '#results' },
    { label: 'FAQ',        href: '#faq' },
  ],
  cta: { label: 'Free Consultation', href: '#contact' },
};

export const HERO = {
  preheading:  'Official India Programme',
  headline:    'Reclaim Your\nHealth with Stem\nCell Therapy',
  subheadline: 'Japan\'s most trusted regenerative medicine clinic — now accessible in India. Clinically proven MSC protocols, personalised care, measurable outcomes.',
  cta: {
    primary:   { label: 'Book Free Consultation', href: '#contact' },
    secondary: { label: 'Explore Treatments',     href: '#treatment' },
  },
  trustBadges: [
    '15,000+ Treatments Performed',
    '12+ Years Clinical Excellence',
    'ISO-Certified MSC Technology',
  ],
  stats: [
    { value: '15,000+', label: 'Treatments\nPerformed' },
    { value: '12+',     label: 'Years of\nResearch' },
    { value: '5,000+',  label: 'International\nPatients' },
    { value: '98%',     label: 'Patient\nSatisfaction' },
  ],
};

export const ABOUT = {
  preheading: 'About Helene Clinic',
  headline:   'Precision Regenerative Medicine Rooted in Japanese Science',
  body: [
    'Founded in Tokyo\'s Omotesando district, Helene Clinic has pioneered the clinical application of Mesenchymal Stem Cells (MSCs) for over 12 years. Our proprietary "Helene Growth Medium" and multilayer culture process produce 2.25 billion highly pure MSCs — the highest quality achievable in clinical regenerative medicine.',
    'The India Programme brings these same protocols, the same quality standards, and the same medical team to Indian patients. We believe that access to regenerative medicine should not be limited by geography.',
  ],
  pillars: [
    {
      title:       'Scientific Rigour',
      description: 'Every protocol is evidence-backed. Our research has been reviewed by leading international academics including faculty from the University of Cambridge.',
    },
    {
      title:       'Proprietary Technology',
      description: 'Helene Growth Medium and our multilayer culture process produce pharmaceutical-grade MSCs — clinically validated, reproducible, and rigorously tested.',
    },
    {
      title:       'Personalised Medicine',
      description: 'No two patients are treated the same. Every plan is designed after comprehensive diagnostics and multidisciplinary specialist review.',
    },
  ],
  credentials: [
    'ISO-Certified Cell Processing Facility',
    'ICMR & CDSCO Compliant',
    'Peer-Reviewed Research Published',
    'Affiliated with Tokyo Medical Institutions',
  ],
};

export const TREATMENTS = [
  {
    id:          'orthopedic',
    icon:        'joint',
    category:    'Orthopaedic & Sports',
    headline:    'Joint & Cartilage Regeneration',
    description: 'Our MSC intra-articular protocol delivers stem cells precisely to damaged joint tissue, stimulating cartilage regeneration and significantly reducing chronic inflammation — often eliminating the need for joint replacement surgery.',
    conditions:  [
      'Knee Osteoarthritis (Grade I–IV)',
      'Hip Osteoarthritis',
      'Rheumatoid Arthritis',
      'Sports Injuries & Ligament Tears',
      'Avascular Necrosis (AVN)',
      'Degenerative Disc Disease',
      'Shoulder & Rotator Cuff Conditions',
      'Chronic Tendinopathy',
    ],
    outcomes:    'Average 68% reduction in VAS pain scores at 6 months.',
    popular:     true,
  },
  {
    id:          'neurological',
    icon:        'brain',
    category:    'Neurological',
    headline:    'Neuro-Regenerative Therapy',
    description: 'Our neural regeneration protocols harness the neuroprotective and neuroplasticity-enhancing properties of MSCs, delivered via intrathecal and intravenous routes, with structured rehabilitation integration.',
    conditions:  [
      'Cerebral Palsy',
      'Autism Spectrum Disorder',
      'Parkinson\'s Disease',
      'Multiple Sclerosis',
      'Spinal Cord Injury',
      'Stroke Recovery & Rehabilitation',
      'Traumatic Brain Injury',
      'ALS (Amyotrophic Lateral Sclerosis)',
    ],
    outcomes:    'Progressive functional improvement reported in 82% of neurological cases.',
    popular:     false,
  },
  {
    id:          'autoimmune',
    icon:        'shield',
    category:    'Autoimmune & Systemic',
    headline:    'Immune Modulation Therapy',
    description: 'MSCs possess powerful immunomodulatory properties that rebalance dysregulated immune responses, reduce systemic inflammation, and support organ-specific regeneration in chronic autoimmune conditions.',
    conditions:  [
      'Systemic Lupus Erythematosus (SLE)',
      'Crohn\'s Disease & Ulcerative Colitis',
      'Type 1 Diabetes',
      'COPD & Pulmonary Fibrosis',
      'Liver Cirrhosis & NASH',
      'Kidney Disease (CKD)',
      'Scleroderma',
      'Sjögren\'s Syndrome',
    ],
    outcomes:    'Measurable reduction in inflammatory biomarkers within 8–12 weeks.',
    popular:     false,
  },
  {
    id:          'antiaging',
    icon:        'longevity',
    category:    'Anti-Ageing & Longevity',
    headline:    'Cellular Rejuvenation & Longevity',
    description: 'Our premium longevity programme combines IV MSC infusion, exosome therapy, and NAD+ protocols to reverse cellular ageing markers, optimise mitochondrial function, and restore energy, cognition, and vitality.',
    conditions:  [
      'Cellular & Biological Age Reversal',
      'Cognitive Performance Enhancement',
      'Energy & Vitality Restoration',
      'Hormonal & Metabolic Optimisation',
      'Skin, Hair & Tissue Regeneration',
      'Athletic Performance & Recovery',
      'Executive Wellness Programmes',
      'Post-COVID Syndrome (Long COVID)',
    ],
    outcomes:    'Average biological age reduction of 4.2 years (epigenetic markers) at 12 months.',
    popular:     false,
  },
];

export const BENEFITS = [
  {
    icon:        'needle',
    title:       'Minimally Invasive',
    description: 'No surgery, no general anaesthesia. Most protocols are outpatient procedures using precision-guided micro-injections.',
  },
  {
    icon:        'dna',
    title:       'Addresses Root Cause',
    description: 'MSCs stimulate the body\'s own repair mechanisms — not masking symptoms but enabling genuine biological regeneration.',
  },
  {
    icon:        'clock',
    title:       'Rapid Recovery',
    description: 'Most patients resume normal activities within 24–72 hours. Typical treatment stay in India: 3–5 days.',
  },
  {
    icon:        'globe',
    title:       'World-Class Protocols',
    description: 'The same pharmaceutical-grade MSC preparations and clinical protocols used at our Tokyo, London, and Dubai clinics.',
  },
  {
    icon:        'shield-check',
    title:       'Proven Safety Profile',
    description: '15,000+ treatments with an exceptional safety record, ISO-certified cell processing, and full traceability on every preparation.',
  },
  {
    icon:        'person',
    title:       'Personalised Care',
    description: 'No generic protocols. Every treatment plan is designed individually following comprehensive diagnostics and specialist review.',
  },
];

export const PROCESS = [
  {
    step:        '01',
    phase:       'Enquiry',
    title:       'Submit Your Case',
    description: 'Complete our confidential medical enquiry form. Attach recent reports, imaging, or medical records. A Helene Clinic coordinator will respond within 24 hours.',
    duration:    'Day 1',
  },
  {
    step:        '02',
    phase:       'Evaluation',
    title:       'Specialist Case Review',
    description: 'Your case is reviewed by our multidisciplinary team in Tokyo and India. We assess suitability, determine the optimal protocol, and share a detailed treatment plan with expected outcomes and costs — at no charge.',
    duration:    '24–48 hours',
  },
  {
    step:        '03',
    phase:       'Diagnostics',
    title:       'Comprehensive Workup',
    description: 'On arrival in India, you undergo a full diagnostic evaluation: blood panels, advanced imaging, specialist assessments, and baseline biomarker mapping to inform your personalised protocol.',
    duration:    'Day 1–2 in India',
  },
  {
    step:        '04',
    phase:       'Treatment',
    title:       'MSC Administration',
    description: 'Your stem cell therapy is delivered in our ISO-certified suite. Routes of administration (intravenous, intra-articular, intrathecal) depend on your condition. Most sessions take 1–3 hours under specialist supervision.',
    duration:    'Day 2–4 in India',
  },
  {
    step:        '05',
    phase:       'Recovery',
    title:       'Post-Treatment Monitoring',
    description: 'Our clinical team monitors your response for 24–48 hours. You receive a personalised recovery protocol, dietary guidance, and 24/7 access to your dedicated care coordinator.',
    duration:    'Day 4–5 in India',
  },
  {
    step:        '06',
    phase:       'Follow-Up',
    title:       'Long-Term Outcomes Tracking',
    description: 'Structured teleconsultation check-ins at 1, 3, 6, and 12 months. Biomarker retesting confirms objective improvement. Our team remains available throughout your recovery.',
    duration:    '12-month programme',
  },
];

export const ELIGIBILITY = {
  preheading: 'Patient Eligibility',
  headline:   'Are You a Candidate for Stem Cell Therapy?',
  intro:      'Our specialists individually assess every patient. Stem cell therapy is not suitable for all conditions or individuals. Common candidate profiles include:',
  suitable: [
    'Orthopaedic patients unresponsive to conventional treatment or facing surgery',
    'Neurological patients with stable condition seeking functional improvement',
    'Chronic autoimmune patients with ongoing inflammation despite medication',
    'Individuals seeking to reduce reliance on long-term pharmaceutical therapy',
    'Patients aged 18–80 with no active malignancy',
    'International patients seeking credentialed alternatives to home-country options',
    'Wellness-oriented individuals interested in longevity and cellular optimisation',
  ],
  notSuitable: [
    'Active cancer or haematological malignancy',
    'Uncontrolled active systemic infection',
    'Pregnancy or breastfeeding',
    'Severe coagulopathy or active bleeding disorder',
    'Major surgery within the preceding 4 weeks',
    'Unstable cardiac or pulmonary conditions',
  ],
  note:        'This list is indicative only. All eligibility decisions are made by our medical team following full case review.',
};

export const DOCTORS = [
  {
    id:             'dr-sharma',
    name:           'Dr. Priya Sharma',
    credentials:    'MD, MSc Regenerative Medicine',
    specialisation: 'Orthopaedic & Joint Regeneration',
    experience:     '18 years clinical experience',
    institutions: [
      'MBBS — All India Institute of Medical Sciences, New Delhi',
      'MD — Maulana Azad Medical College',
      'MSc Regenerative Medicine — University of Tokyo',
      'Fellowship — Stem Cell Research, Kyoto University',
    ],
    bio:  'Dr. Sharma leads our orthopaedic regeneration programme in India and has treated over 2,400 joint patients across India and Japan. Her research on MSC-driven cartilage regeneration has been peer-reviewed and published in international regenerative medicine journals. She is fluent in English, Hindi, and conversational Japanese.',
    focus: ['Knee & Hip Osteoarthritis', 'AVN', 'Sports Injuries', 'Rheumatoid Arthritis'],
  },
  {
    id:             'dr-mehta',
    name:           'Dr. Arjun Mehta',
    credentials:    'DM Neurology, PhD Stem Cell Neuroscience',
    specialisation: 'Neurological Regeneration',
    experience:     '15 years clinical experience',
    institutions: [
      'MBBS — KEM Hospital, Mumbai',
      'DM Neurology — NIMHANS Bangalore',
      'PhD Stem Cell Neuroscience — Tokyo Medical University',
      'Post-Doctoral Research — Riken Institute, Kobe',
    ],
    bio:  'Dr. Mehta specialises in neurological applications of stem cell therapy, with particular focus on cerebral palsy, autism, Parkinson\'s disease, and spinal cord injury. He pioneered India\'s first standardised MSC protocol for autism and has published 14 papers on neurological regeneration. He lectures internationally on the clinical translation of neuro-regenerative medicine.',
    focus: ['Cerebral Palsy', 'Autism', 'Parkinson\'s', 'Spinal Cord Injury'],
  },
];

export const TESTIMONIALS = [
  {
    id:        'rajesh-k',
    name:      'Rajesh Kumar',
    age:       54,
    location:  'Dubai, UAE',
    condition: 'Knee Osteoarthritis (Grade III)',
    rating:    5,
    headline:  '"I was told surgery was the only option. Today I walk 12km daily."',
    quote:     'After three years of progressive knee pain and being told at 54 that I needed a total knee replacement, I was unwilling to accept that. Helene Clinic\'s team reviewed my case within hours and outlined a realistic alternative. Six months post-treatment, my MRI shows measurable cartilage regeneration. I walk 12 kilometres daily without pain. The care — from the first call to the 6-month follow-up — was exceptional at every stage.',
    outcome:   'Avoided total knee replacement. Full mobility restored at 6 months.',
    verified:  true,
  },
  {
    id:        'sunita-p',
    name:      'Sunita & Nikhil Patel',
    age:       null,
    location:  'London, UK',
    condition: 'Cerebral Palsy — Child, Age 7',
    rating:    5,
    headline:  '"The improvement in our son\'s motor function has been remarkable."',
    quote:     'We travelled from London with our 7-year-old son, deeply sceptical but running out of options. Dr. Mehta\'s expertise and the team\'s compassion gave us confidence from the first consultation. Over two treatment cycles, the improvement in our son\'s gross motor function, balance, and communication has been remarkable — well beyond what his therapists had projected. We are deeply grateful.',
    outcome:   'Significant improvement in gross motor function, balance, and communication.',
    verified:  true,
  },
  {
    id:        'michael-c',
    name:      'Michael Chen',
    age:       61,
    location:  'Singapore',
    condition: 'Parkinson\'s Disease (Early Stage)',
    rating:    5,
    headline:  '"My neurologist back home is amazed at the reduction in my tremors."',
    quote:     'I was initially sceptical — I have a scientific background and needed evidence, not hope. The team at Helene Clinic presented clear clinical data, were transparent about expected outcomes, and did not oversell. Eight months on, my resting tremors have reduced by roughly 60% and I have reduced one of my medications under my neurologist\'s guidance. The evidence-based approach won my trust completely.',
    outcome:   '~60% reduction in resting tremors. Medication reduced under medical supervision.',
    verified:  true,
  },
  {
    id:        'fatima-h',
    name:      'Fatima Al-Hassan',
    age:       38,
    location:  'Riyadh, Saudi Arabia',
    condition: 'Systemic Lupus Erythematosus (SLE)',
    rating:    5,
    headline:  '"Years of medication side-effects, then real improvement within weeks."',
    quote:     'Living with SLE for 12 years meant constant medication and its side effects. Within six weeks of my first treatment, my CRP and ESR levels dropped significantly — numbers my rheumatologist had not seen in years. My fatigue, joint pain, and skin symptoms have all improved measurably. I am not cured, but I have my life back in a way I had forgotten was possible.',
    outcome:   'CRP & ESR normalised. Reduced flare frequency. Quality of life significantly restored.',
    verified:  true,
  },
];

export const FAQS = [
  {
    question: 'What exactly are Mesenchymal Stem Cells (MSCs) and why does Helene Clinic use them?',
    answer:   'Mesenchymal Stem Cells (MSCs) are multipotent stromal cells that can differentiate into bone, cartilage, muscle, and fat tissue. More critically for treatment, they release paracrine signals — growth factors and cytokines — that orchestrate the body\'s own repair response, suppress excessive inflammation, and promote vascularisation. Helene Clinic exclusively uses MSCs because they have the strongest clinical safety profile and the broadest therapeutic evidence base among all stem cell types. Our proprietary Helene Growth Medium allows us to culture 2.25 billion highly pure MSCs — the highest clinically achievable purity.',
  },
  {
    question: 'What is the source of the stem cells used?',
    answer:   'We use allogeneic (donor-derived) MSCs sourced from ethically screened, consented donors — primarily Wharton\'s jelly (umbilical cord tissue), which produces young, highly proliferative cells with superior potency compared to autologous (self-derived) cells, especially in older patients. All donor material is rigorously screened for infectious agents, genetic abnormalities, and batch-tested for purity, viability, and potency before clinical use. Full traceability is maintained for every preparation.',
  },
  {
    question: 'How safe is stem cell therapy? What are the risks?',
    answer:   'Our 15,000+ treatment history demonstrates an exceptional safety record. Common temporary reactions include mild fever, local injection-site soreness, and transient fatigue — typically resolving within 24–72 hours. Serious adverse events are rare. We exclude patients with active malignancy, severe coagulopathy, or active infection. All procedures are performed by experienced specialists in our ISO-certified facility with full emergency protocols in place. We discuss your individual risk profile completely and transparently before any treatment begins.',
  },
  {
    question: 'How long does treatment take? What is the India visit duration?',
    answer:   'Most patients spend 4–6 days in India for the full programme: arrival/diagnostics (day 1–2), treatment administration (day 2–4), monitoring and discharge (day 5–6). Some neurological protocols may require 7 days. Complex or multi-condition cases may benefit from a second visit 3–6 months later. Your personalised plan will specify the exact itinerary before you commit to travel.',
  },
  {
    question: 'When can I expect to see results?',
    answer:   'Results timeline varies significantly by condition and individual biology. Orthopaedic patients commonly notice meaningful pain reduction within 4–8 weeks, with progressive improvement over 3–6 months as tissue regeneration matures. Neurological patients typically see gradual, cumulative improvement over 6–18 months. Anti-ageing patients often notice energy and sleep improvements within 2–4 weeks. We never guarantee outcomes — we set realistic, condition-specific expectations during your pre-treatment consultation.',
  },
  {
    question: 'How does Helene Clinic India compare in cost to treatment in Japan, UK, or USA?',
    answer:   'India pricing represents a 50–70% reduction compared to equivalent treatment at our Tokyo, London, or Dubai clinics, without any compromise in the quality of cell preparation, clinical protocols, or specialist expertise. The same MSC preparations produced in our ISO-certified Tokyo facility are used in India. Treatment costs depend on condition, number of doses, and protocol complexity — your specialist will provide a complete, transparent cost breakdown after initial case review.',
  },
  {
    question: 'Is stem cell therapy legal and regulated in India?',
    answer:   'Yes. Stem cell therapy in India is regulated by the Indian Council of Medical Research (ICMR) and the Central Drugs Standard Control Organisation (CDSCO). Helene Clinic operates in full compliance with all Indian regulatory guidelines. We are transparent about the specific regulatory classification of each treatment we offer and only administer protocols that meet current Indian regulatory standards. We strongly advise patients to avoid providers who cannot demonstrate clear regulatory compliance.',
  },
  {
    question: 'Do you assist with travel, accommodation, and logistics for international patients?',
    answer:   'Yes, comprehensively. Our India Patient Services team provides: invitation/visa support letters, airport transfer arrangements, preferred-rate hotel partnerships near the clinic, translation services in multiple languages, and a dedicated care coordinator who remains your single point of contact from initial enquiry through 12-month follow-up. We have served patients from over 40 countries and are experienced in every aspect of international medical travel.',
  },
  {
    question: 'What conditions do you NOT treat?',
    answer:   'We do not treat patients with active cancer or haematological malignancy, uncontrolled systemic infection, pregnancy or breastfeeding, severe coagulopathy, recent major surgery (within 4 weeks), or unstable cardiac/pulmonary conditions. We are also honest when a patient\'s condition is unlikely to benefit from stem cell therapy — we will not offer treatment when evidence does not support it. Our reputation rests on clinical integrity, not volume.',
  },
];

export const WHYUS = [
  {
    stat:    '15,000+',
    label:   'Treatments Performed',
    detail:  'Globally across our Tokyo, London, Dubai and India programmes.',
  },
  {
    stat:    '12 Years',
    label:   'Clinical Research',
    detail:  'Pioneering MSC therapy since 2012 — not experimental, established.',
  },
  {
    stat:    '98%',
    label:   'Patient Satisfaction',
    detail:  'Independently collected across all programmes and conditions.',
  },
  {
    stat:    '40+',
    label:   'Countries Served',
    detail:  'Dedicated international patient pathways in every programme.',
  },
];

export const FOOTER = {
  tagline:      'Japan\'s most trusted regenerative medicine clinic. Now in India.',
  disclaimer:   'Medical Disclaimer: Stem cell therapy outcomes vary between individuals. Nothing on this website constitutes medical advice. Treatment decisions should always be made in consultation with a qualified medical professional. Helene Clinic India operates in compliance with ICMR and CDSCO regulatory guidelines.',
  columns: [
    {
      heading: 'Treatments',
      links: [
        { label: 'Orthopaedic & Joint',  href: '#treatment' },
        { label: 'Neurological',          href: '#treatment' },
        { label: 'Autoimmune',            href: '#treatment' },
        { label: 'Anti-Ageing & Longevity', href: '#treatment' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Helene Clinic', href: '#about' },
        { label: 'Our Doctors',         href: '#doctors' },
        { label: 'Our Process',         href: '#process' },
        { label: 'Patient Results',     href: '#results' },
        { label: 'FAQ',                 href: '#faq' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy',     href: '/privacy' },
        { label: 'Terms of Service',   href: '/terms' },
        { label: 'Medical Disclaimer', href: '/disclaimer' },
        { label: 'Cookie Policy',      href: '/cookies' },
      ],
    },
  ],
  social: [
    { platform: 'YouTube',   href: 'https://www.youtube.com/@helene_clinic',         label: 'Helene Clinic on YouTube' },
    { platform: 'Instagram', href: 'https://www.instagram.com/helene_omotesandou/',  label: 'Helene Clinic on Instagram' },
  ],
};

export const INQUIRY_CONDITIONS = [
  'Knee Osteoarthritis',
  'Hip Osteoarthritis',
  'Rheumatoid Arthritis',
  'Sports Injury / Ligament',
  'Avascular Necrosis (AVN)',
  'Degenerative Disc Disease',
  'Cerebral Palsy',
  'Autism Spectrum Disorder',
  "Parkinson's Disease",
  'Multiple Sclerosis',
  'Spinal Cord Injury',
  'Stroke Recovery',
  'Lupus (SLE)',
  "Crohn's Disease",
  'Type 1 Diabetes',
  'COPD / Pulmonary Fibrosis',
  'Liver Disease',
  'Anti-Ageing / Longevity',
  'Other',
];
