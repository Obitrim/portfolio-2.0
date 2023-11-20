import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

import { PROJECTS } from '@/constant/data.constant';
import HomeBannerSection from '@/features/landing/banner/index.banner';
import ProjectsSection from '@/features/landing/projects/v2.projects-section';
import TechnologiesSection from '@/features/landing/technologies/index.technologies';

export default function HomePage() {
  return (
    <Layout>
      <Seo title='Paul | Me' image='' />

      <main className='w-screen overflow-x-hidden'>
        <HomeBannerSection />
        {/* <ProjectsSection /> */}
        <div className='p-wavy-pattern'>
          <ProjectsSection
            projects={PROJECTS.slice(0, 6)}
            extraContent={
              <div className='flex justify-center'>
                {PROJECTS.length > 6 && (
                  <Link href='/projects' className='btn-grad font-grotest'>
                    See more
                  </Link>
                )}
              </div>
            }
          />

          {/* <TestimonialsSection /> */}
          {/* <BlogsSection /> */}
        </div>
        <TechnologiesSection />
      </main>
    </Layout>
  );
}
