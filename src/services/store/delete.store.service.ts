// Core
import { FastifyReply } from "fastify/types/reply";

// Utils
import { prisma } from "../../utils/prisma";

export async function deleteStore(id: string, reply: FastifyReply) {
  try {
    const storeAlreadyExists = await prisma.store.findUnique({
      where: { id },
    });

    if (!storeAlreadyExists?.id.length) {
      throw new Error("Loja nao encontrado!");
    }

    await prisma.$queryRaw`
      DELETE FROM "public"."StoreCategories"
      WHERE "public"."StoreCategories"."storeId" = ${storeAlreadyExists.id}
    `;

    await prisma.store.delete({
      where: { id },
    });

    return;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
