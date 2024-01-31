import { number, object, string } from "zod";
import { baseSchema } from "../../index";

export const createStore = {
  // Core - Required
  name: string({
    required_error: "O campo 'Nome' e obrigtorio.",
    invalid_type_error: "Nome precisa ser um texto.",
  }),

  email: string({
    required_error: "O campo 'E-Mail' e obrigtorio.",
    invalid_type_error: "E-Mail precisa ser um texto.",
  }).email(),

  password: string({
    required_error: "O campo 'Senha' e obrigatorio'.",
    invalid_type_error: "Senha precisa ser um texto.",
  }),

  socialReazon: string({
    required_error: "O campo 'Razao social' e obrigatorio'.",
    invalid_type_error: "Razao social precisa ser um texto.",
  }),

  phoneNumber: string({
    required_error: "O campo 'Telefone' e obrigatorio'.",
    invalid_type_error: "Telefone precisa ser um texto.",
  }),

  cnpj: string({
    required_error: "O campo 'CPF' e obrigatorio'.",
    invalid_type_error: "CPF precisa ser um texto.",
  }),

  // Core - Nullable
  description: string({
    invalid_type_error: "Descricao da loja precisa ser um texto.",
  }).nullable(),

  // Address - Nullable
  postCode: string({
    invalid_type_error: "CEP precisa ser um texto.",
  }).nullable(),
  country: string({
    invalid_type_error: "Estado precisa ser um texto.",
  }).nullable(),
  city: string({
    invalid_type_error: "Cidade precisa ser um texto.",
  }).nullable(),
  neighborhood: string({
    invalid_type_error: "Bairro precisa ser um texto.",
  }).nullable(),
  address: string({
    invalid_type_error: "Endereco precisa ser um texto.",
  }).nullable(),
  addressNumber: number({
    invalid_type_error: "Numero do endereco precisa ser um texto.",
  }).nullable(),
  addressComplement: string({
    invalid_type_error: "Complemento do endereco precisa ser um texto.",
  }).nullable(),
};

export const createStoreRequestSchema = object({
  ...createStore,
});

export const createStoreResponseSchema = object({
  ...baseSchema,
  ...createStore,
});
