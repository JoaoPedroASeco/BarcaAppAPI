/*
  Warnings:

  - You are about to drop the column `storeCategoryId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "storeCategoryId";

-- CreateTable
CREATE TABLE "UserStoreCategories" (
    "id" TEXT NOT NULL,
    "user_Id" TEXT NOT NULL,
    "storeCategory_Id" TEXT NOT NULL,

    CONSTRAINT "UserStoreCategories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserStoreCategories" ADD CONSTRAINT "UserStoreCategories_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStoreCategories" ADD CONSTRAINT "UserStoreCategories_storeCategory_Id_fkey" FOREIGN KEY ("storeCategory_Id") REFERENCES "StoreCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
