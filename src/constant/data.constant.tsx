import React from 'react';
import { ImGit, ImGithub } from 'react-icons/im';
import { Project } from 'types/projects';

export const FEATURED_TECH = [
  {
    name: 'React',
    url: 'https://react.dev/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Vue.js',
    url: 'https://vuejs.org/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'NestJS',
    url: 'https://nestjs.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg',
  },
  {
    name: 'TailwindCSS',
    url: 'https://tailwindcss.com/',
    logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  },
  {
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Supabase',
    url: 'https://supabase.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg',
  },
];

export type TechItem = {
  name: string;
  url: string;
  logo: string | React.ReactNode;
};

export const TECHNOLOGIES_AND_TOOLS: TechItem[] = [
  {
    name: 'React.js',
    url: 'https://react.dev/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
  },
  {
    name: 'Vue.js',
    url: 'https://vuejs.org/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  },
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TailwindCSS',
    url: 'https://tailwindcss.com/',
    logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  },
  {
    name: 'Redux Toolkit',
    url: 'https://redux-toolkit.js.org/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
  },
  { name: 'Zustand', url: 'https://zustand-demo.pmnd.rs/', logo: null },
  { name: 'React Query', url: 'https://tanstack.com/query', logo: null },
  { name: 'Pinia', url: 'https://pinia.vuejs.org/', logo: null },
  { name: 'Shadcn UI', url: 'https://ui.shadcn.com/', logo: null },
  {
    name: 'Node.js',
    url: 'https://nodejs.org',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express.js',
    url: 'https://expressjs.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
  },
  {
    name: 'NestJS',
    url: 'https://nestjs.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg',
  },
  { name: 'REST APIs', url: '#', logo: null },
  {
    name: 'Firebase',
    url: 'https://firebase.google.com/',
    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  },
  {
    name: 'Supabase',
    url: 'https://supabase.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg',
  },
  { name: 'WebSockets', url: '#', logo: null },
  {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Firestore',
    url: 'https://firebase.google.com/products/firestore',
    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  },
  {
    name: 'Jest',
    url: 'https://jestjs.io/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg',
  },
  {
    name: 'Cypress',
    url: 'https://cypress.io/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cypressio/cypressio-original.svg',
  },
  {
    name: 'Git',
    url: 'https://git-scm.com/',
    logo: <ImGit className='h-8 w-8' />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    logo: <ImGithub className='h-8 w-8' />,
  },
  { name: 'Zod', url: 'https://zod.dev/', logo: null },
  { name: 'Yup', url: 'https://github.com/jquense/yup', logo: null },
];

export const MINI_PROJECTS: Project[] = [
  {
    name: 'Responsive Blog cards',
    description: 'UI challenge',
    image: '/images/projects/blog-cards.png',
    url: 'https://obitrim.github.io/blog-cards/',
    stack: ['HTML', 'CSS'],
  },
  {
    name: 'Date picker',
    description: 'UI Component',
    image: '/images/projects/date-picker.png',
    url: 'https://obitrim.github.io/calendar/',
    stack: ['HTML', 'CSS', 'JS'],
  },
];

export const SIDE_PROJECTS: Project[] = [
  {
    name: 'Binary - Decimal converter',
    description:
      'An application that converts decimal numbers to binary numbers and vice-versa',
    image: '/images/projects/b2d.png',
    url: 'https://obitrim.github.io/Binary-Decimal-Converter/',
    stack: ['HTML', 'CSS', 'JS'],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'TalkstackAI',
    image: '/images/projects/talkstack.png',
    url: 'https://www.talkstack.ai/',
    description:
      'AI voice platform for automating customer communication and support.',
    stack: [
      'Next.js',
      'Firebase',
      'Tailwind CSS',
      'Typescript',
      'Redux-Toolkit',
      'Framer Motion',
      'NodeJs',
      'Retell',
      'Twilio',
      'AWS',
    ],
  },
  {
    name: 'BRC',
    image: '/images/projects/brc/brc_dashboard.png',
    images: [
      '/images/projects/brc/brc_schedules.png',
      '/images/projects/brc/brc_journal.png',
    ],
    url: 'https://brc101.com/',
    description:
      'Concierge management platform enabling managers to create buildings, departments, users, schedules, shift rules, and policies; supervisors to assign shifts and tasks, log packages, and review reports; and staff to clock in/out, complete checklists, and handle daily operations — all tailored to role-based workflows for field, managerial, and admin staff.',

    stack: [
      'ReactJs',
      'Typescript',
      'Tailwind CSS',
      'Redux-Toolkit',
      'React Query',
      'Node.js',
      'Express',
      'Railway Cloud',
      'PostgreSQL',
    ],
  },
  {
    name: 'LGCMV',
    description:
      'Website for the Ghanaian Community of Merrimack Valley focused on social assistance, emergency support, and celebrating Ghanaian heritage.',

    image: '/images/projects/lgcmv/lgcmv_landing.png',
    images: [
      '/images/projects/lgcmv/lgcmv_about-us.png',
      '/images/projects/lgcmv/lgcmv_our_story.png',
    ],
    url: 'https://www.lgcmv.org/',
    stack: ['NextJs', 'Tailwindcss', 'GSAP', 'Typescript', 'JavaScript'],
  },
  {
    name: 'SpokVC',
    image: '/images/projects/spok.png',
    url: 'https://spok.vc/',
    description:
      'AI-driven Venture Capital management system for tracking funds and companies.',
    stack: [
      'Next.js',
      'Firebase',
      'Tailwind CSS',
      'Typescript',
      'Redux-Toolkit',
    ],
  },
  {
    name: 'MiNFT',
    image: '/images/projects/minft.png',
    url: 'https://minft.me/',
    description:
      'Decentralized, crowd-sourced platform for tracking NFT projects and metrics.',
    stack: [
      'Next.js',
      'Firebase',
      'Tailwind CSS',
      'Typescript',
      'Moralis',
      'Web3',
    ],
  },
  {
    name: 'HR Management System',
    image: '/images/projects/teamwell/tw2.png',
    images: [
      '/images/projects/teamwell/tw1.png',
      '/images/projects/teamwell/tw3.png',
      '/images/projects/teamwell/tw4.png',
    ],
    url: 'http://www.teamwell.co',
    description:
      'App for managing personnel, leaves, agenda, vehicles, and posts.',
    stack: [
      'VueJS',
      'Directus',
      'Tailwind CSS',
      'Typescript',
      'Pinia',
      'Vue-query',
    ],
  },
  {
    name: 'YourLife',
    description:
      'Fundraising platform with digital cards and programs for teams and schools.',
    image: '/images/projects/yourlife.png',
    url: 'https://yourlife.io/',
    stack: [
      'NextJs',
      'Firebase',
      'Tailwind CSS',
      'Typescript',
      'NodeJs',
      'Stripe',
    ],
  },
  {
    name: 'Expressionz',
    description: 'Create custom emojis from NFTs for messaging apps.',
    image: '/images/projects/expressionz.png',
    url: 'https://expressionz.xyz/',
    stack: [
      'NextJs',
      'Firebase',
      'Tailwind CSS',
      'Typescript',
      'NodeJs',
      'Framer Motion',
    ],
  },

  {
    name: 'Learn with Mochi',
    description:
      'Coding kit and storybooks for teaching children programming concepts.',
    image: '/images/projects/lwm.png',
    url: 'https://learnwithmochi.com/',
    stack: [
      'Next.js',
      'Firebase',
      'Tailwind CSS',
      'Typescript',
      'Framer Motion',
      'AWS',
      'Stripe',
    ],
  },
  // {
  //   name: 'Magic Mynt',
  //   image: magicMint,
  //   url: 'https://magicmynt.com/',
  //   description:
  //     'A No-Code Tool For Creating, Launching, And Managing NFT Collections',
  //   stack: [
  //     'Next.js',
  //     'Firebase',
  //     'Tailwind CSS',
  //     'Typescript',
  //     'Moralis',
  //     'Web3',
  //     'Ether.js',
  //     'Hardhat',
  //   ],
  // },
  {
    name: 'Flinc Hub',
    description: 'A website for a software development startup',
    image: '/images/projects/flinchub.png',
    url: 'https://flinchub-2df6e.web.app',
    stack: ['React.js', 'HTML & CSS', 'Tailwind CSS', 'Typescript'],
  },

  {
    name: 'NZ Companies',
    description:
      'Platform for querying and analyzing private NZ companies and shareholders.',
    image: '/images/projects/nz-companies.png',
    url: 'https://staging-nzcompanies.netlify.app/',
    stack: ['NextJs', 'Firebase', 'Tailwind CSS', 'Typescript', 'React-Query'],
  },

  {
    name: 'CSS Art',
    description: 'Art and designs using only HTML & CSS, without images or JS.',
    image: '/images/projects/css-art.png',
    url: 'https://obitrim.github.io/Ssart/',
    stack: ['HTML & CSS'],
  },

  ...SIDE_PROJECTS,
  ...MINI_PROJECTS,
  // {
  //   name: 'Side Projects',
  //   description: 'Web applications and websites I built for practice',
  //   image: flinchub,
  //   isHyperlink: false,
  //   url: '/side-projects',
  //   stack: ['Next.js', 'ReactJs', 'VueJS', 'HTML & CSS', 'Typescript', 'JS'],
  // },
  // {
  //   name: 'Mini Projects',
  //   description: 'Components and page sections built from ground-up',
  //   image: flinchub,
  //   isHyperlink: false,
  //   url: '/mini-projects',
  //   stack: ['Next.js', 'HTML & CSS', 'Typescript', 'JS'],
  // },
];
