import { boolean, number, object, string } from "zod";
import { baseSchema } from "../index";

export const createPartnerRequest = {
  // Required - User Info
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
  phoneNumber: string({
    required_error: "O campo 'Telefone' e obrigatorio'.",
    invalid_type_error: "Telefone precisa ser um texto.",
  }),
  cpf: string({
    required_error: "O campo 'CPF' e obrigatorio'.",
    invalid_type_error: "CPF precisa ser um texto.",
  }),

  // Nullable - Store Info
  storeName: string({
    invalid_type_error: "Nome da loja precisa ser um texto.",
  }).nullable(),
  storeCNPJ: string({
    invalid_type_error: "CNPJ da loja precisa ser um texto.",
  }),
  storeSocialReazon: string({
    invalid_type_error: "Razao Social da loja precisa ser um texto.",
  }).nullable(),
  storePhoneNumber: string({
    invalid_type_error: "Telefone da loja precisa ser um texto.",
  }).nullable(),

  storeCategoryId: string({
    invalid_type_error: "Categoria da loja precisa ser um texto.",
  }).nullable(),

  storeStatusId: string({
    invalid_type_error: "Status da loja precisa ser um texto.",
  }).nullable(),

  storeIsActive: boolean({
    invalid_type_error: "Loja esta ativa precisa ser um booleano.",
  })
    .nullable()
    .default(false),
  storeRate: number({
    invalid_type_error: "Avaliacao da loja precisa ser um numero.",
  })
    .nullable()
    .default(5),
  storeDescription: string({
    invalid_type_error: "Descricao da loja precisa ser um texto.",
  }).nullable(),

  // Nullable - User Info
  avatar: string({
    invalid_type_error: "Avatar precisa ser um texto.",
  }).nullable(),
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

  // Relashionships
  userRolesId: string({
    invalid_type_error: "Complemento do endereco precisa ser um texto.",
  }).nullable(),
};

export const createPartnerRequestSchema = object({
  ...createPartnerRequest,
});

export const createPartnerResponseSchema = object({
  ...baseSchema,
  ...createPartnerRequest,
});
