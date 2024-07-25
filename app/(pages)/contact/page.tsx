import type { Metadata } from 'next';

import Contact2 from '~/components/widgets/Contact2';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import { SITE } from '~/config';
import { heroContact, contact2Contact, features2Contact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact us | Thanks for Reaching Out !',
  description: 'Your inquiry is our top priority | Contact Us Today to Learn More | Phone: (509) 294-3442',
  alternates: {
    canonical: `${SITE.origin}contact`,
  },
};

const Page = () => {
  return (
    <>
      {/* <Hero {...heroContact} /> */}
      <Contact2 {...contact2Contact} />
      {/* <Features2 {...features2Contact} /> */}
    </>
  );
};

export default Page;
