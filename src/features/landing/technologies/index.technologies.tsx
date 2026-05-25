import Image from 'next/image';
import React, { useRef } from 'react';

import clsxm from '@/lib/clsxm';
import { useInView } from '@/hooks/useInView';

import AppContainer from '@/components/v1/hoc/container/index.container';

import { TECHNOLOGIES_AND_TOOLS } from '@/constant/data.constant';

const HOVER_COLORS = [
  'var(--tag-yellow)',
  'var(--tag-cyan)',
  'var(--tag-pink)',
  'var(--tag-lime)',
  'var(--tag-orange)',
];

const TechnologiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className='section-glow-cyan v-whitespace graffiti-wall-bg'
      style={{ position: 'relative' }}
    >
      <AppContainer>
        <div className='mb-10'>
          <div
            className={clsxm(
              'spray-label mb-3',
              isInView && 'animate-spray-in'
            )}
          >
            Tools &amp; Tech
          </div>
          <div className={clsxm(isInView && 'animate-slide-up delay-100')}>
            <strong className='graffiti-title-line graffiti-heading text-5xl text-white md:text-6xl'>
              WHAT I USE
            </strong>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
          {TECHNOLOGIES_AND_TOOLS.map((tool, idx) => {
            const accentColor = HOVER_COLORS[idx % HOVER_COLORS.length];
            return (
              <a
                key={tool.url + idx}
                href={tool.url}
                target='_blank'
                rel='noreferrer'
                className={clsxm(
                  'tech-sticker group',
                  isInView && 'animate-slide-up'
                )}
                style={{ animationDelay: `${200 + idx * 60}ms` }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = accentColor;
                  el.style.boxShadow = `0 0 20px ${accentColor}22`;
                  el.style.transform = 'rotate(0deg) scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--spray-border)';
                  el.style.boxShadow = 'none';
                  el.style.transform =
                    idx % 2 === 0 ? 'rotate(-1.5deg)' : 'rotate(1.2deg)';
                }}
              >
                {typeof tool.logo === 'string' ? (
                  <Image
                    height={48}
                    width={48}
                    src={tool.logo}
                    alt={tool.name}
                    className='h-12 w-auto grayscale invert transition-all duration-300 group-hover:grayscale-0 group-hover:invert-0'
                  />
                ) : (
                  <span
                    className='transition-colors duration-300'
                    style={{ color: '#3a3a3a' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = accentColor)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = '#3a3a3a')
                    }
                  >
                    {tool.logo}
                  </span>
                )}
                <span
                  className='text-center text-xs font-semibold uppercase tracking-wider transition-colors duration-300'
                  style={{ color: '#404040' }}
                >
                  {tool.name}
                </span>
              </a>
            );
          })}
        </div>
      </AppContainer>
    </section>
  );
};

export default TechnologiesSection;
