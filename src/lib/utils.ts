import { NO_IMAGE_PLACEHOLDER_URL } from '@/constants/no-image-placeholder-url';
import { Identifier } from '@/types/identifier';
import { Product } from '@/types/product';
import { RawProduct } from '@/types/product';
import { ProductImage } from '@/types/product-image';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds an array of Product objects by combining raw product data with their corresponding images
 *
 * @param rawProducts - Array of raw product data containing basic product information
 * @param productImages - Array of product image data containing image URLs mapped to product IDs
 * @returns Array of complete Product objects with names and images
 */
export const buildProductWithImage = (
  rawProducts: RawProduct[],
  productImages: ProductImage[],
): Product[] => {
  const productImagesMap = new Map<Identifier, Product['image']>();

  productImages.forEach(({ id, image }) => {
    id.forEach((productId) => {
      productImagesMap.set(productId, image);
    });
  });

  return rawProducts.map((product) => ({
    ...product,
    name: product.name ?? 'N/A',
    image: productImagesMap.get(product.id) ?? NO_IMAGE_PLACEHOLDER_URL,
  }));
};
