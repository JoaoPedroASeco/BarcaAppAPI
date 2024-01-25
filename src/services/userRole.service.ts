// Core
import { FastifyReply } from "fastify/types/reply";

// Schema
import { CreateUserRoleRequestProps } from "../schemas/userRole.schema";

// Utils
import { prisma } from "../utils/prisma";

// Partner Services
export async function createUserRoleMock(
  input: CreateUserRoleRequestProps[],
  reply: FastifyReply
) {
  try {
    return await prisma.userRoles.createMany({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

export async function createUserRole(
  input: CreateUserRoleRequestProps,
  reply: FastifyReply
) {
  try {
    return await prisma.userRoles.create({ data: input });
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}
