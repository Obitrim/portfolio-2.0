import clsx from 'clsx';
import React from 'react';

import AppContainer from '@/components/v1/hoc/container/index.container';

import { TECHNOLOGIES_AND_TOOLS } from '@/constant/data.constant';

const TechnologiesSection = () => {
  return (
    <section className='v-whitespace bg-darker'>
      <AppContainer>
        <p>
          <span className='text-light-primary'>Technologies</span> / Tools
        </p>
        <strong className={clsx('text-3xl')}>What I use</strong>
        <div className={clsx('grid grid-cols-4 gap-10', 'mt-10')}>
          {TECHNOLOGIES_AND_TOOLS.map((tool, idx) => (
            <a
              key={tool.url + idx}
              href={tool.url}
              target='_blank'
              rel='noreferrer'
              className={clsx(
                'block rounded bg-dark px-6 py-10',
                'flex justify-center',
                'border border-gray-900 hover:border-gray-700',
                'transition-all duration-150'
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tool.logo} alt='' width='60' height='60' />
            </a>
          ))}
        </div>
      </AppContainer>
    </section>
  );
};

export default TechnologiesSection;
