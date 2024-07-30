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

export const metadata: Metadata = {
    title: 'Services | Roof Cleaning | Quality Roofing Services',
    description: 'Looking for professional roof cleaning in Spokane, WA? We ensures long-lasting roof with safe and effective cleaning methods. Schedule your service today!',
    alternates: {
        canonical: `${SITE.origin}services/roof-cleaning`,
    },
};

const here = {
    title: 'Roof Cleaning',
    callToAction: {
        text: 'GET A FREE ESTIMATE',
        href: '/contact',
        targetBlank: false,
    },
    image: {
        src: heroImg,
        alt: 'Spokane Roofing Solutions hero image',
    },
}

const hero2 = {
    title: (
        <>
            Top <span className="text-red-800">Roof Cleaning</span> services in Spokane.
        </>
    ),
    subtitle: (
        <>
            Keep your roof in healthy conditions with our professional roof cleaning services. We specialize in removing dirt, moss, algae, and debris to enhance your roof appearance and extend its lifespan. We ensure a holistic treatment of your roof, which involves the use of formulated cleaning solution.
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
        src: roofCleaning,
        alt: 'Spokane Roofing Solutions hero image',
    },
}

const contentServicesOne: ContentProps = {
    id: 'contentOne-on-services-one',
    hasBackground: false,
    content: 'Why You Should Get Your Roof Cleaned?',
    items: [
        {
            title: 'Cost-Effective Alternative',
            description: 'Cleaning your roof is significantly cheaper than replacing it because it helps prevent cosmetic or structural damages that could lead to the need for replacement',
        },
        {
            title: 'Improve Aesthetics',
            description: 'A clean roof enhances the overall appearance of a home, improving its curb appeal and potentially increasing property value.',
        },
        {
            title: 'Health Benefits',
            description: 'Mold and mildew on the roof can enter the home, affecting indoor air quality and potentially causing health issues for residents.',
        },
        {
            title: 'Insurance Compliance',
            description: 'Some insurance policies require regular roof maintenance. Neglecting to clean the roof might result in denied claims for roof damage.',
        },

    ],
    isReversed: true,
    isAfterContent: false,
};


const Page = () => {
    return (
        <>
            <HeroServices {...here} />
            <Hero2 {...hero2} />
            <Content {...contentServicesOne} />
            <Features4 {...servicesData} />
            <CallToAction {...callToActionServices} />
        </>
    );
};

export default Page;
