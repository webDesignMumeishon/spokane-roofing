
import heroImg from '~/assets/images/spokane-hero-services.png';

import roofReplacement from '~/assets/images/roof-replacement.webp';
import roofRepair from '~/assets/images/roof-repair.webp';

export const servicesList: any = {
    "roof-repair": {
        title: 'Roofing Repair',
        hero: {
            title: 'Roofing Repair',
            callToAction: {
                text: 'GET A FREE ESTIMATE',
                href: '/contact',
                targetBlank: false,
            },
            image: {
                src: heroImg,
                alt: 'Spokane roofing hero image',
            },
        },
        hero2: {
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
                // icon: IconDownload,
                targetBlank: false,
            },
            callToAction2: {
                text: 'Services',
                href: '/services',
            },
            image: {
                src: roofRepair,
                alt: 'Spokane roofing hero image',
            },
        }
    },
    "roof-replacement": {
        title: 'Roofing Replacement',
        hero: {
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
        },
        hero2: {
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
    },
    "metal-roofing": {
        title: 'Metal Roofing',
        hero: {
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
        },
        hero2: {
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
                src: roofReplacement,
                alt: 'Spokane roofing hero image',
            },
        }
    }
};
