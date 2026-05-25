import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

import { PROJECTS } from '@/constant/data.constant';
import AboutSection from '@/features/landing/about/index.about';
import HomeBannerSection from '@/features/landing/banner/index.banner';
import CTASection from '@/features/landing/cta/index.cta';
import ProjectsSection from '@/features/landing/projects/v2.projects-section';
import TechStackSection from '@/features/landing/tech-stack/index.tech-stack';

export default function HomePage() {
  return (
    <Layout>
      <Seo title='Paul | Portfolio' image='' />

      <main className='w-screen overflow-x-hidden'>
        <HomeBannerSection />
        <TechStackSection />
        <ProjectsSection
          projects={PROJECTS.slice(0, 6)}
          extraContent={
            PROJECTS.length > 6 ? (
              <div className='flex justify-center pt-4'>
                <Link href='/projects' className='btn-primary'>
                  VIEW ALL PROJECTS →
                </Link>
              </div>
            ) : undefined
          }
        />
        <AboutSection />
        <CTASection />
      </main>
    </Layout>
  );
}
