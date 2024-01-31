import { object, string } from "zod";
import { baseSchema } from "../../index";

export const updateStore = {
  id: string(),
  name: string().nullable(),
  email: string().nullable(),
  password: string().nullable(),
  socialReazon: string().nullable(),
  phoneNumber: string().nullable(),
  cnpj: string().nullable(),
  role: string().nullable(),
  description: string().nullable(),
  rate: string().nullable(),
  status: string().nullable(),
  isActive: string().nullable(),
  avatar: string().nullable(),
  postCode: string().nullable(),
  country: string().nullable(),
  city: string().nullable(),
  neighborhood: string().nullable(),
  address: string().nullable(),
  addressNumber: string().nullable(),
  addressComplement: string().nullable(),
};

export const updateStoreRequestSchema = object({
  ...updateStore,
});

export const updateStoreResponseSchema = object({
  ...baseSchema,
  ...updateStore,
});
