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

// src/routes/storeStatus.route.ts
var storeStatus_route_exports = {};
__export(storeStatus_route_exports, {
  storeStatusRoutes: () => storeStatusRoutes
});
module.exports = __toCommonJS(storeStatus_route_exports);

// src/utils/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  storeStatusRoutes
});
