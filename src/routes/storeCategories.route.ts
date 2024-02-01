// Core
import { FastifyInstance } from "fastify";

// Controllers
import {
  createStoreCategoriesHandler,
  deleteStoreCategoriesHandler,
} from "../controller/storeCategories.controller";

// StoreCategories Routes
export async function storeCategoriesRoutes(server: FastifyInstance) {
  // Create
  server.post("/add", createStoreCategoriesHandler);

  // Delete StoreCategories
  server.post("/remove", deleteStoreCategoriesHandler);
}
