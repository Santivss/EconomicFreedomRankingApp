/*
  Warnings:

  - The `propertyRights` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `judicialEffectivness` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `governmentIntegrity` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `businessFreedom` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `laborFreedom` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `monetaryFreedom` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `taxBurden` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `governmentSpending` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `fiscalHealth` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tradeFreedom` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `investmentFreedom` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `financialFreedom` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `population` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `pbiPerCapita` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `unemployment` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `inflation` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `publicDebt` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `overallScore` column on the `CountryData` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CountryData" DROP COLUMN "propertyRights",
ADD COLUMN     "propertyRights" INTEGER DEFAULT 0,
DROP COLUMN "judicialEffectivness",
ADD COLUMN     "judicialEffectivness" INTEGER DEFAULT 0,
DROP COLUMN "governmentIntegrity",
ADD COLUMN     "governmentIntegrity" INTEGER DEFAULT 0,
DROP COLUMN "businessFreedom",
ADD COLUMN     "businessFreedom" INTEGER DEFAULT 0,
DROP COLUMN "laborFreedom",
ADD COLUMN     "laborFreedom" INTEGER DEFAULT 0,
DROP COLUMN "monetaryFreedom",
ADD COLUMN     "monetaryFreedom" INTEGER DEFAULT 0,
DROP COLUMN "taxBurden",
ADD COLUMN     "taxBurden" INTEGER DEFAULT 0,
DROP COLUMN "governmentSpending",
ADD COLUMN     "governmentSpending" INTEGER DEFAULT 0,
DROP COLUMN "fiscalHealth",
ADD COLUMN     "fiscalHealth" INTEGER DEFAULT 0,
DROP COLUMN "tradeFreedom",
ADD COLUMN     "tradeFreedom" INTEGER DEFAULT 0,
DROP COLUMN "investmentFreedom",
ADD COLUMN     "investmentFreedom" INTEGER DEFAULT 0,
DROP COLUMN "financialFreedom",
ADD COLUMN     "financialFreedom" INTEGER DEFAULT 0,
DROP COLUMN "population",
ADD COLUMN     "population" INTEGER DEFAULT 0,
DROP COLUMN "pbiPerCapita",
ADD COLUMN     "pbiPerCapita" INTEGER DEFAULT 0,
DROP COLUMN "unemployment",
ADD COLUMN     "unemployment" INTEGER DEFAULT 0,
DROP COLUMN "inflation",
ADD COLUMN     "inflation" INTEGER DEFAULT 0,
DROP COLUMN "publicDebt",
ADD COLUMN     "publicDebt" INTEGER DEFAULT 0,
DROP COLUMN "overallScore",
ADD COLUMN     "overallScore" INTEGER DEFAULT 0;
