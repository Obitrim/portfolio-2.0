import React from 'react';

import AppContainer from '@/components/v1/hoc/container/index.container';
import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

const BlogPage = () => {
  return (
    <Layout>
      <Seo title='Blog | Paul' />

      <main>
        <section className='concrete-texture relative overflow-hidden py-20 md:py-28'>
          <AppContainer className='relative z-10'>
            <div className='spray-label mb-4'>Writing</div>
            <h1 className='graffiti-heading text-5xl md:text-7xl'>
              <span style={{ color: 'var(--ink)' }}>THE </span>
              <span
                className='brush-underline'
                style={{ color: 'var(--graffiti-blue)' }}
              >
                BLOG
              </span>
            </h1>
            <p className='mt-4 max-w-lg text-sm leading-relaxed text-gray-600 md:text-base'>
              Thoughts on software engineering, web development, and building
              things that matter.
            </p>
          </AppContainer>
        </section>

        <section
          className='v-whitespace'
          style={{ backgroundColor: '#ffffff' }}
        >
          <AppContainer>
            <div className='flex flex-col items-center justify-center py-16 text-center'>
              <div
                className='mb-6 flex h-20 w-20 items-center justify-center'
                style={{
                  backgroundColor: '#f8f8f8',
                  border: '2px solid var(--graffiti-blue)',
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={1.5}
                  style={{ color: 'var(--graffiti-blue)' }}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                  />
                </svg>
              </div>

              <h2
                className='graffiti-heading text-3xl md:text-4xl'
                style={{ color: 'var(--ink)' }}
              >
                COMING{' '}
                <span style={{ color: 'var(--graffiti-orange)' }}>SOON</span>
              </h2>
              <p className='mt-3 max-w-sm text-sm text-gray-500'>
                I&apos;m working on some articles. Stay tuned for posts on
                React, Node.js, system design, and more.
              </p>

              <a
                href='mailto:paulobitrim@gmail.com'
                className='btn-primary mt-8'
              >
                NOTIFY ME →
              </a>
            </div>
          </AppContainer>
        </section>
      </main>
    </Layout>
  );
};

export default BlogPage;
