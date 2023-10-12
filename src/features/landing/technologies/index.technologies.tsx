import clsx from 'clsx';
import Image from 'next/image';
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

        <div
          className={clsx(
            'grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6',
            'mt-10'
          )}
        >
          {TECHNOLOGIES_AND_TOOLS.map((tool, idx) => (
            <a
              key={tool.url + idx}
              href={tool.url}
              target='_blank'
              rel='noreferrer'
              className={clsx(
                'block  rounded bg-dark px-6 py-10',
                'flex justify-center',
                'border border-gray-900 hover:border-gray-700',
                'group transition-all duration-150'
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {typeof tool.logo == 'string' ? (
                <Image
                  height={60}
                  width={60}
                  src={tool.logo}
                  alt=''
                  className='h-[60px] w-auto grayscale invert transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:invert-0'
                />
              ) : (
                tool.logo
              )}
            </a>
          ))}
        </div>
      </AppContainer>
    </section>
  );
};

export default TechnologiesSection;
