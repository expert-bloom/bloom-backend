/*
  Warnings:

  - You are about to drop the column `posterAccountId` on the `JobPost` table. All the data in the column will be lost.
  - Made the column `image` on table `Account` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "JobPost" DROP CONSTRAINT "JobPost_posterAccountId_fkey";

-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "image" SET NOT NULL;

-- AlterTable
ALTER TABLE "Applicant" ALTER COLUMN "experienceYear" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "JobPost" DROP COLUMN "posterAccountId";
