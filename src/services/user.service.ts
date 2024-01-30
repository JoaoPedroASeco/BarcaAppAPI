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
    const {
      password,
      userRolesId,
      storeCategoryIds,
      cpf,
      email,
      name,
      phoneNumber,
      address,
      addressComplement,
      addressNumber,
      avatar,
      city,
      country,
      neighborhood,
      postCode,
      storeCNPJ,
      storeDescription,
      storeName,
      storePhoneNumber,
      storeSocialReazon,
      ...rest
    } = input;

    // Fazer verificacao dos campos unicos  retornar erro caso receba dados repetidos

    if (!storeCategoryIds?.length) {
      throw new Error("Categoria invalida. Seleciona ao menos uma categoria.");
    }

    const { hash, salt } = hashPassword(password);

    const partnerRoleId = await prisma.userRoles.findFirst({
      where: { name: "Partner" },
    });

    if (!partnerRoleId) {
      throw new Error("Categoria nao encontrada");
    }

    const partner = await prisma.user.create({
      data: {
        ...rest,
        cpf,
        email,
        name,
        phoneNumber,
        address,
        addressComplement,
        addressNumber,
        avatar,
        city,
        country,
        neighborhood,
        postCode,
        storeCNPJ,
        storeDescription,
        storeName,
        storePhoneNumber,
        storeSocialReazon,
        password: hash,
        salt,
        userRolesId: partnerRoleId.id,
      },
    });

    // Create Relations whit Partner and storeCategories
    storeCategoryIds.map(async (id) => {
      try {
        await prisma.userStoreCategories.create({
          data: {
            storeCategory_Id: id,
            user_Id: partner.id,
          },
        });
      } catch (error: any) {
        console.log(error.message);
        throw new Error("Erro ao criar as categorias da loja " + error.message);
      }
    });

    return partner;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}

export async function getAllPartners(reply: FastifyReply) {
  try {
    return await prisma.$queryRaw`
      SELECT
        "public"."User"."id",
        "public"."User"."name",
        "public"."User"."email",
        "public"."User"."phoneNumber",
        "public"."User"."cpf",
        "public"."User"."storeName",
        "public"."User"."storeCNPJ",
        "public"."User"."storeSocialReazon",
        "public"."User"."storePhoneNumber",
        "public"."User"."storeDescription",
        "public"."User"."avatar",
        "public"."User"."postCode",
        "public"."User"."country",
        "public"."User"."city",
        "public"."User"."neighborhood",
        "public"."User"."address",
        "public"."User"."addressNumber",
        "public"."User"."addressComplement",
        "public"."User"."storeCategoryId",
        "public"."User"."userRolesId",
        "public"."User"."createdAt",
        "public"."User"."updatedAt",
        json_agg(jsonb_build_object('storeCategoryId', "public"."StoreCategory"."id")) AS "UserStoreCategories"
      FROM
        "public"."User"
      LEFT JOIN
        "public"."UserStoreCategories"
        ON "public"."User"."id" =  "public"."UserStoreCategories"."user_Id"
      LEFT JOIN
        "public"."StoreCategory"
        ON  "public"."UserStoreCategories"."storeCategory_Id" = "public"."StoreCategory"."id"
      GROUP BY
        "public"."User"."id";
    `;
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
      // storeCategoryIds: partnerAlreadyExists.storeCategoryIds,
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

    await prisma.$queryRaw`
      DELETE FROM "public"."UserStoreCategories"
      WHERE "public"."UserStoreCategories"."user_Id" = ${partnerAlreadyExists.id}
    `;

    await prisma.user.delete({
      where: { id: id },
    });

    return;
  } catch (error: any) {
    console.error(error.message);
    return reply.code(500).send(error.message);
  }
}
