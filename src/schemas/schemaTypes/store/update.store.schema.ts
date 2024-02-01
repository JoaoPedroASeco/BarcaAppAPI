import { boolean, date, number, object, string, z } from "zod";
import { baseSchema } from "../../index";
import { STATUS } from "../../enums/status.enum";
import { ROLES } from "../../enums/roles.enum";

export type UpdateStoreProps = {
  id: string;

  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  socialReazon: string | undefined;
  phoneNumber: string | undefined;
  cnpj: string | undefined;

  role: z.infer<typeof ROLES> | undefined;
  description: string | undefined;
  rate: number | undefined;
  status: z.infer<typeof STATUS> | undefined;
  isActive: boolean | undefined;
  avatar: string | undefined;

  postCode: string | undefined;
  country: string | undefined;
  city: string | undefined;
  neighborhood: string | undefined;
  address: string | undefined;
  addressNumber: string | undefined;
  addressComplement: string | undefined;

  updatedAt: string | undefined;
};

export const updateStoreSchema = {
  id: string(),
  name: string().nullable(),
  email: string().nullable(),
  password: string().nullable(),
  socialReazon: string().nullable(),
  phoneNumber: string().nullable(),
  cnpj: string().nullable(),

  role: ROLES.nullable(),
  description: string().nullable(),
  rate: number().nullable(),
  status: STATUS.nullable(),
  isActive: boolean().nullable(),
  avatar: string().nullable(),

  postCode: string().nullable(),
  country: string().nullable(),
  city: string().nullable(),
  neighborhood: string().nullable(),
  address: string().nullable(),
  addressNumber: number().nullable(),
  addressComplement: string().nullable(),

  updatedAt: date().nullable(),
};

export const updateStoreRequestSchema = object({
  ...updateStoreSchema,
});

export const updateStoreResponseSchema = object({
  ...baseSchema,
  ...updateStoreSchema,
});
