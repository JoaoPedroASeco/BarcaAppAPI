import { object, string } from "zod";
import { baseSchema } from "../index";

export const createStoreCategoryRequest = {
  name: string({
    required_error: "O campo 'Nome' e obrigtorio.",
    invalid_type_error: "Nome precisa ser um texto.",
  }),
};

export const createStoreCategoryRequestSchema = object({
  ...createStoreCategoryRequest,
});

export const createStoreCategoryResponseSchema = object({
  ...baseSchema,
  ...createStoreCategoryRequest,
});
