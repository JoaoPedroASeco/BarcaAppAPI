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

// src/schemas/auth/auth.login.schema.ts
var auth_login_schema_exports = {};
__export(auth_login_schema_exports, {
  authLoginRequestSchema: () => authLoginRequestSchema,
  authLoginResponseSchema: () => authLoginResponseSchema
});
module.exports = __toCommonJS(auth_login_schema_exports);
var import_zod = require("zod");
var authLoginRequestSchema = (0, import_zod.object)({
  email: (0, import_zod.string)({
    required_error: "O campo 'E-Mail' e obrigtorio.",
    invalid_type_error: "E-Mail precisa ser um texto."
  }).email(),
  password: (0, import_zod.string)({
    required_error: "O campo 'Senha' e obrigatorio'.",
    invalid_type_error: "Senha precisa ser um texto."
  })
});
var authLoginResponseSchema = (0, import_zod.object)({
  accessToken: (0, import_zod.string)()
  // refreshToken: string(),
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  authLoginRequestSchema,
  authLoginResponseSchema
});
