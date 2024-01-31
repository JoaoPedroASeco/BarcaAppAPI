// Libs
import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

// Schemas
import {
  createCategoryRequestSchema,
  createCategoryResponseSchema,
} from "./schemaTypes/category/create.storeCategory.schema";

// Types
export type CreateCategoryRequestProps = z.infer<
  typeof createCategoryRequestSchema
>;
export type CreateCategoryResponseProps = z.infer<
  typeof createCategoryResponseSchema
>;

export const { schemas: storeCategorySchema, $ref } = buildJsonSchemas(
  {
    createCategoryRequestSchema,
    createCategoryResponseSchema,
  },
  {
    $id: "storeCategory",
  }
);
