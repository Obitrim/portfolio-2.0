import clsx from 'clsx';
import React from 'react';

import ProjectCard from '@/components/v1/cards/project.card';
import AppContainer from '@/components/v1/hoc/container/index.container';

import { PROJECTS } from '@/constant/data.constant';

const ProjectsSection = () => {
  return (
    <section className='v-whitespace relative z-30'>
      <AppContainer>
        <p className='text-light-primary'>My work</p>
        <strong className={clsx('text-3xl')}>Projects</strong>

        <div
          className={clsx('grid gap-8 sm:grid-cols-2 md:grid-cols-3', 'my-8')}
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              className='bg-darker rounded'
              name={project.name}
              image={project.image}
              description={project.description as string}
              stack={project.stack}
              url={project.url}
              key={project.url}
            />
          ))}
        </div>
      </AppContainer>
    </section>
  );
};

export default ProjectsSection;
