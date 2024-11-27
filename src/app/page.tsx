import { getProductsWithImage } from '@/services';
import { AvailableProducts } from './available-products';
import { Hero } from './hero';

export default async function Home() {
  const products = await getProductsWithImage();

  return (
    <>
      <Hero featuredProducts={products} />
      <AvailableProducts products={products} />
    </>
  );
}
