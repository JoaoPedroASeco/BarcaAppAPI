// Core
import { FastifyReply } from "fastify/types/reply";

// Schema
import {} from "../../schemas/store.schema";

// Utils
import { prisma } from "../../utils/prisma";

// Types
import { DeleteStoreCategoriesProps } from "../../schemas/schemaTypes/storeCategories/delete.storeCategories";

// StoreCategory Services
export async function deleteStoreCategory(
  { categories, storeId }: DeleteStoreCategoriesProps,
  reply: FastifyReply
) {
  try {
    if (!categories.length || categories.length <= 0)
      throw new Error("Categorias invaludas ou nulas");

    await prisma.storeCategories.deleteMany({
      where: {
        storeId: storeId,
        categoryId: {
          in: categories,
        },
      },
    });

    return;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
