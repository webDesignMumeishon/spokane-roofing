import { CallToActionProps, FAQsProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';
import realStateAgentAndFamily from '~/assets/images/real-state-faq.png';

// Hero data on FAQs page *******************
export const heroFaqs: HeroProps = {
  title: 'Frequently Asked Questions',
  subtitle: (
    <>
      <span className="hidden md:inline">
        {`Real Estate Clarity: Top Questions from Spokane Homebuyers and Sellers.`}
      </span>{' '}
    </>
  ),
  tagline: '',
  image: {
    src: realStateAgentAndFamily,
    alt: 'Hero TailNext',
  },
};

// FAQS4 data on FAQs page *******************
export const faqs4Faqs: FAQsProps = {
  id: 'faqsFour-on-faqs',
  hasBackground: true,
  header: {
    title: 'Find what you need',
    subtitle: 'Get quick answers to your questions: Everything you need in one spot.',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          "title": "How do I start the process of getting a new roof with Spokane Roofing Solutions?",
          "description": "To start the process, simply contact us through our website or give us a call. Our team will schedule an initial consultation to understand your needs and preferences."
        },
        {
          "title": "What services does Spokane Roofing Solutions offer?",
          "description": "We offer a range of services including roof installations, repairs, inspections, and maintenance for both residential and commercial properties."
        },
        {
          "title": "How long does it typically take to install or repair a roof?",
          "description": "The timeline can vary based on several factors. On average, roof installations can take 1-2 weeks, while repairs can take a few days. We strive to make the process as quick and efficient as possible."
        },
        {
          "title": "What areas do you serve?",
          "description": "We primarily serve Spokane and the surrounding areas, including Spokane Valley, Liberty Lake, and Cheney."
        },
        {
          "title": "How do you determine the cost of a roofing project?",
          "description": "We conduct a comprehensive assessment considering factors such as the size and pitch of the roof, the materials required, and the extent of the work needed to provide an accurate cost estimate."
        },
        {
          "title": "What are the costs associated with roofing services?",
          "description": "Costs can include materials, labor, inspection fees, and any necessary permits. We provide a detailed breakdown during our consultations."
        }
      ]
    },
  ],
};

// CallToAction data on FAQs page *******************
export const callToActionFaqs: CallToActionProps = {
  id: 'callToAction-on-faqs',
  hasBackground: true,
  title: 'Still have questions?',
  subtitle:
    'We are Here to Help!',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
