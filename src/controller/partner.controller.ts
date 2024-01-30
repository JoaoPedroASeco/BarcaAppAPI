// Services
import {
  createPartner,
  deletePartners,
  getAllPartners,
  updatePartners,
} from "../services/user.service";

// Schemas
import {
  CreatePartnerRequestProps,
  UpdatePartnerRequestProps,
} from "../schemas/partner.schema";

// Types
import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";

export async function createPartnerHandler(
  request: FastifyRequest<{ Body: CreatePartnerRequestProps }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const partner = await createPartner(body, reply);

    return reply.code(201).send(partner);
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

export async function getAllPartnerHandler(
  request: FastifyRequest<{ Body: {} }>,
  reply: FastifyReply
) {
  try {
    const partner = await getAllPartners(reply);

    return reply.code(200).send(partner);
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

export async function updatePartnerHandler(
  request: FastifyRequest<{ Body: UpdatePartnerRequestProps }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const partner = await updatePartners(body, reply);

    return reply.code(200).send(partner);
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

export async function deletePartnerHandler(
  request: FastifyRequest<{ Body: {}; Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = request.params;

  try {
    const partner = await deletePartners(id, reply);

    return reply.code(200).send(partner);
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
