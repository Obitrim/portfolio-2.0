import React, { useRef } from 'react';
import { HiMail, HiPhone } from 'react-icons/hi';
import { ImGithub, ImLinkedin, ImTwitter } from 'react-icons/im';

import clsxm from '@/lib/clsxm';
import { useInView } from '@/hooks/useInView';

import AppContainer from '@/components/v1/hoc/container/index.container';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/paul-obitrim-52304b169/',
    icon: <ImLinkedin className='h-5 w-5' />,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/Obitrim',
    icon: <ImGithub className='h-5 w-5' />,
    label: 'Github',
  },
  {
    href: 'https://twitter.com/EvangelistPau10',
    icon: <ImTwitter className='h-5 w-5' />,
    label: 'Twitter',
  },
  {
    href: 'mailto:paulobitrim@gmail.com',
    icon: <HiMail className='h-5 w-5' />,
    label: 'Email',
  },
  {
    href: 'tel:+233544923771',
    icon: <HiPhone className='h-5 w-5' />,
    label: 'Phone',
  },
];

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className='py-16 md:py-20'
      style={{ backgroundColor: 'var(--strip-dark)' }}
    >
      <AppContainer>
        <div className='grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr,auto]'>
          <div className={clsxm(isInView && 'animate-slide-up delay-100')}>
            <p className='graffiti-heading text-2xl text-gray-300 md:text-3xl'>
              LET&apos;S BUILD SOMETHING
            </p>
            <h2
              className='font-marker italic'
              style={{
                fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                color: 'var(--graffiti-blue)',
                lineHeight: 1.05,
              }}
            >
              AMAZING TOGETHER
            </h2>
          </div>

          <div
            className={clsxm(
              'flex flex-col items-start gap-6 md:items-end',
              isInView && 'animate-slide-up delay-200'
            )}
          >
            <a
              href='mailto:paulobitrim@gmail.com'
              className='inline-flex items-center gap-2 border-2 border-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-white hover:text-[var(--ink)]'
              style={{
                clipPath:
                  'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
              }}
            >
              GET IN TOUCH →
            </a>

            <div className='flex items-center gap-3'>
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className='flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-all duration-200 hover:bg-white hover:text-[var(--ink)]'
                  style={{ border: '1px solid #333333' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </AppContainer>
    </section>
  );
};

export default CTASection;
