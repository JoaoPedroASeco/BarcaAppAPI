import { object, string } from "zod";
import { baseSchema } from "../index";

export const createStoreStatusRequest = {
  name: string({
    required_error: "O campo 'Nome' e obrigtorio.",
    invalid_type_error: "Nome precisa ser um texto.",
  }),
};

export const createStoreStatusRequestSchema = object({
  ...createStoreStatusRequest,
});

export const createStoreStatusResponseSchema = object({
  ...baseSchema,
  ...createStoreStatusRequest,
});
