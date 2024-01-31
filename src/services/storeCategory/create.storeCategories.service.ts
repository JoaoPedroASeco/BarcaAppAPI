// Core
import { FastifyReply } from "fastify/types/reply";

// Schema
import {} from "../../schemas/store.schema";

// Utils
import { prisma } from "../../utils/prisma";

// Types
type createStoreCategoryRequestProps = {
  categories: string[];
  storeId: string;
};

// StoreCategory Services
export async function createStoreCategory(
  { categories, storeId }: createStoreCategoryRequestProps,
  reply: FastifyReply
) {
  try {
    console.log(`categorias: ${categories}`);
    if (!categories.length || categories.length <= 0)
      throw new Error("Categorias invaludas ou nulas");

    console.log(`as categorias sao validas!`);

    const arrayOdStoreCategories = categories.map((categoryId) => {
      return {
        categoryId,
        storeId,
      };
    });

    await prisma.storeCategories.createMany({
      data: arrayOdStoreCategories,
      skipDuplicates: true,
    });

    return;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
