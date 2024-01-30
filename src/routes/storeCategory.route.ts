// Core
import { FastifyInstance } from "fastify";

// Controllers
import {
  createStoreCategoryHandler,
  createStoreCategoryMockHandler,
  getStoreCategoryHandler,
} from "../controller/storeCategory.controller";

// Schemas
import { $ref } from "../schemas/storeCategory.schema";

// Store Category Routes
export async function storeCategoryRoutes(server: FastifyInstance) {
  server.get(
    "/mock",
    // {
    //   schema: {
    //     body: $ref("createStoreCategoryRequestSchema"),
    //     response: {
    //       201: $ref("createStoreCategoryResponseSchema"),
    //     },
    //   },
    // },
    createStoreCategoryMockHandler
  );

  server.get(
    "/",
    // {
    //   schema: {
    //     body: $ref("createStoreCategoryRequestSchema"),
    //     response: {
    //       201: $ref("createStoreCategoryResponseSchema"),
    //     },
    //   },
    // },
    getStoreCategoryHandler
  );

  server.post(
    "/",
    // {
    //   schema: {
    //     body: $ref("createStoreCategoryRequestSchema"),
    //     response: {
    //       201: $ref("createStoreCategoryResponseSchema"),
    //     },
    //   },
    // },
    createStoreCategoryHandler
  );
}
