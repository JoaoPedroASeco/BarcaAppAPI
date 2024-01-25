"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/schemas/userRole.schema.ts
var userRole_schema_exports = {};
__export(userRole_schema_exports, {
  $ref: () => $ref2,
  UserRoleSchema: () => UserRoleSchema
});
module.exports = __toCommonJS(userRole_schema_exports);
var import_fastify_zod2 = require("fastify-zod");

// src/schemas/userRole/create.userRole.schema.ts
var import_zod3 = require("zod");

// src/schemas/index.ts
var import_zod2 = require("zod");

// src/schemas/partner.schema.ts
var import_fastify_zod = require("fastify-zod");

// src/schemas/partner/create.partner.schema.ts
var import_zod = require("zod");
var createPartnerRequest = {
  // Required - User Info
  name: (0, import_zod.string)({
    required_error: "O campo 'Nome' e obrigtorio.",
    invalid_type_error: "Nome precisa ser um texto."
  }),
  email: (0, import_zod.string)({
    required_error: "O campo 'E-Mail' e obrigtorio.",
    invalid_type_error: "E-Mail precisa ser um texto."
  }).email(),
  password: (0, import_zod.string)({
    required_error: "O campo 'Senha' e obrigatorio'.",
    invalid_type_error: "Senha precisa ser um texto."
  }),
  phoneNumber: (0, import_zod.string)({
    required_error: "O campo 'Telefone' e obrigatorio'.",
    invalid_type_error: "Telefone precisa ser um texto."
  }),
  cpf: (0, import_zod.string)({
    required_error: "O campo 'CPF' e obrigatorio'.",
    invalid_type_error: "CPF precisa ser um texto."
  }),
  // Nullable - Store Info
  storeName: (0, import_zod.string)({
    invalid_type_error: "Nome da loja precisa ser um texto."
  }).nullable(),
  storeCNPJ: (0, import_zod.string)({
    invalid_type_error: "CNPJ da loja precisa ser um texto."
  }),
  storeSocialReazon: (0, import_zod.string)({
    invalid_type_error: "Razao Social da loja precisa ser um texto."
  }).nullable(),
  storePhoneNumber: (0, import_zod.string)({
    invalid_type_error: "Telefone da loja precisa ser um texto."
  }).nullable(),
  storeCategoryId: (0, import_zod.string)({
    invalid_type_error: "Categoria da loja precisa ser um texto."
  }).nullable(),
  storeStatusId: (0, import_zod.string)({
    invalid_type_error: "Status da loja precisa ser um texto."
  }).nullable(),
  storeIsActive: (0, import_zod.boolean)({
    invalid_type_error: "Loja esta ativa precisa ser um booleano."
  }).nullable().default(false),
  storeRate: (0, import_zod.number)({
    invalid_type_error: "Avaliacao da loja precisa ser um numero."
  }).nullable().default(5),
  storeDescription: (0, import_zod.string)({
    invalid_type_error: "Descricao da loja precisa ser um texto."
  }).nullable(),
  // Nullable - User Info
  avatar: (0, import_zod.string)({
    invalid_type_error: "Avatar precisa ser um texto."
  }).nullable(),
  postCode: (0, import_zod.string)({
    invalid_type_error: "CEP precisa ser um texto."
  }).nullable(),
  country: (0, import_zod.string)({
    invalid_type_error: "Estado precisa ser um texto."
  }).nullable(),
  city: (0, import_zod.string)({
    invalid_type_error: "Cidade precisa ser um texto."
  }).nullable(),
  neighborhood: (0, import_zod.string)({
    invalid_type_error: "Bairro precisa ser um texto."
  }).nullable(),
  address: (0, import_zod.string)({
    invalid_type_error: "Endereco precisa ser um texto."
  }).nullable(),
  addressNumber: (0, import_zod.number)({
    invalid_type_error: "Numero do endereco precisa ser um texto."
  }).nullable(),
  addressComplement: (0, import_zod.string)({
    invalid_type_error: "Complemento do endereco precisa ser um texto."
  }).nullable(),
  // Relashionships
  userRolesId: (0, import_zod.string)({
    invalid_type_error: "Complemento do endereco precisa ser um texto."
  }).nullable()
};
var createPartnerRequestSchema = (0, import_zod.object)({
  ...createPartnerRequest
});
var createPartnerResponseSchema = (0, import_zod.object)({
  ...baseSchema,
  ...createPartnerRequest
});

// src/schemas/partner.schema.ts
var { schemas: partnerSchema, $ref } = (0, import_fastify_zod.buildJsonSchemas)(
  {
    createPartnerRequestSchema,
    createPartnerResponseSchema
  },
  {
    $id: "partners"
  }
);

// src/schemas/index.ts
var baseSchema = {
  id: (0, import_zod2.string)().uuid(),
  createdAt: (0, import_zod2.string)(),
  updatedAt: (0, import_zod2.string)()
};
var schemas = [...partnerSchema];

// src/schemas/userRole/create.userRole.schema.ts
var createUserRoleRequest = {
  name: (0, import_zod3.string)({
    required_error: "O campo 'Nome' e obrigtorio.",
    invalid_type_error: "Nome precisa ser um texto."
  })
};
var createUserRoleRequestSchema = (0, import_zod3.object)({
  ...createUserRoleRequest
});
var createUserRoleResponseSchema = (0, import_zod3.object)({
  ...baseSchema,
  ...createUserRoleRequest
});

// src/schemas/userRole.schema.ts
var { schemas: UserRoleSchema, $ref: $ref2 } = (0, import_fastify_zod2.buildJsonSchemas)(
  {
    createUserRoleRequestSchema,
    createUserRoleResponseSchema
  },
  {
    $id: "userRoles"
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  $ref,
  UserRoleSchema
});
