// Core
import { FastifyReply } from "fastify/types/reply";

// Utils
import { prisma } from "../../utils/prisma";

// Store Services
export async function getStoreAndCategories(reply: FastifyReply) {
  try {
    const storesAndCategories = await prisma.store.findMany({
      include: {
        StoreCategories: true,
      },
    });

    return storesAndCategories;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

export async function getStoreAndCategoriesWithStoreId(
  storeId: string,
  reply: FastifyReply
) {
  try {
    const storeAndCategories = await prisma.store.findUnique({
      where: {
        id: storeId,
      },
      include: {
        StoreCategories: true,
      },
    });

    return storeAndCategories;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
