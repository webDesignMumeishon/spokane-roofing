import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero-and-logo.png';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import realStateAgentAndFamily from '~/assets/images/real-state-spokane-people.png';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import gasImg from '~/assets/images/roofing-tool.png';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Best Roofing Company in Spokane
    </>
  ),
  subtitle: (
    <>
      One of the best Roofing Companies in Spokane. We will help you figure out which type of roof works best for your residential and commercial property.
    </>
  ),
  callToAction: {
    text: 'BOOK NOW',
    href: '/contact',
    // icon: IconDownload,
    targetBlank: false,
  },
  callToAction2: {
    text: 'Services',
    href: '/',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">TailNext</span>
      </>
    ),
    subtitle:
      "Elevating Your Digital Presence: Discover the Synergies Unleashed in Our Platform's Core Strengths, from Seamless Integration to Open Collaboration.",
    tagline: 'Features',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description:
        'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
      icon: IconBrandTailwind,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Ready-to-use Components',
      description:
        'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
      icon: IconComponents,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Best Practices',
      description:
        'By prioritizing maintainability and scalability through coding standards and design principles, your website stays robust and efficient.',
      icon: IconListCheck,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Excellent Page Speed',
      description:
        'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
      icon: IconRocket,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        "Boost online visibility with our SEO-friendly website. Effective strategies and practices enhance your website's search engine ranking, making it easier for users to find your content.",
      icon: IconArrowsRightLeft,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Open to new ideas and contributions',
      description:
        'We welcome new ideas and contributions to our platform. Whether you have feature suggestions, want to contribute code, or share insights, our platform is open for collaboration.',
      icon: IconBulb,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'All Service Spokane Roofing',
    subtitle: 'We want to make sure your home or business is protected !',
    tagline: '',
  },
  content: '',
  items: [
    {
      title: 'Residential Roofing',
      description: 'Your roof protects your home, loved ones, and your belongings, so trust your roofing needs to the Spokane Roofing experts with the experience to get the job done right.',
    },
    {
      title: 'Commercial Roofing',
      description: 'Warehouses, strip malls, hospitals, office buildings, schools, and everything in-between (including government projects) – Spokane Roofing can provide your business with expert commercial roofing services.',
    },
    {
      title: 'Industrial Roofing',
      description: 'When it comes to industrial roofing, Spokane Roofing is up to the challenge. We specialize in flat / low-slope roofing and no project is too large or small – including preventative maintenance and roof leak repair.',
    },
  ],
  image: {
    src: realStateAgentAndFamily,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'Ranked #1 Roofing Company in Spokane, WA',
  },
  items: [
    {
      title: 'Step 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our customers say about us',
    subtitle:
      '',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      job: 'Marketing Manager',
      testimonial: `Roofing Spokane did an outstanding job on our new roof! From the initial consultation to the final cleanup, their team was professional, punctual, and extremely knowledgeable. They used high-quality materials and the workmanship was top-notch. We appreciated their attention to detail and their commitment to ensuring we were completely satisfied with the finished product. We highly recommend Roofing Spokane for anyone in need of roofing services in Spokane, WA!`,
      image: {
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNTgwfDB8MXxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8fHwxNzIxMDkzMjIzfDA&ixlib=rb-4.0.3&q=80&w=400',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I couldn't be happier with the service I received from Roofing Spokane. They were quick to respond to my inquiry and provided a comprehensive quote. The crew was friendly, efficient, and respectful of my property. They completed the job on time and within budget, which was a huge relief. Our new roof looks fantastic and has already received compliments from our neighbors. I would definitely use Roofing Spokane again for any future roofing needs.`,
      image: {
        src: 'https://images.unsplash.com/photo-1608549036505-ead5b1de5417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNTgwfDB8MXxzZWFyY2h8MjJ8fGZhY2VzfGVufDB8fHx8MTcyMTA5MzIyM3ww&ixlib=rb-4.0.3&q=80&w=400',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Kelsey Arden',
      job: 'Co-Founder & CEO',
      testimonial: `Roofing Spokane is hands down the best roofing company in Spokane! They went above and beyond to ensure our roof replacement was smooth and hassle-free. The communication was excellent, and they kept us informed throughout the entire process. The quality of their work is evident, and we feel confident that our new roof will last for many years to come. Thank you, Roofing Spokane, for your exceptional service!`,
      image: {
        src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNTgwfDB8MXxzZWFyY2h8MTN8fGZhY2VzfGVufDB8fHx8MTcyMTA5MzIyM3ww&ixlib=rb-4.0.3&q=80&w=400',
        alt: 'Kelsey Arden',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'Business Owner',
      testimonial: `I highly recommend Roofing Spokane for their exceptional roofing services. They provided a thorough inspection and explained all our options clearly. The team was professional and courteous, and they worked diligently to complete the job on time. The final result exceeded our expectations, and we couldn't be more pleased with our new roof. Roofing Spokane truly delivers on their promises!`,
      image: {
        src: 'https://images.unsplash.com/photo-1509868918748-a554ad25f858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNTgwfDB8MXxzZWFyY2h8MjN8fGZhY2VzfGVufDB8fHx8MTcyMTA5MzIyM3ww&ixlib=rb-4.0.3&q=80&w=400',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Keith Young',
      job: 'Freelance Developer',
      testimonial: `Roofing Spokane did an incredible job on our roof repair. They were able to quickly identify the problem and provide an effective solution. The crew was prompt, hardworking, and left our property clean and tidy. Their pricing was fair, and there were no surprises. We are very satisfied with their work and will definitely call them again for any future roofing needs. Great job, Roofing Spokane!`,
      image: {
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNTgwfDB8MXxzZWFyY2h8OHx8ZmFjZXN8ZW58MHx8fHwxNzIxMDkzMjIzfDA&ixlib=rb-4.0.3&q=80&w=400',
        alt: 'Keith Young',
      },
      href: '/',
    },
    {
      name: 'John Green',
      job: 'Project Manager',
      testimonial: `We recently hired Roofing Spokane for a complete roof replacement, and we couldn't be more satisfied with the results. The team was incredibly professional and efficient, completing the project ahead of schedule. They took the time to explain every step of the process and ensured that we were comfortable with all the decisions being made. The quality of the materials and craftsmanship is evident, and our home looks amazing with the new roof. We highly recommend Roofing Spokane to anyone looking for top-notch roofing services in the Spokane area!`,
      image: {
        src: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNTgwfDB8MXxzZWFyY2h8NHx8ZmFjZXN8ZW58MHx8fHwxNzIxMDkzMjIzfDA&ixlib=rb-4.0.3&q=80&w=400',
        alt: 'John Green',
      },
      href: '/',
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle: '',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'How do I schedule a roofing inspection?',
      description: `To schedule a roofing inspection, simply contact us through our website or give us a call. Our team will arrange a convenient time to assess your roof's condition.`,
    },
    {
      title: 'What types of roofing services do you offer?',
      description: `We offer a wide range of services including leak repair, patching and replacement, wind and hail damage repair, chimney and flashing repair, skylight maintenance and repair, and full roof replacements.`,
    },
    {
      title: "How often should I have my roof inspected?",
      description: `It is recommended to have your roof inspected at least once a year and after any major storm. Regular inspections help identify and address minor issues before they become major problems.`,
    },
    {
      title: "Do you offer emergency roofing services?",
      description: `Yes, we offer emergency roofing services for urgent issues such as severe leaks or storm damage. Contact us immediately if you require emergency assistance.`,
    },
    {
      title: 'What are the signs that my roof needs repair or replacement?',
      description: `Signs that your roof may need repair or replacement include missing or damaged shingles, leaks, sagging, mold or moss growth, and visible wear and tear. If you notice any of these signs, contact us for a professional evaluation.`,
    },
    {
      title: 'What roofing materials do you work with?',
      description: `We work with a variety of roofing materials including asphalt shingles, metal roofing, tiles, and more. Our team can help you choose the best material based on your needs, budget, and aesthetic preferences.`,
    },
    {
      title: 'How long does a roof replacement take?',
      description: `The duration of a roof replacement depends on the size of the roof and the materials used. On average, a roof replacement can take between 1 to 3 days. We provide a detailed timeline during our consultation.`,
    },
    {
      title: 'Are your roofing services covered by a warranty?',
      description: `Yes, we offer warranties on both our materials and workmanship. The specifics of the warranty depend on the type of service provided. We will discuss the warranty details with you during the consultation.`,
    },
  ],
};


// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Etiam in libero, et volutpat',
        },
        {
          description: 'Aenean ac nunc dolor tristique',
        },
        {
          description: 'Cras scelerisque accumsan lib',
        },
        {
          description: 'In hac habitasse',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Proin vel laoreet',
        },
        {
          description: 'Ut efficitur egestas',
        },
        {
          description: 'Pellentesque ut nibh',
        },
        {
          description: 'Donec fringilla sem',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Curabitur suscipit risus',
        },
        {
          description: 'Aliquam blandit malesuada',
        },
        {
          description: 'Suspendisse sit amet',
        },
        {
          description: 'Suspendisse auctor dui',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'Your Spokane Roofing Experts Are Here to Help',
    tagline: '',
  },
  content: 'Contact us today for expert guidance and exceptional service. Use the form below or call us directly — we are here to help!',
  items: [
    {
      title: 'Our Address',
      description: ['103 E Indiana Ave # B', 'Spokane WA, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (509) 294-3442', 'Email: info@spokane-realtors.com'],
      icon: IconPhoneCall,
    },

    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },

  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'message',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
