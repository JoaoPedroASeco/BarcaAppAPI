// Libs
import crypto from "crypto";

// Contants
import {
  AUTH_CRYPTO_STRING_TYPE,
  AUTH_DIGEST,
  AUTH_ITERATIONS,
  AUTH_KEYLEN,
  AUTH_RANDOM_BYTES,
} from "./constants";

// Hash Password
export function hashPassword(password: string) {
  const salt = crypto
    .randomBytes(AUTH_RANDOM_BYTES)
    .toString(AUTH_CRYPTO_STRING_TYPE as any);

  const hash = crypto
    .pbkdf2Sync(password, salt, AUTH_ITERATIONS, AUTH_KEYLEN, AUTH_DIGEST)
    .toString(AUTH_CRYPTO_STRING_TYPE as any);

  return { hash, salt };
}

// Verify Password
export function verifyPassword(password: string, salt: string, hash: string) {
  const userHash = crypto
    .pbkdf2Sync(password, salt, AUTH_ITERATIONS, AUTH_KEYLEN, AUTH_DIGEST)
    .toString(AUTH_CRYPTO_STRING_TYPE as any);

  return hash === userHash;
}
