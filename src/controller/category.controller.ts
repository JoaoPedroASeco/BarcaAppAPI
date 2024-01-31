// Schemas
import { CreateCategoryRequestProps } from "../schemas/category.schema";

// Types
import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";

// Services
import { createCategoryMock } from "../services/category/create.category.service";
import { getAllCategories } from "../services/category/get.categories.service";

// Mock
export async function createCategoryMockHandler(
  request: FastifyRequest<{ Body: CreateCategoryRequestProps }>,
  reply: FastifyReply
) {
  const body = [
    { name: "acessorios para carro" },
    { name: "ar condicionado automotivo" },
    { name: "auto eletrica" },
    { name: "funilaria" },
    { name: "guincho" },
    { name: "insulfilm" },
    { name: "lava jato" },
    { name: "lava rapido" },
    { name: "posto de combustivel" },
    { name: "troca de oleo" },
  ];

  try {
    const category = await createCategoryMock(body, reply);

    return reply.code(201).send(category);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

// Get
export async function getAllCategoryHandler(
  request: FastifyRequest<{ Body: CreateCategoryRequestProps }>,
  reply: FastifyReply
) {
  try {
    const storeCategories = await getAllCategories(reply);

    return reply.code(200).send(storeCategories);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

// // Create
// export async function createCategoryHandler(
//   request: FastifyRequest<{ Body: CreateCategoryRequestProps }>,
//   reply: FastifyReply
// ) {
//   const body = request.body;

//   try {
//     const category = await createCategory(body, reply);

//     return reply.code(201).send(category);
//   } catch (error) {
//     console.error(error);
//     return reply.code(500).send(error);
//   }
// }
