import Image, { ImageProps } from 'next/image';

export const Brand = (props: Omit<ImageProps, 'src' | 'alt'>) => {
  return (
    <Image src="/estore.webp" alt="brand" width={100} height={100} {...props} />
  );
};
