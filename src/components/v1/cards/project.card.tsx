import clsx from 'clsx';
import Image from 'next/image';
import React, { ComponentPropsWithoutRef, useRef } from 'react';

import BaseCard from './index.base-card';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  comment?: string;
  name: string;
  description: string;
  stack: string[];
  url: string;
  image: string;
}

const ProjectCard = ({
  className,
  name,
  description,
  stack,
  url,
  image,
  ...props
}: CardProps) => {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  function viewProject() {
    anchorRef.current?.click();
  }

  return (
    <>
      <a
        ref={anchorRef}
        href={url}
        className='absolute'
        target='_blank'
        rel='noopener noreferrer'
      ></a>
      <BaseCard
        className={clsx(
          'cursor-pointer p-0 shadow-lg hover:shadow-2xl',
          className
        )}
        onClick={viewProject}
        {...props}
      >
        <Image
          src={image}
          className='w-full'
          alt={name}
          height={120}
          width={240}
        />
        <div className='p-4'>
          <h3 className='font-grotest text-lg text-gray-200'>{name}</h3>
          <p className='text-medium mt-2 mb-4 text-gray-400'>{description}</p>
          <div className='flex flex-wrap items-center gap-3 text-xs text-gray-400'>
            {stack.map((technology, index) => (
              <span key={index + technology}>#{technology}</span>
            ))}
          </div>
        </div>
      </BaseCard>
    </>
  );
};

export default ProjectCard;
