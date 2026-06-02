import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import clsxm from '@/lib/clsxm';
import { useInView } from '@/hooks/useInView';

import AppContainer from '@/components/v1/hoc/container/index.container';

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
        backgroundColor: '#111111',
        backgroundImage: `
          url('/svg/concrete-bg.svg'),
          radial-gradient(ellipse at 0% 100%, rgba(21,101,192,0.18) 0%, transparent 55%),
          radial-gradient(ellipse at 100% 0%, rgba(240,112,32,0.14) 0%, transparent 50%)
        `,
        backgroundSize: 'cover, 100% 100%, 100% 100%',
        backgroundPosition: 'center, center, center',
        backgroundBlendMode: 'overlay, normal, normal',
      }}
    >
      <div
        className='pointer-events-none absolute inset-0'
        style={{ backgroundColor: 'rgba(10,10,10,0.6)' }}
      />

      {/* Desktop profile image — spans full section height, right half */}
      <div
        className={clsxm(
          'pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-1/2  md:block',
          visible && 'animate-spray-in delay-300'
        )}
      >
        <Image
          src='/me_with_laptop_teacup_and_graffiti_background.png'
          alt='Paul — Software Engineer'
          fill
          priority
          sizes='50vw'
          className='-translate-x-1/3 object-contain object-right drop-shadow-2xl'
        />
      </div>

      {/* CODE. SOLVE. box — absolute top-right */}
      <div
        className={clsxm(
          'absolute right-6 top-28 z-20 hidden px-4 py-2 md:block lg:right-12',
          visible && 'delay-400 animate-spray-in'
        )}
        style={{
          backgroundColor: 'rgba(0,0,0,0.8)',
          border: '1px solid rgba(255,255,255,0.12)',
          clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
        }}
      >
        <p className='font-marker text-sm leading-snug text-white md:text-base'>
          CODE. SOLVE.
          <br />
          CREATE.{' '}
          <span style={{ color: 'var(--graffiti-orange)' }}>IMPACT.</span>
        </p>
      </div>

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
                className='font-marker italic'
                style={{
                  fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
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
                'mt-8 flex flex-row items-center gap-4',
                visible && 'delay-400 animate-slide-up'
              )}
            >
              <a
                href='#projects'
                className={clsxm(
                  'inline-flex items-center gap-2 whitespace-nowrap font-sans font-bold transition-colors duration-200 md:gap-2',
                  'bg-white text-[var(--ink)]',
                  'uppercase tracking-[0.1em]',
                  'px-3 py-2 text-[0.76rem] md:px-5 md:py-3 md:text-[0.82rem]',
                  'rounded-none',
                  'hover:bg-[var(--graffiti-orange)] hover:text-white',
                  'active:bg-[var(--graffiti-orange)] active:text-white',
                  'focus:outline-none',
                  'cursor-pointer',
                  'select-none'
                )}
                style={{
                  clipPath:
                    'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                VIEW MY WORK →
              </a>
              <Link
                href='/resume'
                className={clsxm(
                  'inline-flex items-center gap-2 whitespace-nowrap font-sans font-bold transition-colors duration-200 md:gap-2',
                  'border-2 border-white/50 bg-transparent text-white',
                  'uppercase tracking-[0.1em]',
                  'px-3 py-[6px] text-[0.76rem] md:px-5 md:py-[10px] md:text-[0.82rem]',
                  'rounded-none',
                  'hover:border-white hover:text-white',
                  'active:border-white active:text-white',
                  'focus:outline-none',
                  'cursor-pointer',
                  'select-none'
                )}
                style={{
                  clipPath:
                    'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                  fontFamily: "'Space Grotesk', sans-serif",
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
                className='xs:text-base font-marker text-sm italic'
                style={{ color: 'var(--graffiti-blue)', fontSize: '0.82rem' }}
              >
                Freelance &amp; Remote &amp; Full-Time →
              </span>
            </div>

            {/* Mobile profile image */}
            <div
              className={clsxm(
                'mt-8 flex justify-center md:hidden',
                visible && 'delay-400 animate-spray-in'
              )}
            >
              <Image
                src='/me_with_laptop_teacup_and_graffiti_background.png'
                alt='Paul — Software Engineer'
                width={320}
                height={390}
                className='h-auto w-full max-w-[280px] object-contain object-bottom drop-shadow-2xl'
              />
            </div>
          </article>

          {/* Empty right column — space reserved for absolute-positioned profile image */}
          <div className='hidden md:block' />
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
