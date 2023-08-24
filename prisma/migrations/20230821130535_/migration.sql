/*
  Warnings:

  - Added the required column `fullName` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "fullName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Applicant" ADD COLUMN     "WorkExperienceYears" INTEGER,
ADD COLUMN     "about" TEXT,
ADD COLUMN     "accomplishment" TEXT,
ADD COLUMN     "englishLevel" "EnglishLevel",
ADD COLUMN     "experience" INTEGER,
ADD COLUMN     "jobPosition" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "otherLanguages" TEXT[],
ADD COLUMN     "salaryExpectation" INTEGER,
ADD COLUMN     "skillLevel" "ExperienceLevel";
