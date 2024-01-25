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

// src/services/storeCategory.service.ts
var storeCategory_service_exports = {};
__export(storeCategory_service_exports, {
  createStoreCategory: () => createStoreCategory,
  createStoreCategoryMock: () => createStoreCategoryMock
});
module.exports = __toCommonJS(storeCategory_service_exports);

// src/utils/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createStoreCategory,
  createStoreCategoryMock
});
