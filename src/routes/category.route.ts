// Core
import { FastifyInstance } from "fastify";

// Controllers
import {
  createCategoryMockHandler,
  getAllCategoryHandler,
} from "../controller/category.controller";

// Store Category Routes
export async function categoryRoutes(server: FastifyInstance) {
  server.get("/mock", createCategoryMockHandler);

  server.get("/", getAllCategoryHandler);

  // server.post("/", createCategoryHandler);
}
