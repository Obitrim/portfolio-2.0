import React from 'react';

import AppContainer from '@/components/v1/hoc/container/index.container';
import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

import { SIDE_PROJECTS } from '@/constant/data.constant';
import ProjectsSection from '@/features/landing/projects/v2.projects-section';

const SideProjects = () => {
  return (
    <Layout>
      <Seo title='Side Projects | Paul' image='' />

      <main>
        <section className='concrete-texture relative overflow-hidden py-20 md:py-28'>
          <AppContainer className='relative z-10'>
            <div className='spray-label mb-4'>Personal Work</div>
            <h1 className='graffiti-heading text-5xl md:text-7xl'>
              <span style={{ color: 'var(--ink)' }}>SIDE </span>
              <span
                className='brush-underline'
                style={{ color: 'var(--graffiti-orange)' }}
              >
                PROJECTS
              </span>
            </h1>
            <p className='mt-4 max-w-lg text-sm leading-relaxed text-gray-600 md:text-base'>
              Web applications and websites I built for learning and
              experimentation.
            </p>
          </AppContainer>
        </section>

        <ProjectsSection projects={SIDE_PROJECTS} showHeading={false} />
      </main>
    </Layout>
  );
};

export default SideProjects;
