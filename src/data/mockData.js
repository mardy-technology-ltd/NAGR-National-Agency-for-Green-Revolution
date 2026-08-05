// NAGR Bangladesh Authentic Operational & Historical Dataset
// Derived from Official Website Analysis & Field Report (nagrbangladesh.org)

export const navigationMenu = [
  { id: 'home', title: 'Home', href: '/' },
  {
    id: 'who-we-are',
    title: 'Who We Are',
    href: '/who-we-are',
    submenu: [
      { id: 'intro', title: 'Introduction', href: '/who-we-are/intro', category: 'about' },
      { id: 'mission-vision', title: 'Mission & Vision', href: '/who-we-are/mission-vision', category: 'about' },
      { id: 'where-we-work', title: 'Where We Work', href: '/who-we-are/where-we-work', category: 'about' },
      { id: 'legal-status', title: 'Legal Status', href: '/who-we-are/legal-status', category: 'about' },
      { id: 'chairmans-speech', title: "Chairman's Speech", href: '/who-we-are/chairmans-speech', category: 'speech' },
      { id: 'directors-speech', title: "Executive Director's Speech", href: '/who-we-are/directors-speech', category: 'speech' },
      { id: 'executive-committee', title: 'Executive Committee', href: '/who-we-are/executive-committee', category: 'team' },
      { id: 'management-team', title: 'Management Team', href: '/who-we-are/management-team', category: 'team' }
    ]
  },
  {
    id: 'what-we-do',
    title: 'What We Do',
    href: '/what-we-do',
    submenu: [
      { id: 'project-wise', title: 'Project wise', href: '/what-we-do' },
      {
        id: 'education',
        title: 'Education',
        href: '/what-we-do/tabitha-kindergarten-school',
        hasNested: true,
        nestedItems: [
          { id: 'tks', title: 'Multilingual Education (MLE)' },
          { id: 'pre-primary', title: '14 Primary & Pre-primary Schools' },
          { id: 'sishu-bikas', title: 'Amnura Sishu Bikas Kendro' },
          { id: 'nazipur-hostel', title: 'Nazipur Girls Hostel (65 Students)' },
          { id: 'sharp', title: 'Tabitha Kindergarten School' }
        ]
      },
      {
        id: 'health',
        title: 'Health',
        href: '/projects/health-hospital',
        hasNested: true,
        nestedItems: [
          { id: 'hospital', title: 'Amnura Lutheran Mission Hospital (Reg: 4472)' },
          { id: 'clinic', title: 'Adompur Lutheran Mission Clinic' },
          { id: 'covid19', title: 'Clean Water & Deep Tube-well Project' },
          { id: 'nutrition', title: 'Maternal & Newborn Care (1M+ Deliveries)' }
        ]
      },
      { id: 'kdp', title: 'Kol Community Library & Research Center', href: '/what-we-do/kdp' },
      {
        id: 'economic',
        title: 'Economic Development',
        href: '/projects/economic-savings',
        hasNested: true,
        nestedItems: [
          { id: 'social-dev', title: 'Women Handicraft & Micro-Enterprise' },
          { id: 'saving-awareness', title: 'Community Savings & Financial Literacy' }
        ]
      }
    ]
  },
  {
    id: 'partners',
    title: 'Our Partners',
    href: '/partners/core',
    submenu: [
      { id: 'core-partners', title: 'Core Partners', href: '/partners/core' },
      { id: 'dev-partners', title: 'Development Partners', href: '/partners/development' },
      { id: 'govt-partners', title: 'Govt. Alliances', href: '/partners/govt' },
      { id: 'staff-network', title: 'Staff & Field Network (117 Staff)', href: '/partners/staff' }
    ]
  },
  {
    id: 'reports',
    title: 'Reports & Publication',
    href: '/reports',
    submenu: [
      { id: 'annual-report', title: 'Annual Report', href: '/reports/annual-report' },
      { id: 'strategic-focus', title: "NAGR's Strategic Focus Areas", href: '/reports/strategic-focus' },
      { id: 'santal-times', title: 'The Santal Times (www.santalstimes.com)', href: '/reports/santal-times' },
      { id: 'photo-gallery', title: 'Photo Gallery', href: '/reports/photo-gallery' },
      { id: 'video-pub', title: 'Video Publication', href: '/reports/video-publication' },
      { id: 'study-research', title: 'Study & Research Reports', href: '/reports/study-research' },
      { id: 'success-stories', title: 'Success Stories', href: '/reports/success-story' },
      { id: 'donate-page', title: 'Donate Page', href: '/donate' }
    ]
  },
  {
    id: 'career',
    title: 'Career & Notice',
    href: '/career',
    submenu: [
      { id: 'vacancy', title: 'Current Vacancies', href: '/career?type=vacancy' },
      { id: 'job-circular', title: 'Job Circulars', href: '/career?type=job-circular' },
      { id: 'internship', title: 'Internship Program', href: '/career?type=internship' },
      { id: 'tender', title: 'Procurement & Tenders', href: '/career?type=tender' },
      { id: 'notice', title: 'Official Notices', href: '/career?type=notice' },
      { id: 'result', title: 'Recruitment Results', href: '/career?type=result' }
    ]
  },
  { id: 'contact', title: 'Contact Us', href: '/contact' }
];

export const heroSlides = [
  {
    id: 1,
    title: "Empowering Indigenous & Rural Communities since 1981",
    subtitle: "NAGR (National Agency for Green Revolution) operates under the motto 'Service to Creation means Service to the Creator' across Northern Bangladesh.",
    badge: "Established Oct 15, 1981",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&auto=format&fit=crop&q=80",
    ctaPrimary: "Explore Projects",
    ctaPrimaryLink: "/#projects",
    ctaSecondary: "Donate Now",
    ctaSecondaryLink: "/donate"
  },
  {
    id: 2,
    title: "Multilingual Education (MLE) & Nazipur Girls Hostel",
    subtitle: "Operating 14 Primary & Pre-primary schools, Nazipur Girls Hostel (65 Santal female scholars), and mother-tongue early learning in partnership with MCC Bangladesh.",
    badge: "Education & Literacy",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&auto=format&fit=crop&q=80",
    ctaPrimary: "Our Education Initiatives",
    ctaPrimaryLink: "/what-we-do/tabitha-kindergarten-school",
    ctaSecondary: "Read Success Stories",
    ctaSecondaryLink: "/success-stories"
  },
  {
    id: 3,
    title: "Amnura Lutheran Mission Hospital (3.1M+ Patients Served)",
    subtitle: "Providing 24/7 maternal healthcare, 1M+ safe deliveries (Reg No: 4472), Adompur Clinic, and clean water deep tube-well installations.",
    badge: "Health & Welfare",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1600&auto=format&fit=crop&q=80",
    ctaPrimary: "Health Care Programs",
    ctaPrimaryLink: "/projects/health-hospital",
    ctaSecondary: "Partner With Us",
    ctaSecondaryLink: "/partners/core"
  }
];

export const impactStats = [
  { label: "Direct Beneficiaries", value: "9,000+", icon: "Users" },
  { label: "Core Projects", value: "8+", icon: "Briefcase" },
  { label: "Working Districts", value: "6", icon: "MapPin" },
  { label: "Primary & Pre-primary Schools", value: "14", icon: "GraduationCap" },
  { label: "Full-Time NGO Staff", value: "117", icon: "HeartHandshake" }
];

export const servicesData = [
  {
    id: "serv-edu",
    title: "Multilingual Primary & Pre-primary Education",
    tagline: "Operating 14 Schools for Indigenous Children",
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    desc: "NAGR operates 5 Primary Schools (Bilboiltha, Amnura, Badhair, Kolnaka, Jhinaphulbari), 7 Pre-primary Preparatory Schools, Tabitha Kindergarten, and Amnura Sishu Bikas Kendro. Providing mother-tongue Santali education in collaboration with MCC Bangladesh."
  },
  {
    id: "serv-covid",
    title: "COVID-19 & Dengue Community Awareness",
    tagline: "28 Villages Coverage & 5 Volunteer Action Teams",
    icon: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800",
    desc: "Deploying 5 specialized volunteer groups across 28 rural villages in Chapainawabganj and Naogaon. Distributing medical masks, hand sanitizers, dengue mosquito nets, and hygiene kits."
  },
  {
    id: "serv-hygiene",
    title: "Rural Hygiene & Safe Drinking Water",
    tagline: "Deep Tube-wells & Sanitary Facilities since 2008",
    icon: "Droplets",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=800",
    desc: "Installing deep tube-wells and constructing sanitary latrines in remote Barind hamlets to eradicate water-borne diseases in partnership with New Start in East Norway."
  },
  {
    id: "serv-relief",
    title: "Emergency Disaster Relief & Winter Warmth",
    tagline: "Blanket Distribution & Emergency Flood Support",
    icon: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
    desc: "Providing immediate humanitarian relief during severe winter cold spells and seasonal monsoon flooding, distributing high-quality fleece blankets and dry food rations to 3,000 vulnerable families."
  },
  {
    id: "serv-vaccine",
    title: "Adolescent Vaccination & Healthcare Drives",
    tagline: "Teen Immunization & Maternal Care Camps",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800",
    desc: "Organizing mobile healthcare drives and adolescent vaccination camps across 6 working districts in coordination with Amnura Lutheran Mission Hospital (DGHS Reg: 4472)."
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Stephen Soren",
    role: "Executive Director Cum General Secretary",
    office: "Dhaka Head Office / Field Wing",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
    bio: "Over 25 years leading NAGR's indigenous rights, Multilingual Education (MLE), and community development initiatives across Northern Bangladesh."
  },
  {
    id: 2,
    name: "Markus Murmu",
    role: "Manager, Amnura Lutheran Mission Hospital (ALMH)",
    office: "Chapainawabganj Branch",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
    bio: "Managing healthcare operations at ALMH (License Reg: 4472) which has served over 3.1 million patients and 1M+ safe maternal deliveries."
  },
  {
    id: 3,
    name: "Rusel Hembrom",
    role: "Manager, Adompur Branch Office",
    office: "Govindaganj, Gaibandha",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
    bio: "Overseeing Adompur Lutheran Mission Clinic and rural sanitation deep tube-well installations in Gaibandha."
  },
  {
    id: 4,
    name: "Elias Soren",
    role: "Manager, Rajshahi Regional Branch",
    office: "Rajshahi Regional Office",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    bio: "Coordinating development alliances, donor audits, and women micro-savings cooperatives in Rajshahi district."
  },
  {
    id: 5,
    name: "Sinthiya Hasdak",
    role: "Manager, Nazipur Branch & Girls Hostel",
    office: "Patnitala, Naogaon",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
    bio: "Managing Nazipur Girls Hostel (65 indigenous female scholars) and TKS primary school network in Naogaon."
  }
];

export const newsArticles = [
  {
    id: 1,
    title: "Bilboiltha’s Kolhe Community Gets Community Library and Research Center",
    date: "July 31, 2025",
    category: "Indigenous Research",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600",
    excerpt: "Inaugurated at Bilboiltha Primary School in Chapainawabganj, this library serves as a research hub for preserving Kol indigenous dialect, history, and folk culture.",
    slug: "kol-library-inauguration"
  },
  {
    id: 2,
    title: "Harmonizing Santali, Mahalia, Pahari Minority, and Bengali Community Relations",
    date: "May 14, 2025",
    category: "Peacebuilding",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600",
    excerpt: "NAGR's inter-community peacebuilding initiative fosters harmony, land dispute mediation, and cultural exchange among ethnic minority groups and local Bengali villagers.",
    slug: "community-harmony-project"
  },
  {
    id: 3,
    title: "Multilingual Education (MLE) Program in Mother Tongue Launched with MCC",
    date: "January 10, 2025",
    category: "Education & Literacy",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600",
    excerpt: "NAGR and MCC Bangladesh launch mother-tongue learning materials in Santali for 3-5 year old children across 4 upazilas to reduce school dropout rates.",
    slug: "mle-mother-tongue-launch"
  }
];

export const partnerTestimonials = [
  {
    id: 1,
    quote: "NAGR's dedication to mother-tongue Multilingual Education (MLE) for Santal children is truly inspirational. Their grassroots reach in Rajshahi Division makes them an indispensable development partner.",
    author: "Gregory Vanderbilt",
    title: "Country Representative, MCC Bangladesh",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
  },
  {
    id: 2,
    quote: "Partnering with NAGR on the Integrated Community Development Initiative (ICDI) since 2021 has brought tangible economic independence to hundreds of indigenous families in Northern Bangladesh.",
    author: "Torbjorn Lied",
    title: "Chairman, BSF Norway",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  },
  {
    id: 3,
    quote: "NAGR's community governance, transparency, and focus on indigenous cultural preservation set a benchmark for civil society organizations in South Asia.",
    author: "Greg Conwell",
    title: "CEO, WRDF Australia",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
  },
  {
    id: 4,
    quote: "For over 17 years since 2008, the Rajshahi Kristiansand Friendship Committee has proudly co-funded NAGR's Kol project and healthcare clinics. Their impact is profound and enduring.",
    author: "Dag Vige",
    title: "President, Kristiansand Rajshahi Friendship Committee",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
  }
];

export const tickerLogos = [
  { name: "MCC Bangladesh", logo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=200" },
  { name: "UNICEF", logo: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=200" },
  { name: "BNELC", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200" },
  { name: "Bangladesh Santal Friends", logo: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=200" },
  { name: "Rotary Club of Dhaka Kawran Bazar", logo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=200" },
  { name: "Wycliffe Foundation", logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=200" },
  { name: "Strømme Foundation", logo: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=200" }
];

export const organizationHistory = {
  title: "National Agency for Green Revolution (NAGR)",
  motto: "Service to Creation means Service to the Creator",
  establishedDate: "October 15, 1981",
  headquarters: "32 Mallika Housing Society, Milk Vita Road, Mirpur-7, Dhaka-1216, Bangladesh",
  tagline: "Dedicated to indigenous rights, Santal education, healthcare, and sustainable green development since 1981.",
  description: "Established on October 15, 1981, NAGR is a non-governmental, non-profit, and non-political voluntary development organization operating across 6 northern districts of Bangladesh (Chapainawabganj, Rajshahi, Naogaon, Gaibandha, Dinajpur, and Thakurgaon). We serve over 9,000 direct beneficiaries (5,500 women and 3,500 men across 3,000 families), focusing on indigenous Santal, Oraon, Paharia, and Kol communities.",
  mission: "To empower marginalized indigenous and rural poor communities, women, children, and persons with disabilities through multilingual primary education, maternal healthcare, handicrafts micro-enterprises, and cultural preservation.",
  vision: "A compassionate, environmentally sustainable society where indigenous identity, mother-tongue literacy, and fundamental human rights are guaranteed for all.",
  legalRegistrations: [
    { authority: "NGO Affairs Bureau Bangladesh", regNo: "Reg No: 2841" },
    { authority: "Department of Social Services", regNo: "Reg No: Raj-1422" },
    { authority: "Amnura Lutheran Hospital License", regNo: "Reg No: 4472" }
  ],
  workingDistricts: ["Chapainawabganj", "Rajshahi", "Naogaon", "Gaibandha", "Dinajpur", "Thakurgaon"]
};

export const speechesData = {
  director: {
    name: "Stephen Soren",
    title: "Message from Executive Director",
    designation: "Executive Director & Founder Member",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    excerpt: "For over four decades since October 15, 1981, NAGR Bangladesh has remained steadfast in serving indigenous Santal, Oraon, Paharia, and Kol communities in Northern Bangladesh...",
    fullText: "National Agency for Green Revolution (NAGR) has been working diligently across 148 villages in 18 unions of 11 upazilas in Northern Bangladesh. Under our core motto 'Service to Creation means Service to the Creator', we operate 14 primary & pre-primary schools, Nazipur Girls Hostel for 65 indigenous female scholars, and Amnura Lutheran Mission Hospital which has served over 3.1 million patients."
  },
  chairman: {
    name: "Honorable Chairman",
    title: "Message from Honorable Chairman",
    designation: "Chairman, Executive Board",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    excerpt: "It is my great privilege as the Chairman of NAGR to welcome all stakeholders, donors, and friends of indigenous community empowerment...",
    fullText: "NAGR represents green transformation, multilingual education, and indigenous cultural preservation. Our publication initiative 'The Santal Times' (www.santalstimes.com) and the newly inaugurated Kol Community Library & Research Center at Bilboiltha Primary School showcase our commitment to protecting indigenous heritage."
  }
};

export const projectsData = [
  {
    id: "mle-education",
    title: "Multilingual Education (MLE) & 14 TKS Primary Schools",
    category: "Education",
    desc: "Operating 5 primary schools (Bilboiltha, Amnura, Badhair, Kolnaka, Jhinaphulbari) and 7 preparatory schools, delivering mother-tongue Santali literacy for 3-5 year old children.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    location: "Rajshahi & Chapainawabganj",
    beneficiaries: "14 Community Schools",
    subProgram: "Partner: MCC Bangladesh"
  },
  {
    id: "nazipur-girls-hostel",
    title: "Nazipur Girls Hostel & Higher Secondary Scholarships",
    category: "Education",
    desc: "Providing safe residential facilities, mentorship, and tuition support for 65 indigenous Santal female students pursuing high school and college degrees in Patnitala.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    location: "Patnitala, Naogaon",
    beneficiaries: "65 Indigenous Girls",
    subProgram: "Girls Hostel Project"
  },
  {
    id: "amnura-hospital",
    title: "Amnura Lutheran Mission Hospital & Maternal Clinic",
    category: "Health",
    desc: "24/7 mission hospital (Reg No: 4472) delivering healthcare to over 3.1M patients and 1M+ safe maternal deliveries in Chapainawabganj, alongside Adompur Clinic.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop",
    location: "Amnura, Chapainawabganj",
    beneficiaries: "3.1M+ Patients Served",
    subProgram: "Hospital & Adompur Clinic"
  },
  {
    id: "kol-research-center",
    title: "Kol Community Library & Indigenous Research Center",
    category: "Development",
    desc: "Inaugurated on July 31, 2025 at Bilboiltha Indigenous Primary School to preserve Kol indigenous dialect, history, folk songs, and cultural heritage.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
    location: "Babu-Dying, Chapainawabganj",
    beneficiaries: "Kol Indigenous Community",
    subProgram: "Cultural Heritage Initiative"
  },
  {
    id: "deep-tubewell-sanitation",
    title: "Deep Tube-well & Rural Hygiene Sanitation Program",
    category: "Health",
    desc: "Installing deep tube-wells for clean drinking water and building hygienic latrines across 148 rural villages in Northern Bangladesh since 2008.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=800&auto=format&fit=crop",
    location: "Gaibandha & Naogaon",
    beneficiaries: "148 Villages",
    subProgram: "Partner: New Start in East Norway"
  },
  {
    id: "handicraft-microfinance",
    title: "Women Handicraft Project & Community Micro-Savings",
    category: "Economic",
    desc: "Empowering 5,500 rural women through indigenous handicraft workshops, self-help savings groups, micro-enterprises, and financial literacy training.",
    image: "https://images.unsplash.com/photo-1556742049-0a67daf64f22?q=80&w=800&auto=format&fit=crop",
    location: "6 Working Districts",
    beneficiaries: "5,500 Women",
    subProgram: "Handicrafts & Savings Groups"
  }
];

export const publicationsData = {
  annualReports: [
    { title: "NAGR Annual Activity & Financial Report 2025 - 2026", year: "2025-2026", size: "4.8 MB", downloadUrl: "#" },
    { title: "NAGR Annual Progress Report 2024 - 2025", year: "2024-2025", size: "6.2 MB", downloadUrl: "#" },
    { title: "NAGR Audit & Interventions Report 2023 - 2024", year: "2023-2024", size: "5.1 MB", downloadUrl: "#" }
  ],
  santalTimes: [
    { issue: "The Santal Times - Preserving Indigenous Languages & Culture", date: "www.santalstimes.com", cover: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop" },
    { issue: "The Santal Times - Special Edition on Multilingual Education (MLE)", date: "August 2025", cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400&auto=format&fit=crop" }
  ],
  research: [
    { title: "Evaluation of Multilingual Education (MLE) for 3-5 Year Old Santal Children", author: "NAGR & MCC Bangladesh", year: "2025" },
    { title: "Healthcare Access & Maternal Deliveries at Amnura Lutheran Mission Hospital", author: "NAGR Research Wing", year: "2024" }
  ],
  successStories: [
    {
      title: "65 Santal Girls Pursuing Higher Education at Nazipur Hostel",
      excerpt: "How residential housing and scholarship funding transformed education access for indigenous female students in Patnitala...",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Over 1 Million Safe Maternal Deliveries at Amnura Mission Hospital",
      excerpt: "The story of Amnura Lutheran Mission Hospital (License 4472) serving remote rural mothers in Chapainawabganj...",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop"
    }
  ]
};

export const galleryData = {
  photos: [
    { title: "Multilingual Mother Tongue Language Day Celebration", category: "Education", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600" },
    { title: "Dengue Mosquito Net & Hygiene Kit Distribution", category: "Health", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600" },
    { title: "Tree Plantation & Organic Farm Seed Distribution", category: "Environment", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600" },
    { title: "Bilboiltha Primary School MLE Class in Session", category: "Education", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600" },
    { title: "Kol Community Library Inauguration (July 31, 2025)", category: "Culture", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600" },
    { title: "Nazipur Girls Hostel Student Cultural Performance", category: "Culture", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600" }
  ],
  videos: [
    { title: "NAGR Sanitary Factory & Deep Tube-well Project", duration: "08:30", videoUrl: "https://www.youtube.com/embed/yl2SUP_yinY", thumbnail: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=600" },
    { title: "ICDP Facilitator Training & Community Workshop", duration: "12:15", videoUrl: "https://www.youtube.com/embed/yl2SUP_yinY", thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600" },
    { title: "Multilingual Education (MLE) Santal School Documentary", duration: "10:45", videoUrl: "https://www.youtube.com/embed/yl2SUP_yinY", thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600" }
  ]
};

export const partnersData = [
  {
    id: 1,
    name: "MCC Bangladesh",
    type: "Core",
    logo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=200&auto=format&fit=crop",
    website: "https://mcc.org",
    description: "MCC Bangladesh collaborates with NAGR on the Multilingual Education (MLE) Program (2025-present), providing mother-tongue education for 3-5 year old Santal children in 4 upazilas across Rajshahi and Chapainawabganj."
  },
  {
    id: 2,
    name: "BSF - Norway",
    type: "Development",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&auto=format&fit=crop",
    website: "https://bsf-norway.org",
    description: "BSF Norway supports NAGR's Integrated Community Development Initiative (ICDI) (2021-present), empowering indigenous Santal, Oraon, and Paharia families through holistic development interventions."
  },
  {
    id: 3,
    name: "Rajshahi Kristiansand Friendship Committee",
    type: "Development",
    logo: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=200&auto=format&fit=crop",
    website: "https://kristiansand.kommune.no",
    description: "Partnering since 2008 on the Kol Indigenous Development Project and community health interventions across Chapainawabganj and Rajshahi."
  },
  {
    id: 4,
    name: "Wycliffe Foundation, Australia",
    type: "Development",
    logo: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=200&auto=format&fit=crop",
    website: "https://wycliffe.org.au",
    description: "Supporting NAGR's Community Development Project (2021-present), language literacy preservation, and indigenous cultural documentation."
  },
  {
    id: 5,
    name: "Rotary International / Rotary Club of Dhaka Kawran Bazar",
    type: "Development",
    logo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=200&auto=format&fit=crop",
    website: "https://rotary.org",
    description: "Collaborating since 2020 on rural education equipment, healthcare logistics, and youth vocational skills training."
  },
  {
    id: 6,
    name: "Lauvland, Norway",
    type: "Development",
    logo: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=200&auto=format&fit=crop",
    website: "https://lauvland.no",
    description: "Funding partner for Tabitha Kindergarten School (2011-present), providing early childhood schooling for underprivileged village children."
  },
  {
    id: 7,
    name: "New Start in East Norway",
    type: "Development",
    logo: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=200&auto=format&fit=crop",
    website: "https://newstart.no",
    description: "Supporting deep tube-well installations, hygienic sanitation drives, and income-generating activities for rural families since 2008."
  },
  {
    id: 8,
    name: "Hjemmets Stiftelse Norway",
    type: "Development",
    logo: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=200&auto=format&fit=crop",
    website: "https://hjemmets.no",
    description: "Sponsoring Village Community Schools and indigenous primary education facilities in remote Barind tract villages since 2012."
  }
];

export const careerNotices = [
  {
    id: "c1",
    type: "Job Circular",
    title: "Project Coordinator - Multilingual Education (MLE)",
    location: "Naogaon / Rajshahi",
    deadline: "28 August 2026",
    status: "Active",
    desc: "Seeking NGO professional with minimum 5 years in indigenous education projects and Santal community engagement."
  },
  {
    id: "c2",
    type: "Vacancy",
    title: "Medical Officer (MBBS) - Amnura Lutheran Mission Hospital",
    location: "Amnura, Chapainawabganj",
    deadline: "30 August 2026",
    status: "Active",
    desc: "Full-time MBBS position for maternal care, newborn delivery, and emergency hospital management (License 4472)."
  },
  {
    id: "c3",
    type: "Tender",
    title: "Procurement Tender: Deep Tube-well & Sanitation Equipment 2026",
    location: "Dhaka HQ / Rajshahi Office",
    deadline: "15 September 2026",
    status: "Open Tender",
    desc: "Sealed bids invited for high-capacity deep tube-wells and sanitary latrine materials across 6 working districts."
  },
  {
    id: "c4",
    type: "Notice",
    title: "AGM Notice: 45th Annual General Body Meeting",
    location: "Dhaka Head Office (Mirpur-7)",
    deadline: "10 September 2026",
    status: "Official Notice",
    desc: "Inviting executive committee members and general body representatives to the annual progress review."
  },
  {
    id: "c5",
    type: "Internship",
    title: "Research Intern - Indigenous Languages & Culture",
    location: "Kol Research Center / Remote",
    deadline: "05 September 2026",
    status: "Active",
    desc: "Opportunity for graduates in Anthropology or Linguistics to work with 'The Santal Times' (www.santalstimes.com)."
  }
];

export const contactInfo = {
  address: "Headquarters: 32 Mallika Housing Society, Milk Vita Road, Mirpur-7, Dhaka-1216, Bangladesh",
  branchOffice: "Field Office: Nazipur, Patnitala, Naogaon & Rajshahi, Bangladesh",
  phonePrimary: "+8801715081247",
  phoneSecondary: "+8801410592122",
  emailPrimary: "dirnagr@gmail.com",
  emailSecondary: "tfdir@yahoo.com",
  whatsapp: "8801715081247",
  socialLinks: {
    facebook: "https://facebook.com/nagrbangladesh",
    twitter: "https://twitter.com/nagrbangladesh",
    youtube: "https://youtube.com/nagrbangladesh",
    instagram: "https://instagram.com/nagrbangladesh"
  }
};
