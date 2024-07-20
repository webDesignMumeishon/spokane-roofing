import { notFound } from 'next/navigation';
import HeroServices from '~/components/common/HeroServices';
import CallToAction from '~/components/widgets/CallToAction';
import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import { SITE } from '~/config';
import { servicesList } from '~/shared/data/pages/services-list.data';
import { callToActionServices, features2Services } from '~/shared/data/pages/services.data';

export async function generateMetadata({ params }: any) {
    const service = servicesList[params.slug]
    if (!service) {
        return notFound();
    }
    return {
        title: `${service.title}`,
        alternates: {
            canonical: `${SITE.origin}services/${params.slug}`,
        },
    };
}

export default async function Page({ params }: any) {
    const service = servicesList[params.slug]

    if (!service) {
        return notFound();
    }

    return (
        <>
            <HeroServices {...service.hero} />
            <Hero2 {...service.hero2} />
            <Features4 {...features2Services} />
            <CallToAction {...callToActionServices} />
        </>
    );
}