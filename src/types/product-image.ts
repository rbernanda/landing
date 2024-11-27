import { ApiResponse } from './api-response';
import { Identifier } from './identifier';

/**
 * Represents a product image resource
 */
export type ProductImage = {
  /** Array of unique identifiers associated with the product image */
  id: Identifier[];
  /** URL or path to the product image */
  image: string;
};

/**
 * API response wrapper for a ProductImage resource
 */
export type ProductImageResponse = ApiResponse<ProductImage[]>;
