// Core
import { FastifyReply } from "fastify/types/reply";

// Schema
import { CreateCategoryRequestProps } from "../../schemas/category.schema";

// Utils
import { prisma } from "../../utils/prisma";

// Partner Services
export async function createCategoryMock(
  input: CreateCategoryRequestProps[],
  reply: FastifyReply
) {
  try {
    return await prisma.categories.createMany({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

export async function createCategory(
  input: CreateCategoryRequestProps,
  reply: FastifyReply
) {
  try {
    return await prisma.categories.create({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
