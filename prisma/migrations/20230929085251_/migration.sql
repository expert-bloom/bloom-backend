/*
  Warnings:

  - Added the required column `email` to the `JobApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `JobApplication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobApplication" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
