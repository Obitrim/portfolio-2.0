import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

import { PROJECTS } from '@/constant/data.constant';
import AboutSection from '@/features/landing/about/index.about';
import HomeBannerSection from '@/features/landing/banner/index.banner';
import CTASection from '@/features/landing/cta/index.cta';
import ProjectsSection from '@/features/landing/projects/v2.projects-section';
import TechStackSection from '@/features/landing/tech-stack/index.tech-stack';

export default function HomePage() {
  return (
    <Layout>
      <Seo
        title='Paul Obitrim — Fullstack Software Engineer'
        description='Paul Obitrim is a fullstack software engineer based in Accra, Ghana, specialising in React, Next.js, Vue.js, Node.js and TypeScript. Available for freelance, remote and full-time opportunities.'
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Paul Obitrim',
            url: 'https://paulobitrim.dev',
            image: 'https://paulobitrim.dev/graffiti-profile.png',
            jobTitle: 'Software Engineer',
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
            knowsAbout: [
              'React.js',
              'Next.js',
              'Vue.js',
              'TypeScript',
              'JavaScript',
              'Node.js',
              'NestJS',
              'PostgreSQL',
              'MongoDB',
              'Tailwind CSS',
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Paul Obitrim — Software Engineer',
            url: 'https://paulobitrim.dev',
            description:
              'Portfolio of Paul Obitrim, a fullstack software engineer based in Accra, Ghana.',
            author: { '@type': 'Person', name: 'Paul Obitrim' },
          },
        ]}
      />

      <main className='w-screen overflow-x-hidden'>
        <HomeBannerSection />
        <TechStackSection />
        <ProjectsSection
          projects={PROJECTS.slice(0, 6)}
          extraContent={
            PROJECTS.length > 6 ? (
              <div className='flex justify-center pt-4'>
                <Link href='/projects' className='btn-primary'>
                  VIEW ALL PROJECTS →
                </Link>
              </div>
            ) : undefined
          }
        />
        <AboutSection />
        <CTASection />
      </main>
    </Layout>
  );
}
