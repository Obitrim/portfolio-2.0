import Link from 'next/link';
import { useRef } from 'react';

import clsxm from '@/lib/clsxm';
import { useInView } from '@/hooks/useInView';

import AppContainer from '@/components/v1/hoc/container/index.container';
import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Sailboatlabs',
    period: 'Sep 2021 — Jun 2025',
    location: 'Remote',
    points: [
      'Built and optimized data-intensive frontend modules used across internal enterprise platforms, improving rendering performance by 50% through efficient state handling and reduction of unnecessary re-renders.',
      'Implemented infinite data fetching and caching strategies that improved responsiveness and reduced load times for large datasets.',
      'Developed reusable UI components and frontend architecture patterns that improved consistency and accelerated feature delivery across projects.',
      'Collaborated closely with backend engineers and system analysts to design scalable software solutions aligned with business and technical requirements.',
      'Wrote end-to-end tests to improve reliability and reduce production regressions.',
      'Mentored junior developers on clean architecture, maintainable code structure, debugging, and frontend best practices.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Jest'],
  },
  {
    role: 'Frontend Developer',
    company: 'Teamwell',
    period: 'Apr 2023 — Dec 2023',
    location: 'Remote',
    points: [
      'Collaborated with engineers and designers to build interactive user interfaces for a Human Resource Management system.',
      'Improved the performance of the User Interface by 20% by reducing the production bundle size through clean component architecture, composition and reusability, as well as reducing calls to endpoints through frontend caching.',
      'Converted Figma designs into responsive, production-ready frontend applications using modern frontend technologies.',
      'Worked closely with backend engineers to integrate APIs powered by Directus.',
      'Fixed UX inconsistencies and contributed improvements that enhanced usability and user experience across the platform.',
    ],
    stack: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Directus', 'Pinia'],
  },

  {
    role: 'Lead Software Developer',
    company: 'Flinchub',
    period: 'June 2020 — Apr 2023',
    location: 'Remote',
    points: [
      'Led a team of developers through the planning, development, and deployment of web applications across multiple client projects.',
      'Coordinated with product managers, designers, and engineers to translate business requirements into scalable technical solutions.',
      'Spearheaded engineering decisions around frontend architecture, reusable component systems, and application scaling.',
      'Facilitated technical brainstorming sessions, sprint planning, and development reviews to improve team collaboration and delivery efficiency together with stakeholders.',
      'Contributed to both frontend and backend implementation, ensuring seamless integration between user interfaces and backend services.',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Firebase'],
  },
  {
    role: 'Software Engineer',
    company: 'Ghana Cocoa Board',
    period: 'Oct 2021 — Sep 2022',
    location: 'Accra/Ghana',
    points: [
      'Participated in the development and maintenance of enterprise software solutions for internal operational systems.',
      'Designed database schemas for a cocoa estate management platform used to track estate structures and operational records.',
      'Investigated and resolved issues identified through testing and user feedback to improve system stability.',
      'Evaluated and refactored codebases to improve maintainability, browser compatibility, and adherence to engineering standards.',
      'Analyzed user requirements and translated them into technical implementation plans.',
    ],
    stack: [
      'JavaScript',
      'PostgreSQL',
      'Node.js',
      'Express',
      'MongoDB',
      'ReactJs',
      'TailwindCSS',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Ravinlead Tech Hub',
    period: 'Dec 2020 — Jan 2021',
    location: 'Remote',
    points: [
      'Designed and built User Interface for a pharmacy management system dashboard.',
      'Wrote and edited webpage content and collaborated with team members in the building of the User Interface.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
];

const skills = [
  {
    label: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'TailwindCSS',
      'Redux Toolkit',
      'Zustand',
      'React Query',
      'Pinia',
      'Shadcn UI',
      'Framer Motion',
    ],
  },
  {
    label: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'NestJS',
      'REST APIs',
      'Firebase',
      'Supabase',
      'WebSockets',
    ],
  },
  {
    label: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Firebase Firestore'],
  },
  {
    label: 'Testing & Tools',
    items: ['Jest', 'Cypress', 'Zod', 'Yup', 'Git', 'GitHub'],
  },
];

const ResumePage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <Layout>
      <Seo
        title='Resume — Paul Obitrim | Software Engineer'
        description="View Paul Obitrim's professional resume — 5+ years building scalable web applications for startups and enterprises. React, Next.js, Vue.js and Node.js specialist based in Accra, Ghana."
        keywords='Paul Obitrim resume, software engineer CV, frontend developer resume, React developer Ghana, fullstack developer'
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          name: 'Paul Obitrim — Software Engineer Resume',
          url: 'https://paulobitrim.dev/resume',
          mainEntity: {
            '@type': 'Person',
            name: 'Paul Obitrim',
            jobTitle: 'Software Engineer',
            url: 'https://paulobitrim.dev',
            email: 'paulobitrim@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Accra',
              addressCountry: 'GH',
            },
            sameAs: [
              'https://github.com/Obitrim',
              'https://www.linkedin.com/in/paul-obitrim-52304b169/',
            ],
          },
        }}
      />

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
            <div className='spray-label mb-4'>Credentials</div>
            <h1 className='graffiti-heading text-5xl md:text-7xl'>
              <span style={{ color: '#ffffff' }}>MY </span>
              <span
                className='brush-underline font-marker'
                style={{ color: 'var(--graffiti-blue)' }}
              >
                RESUME
              </span>
            </h1>
            <p className='mt-4 max-w-lg text-sm leading-relaxed text-gray-400 md:text-base'>
              Fullstack developer with over half a decade years building
              scalable web applications for startups and enterprises across
              Ghana and beyond.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Link href='/resume#experience' download className='btn-primary'>
                Work Experience ↓
              </Link>
              <Link href='/contact' className='btn-outline-white'>
                HIRE ME →
              </Link>
            </div>
          </AppContainer>
        </section>

        <section
          ref={sectionRef}
          className='v-whitespace'
          style={{ backgroundColor: '#0a0a0a' }}
        >
          <AppContainer>
            <div
              className='grid grid-cols-1 gap-16 md:grid-cols-3 md:items-start'
              id='experience'
            >
              <div className='md:col-span-2'>
                <div className={clsxm('mb-10', isInView && 'animate-spray-in')}>
                  <h2 className='graffiti-heading text-3xl md:text-4xl'>
                    <span style={{ color: '#ffffff' }}>WORK </span>
                    <span style={{ color: 'var(--graffiti-orange)' }}>
                      EXPERIENCE
                    </span>
                  </h2>
                </div>

                <div className='space-y-0'>
                  {experiences.map((exp, idx) => (
                    <div
                      key={exp.company}
                      className={clsxm(
                        'flex gap-5',
                        isInView && 'animate-slide-up'
                      )}
                      style={{ animationDelay: `${100 + idx * 100}ms` }}
                    >
                      <div className='flex flex-shrink-0 flex-col items-center'>
                        <div
                          className='z-10 mt-1.5 h-4 w-4 flex-shrink-0'
                          style={{
                            background:
                              idx === 0 ? 'var(--graffiti-blue)' : '#0a0a0a',
                            border: '2px solid var(--graffiti-blue)',
                          }}
                        />
                        {idx < experiences.length - 1 && (
                          <div
                            className='mt-1 w-[2px] flex-1'
                            style={{
                              background:
                                idx === 0
                                  ? 'linear-gradient(to bottom, var(--graffiti-blue), var(--graffiti-blue) 60%, var(--graffiti-orange))'
                                  : idx === experiences.length - 2
                                  ? 'linear-gradient(to bottom, var(--graffiti-orange), transparent)'
                                  : 'var(--graffiti-orange)',
                            }}
                          />
                        )}
                      </div>

                      <div className='flex-1 pb-10 last:pb-0'>
                        <div className='flex flex-wrap items-start justify-between gap-2'>
                          <div>
                            <h3
                              className='graffiti-heading text-xl md:text-2xl'
                              style={{ color: '#ffffff' }}
                            >
                              {exp.role}
                            </h3>
                            <p
                              className='mt-0.5 font-bold'
                              style={{ color: 'var(--graffiti-blue)' }}
                            >
                              {exp.company}
                            </p>
                          </div>
                          <div className='text-right'>
                            <span
                              className='text-sm font-semibold'
                              style={{ color: 'var(--graffiti-orange)' }}
                            >
                              {exp.period}
                            </span>
                            <p className='text-xs text-gray-500'>
                              {exp.location}
                            </p>
                          </div>
                        </div>

                        <ul className='mt-3 space-y-1.5'>
                          {exp.points.map((pt) => (
                            <li
                              key={pt}
                              className='flex items-start gap-2 text-sm leading-relaxed text-gray-400'
                            >
                              <span
                                style={{
                                  color: 'var(--graffiti-orange)',
                                  flexShrink: 0,
                                }}
                              >
                                ▸
                              </span>
                              {pt}
                            </li>
                          ))}
                        </ul>

                        <div className='mb-8 mt-3 flex flex-wrap gap-2'>
                          {exp.stack.map((s) => (
                            <span key={s} className='stack-chip'>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='md:sticky md:top-24 md:self-start'>
                <div
                  className={clsxm(
                    'mb-8',
                    isInView && 'animate-spray-in delay-200'
                  )}
                >
                  <h2 className='graffiti-heading text-3xl md:text-4xl'>
                    <span style={{ color: '#ffffff' }}>SKILL</span>
                    <span style={{ color: 'var(--graffiti-blue)' }}>SET</span>
                  </h2>
                </div>

                <div
                  className={clsxm(
                    'space-y-6',
                    isInView && 'animate-slide-up delay-300'
                  )}
                >
                  {skills.map((group) => (
                    <div key={group.label}>
                      <p
                        className='mb-2 text-xs font-bold uppercase tracking-widest'
                        style={{ color: 'var(--graffiti-orange)' }}
                      >
                        {group.label}
                      </p>
                      <div className='flex flex-wrap gap-2'>
                        {group.items.map((item) => (
                          <span key={item} className='stack-chip'>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={clsxm(
                    'mt-10 p-5',
                    isInView && 'delay-400 animate-slide-up'
                  )}
                  style={{
                    backgroundColor: 'var(--spray-elevated)',
                    border: '1px solid var(--graffiti-blue)',
                    borderLeftWidth: '3px',
                  }}
                >
                  <h4 className='graffiti-heading mb-2 text-xl text-white'>
                    EDUCATION
                  </h4>
                  <p className='font-bold text-white'>BSc. Computer Science</p>
                  <p
                    className='mt-1 text-sm'
                    style={{ color: 'var(--graffiti-orange)' }}
                  >
                    2017 — 2021
                  </p>
                  <p className='mt-1 text-xs text-gray-500'>
                    Kwame Nkrumah University of Science and Technology
                  </p>
                </div>

                <div
                  className={clsxm(
                    'mt-4 p-5',
                    isInView && 'animate-slide-up delay-500'
                  )}
                  style={{
                    backgroundColor: 'var(--spray-card)',
                    border: '1px solid var(--spray-border)',
                  }}
                >
                  <h4
                    className='graffiti-heading mb-3 text-xl'
                    style={{ color: '#ffffff' }}
                  >
                    CONTACT
                  </h4>
                  <div className='space-y-2 text-sm text-gray-400'>
                    <p>
                      <span className='font-semibold text-white'>Email: </span>
                      <a
                        href='mailto:paulobitrim@gmail.com'
                        className='hover:underline'
                        style={{ color: 'var(--graffiti-blue)' }}
                      >
                        paulobitrim@gmail.com
                      </a>
                    </p>
                    <p>
                      <span className='font-semibold text-white'>GitHub: </span>
                      <a
                        href='https://github.com/Obitrim'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:underline'
                        style={{ color: 'var(--graffiti-blue)' }}
                      >
                        github.com/Obitrim
                      </a>
                    </p>
                    <p>
                      <span className='font-semibold text-white'>
                        Location:{' '}
                      </span>
                      Accra, Ghana.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AppContainer>
        </section>
      </main>
    </Layout>
  );
};

export default ResumePage;
