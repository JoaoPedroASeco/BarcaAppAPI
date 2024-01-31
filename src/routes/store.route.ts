// Core
import { FastifyInstance } from "fastify";

// Controllers
import {
  createStoreHandler,
  getStoreAndCategoriesHandler,
  getStoreAndCategoriesWithStoreIdHandler,
  deleteStoreHandler,
  // updateStoreHandler,
} from "../controller/store.controller";

// Store Routes
export async function storeRoutes(server: FastifyInstance) {
  // Create
  server.post("/", createStoreHandler);

  // Get Store And Categories
  server.get("/categories", getStoreAndCategoriesHandler);

  // Get Store And Categories With StoreId
  server.get("/categories/:storeId", getStoreAndCategoriesWithStoreIdHandler);

  // // Update Store
  // server.patch("/", updateStoreHandler);

  // Delete Store
  server.delete("/:id", deleteStoreHandler);
}
