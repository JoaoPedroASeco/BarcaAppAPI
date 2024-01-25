// Core
import { FastifyInstance } from "fastify";

// Controllers
import {
  createUserRoleHandler,
  createUserRoleMockHandler,
} from "../controller/userRole.controller";

// Schemas
import { $ref } from "../schemas/userRole.schema";

// Store Status Routes
export async function userRoleRoutes(server: FastifyInstance) {
  server.get(
    "/mock",
    // {
    //   schema: {
    //     body: $ref("createUserRoleRequestSchema"),
    //     response: {
    //       201: $ref("createUserRoleResponseSchema"),
    //     },
    //   },
    // },
    createUserRoleMockHandler
  );

  server.post(
    "/",
    // {
    //   schema: {
    //     body: $ref("createUserRoleRequestSchema"),
    //     response: {
    //       201: $ref("createUserRoleResponseSchema"),
    //     },
    //   },
    // },
    createUserRoleHandler
  );
}
