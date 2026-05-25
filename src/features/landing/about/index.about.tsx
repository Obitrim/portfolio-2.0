import Image from 'next/image';
import React, { useRef } from 'react';

import clsxm from '@/lib/clsxm';
import { useInView } from '@/hooks/useInView';

import AppContainer from '@/components/v1/hoc/container/index.container';

const traits = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
        />
      </svg>
    ),
    title: 'Problem Solver',
    description: 'I break down complex problems and build simple solutions.',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    title: 'Detail Oriented',
    description: 'I care about clean code, performance and user experience.',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
        />
      </svg>
    ),
    title: 'Always Learning',
    description: 'I stay curious and keep up with the latest technologies.',
  },
];

const services = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
        />
      </svg>
    ),
    title: 'Full Stack Development',
    description:
      'Building end-to-end web applications with modern technologies.',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
        />
      </svg>
    ),
    title: 'API & Backend Engineering',
    description: 'Designing robust APIs and scalable backend services.',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
        />
      </svg>
    ),
    title: 'Database Design',
    description:
      'Modeling and optimizing databases for performance and reliability.',
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id='about'
      className='v-whitespace'
      style={{ backgroundColor: '#ffffff' }}
    >
      <AppContainer>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
          <div
            className={clsxm(
              'flex flex-col',
              isInView && 'animate-slide-up delay-100'
            )}
          >
            <h2 className='graffiti-heading mb-6 text-5xl md:text-6xl'>
              <span style={{ color: 'var(--ink)' }}>ABOUT </span>
              <span
                className='brush-underline'
                style={{ color: 'var(--graffiti-blue)' }}
              >
                ME
              </span>
            </h2>

            <p className='mb-8 leading-relaxed text-gray-600'>
              I&apos;m Paul, a fullstack developer with a passion for building
              intuitive, performant web applications. I specialize in the
              JavaScript ecosystem — from pixel-perfect frontends with React and
              Next.js to robust backends powered by Node.js and PostgreSQL.
              I&apos;ve shipped production apps for startups and enterprises
              across the US, Ghana, and beyond — and I care deeply about code
              quality, clean architecture, and real user impact.
            </p>

            <div className='flex flex-col gap-4'>
              {traits.map((trait) => (
                <div
                  key={trait.title}
                  className='flex items-start gap-4 rounded-lg p-4'
                  style={{
                    backgroundColor: '#f8f8f8',
                    border: '1px solid #eeeeee',
                  }}
                >
                  <div
                    className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg'
                    style={{
                      backgroundColor: 'var(--graffiti-blue)',
                      color: '#fff',
                    }}
                  >
                    {trait.icon}
                  </div>
                  <div>
                    <h4 className='mb-1 font-bold text-[var(--ink)]'>
                      {trait.title}
                    </h4>
                    <p className='text-sm text-gray-500'>{trait.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={clsxm(
              'flex flex-col gap-8',
              isInView && 'animate-slide-up delay-200'
            )}
          >
            <div>
              <h2 className='graffiti-heading mb-6 text-4xl md:text-5xl'>
                <span style={{ color: 'var(--ink)' }}>WHAT </span>
                <span style={{ color: 'var(--graffiti-blue)' }}>I DO</span>
              </h2>
              <div className='flex flex-col gap-4'>
                {services.map((service) => (
                  <div key={service.title} className='flex items-start gap-4'>
                    <div
                      className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg'
                      style={{
                        backgroundColor: '#fff1e8',
                        color: 'var(--graffiti-orange)',
                      }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h4 className='mb-1 font-bold text-[var(--ink)]'>
                        {service.title}
                      </h4>
                      <p className='text-sm text-gray-500'>
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className='relative overflow-hidden rounded-xl p-6'
              style={{ backgroundColor: 'var(--ink)', minHeight: '200px' }}
            >
              <Image
                src='/svg/paint-splash.svg'
                alt=''
                width={400}
                height={300}
                className='pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30'
              />
              <div className='relative z-10'>
                <Image
                  src='/svg/crown.svg'
                  alt='crown'
                  width={32}
                  height={24}
                  className='mb-4'
                />
                <span
                  className='mb-4 block text-5xl font-black leading-none'
                  style={{ color: 'var(--graffiti-orange)', opacity: 0.6 }}
                >
                  &ldquo;
                </span>
                <p className='text-lg font-bold leading-snug text-white md:text-xl'>
                  I DON&apos;T JUST WRITE CODE, I SOLVE PROBLEMS AND BUILD
                  SOLUTIONS THAT{' '}
                  <span style={{ color: 'var(--graffiti-blue)' }}>MATTER.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </section>
  );
};

export default AboutSection;
