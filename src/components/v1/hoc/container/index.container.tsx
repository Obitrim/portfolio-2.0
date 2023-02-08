import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';

interface IComponentProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

const AppContainer = ({ className, children, ...props }: IComponentProps) => {
  return (
    <div className={clsx('layout', className)} {...props}>
      {children}
    </div>
  );
};

export default AppContainer;
