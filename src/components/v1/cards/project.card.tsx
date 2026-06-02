import { Dialog, Transition } from '@headlessui/react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import { ComponentPropsWithoutRef, Fragment, useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import clsxm from '@/lib/clsxm';

import BaseCard from './index.base-card';

const ACCENT_COLORS = [
  'var(--graffiti-orange)',
  'var(--graffiti-blue)',
  'var(--tag-lime)',
  'var(--graffiti-orange)',
];

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  name: string;
  description: string;
  stack: string[];
  isHyperlink?: boolean;
  url: string;
  image: string | StaticImageData;
  images?: (string | StaticImageData)[];
  projectIndex?: number;
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
  projectIndex = 0,
  ...props
}: CardProps) => {
  const router = useRouter();
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const accentColor = ACCENT_COLORS[projectIndex % ACCENT_COLORS.length];
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
          className='relative z-50'
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
            <div className='fixed inset-0 bg-black/80 backdrop-blur-sm' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel
                  className='w-screen max-w-4xl transform overflow-hidden text-left align-middle shadow-2xl transition-all lg:max-w-6xl'
                  style={{
                    backgroundColor: '#141414',
                    border: `2px solid ${accentColor}`,
                  }}
                >
                  <div className='relative'>
                    <div
                      className='flex items-center justify-between px-4 py-2'
                      style={{ borderBottom: '1px solid #2a2a2a' }}
                    >
                      <div className='flex items-center gap-2'>
                        <div
                          className='h-2.5 w-2.5 rounded-full'
                          style={{ background: '#ff5f57' }}
                        />
                        <div
                          className='h-2.5 w-2.5 rounded-full'
                          style={{ background: '#ffbd2e' }}
                        />
                        <div
                          className='h-2.5 w-2.5 rounded-full'
                          style={{ background: '#28c840' }}
                        />
                        <span className='ml-2 font-mono text-xs text-gray-500'>
                          {name.toLowerCase().replace(/\s+/g, '-')}.preview
                        </span>
                      </div>
                      <button
                        onClick={() => setIsOpen(false)}
                        className='flex h-7 w-7 items-center justify-center text-gray-500 transition-colors hover:text-white'
                        style={{ border: '1px solid #2a2a2a' }}
                      >
                        ✕
                      </button>
                    </div>

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
                    <h2 className='graffiti-heading mb-1 text-2xl text-white'>
                      {name}
                    </h2>
                    <p className='mb-5 text-sm leading-relaxed text-gray-400'>
                      {description}
                    </p>

                    <div className='mb-6 flex flex-wrap gap-2'>
                      {stack.map((tech, i) => (
                        <span
                          key={i}
                          className='inline-block rounded-sm px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide'
                          style={{
                            backgroundColor: '#222222',
                            color: '#aaaaaa',
                            border: '1px solid #333333',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors duration-200'
                      style={{ color: accentColor }}
                    >
                      Visit Project →
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
      />

      <BaseCard
        className={clsxm(
          'graffiti-card flex h-full cursor-pointer flex-col !p-0',
          className
        )}
        style={{
          borderTop: `2px solid ${accentColor}`,
          boxShadow: isHovered
            ? `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${accentColor}22`
            : '0 2px 12px rgba(0,0,0,0.3)',
          transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <div
          className='group relative cursor-zoom-in overflow-hidden'
          onClick={() => setIsOpen(true)}
        >
          <div
            className='flex items-center gap-1.5 px-3 py-2'
            style={{
              backgroundColor: '#0d0d0d',
              borderBottom: '1px solid #222222',
            }}
          >
            <div
              className='h-2 w-2 rounded-full'
              style={{ background: '#ff5f57' }}
            />
            <div
              className='h-2 w-2 rounded-full'
              style={{ background: '#ffbd2e' }}
            />
            <div
              className='h-2 w-2 rounded-full'
              style={{ background: '#28c840' }}
            />
          </div>
          <Image
            src={image}
            className='h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105'
            alt={name}
            height={176}
            width={400}
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30'>
            <span
              className='flex translate-y-2 items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
              style={{
                backgroundColor: accentColor,
                color: '#ffffff',
                clipPath:
                  'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
              }}
            >
              View Screenshots
            </span>
          </div>
        </div>

        <div className='flex flex-1 flex-col p-4'>
          <div className='mb-2 flex items-center gap-2'>
            <div
              className='h-2 w-2 flex-shrink-0 rounded-full'
              style={{ backgroundColor: accentColor }}
            />
            <h3
              onClick={viewProject}
              className='graffiti-heading text-lg capitalize text-white'
            >
              {name}
            </h3>
          </div>

          <p
            className='mb-4 mt-1 flex-1 text-sm leading-relaxed text-gray-400'
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </p>

          <div className='mt-auto flex flex-wrap items-center gap-1.5'>
            {stack.slice(0, 4).map((technology, index) => (
              <span
                key={index + technology}
                className='inline-block text-[0.62rem] font-semibold uppercase tracking-wide'
                style={{
                  padding: '2px 8px',
                  backgroundColor: '#1e1e1e',
                  color: '#888888',
                  border: '1px solid #2a2a2a',
                  borderRadius: '2px',
                }}
              >
                {technology}
              </span>
            ))}
            {stack.length > 4 && (
              <span className='text-[0.62rem] font-semibold text-gray-600'>
                +{stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </BaseCard>
    </>
  );
};

export default ProjectCard;
