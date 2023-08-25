/*
  Warnings:

  - You are about to drop the column `experience` on the `Applicant` table. All the data in the column will be lost.
  - You are about to drop the column `projects` on the `WorkExperience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Applicant" DROP COLUMN "experience";

-- AlterTable
ALTER TABLE "WorkExperience" DROP COLUMN "projects";
