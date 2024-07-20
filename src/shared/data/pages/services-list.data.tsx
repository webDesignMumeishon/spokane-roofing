
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
                alt: 'Hero TailNext',
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
                alt: 'Hero TailNext',
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
                alt: 'Hero TailNext',
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
                alt: 'Hero TailNext',
            },
        }
    }
};
