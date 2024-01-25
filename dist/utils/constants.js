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

// src/utils/constants.ts
var constants_exports = {};
__export(constants_exports, {
  API_HOST: () => API_HOST,
  API_PORT: () => API_PORT,
  API_SECRET: () => API_SECRET,
  AUTH_CRYPTO_STRING_TYPE: () => AUTH_CRYPTO_STRING_TYPE,
  AUTH_DIGEST: () => AUTH_DIGEST,
  AUTH_ITERATIONS: () => AUTH_ITERATIONS,
  AUTH_KEYLEN: () => AUTH_KEYLEN,
  AUTH_RANDOM_BYTES: () => AUTH_RANDOM_BYTES
});
module.exports = __toCommonJS(constants_exports);
var API_SECRET = process.env.API_SECRET ? process.env.API_SECRET : "secret";
var API_PORT = process.env.API_PORT ? process.env.API_PORT : 5e3;
var API_HOST = process.env.API_HOST ? process.env.API_HOST : "0.0.0.0";
var AUTH_ITERATIONS = process.env.AUTH_ITERATIONS ? Number(process.env.AUTH_ITERATIONS) : 0;
var AUTH_KEYLEN = process.env.AUTH_KEYLEN ? Number(process.env.AUTH_KEYLEN) : 0;
var AUTH_DIGEST = process.env.AUTH_DIGEST ? process.env.AUTH_DIGEST : "digest";
var AUTH_RANDOM_BYTES = process.env.AUTH_RANDOM_BYTES ? Number(process.env.AUTH_RANDOM_BYTES) : 0;
var AUTH_CRYPTO_STRING_TYPE = process.env.AUTH_CRYPTO_STRING_TYPE ? process.env.AUTH_CRYPTO_STRING_TYPE : "type";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  API_HOST,
  API_PORT,
  API_SECRET,
  AUTH_CRYPTO_STRING_TYPE,
  AUTH_DIGEST,
  AUTH_ITERATIONS,
  AUTH_KEYLEN,
  AUTH_RANDOM_BYTES
});
