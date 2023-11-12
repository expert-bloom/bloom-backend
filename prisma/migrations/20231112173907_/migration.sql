-- DropForeignKey
ALTER TABLE "JobApplication" DROP CONSTRAINT "JobApplication_companyId_fkey";

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
