"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/index.ts
var routes_exports = {};
__export(routes_exports, {
  routes: () => routes
});
module.exports = __toCommonJS(routes_exports);

// src/utils/hash.ts
var import_crypto = __toESM(require("crypto"));

// src/utils/constants.ts
var API_SECRET = process.env.API_SECRET ? process.env.API_SECRET : "secret";
var API_PORT = process.env.API_PORT ? process.env.API_PORT : 5e3;
var API_HOST = process.env.API_HOST ? process.env.API_HOST : "0.0.0.0";
var AUTH_ITERATIONS = process.env.AUTH_ITERATIONS ? Number(process.env.AUTH_ITERATIONS) : 0;
var AUTH_KEYLEN = process.env.AUTH_KEYLEN ? Number(process.env.AUTH_KEYLEN) : 0;
var AUTH_DIGEST = process.env.AUTH_DIGEST ? process.env.AUTH_DIGEST : "digest";
var AUTH_RANDOM_BYTES = process.env.AUTH_RANDOM_BYTES ? Number(process.env.AUTH_RANDOM_BYTES) : 0;
var AUTH_CRYPTO_STRING_TYPE = process.env.AUTH_CRYPTO_STRING_TYPE ? process.env.AUTH_CRYPTO_STRING_TYPE : "type";

// src/utils/hash.ts
function hashPassword(password) {
  const salt = import_crypto.default.randomBytes(AUTH_RANDOM_BYTES).toString(AUTH_CRYPTO_STRING_TYPE);
  const hash = import_crypto.default.pbkdf2Sync(password, salt, AUTH_ITERATIONS, AUTH_KEYLEN, AUTH_DIGEST).toString(AUTH_CRYPTO_STRING_TYPE);
  return { hash, salt };
}

// src/utils/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/services/user.service.ts
async function createPartner(input, reply) {
  try {
    const { password, userRolesId, ...rest } = input;
    let defaultRoleId;
    const { hash, salt } = hashPassword(password);
    if (!userRolesId) {
      defaultRoleId = "clrsh76s40001fd595spuxeba";
    } else {
      const customerRole = await prisma.userRoles.findUnique({
        where: { id: userRolesId }
      });
      if (customerRole?.id.length) {
        defaultRoleId = customerRole?.id ? customerRole.id : "";
      } else {
        defaultRoleId = "clrsh76s40001fd595spuxeba";
      }
    }
    return await prisma.user.create({
      data: {
        password: hash,
        salt,
        userRolesId: defaultRoleId,
        ...rest
      }
    });
  } catch (error) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

// src/controller/partner.controller.ts
async function createPartnerHandler(request, reply) {
  const body = request.body;
  try {
    const user = await createPartner(body, reply);
    return reply.code(201).send(user);
  } catch (error) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

// src/schemas/partner.schema.ts
var import_fastify_zod = require("fastify-zod");

// src/schemas/partner/create.partner.schema.ts
var import_zod2 = require("zod");

// src/schemas/index.ts
var import_zod = require("zod");
var baseSchema = {
  id: (0, import_zod.string)().uuid(),
  createdAt: (0, import_zod.string)(),
  updatedAt: (0, import_zod.string)()
};
var schemas = [...partnerSchema];

// src/schemas/partner/create.partner.schema.ts
var createPartnerRequest = {
  // Required - User Info
  name: (0, import_zod2.string)({
    required_error: "O campo 'Nome' e obrigtorio.",
    invalid_type_error: "Nome precisa ser um texto."
  }),
  email: (0, import_zod2.string)({
    required_error: "O campo 'E-Mail' e obrigtorio.",
    invalid_type_error: "E-Mail precisa ser um texto."
  }).email(),
  password: (0, import_zod2.string)({
    required_error: "O campo 'Senha' e obrigatorio'.",
    invalid_type_error: "Senha precisa ser um texto."
  }),
  phoneNumber: (0, import_zod2.string)({
    required_error: "O campo 'Telefone' e obrigatorio'.",
    invalid_type_error: "Telefone precisa ser um texto."
  }),
  cpf: (0, import_zod2.string)({
    required_error: "O campo 'CPF' e obrigatorio'.",
    invalid_type_error: "CPF precisa ser um texto."
  }),
  // Nullable - Store Info
  storeName: (0, import_zod2.string)({
    invalid_type_error: "Nome da loja precisa ser um texto."
  }).nullable(),
  storeCNPJ: (0, import_zod2.string)({
    invalid_type_error: "CNPJ da loja precisa ser um texto."
  }),
  storeSocialReazon: (0, import_zod2.string)({
    invalid_type_error: "Razao Social da loja precisa ser um texto."
  }).nullable(),
  storePhoneNumber: (0, import_zod2.string)({
    invalid_type_error: "Telefone da loja precisa ser um texto."
  }).nullable(),
  storeCategoryId: (0, import_zod2.string)({
    invalid_type_error: "Categoria da loja precisa ser um texto."
  }).nullable(),
  storeStatusId: (0, import_zod2.string)({
    invalid_type_error: "Status da loja precisa ser um texto."
  }).nullable(),
  storeIsActive: (0, import_zod2.boolean)({
    invalid_type_error: "Loja esta ativa precisa ser um booleano."
  }).nullable().default(false),
  storeRate: (0, import_zod2.number)({
    invalid_type_error: "Avaliacao da loja precisa ser um numero."
  }).nullable().default(5),
  storeDescription: (0, import_zod2.string)({
    invalid_type_error: "Descricao da loja precisa ser um texto."
  }).nullable(),
  // Nullable - User Info
  avatar: (0, import_zod2.string)({
    invalid_type_error: "Avatar precisa ser um texto."
  }).nullable(),
  postCode: (0, import_zod2.string)({
    invalid_type_error: "CEP precisa ser um texto."
  }).nullable(),
  country: (0, import_zod2.string)({
    invalid_type_error: "Estado precisa ser um texto."
  }).nullable(),
  city: (0, import_zod2.string)({
    invalid_type_error: "Cidade precisa ser um texto."
  }).nullable(),
  neighborhood: (0, import_zod2.string)({
    invalid_type_error: "Bairro precisa ser um texto."
  }).nullable(),
  address: (0, import_zod2.string)({
    invalid_type_error: "Endereco precisa ser um texto."
  }).nullable(),
  addressNumber: (0, import_zod2.number)({
    invalid_type_error: "Numero do endereco precisa ser um texto."
  }).nullable(),
  addressComplement: (0, import_zod2.string)({
    invalid_type_error: "Complemento do endereco precisa ser um texto."
  }).nullable(),
  // Relashionships
  userRolesId: (0, import_zod2.string)({
    invalid_type_error: "Complemento do endereco precisa ser um texto."
  }).nullable()
};
var createPartnerRequestSchema = (0, import_zod2.object)({
  ...createPartnerRequest
});
var createPartnerResponseSchema = (0, import_zod2.object)({
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

// src/routes/partner.route.ts
async function partnerRoutes(server) {
  server.post(
    "/",
    {
      schema: {
        body: $ref("createPartnerRequestSchema"),
        response: {
          201: $ref("createPartnerResponseSchema")
        }
      }
    },
    createPartnerHandler
  );
}

// src/services/storeCategory.service.ts
async function createStoreCategoryMock(input, reply) {
  try {
    return await prisma.storeCategory.createMany({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
async function createStoreCategory(input, reply) {
  try {
    return await prisma.storeCategory.create({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

// src/controller/storeCategory.controller.ts
async function createStoreCategoryMockHandler(request, reply) {
  const body = [
    { name: "acessorios para carro" },
    { name: "ar condicionado automotivo" },
    { name: "auto eletrica" },
    { name: "funilaria" },
    { name: "guincho" },
    { name: "insulfilm" },
    { name: "lava jato" },
    { name: "lava rapido" },
    { name: "posto de combustivel" },
    { name: "troca de oleo" }
  ];
  try {
    const user = await createStoreCategoryMock(body, reply);
    return reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
async function createStoreCategoryHandler(request, reply) {
  const body = request.body;
  try {
    const user = await createStoreCategory(body, reply);
    return reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

// src/routes/storeCategory.route.ts
async function storeCategoryRoutes(server) {
  server.get(
    "/mock",
    // {
    //   schema: {
    //     body: $ref("createStoreCategoryRequestSchema"),
    //     response: {
    //       201: $ref("createStoreCategoryResponseSchema"),
    //     },
    //   },
    // },
    createStoreCategoryMockHandler
  );
  server.post(
    "/",
    // {
    //   schema: {
    //     body: $ref("createStoreCategoryRequestSchema"),
    //     response: {
    //       201: $ref("createStoreCategoryResponseSchema"),
    //     },
    //   },
    // },
    createStoreCategoryHandler
  );
}

// src/services/storeStatus.service.ts
async function createStoreStatusMock(input, reply) {
  try {
    return await prisma.storeStatus.createMany({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
async function createStoreStatus(input, reply) {
  try {
    return await prisma.storeStatus.create({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

// src/controller/storeStatus.controller.ts
async function createStoreStatusMockHandler(request, reply) {
  const body = [{ name: "Approved" }, { name: "Denied" }, { name: "Pending" }];
  try {
    const user = await createStoreStatusMock(body, reply);
    return reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
async function createStoreStatusHandler(request, reply) {
  const body = request.body;
  try {
    const user = await createStoreStatus(body, reply);
    return reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

// src/routes/storeStatus.route.ts
async function storeStatusRoutes(server) {
  server.get(
    "/mock",
    // {
    //   schema: {
    //     body: $ref("createStoreStatusRequestSchema"),
    //     response: {
    //       201: $ref("createStoreStatusResponseSchema"),
    //     },
    //   },
    // },
    createStoreStatusMockHandler
  );
  server.post(
    "/",
    // {
    //   schema: {
    //     body: $ref("createStoreStatusRequestSchema"),
    //     response: {
    //       201: $ref("createStoreStatusResponseSchema"),
    //     },
    //   },
    // },
    createStoreStatusHandler
  );
}

// src/services/userRole.service.ts
async function createUserRoleMock(input, reply) {
  try {
    return await prisma.userRoles.createMany({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
async function createUserRole(input, reply) {
  try {
    return await prisma.userRoles.create({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

// src/controller/userRole.controller.ts
async function createUserRoleMockHandler(request, reply) {
  const body = [{ name: "Admin" }, { name: "Customer" }, { name: "Partner" }];
  try {
    const user = await createUserRoleMock(body, reply);
    return reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
async function createUserRoleHandler(request, reply) {
  const body = request.body;
  try {
    const user = await createUserRole(body, reply);
    return reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

// src/routes/userRole.route.ts
async function userRoleRoutes(server) {
  server.get(
    "/mock",
    // {
    //   schema: {
    //     body: $ref("createUserRoleRequestSchema"),
    //     response: {
    //       201: $ref("createUserRoleResponseSchema"),
    //     },
    //   },
    // },
    createUserRoleMockHandler
  );
  server.post(
    "/",
    // {
    //   schema: {
    //     body: $ref("createUserRoleRequestSchema"),
    //     response: {
    //       201: $ref("createUserRoleResponseSchema"),
    //     },
    //   },
    // },
    createUserRoleHandler
  );
}

// src/routes/index.ts
var routes = [
  {
    route: partnerRoutes,
    prefix: "/partners"
  },
  {
    route: storeCategoryRoutes,
    prefix: "/store-categories"
  },
  {
    route: storeStatusRoutes,
    prefix: "/store-statuses"
  },
  {
    route: userRoleRoutes,
    prefix: "/user-roles"
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  routes
});
