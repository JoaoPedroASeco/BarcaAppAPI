// Services
import { createPartner } from "../services/user.service";

// Schemas
import { CreatePartnerRequestProps } from "../schemas/partner.schema";

// Types
import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";

export async function createPartnerHandler(
  request: FastifyRequest<{ Body: CreatePartnerRequestProps }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const user = await createPartner(body, reply);

    return reply.code(201).send(user);
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
