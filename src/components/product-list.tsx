import { Product } from '@/types/product';
import { ProductCard } from './product-card';
import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

interface ProductListProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  products: Product[];
}

export const ProductList = ({
  products,
  className,
  ...rest
}: ProductListProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-8',
        className,
      )}
      {...rest}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
