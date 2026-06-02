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

  // Additional items from the provided list, not already included above

  // Frontend
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Redux Toolkit',
    url: 'https://redux-toolkit.js.org/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
  },
  {
    name: 'Zustand',
    url: 'https://zustand-demo.pmnd.rs/',
    logo: 'data:image/jpeg;base64,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',
  },
  {
    name: 'React Query',
    url: 'https://tanstack.com/query',
    logo: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/react-query-icon-xjukes5xosrrwg3y3ics1f.png/react-query-icon-2dw36yx2b016w37mbipyn.png?_a=DATAiZiuZAA0',
  },
  {
    name: 'Pinia',
    url: 'https://pinia.vuejs.org/',
    logo: 'https://pinia.vuejs.org/logo.svg',
  },
  {
    name: 'Shadcn UI',
    url: 'https://ui.shadcn.com/',
    logo: 'https://ui.shadcn.com/apple-touch-icon.png',
  },

  // Backend
  {
    name: 'Express.js',
    url: 'https://expressjs.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
  },
  {
    name: 'REST APIs',
    url: 'https://restfulapi.net/',
    logo: null,
  },
  {
    name: 'Firebase',
    url: 'https://firebase.google.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'Web Sockets',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/WebSocket_colored_logo.svg/960px-WebSocket_colored_logo.svg.png',
  },

  // Testing & Tools
  {
    name: 'Jest',
    url: 'https://jestjs.io/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg',
  },
  {
    name: 'Cypress',
    url: 'https://www.cypress.io/',
    logo: 'https://avatars.githubusercontent.com/u/8908513?s=200&v=4',
  },
  {
    name: 'Git',
    url: 'https://git-scm.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
  },
  {
    name: 'Zod',
    url: 'https://zod.dev/',
    logo: 'https://zod.dev/_next/image?url=%2Flogo%2Flogo-glow.png&w=640&q=100',
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
