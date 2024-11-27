import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { Brand } from '@/components/ui/brand';
import { Product } from '@/types/product';
import Image from 'next/image';

interface HeroProps {
  featuredProducts: Product[];
}

export function Hero({ featuredProducts }: HeroProps) {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 sm:h-[500px] h-auto">
      <MaxWidthWrapper className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 h-full">
        <div className="flex flex-col gap-y-4 py-16 justify-start sm:justify-center">
          <Brand width={200} height={200} />

          <p className="font-thin text-lg sm:text-2xl text-gray-500">
            The best way to buy products you love
          </p>

          <div className="no-scrollbar flex gap-x-8 overflow-x-scroll mt-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="relative flex-none w-1/3 sm:w-1/4 h-28 bg-transparent"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full h-full hidden sm:block">
          <Image
            src="/smiley-woman.png"
            alt="hero image"
            fill
            className="w-fit h-full object-top object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
