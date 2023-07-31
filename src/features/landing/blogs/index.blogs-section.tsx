import React from 'react';

import BlogCard from '@/components/v1/cards/blog.card';
import AppContainer from '@/components/v1/hoc/container/index.container';

const BlogsSection = () => {
  return (
    <div className='v-whitespace relative z-30'>
      <AppContainer>
        <h3 className='text-3xl'>
          Recent <span className='text-primary'>blogs</span>
        </h3>

        <div className='mt-6 grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2'>
          {new Array(6).fill(null).map((_, idx) => (
            <BlogCard key={idx} />
          ))}
        </div>
      </AppContainer>
    </div>
  );
};

export default BlogsSection;
