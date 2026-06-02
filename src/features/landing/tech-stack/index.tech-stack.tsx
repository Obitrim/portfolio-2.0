import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

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
            <h2 className='font-marker text-2xl text-white md:text-3xl'>
              MY{' '}
              <span
                className='brush-underline text-marker '
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
            'relative mt-6 overflow-hidden pb-2',
            isInView && 'animate-slide-up delay-200'
          )}
          style={{ width: '100%' }}
        >
          <style jsx>{`
            .marquee {
              display: flex;
              animation: marquee 30s linear infinite;
              width: max-content;
            }
            .marquee:hover {
              animation-play-state: paused;
            }
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
          <div className='marquee'>
            {[...FEATURED_TECH, ...FEATURED_TECH].map((tech, idx) => (
              <a
                key={tech.name + idx}
                href={tech.url}
                target='_blank'
                rel='noreferrer noopener'
                className='tech-strip-card mr-3 flex-shrink-0 md:mr-4'
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
        </div>
      </AppContainer>
    </section>
  );
};

export default TechStackSection;
