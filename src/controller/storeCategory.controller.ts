// Services
import {
  createStoreCategory,
  createStoreCategoryMock,
} from "../services/storeCategory.service";

// Schemas
import { CreateStoreCategoryRequestProps } from "../schemas/storeCategory.schema";

// Types
import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";

export async function createStoreCategoryMockHandler(
  request: FastifyRequest<{ Body: CreateStoreCategoryRequestProps }>,
  reply: FastifyReply
) {
  const body = [
    { name: "acessorios para carro" },
    { name: "ar condicionado automotivo" },
    { name: "auto eletrica" },
    { name: "funilaria" },
    { name: "guincho" },
    { name: "insulfilm" },
    { name: "lava jato" },
    { name: "lava rapido" },
    { name: "posto de combustivel" },
    { name: "troca de oleo" },
  ];

  try {
    const user = await createStoreCategoryMock(body, reply);

    return reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

export async function createStoreCategoryHandler(
  request: FastifyRequest<{ Body: CreateStoreCategoryRequestProps }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const user = await createStoreCategory(body, reply);

    return reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
