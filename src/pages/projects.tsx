import React, { useRef, useState } from 'react';

import clsxm from '@/lib/clsxm';
import { useInView } from '@/hooks/useInView';

import ProjectCard from '@/components/v1/cards/project.card';
import AppContainer from '@/components/v1/hoc/container/index.container';
import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

import { PROJECTS } from '@/constant/data.constant';

const techFrequency = PROJECTS.flatMap((p) => p.stack).reduce<
  Record<string, number>
>((acc, t) => ({ ...acc, [t]: (acc[t] ?? 0) + 1 }), {});

const uniqueTechs = Object.entries(techFrequency)
  .sort((a, b) => b[1] - a[1])
  .map(([tech]) => tech);

const AllProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? PROJECTS.filter((p) =>
        p.stack.some((s) => s.toLowerCase() === activeFilter.toLowerCase())
      )
    : PROJECTS;

  return (
    <Layout>
      <Seo title='Projects | Paul' image='' />

      <main>
        <section
          className='relative overflow-hidden py-20 md:py-28'
          style={{
            backgroundColor: '#111111',
            backgroundImage: `
              url('/svg/concrete-bg.svg'),
              radial-gradient(ellipse at 0% 100%, rgba(21,101,192,0.18) 0%, transparent 55%),
              radial-gradient(ellipse at 100% 0%, rgba(240,112,32,0.14) 0%, transparent 50%)
            `,
            backgroundSize: 'cover, 100% 100%, 100% 100%',
            backgroundPosition: 'center, center, center',
            backgroundBlendMode: 'overlay, normal, normal',
          }}
        >
          <div
            className='pointer-events-none absolute inset-0'
            style={{ backgroundColor: 'rgba(10,10,10,0.55)' }}
          />
          <AppContainer className='relative z-10'>
            <div className='spray-label mb-4'>Portfolio</div>
            <h1 className='graffiti-heading text-5xl md:text-7xl'>
              <span style={{ color: '#ffffff' }}>ALL </span>
              <span
                className='brush-underline'
                style={{ color: 'var(--graffiti-orange)' }}
              >
                PROJECTS
              </span>
            </h1>
            <p className='mt-4 max-w-lg text-sm leading-relaxed text-gray-400 md:text-base'>
              A collection of{' '}
              <span className='font-semibold text-[var(--graffiti-blue)]'>
                production apps
              </span>
              ,{' '}
              <span className='font-semibold text-[var(--graffiti-orange)]'>
                side experiments
              </span>
              , and{' '}
              <span className='font-semibold text-white'>
                everything in between
              </span>
              .
            </p>
          </AppContainer>
        </section>

        <section
          ref={sectionRef}
          className='v-whitespace'
          style={{ backgroundColor: '#0a0a0a' }}
        >
          <AppContainer>
            <div className='flex flex-col gap-8 md:flex-row md:items-start'>
              <aside className='md:sticky md:top-24 md:w-52 md:flex-shrink-0'>
                <p className='spray-label mb-4'>Filter by tech</p>

                <div className='mb-2 flex flex-wrap gap-2 md:flex-col md:gap-1.5'>
                  <button
                    onClick={() => setActiveFilter(null)}
                    className={clsxm(
                      'filter-chip',
                      !activeFilter && 'filter-chip-active'
                    )}
                  >
                    All Projects ({PROJECTS.length})
                  </button>
                  {uniqueTechs.map((tech) => (
                    <button
                      key={tech}
                      onClick={() =>
                        setActiveFilter(activeFilter === tech ? null : tech)
                      }
                      className={clsxm(
                        'filter-chip',
                        activeFilter === tech && 'filter-chip-active'
                      )}
                    >
                      {tech}{' '}
                      <span className='opacity-50'>
                        ({techFrequency[tech]})
                      </span>
                    </button>
                  ))}
                </div>
              </aside>

              <div className='flex-1'>
                {activeFilter && (
                  <div
                    className={clsxm(
                      'mb-6 flex items-center gap-2',
                      isInView && 'animate-spray-in'
                    )}
                  >
                    <span
                      className='text-xs font-semibold uppercase tracking-widest'
                      style={{ color: 'var(--graffiti-orange)' }}
                    >
                      {filteredProjects.length} project
                      {filteredProjects.length !== 1 ? 's' : ''} using
                    </span>
                    <span
                      className='px-2 py-0.5 text-xs font-bold uppercase'
                      style={{
                        backgroundColor: 'var(--spray-elevated)',
                        border: '1px solid var(--graffiti-orange)',
                        color: 'var(--graffiti-orange)',
                      }}
                    >
                      {activeFilter}
                    </span>
                    <button
                      onClick={() => setActiveFilter(null)}
                      className='ml-1 text-xs text-gray-600 hover:text-gray-400'
                    >
                      ✕ clear
                    </button>
                  </div>
                )}

                {filteredProjects.length === 0 ? (
                  <div className='py-20 text-center'>
                    <p className='graffiti-heading text-2xl text-gray-600'>
                      NO MATCHES
                    </p>
                    <p className='mt-2 text-sm text-gray-600'>
                      No projects found for &quot;{activeFilter}&quot;
                    </p>
                  </div>
                ) : (
                  <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    {filteredProjects.map((project, idx) => (
                      <div
                        key={project.url}
                        className={clsxm(
                          'flex flex-col',
                          isInView && 'animate-slide-up'
                        )}
                        style={{ animationDelay: `${100 + idx * 60}ms` }}
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
                )}
              </div>
            </div>
          </AppContainer>
        </section>
      </main>
    </Layout>
  );
};

export default AllProjects;
