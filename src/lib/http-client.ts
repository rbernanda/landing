import { BASE_API_URL } from '@/constants/variables';

/**
 * Makes an HTTP request and returns the JSON response
 * @template T The expected type of the response data
 * @param {string} urlOrPath - The URL or path to make the request to. If it starts with '/', it will be appended to BASE_API_URL
 * @param {RequestInit} [init] - Optional fetch init options
 * @returns {Promise<T>} Promise that resolves with the typed response data
 * @throws {Error} If the response status is not ok (2xx)
 */
export const httpClient = async <T>(
  urlOrPath: string,
  init?: RequestInit,
): Promise<T> => {
  const url = urlOrPath.startsWith('/')
    ? `${BASE_API_URL}${urlOrPath}`
    : urlOrPath;

  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...init?.headers,
  });

  const requestInit: RequestInit = {
    ...init,
    headers,
  };

  const response = await fetch(url, requestInit);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<T>;
};
