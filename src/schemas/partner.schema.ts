// Libs
import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

// Schemas
import {
  createPartnerRequestSchema,
  createPartnerResponseSchema,
  updatePartnerRequestSchema,
  updatePartnerResponseSchema,
} from "./partner/create.partner.schema";

// Types - CREATE
export type CreatePartnerRequestProps = z.infer<
  typeof createPartnerRequestSchema
>;
export type CreatePartnerResponseProps = z.infer<
  typeof createPartnerResponseSchema
>;

// Types - GET
export type GetPartnerRequestProps = {};
export type GetPartnerResponseProps = z.infer<
  typeof updatePartnerResponseSchema
>;

// Types - UPDATE
export type UpdatePartnerRequestProps = z.infer<
  typeof updatePartnerRequestSchema
>;
export type UpdatePartnerResponseProps = z.infer<
  typeof updatePartnerResponseSchema
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
