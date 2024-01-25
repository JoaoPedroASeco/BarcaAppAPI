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
    "storeCategoryId" TEXT,
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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
