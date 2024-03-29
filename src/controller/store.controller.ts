// Schemas
import {
  CreateStoreRequestProps,
  GetStoreRequestProps,
  UpdateStoreRequestProps,
} from "../schemas/store.schema";

// Types
import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";
type CreateStoreWithCategoriesRequestProps = {
  categories: string[];
};

// Services
import { createStore } from "../services/store/create.store.service";
import { createStoreCategory } from "../services/storeCategory/create.storeCategories.service";
import { deleteStore } from "../services/store/delete.store.service";
import {
  getStoreAndCategories,
  getStoreAndCategoriesWithStoreId,
} from "../services/store/get.store.service";
import { updateStore } from "../services/store/update.store.service";
import { updateStoreCategoriesWithStoreId } from "../services/category/update.categories.service";

// Create
export async function createStoreHandler(
  request: FastifyRequest<{
    Body: CreateStoreRequestProps & CreateStoreWithCategoriesRequestProps;
  }>,
  reply: FastifyReply
) {
  const { categories, ...rest } = request.body;

  try {
    // Create Store
    const store = await createStore({ ...rest }, reply);

    // Create Store Categories
    await createStoreCategory({ categories, storeId: store.id }, reply);

    // Fetch Store And Categories
    const storeAndCategories = await getStoreAndCategoriesWithStoreId(
      store.id,
      reply
    );

    return reply.code(201).send(storeAndCategories);
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

// // Get Store And Categories
export async function getStoreAndCategoriesHandler(
  request: FastifyRequest<{ Body: GetStoreRequestProps }>,
  reply: FastifyReply
) {
  try {
    const stores = await getStoreAndCategories(reply);

    return reply.code(200).send(stores);
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

// // Get Store And Categories With Store Id
export async function getStoreAndCategoriesWithStoreIdHandler(
  request: FastifyRequest<{ Body: {}; Params: { storeId: string } }>,
  reply: FastifyReply
) {
  const { storeId } = request.params;

  try {
    const stores = await getStoreAndCategoriesWithStoreId(storeId, reply);

    return reply.code(200).send(stores);
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

// // Update Store
export async function updateStoreHandler(
  request: FastifyRequest<{
    Body: UpdateStoreRequestProps & {
      StoreCategories: {
        id: string;
        storeId: string;
        categoryId: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  }>,
  reply: FastifyReply
) {
  const body = request.body;

  if (!body.id.length)
    return reply
      .code(500)
      .send("Id da loja necessario para fazer as alteracoes");

  try {
    await updateStore(body, reply);

    const storeAndCategories = await getStoreAndCategoriesWithStoreId(
      body.id,
      reply
    );

    return reply.code(200).send(storeAndCategories);
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

// // Delete Store
export async function deleteStoreHandler(
  request: FastifyRequest<{ Body: {}; Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = request.params;

  try {
    const store = await deleteStore(id, reply);

    return reply.code(200).send(store);
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
