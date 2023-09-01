-- AlterTable
ALTER TABLE "WorkExperience" ADD COLUMN     "ongoing" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "endDate" DROP NOT NULL;
