import * as React from 'react';

import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

import HomeBannerSection from '@/features/landing/banner/index.banner';
import ProjectsSection from '@/features/landing/projects/v2.projects-section';
import TechnologiesSection from '@/features/landing/technologies/index.technologies';

export default function HomePage() {
  return (
    <Layout>
      <Seo title='Paul | Me' image='' />

      <main>
        <HomeBannerSection />
        {/* <ProjectsSection /> */}
        <div className='p-wavy-pattern'>
          <ProjectsSection />
          {/* <TestimonialsSection /> */}
          {/* <BlogsSection /> */}
        </div>
        <TechnologiesSection />
      </main>
    </Layout>
  );
}
