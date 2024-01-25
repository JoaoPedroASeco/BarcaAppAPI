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

// src/services/storeStatus.service.ts
var storeStatus_service_exports = {};
__export(storeStatus_service_exports, {
  createStoreStatus: () => createStoreStatus,
  createStoreStatusMock: () => createStoreStatusMock
});
module.exports = __toCommonJS(storeStatus_service_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createStoreStatus,
  createStoreStatusMock
});
