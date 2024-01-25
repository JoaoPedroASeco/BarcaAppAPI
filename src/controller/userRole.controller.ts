// Services
import {
  createUserRole,
  createUserRoleMock,
} from "../services/userRole.service";

// Schemas
import { CreateUserRoleRequestProps } from "../schemas/userRole.schema";

// Types
import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";

export async function createUserRoleMockHandler(
  request: FastifyRequest<{ Body: CreateUserRoleRequestProps }>,
  reply: FastifyReply
) {
  const body = [{ name: "Admin" }, { name: "Customer" }, { name: "Partner" }];

  try {
    const user = await createUserRoleMock(body, reply);

    return reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

export async function createUserRoleHandler(
  request: FastifyRequest<{ Body: CreateUserRoleRequestProps }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const user = await createUserRole(body, reply);

    return reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
