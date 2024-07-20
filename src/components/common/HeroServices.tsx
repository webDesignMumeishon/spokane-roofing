
import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import heroImg from '~/assets/images/real-state-faq.webp';
import { heroContact, contact2Contact, features2Contact } from '~/shared/data/pages/contact.data';
import './style.css'
import Form from '../common/Form';
import FormHero from '../common/FormHero';
import CTA from './CTA';

const HeroServices = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
    return (
        <section id="heroOne" style={{ backgroundImage: `url(${heroImg.src})` }} className='hero'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
                <div className="py-12 md:py-10">
                    <div className="relative flex flex-col xl:flex-row  justify-center md:basis-[40%] gap-4" >
                        <div className="mx-auto text-start md:pt-16 flex gap-10">
                            {tagline && (
                                <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                                    {tagline}
                                </p>
                            )}
                            <div className='flex items-end'>
                                {title && (
                                    <h1 className="text-white leading-tighter font-heading text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                                        {title}
                                    </h1>
                                )}
                            </div>
                            <div className="mx-auto">
                                <div className="text-white flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-col sm:justify-center">
                                    <p className='text-3xl'>(509) 294-3442</p>
                                    <CTA callToAction={callToAction} linkClass='btn btn-primary' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroServices;
