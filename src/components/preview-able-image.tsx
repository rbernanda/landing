import Image, { ImageProps } from 'next/image';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Eye } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const PreviewableImage = (props: ImageProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer group size-full overflow-hidden rounded-xl">
          <Image {...props} alt={props.alt || ''} />
          <div className="text-white text-sm absolute size-full bg-black/50 z-40 flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <Eye className="size-4 mr-1" /> Preview
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="border-0 bg-transparent p-0 max-w-screen-2xl h-screen items-center overflow-hidden text-white">
        <VisuallyHidden.Root>
          <DialogTitle>Image Viewer</DialogTitle>
        </VisuallyHidden.Root>
        <VisuallyHidden.Root>
          <DialogDescription>Image Viewer</DialogDescription>
        </VisuallyHidden.Root>
        <div className="relative h-[calc(100vh-220px)] w-full overflow-clip">
          <Image
            src={props.src}
            fill
            alt={props.alt || ''}
            className="size-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
