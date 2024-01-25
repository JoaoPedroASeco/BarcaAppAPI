// Services
import {
  createStoreStatus,
  createStoreStatusMock,
} from "../services/storeStatus.service";

// Schemas
import { CreateStoreStatusRequestProps } from "../schemas/storeStatus.schema";

// Types
import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";

export async function createStoreStatusMockHandler(
  request: FastifyRequest<{ Body: CreateStoreStatusRequestProps }>,
  reply: FastifyReply
) {
  const body = [{ name: "Approved" }, { name: "Denied" }, { name: "Pending" }];

  try {
    const user = await createStoreStatusMock(body, reply);

    return reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

export async function createStoreStatusHandler(
  request: FastifyRequest<{ Body: CreateStoreStatusRequestProps }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const user = await createStoreStatus(body, reply);

    return reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
