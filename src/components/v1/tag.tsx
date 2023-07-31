import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';

interface ComponentProps extends ComponentPropsWithoutRef<'div'> {
  text: string;
}

const Tag = ({ text, className, ...props }: ComponentProps) => {
  return (
    <div
      className={clsx(
        'rounded bg-white px-2 text-sm text-black',
        'font-bold',
        className
      )}
      {...props}
    >
      #{text}
    </div>
  );
};

export default Tag;
