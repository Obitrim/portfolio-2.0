import React, { useRef } from 'react';

import clsxm from '@/lib/clsxm';
import { useInView } from '@/hooks/useInView';

import AppContainer from '@/components/v1/hoc/container/index.container';
import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

const experiences = [
  {
    role: 'Fullstack Developer',
    company: 'TalkstackAI',
    period: '2023 — Present',
    location: 'Remote, US',
    points: [
      'Built AI voice platform for automating customer communication using Retell and Twilio',
      'Architected Next.js frontend with Redux Toolkit, Firebase auth, and Framer Motion',
      'Engineered Node.js backend APIs and AWS infrastructure for scalable deployments',
    ],
    stack: ['Next.js', 'Node.js', 'Firebase', 'AWS', 'Twilio'],
  },
  {
    role: 'Frontend Developer',
    company: 'SpokVC',
    period: '2022 — 2023',
    location: 'Remote, US',
    points: [
      'Built AI-driven VC management system for tracking funds and portfolio companies',
      'Developed responsive dashboards with complex data tables and filtering systems',
      'Integrated Firebase real-time database and Redux Toolkit state management',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Firebase',
      'Redux-Toolkit',
      'Tailwind CSS',
    ],
  },
  {
    role: 'Fullstack Developer',
    company: 'BRC101',
    period: '2022 — 2023',
    location: 'Remote, US',
    points: [
      'Built concierge management platform with role-based workflows for field, managerial, and admin staff',
      'Developed scheduling, shift rules, policy engines and real-time reporting modules',
      'Designed PostgreSQL schema and Node.js/Express REST APIs with Railway Cloud deployment',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'TypeScript'],
  },
  {
    role: 'Frontend Developer',
    company: 'Freelance / Contracts',
    period: '2020 — 2022',
    location: 'Remote',
    points: [
      'Delivered 10+ production web applications for US and Ghanaian clients',
      'Shipped LGCMV.org (Ghanaian community), YourLife.io (fundraising), and NFT platforms',
      'Focused on performance optimization, responsive design, and accessibility',
    ],
    stack: ['Next.js', 'React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
  },
];

const skills = [
  {
    label: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'VueJS',
      'Redux',
      'Framer Motion',
    ],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Firebase', 'Prisma'],
  },
  {
    label: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Firebase Firestore', 'Redis'],
  },
  {
    label: 'Cloud & Tools',
    items: ['AWS', 'Railway', 'Vercel', 'Git', 'Docker', 'CI/CD'],
  },
];

const ResumePage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <Layout>
      <Seo title='Resume | Paul' />

      <main>
        <section className='concrete-texture relative overflow-hidden py-20 md:py-28'>
          <AppContainer className='relative z-10'>
            <div className='spray-label mb-4'>Credentials</div>
            <h1 className='graffiti-heading text-5xl md:text-7xl'>
              <span style={{ color: 'var(--ink)' }}>MY </span>
              <span
                className='brush-underline'
                style={{ color: 'var(--graffiti-blue)' }}
              >
                RESUME
              </span>
            </h1>
            <p className='mt-4 max-w-lg text-sm leading-relaxed text-gray-600 md:text-base'>
              Fullstack developer with 4+ years building scalable web
              applications for startups and enterprises across the US, Ghana,
              and beyond.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <a href='/resume.pdf' download className='btn-primary'>
                DOWNLOAD PDF ↓
              </a>
              <a href='mailto:paulobitrim@gmail.com' className='btn-outline'>
                HIRE ME →
              </a>
            </div>
          </AppContainer>
        </section>

        <section
          ref={sectionRef}
          className='v-whitespace'
          style={{ backgroundColor: '#ffffff' }}
        >
          <AppContainer>
            <div className='grid grid-cols-1 gap-16 md:grid-cols-3'>
              <div className='md:col-span-2'>
                <div className={clsxm('mb-10', isInView && 'animate-spray-in')}>
                  <h2 className='graffiti-heading text-3xl md:text-4xl'>
                    <span style={{ color: 'var(--ink)' }}>WORK </span>
                    <span style={{ color: 'var(--graffiti-orange)' }}>
                      EXPERIENCE
                    </span>
                  </h2>
                </div>

                <div className='relative pl-6 md:pl-8'>
                  <div
                    className='absolute left-0 top-0 h-full w-[2px]'
                    style={{
                      background:
                        'linear-gradient(to bottom, var(--graffiti-blue), var(--graffiti-orange), transparent)',
                    }}
                  />

                  {experiences.map((exp, idx) => (
                    <div
                      key={exp.company}
                      className={clsxm(
                        'relative mb-10 last:mb-0',
                        isInView && 'animate-slide-up'
                      )}
                      style={{ animationDelay: `${100 + idx * 100}ms` }}
                    >
                      <div
                        className='absolute -left-[29px] top-1 h-4 w-4'
                        style={{
                          background:
                            idx === 0 ? 'var(--graffiti-blue)' : '#ffffff',
                          border: '2px solid var(--graffiti-blue)',
                        }}
                      />

                      <div className='flex flex-wrap items-start justify-between gap-2'>
                        <div>
                          <h3
                            className='graffiti-heading text-xl md:text-2xl'
                            style={{ color: 'var(--ink)' }}
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
                            className='flex items-start gap-2 text-sm leading-relaxed text-gray-600'
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

                      <div className='mt-3 flex flex-wrap gap-2'>
                        {exp.stack.map((s) => (
                          <span key={s} className='stack-chip'>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div
                  className={clsxm(
                    'mb-8',
                    isInView && 'animate-spray-in delay-200'
                  )}
                >
                  <h2 className='graffiti-heading text-3xl md:text-4xl'>
                    <span style={{ color: 'var(--ink)' }}>SKILL</span>
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
                  style={{ backgroundColor: 'var(--ink)' }}
                >
                  <h4 className='graffiti-heading mb-2 text-xl text-white'>
                    EDUCATION
                  </h4>
                  <p className='font-bold text-white'>BSc. Computer Science</p>
                  <p
                    className='mt-1 text-sm'
                    style={{ color: 'var(--graffiti-orange)' }}
                  >
                    2018 — 2022
                  </p>
                  <p className='mt-1 text-xs text-gray-400'>
                    University of Ghana
                  </p>
                </div>

                <div
                  className={clsxm(
                    'mt-4 p-5',
                    isInView && 'animate-slide-up delay-500'
                  )}
                  style={{
                    backgroundColor: '#f8f8f8',
                    border: '1px solid #eeeeee',
                  }}
                >
                  <h4
                    className='graffiti-heading mb-3 text-xl'
                    style={{ color: 'var(--ink)' }}
                  >
                    CONTACT
                  </h4>
                  <div className='space-y-2 text-sm text-gray-600'>
                    <p>
                      <span
                        className='font-semibold'
                        style={{ color: 'var(--ink)' }}
                      >
                        Email:{' '}
                      </span>
                      paulobitrim@gmail.com
                    </p>
                    <p>
                      <span
                        className='font-semibold'
                        style={{ color: 'var(--ink)' }}
                      >
                        GitHub:{' '}
                      </span>
                      github.com/Obitrim
                    </p>
                    <p>
                      <span
                        className='font-semibold'
                        style={{ color: 'var(--ink)' }}
                      >
                        Location:{' '}
                      </span>
                      Remote / Worldwide
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
