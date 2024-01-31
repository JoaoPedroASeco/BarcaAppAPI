// export async function getAllStores(reply: FastifyReply) {
//   try {
//     return await prisma.$queryRaw`
//       SELECT
//         "public"."User"."id",
//         "public"."User"."name",
//         "public"."User"."email",
//         "public"."User"."phoneNumber",
//         "public"."User"."cpf",
//         "public"."User"."storeName",
//         "public"."User"."storeCNPJ",
//         "public"."User"."storeSocialReazon",
//         "public"."User"."storePhoneNumber",
//         "public"."User"."storeDescription",
//         "public"."User"."avatar",
//         "public"."User"."postCode",
//         "public"."User"."country",
//         "public"."User"."city",
//         "public"."User"."neighborhood",
//         "public"."User"."address",
//         "public"."User"."addressNumber",
//         "public"."User"."addressComplement",
//         "public"."User"."storeCategoryId",
//         "public"."User"."userRolesId",
//         "public"."User"."createdAt",
//         "public"."User"."updatedAt",
//         json_agg(jsonb_build_object('storeCategoryId', "public"."StoreCategory"."id")) AS "UserStoreCategories"
//       FROM
//         "public"."User"
//       LEFT JOIN
//         "public"."UserStoreCategories"
//         ON "public"."User"."id" =  "public"."UserStoreCategories"."user_Id"
//       LEFT JOIN
//         "public"."StoreCategory"
//         ON  "public"."UserStoreCategories"."storeCategory_Id" = "public"."StoreCategory"."id"
//       GROUP BY
//         "public"."User"."id";
//     `;
//   } catch (error: any) {
//     console.error(error.message);
//     return reply.code(500).send(error.message);
//   }
// }

// export async function updateStores(
//   {
//     id,
//     storeCategoryIds,
//     storeSocialReazon,
//     storePhoneNumber,
//     storeDescription,
//     storeStatusId,
//     storeIsActive,
//     storeRate,
//     avatar,
//     postCode,
//     country,
//     city,
//     neighborhood,
//     address,
//     addressNumber,
//     addressComplement,
//     userRolesId,
//     ...rest
//   }: UpdateStoreRequestProps,
//   reply: FastifyReply
// ) {
//   try {
//     const partnerAlreadyExists = await prisma.user.findUnique({
//       where: { id: id },
//     });

//     if (!partnerAlreadyExists?.id.length) {
//       throw new Error("Parceiro nao encontrado!");
//     }

//     const data = {
//       ...rest,
//       updatedAt: partnerAlreadyExists.updatedAt,
//       createdAt: partnerAlreadyExists.createdAt,
//       // storeCategoryIds: partnerAlreadyExists.storeCategoryIds,
//       storeSocialReazon:
//         storeSocialReazon !== null
//           ? storeSocialReazon
//           : partnerAlreadyExists.storeSocialReazon,
//       storePhoneNumber:
//         storePhoneNumber !== null
//           ? storePhoneNumber
//           : partnerAlreadyExists.storePhoneNumber,
//       storeDescription:
//         storeDescription !== null
//           ? storeDescription
//           : partnerAlreadyExists.storeDescription,
//       storeStatusId:
//         storeStatusId !== null
//           ? storeStatusId
//           : partnerAlreadyExists.storeStatusId,
//       storeIsActive:
//         storeIsActive !== null
//           ? storeIsActive
//           : partnerAlreadyExists.storeIsActive,
//       storeRate:
//         storeRate !== null ? storeRate : partnerAlreadyExists.storeRate,
//       avatar: avatar !== null ? avatar : partnerAlreadyExists.avatar,
//       postCode: postCode !== null ? postCode : partnerAlreadyExists.postCode,
//       country: country !== null ? country : partnerAlreadyExists.country,
//       city: city !== null ? city : partnerAlreadyExists.city,
//       neighborhood:
//         neighborhood !== null
//           ? neighborhood
//           : partnerAlreadyExists.neighborhood,
//       address: address !== null ? address : partnerAlreadyExists.address,
//       addressNumber:
//         addressNumber !== null
//           ? addressNumber
//           : partnerAlreadyExists.addressNumber,
//       addressComplement:
//         addressComplement !== null
//           ? addressComplement
//           : partnerAlreadyExists.addressComplement,
//       userRolesId: partnerAlreadyExists.userRolesId,
//     };

//     await prisma.user.update({
//       data: { ...data },
//       where: { id: id },
//     });

//     const updatedStore = await prisma.user.findUnique({
//       where: { id: id },
//     });

//     return updatedStore;
//   } catch (error: any) {
//     console.error(error.message);
//     return reply.code(500).send(error.message);
//   }
// }

// export async function deleteStores(id: string, reply: FastifyReply) {
//   try {
//     const partnerAlreadyExists = await prisma.user.findUnique({
//       where: { id: id },
//     });

//     if (!partnerAlreadyExists?.id.length) {
//       throw new Error("Parceiro nao encontrado!");
//     }

//     await prisma.$queryRaw`
//       DELETE FROM "public"."UserStoreCategories"
//       WHERE "public"."UserStoreCategories"."user_Id" = ${partnerAlreadyExists.id}
//     `;

//     await prisma.user.delete({
//       where: { id: id },
//     });

//     return;
//   } catch (error: any) {
//     console.error(error.message);
//     return reply.code(500).send(error.message);
//   }
// }
