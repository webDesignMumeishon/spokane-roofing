import { Metadata } from 'next';
import HeroServices from '~/components/common/HeroServices';
import CallToAction from '~/components/widgets/CallToAction';
import { SITE } from '~/config';
import { callToActionServices, heroServices, servicesListServices } from '~/shared/data/pages/services.data';
import ServicesList from '~/components/widgets/ServicesList';

export const metadata: Metadata = {
  title: 'Services We Provide in Spokane, WA',
  description:'Services | We Offer a Variety of Services | Find What You Are Looking For',
  alternates: {
    canonical: `${SITE.origin}services/roof-replacement`,
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
