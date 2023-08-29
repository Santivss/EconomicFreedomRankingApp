/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `CountryData` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[background]` on the table `CountryData` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CountryData" ALTER COLUMN "propertyRights" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "judicialEffectivness" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "governmentIntegrity" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "businessFreedom" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "laborFreedom" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "monetaryFreedom" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "taxBurden" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "governmentSpending" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "fiscalHealth" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "tradeFreedom" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "investmentFreedom" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "financialFreedom" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "pbiPerCapita" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "unemployment" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "inflation" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "publicDebt" SET DATA TYPE DOUBLE PRECISION;

-- CreateIndex
CREATE UNIQUE INDEX "CountryData_description_key" ON "CountryData"("description");

-- CreateIndex
CREATE UNIQUE INDEX "CountryData_background_key" ON "CountryData"("background");
