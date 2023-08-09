-- DropForeignKey
ALTER TABLE "OAuthClient" DROP CONSTRAINT "OAuthClient_accountId_fkey";

-- AddForeignKey
ALTER TABLE "OAuthClient" ADD CONSTRAINT "OAuthClient_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
