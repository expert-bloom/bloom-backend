-- CreateTable
CREATE TABLE "_ApplicantToCompany" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ApplicantToCompany_AB_unique" ON "_ApplicantToCompany"("A", "B");

-- CreateIndex
CREATE INDEX "_ApplicantToCompany_B_index" ON "_ApplicantToCompany"("B");

-- AddForeignKey
ALTER TABLE "_ApplicantToCompany" ADD CONSTRAINT "_ApplicantToCompany_A_fkey" FOREIGN KEY ("A") REFERENCES "Applicant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApplicantToCompany" ADD CONSTRAINT "_ApplicantToCompany_B_fkey" FOREIGN KEY ("B") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
