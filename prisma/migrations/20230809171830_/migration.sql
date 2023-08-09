-- DropForeignKey
ALTER TABLE "Affiliate" DROP CONSTRAINT "Affiliate_accountId_fkey";

-- DropForeignKey
ALTER TABLE "Applicant" DROP CONSTRAINT "Applicant_accountId_fkey";

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_accountId_fkey";

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Affiliate" ADD CONSTRAINT "Affiliate_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
