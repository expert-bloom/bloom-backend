/*
  Warnings:

  - Added the required column `coverLetter` to the `JobApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resume` to the `JobApplication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobApplication" ADD COLUMN     "attachment" TEXT,
ADD COLUMN     "coverLetter" TEXT NOT NULL,
ADD COLUMN     "resume" TEXT NOT NULL;
