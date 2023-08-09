/*
  Warnings:

  - You are about to drop the column `poster` on the `JobPost` table. All the data in the column will be lost.
  - Added the required column `accountId` to the `JobPost` table without a default value. This is not possible if the table is not empty.
  - Made the column `companyId` on table `JobPost` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "RelationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- DropForeignKey
ALTER TABLE "JobPost" DROP CONSTRAINT "JobPost_companyId_fkey";

-- AlterTable
ALTER TABLE "JobPost" DROP COLUMN "poster",
ADD COLUMN     "accountId" TEXT NOT NULL,
ALTER COLUMN "companyId" SET NOT NULL;

-- CreateTable
CREATE TABLE "Partnership" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "RelationStatus" NOT NULL,
    "affiliateId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "Partnership_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Partnership" ADD CONSTRAINT "Partnership_affiliateId_fkey" FOREIGN KEY ("affiliateId") REFERENCES "Affiliate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partnership" ADD CONSTRAINT "Partnership_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobPost" ADD CONSTRAINT "JobPost_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobPost" ADD CONSTRAINT "JobPost_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
