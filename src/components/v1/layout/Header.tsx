import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';

import AppContainer from '@/components/v1/hoc/container/index.container';
import UnstyledLink from '@/components/v1/links/UnstyledLink';

const links = [
  { href: '/projects', label: 'Projects' },
  // { href: '/blog', label: 'Blog' },
  // { href: '/resume', label: 'Resume' },
];

export default function Header() {
  const router = useRouter();

  const isActive = (routePath: string) => router.pathname === routePath;
  return (
    <header className='sticky top-0 z-50 bg-dark'>
      <AppContainer className='flex h-14 items-center justify-between'>
        <UnstyledLink
          href='/'
          className='font-grotest font-bold hover:text-gray-300'
        >
          😎 xcoda.me
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-8'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className={clsx(
                    'font-medium',
                    isActive(href) &&
                      'text-primary hover:text-[color:var(--light-primary)]'
                  )}
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </AppContainer>
    </header>
  );
}
