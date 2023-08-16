import React from 'react';

import AppContainer from '@/components/v1/hoc/container/index.container';

const HomeBannerSection = () => {
  return (
    <section className='v-whitespace bg-darker  h-screen text-gray-300'>
      <AppContainer className='grid h-full -translate-y-10 content-center md:grid-cols-2'>
        {/* Left side */}
        <article>
          <p className='font-grotest text-5xl'>Hello,</p>
          {/* <h2 className=' text-2xl '>
            I'm <span className='text-primary'>Obitrim Paul</span>
          </h2> */}
          <h1 className='font-grotest text-5xl'>I'm Obitrim Paul</h1>
          <p className='my-6 text-lg text-gray-300'>
            From building intuitive User Interfaces(UI) for fun to building
            <span className='text-primary font-semibold'>
              &nbsp;robust
            </span>,{' '}
            <span className='text-primary font-semibold'>reliable</span> and{' '}
            <span className='text-primary font-semibold'>scalable</span> web
            applications as a{' '}
            <span className='text-primary'>fullstack developer</span> that make
            a difference.
          </p>
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
        </article>

        {/* Right side */}
        <div></div>
      </AppContainer>
    </section>
  );
};

export default HomeBannerSection;
