-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "storeName" TEXT,
    "storeCNPJ" TEXT,
    "storeSocialReazon" TEXT,
    "storePhoneNumber" TEXT,
    "storeIsActive" BOOLEAN,
    "storeRate" DOUBLE PRECISION,
    "storeDescription" TEXT,
    "storeStatusId" TEXT,
    "avatar" TEXT,
    "postCode" TEXT,
    "country" TEXT,
    "city" TEXT,
    "neighborhood" TEXT,
    "address" TEXT,
    "addressNumber" INTEGER,
    "addressComplement" TEXT,
    "salt" TEXT,
    "userRolesId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "StoreCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreStatus" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "StoreStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRoles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UserRoles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStoreCategories" (
    "id" TEXT NOT NULL,
    "user_Id" TEXT NOT NULL,
    "storeCategory_Id" TEXT NOT NULL,

    CONSTRAINT "UserStoreCategories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userRolesId_fkey" FOREIGN KEY ("userRolesId") REFERENCES "UserRoles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStoreCategories" ADD CONSTRAINT "UserStoreCategories_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStoreCategories" ADD CONSTRAINT "UserStoreCategories_storeCategory_Id_fkey" FOREIGN KEY ("storeCategory_Id") REFERENCES "StoreCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
