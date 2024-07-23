import { Metadata } from 'next';
import HeroServices from '~/components/common/HeroServices';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/FAQs';
import Features2 from '~/components/widgets/Features2';
import Features3 from '~/components/widgets/Features3';
import Features4 from '~/components/widgets/Features4';
import Hero from '~/components/widgets/Hero';
import Testimonials from '~/components/widgets/Testimonials';
import { SITE } from '~/config';
import {
  callToActionServices,
  contentServicesOne,
  contentServicesTwo,
  faqsServices,
  features2Services,
  features4Services,
  heroServices,
  testimonialsServices,
  servicesListServices
} from '~/shared/data/pages/services.data';
import ServicesList from '~/components/widgets/ServicesList';

export const metadata: Metadata = {
  title: 'Services | Quality Roofing Services',
  alternates: {
    canonical: `${SITE.origin}services`,
  },
};

const Page = () => {
  return (
    <>
      <HeroServices {...heroServices} />
      <ServicesList {...servicesListServices} />
      {/* <ContentServices {...contentServicesOne} /> */}
      {/* <Content {...contentServicesTwo} /> */}
      {/* <Features4 {...features4Services} /> */}
      {/* <Testimonials {...testimonialsServices} /> */}
      {/* <FAQs {...faqsServices} /> */}
      <CallToAction {...callToActionServices} />
    </>
  );
};

export default Page;
