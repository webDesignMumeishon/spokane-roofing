import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
  testimonialsHome,
} from '~/shared/data/pages/home.data';
import FormHero from '~/components/common/FormHero';
import { contact2Contact } from '~/shared/data/pages/contact.data';
import Experience from '~/components/widgets/Experience';
import Features2 from '~/components/widgets/Features2';
import { jsonLd } from '~/shared/data/global.data';

export const metadata: Metadata = {
  title: SITE.title,
};
export default function Page() {
  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero {...heroHome} />
      <FormHero {...contact2Contact.form} containerClass="card mx-auto p-5 md:px-12 md:hidden" btnPosition="right" />
      {/* <Content {...contentHomeTwo} /> */}
      <Experience {...stepsHome} />
      <Content {...contentHomeOne} />

      <Features2 {...featuresHome} />
      <Testimonials {...testimonialsHome} />
      <FAQs2 {...faqs2Home} />
      {/* <Pricing {...pricingHome} /> */}
      {/* <Team {...teamHome} /> */}
      <Contact {...contactHome} />
      {/* <CallToAction2 {...callToAction2Home} /> */}
    </>
  );
}
