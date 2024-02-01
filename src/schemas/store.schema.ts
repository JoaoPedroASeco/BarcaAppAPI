// Libs
import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

// Schemas
import {
  createStoreRequestSchema,
  createStoreResponseSchema,
} from "./schemaTypes/store/create.store.schema";
import {
  UpdateStoreProps,
  updateStoreResponseSchema,
} from "./schemaTypes/store/update.store.schema";

// Types - CREATE
export type CreateStoreRequestProps = z.infer<typeof createStoreRequestSchema>;
export type CreateStoreResponseProps = z.infer<
  typeof createStoreResponseSchema
>;

// Types - GET
export type GetStoreRequestProps = {};
export type GetStoreResponseProps = z.infer<typeof updateStoreResponseSchema>;

// Types - UPDATE
export type UpdateStoreRequestProps = UpdateStoreProps;
export type UpdateStoreResponseProps = z.infer<
  typeof updateStoreResponseSchema
>;

export const { schemas: storeSchema, $ref } = buildJsonSchemas(
  {
    createStoreRequestSchema,
    createStoreResponseSchema,
  },
  {
    $id: "stores",
  }
);
