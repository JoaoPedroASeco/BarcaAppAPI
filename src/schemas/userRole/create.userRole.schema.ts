import { object, string } from "zod";
import { baseSchema } from "../index";

export const createUserRoleRequest = {
  name: string({
    required_error: "O campo 'Nome' e obrigtorio.",
    invalid_type_error: "Nome precisa ser um texto.",
  }),
};

export const createUserRoleRequestSchema = object({
  ...createUserRoleRequest,
});

export const createUserRoleResponseSchema = object({
  ...baseSchema,
  ...createUserRoleRequest,
});
