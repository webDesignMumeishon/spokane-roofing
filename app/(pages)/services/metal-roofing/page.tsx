import { Metadata } from 'next';

import HeroServices from '~/components/common/HeroServices';
import CallToAction from '~/components/widgets/CallToAction';
import Features4 from '~/components/widgets/Features4';
import { SITE } from '~/config';
import { callToActionServices, } from '~/shared/data/pages/services.data';
import { servicesData } from '~/shared/data/global.data';
import heroImg from '~/assets/images/spokane-hero-services.png';
import metalRoofer from '~/assets/images/metal-roofer.webp';
import Hero2 from '~/components/widgets/Hero2';
import metalRoofing from '~/assets/images/metal-roofing.webp';
import { ContentProps, FAQsProps } from '~/shared/types';
import Content from '~/components/widgets/Content';
import FAQs2 from '~/components/widgets/FAQs2';
import { faqs2Home } from '~/shared/data/pages/home.data';
import FAQs3 from '~/components/widgets/FAQs3';
import Content2 from '~/components/widgets/Content2';
import ContentImg from '~/components/widgets/ContentImg';

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
            Transform Your Home with <span className="text-red-800">Metal Roofing</span>: Durable, Stylish, and Cost-Effective.
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
    id: 'metal-roofing-services',
    header: {
        title: 'Why Choose Metal Roofing?',
        subtitle: 'Metal roofing is a long-lasting, energy-efficient, and stylish alternative to traditional roofing materials. Made from high-quality metals like steel, aluminum, and copper, it offers unmatched durability and a sleek appearance.'
    },
    hasBackground: false,
    content: 'The Benefits of Metal Roofing',
    items: [
        {
            title: 'Durability',
            description: 'Metal roofs are resistant to extreme weather conditions, including heavy rain, snow, and high winds. They are also less prone to cracking, shrinking, or eroding, ensuring a longer lifespan.',
        },
        {
            title: 'Energy Efficiency',
            description: 'Reflective properties help reduce cooling costs by up to 25%.',
        },
        {
            title: 'Low Maintenance',
            description: 'Unlike traditional roofing materials that require frequent repairs and replacements, metal roofing is low maintenance and can last up to 50 years or more with minimal upkeep.',
        },
        {
            title: 'Environmental Impact',
            description: 'Metal roofs are often made from recycled materials and are fully recyclable at the end of their life, making them an eco-friendly choice.',
        },

    ],
    isReversed: true,
    isAfterContent: false,
};

const contentServicesTwo: ContentProps = {
    id: 'metal-roofing-services-2',
    header: {
        title: 'Say Goodbye to Common Roofing Issues',
        subtitle: 'Homeowners often face several issues with traditional roofing materials that can be resolved with metal roofing'
    },
    hasBackground: false,
    content: 'Common Pain Points Solved by Metal Roofing',
    items: [
        {
            title: 'Frequent Repairs',
            description: 'Traditional shingles can crack, warp, and break over time, leading to costly repairs. Metal roofing is highly durable and resistant to damage.',
        },
        {
            title: 'High Energy Bills',
            description: 'Poor insulation from traditional roofs can lead to higher energy costs. Metal roofing provides better insulation and energy efficiency.',
        },
        {
            title: 'Short Lifespan',
            description: ' Asphalt shingles and other materials typically last 20-30 years. Metal roofing can last over 50 years, reducing the frequency and cost of replacements.',
        },
        {
            title: 'Mold and Mildew',
            description: 'Traditional roofs can retain moisture, leading to mold and mildew growth. Metal roofing sheds water effectively, preventing these issues.',
        },

    ],
    isReversed: true,
    isAfterContent: false,
};

const contentServicesThree: ContentProps = {
    id: 'metal-roofing-services-3',
    header: {
        title: 'Comprehensive Metal Roofing Solutions',
        subtitle: 'We offer a full range of metal roofing services to meet your needs'
    },
    image: {
        src: metalRoofer,
        alt: 'Metal roofer Standing on a metal roof'
    },
    hasBackground: false,
    content: 'Our Metal Roofing Services',
    items: [
        {
            title: 'Custom Metal Roof Installation',
            description: 'Our team of experts will work with you to design and install a metal roof that fits your home’s architecture and your personal style preferences.',
        },
        {
            title: 'Metal Roof Repair and Maintenance',
            description: ' Keep your metal roof in top condition with our repair and maintenance services. From minor fixes to major repairs, we’ve got you covered.',
        },
        {
            title: 'Roof Inspection and Consultation',
            description: 'Not sure if metal roofing is right for you? Our professionals will conduct a thorough inspection and provide a detailed consultation to help you make an informed decision.',
        },
    ],
    isReversed: true,
    isAfterContent: false,
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
            <Content2 {...contentServicesTwo} />
            <ContentImg {...contentServicesThree} />
            <Features4 {...servicesData} />
            <FAQs3 {...faqs2MetalRoofing} />
            <CallToAction {...callToActionServices} />
        </>
    );
};

export default Page;
