import { ProjectItem, ServiceItem, ProcessStep, StatItem, WhyItem, ToolItem } from '../types';

export const PERSONAL_INFO = {
  brandName: "RATHORE WEBWORKS",
  name: "Yuvraj Singh Rathore",
  profession: "Web Designer & Web Developer",
  tagline: "Designing websites. Building digital experiences.",
  shortBio: "I design and develop modern websites that combine clean visual design, responsive performance and practical business functionality.",
  quote: "I design digital experiences that are intuitive, beautiful and impactful.",
  phone: "+91 6377573321",
  displayPhone: "+91 63775 73321",
  location: "Rajasthan, India",
  email: "ryuvrajsingh002@gmail.com",
  whatsappDefaultMsg: "Hello Yuvraj, I want to discuss a website project with Rathore Webworks.",
  whatsappUrl: "https://wa.me/916377573321?text=Hello%20Yuvraj,%20I%20want%20to%20discuss%20a%20website%20project%20with%20Rathore%20Webworks.",
  socials: {
    github: "https://github.com/ryuvrajsingh002-netizen",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/"
  }
};

export const STATS_DATA: StatItem[] = [
  {
    value: "04+",
    label: "PROJECTS BUILT",
    sublabel: "Deployed live on web"
  },
  {
    value: "03+",
    label: "BUSINESS WEBSITES",
    sublabel: "Active local enterprise sites"
  },
  {
    value: "100%",
    label: "RESPONSIVE DESIGN",
    sublabel: "Flawless mobile & desktop"
  },
  {
    value: "24/7",
    label: "DIGITAL SUPPORT",
    sublabel: "Direct call & WhatsApp"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "WEB DESIGN",
    description: "Modern, clean and professional website interfaces crafted to elevate your business presence.",
    iconName: "Layout",
    deliverables: ["Visual Layout Design", "Brand Alignment", "Typography & Color Systems"]
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    description: "Fast, responsive and functional websites built for real-world use with clean, maintainable code.",
    iconName: "Code2",
    deliverables: ["Semantic HTML5 & CSS3", "Modern JavaScript", "Cross-browser Support"]
  },
  {
    number: "03",
    title: "BUSINESS WEBSITES",
    description: "Professional websites for local businesses, shops and service providers to convert visitors into clients.",
    iconName: "Building2",
    deliverables: ["WhatsApp Inquiry Flow", "Local SEO Structure", "Service & Pricing Catalogs"]
  },
  {
    number: "04",
    title: "UI / UX DESIGN",
    description: "User-friendly layouts focused on clarity and conversion, ensuring intuitive navigation on every device.",
    iconName: "Sparkles",
    deliverables: ["Intuitive Flow", "Clear Call-to-Actions", "Mobile-first Architecture"]
  },
  {
    number: "05",
    title: "WEBSITE REDESIGN",
    description: "Transforming outdated websites into modern digital experiences that reflect current industry standards.",
    iconName: "RefreshCw",
    deliverables: ["Modern Aesthetics", "Performance Boost", "Mobile Usability Overhaul"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the business, audience and project requirements.",
    details: "In-depth discussion about business goals, customer personas, competitor landscape, and core site objectives."
  },
  {
    number: "02",
    title: "PLAN",
    description: "Create the website structure, content flow and visual direction.",
    details: "Site architecture mapping, wireframing pages, structuring content hierarchy, and defining the visual mood."
  },
  {
    number: "03",
    title: "DESIGN",
    description: "Create a clean and professional user interface.",
    details: "Crafting modern layouts, refined typography, purposeful color palettes, and intuitive interaction points."
  },
  {
    number: "04",
    title: "DEVELOP",
    description: "Build the responsive website using modern HTML, CSS and JavaScript.",
    details: "Writing clean, semantic, and performant code that scales cleanly and loads swiftly across all devices."
  },
  {
    number: "05",
    title: "TEST",
    description: "Check mobile responsiveness, buttons, forms, links and performance.",
    details: "Rigorous quality check for mobile touch targets, form validations, WhatsApp triggers, and page speed."
  },
  {
    number: "06",
    title: "DELIVER",
    description: "Launch the final website and provide the required files / deployment support.",
    details: "Live hosting on GitHub Pages or custom domain, complete code handover, and ongoing support setup."
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "rk-car-rental",
    number: "01",
    title: "RK CAR RENTAL DEGANA",
    category: "BUSINESS WEBSITE / CAR RENTAL",
    description: "Professional car rental website for a local business in Degana with car listings, booking interface, WhatsApp booking flow and contact features.",
    liveUrl: "https://ryuvrajsingh002-netizen.github.io/Rk-car-rental-degana/",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "WhatsApp Integration", "GitHub Pages"],
    highlights: ["Interactive Fleet Showcase", "Instant WhatsApp Booking", "Mobile-Optimized Interface"]
  },
  {
    id: "bhavika-medical",
    number: "02",
    title: "BHAVIKA HEALTHCARE MEDICAL STORE",
    category: "BUSINESS WEBSITE / LOCAL BUSINESS",
    description: "Professional local medical store website with business information, services, medicine categories, appointment/contact functionality and direct WhatsApp communication.",
    liveUrl: "https://ryuvrajsingh002-netizen.github.io/bhavika-medical-store/",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "WhatsApp Integration", "GitHub Pages"],
    highlights: ["Category-Wise Medicine Catalog", "Direct Prescription Inquiry", "Emergency Call Integration"]
  },
  {
    id: "krishi-farm",
    number: "03",
    title: "SHRI NAGNECHIYA MATA KRISHI FARM",
    category: "AGRICULTURE / SERVICE WEBSITE",
    description: "Agriculture service website created to present farming services including field work, tanker, trolley and thresher services with direct customer contact.",
    liveUrl: "https://ryuvrajsingh002-netizen.github.io/-tamroli/",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Call Integration", "GitHub Pages"],
    highlights: ["Machinery Service Showcase", "Local Agricultural Outreach", "One-Tap Call Support"]
  },
  {
    id: "vinayak-mobiles",
    number: "04",
    title: "VINAYAK MOBILES DEGANA",
    category: "MOBILE / ELECTRONICS BUSINESS WEBSITE",
    description: "Product-focused mobile and electronics website concept featuring mobiles, iPhones, laptops, accessories, smart TVs, home appliances and customer contact functionality.",
    liveUrl: "https://ryuvrajsingh002-netizen.github.io/vinayak-mobiles-degana/",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Product Showcase", "GitHub Pages"],
    highlights: ["Electronics Catalog Display", "Brand Filter Presentation", "Direct Sales Consultation"]
  }
];

export const ABOUT_SKILLS = [
  "Clean & Modern Design",
  "Responsive Websites",
  "Business-focused Solutions",
  "Mobile Friendly",
  "User-friendly Interfaces",
  "Practical Functionality",
  "SEO-friendly Structure",
  "Continuous Learning"
];

export const WHY_WORK_WITH_ME: WhyItem[] = [
  {
    number: "01",
    title: "MODERN DESIGN",
    description: "Professional visual design with strong attention to detail, spacing, and typographic balance."
  },
  {
    number: "02",
    title: "RESPONSIVE",
    description: "Websites designed and tested specifically for flawless operation across mobile, tablet, and desktop."
  },
  {
    number: "03",
    title: "BUSINESS FOCUSED",
    description: "Websites designed around real business requirements, customer journeys, and conversion paths."
  },
  {
    number: "04",
    title: "DIRECT COMMUNICATION",
    description: "Easy and instant communication through direct phone calls and WhatsApp—no intermediaries."
  },
  {
    number: "05",
    title: "CUSTOM WORK",
    description: "Each website is crafted according to the client's distinctive business needs, not cookie-cutter setups."
  },
  {
    number: "06",
    title: "AFFORDABLE SOLUTIONS",
    description: "High-value professional websites without unnecessary bloat, exorbitant retainers, or hidden fees."
  }
];

export const TOOLS_DATA: ToolItem[] = [
  {
    name: "HTML5",
    category: "Structure",
    purpose: "Semantic markup & accessible architecture",
    iconName: "FileCode2"
  },
  {
    name: "CSS3",
    category: "Styling",
    purpose: "Modern layouts, Flexbox, Grid & responsive design",
    iconName: "Palette"
  },
  {
    name: "JavaScript",
    category: "Logic",
    purpose: "Interactive components & dynamic web behavior",
    iconName: "Terminal"
  },
  {
    name: "GitHub",
    category: "Deployment",
    purpose: "Version control & GitHub Pages live hosting",
    iconName: "GitBranch"
  },
  {
    name: "Google Search Console",
    category: "SEO",
    purpose: "Search indexing, sitemap tracking & site health",
    iconName: "Search"
  },
  {
    name: "Figma",
    category: "Design",
    purpose: "UI wireframing & prototyping visual layouts",
    iconName: "Figma"
  },
  {
    name: "Canva",
    category: "Graphics",
    purpose: "Marketing visuals & web asset preparation",
    iconName: "Layers"
  },
  {
    name: "VS Code",
    category: "Environment",
    purpose: "Primary development workspace & efficient coding",
    iconName: "Monitor"
  }
];
