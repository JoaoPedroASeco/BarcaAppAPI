// Core
import { FastifyInstance } from "fastify";

// Controllers
import {
  createPartnerHandler,
  deletePartnerHandler,
  getAllPartnerHandler,
  updatePartnerHandler,
} from "../controller/partner.controller";

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

  server.get(
    "/",
    // {
    //   schema: {
    //     response: {
    //       201: $ref("createPartnerResponseSchema"),
    //     },
    //   },
    // },
    getAllPartnerHandler
  );

  server.patch(
    "/",
    // {
    //   schema: {
    //     response: {
    //       201: $ref("createPartnerResponseSchema"),
    //     },
    //   },
    // },
    updatePartnerHandler
  );

  server.delete(
    "/:id",
    // {
    //   schema: {
    //     response: {
    //       201: $ref("createPartnerResponseSchema"),
    //     },
    //   },
    // },
    deletePartnerHandler
  );
}
