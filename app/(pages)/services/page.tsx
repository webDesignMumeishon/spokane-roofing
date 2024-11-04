import { Metadata } from 'next';
import HeroServices from '~/components/common/HeroServices';
import CallToAction from '~/components/widgets/CallToAction';
import { SITE } from '~/config';
import { callToActionServices, heroServices, servicesListServices } from '~/shared/data/pages/services.data';
import ServicesList from '~/components/widgets/ServicesList';

export const metadata: Metadata = {
  title: 'Spokane Roofing Services',
  description: 'Trusted Spokane roofing services specializing in roof installation, repair, and maintenance. Our expert team ensures durable, weather-resistant roofs for homes and businesses.',
  alternates: {
    canonical: `${SITE.origin}services`,
  },
};

const Page = () => {
  return (
    <>
      <HeroServices {...heroServices} />
      <ServicesList {...servicesListServices} />
      {/* <Content {...contentServicesTwo} /> */}
      {/* <Features4 {...features4Services} /> */}
      {/* <Testimonials {...testimonialsServices} /> */}
      {/* <FAQs {...faqsServices} /> */}
      <CallToAction {...callToActionServices} />
    </>
  );
};

export default Page;
