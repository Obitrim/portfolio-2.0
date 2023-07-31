import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';
import { ImQuotesLeft } from 'react-icons/im';

import BaseCard from '@/components/v1/cards/index.base-card';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  comment?: string;
}

const TestimonialCard = ({ className, ...props }: CardProps) => {
  return (
    <BaseCard className={clsx('shadow-2xl', className)} {...props}>
      {/* quote icon */}
      <ImQuotesLeft className='text-primary text-5xl opacity-60' />
      {/* Comment */}
      <p className='text-medium my-4 text-gray-300'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nobis
        earum voluptate error inventore iure dolorum delectus maiores possimus
        veritatis.
      </p>
      {/* profile */}
      <div className={clsx('flex items-center gap-2')}>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img className='h-10 w-10 rounded-full object-cover' src='' alt='' />
        <p className='text-gray-300'>
          Lorem, ipsum dolor. <br />{' '}
          <span className={clsx('text-gray-400')}>Software Engineer</span>
        </p>
      </div>
    </BaseCard>
  );
};

export default TestimonialCard;
