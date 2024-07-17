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
          title: 'How do I start the process of buying a home with Spokane Roofing?',
          description: `To start the process, simply contact us through our website or give us a call. Our team will schedule an initial consultation to understand your needs and preferences.`,
        },
        {
          title: 'What services do Spokane Roofing offer?',
          description: `We offer a range of services including buying and selling homes, property management, market analysis, and real estate consultations.`,
        },
        {
          title: "How long does it typically take to buy or sell a home?",
          description: `The timeline can vary based on several factors. On average, buying a home can take 30-60 days from offer to closing, while selling a home can take 60-90 days. We strive to make the process as quick and efficient as possible.`,
        },
        {
          title: "What areas do you serve?",
          description: `We primarily serve Spokane and the surrounding areas, including Spokane Valley, Liberty Lake, and Cheney.`,
        },
        {
          title: 'How do you determine the value of my home?',
          description: `We conduct a comprehensive market analysis considering factors such as recent sales, current market trends, and the unique features of your property to provide an accurate valuation.`,
        },
        {
          title: 'What are the costs associated with buying or selling a home?',
          description: `For buyers, costs may include inspection fees, appraisal fees, and closing costs. Sellers typically pay for agent commissions and any repairs or improvements needed. We provide a detailed breakdown during our consultations.`,
        },
      ],
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
