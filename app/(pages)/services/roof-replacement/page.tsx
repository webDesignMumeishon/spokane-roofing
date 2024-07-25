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
    contentServicesTwo,
    faqsServices,
    features2Services,
    features4Services,
    heroServices,
    testimonialsServices,
    servicesListServices
} from '~/shared/data/pages/services.data';
import ServicesList from '~/components/widgets/ServicesList';
import { servicesData } from '~/shared/data/global.data';
import heroImg from '~/assets/images/spokane-hero-services.png';
import Hero2 from '~/components/widgets/Hero2';
import roofCleaning from '~/assets/images/roof-cleaning.webp';
import { ContentProps } from '~/shared/types';
import roofReplacement from '~/assets/images/roof-replacement.webp';
import roofRepair from '~/assets/images/roof-repair.webp';
import metalRoofing from '~/assets/images/roofing-metal.webp';

export const metadata: Metadata = {
    title: 'Services | Quality Roofing Services',
    description: 'Looking for reliable roof replacement services in Spokane, WA? We provide top-quality roofing solutions to protect your home. Get a free estimate today!',
    alternates: {
        canonical: `${SITE.origin}services`,
    },
};

const hero = {
    title: 'Roofing Replacement',
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
            Our Company Provides Quality <span className="text-red-800">Roofing Replacements</span> in Spokane.
        </>
    ),
    subtitle: (
        <>
            If your home’s roof is deteriorated, leaking, or storm-damaged, a replacement roof provides the durable protection your most valuable investment needs.
        </>
    ),
    callToAction: {
        text: 'BOOK NOW',
        href: '/contact',
        // icon: IconDownload,
        targetBlank: false,
    },
    callToAction2: {
        text: 'Services',
        href: '/services',
    },
    image: {
        src: roofReplacement,
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
