// Core
import { FastifyReply } from "fastify/types/reply";

// Schema
import {
  CreatePartnerRequestProps,
  UpdatePartnerRequestProps,
} from "../schemas/partner.schema";

// Utils
import { hashPassword } from "../utils/hash";
import { prisma } from "../utils/prisma";

// Partner Services
export async function createPartner(
  input: CreatePartnerRequestProps,
  reply: FastifyReply
) {
  try {
    const { password, userRolesId, storeCategoryIds, ...rest } = input;

    if (!storeCategoryIds?.length) {
      throw new Error("Categoria invalida. Seleciona ao menos uma categoria.");
    }

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

    const partner = await prisma.user.create({
      data: {
        password: hash,
        salt,
        userRolesId: defaultRoleId,
        ...rest,
      },
    });

    // Create Relations whit Partner and storeCategories
    storeCategoryIds.map(async (id) => {
      await prisma.userStoreCategories.create({
        data: {
          storeCategory_Id: id,
          user_Id: partner.id,
        },
      });
    });

    return partner;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

export async function getAllPartners(reply: FastifyReply) {
  try {
    return await prisma.user.findMany({
      include: {
        UserStoreCategories: true,
      },
    });
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

export async function updatePartners(
  {
    id,
    storeCategoryIds,
    storeSocialReazon,
    storePhoneNumber,
    storeDescription,
    storeStatusId,
    storeIsActive,
    storeRate,
    avatar,
    postCode,
    country,
    city,
    neighborhood,
    address,
    addressNumber,
    addressComplement,
    userRolesId,
    ...rest
  }: UpdatePartnerRequestProps,
  reply: FastifyReply
) {
  try {
    const partnerAlreadyExists = await prisma.user.findUnique({
      where: { id: id },
    });

    if (!partnerAlreadyExists?.id.length) {
      throw new Error("Parceiro nao encontrado!");
    }

    const data = {
      ...rest,
      updatedAt: partnerAlreadyExists.updatedAt,
      createdAt: partnerAlreadyExists.createdAt,
      storeCategoryId: partnerAlreadyExists.storeCategoryId,
      storeSocialReazon:
        storeSocialReazon !== null
          ? storeSocialReazon
          : partnerAlreadyExists.storeSocialReazon,
      storePhoneNumber:
        storePhoneNumber !== null
          ? storePhoneNumber
          : partnerAlreadyExists.storePhoneNumber,
      storeDescription:
        storeDescription !== null
          ? storeDescription
          : partnerAlreadyExists.storeDescription,
      storeStatusId:
        storeStatusId !== null
          ? storeStatusId
          : partnerAlreadyExists.storeStatusId,
      storeIsActive:
        storeIsActive !== null
          ? storeIsActive
          : partnerAlreadyExists.storeIsActive,
      storeRate:
        storeRate !== null ? storeRate : partnerAlreadyExists.storeRate,
      avatar: avatar !== null ? avatar : partnerAlreadyExists.avatar,
      postCode: postCode !== null ? postCode : partnerAlreadyExists.postCode,
      country: country !== null ? country : partnerAlreadyExists.country,
      city: city !== null ? city : partnerAlreadyExists.city,
      neighborhood:
        neighborhood !== null
          ? neighborhood
          : partnerAlreadyExists.neighborhood,
      address: address !== null ? address : partnerAlreadyExists.address,
      addressNumber:
        addressNumber !== null
          ? addressNumber
          : partnerAlreadyExists.addressNumber,
      addressComplement:
        addressComplement !== null
          ? addressComplement
          : partnerAlreadyExists.addressComplement,
      userRolesId: partnerAlreadyExists.userRolesId,
    };

    await prisma.user.update({
      data: { ...data },
      where: { id: id },
    });

    const updatedPartner = await prisma.user.findUnique({
      where: { id: id },
    });

    return updatedPartner;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

export async function deletePartners(id: string, reply: FastifyReply) {
  try {
    const partnerAlreadyExists = await prisma.user.findUnique({
      where: { id: id },
    });

    if (!partnerAlreadyExists?.id.length) {
      throw new Error("Parceiro nao encontrado!");
    }

    await prisma.userStoreCategories.deleteMany({
      where: {
        user_Id: partnerAlreadyExists.id,
      },
    });

    await prisma.user.delete({
      where: { id: id },
    });

    return;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
