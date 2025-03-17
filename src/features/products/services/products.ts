import {
  airtableProductSchema,
  CreateProductDto,
  ProductFields,
  productSchema,
} from '@apptypes/ProductDto';
import { ZodError } from 'zod';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

// UI -> services -> UI (data, success)

class HttpError extends Error {}

type ApiListResponse<T> = {
  records: T[];
};

export const fetchProducts = async () => {
  try {
    const data: ApiListResponse<ProductType> = await get('/products');

    airtableProductSchema.parse(data);

    const result = data.records;
    return result;
  } catch (error) {
    // Sentry.capture(exception)
    // HttpError
    // ZodError
    // Error
    if (error instanceof ZodError) {
      console.log('Zod error', { error });
    } else {
      console.log('fetchProducts', { error });
    }
  }
};

export const createProduct = async (data: CreateProductDto) => {
  console.log('createProduct', data);
  try {
    return await post('/products', data);
  } catch (error) {
    // Sentry.capture(exception)
    // HttpError
    // ZodError
    // Error
    if (error instanceof ZodError) {
      //
    }
  }
};

export const fetchCategories = async () => {
  try {
    const data: ApiListResponse<Category> = await get('/categories');

    return data.records;
  } catch {
    // HttpError
    // ZodError
    // Error
  }
};

const get = async (path: string) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error(response.statusText);
    // HttpError
    // ZodError
    // Mieso
  }
  return await response.json();
};

const post = async (path: string, data: ProductFields) => {
  const airtableRecord = { records: [{ fields: { ...data } }] };
  console.log({ airtableRecord });

  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(airtableRecord),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
    // HttpError
    // ZodError
    // Mieso
  }
  return await response.json();
};

const exampleProduct = {
  id: 'recdTT7H7XOCHodIW',
  createdTime: '2024-12-04T13:25:49.000Z',
  fields: {
    name: 'trampki',
    description: 'lorem ipsum',
    price: 123,
    created_at: '2024-12-04T13:25:49.000Z',
    updated_at: '2024-12-04T13:27:57.000Z',
  },
};
export type ProductType = typeof exampleProduct;

export type Category = {
  id: string;
  fields: {
    name: string;
  };
};
