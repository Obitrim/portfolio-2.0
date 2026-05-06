import dynamic from 'next/dynamic';
import React from 'react';
import { HiPhone } from 'react-icons/hi';
import { ImLinkedin, ImTwitter } from 'react-icons/im';

import AppContainer from '@/components/v1/hoc/container/index.container';

import * as animationData from '../../../assets/json/programming.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const HomeBannerSection = () => {
  return (
    <section className='v-whitespace bg-darker text-gray-300 md:h-screen'>
      <AppContainer className='grid h-full -translate-y-10 content-center gap-8 md:grid-cols-2 md:gap-0'>
        {/* Left side */}
        <article className='flex flex-col justify-center'>
          <p className='font-grotest text-4xl md:text-5xl'>Hello,</p>
          <h1 className='font-grotest text-4xl md:text-5xl'>
            I'm Obitrim Paul
          </h1>
          <p className='my-6 text-base text-gray-300 md:text-lg'>
            From building intuitive User Interfaces(UI) for fun to building
            <span className='text-primary font-semibold'>
              &nbsp;robust
            </span>,{' '}
            <span className='text-primary font-semibold'>reliable</span> and{' '}
            <span className='text-primary font-semibold'>scalable</span> web
            applications as a{' '}
            <span className='text-primary font-semibold'>
              fullstack developer
            </span>{' '}
            that make a difference.
          </p>

          <div className='mt-4 flex items-center gap-x-4'>
            <a
              className='transition-all duration-300 ease-in-out hover:-rotate-[30deg] hover:text-white'
              href='https://www.linkedin.com/in/paul-obitrim-52304b169/'
              target='_blank'
              rel='noreferrer'
            >
              <ImLinkedin className='h-5 w-5' />
            </a>
            <a
              className='transition-all duration-300 ease-in-out hover:-rotate-[30deg] hover:text-white'
              href='https://twitter.com/EvangelistPau10'
              target='_blank'
              rel='noreferrer'
            >
              <ImTwitter className='h-6 w-6' />
            </a>
            <a
              className='transition-all duration-300 ease-in-out hover:-rotate-[30deg] hover:text-white'
              href='tel:+233544923771'
            >
              <HiPhone className='h-5 w-5' />
            </a>
          </div>
        </article>

        {/* Right side */}
        <div className='pointer-events-none flex items-center justify-center'>
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ height: 'auto', width: '100%', maxWidth: 480 }}
          />
        </div>
      </AppContainer>
    </section>
  );
};

export default HomeBannerSection;
