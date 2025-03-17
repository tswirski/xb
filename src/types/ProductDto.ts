import { z } from 'zod';

//   id: 'recdTT7H7XOCHodIW',
//   createdTime: '2024-12-04T13:25:49.000Z',
//   fields: {
//     name: 'trampki',
//     description: 'lorem ipsum',
//     price: 123,
//     created_at: '2024-12-04T13:25:49.000Z',
//     updated_at: '2024-12-04T13:27:57.000Z',
//   }

export const fieldsSchema = z.object({
  // from edit / update form
  name: z.string().min(3, 'Name is required'),
  description: z.string().min(3, 'Description is required'),
  price: z.number().positive(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const productSchema = z.object({
  id: z.string(),
  createdTime: z.string(),
  fields: fieldsSchema,
});

export const productsSchema = z.array(
  z.object({
    id: z.string(),
    createdTime: z.string(),
    fields: fieldsSchema,
  }),
);

export const airtableProductSchema = z.object({
  records: z.array(
    z.object({
      id: z.string(),
      createdTime: z.string(),
      fields: fieldsSchema,
    }),
  ),
});

export type ProductDto = z.infer<typeof productSchema>;

export type ProductFields = z.infer<typeof fieldsSchema>;

export const createProductSchema = fieldsSchema;
export const updateProductSchema = fieldsSchema;

// 1. option
// export type UpdateProductDto = ProductDto['fields'];
// export type CreateProductDto = UpdateProductDto;

// 2. option
export type UpdateProductDto = z.infer<typeof updateProductSchema>;
export type CreateProductDto = z.infer<typeof createProductSchema>;
