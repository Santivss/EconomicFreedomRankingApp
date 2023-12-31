-- AlterTable
ALTER TABLE "CountryData" ALTER COLUMN "propertyRights" DROP NOT NULL,
ALTER COLUMN "propertyRights" SET DEFAULT 'N/A',
ALTER COLUMN "judicialEffectivness" DROP NOT NULL,
ALTER COLUMN "judicialEffectivness" SET DEFAULT 'N/A',
ALTER COLUMN "governmentIntegrity" DROP NOT NULL,
ALTER COLUMN "governmentIntegrity" SET DEFAULT 'N/A',
ALTER COLUMN "businessFreedom" DROP NOT NULL,
ALTER COLUMN "businessFreedom" SET DEFAULT 'N/A',
ALTER COLUMN "laborFreedom" DROP NOT NULL,
ALTER COLUMN "laborFreedom" SET DEFAULT 'N/A',
ALTER COLUMN "monetaryFreedom" DROP NOT NULL,
ALTER COLUMN "monetaryFreedom" SET DEFAULT 'N/A',
ALTER COLUMN "taxBurden" DROP NOT NULL,
ALTER COLUMN "taxBurden" SET DEFAULT 'N/A',
ALTER COLUMN "governmentSpending" DROP NOT NULL,
ALTER COLUMN "governmentSpending" SET DEFAULT 'N/A',
ALTER COLUMN "fiscalHealth" DROP NOT NULL,
ALTER COLUMN "fiscalHealth" SET DEFAULT 'N/A',
ALTER COLUMN "tradeFreedom" DROP NOT NULL,
ALTER COLUMN "tradeFreedom" SET DEFAULT 'N/A',
ALTER COLUMN "investmentFreedom" DROP NOT NULL,
ALTER COLUMN "investmentFreedom" SET DEFAULT 'N/A',
ALTER COLUMN "financialFreedom" DROP NOT NULL,
ALTER COLUMN "financialFreedom" SET DEFAULT 'N/A',
ALTER COLUMN "population" DROP NOT NULL,
ALTER COLUMN "population" SET DEFAULT 'N/A',
ALTER COLUMN "pbiPerCapita" DROP NOT NULL,
ALTER COLUMN "pbiPerCapita" SET DEFAULT 'N/A',
ALTER COLUMN "unemployment" DROP NOT NULL,
ALTER COLUMN "unemployment" SET DEFAULT 'N/A',
ALTER COLUMN "inflation" DROP NOT NULL,
ALTER COLUMN "inflation" SET DEFAULT 'N/A',
ALTER COLUMN "publicDebt" DROP NOT NULL,
ALTER COLUMN "publicDebt" SET DEFAULT 'N/A';
