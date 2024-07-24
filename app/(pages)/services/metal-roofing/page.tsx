import { Metadata } from 'next';

import HeroServices from '~/components/common/HeroServices';
import CallToAction from '~/components/widgets/CallToAction';
import Features4 from '~/components/widgets/Features4';
import { SITE } from '~/config';
import { callToActionServices, } from '~/shared/data/pages/services.data';
import { servicesData } from '~/shared/data/global.data';
import heroImg from '~/assets/images/spokane-hero-services.png';
import Hero2 from '~/components/widgets/Hero2';
import metalRoofing from '~/assets/images/roofing-metal.webp';

export const metadata: Metadata = {
    title: 'Services | Quality Roofing Services',
    alternates: {
        canonical: `${SITE.origin}services`,
    },
};

const hero = {
    title: 'Metal Roofing',
    callToAction: {
        text: 'GET A FREE ESTIMATE',
        href: '/contact',
        targetBlank: false,
    },
    image: {
        src: heroImg,
        alt: 'Spokane roofing hero image',
    },
}

const hero2 = {
    title: (
        <>
            Our Company Provides Quality <span className="text-red-800">Metal Roofing</span> in Spokane.
        </>
    ),
    subtitle: (
        <>
            Enhance the value and curb appeal of your home with our expert metal roofing services. Contact us today for a free consultation and discover the superior benefits of metal roofing.
        </>
    ),
    callToAction: {
        text: 'BOOK NOW',
        href: '/contact',
        targetBlank: false,
    },
    callToAction2: {
        text: 'Services',
        href: '/services',
    },
    image: {
        src: metalRoofing,
        alt: 'Spokane roofing hero image',
    },
}

const Page = () => {
    return (
        <>
            <HeroServices {...hero} />
            <Hero2 {...hero2} />
            <Features4 {...servicesData} />
            <CallToAction {...callToActionServices} />
        </>
    );
};

export default Page;
