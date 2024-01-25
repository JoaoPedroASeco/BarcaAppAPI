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

// src/services/user.service.ts
var user_service_exports = {};
__export(user_service_exports, {
  createPartner: () => createPartner
});
module.exports = __toCommonJS(user_service_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPartner
});
