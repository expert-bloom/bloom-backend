/*
  Warnings:

  - The values [Intermidiate] on the enum `ExperienceLevel` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ExperienceLevel_new" AS ENUM ('Beginner', 'Intermediate', 'Expert', 'Junior', 'Senior');
ALTER TABLE "JobPost" ALTER COLUMN "experienceLevel" DROP DEFAULT;
ALTER TABLE "JobPost" ALTER COLUMN "experienceLevel" TYPE "ExperienceLevel_new" USING ("experienceLevel"::text::"ExperienceLevel_new");
ALTER TYPE "ExperienceLevel" RENAME TO "ExperienceLevel_old";
ALTER TYPE "ExperienceLevel_new" RENAME TO "ExperienceLevel";
DROP TYPE "ExperienceLevel_old";
ALTER TABLE "JobPost" ALTER COLUMN "experienceLevel" SET DEFAULT 'Beginner';
COMMIT;
