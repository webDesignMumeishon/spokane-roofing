import { SITE } from '~/config';
import { Metadata } from 'next';

import HeroServices from '~/components/common/HeroServices';
import CallToAction from '~/components/widgets/CallToAction';
import Features4 from '~/components/widgets/Features4';
import { callToActionServices, } from '~/shared/data/pages/services.data';
import { servicesData } from '~/shared/data/global.data';
import Hero2 from '~/components/widgets/Hero2';
import Content from '~/components/widgets/Content';
import FAQs3 from '~/components/widgets/FAQs3';
import Content2 from '~/components/widgets/Content2';
import ContentImg from '~/components/widgets/content-images/ContentImg';
import {
    mossRemovalHero,
    mossRemovalSubHero,
    mossRemovalContentServicesOne,
    mossRemovalContentServicesTwo,
    mossRemovalContentServicesThree,
    mossRemovalFaqsMetalRoofing,
} from "~/shared/data/pages/services/moss-removal"

export const metadata: Metadata = {
    title: 'Roof Moss Removal | Quality Roofing Services',
    description: ' Maintain the integrity and aesthetics of your home with Moss Removal',
    alternates: {
        canonical: `${SITE.origin}services/moss-removal`,
    },
};


const Page = () => {
    return (
        <>
            <HeroServices {...mossRemovalHero} />
            <Hero2 {...mossRemovalSubHero} />
            <Content {...mossRemovalContentServicesOne} />
            <Content2 {...mossRemovalContentServicesTwo} />
            <ContentImg {...mossRemovalContentServicesThree} />
            <Features4 {...servicesData} />
            {/* <FAQs3 {...mossRemovalFaqsMetalRoofing} /> */}
            <CallToAction {...callToActionServices} />
        </>
    );
};

export default Page;
