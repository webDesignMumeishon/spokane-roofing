import { Metadata } from 'next';

import HeroServices from '~/components/common/HeroServices';
import CallToAction from '~/components/widgets/CallToAction';
import Features4 from '~/components/widgets/Features4';
import { SITE } from '~/config';
import { callToActionServices } from '~/shared/data/pages/services.data';
import { servicesData } from '~/shared/data/global.data';
import heroImg from '~/assets/images/spokane-hero-services.png';
import Hero2 from '~/components/widgets/Hero2';
import roofRepair from '~/assets/images/roof-repair.webp';
import Content from '~/components/widgets/Content';
import { ContentProps } from '~/shared/types';
import Features2 from '~/components/widgets/Features2';
import ContentImg from '~/components/widgets/ContentImg';
import damageRoof from '~/assets/images/damage-roof.webp';
import ContentImg2 from '~/components/widgets/ContentImg2';

export const metadata: Metadata = {
    title: 'Services | Roof Repair | Quality Roofing Services',
    description: 'Need professional roof repair in Spokane, WA? We quickly fix leaks, damage, and more to keep your home safe. Contact us for a free inspection!',
    alternates: {
        canonical: `${SITE.origin}services/roof-repair`,
    },
};

const hero = {
    title: 'Roofing Repair',
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
            Our Company Provides Quality <span className="text-red-800">Roofing Repairs</span> in Spokane.
        </>
    ),
    subtitle: (
        <>
            Roof damage can occur for many reasons, including weather events, poor installation, or simply the natural aging process of your roof. Regardless of the cause, it’s important to address any roof damage quickly to prevent further damage to your home.
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
        src: roofRepair,
        alt: 'Spokane Roofing Solutions hero image',
    },
}

const contentServicesOne: ContentProps = {
    id: 'contentOne-on-services-one',
    hasBackground: false,
    content: 'Common Roof Damage Reasons',
    items: [
        {
            title: 'Prolonged rainfall can cause leaks.',
        },
        {
            title: 'Hailstones can dent and crack roofing materials.',
        },
        {
            title: 'High winds can lift and remove shingles or tiles.',
        },
        {
            title: 'Accumulated snow adds weight, and ice dams cause water backup.',
        },
        {
            title: 'Roofing materials degrade over time.',
        },
        {
            title: 'Incorrect installation leads to various issues.',
        },
        {
            title: 'Birds and squirrels can cause significant roof damage.',
        },
        {
            title: 'Growth traps moisture, deteriorating materials.',
        },
        {
            title: 'Heavy foot traffic can damage the roof surface.',
        },
        {
            title: 'Poor-quality materials fail prematurely.',
        },
    ],
    image: {
        src: damageRoof,
        alt: 'Colorful Image',
    },
    isReversed: true,
    isAfterContent: false,
};

const Page = () => {
    return (
        <>
            <HeroServices {...hero} />
            <Hero2 {...hero2} />
            <ContentImg2 {...contentServicesOne} />
            <Features4 {...servicesData} />
            <CallToAction {...callToActionServices} />
        </>
    );
};

export default Page;
