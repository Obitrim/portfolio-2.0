import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import type { Project } from 'types/projects';

import clsxm from '@/lib/clsxm';
import { useInView } from '@/hooks/useInView';

import ProjectCard from '@/components/v1/cards/project.card';
import AppContainer from '@/components/v1/hoc/container/index.container';

type ProjectsSectionProps = {
  projects: Project[];
  extraContent?: React.ReactNode;
  showHeading?: boolean;
};

const ProjectsSection = ({
  extraContent,
  projects,
  showHeading = true,
}: ProjectsSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id='projects'
      className='v-whitespace'
      style={{ backgroundColor: 'var(--strip-dark)', position: 'relative' }}
    >
      <AppContainer>
        {showHeading && (
          <div className='mb-10 flex items-end justify-between'>
            <div className='relative'>
              <Image
                src='/svg/heading-splash.svg'
                alt=''
                width={560}
                height={176}
                className='pointer-events-none absolute -left-6 -top-6 w-[420px] opacity-10'
                aria-hidden='true'
              />

              <div
                className={clsxm(
                  'spray-label mb-3',
                  isInView && 'animate-spray-in'
                )}
              >
                My Work
              </div>

              <div className={clsxm(isInView && 'animate-slide-up delay-100')}>
                <h2 className='leading-none'>
                  <span
                    className='block font-marker text-white'
                    style={{
                      fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                      lineHeight: 1.05,
                    }}
                  >
                    FEATURED
                  </span>
                  <span
                    className='graffiti-heading block'
                    style={{
                      fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                      color: 'var(--graffiti-orange)',
                      lineHeight: 0.95,
                      WebkitTextStroke: '1px var(--graffiti-orange)',
                    }}
                  >
                    PROJECTS
                  </span>
                </h2>
              </div>
            </div>

            <Link
              href='/projects'
              className={clsxm(
                'mb-2 hidden text-xs font-semibold uppercase tracking-widest text-gray-400 transition-colors duration-200 hover:text-white md:block',
                isInView && 'animate-slide-up delay-200'
              )}
            >
              VIEW ALL PROJECTS →
            </Link>
          </div>
        )}

        <div className='my-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3'>
          {projects.map((project, idx) => (
            <div
              key={project.url}
              className={clsxm('flex flex-col', isInView && 'animate-slide-up')}
              style={{ animationDelay: `${150 + idx * 80}ms` }}
            >
              <ProjectCard
                className='h-full'
                name={project.name}
                image={project.image}
                images={project.images}
                description={project.description as string}
                isHyperlink={project.isHyperlink}
                stack={project.stack}
                url={project.url}
                projectIndex={idx}
              />
            </div>
          ))}
        </div>

        {extraContent}
      </AppContainer>
    </section>
  );
};

export default ProjectsSection;
