import * as React from 'react';

import AppFooter from '@/components/v1/layout/app-footer/index.app-footer';
import Header from '@/components/v1/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      {children}
      <AppFooter />
    </>
  );
}
