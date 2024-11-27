import { ApiResponse } from './api-response';
import { Identifier } from './identifier';

export interface RawProduct {
  /** Unique identifier for the product */
  id: Identifier;
  /** Nullable name of the product */
  name: string | null;
}

export interface Product extends RawProduct {
  /** Name of the product */
  name: string;

  /** Image of the product */
  image: string;
}

/**
 * API response wrapper for a Product resource
 */
export type RawProductResponse = ApiResponse<RawProduct[]>;
