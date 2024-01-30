// Core
import fastify from "fastify";

// Libs
import fjwt from "fastify-jwt-deprecated";
import "dotenv/config";
import cors from "@fastify/cors";

// Constants
import { API_HOST, API_PORT, API_SECRET } from "./utils/constants";

// Types
import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";
declare module "fastify" {
  interface FastifyInstance {
    authenticate: any;
  }
}
declare module "fastify-jwt-deprecated" {
  interface FastifyJWT {
    user: {
      email: string;
      password: string;
      id: string;
    };
  }
}

// Schemas
import { schemas } from "./schemas";

// Routes
import { routes } from "./routes";

// App
export const server = fastify();

// JWT
server.register(fjwt, {
  secret: API_SECRET,
});

// Auth
server.decorate("authenticate", async (request: any, reply: any) => {
  try {
    await request.jwtVerify();
  } catch (error) {
    return reply.send(error);
  }
});

// Allow Cors
server.register(cors, {
  origin: "*",
  methods: ["POST", "GET", "UPDATE", "PUT", "PATCH", "DELETE"],
});

// Main
async function main() {
  // Schemas
  schemas.forEach((schema) => server.addSchema(schema));

  // Routes
  routes.forEach(({ route, prefix }) => server.register(route, { prefix }), {
    prefi: "/v1",
  });

  try {
    // Connect
    await server.listen(API_PORT, API_HOST);
    console.log(`🚀 Server on 🚀 http://${API_HOST}:${API_PORT}`);
  } catch (err) {
    // Error
    console.log(err);
    process.exit(1);
  }
}

// Healt Checking
server.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
  return reply.status(200).send({ message: "OK" });
});

main();
