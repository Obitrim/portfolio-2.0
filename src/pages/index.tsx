import * as React from 'react';

import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

import HomeBannerSection from '@/features/landing/banner/index.banner';
import BlogsSection from '@/features/landing/blogs/index.blogs-section';
import ProjectsSection from '@/features/landing/projects/index.projects-section';
import TechnologiesSection from '@/features/landing/technologies/index.technologies';
import TestimonialsSection from '@/features/landing/testimonials/index.testimonials';

export default function HomePage() {
  return (
    <Layout>
      <Seo title='Portfolio | Me' />

      <main>
        <HomeBannerSection />
        <ProjectsSection />
        <TechnologiesSection />
        <TestimonialsSection />
        <BlogsSection />
      </main>
    </Layout>
  );
}
