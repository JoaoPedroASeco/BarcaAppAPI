// Core
import { FastifyInstance } from "fastify";

// Controllers
import { createPartnerHandler } from "../controller/partner.controller";

// Schemas
import { $ref } from "../schemas/partner.schema";

// Partner Routes
export async function partnerRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      schema: {
        body: $ref("createPartnerRequestSchema"),
        response: {
          201: $ref("createPartnerResponseSchema"),
        },
      },
    },
    createPartnerHandler
  );
}
