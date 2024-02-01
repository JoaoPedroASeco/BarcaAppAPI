// Types
import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";

// Types
import { CreateStoreCategoryProps } from "../schemas/schemaTypes/storeCategories/create.storeCategories";

// Services
import { createStoreCategory } from "../services/storeCategory/create.storeCategories.service";
import { DeleteStoreCategoriesProps } from "../schemas/schemaTypes/storeCategories/delete.storeCategories";
import { deleteStoreCategory } from "../services/storeCategory/delete.storeCategories.service";

// Create
export async function createStoreCategoriesHandler(
  request: FastifyRequest<{
    Body: CreateStoreCategoryProps;
  }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    await createStoreCategory(body, reply);

    return reply.code(201).send({});
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

// Create
export async function deleteStoreCategoriesHandler(
  request: FastifyRequest<{
    Body: DeleteStoreCategoriesProps;
  }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    await deleteStoreCategory(body, reply);

    return reply.code(200).send({});
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
