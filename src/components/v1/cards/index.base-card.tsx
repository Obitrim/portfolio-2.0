import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  elevation?: 0 | 1 | 2 | 3 | 4;
  rounded?: boolean;
}

const BaseCard = ({
  elevation = 0,
  children,
  rounded = false,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={clsx(
        'p-5',
        { 'shadow-md': elevation === 1, rounded: rounded },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BaseCard;
