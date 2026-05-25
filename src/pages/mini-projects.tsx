import React from 'react';

import AppContainer from '@/components/v1/hoc/container/index.container';
import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

import { MINI_PROJECTS } from '@/constant/data.constant';
import ProjectsSection from '@/features/landing/projects/v2.projects-section';

const MiniProjects = () => {
  return (
    <Layout>
      <Seo title='Mini Projects | Paul' image='' />

      <main>
        <section className='concrete-texture relative overflow-hidden py-20 md:py-28'>
          <AppContainer className='relative z-10'>
            <div className='spray-label mb-4'>Experiments</div>
            <h1 className='graffiti-heading text-5xl md:text-7xl'>
              <span style={{ color: 'var(--ink)' }}>MINI </span>
              <span
                className='brush-underline'
                style={{ color: 'var(--graffiti-blue)' }}
              >
                PROJECTS
              </span>
            </h1>
            <p className='mt-4 max-w-lg text-sm leading-relaxed text-gray-600 md:text-base'>
              UI components, page sections, and small experiments built from the
              ground up.
            </p>
          </AppContainer>
        </section>

        <ProjectsSection projects={MINI_PROJECTS} showHeading={false} />
      </main>
    </Layout>
  );
};

export default MiniProjects;
