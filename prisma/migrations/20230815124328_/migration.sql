/*
  Warnings:

  - The values [CONTRACT] on the enum `JobType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "JobType_new" AS ENUM ('CONTRACTUAL', 'INTERNSHIP', 'FULL_TIME', 'PART_TIME');
ALTER TABLE "JobPost" ALTER COLUMN "jobType" TYPE "JobType_new" USING ("jobType"::text::"JobType_new");
ALTER TYPE "JobType" RENAME TO "JobType_old";
ALTER TYPE "JobType_new" RENAME TO "JobType";
DROP TYPE "JobType_old";
COMMIT;

-- AlterTable
ALTER TABLE "JobPost" ADD COLUMN     "interviewQuestions" TEXT[];