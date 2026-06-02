import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import AppContainer from '@/components/v1/hoc/container/index.container';
import UnstyledLink from '@/components/v1/links/UnstyledLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const isActive = (href: string) => {
    if (href.includes('#')) return false;
    return router.pathname === href;
  };

  return (
    <header
      className='!sticky !top-0 z-50'
      style={{
        backgroundColor: 'var(--strip-dark)',
        borderBottom: '1px solid #1e1e1e',
      }}
    >
      <AppContainer className='flex h-16 items-center justify-between'>
        <UnstyledLink href='/' className='flex items-center gap-2'>
          <div className='flex flex-col items-start'>
            <Image
              src='/svg/crown.svg'
              alt='crown'
              width={18}
              height={14}
              className='mb-0.5'
            />
            <span className='graffiti-heading text-2xl leading-none text-white'>
              {'<paul/>'}
            </span>
          </div>
        </UnstyledLink>

        <nav className='hidden sm:block'>
          <ul className='flex items-center gap-6'>
            {links.map(({ href, label }) => (
              <li key={href + label}>
                <UnstyledLink
                  href={href}
                  className={clsxm(
                    'relative text-xs font-semibold uppercase tracking-widest transition-colors duration-200',
                    'after:absolute after:-bottom-1 after:left-0 after:h-[2px]',
                    'after:transition-all after:duration-300 after:ease-out',
                    'after:bg-[var(--graffiti-orange)]',
                    isActive(href)
                      ? 'text-[var(--graffiti-orange)] after:w-full'
                      : 'text-gray-400 after:w-0 hover:text-white hover:after:w-full'
                  )}
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href='/contact'
          className='hidden sm:inline-flex'
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '9px 20px',
            backgroundColor: 'transparent',
            border: '2px solid var(--graffiti-blue)',
            color: 'var(--graffiti-blue)',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            clipPath:
              'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            transition: 'background-color 0.25s ease, color 0.25s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              'var(--graffiti-blue)';
            (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              'transparent';
            (e.currentTarget as HTMLAnchorElement).style.color =
              'var(--graffiti-blue)';
          }}
        >
          LET&apos;S TALK
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3.5 w-3.5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
            />
          </svg>
        </Link>

        <button
          onClick={() => setIsOpen((v) => !v)}
          className='flex flex-col items-end gap-[5px] sm:hidden'
          aria-label='Toggle navigation'
        >
          <span
            className={clsxm(
              'block h-[2px] w-6 origin-center transition-all duration-300',
              isOpen ? 'translate-y-[7px] rotate-45 bg-white' : 'bg-gray-400'
            )}
          />
          <span
            className={clsxm(
              'block h-[2px] transition-all duration-300',
              isOpen ? 'w-0 opacity-0' : 'w-4 bg-gray-400 opacity-100'
            )}
          />
          <span
            className={clsxm(
              'block h-[2px] w-6 origin-center transition-all duration-300',
              isOpen ? '-translate-y-[7px] -rotate-45 bg-white' : 'bg-gray-400'
            )}
          />
        </button>
      </AppContainer>

      <div
        className={clsxm(
          'overflow-hidden transition-all duration-300 ease-in-out sm:hidden',
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        )}
        style={{
          borderTop: '1px solid #1e1e1e',
          backgroundColor: 'var(--strip-dark)',
        }}
      >
        <ul className='flex flex-col py-2'>
          {links.map(({ href, label }) => (
            <li key={href}>
              <UnstyledLink
                href={href}
                onClick={() => setIsOpen(false)}
                className={clsxm(
                  'block px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors duration-200',
                  isActive(href)
                    ? 'text-[var(--graffiti-orange)]'
                    : 'text-gray-400 hover:text-white'
                )}
              >
                {label}
              </UnstyledLink>
            </li>
          ))}
          <li className='px-6 py-3'>
            <Link href='/contact' className='btn-primary text-xs'>
              LET&apos;S TALK →
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
