/*
  Warnings:

  - The values [PUBLIC] on the enum `AccountType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AccountType_new" AS ENUM ('APPLICANT', 'COMPANY', 'AFFILIATE');
ALTER TABLE "Account" ALTER COLUMN "accountType" DROP DEFAULT;
ALTER TABLE "Account" ALTER COLUMN "accountType" TYPE "AccountType_new" USING ("accountType"::text::"AccountType_new");
ALTER TYPE "AccountType" RENAME TO "AccountType_old";
ALTER TYPE "AccountType_new" RENAME TO "AccountType";
DROP TYPE "AccountType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "accountType" DROP DEFAULT;
