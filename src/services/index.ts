import { httpClient } from '@/lib/http-client';
import { Product, RawProductResponse } from '@/types/product';
import { ProductImageResponse } from '@/types/product-image';
import { buildProductWithImage } from '@/lib/utils';

export const getProducts = async () => {
  return httpClient<RawProductResponse>('/api/product.json');
};

export const getProductImages = async () => {
  return httpClient<ProductImageResponse>('/api/image.json');
};

/**
 * Fetches products and their corresponding images, then combines them into complete Product objects
 */
export const getProductsWithImage = async (): Promise<Product[]> => {
  const productsPromise = getProducts();
  const imagesPromise = getProductImages();

  const promises = await Promise.all([productsPromise, imagesPromise]);
  const [{ data: rawProducts }, { data: productImages }] = promises;

  return buildProductWithImage(rawProducts, productImages);
};
