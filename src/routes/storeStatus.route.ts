// Core
import { FastifyInstance } from "fastify";

// Controllers
import {
  createStoreStatusHandler,
  createStoreStatusMockHandler,
} from "../controller/storeStatus.controller";

// Schemas
import { $ref } from "../schemas/storeStatus.schema";

// Store Status Routes
export async function storeStatusRoutes(server: FastifyInstance) {
  server.get(
    "/mock",
    // {
    //   schema: {
    //     body: $ref("createStoreStatusRequestSchema"),
    //     response: {
    //       201: $ref("createStoreStatusResponseSchema"),
    //     },
    //   },
    // },
    createStoreStatusMockHandler
  );

  server.post(
    "/",
    // {
    //   schema: {
    //     body: $ref("createStoreStatusRequestSchema"),
    //     response: {
    //       201: $ref("createStoreStatusResponseSchema"),
    //     },
    //   },
    // },
    createStoreStatusHandler
  );
}
