import clsx from 'clsx';
import Image from 'next/image';
import React, { ComponentPropsWithoutRef } from 'react';

import BaseCard from './index.base-card';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  comment?: string;
}

const ProjectCard = ({ className, ...props }: CardProps) => {
  return (
    <BaseCard className={clsx('shadow-2xl', className)} {...props}>
      {/* quote icon */}
      {/* <ImQuotesLeft className='text-primary text-5xl opacity-60' /> */}
      {/* Comment */}
      <Image
        src=''
        className='w-full'
        alt='project name'
        height={120}
        width={240}
      />
      <h3 className='text-lg text-gray-300'>Project name</h3>
      <p className='text-medium mb-4 text-gray-400'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nobis
        earum voluptate error inventore iure dolorum delectus maiores
      </p>
      <div className='flex flex-wrap items-center gap-3 text-xs text-gray-400'>
        {new Array(4).fill(null).map((_, index) => (
          <span key={index}>C#</span>
        ))}
      </div>
    </BaseCard>
  );
};

export default ProjectCard;
