// Core
import { FastifyReply } from "fastify/types/reply";

// Utils
import { prisma } from "../../utils/prisma";

export async function updateStoreCategoriesWithStoreId(
  categories: string[] | undefined,
  storeId: string,
  reply: FastifyReply
) {
  try {
    const alreadyHaveStoreCategoriesInThisStore =
      await prisma.storeCategories.findMany({ where: { storeId } });

    if (
      categories?.length &&
      alreadyHaveStoreCategoriesInThisStore?.length > 0
    ) {
      await prisma.storeCategories.deleteMany({ where: { storeId } });

      const arrayOfNewCategories = categories.map((category) => {
        return { categoryId: category, storeId };
      });

      await prisma.storeCategories.createMany({ data: arrayOfNewCategories });
    }

    return;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
