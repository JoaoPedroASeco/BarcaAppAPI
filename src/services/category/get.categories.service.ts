// Core
import { FastifyReply } from "fastify/types/reply";

// Schema
import {} from "../../schemas/category.schema";

// Utils
import { prisma } from "../../utils/prisma";

export async function getAllCategories(reply: FastifyReply) {
  try {
    return await prisma.categories.findMany();
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
