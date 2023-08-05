/*
  Warnings:

  - The values [FRELANCER] on the enum `AccountType` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[companyName]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AccountType_new" AS ENUM ('APPLICANT', 'COMPANY', 'PUBLIC');
ALTER TABLE "Account" ALTER COLUMN "accountType" DROP DEFAULT;
ALTER TABLE "Account" ALTER COLUMN "accountType" TYPE "AccountType_new" USING ("accountType"::text::"AccountType_new");
ALTER TYPE "AccountType" RENAME TO "AccountType_old";
ALTER TYPE "AccountType_new" RENAME TO "AccountType";
DROP TYPE "AccountType_old";
ALTER TABLE "Account" ALTER COLUMN "accountType" SET DEFAULT 'PUBLIC';
COMMIT;

-- CreateIndex
CREATE UNIQUE INDEX "Company_companyName_key" ON "Company"("companyName");
