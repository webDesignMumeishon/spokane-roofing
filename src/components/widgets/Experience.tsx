import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';
import { StepsProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Timeline from '../common/Timeline';
import Headline from '../common/Headline';

const Experience = ({
    id,
    header,
    items,
    isImageDisplayed = true,
    image,
    isReversed = false,
    hasBackground = false,
}: StepsProps) => (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl px-8">
        <div className={`flex flex-col gap-8 md:gap-12 ${isReversed ? 'md:flex-row-reverse' : ''} ${isImageDisplayed ? 'md:flex-row' : ''}`} >
            <div className={`md:py-4 ${isImageDisplayed ? 'md:pr-16 md:rtl:pr-0 md:rtl:pl-16 md:basis-1/2' : 'max-w-4xl mx-auto md:self-center'}`} >
                <mark style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} className="text-primary-800">Revolutionary</mark>
                {header && (
                    <Headline
                        header={header}
                        containerClass={isImageDisplayed ? 'text-left rtl:text-right' : ''}
                        titleClass="text-3xl sm:text-4xl"
                        subtitleClass={isImageDisplayed ? 'text-left rtl:text-right' : ''}
                    />
                )}
                <p className='text-lg'>From roof repairs to  new metal roof installation. We ensure efficiency and adhere strictly to our project start and finish dates. We are the best Spokane roofing contractor.</p>
                <div className='flex mt-10 gap-4 flex-col md:flex-row'>
                    <div>
                        <p className='font-bold text-xl'>Experience</p>
                        <p className='text-lg'>We are the best roofing contractors in the area with 15 years of experience and certified workers. </p>
                    </div>

                    <div>
                        <p className='font-bold text-xl'>Excellence</p>
                        <p className='text-lg'>We are committed to providing exceptional value through competitive pricing and outstanding customer service.</p>
                    </div>
                </div>
            </div>
            {isImageDisplayed && (
                <div className="relative md:basis-1/2">
                    {image && (
                        <Image
                            src={image.src}
                            width={400}
                            height={768}
                            alt={'Spokane Roofing delivering work to their clients'}
                            placeholder="blur"
                            className="inset-0 object-cover object-top w-full rounded-md shadow-lg md:h-full bg-gray-400 dark:bg-slate-700"
                            quality={50}
                        />
                    )}
                </div>
            )}
        </div>
    </WidgetWrapper>
);

export default Experience;
