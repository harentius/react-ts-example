import ApiClient from './ApiClient';
import type { Product, User } from './types';

const apiClient = new ApiClient('https://fakestoreapi.com');

export {
  ApiClient,
  apiClient,
  Product,
  User,
}
