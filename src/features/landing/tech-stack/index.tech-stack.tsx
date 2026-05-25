import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

import clsxm from '@/lib/clsxm';
import { useInView } from '@/hooks/useInView';

import AppContainer from '@/components/v1/hoc/container/index.container';

import { FEATURED_TECH } from '@/constant/data.constant';

const TechStackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id='skills'
      className='py-8 md:py-10'
      style={{ backgroundColor: 'var(--strip-dark)' }}
    >
      <AppContainer>
        <div className='flex items-center justify-between gap-4'>
          <div className={clsxm(isInView && 'animate-spray-in')}>
            <h2 className='graffiti-heading text-2xl text-white md:text-3xl'>
              MY{' '}
              <span
                className='brush-underline'
                style={{ color: 'var(--graffiti-blue)' }}
              >
                TECH STACK
              </span>
            </h2>
          </div>

          <Link
            href='/resume'
            className={clsxm(
              'flex-shrink-0 text-xs font-bold uppercase tracking-widest transition-colors duration-200',
              isInView && 'animate-spray-in delay-200'
            )}
            style={{ color: 'var(--graffiti-orange)' }}
          >
            &amp; MORE →
          </Link>
        </div>

        <div
          className={clsxm(
            'mt-6 flex items-center gap-3 overflow-x-auto pb-2 md:gap-4',
            isInView && 'animate-slide-up delay-200'
          )}
          style={{ scrollbarWidth: 'none' }}
        >
          {FEATURED_TECH.map((tech, idx) => (
            <a
              key={tech.name + idx}
              href={tech.url}
              target='_blank'
              rel='noreferrer noopener'
              className='tech-strip-card flex-shrink-0'
              title={tech.name}
              style={{ minWidth: '76px' }}
            >
              <div className='flex h-9 w-9 items-center justify-center text-white'>
                {typeof tech.logo === 'string' ? (
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={36}
                    height={36}
                    className='h-9 w-9 object-contain'
                  />
                ) : (
                  <span className='text-gray-300'>{tech.logo}</span>
                )}
              </div>
              <span className='text-center text-[0.6rem] font-semibold uppercase tracking-wide text-gray-500'>
                {tech.name}
              </span>
            </a>
          ))}
        </div>
      </AppContainer>
    </section>
  );
};

export default TechStackSection;
