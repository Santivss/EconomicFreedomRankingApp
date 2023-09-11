-- CreateTable
CREATE TABLE "WebPageMetadata" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "metaKeywords" TEXT NOT NULL,
    "ogDescription" TEXT NOT NULL,
    "ogImage" TEXT NOT NULL,
    "metaRobots" TEXT NOT NULL,
    "imageAltText" TEXT NOT NULL,
    "sitemapUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WebPageMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountriesRanking" (
    "id" SERIAL NOT NULL,
    "rank" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "overall" INTEGER NOT NULL,
    "change" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CountriesRanking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountryData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "propertyRights" INTEGER NOT NULL,
    "judicialEffectivness" INTEGER NOT NULL,
    "governmentIntegrity" INTEGER NOT NULL,
    "businessFreedom" INTEGER NOT NULL,
    "laborFreedom" INTEGER NOT NULL,
    "monetaryFreedom" INTEGER NOT NULL,
    "taxBurden" INTEGER NOT NULL,
    "governmentSpending" INTEGER NOT NULL,
    "fiscalHealth" INTEGER NOT NULL,
    "tradeFreedom" INTEGER NOT NULL,
    "investmentFreedom" INTEGER NOT NULL,
    "financialFreedom" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "ruleOfLawDescription" TEXT NOT NULL,
    "governmentSizeDescription" TEXT NOT NULL,
    "regulatoryEfficiencyDescription" TEXT NOT NULL,
    "openMarketsDescription" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "pbiPerCapita" INTEGER NOT NULL,
    "unemployment" INTEGER NOT NULL,
    "inflation" INTEGER NOT NULL,
    "publicDebt" INTEGER NOT NULL,

    CONSTRAINT "CountryData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WebPageMetadata_url_key" ON "WebPageMetadata"("url");

-- CreateIndex
CREATE UNIQUE INDEX "CountriesRanking_rank_key" ON "CountriesRanking"("rank");

-- CreateIndex
CREATE UNIQUE INDEX "CountriesRanking_name_key" ON "CountriesRanking"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CountryData_name_key" ON "CountryData"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CountryData_ruleOfLawDescription_key" ON "CountryData"("ruleOfLawDescription");

-- CreateIndex
CREATE UNIQUE INDEX "CountryData_governmentSizeDescription_key" ON "CountryData"("governmentSizeDescription");

-- CreateIndex
CREATE UNIQUE INDEX "CountryData_regulatoryEfficiencyDescription_key" ON "CountryData"("regulatoryEfficiencyDescription");

-- CreateIndex
CREATE UNIQUE INDEX "CountryData_openMarketsDescription_key" ON "CountryData"("openMarketsDescription");
