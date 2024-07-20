import Image from 'next/image';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';
import { ServicesListProps } from '~/shared/types';

const ServicesList = ({
    items,
    id,
    hasBackground = false,
}: ServicesListProps) => (
    <WidgetWrapper
        id={id}
        hasBackground={hasBackground}
        containerClass={`flex flex-col gap-6`}
    >
        {items.map((service) => {
            return (
                <div className='flex flex-row gap-10'>
                    <Image
                        src={service.image.src}
                        alt={'logo'}
                        width={500}
                        height={300}
                        loading="eager"
                        priority
                    />
                    <div className='flex flex-col justify-center gap-4 text-slate-500'>
                        <h1 className='text-primary-700 text-2xl font-semibold'>{service.title}</h1>
                        <p>{service.description}</p>
                        <CTA
                            callToAction={service.callToAction}
                            linkClass="btn btn-primary m-1 py-2 px-5 text-sm font-semibold shadow-none md:px-6 w-max"
                        />
                    </div>
                </div>
            )
        })}


    </WidgetWrapper>
);

export default ServicesList;
