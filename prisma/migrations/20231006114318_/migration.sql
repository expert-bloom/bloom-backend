/*
  Warnings:

  - The values [REFUSED,RESPONDED] on the enum `InterviewStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [REFUSED,RESPONDED,REJECTED] on the enum `OfferStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "InterviewStatus_new" AS ENUM ('PENDING', 'APPLICANT_REFUSED', 'APPLICANT_RESPONDED', 'ACCEPTED', 'REJECTED');
ALTER TABLE "Interview" ALTER COLUMN "status" TYPE "InterviewStatus_new" USING ("status"::text::"InterviewStatus_new");
ALTER TYPE "InterviewStatus" RENAME TO "InterviewStatus_old";
ALTER TYPE "InterviewStatus_new" RENAME TO "InterviewStatus";
DROP TYPE "InterviewStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "OfferStatus_new" AS ENUM ('PENDING', 'APPLICANT_REFUSED', 'ACCEPTED');
ALTER TABLE "Offer" ALTER COLUMN "status" TYPE "OfferStatus_new" USING ("status"::text::"OfferStatus_new");
ALTER TYPE "OfferStatus" RENAME TO "OfferStatus_old";
ALTER TYPE "OfferStatus_new" RENAME TO "OfferStatus";
DROP TYPE "OfferStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Interview" ALTER COLUMN "answerVideo" DROP NOT NULL,
ALTER COLUMN "answerText" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Offer" ALTER COLUMN "answerText" DROP NOT NULL;
