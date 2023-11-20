import React from 'react';

import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

import { SIDE_PROJECTS } from '@/constant/data.constant';
import ProjectsSection from '@/features/landing/projects/v2.projects-section';

const SideProjects = () => {
  return (
    <Layout>
      <Seo title='Side projects' image='' />

      <main className='p-wavy-pattern'>
        <ProjectsSection projects={SIDE_PROJECTS} />
      </main>
    </Layout>
  );
};

export default SideProjects;
