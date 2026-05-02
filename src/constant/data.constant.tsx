import { ImGit, ImGithub } from 'react-icons/im';
import { Project } from 'types/projects';

import b2d from '../assets/images/projects/b2d.png';
import blogCards from '../assets/images/projects/blog-cards.png';
import cssArt from '../assets/images/projects/css-art.png';
import datePicker from '../assets/images/projects/date-picker.png';
import expressionz from '../assets/images/projects/expressionz.png';
import lwm from '../assets/images/projects/lwm.png';
import minft from '../assets/images/projects/minft.png';
import nzCompanies from '../assets/images/projects/nz-companies.png';
import spokVC from '../assets/images/projects/spok.png';
import talkstackAI from '../assets/images/projects/talkstack.png';
import teamwell from '../assets/images/projects/tw2.png';
import yourLife from '../assets/images/projects/yourlife.png';

export const TECHNOLOGIES_AND_TOOLS = [
  {
    name: 'Git',
    url: 'https://git-scm.com/',
    // logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    logo: <ImGit className='h-14 w-14' />,
  },
  {
    name: 'Github',
    url: 'https://github.com/',
    // logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    logo: <ImGithub className='h-14 w-14' />,
  },
  {
    name: 'Javascript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  },

  // {
  //   url: 'https://tailwindui.com/',
  //   logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  // },
  {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
  },
  {
    name: 'NextJS',
    url: 'https://nextjs.org/',
    logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
  },
  {
    name: 'NodeJS',
    url: 'https://nodejs.org',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    name: 'ReduxJS',
    url: 'https://redux.js.org',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
  },
  {
    name: 'ReactJS',
    url: 'https://react.dev/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
  },
  {
    name: 'VueJS',
    url: 'https://vuejs.org/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
  },
  {
    name: 'TailwindCSS',
    url: 'https://tailwindcss.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
  },
  {
    name: 'html',
    url: 'https://www.w3.org/html/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  },
  {
    name: 'Firebase',
    url: 'https://firebase.google.com/',
    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  },
];

export const MINI_PROJECTS: Project[] = [
  {
    name: 'Responsive Blog cards',
    description: 'UI challenge',
    image: blogCards,
    url: 'https://obitrim.github.io/blog-cards/',
    stack: ['HTML', 'CSS'],
  },
  {
    name: 'Date picker',
    description: 'UI Component',
    image: datePicker,
    url: 'https://obitrim.github.io/calendar/',
    stack: ['HTML', 'CSS', 'JS'],
  },
];

export const SIDE_PROJECTS: Project[] = [
  {
    name: 'Binary - Decimal converter',
    description:
      'An application that converts decimal numbers to binary numbers and vice-versa',
    image: b2d,
    url: 'https://obitrim.github.io/Binary-Decimal-Converter/',
    stack: ['HTML', 'CSS', 'JS'],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'TalkstackAI',
    image: talkstackAI,
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
    name: 'SpokVC',
    image: spokVC,
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
    image: minft,
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
    image: teamwell,
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
    image: yourLife,
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
    image: expressionz,
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
    name: 'NZ Companies',
    description:
      'Platform for querying and analyzing private NZ companies and shareholders.',
    image: nzCompanies,
    url: 'https://staging-nzcompanies.netlify.app/',
    stack: ['NextJs', 'Firebase', 'Tailwind CSS', 'Typescript', 'React-Query'],
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
    name: 'Learn with Mochi',
    description:
      'Coding kit and storybooks for teaching children programming concepts.',
    image: lwm,
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
  //   name: 'Flinc Hub',
  //   description: 'A website for a software development startup',
  //   image: flinchub,
  //   url: 'https://flinchub.com/',
  //   stack: ['React.js', 'HTML & CSS', 'Tailwind CSS', 'Typescript'],
  // },
  {
    name: 'CSS Art',
    description: 'Art and designs using only HTML & CSS, without images or JS.',
    image: cssArt,
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
