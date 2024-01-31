import { object, string } from "zod";
import { baseSchema } from "../../index";

export const createCategoryRequest = {
  name: string({
    required_error: "O campo 'Nome' e obrigtorio.",
    invalid_type_error: "Nome precisa ser um texto.",
  }),
};

export const createCategoryRequestSchema = object({
  ...createCategoryRequest,
});

export const createCategoryResponseSchema = object({
  ...baseSchema,
  ...createCategoryRequest,
});
