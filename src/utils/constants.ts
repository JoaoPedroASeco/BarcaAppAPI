// App
export const API_SECRET = process.env.API_SECRET
  ? process.env.API_SECRET
  : "secret";
export const API_PORT = process.env.API_PORT ? process.env.API_PORT : 5000;
export const API_HOST = process.env.API_HOST ? process.env.API_HOST : "0.0.0.0";

// Auth
export const AUTH_ITERATIONS = process.env.AUTH_ITERATIONS
  ? Number(process.env.AUTH_ITERATIONS)
  : 0;
export const AUTH_KEYLEN = process.env.AUTH_KEYLEN
  ? Number(process.env.AUTH_KEYLEN)
  : 0;
export const AUTH_DIGEST = process.env.AUTH_DIGEST
  ? process.env.AUTH_DIGEST
  : "digest";
export const AUTH_RANDOM_BYTES = process.env.AUTH_RANDOM_BYTES
  ? Number(process.env.AUTH_RANDOM_BYTES)
  : 0;
export const AUTH_CRYPTO_STRING_TYPE = process.env.AUTH_CRYPTO_STRING_TYPE
  ? process.env.AUTH_CRYPTO_STRING_TYPE
  : "type";
