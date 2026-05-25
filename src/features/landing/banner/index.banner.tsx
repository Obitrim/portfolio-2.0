import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import clsxm from '@/lib/clsxm';
import { useInView } from '@/hooks/useInView';

import AppContainer from '@/components/v1/hoc/container/index.container';

import * as animationData from '../../../assets/json/programming.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const HomeBannerSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, 0.05);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const visible = mounted || isInView;

  return (
    <section
      ref={sectionRef}
      className='relative min-h-screen overflow-hidden'
      style={{
        backgroundColor: '#1a1a1a',
        backgroundImage: `
          url('/svg/concrete-bg.svg'),
          radial-gradient(ellipse at 0% 100%, rgba(21,101,192,0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 100% 0%, rgba(240,112,32,0.12) 0%, transparent 45%)
        `,
        backgroundSize: 'cover, 100% 100%, 100% 100%',
        backgroundPosition: 'center, center, center',
        backgroundBlendMode: 'overlay, normal, normal',
      }}
    >
      <div
        className='pointer-events-none absolute inset-0'
        style={{ backgroundColor: 'rgba(10,10,10,0.72)' }}
      />

      <Image
        src='/svg/graffiti-corner.svg'
        alt=''
        width={480}
        height={660}
        className='pointer-events-none absolute right-0 top-0 w-64 opacity-40 md:w-80 lg:w-96'
        priority
      />

      <AppContainer className='relative z-10 flex min-h-screen items-center'>
        <div className='grid w-full grid-cols-1 gap-8 py-28 md:grid-cols-2 md:gap-6 md:py-0'>
          <article className='flex flex-col justify-center'>
            <div className={clsxm('mb-3', visible && 'animate-spray-in')}>
              <Image
                src='/svg/crown.svg'
                alt='crown'
                width={40}
                height={30}
                className='brightness-110'
              />
            </div>

            <div className={clsxm(visible && 'animate-spray-in delay-75')}>
              <h1
                className='font-marker'
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
                  color: '#ffffff',
                  lineHeight: 1.05,
                }}
              >
                I BUILD
              </h1>
            </div>

            <div className={clsxm(visible && 'animate-spray-in delay-150')}>
              <h1
                className='graffiti-heading italic'
                style={{
                  fontSize: 'clamp(5.5rem, 14vw, 11rem)',
                  color: 'var(--graffiti-blue)',
                  lineHeight: 0.88,
                  textShadow: '4px 4px 0 rgba(21,101,192,0.25)',
                }}
              >
                DIGITAL
              </h1>
            </div>

            <div className={clsxm(visible && 'animate-spray-in delay-200')}>
              <h1
                className='font-marker'
                style={{
                  fontSize: 'clamp(1.8rem, 4.5vw, 3.8rem)',
                  color: '#ffffff',
                  lineHeight: 1.1,
                }}
              >
                EXPERIENCES
              </h1>
            </div>

            <p
              className={clsxm(
                'mt-6 max-w-md text-sm leading-relaxed text-gray-300 md:text-base',
                visible && 'animate-slide-up delay-300'
              )}
            >
              I&apos;m a Software Engineer who turns ideas into{' '}
              <span className='font-semibold text-white'>scalable</span>,{' '}
              <span className='font-semibold text-[var(--graffiti-blue)]'>
                impactful
              </span>{' '}
              solutions.
            </p>

            <div
              className={clsxm(
                'mt-8 flex flex-wrap items-center gap-4',
                visible && 'delay-400 animate-slide-up'
              )}
            >
              <a
                href='#projects'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 28px',
                  backgroundColor: '#ffffff',
                  color: 'var(--ink)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  clipPath:
                    'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                  transition: 'background-color 0.25s ease, color 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    'var(--graffiti-orange)';
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    '#ffffff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    '#ffffff';
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    'var(--ink)';
                }}
              >
                VIEW MY WORK →
              </a>
              <Link
                href='/resume'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 28px',
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '2px solid rgba(255,255,255,0.5)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  clipPath:
                    'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                  transition: 'border-color 0.25s ease, color 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    '#ffffff';
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    '#ffffff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    'rgba(255,255,255,0.5)';
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    '#ffffff';
                }}
              >
                DOWNLOAD CV ↓
              </Link>
            </div>

            <div
              className={clsxm(
                'mt-6 flex items-center gap-2',
                visible && 'animate-slide-up delay-500'
              )}
            >
              <span className='text-[10px] font-bold uppercase tracking-widest text-gray-500'>
                Available for
              </span>
              <span
                className='font-marker text-base italic'
                style={{ color: 'var(--graffiti-blue)' }}
              >
                Freelance &amp; Full-Time →
              </span>
            </div>
          </article>

          <div
            className={clsxm(
              'relative flex flex-col items-center justify-center',
              visible && 'animate-spray-in delay-300'
            )}
          >
            <div
              className='mb-4 w-full max-w-xs px-4 py-3 md:max-w-sm'
              style={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                border: '1px solid rgba(255,255,255,0.1)',
                clipPath:
                  'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
            >
              <p className='text-center font-marker text-lg text-white'>
                CODE. SOLVE. CREATE.{' '}
                <span style={{ color: 'var(--graffiti-orange)' }}>IMPACT.</span>
              </p>
            </div>

            <div className='relative w-full max-w-sm md:max-w-md'>
              <div
                className='absolute -left-3 -top-3 z-20 h-6 w-6'
                style={{
                  borderLeft: '2px solid var(--graffiti-blue)',
                  borderTop: '2px solid var(--graffiti-blue)',
                }}
              />
              <div
                className='absolute -right-3 -top-3 z-20 h-6 w-6'
                style={{
                  borderRight: '2px solid var(--graffiti-orange)',
                  borderTop: '2px solid var(--graffiti-orange)',
                }}
              />
              <div
                className='absolute -bottom-3 -left-3 z-20 h-6 w-6'
                style={{
                  borderLeft: '2px solid var(--graffiti-orange)',
                  borderBottom: '2px solid var(--graffiti-orange)',
                }}
              />
              <div
                className='absolute -bottom-3 -right-3 z-20 h-6 w-6'
                style={{
                  borderRight: '2px solid var(--graffiti-blue)',
                  borderBottom: '2px solid var(--graffiti-blue)',
                }}
              />

              <div
                className='overflow-hidden p-2'
                style={{
                  backgroundColor: 'rgba(20,20,20,0.85)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className='mb-2 flex items-center gap-1.5 px-2 py-1'
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div
                    className='h-2 w-2 rounded-full'
                    style={{ background: '#ff5f57' }}
                  />
                  <div
                    className='h-2 w-2 rounded-full'
                    style={{ background: '#ffbd2e' }}
                  />
                  <div
                    className='h-2 w-2 rounded-full'
                    style={{ background: '#28c840' }}
                  />
                  <span className='ml-2 text-xs tracking-wider text-gray-500'>
                    coding.exe
                  </span>
                </div>
                <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                  style={{ height: 'auto', width: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </AppContainer>

      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle'>
        <div className='flex flex-col items-center gap-1'>
          <span className='text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500'>
            Scroll
          </span>
          <div
            className='h-8 w-px'
            style={{
              background:
                'linear-gradient(to bottom, var(--graffiti-blue), transparent)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBannerSection;
