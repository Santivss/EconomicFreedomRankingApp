import background from "./background.js";
import description from "./description.js";
import footerProcces from "./footerProcces.js";
import overallCountry from "./overallCountry.js";
import quickFacts from "./quickFacts.js";
import { prisma } from "../../db.js";
import titleExtract from "./titleExtract.js";

const filterAndProcessData = async (newPage) => {
  let message = "";
  try {
    const dataTitle = await titleExtract(newPage);
    const dataOverall = await overallCountry(newPage);
    const backgroundText = await background(newPage);
    const descritpionText = await description(newPage);
    const quickFactsText = await quickFacts(newPage);
    const footerText = await footerProcces(newPage);

    const convertToNumber = (value) => {
      const cleanedValue = value.toString().replace(/[^0-9.,]/g, "");
      const parsedValue = parseFloat(
        cleanedValue.replace(",", "").replace(".", ".")
      );

      if (!isNaN(parsedValue)) {
        return parsedValue;
      }

      return 0;
    };

    const pbiPerCapita = convertToNumber(quickFactsText.pbiPerCapita);
    const population = convertToNumber(quickFactsText.population);
    const unemployment = convertToNumber(quickFactsText.unemployment);
    const inflation = convertToNumber(quickFactsText.inflation);
    const publicDebt = convertToNumber(quickFactsText.publicDebt);

    const processedData = {
      title: dataTitle,
      overallScore: parseFloat(dataOverall.overallScore),
      propertyRights: parseFloat(dataOverall.propertyRights),
      population: population,
      pbiPerCapita: pbiPerCapita,
      unemployment: unemployment,
      inflation: inflation,
      publicDebt: publicDebt,
      judicialEffectivness: parseFloat(dataOverall.judicialEffectiveness),
      governmentIntegrity: parseFloat(dataOverall.governmentIntegrity),
      businessFreedom: parseFloat(dataOverall.businessFreedom),
      laborFreedom: parseFloat(dataOverall.laborFreedom),
      monetaryFreedom: parseFloat(dataOverall.monetaryFreedom),
      taxBurden: parseFloat(dataOverall.taxBurden),
      governmentSpending: parseFloat(dataOverall.governmentSpending),
      fiscalHealth: parseFloat(dataOverall.fiscalHealth),
      tradeFreedom: parseFloat(dataOverall.tradeFreedom),
      investmentFreedom: parseFloat(dataOverall.investmentFreedom),
      financialFreedom: parseFloat(dataOverall.financialFreedom),
      description: descritpionText,
      background: backgroundText,
      ruleOfLawDescription: footerText.ruleOfLaw,
      governmentSizeDescription: footerText.govermentSize,
      regulatoryEfficiencyDescription: footerText.regulatoryEfficiency,
      openMarketsDescription: footerText.openMarkets,
    };

    const countryExist = await prisma.CountryData.findFirst({
      where: {
        title: dataTitle,
      },
    });

    if (countryExist) {
      const countryUpdateData = await prisma.CountryData.update({
        where: {
          title: dataTitle,
        },
        data: processedData,
      });

      if (countryUpdateData) {
        return (message = `Se actualizó ${countryUpdateData.title}`);
      }
    } else {
      const createCountryData = await prisma.CountryData.create({
        data: processedData,
      });

      if (createCountryData) {
        return (message = `Se creó ${createCountryData.title}`);
      } else {
        return (message = `No pudo crearse ${createCountryData.title}`);
      }
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    await prisma.$disconnect();
  }

  return message;
};

export default filterAndProcessData;
