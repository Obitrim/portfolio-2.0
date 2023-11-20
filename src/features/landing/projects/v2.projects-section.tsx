import clsx from 'clsx';
import React from 'react';
import type { Project } from 'types/projects';

import ProjectCard from '@/components/v1/cards/project.card';
import AppContainer from '@/components/v1/hoc/container/index.container';

type ProjectsSectionProps = {
  projects: Project[];
  extraContent?: React.ReactNode;
};

const ProjectsSection = ({ extraContent, projects }: ProjectsSectionProps) => {
  return (
    <section className='v-whitespace relative z-30'>
      <AppContainer>
        <p className='text-light-primary'>My work</p>
        <strong className={clsx('text-3xl')}>Projects</strong>

        <div
          className={clsx('grid gap-8 sm:grid-cols-2 md:grid-cols-3', 'my-8')}
        >
          {projects.map((project) => (
            <ProjectCard
              className='bg-darker rounded'
              name={project.name}
              image={project.image}
              description={project.description as string}
              isHyperlink={project.isHyperlink}
              stack={project.stack}
              url={project.url}
              key={project.url}
            />
          ))}
        </div>
        {extraContent}
      </AppContainer>
    </section>
  );
};

export default ProjectsSection;
