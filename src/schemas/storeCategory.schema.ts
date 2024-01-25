// Libs
import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

// Schemas
import {
  createStoreCategoryRequestSchema,
  createStoreCategoryResponseSchema,
} from "./storeCategory/create.storeCategory.schema";

// Types
export type CreateStoreCategoryRequestProps = z.infer<
  typeof createStoreCategoryRequestSchema
>;
export type CreateStoreCategoryResponseProps = z.infer<
  typeof createStoreCategoryResponseSchema
>;

export const { schemas: storeCategorySchema, $ref } = buildJsonSchemas(
  {
    createStoreCategoryRequestSchema,
    createStoreCategoryResponseSchema,
  },
  {
    $id: "storeCategory",
  }
);
