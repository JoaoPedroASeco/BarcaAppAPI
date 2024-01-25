// Libs
import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

// Schemas
import {
  createStoreStatusRequestSchema,
  createStoreStatusResponseSchema,
} from "./storeStatus/create.storeStatus.schema";

// Types
export type CreateStoreStatusRequestProps = z.infer<
  typeof createStoreStatusRequestSchema
>;
export type CreateStoreStatusResponseProps = z.infer<
  typeof createStoreStatusResponseSchema
>;

export const { schemas: storeStatusSchema, $ref } = buildJsonSchemas(
  {
    createStoreStatusRequestSchema,
    createStoreStatusResponseSchema,
  },
  {
    $id: "storestatuses",
  }
);
