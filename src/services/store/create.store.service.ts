// Core
import { FastifyReply } from "fastify/types/reply";

// Schema
import { CreateStoreRequestProps } from "../../schemas/store.schema";

// Utils
import { prisma } from "../../utils/prisma";
import { hashPassword } from "../../utils/hash";

// Store Services
export async function createStore(
  { password, ...rest }: CreateStoreRequestProps,
  reply: FastifyReply
) {
  try {
    // Receive password and hash it
    const { hash, salt } = hashPassword(password);

    // Create store
    const store = await prisma.store.create({
      data: {
        ...rest,
        password: hash,
        salt,
      },
    });

    return store;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
