const quickFacts = async (newPage) => {
  try {
    const quickFacts = await newPage.$("div.quickfacts.left ul");
    let quickFactsData = {};
    if (quickFacts) {
      const quickFactsHTML = await quickFacts.innerHTML();
      const data = {};

      const regex = /<li.*?id="(ctl00_cphContent_li\w+)".*?>(.*?)<\/li>/g;
      let match;

      while ((match = regex.exec(quickFactsHTML)) !== null) {
        const [, propName, propValue] = match;
        data[propName] = propValue.trim();
      }

      quickFactsData = {
        population: data["ctl00_cphContent_liPopulation"],
        pbiPerCapita: data["ctl00_cphContent_liPerCapita"],
        unemployment: data["ctl00_cphContent_liUnemployment"],
        inflation: data["ctl00_cphContent_liInflation"],
        publicDebt: data["ctl00_cphContent_liPublicDebtPercentGDP"],
      };
    }

    return quickFactsData;
  } catch (error) {
    console.log(`En quickFacts: ${error}`);
  }
};

export default quickFacts;
