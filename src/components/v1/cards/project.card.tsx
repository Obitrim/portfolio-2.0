import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import { ComponentPropsWithoutRef, Fragment, useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BaseCard from './index.base-card';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  comment?: string;
  name: string;
  description: string;
  stack: string[];
  isHyperlink?: boolean;
  url: string;
  image: string | StaticImageData;
  images?: (string | StaticImageData)[];
}

const ProjectCard = ({
  className,
  name,
  description,
  stack,
  url,
  isHyperlink = true,
  image,
  images,
  ...props
}: CardProps) => {
  const router = useRouter();
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const allImages = [image, ...(images ?? [])];

  function viewProject() {
    if (!isHyperlink) {
      router.push(url);
      return;
    }
    anchorRef.current?.click();
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/60 backdrop-blur-sm' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-screen max-w-4xl transform overflow-hidden rounded-lg bg-[#0d0d0d] text-left align-middle shadow-2xl transition-all lg:max-w-6xl'>
                  <div className='relative'>
                    <button
                      onClick={() => setIsOpen(false)}
                      className='absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-gray-300 hover:bg-black/80 hover:text-white'
                    >
                      ✕
                    </button>

                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      loop={allImages.length > 1}
                      className='project-modal-swiper'
                    >
                      {allImages.map((img, i) => (
                        <SwiperSlide key={i}>
                          <Image
                            src={img}
                            alt={`${name} screenshot ${i + 1}`}
                            width={1200}
                            height={900}
                            className='h-auto w-full object-contain'
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className='p-6'>
                    <h2 className='font-grotest mb-1 text-xl text-gray-100'>
                      {name}
                    </h2>
                    <p className='mb-4 text-sm text-gray-400'>{description}</p>

                    <div className='mb-6 flex flex-wrap gap-2'>
                      {stack.map((tech, i) => (
                        <span
                          key={i}
                          className='rounded bg-gray-800 px-2 py-0.5 text-xs text-gray-400'
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={clsx(
                        'inline-flex items-center gap-2 rounded px-5 py-2.5',
                        'bg-[var(--primary)] text-sm font-medium text-white',
                        'transition-opacity hover:opacity-80'
                      )}
                    >
                      Visit Project
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                      </svg>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

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
        {...props}
      >
        <div
          className='group relative cursor-zoom-in overflow-hidden'
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={image}
            className='w-full transition-transform duration-300 group-hover:scale-105'
            alt={name}
            height={120}
            width={240}
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40'>
            <span className='flex translate-y-2 items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-900 opacity-0 shadow transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-3.5 w-3.5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
                />
              </svg>
              View screenshots
            </span>
          </div>
        </div>
        <div className='p-4'>
          <h3
            onClick={viewProject}
            className='font-grotest text-lg text-gray-200 hover:text-[var(--primary)]'
          >
            {name}
          </h3>
          <p
            className='text-medium mt-2 mb-1 text-gray-400'
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className='mb-4 text-xs text-[var(--primary)] hover:underline'
          >
            See more
          </button>
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
