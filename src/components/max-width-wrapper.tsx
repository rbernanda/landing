import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

export const MaxWidthWrapper = ({
  children,
  ...props
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      {...props}
      className={cn(
        'mx-auto w-full max-w-screen-2xl px-4 md:px-20',
        props.className,
      )}
    >
      {children}
    </div>
  );
};
