import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import React, {
  ComponentPropsWithoutRef,
  Fragment,
  useRef,
  useState,
} from 'react';

import BaseCard from './index.base-card';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  comment?: string;
  name: string;
  description: string;
  stack: string[];
  isHyperlink?: boolean;
  url: string;
  image: string | StaticImageData;
}

const ProjectCard = ({
  className,
  name,
  description,
  stack,
  url,
  isHyperlink = true,
  image,
  ...props
}: CardProps) => {
  const router = useRouter();
  const anchorRef = useRef<HTMLAnchorElement>(null);

  const [isOpen, setIsOpen] = useState(false);

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
            <div className='fixed inset-0 bg-black/25 backdrop-blur-sm' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-screen max-w-7xl  transform  text-left align-middle shadow-xl transition-all'>
                  <Image
                    src={image}
                    className='h-auto w-full'
                    alt={name}
                    height={637}
                    width={1601}
                  />
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
        <Image
          src={image}
          className='w-full'
          alt={name}
          height={120}
          width={240}
          onClick={() => setIsOpen(true)}
        />
        <div className='p-4'>
          <h3
            onClick={viewProject}
            className='font-grotest text-lg text-gray-200 hover:text-[var(--primary)]'
          >
            {name}
          </h3>
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
