// Core
import { FastifyReply } from "fastify/types/reply";

// Schema
import {} from "../../schemas/store.schema";

// Utils
import { prisma } from "../../utils/prisma";

// Types
import { CreateStoreCategoryProps } from "../../schemas/schemaTypes/storeCategories/create.storeCategories";

// StoreCategory Services
export async function createStoreCategory(
  { categories, storeId }: CreateStoreCategoryProps,
  reply: FastifyReply
) {
  try {
    if (!categories.length || categories.length <= 0)
      throw new Error("Categorias invaludas ou nulas");

    const arrayOfStoreCategories = categories.map((categoryId) => {
      return {
        categoryId,
        storeId,
      };
    });

    await prisma.storeCategories.createMany({
      data: arrayOfStoreCategories,
      skipDuplicates: true,
    });

    return;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
