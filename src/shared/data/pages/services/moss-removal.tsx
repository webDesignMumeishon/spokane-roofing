import { Metadata } from 'next';
import { SITE } from '~/config';
import heroImg from '~/assets/images/spokane-hero-services.png';
import roofMossRemoval2 from '~/assets/images/roof-moss-removal.webp';
import roofMossRemoval from '~/assets/images/roof-moss-removal-2.webp';
import { ContentProps, FAQsProps } from '~/shared/types';

export const metadata: Metadata = {
    title: '',
    description: '',
    alternates: {
        canonical: `${SITE.origin}services/moss-removal`,
    },
};

export const mossRemovalHero = {
    title: 'Roof Moss Removal',
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

export const mossRemovalSubHero = {
    title: (
        <>
            Maintain the integrity and aesthetics of your home with <span className="text-red-800">Moss Removal</span>
        </>
    ),
    subtitle: (
        <>
            Moss growth on your roof isn’t just an eyesore; it can lead to significant damage if not addressed. Let's dive deeper into the importance of roof moss removal and the comprehensive services we offer.
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
        src: roofMossRemoval2,
        alt: 'Spokane Roofing Solutions hero image',
    },
}

export const mossRemovalContentServicesOne: ContentProps = {
    id: 'roof-moss-removal-services',
    header: {
        title: 'Why Roof Moss Removal is Essential ?',
        subtitle: 'Moss thrives in damp, shaded areas and can create a layer that traps moisture against your roofing materials. Over time, this leads to rot, shingle damage, and other costly repairs. Left unchecked, moss can significantly shorten the lifespan of your roof.'
    },
    hasBackground: false,
    content: 'Key reasons to consider roof moss removal include',
    items: [
        {
            title: 'Preventing Damage',
            description: 'The buildup of moss can lift shingles and tiles, allowing water to infiltrate and cause leaks.',
        },
        {
            title: 'Enhancing Curb Appeal',
            description: 'A clean roof adds to the overall visual appeal of your home, increasing its market value.',
        },
        {
            title: 'Improving Longevity',
            description: 'By removing moss, you can extend the lifespan of your roofing materials, saving you money in the long run.',
        },
        {
            title: 'Environmental Impact',
            description: 'Metal roofs are often made from recycled materials and are fully recyclable at the end of their life, making them an eco-friendly choice.',
        },

    ],
    isReversed: true,
    isAfterContent: false,
};

export const mossRemovalContentServicesTwo: ContentProps = {
    id: 'roof-moss-removal-services-2',
    header: {
        title: 'The Risks of DIY Moss Removal',
        subtitle: 'While some homeowners may consider tackling moss removal themselves, this approach can be risky. Climbing onto your roof can lead to accidents, and using the wrong chemicals or equipment can damage your roofing materials. Instead, it is best to rely on professionals who have the expertise and tools to handle this task safely and effectively.'
    },
    hasBackground: false,
    content: 'Benefits of Choosing Us',
    items: [
        {
            title: 'Experienced Professionals',
            description: 'We stand behind the quality of our work. Our commitment to excellence means that we don’t collect payment until you are completely satisfied with the results. We take pride in our reputation and aim to ensure every customer leaves happy',
        },
        {
            title: 'Satisfaction Guaranteed',
            description: 'We stand behind the quality of our work. Our commitment to excellence means that we don’t collect payment until you are completely satisfied with the results. We take pride in our reputation and aim to ensure every customer leaves happy.',
        },
    ],
    isReversed: true,
    isAfterContent: false,
};

export const mossRemovalContentServicesThree: ContentProps = {
    id: 'roof-moss-removal-services-3',
    header: {
        title: 'Our Roof Moss Removal Process',
        subtitle: ''
    },
    image: {
        src: roofMossRemoval,
        alt: ''
    },
    hasBackground: false,
    content: '',
    items: [
        {
            title: 'Assessment',
            description: 'The first step in our roof moss removal Spokane service involves a comprehensive assessment of your roof\'s condition. Our trained professionals will determine the extent of moss growth and identify any potential areas of damage that may require further attention.',
        },
        {
            title: 'Eco-Friendly Treatment',
            description: 'At Keeping It Clean, we prioritize the use of eco-friendly products. Our roof moss removal process starts with applying a safe, biodegradable solution designed to kill moss at its roots without harming the surrounding environment or plants.',
        },
        {
            title: 'Removal',
            description: 'Once the treatment has taken effect, our team will proceed with the physical removal of moss. We use specialized equipment to ensure that moss is effectively cleared from your roof without causing damage to the surface or structure.',
        },
        {
            title: 'Prevention',
            description: 'To help prevent the recurrence of moss growth, we offer additional services such as installing zinc or copper strips. As rainwater washes over these materials, it creates an environment that is less conducive to moss regrowth.',
        },
    ],
    isReversed: true,
    isAfterContent: false,
};

export const mossRemovalFaqsMetalRoofing: FAQsProps = {
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