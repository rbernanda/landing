import { getProductsWithImage } from '@/services';
import { Hero } from './hero';

export default async function Home() {
  const products = await getProductsWithImage();

  return (
    <>
      <Hero featuredProducts={products} />
    </>
  );
}
