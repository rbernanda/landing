import { Image, type ImageProps } from '@/components/ui/image';

export const Brand = (props: Omit<ImageProps, 'src' | 'alt'>) => {
  return (
    <Image src="/estore.webp" alt="brand" width={200} height={43} {...props} />
  );
};
