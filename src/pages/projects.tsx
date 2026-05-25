import React from 'react';

import AppContainer from '@/components/v1/hoc/container/index.container';
import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

import { PROJECTS } from '@/constant/data.constant';
import ProjectsSection from '@/features/landing/projects/v2.projects-section';

const AllProjects = () => {
  return (
    <Layout>
      <Seo title='Projects | Paul' image='' />

      <main>
        <section className='concrete-texture relative overflow-hidden py-20 md:py-28'>
          <AppContainer className='relative z-10'>
            <div className='spray-label mb-4'>Portfolio</div>
            <h1 className='graffiti-heading text-5xl md:text-7xl'>
              <span style={{ color: 'var(--ink)' }}>ALL </span>
              <span
                className='brush-underline'
                style={{ color: 'var(--graffiti-orange)' }}
              >
                PROJECTS
              </span>
            </h1>
            <p className='mt-4 max-w-lg text-sm leading-relaxed text-gray-600 md:text-base'>
              A collection of{' '}
              <span className='font-semibold text-[var(--graffiti-blue)]'>
                production apps
              </span>
              ,{' '}
              <span className='font-semibold text-[var(--graffiti-orange)]'>
                side experiments
              </span>
              , and{' '}
              <span className='font-semibold' style={{ color: 'var(--ink)' }}>
                everything in between
              </span>
              .
            </p>
          </AppContainer>
        </section>

        <ProjectsSection projects={PROJECTS} showHeading={false} />
      </main>
    </Layout>
  );
};

export default AllProjects;
