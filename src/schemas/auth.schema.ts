// Libs
import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

// Schemas
import {
  authLoginRequestSchema,
  authLoginResponseSchema,
} from "./schemaTypes/auth/auth.login.schema";

export type AuthLoginRequestProps = z.infer<typeof authLoginRequestSchema>;

export const { schemas: authSchemas, $ref } = buildJsonSchemas(
  {
    authLoginResponseSchema,
    authLoginRequestSchema,
  },
  {
    $id: "auth",
  }
);
