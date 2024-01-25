// Core
import { FastifyReply } from "fastify/types/reply";

// Schema
import { CreateStoreCategoryRequestProps } from "../schemas/storeCategory.schema";

// Utils
import { prisma } from "../utils/prisma";

// Partner Services
export async function createStoreCategoryMock(
  input: CreateStoreCategoryRequestProps[],
  reply: FastifyReply
) {
  try {
    return await prisma.storeCategory.createMany({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

export async function createStoreCategory(
  input: CreateStoreCategoryRequestProps,
  reply: FastifyReply
) {
  try {
    return await prisma.storeCategory.create({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
