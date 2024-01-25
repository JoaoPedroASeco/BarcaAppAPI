// Libs
import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

// Schemas
import {
  createUserRoleRequestSchema,
  createUserRoleResponseSchema,
} from "./userRole/create.userRole.schema";

// Types
export type CreateUserRoleRequestProps = z.infer<
  typeof createUserRoleRequestSchema
>;
export type CreateUserRoleResponseProps = z.infer<
  typeof createUserRoleResponseSchema
>;

export const { schemas: UserRoleSchema, $ref } = buildJsonSchemas(
  {
    createUserRoleRequestSchema,
    createUserRoleResponseSchema,
  },
  {
    $id: "userRoles",
  }
);
