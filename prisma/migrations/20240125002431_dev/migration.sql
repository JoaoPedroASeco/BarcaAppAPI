-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userRolesId" TEXT;

-- CreateTable
CREATE TABLE "UserRoles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UserRoles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userRolesId_fkey" FOREIGN KEY ("userRolesId") REFERENCES "UserRoles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
