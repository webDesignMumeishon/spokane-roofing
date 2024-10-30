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
import ContentImg from '~/components/widgets/content-images/ContentImg';

export const metadata: Metadata = {
    title: 'Metal Roofing | Quality Roofing Services',
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
        subtitle: 'Metal roofing has gained immense popularity among Spokane homeowners and businesses for good reason. Here are some of the key benefits'
    },
    hasBackground: false,
    content: 'The Benefits of Metal Roofing',
    items: [
        {
            title: 'Durability',
            description: 'Metal roofs are built to last. They can withstand extreme weather conditions, including heavy rain, snowfall, and high winds. This resilience ensures that your investment remains safe and intact for years to come.',
        },
        {
            title: 'Energy Efficiency',
            description: 'Insulating properties of metal roofing keep your home comfortable throughout the seasons. Metal roofs reflect solar heat, helping to reduce cooling costs in the summer months and maintain warmth during winter.',
        },
        {
            title: 'Low Maintenance',
            description: 'Unlike traditional roofing materials, metal roofs require minimal upkeep. This low maintenance aspect saves you time and money over the lifespan of your roof.',
        },
        {
            title: 'Aesthetic Appeal',
            description: 'Metal roofing offers a modern look that enhances the visual appeal of your property. With various colors and styles available, you can customize your roof to complement your home’s design.',
        },
        {
            title: 'Environmentally Friendly',
            description: 'Most metal roofing materials are recyclable. Choosing metal roofing contributes to sustainable practices, which is an important consideration for many Spokane residents.',
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
        subtitle: 'At Spokane Roofing Solutions Company, we offer a range of metal roofing services tailored to your unique requirements.'
    },
    image: {
        src: metalRoofer,
        alt: 'Metal roofer Standing on a metal roof'
    },
    hasBackground: false,
    content: 'Our Metal Roofing Services',
    items: [
        {
            title: 'Metal Roofing Installation',
            description: 'We pride ourselves on our professional installation services. Our qualified team ensures that your metal roof is properly installed, maximizing its lifespan. We assess your property’s specific needs and help you choose the right type of metal roofing.',
        },
        {
            title: 'Metal Roofing Repair',
            description: 'If your metal roof has suffered damage, we provide prompt repair services. Our experts can quickly identify and address any issues, reducing the risk of further damage.',
        },
        {
            title: 'Metal Roofing Maintenance',
            description: 'Regular maintenance extends the life of your metal roof. We offer comprehensive maintenance plans to keep your roof in top condition. This includes inspections, cleaning, and timely repairs.',
        },
    ],
    isReversed: true,
    isAfterContent: false,
};

const contentServicesFour: ContentProps = {
    id: 'metal-roofing-services',
    header: {
        title: 'Types of Metal Roofing We Offer',
        subtitle: 'Spokane Roofing Solutions Company provides various types of metal roofing solutions. Here are some of the most popular options:'
    },
    hasBackground: false,
    content: '',
    items: [
        {
            title: 'Standing Seam Metal Roofing',
            description: 'Standing seam metal roofing is recognized for its sleek design and durability. This type features interlocking panels that create raised seams, which not only enhance appearance but also prevent water leaks. ',
        },
        {
            title: 'Corrugated Metal Roofing',
            description: 'Corrugated metal roofing is a classic choice that boasts strength and affordability. Its unique wavy design provides excellent durability and requires minimal maintenance.',
        },
        {
            title: 'Metal Shingle Roofing',
            description: 'Metal shingles combine the advantages of metal roofing with the aesthetic of traditional shingles. They maintain an appealing look while providing exceptional durability and energy efficiency.',
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
            <Content {...contentServicesFour} />
            <Features4 {...servicesData} />
            <FAQs3 {...faqs2MetalRoofing} />
            <CallToAction {...callToActionServices} />
        </>
    );
};

export default Page;
