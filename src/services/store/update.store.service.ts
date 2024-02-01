// Core
import { FastifyReply } from "fastify/types/reply";

// Utils
import { prisma } from "../../utils/prisma";

// Types
import { UpdateStoreRequestProps } from "../../schemas/store.schema";

export async function updateStore(
  {
    id,
    StoreCategories,
    ...data
  }: UpdateStoreRequestProps & {
    StoreCategories: {
      id: string;
      storeId: string;
      categoryId: string;
      createdAt: string;
      updatedAt: string;
    };
  },
  reply: FastifyReply
) {
  try {
    const storeAlreadyExists = await prisma.store.findUnique({
      where: { id: id },
    });

    if (!storeAlreadyExists?.id.length) {
      throw new Error("Loja nao encontrada!");
    }

    await prisma.store.update({
      data: { ...data },
      where: { id: id },
    });

    return;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
