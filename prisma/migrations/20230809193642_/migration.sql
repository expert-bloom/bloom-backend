-- CreateEnum
CREATE TYPE "RelationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "JobPoster" AS ENUM ('Company', 'Affiliate');

-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('APPLICANT', 'COMPANY', 'AFFILIATE');

-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('ACTIVE', 'DRAFT', 'INACTIVE');

-- CreateEnum
CREATE TYPE "EnglishLevel" AS ENUM ('BASIC', 'CONVERSATIONAL', 'FLUENT', 'NATIVE');

-- CreateEnum
CREATE TYPE "Compensation" AS ENUM ('FRELANCER', 'COMPANY', 'PUBLIC');

-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('ONSITE', 'REMOTE', 'HYBRID');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userName" TEXT,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "accountType" "AccountType" NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "country" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OAuthClient" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT,
    "expires" TIMESTAMP(3) NOT NULL,
    "tokenType" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "OAuthClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partnership" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "RelationStatus" NOT NULL,
    "affiliateId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "Partnership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Applicant" (
    "id" TEXT NOT NULL,
    "experienceYear" INTEGER,
    "education" TEXT,
    "resume" TEXT,
    "skills" TEXT[],
    "languages" TEXT[],
    "certificates" TEXT[],
    "gender" TEXT,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "companyName" TEXT,
    "logo" TEXT,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Affiliate" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "Affiliate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobPost" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "category" TEXT[],
    "jobType" "JobType" NOT NULL,
    "vacancy" INTEGER NOT NULL,
    "applicationDeadline" TIMESTAMP(3) NOT NULL,
    "jobExperience" INTEGER NOT NULL,
    "isVisible" BOOLEAN NOT NULL,
    "compensation" "Compensation" NOT NULL,
    "otherLanguages" TEXT[],
    "englishLevel" "EnglishLevel" NOT NULL,
    "jobSkills" TEXT[],
    "salary" INTEGER[],
    "status" "PostStatus" NOT NULL,
    "accountId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "affiliateId" TEXT,

    CONSTRAINT "JobPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkExperience" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "accomplishment" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,

    CONSTRAINT "WorkExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobApplication" (
    "id" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL,
    "message" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "jobPostId" TEXT NOT NULL,

    CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SavedBy" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_userName_key" ON "Account"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Account_phone_key" ON "Account"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "OAuthClient_accountId_key" ON "OAuthClient"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Applicant_accountId_key" ON "Applicant"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_companyName_key" ON "Company"("companyName");

-- CreateIndex
CREATE UNIQUE INDEX "Company_accountId_key" ON "Company"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Affiliate_accountId_key" ON "Affiliate"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "_SavedBy_AB_unique" ON "_SavedBy"("A", "B");

-- CreateIndex
CREATE INDEX "_SavedBy_B_index" ON "_SavedBy"("B");

-- AddForeignKey
ALTER TABLE "OAuthClient" ADD CONSTRAINT "OAuthClient_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partnership" ADD CONSTRAINT "Partnership_affiliateId_fkey" FOREIGN KEY ("affiliateId") REFERENCES "Affiliate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partnership" ADD CONSTRAINT "Partnership_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Affiliate" ADD CONSTRAINT "Affiliate_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobPost" ADD CONSTRAINT "JobPost_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobPost" ADD CONSTRAINT "JobPost_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobPost" ADD CONSTRAINT "JobPost_affiliateId_fkey" FOREIGN KEY ("affiliateId") REFERENCES "Affiliate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkExperience" ADD CONSTRAINT "WorkExperience_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_jobPostId_fkey" FOREIGN KEY ("jobPostId") REFERENCES "JobPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SavedBy" ADD CONSTRAINT "_SavedBy_A_fkey" FOREIGN KEY ("A") REFERENCES "Applicant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SavedBy" ADD CONSTRAINT "_SavedBy_B_fkey" FOREIGN KEY ("B") REFERENCES "JobPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;
