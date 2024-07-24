import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconListCheck,
  IconRocket,
  IconHomeSearch,
  IconWallet,
  IconMapSearch,
  IconBuildingEstate,
  IconArrowBadgeRight,
  IconHome2
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

import heroImg from '~/assets/images/spokane-hero-services.png';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import roofReplacement from '~/assets/images/roof-replacement.webp';
import roofRepair from '~/assets/images/roof-repair.webp';
import metalRoofing from '~/assets/images/roofing-metal.webp';
import roofCleaning from '~/assets/images/roof-cleaning.webp';


// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'Spokane Roofing Services',
  subtitle: 'Helping You Find Your Dream Home with Ease and Confidence',
  callToAction: {
    text: 'GET A FREE ESTIMATE',
    href: '/contact',
    targetBlank: false,
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// ServicesList data on Services page *******************
export const servicesListServices: any = {
  items: [
    {
      image: {
        src: roofReplacement,
        alt: 'Spokane roofing roof replacement service'
      },
      title: 'Roof Replacement',
      description: 'At Spokane Roofing, our skilled roofers are experts in replacing roofs for both residential and commercial buildings. We use top-quality roofing materials to ensure long-lasting results and customer satisfaction.',
      callToAction: {
        text: 'READ MORE',
        href: '/services/roof-replacement'
      }
    },
    {
      image: {
        src: roofRepair,
        alt: 'Spokane roofing roof repair service'
      },
      title: 'Roof Repair',
      description: 'Our professional roofers are skilled in addressing all types of roof damage. From minor leaks to extensive damage, we provide comprehensive roof repair services to maintain the integrity of your property.',
      callToAction: {
        text: 'READ MORE',
        href: '/services/roof-repair',
      }
    },
    {
      image: {
        src: metalRoofing,
        alt: 'Spokane metal roofing service'
      },
      title: 'Metal Roofing',
      description: 'Choose our metal roofing systems for a long-lasting, durable solution. Our roofing professionals are experts in installing and maintaining metal roofs, offering a variety of styles to match your aesthetic and functional needs.',
      callToAction: {
        text: 'READ MORE',
        href: '/services/metal-roofing',
      }
    },
    {
      image: {
        src: roofCleaning,
        alt: 'Spokane roofing cleaning service'
      },
      title: 'Roof Cleaning',
      description: 'Our pressure washing services can make your roof look new. Contact us today to schedule our high-pressure cleaning services for your residential or commercial roof.',
      icon: IconHome2,
      callToAction: {
        text: 'VIEW SERVICE',
        href: 'services/roof-cleaning',
        icon: IconArrowBadgeRight
      }
    },
  ]
}

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Services',
  },
  items: [
    {
      title: 'Roof Repair',
      description: 'We can repair any type of roofing issue, including leaks, missing shingles, and damaged flashing.',
      icon: IconHomeSearch,
      callToAction: {
        text: 'VIEW SERVICE',
        href: 'roof-repair',
        icon: IconArrowBadgeRight
      }
    },
    {
      title: 'Roof Replacement',
      description: 'Replacing the entire roof or specific sections to ensure structural integrity and longevity.',
      icon: IconBulb,
      callToAction: {
        text: 'VIEW SERVICE',
        href: 'roof-replacement',
        icon: IconArrowBadgeRight
      }
    },
    {
      title: 'Metal Roofing',
      description: 'Transform your home with our top-tier metal roofing solutions. Engineered for durability, energy efficiency, and aesthetic appeal.',
      icon: IconHome2,
      callToAction: {
        text: 'VIEW SERVICE',
        href: 'metal-roofing',
        icon: IconArrowBadgeRight
      }
    },
  ],
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  hasBackground: false,
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
    src: roofReplacement,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: true,
};

// Feature4 data on Services page *******************
export const features4Services: FeaturesProps = {
  id: 'featuresFour-on-services',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'Main Features',
    subtitle:
      'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  },
  isImageDisplayed: true,
  image: {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    alt: 'Hero TailNext',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconListCheck,
    },
    {
      title: 'Excellent Page Speed',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconBulb,
    },
  ],
};

// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'Satisfied Client Experiences',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'Business Owner',
      testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Project Manager',
      testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
  callToAction: {
    targetBlank: true,
    text: 'More testimonials...',
    href: '/',
  },
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Answers to Common Queries',
    subtitle:
      'Etiam laoreet mi eros, vitae iaculis mi egestas blandit. Sed nisl diam, congue sed justo et, cursus sollicitudin ligula.',
  },
  columns: 1,
  items: [
    {
      title: 'Can I customize the templates to match my brand?',
      description: `Ut accumsan, massa at sagittis maximus, libero justo rhoncus metus, quis finibus neque justo quis nisi. Suspendisse sed sapien et justo iaculis faucibus.`,
      icon: IconChevronsRight,
    },
    {
      title: 'What if I need help customizing the template?',
      description: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent imperdiet ultricies ex consequat egestas.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Are there setup guides available?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Can I hire you for template customization?',
      description: `Phasellus est quam, mollis tincidunt dictum pulvinar, tempor vel justo. Mauris eu lobortis leo. Proin pretium arcu lectus, a mattis nisi fermentum quis.`,
      icon: IconChevronsRight,
    },
  ],
};

// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: false,
  title: 'Still have questions?',
  subtitle: 'We are Here to Help!',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
