import { ImGit, ImGithub } from 'react-icons/im';

export const TECHNOLOGIES_AND_TOOLS = [
  {
    url: 'https://firebase.google.com/',
    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  },
  {
    url: 'https://git-scm.com/',
    // logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    logo: <ImGit className='h-14 w-14' />,
  },
  {
    url: 'https://github.com/',
    // logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    logo: <ImGithub className='h-14 w-14' />,
  },
  {
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  },
  {
    url: 'https://www.w3.org/html/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  },
  // {
  //   url: 'https://tailwindui.com/',
  //   logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  // },
  {
    url: 'https://www.mongodb.com/',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
  },
  {
    url: 'https://nextjs.org/',
    logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
  },
  {
    url: 'https://nodejs.org',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    url: 'https://redux.js.org',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
  },
];

export const PROJECTS = [
  {
    name: 'NZ Companies',
    description:
      'A platform for querying and analyzing the data of private New Zealand companies and shareholders',
    image: '/images/projects/nz-companies.png',
    url: 'https://staging-nzcompanies.netlify.app/',
    stack: ['NextJs', 'Firebase', 'Tailwind CSS', 'Typescript', 'React-Query'],
  },
  {
    name: 'Magic Mynt',
    image: '/images/projects/magic-mint.png',
    url: 'https://magicmynt.com/',
    description:
      'A No-Code Tool For Creating, Launching, And Managing NFT Collections',
    stack: [
      'Next.js',
      'Firebase',
      'Tailwind CSS',
      'Typescript',
      'Moralis',
      'Web3',
      'Ether.js',
      'Hardhat',
    ],
  },
  {
    name: 'Flinc Hub',
    description: 'A website for a software development startup',
    image: '/images/projects/flinchub.png',
    url: 'https://flinchub.com/',
    stack: ['Next.js', 'Firebase', 'Tailwind CSS', 'Typescript'],
  },
  {
    name: 'Learn with Mochi',
    description:
      'Learn With Mochi - A Programming Kit For Children With A Hands-On Coding Experience And Universe Of Fun Storybooks.',
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
];
