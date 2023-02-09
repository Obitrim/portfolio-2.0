import clsx from 'clsx';
import React from 'react';

import TestimonialCard from '@/components/v1/cards/testimonial.card';
import AppContainer from '@/components/v1/hoc/container/index.container';

const TestimonialsSection = () => {
  return (
    <section className='v-whitespace'>
      <AppContainer>
        <p className='text-light-primary'>Testimonials</p>
        <strong className={clsx('text-3xl')}>What clients say</strong>

        <div
          className={clsx('grid gap-8 sm:grid-cols-2 md:grid-cols-3', 'my-8')}
        >
          <TestimonialCard className='bg-darker rounded' />
          <TestimonialCard className='bg-darker rounded' />
          <TestimonialCard className='bg-darker rounded' />
        </div>
      </AppContainer>
    </section>
  );
};

export default TestimonialsSection;
