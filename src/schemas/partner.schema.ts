// Libs
import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

// Schemas
import {
  createPartnerRequestSchema,
  createPartnerResponseSchema,
} from "./partner/create.partner.schema";

// Types
export type CreatePartnerRequestProps = z.infer<
  typeof createPartnerRequestSchema
>;
export type CreatePartnerResponseProps = z.infer<
  typeof createPartnerResponseSchema
>;

export const { schemas: partnerSchema, $ref } = buildJsonSchemas(
  {
    createPartnerRequestSchema,
    createPartnerResponseSchema,
  },
  {
    $id: "partners",
  }
);
