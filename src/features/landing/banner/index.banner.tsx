import clsx from 'clsx';
import React from 'react';
import { RiInstagramLine, RiTwitterLine } from 'react-icons/ri';

import Button from '@/components/v1/buttons/Button';
import AppContainer from '@/components/v1/hoc/container/index.container';

const HomeBannerSection = () => {
  return (
    <section className='v-whitespace'>
      <AppContainer className='grid md:grid-cols-2'>
        {/* Left side */}
        <article>
          <p>
            Hi, <span className='text-primary'>I'm</span>
          </p>
          <h2 className='text-primary text-xl '>Obitrim Paul</h2>
          <h1 className=''>Fullstack Developer</h1>
          <p className='my-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a
            sit dolorum officiis itaque. Repellat ex dolore incidunt blanditiis
            nostrum.
          </p>
          <Button>Let&apos;s Talk</Button>

          {/* social media */}
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
          </section>
        </article>

        {/* Right side */}
        <div></div>
      </AppContainer>
    </section>
  );
};

export default HomeBannerSection;
