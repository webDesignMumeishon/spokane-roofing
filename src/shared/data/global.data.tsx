import { IconArrowBadgeRight, IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandTwitter, IconChevronDown, IconHammer, IconPlant, IconPlayerEject, IconRss, IconSpray, IconTools } from '@tabler/icons-react';
import { AnnouncementProps, FeaturesProps, FooterProps, HeaderProps } from '../types';

export const websiteData = {
  phone: '(509) 294-3442',
  address: '601 W 1st Ave Suite 1200',
  email: 'spokaneroofingco@gmail.com'
}

export const jsonLd = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "name": "Spokane Roofing Solutions Company",
  "image": "https://spokaneroofing.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspokane-roofing.e69bb475.png&w=640&q=75",
  "telephone": "(509) 294-3442",
  "email": "spokaneroofingco@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "601 W 1st Ave Suite 1200",
    "addressLocality": "Spokane",
    "addressRegion": "WA",
    "addressCountry": "EEUU",
    "postalCode": "99201"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": {
        "@type": "DayOfWeek",
        "name": "Monday - Friday:"
      },
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": {
        "@type": "DayOfWeek",
        "name": "Saturday & Sunday"
      }
    }
  ],
  "url": "https://spokaneroofing.co/"
}

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 14 using the new App Router »',
    href: 'https://nextjs.org/blog/next-14',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
  },
};

// Services data
export const servicesData: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Services',
  },
  items: [
    {
      title: 'Roof Repair',
      description: 'We can repair any type of roofing issue, including leaks, missing shingles, and damaged flashing.',
      icon: IconTools,
      callToAction: {
        text: 'VIEW SERVICE',
        href: 'roof-repair',
        icon: IconArrowBadgeRight
      }
    },
    {
      title: 'Roof Replacement',
      description: 'Replacing the entire roof or specific sections to ensure structural integrity and longevity.',
      icon: IconHammer,
      callToAction: {
        text: 'VIEW SERVICE',
        href: 'roof-replacement',
        icon: IconArrowBadgeRight
      }
    },
    {
      title: 'Metal Roofing',
      description: 'Transform your home with our top-tier metal roofing solutions. Engineered for durability, energy efficiency, and aesthetic appeal.',
      icon: IconPlayerEject,
      callToAction: {
        text: 'VIEW SERVICE',
        href: 'metal-roofing',
        icon: IconArrowBadgeRight
      }
    },
    {
      title: 'Roof Cleaning',
      description: 'Our pressure washing services can make your roof look new. Contact us today to schedule our high-pressure cleaning services for your residential or commercial roof.',
      icon: IconSpray,
      callToAction: {
        text: 'VIEW SERVICE',
        href: 'roof-cleaning',
        icon: IconArrowBadgeRight
      }
    },
    {
      title: 'Roof Moss Removal',
      description: 'Let\'s dive deeper into the importance of roof moss removal and the comprehensive services we offer',
      icon: IconPlant,
      callToAction: {
        text: 'VIEW SERVICE',
        href: 'moss-removal',
        icon: IconArrowBadgeRight
      }
    },
  ],
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Pages',
      icon: IconChevronDown,
      links: [
        {
          label: 'Contact us',
          href: '/contact',
        },
        {
          label: 'FAQs',
          href: '/faqs',
        },
        {
          label: 'Terms & Conditions',
          href: '/terms',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
      ],
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
  actions: [
    {
      text: 'Get a Free Quote',
      href: '/contact',
      targetBlank: false,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'Spokane Roofing Solutions',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
        {' '}
        onWidget
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['601 W 1st Ave Suite 1200', 'Spokane WA, EEUU', '99201'],
    },
    {
      title: 'Phone',
      texts: ['Mobile: +1 (509) 294-3442'],
    },
    {
      title: 'Email',
      texts: ['spokaneroofingco@gmail.com'],
    },
  ],
  socials: [],
};
