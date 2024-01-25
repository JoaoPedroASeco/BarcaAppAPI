import { object, string } from "zod";

export const authLoginRequestSchema = object({
  email: string({
    required_error: "O campo 'E-Mail' e obrigtorio.",
    invalid_type_error: "E-Mail precisa ser um texto.",
  }).email(),
  password: string({
    required_error: "O campo 'Senha' e obrigatorio'.",
    invalid_type_error: "Senha precisa ser um texto.",
  }),
});

export const authLoginResponseSchema = object({
  accessToken: string(),
  // refreshToken: string(),
});
