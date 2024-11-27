import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { ProductList } from '@/components/product-list';
import { Product } from '@/types/product';

interface AvailableProductsProps {
  products: Product[];
}

export function AvailableProducts({ products }: AvailableProductsProps) {
  return (
    <MaxWidthWrapper className="sm:pt-16 pt-8 pb-8">
      <h1 className="sm:text-3xl text-lg">
        <strong>The Latest.</strong>{' '}
        <span className="text-gray-500 font-light">
          Take a look what new we have.
        </span>
      </h1>
      <ProductList className="mt-8 sm:mt-12" products={products} />
    </MaxWidthWrapper>
  );
}
