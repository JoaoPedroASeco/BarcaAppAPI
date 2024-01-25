// Core
import { FastifyReply } from "fastify/types/reply";

// Schema
import { CreateStoreStatusRequestProps } from "../schemas/storeStatus.schema";

// Utils
import { prisma } from "../utils/prisma";

// Partner Services
export async function createStoreStatusMock(
  input: CreateStoreStatusRequestProps[],
  reply: FastifyReply
) {
  try {
    return await prisma.storeStatus.createMany({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

export async function createStoreStatus(
  input: CreateStoreStatusRequestProps,
  reply: FastifyReply
) {
  try {
    return await prisma.storeStatus.create({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
