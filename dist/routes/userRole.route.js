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

// src/routes/userRole.route.ts
var userRole_route_exports = {};
__export(userRole_route_exports, {
  userRoleRoutes: () => userRoleRoutes
});
module.exports = __toCommonJS(userRole_route_exports);

// src/utils/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  userRoleRoutes
});
