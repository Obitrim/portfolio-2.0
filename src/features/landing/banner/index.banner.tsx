import React from 'react';
import { HiPhone } from 'react-icons/hi';
import { ImLinkedin, ImTwitter } from 'react-icons/im';
import Lottie from 'react-lottie';

import AppContainer from '@/components/v1/hoc/container/index.container';

import * as animationData from '../../../assets/json/programming.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const HomeBannerSection = () => {
  return (
    <section className='v-whitespace bg-darker  h-screen text-gray-300'>
      <AppContainer className='grid h-full -translate-y-10 content-center overflow-x-hidden md:grid-cols-2'>
        {/* Left side */}
        <article className='flex max-w-sm flex-col justify-center '>
          <div className=''>
            <p className='font-grotest text-5xl'>Hello,</p>
            <h1 className='font-grotest text-5xl'>I'm Obitrim Paul</h1>
            <p className='my-6 text-lg text-gray-300'>
              From building intuitive User Interfaces(UI) for fun to building
              <span className='text-primary font-semibold'>
                &nbsp;robust
              </span>,{' '}
              <span className='text-primary font-semibold'>reliable</span> and{' '}
              <span className='text-primary font-semibold'>scalable</span> web
              applications as a{' '}
              <span className='text-primary'>fullstack developer</span> that
              make a difference.
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
            {/* <Button>Let&apos;s Talk</Button>

          <section className={clsx('mt-8', 'flex items-center gap-10')}>
            <p>Social media</p>
            <div>
              <a href='#'>
                <RiInstagramLine className='text-2xl' />
              </a>
              <a href='#'>
                <RiTwitterLine className='text-2xl' />
              </a>
            </div>
          </section> */}
          </div>
        </article>

        {/* Right side */}
        <div className='pointer-events-none md:scale-150'>
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      </AppContainer>
    </section>
  );
};

export default HomeBannerSection;
