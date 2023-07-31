import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import AppContainer from '@/components/v1/hoc/container/index.container';

import { PROJECTS } from '@/constant/data.constant';

const ProjectsSection = () => {
  return (
    <section className='v-whitespace bg-darker'>
      <AppContainer>
        <section className='mb-5 text-center'>
          <h3 className='text-3xl'>
            Recent <span className='text-primary'>Projects</span>
          </h3>
          {/* <p className={clsx('mx-auto max-w-lg px-4', 'my-4 text-gray-300')}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            provident neque blanditiis? Quidem quibusdam qui doloribus fugiat
            suscipit placeat, soluta tenetur dignissimos illum porro at veniam
            molestiae
          </p> */}
        </section>
      </AppContainer>
      <Swiper
        effect='cards'
        grabCursor
        modules={[EffectCards]}
        centeredSlides
        loopedSlides={PROJECTS.length}
        cardsEffect={{
          perSlideOffset: 30,
        }}
        slideActiveClass='active-card'
        initialSlide={Math.floor(PROJECTS.length / 2)}
        loop
      >
        {PROJECTS.map((project, index) => (
          <SwiperSlide key={index}>
            <a
              key={project.url + index}
              href={project.url}
              target='_blank'
              rel='noreferrer'
              className={clsx(
                'block h-[450px] w-[600px] overflow-hidden',
                'rounded bg-dark px-6 py-10',
                'flex justify-center',
                'border border-gray-900 hover:border-gray-700',
                'transition-all duration-150'
              )}
            >
              <Image
                src={project.image}
                width={600}
                height={450}
                // layout='fill'
                className=' rounded-md object-cover'
                loading='lazy'
                alt=''
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectsSection;
