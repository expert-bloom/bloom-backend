/*
  Warnings:

  - You are about to drop the column `gender` on the `Account` table. All the data in the column will be lost.
  - Added the required column `gender` to the `Applicant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "gender";

-- AlterTable
ALTER TABLE "Applicant" ADD COLUMN     "gender" TEXT NOT NULL;
