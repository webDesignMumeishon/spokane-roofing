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
      <h1 className=" text-center leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
        Get in touch !
      </h1>
      <Contact2 {...contact2Contact} />
      {/* <Features2 {...features2Contact} /> */}
    </>
  );
};

export default Page;
