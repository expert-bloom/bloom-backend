-- CreateEnum
CREATE TYPE "ExperienceLevel" AS ENUM ('Beginner', 'Intermidiate', 'Expert', 'Junior', 'Senior');

-- AlterTable
ALTER TABLE "JobPost" ADD COLUMN     "experienceLevel" "ExperienceLevel" NOT NULL DEFAULT 'Beginner';
