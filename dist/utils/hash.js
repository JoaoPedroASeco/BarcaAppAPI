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

// src/utils/hash.ts
var hash_exports = {};
__export(hash_exports, {
  hashPassword: () => hashPassword,
  verifyPassword: () => verifyPassword
});
module.exports = __toCommonJS(hash_exports);
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
function verifyPassword(password, salt, hash) {
  const userHash = import_crypto.default.pbkdf2Sync(password, salt, AUTH_ITERATIONS, AUTH_KEYLEN, AUTH_DIGEST).toString(AUTH_CRYPTO_STRING_TYPE);
  return hash === userHash;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  hashPassword,
  verifyPassword
});
