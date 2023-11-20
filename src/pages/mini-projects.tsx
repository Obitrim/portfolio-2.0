import React from 'react';

import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

import { MINI_PROJECTS } from '@/constant/data.constant';
import ProjectsSection from '@/features/landing/projects/v2.projects-section';

const MiniProjects = () => {
  return (
    <Layout>
      <Seo title='Side projects' image='' />

      <main className='p-wavy-pattern'>
        <ProjectsSection projects={MINI_PROJECTS} />
      </main>
    </Layout>
  );
};

export default MiniProjects;
