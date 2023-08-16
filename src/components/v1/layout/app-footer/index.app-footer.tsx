import React from 'react';
import { HiPhone } from 'react-icons/hi';
import { ImEnvelop, ImLinkedin, ImTwitter } from 'react-icons/im';

import AppContainer from '@/components/v1/hoc/container/index.container';

const AppFooter = () => {
  return (
    <footer>
      <AppContainer className='flex items-center justify-between py-10 text-gray-400'>
        {/* <strong className='text-2xl font-semibold'>Portfolio</strong> */}
        <a
          href='mailto:paulobitrim@gmail.com'
          className='flex items-center gap-2 underline hover:text-white'
        >
          <ImEnvelop className='h-5 w-5' />
          paulobitrim@gmail.com
        </a>
        <span>&copy;{new Date().getFullYear()}</span>
        <div className='flex items-center gap-x-4'>
          <a
            className='transition-all duration-300 ease-in-out hover:-rotate-[30deg] hover:text-white'
            href='https://www.linkedin.com/in/paul-obitrim-52304b169/'
            target='_blank'
            rel='noreferrer'
          >
            <ImLinkedin className='h-6 w-6' />
          </a>
          <a
            className='transition-all duration-300 ease-in-out hover:-rotate-[30deg] hover:text-white'
            href='https://twitter.com/EvangelistPau10'
            target='_blank'
            rel='noreferrer'
          >
            <ImTwitter className='h-7 w-7' />
          </a>
          <a
            className='transition-all duration-300 ease-in-out hover:-rotate-[30deg] hover:text-white'
            href='tel:+233544923771'
          >
            <HiPhone className='h-7 w-7' />
          </a>
        </div>
      </AppContainer>
    </footer>
  );
};

export default AppFooter;
