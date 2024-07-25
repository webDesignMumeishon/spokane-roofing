import type { Metadata } from 'next';

import CallToAction from '~/components/widgets/CallToAction';
import FAQs4 from '~/components/widgets/FAQs4';
import { heroFaqs, callToActionFaqs, faqs4Faqs } from '~/shared/data/pages/faqs.data';
import Hero from '~/components/widgets/Hero';
import { SITE } from '~/config';

export const metadata: Metadata = {
    title: 'FAQs | We Are Here to Help',
    description: 'Frequently Asked Questions | Contact Us for Further Assistance | Quick Answers to Your Questions',
    alternates: {
        canonical: `${SITE.origin}faqs`,
    },
};

const Page = () => {
    return (
        <>
            <Hero {...heroFaqs} />
            <FAQs4 {...faqs4Faqs} />
            <CallToAction {...callToActionFaqs} />
        </>
    );
};

export default Page;