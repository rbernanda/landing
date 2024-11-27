import type { ImageProps } from 'next/image';
import NextImage from 'next/image';
import { forwardRef } from 'react';

import { DEFAULT_BLUR_DATA_URL } from '@/constants/default-blur-data-url';

const Image = forwardRef<HTMLImageElement | null, ImageProps>(
  ({ blurDataURL, ...rest }, forwardedRef) => (
    <NextImage
      {...rest}
      blurDataURL={blurDataURL ?? DEFAULT_BLUR_DATA_URL}
      placeholder="blur"
      ref={forwardedRef}
    />
  ),
);

export * from 'next/image';
// override next/image
export { Image };

Image.displayName = 'Image';
