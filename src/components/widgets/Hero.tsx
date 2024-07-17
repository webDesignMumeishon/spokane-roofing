import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import heroImg from '~/assets/images/real-state-faq.webp';
import Contact2 from './Contact2';
import { heroContact, contact2Contact, features2Contact } from '~/shared/data/pages/contact.data';
import './style.css'
import Form from '../common/Form';
import FormHero from '../common/FormHero';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne" style={{ backgroundImage: `url(${heroImg.src})` }} className='hero'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
        <div className="py-12 md:py-10 flex">
          <div className="relative flex flex-col xl:flex-row  justify-center md:basis-[40%]" >
            <div className="mx-auto max-w-4xl pb-10 text-start md:pb-16">
              {tagline && (
                <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                  {tagline}
                </p>
              )}
              {title && (
                <h1 className="text-white leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                  {title}
                </h1>
              )}
              <div className="mx-auto max-w-3xl">
                {subtitle &&
                  <p className="mb-6 text-lg text-white font-normal dark:text-slate-400">
                    {subtitle}
                  </p>
                }
                <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                  <p className='btn'>Call us !</p>
                  <p className='btn btn-primary'>(509) 294-3442</p>
                </div>
              </div>
            </div>
          </div>
          <FormHero {...contact2Contact.form} containerClass="card max-w-md mx-auto p-5 md:px-12 hidden md:block" btnPosition="right" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
