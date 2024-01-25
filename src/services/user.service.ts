// Core
import { FastifyReply } from "fastify/types/reply";

// Schema
import { CreatePartnerRequestProps } from "../schemas/partner.schema";

// Utils
import { hashPassword } from "../utils/hash";
import { prisma } from "../utils/prisma";

// Partner Services
export async function createPartner(
  input: CreatePartnerRequestProps,
  reply: FastifyReply
) {
  try {
    const { password, userRolesId, ...rest } = input;

    let defaultRoleId: string;

    const { hash, salt } = hashPassword(password);

    if (!userRolesId) {
      defaultRoleId = "clrsh76s40001fd595spuxeba";
    } else {
      const customerRole = await prisma.userRoles.findUnique({
        where: { id: userRolesId },
      });

      if (customerRole?.id.length) {
        defaultRoleId = customerRole?.id ? customerRole.id : "";
      } else {
        defaultRoleId = "clrsh76s40001fd595spuxeba";
      }
    }

    return await prisma.user.create({
      data: {
        password: hash,
        salt,
        userRolesId: defaultRoleId,
        ...rest,
      },
    });
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
