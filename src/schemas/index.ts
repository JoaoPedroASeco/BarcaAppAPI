// Core
import { string } from "zod";

// Schemas
import { storeSchema } from "./store.schema";

// Base Schema
export const baseSchema = {
  id: string().uuid(),
  createdAt: string(),
  updatedAt: string(),
};

export const schemas = [...storeSchema];
