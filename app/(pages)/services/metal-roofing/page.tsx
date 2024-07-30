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
import { ContentProps, FAQsProps } from '~/shared/types';
import Content from '~/components/widgets/Content';
import FAQs2 from '~/components/widgets/FAQs2';
import { faqs2Home } from '~/shared/data/pages/home.data';
import FAQs3 from '~/components/widgets/FAQs3';

export const metadata: Metadata = {
    title: 'Services | Metal Roofing | Quality Roofing Services',
    description: 'Learn why metal roofing is the best choice for your home. Discover the advantages, durability, and cost savings of metal roofs today!',
    alternates: {
        canonical: `${SITE.origin}services/metal-roofing`,
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
        alt: 'Spokane Roofing Solutions hero image',
    },
}

const hero2 = {
    title: (
        <>
            Transform Your Home with<span className="text-red-800">Metal Roofing</span>: Durable, Stylish, and Cost-Effective.
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
        alt: 'Spokane Roofing Solutions hero image',
    },
}

const contentServicesOne: ContentProps = {
    id: 'contentOne-on-services-one',
    hasBackground: false,
    content: 'Benefits',
    items: [
        {
            title: 'Durability',
            description: 'Metal roofs can last 50 years or more, resisting extreme weather conditions.',
        },
        {
            title: 'Energy Efficiency',
            description: 'Reflective properties help reduce cooling costs by up to 25%.',
        },
        {
            title: 'Low Maintenance',
            description: 'Requires minimal upkeep compared to traditional roofs.',
        },
        {
            title: 'Aesthetic Appeal',
            description: 'Available in various styles and colors to match any home design.',
        },
        {
            title: 'Eco-Friendly',
            description: 'Often made from recycled materials and fully recyclable at the end of their lifespan.',
        },

    ],
    isReversed: true,
    isAfterContent: false,
    header: {
        title: 'What is metal Roofing ?',
        subtitle: 'Metal roofing is a long-lasting, energy-efficient, and stylish alternative to traditional roofing materials. Made from high-quality metals like steel, aluminum, and copper, it offers unmatched durability and a sleek appearance.'
    }
};

const faqs2MetalRoofing: FAQsProps = {
    id: 'faqsTwo-on-home',
    hasBackground: false,
    header: {
        title: 'Frequently Asked Questions',
        subtitle: '',
        tagline: 'FAQS',
    },
    items: [
        {
            title: 'How long does a metal roof last?',
            description: `Metal roofs can last 50 years or more with proper maintenance, significantly longer than traditional asphalt roofs.`,
        },
        {
            title: 'Is metal roofing noisy during rain?',
            description: `With proper insulation, metal roofing is no noisier than other roofing materials during rain or hail.`,
        },
        {
            title: "Does metal roofing attract lightning?",
            description: `No, metal roofing does not attract lightning. In fact, it disperses energy and is non-combustible, making it a safer option.`,
        },
        {
            title: "Can I install a metal roof over my existing roof?",
            description: `Yes, in many cases, metal roofing can be installed over existing shingles, reducing installation time and costs.`,
        },
        {
            title: "Is metal roofing energy efficient?",
            description: `Yes, metal roofs reflect solar radiant heat, which can reduce cooling costs by up to 25%.`,
        },
        {
            title: "What maintenance is required for metal roofing?",
            description: `Metal roofing requires minimal maintenance, primarily periodic inspections and cleaning to remove debris.`,
        },
    ],
};

const Page = () => {
    return (
        <>
            <HeroServices {...hero} />
            <Hero2 {...hero2} />
            <Content {...contentServicesOne} />
            <Features4 {...servicesData} />
            <FAQs3 {...faqs2MetalRoofing} />
            <CallToAction {...callToActionServices} />
        </>
    );
};

export default Page;
