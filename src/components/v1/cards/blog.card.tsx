import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import Tag from '@/components/v1/tag';

const BlogCard = () => {
  return (
    <article className={clsx('flex gap-6')}>
      <Image
        className='rounded'
        width={170}
        height={80}
        src='/images/blog-img.webp'
        alt='blog image'
      />
      <div>
        <p className='font-semibold italic text-gray-400'>
          {new Date().toDateString()}
        </p>
        <strong>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic.
        </strong>

        <div className={clsx('mt-6 flex flex-wrap items-center gap-4')}>
          {new Array(4).fill(null).map((_, idx) => (
            <Tag key={idx} text='Js' />
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
