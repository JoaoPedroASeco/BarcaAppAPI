// Core
import { string } from "zod";

// Schemas
import { partnerSchema } from "./partner.schema";

// Base Schema
export const baseSchema = {
  id: string().uuid(),
  createdAt: string(),
  updatedAt: string(),
};

export const schemas = [...partnerSchema];
