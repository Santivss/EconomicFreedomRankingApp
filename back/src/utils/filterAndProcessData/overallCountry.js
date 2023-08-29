const overallCountry = async (newPage) => {
  try {
    let statsObject = {};

    const overallCountry = await newPage.$("div.bottom");
    const overallScore = await newPage.$(
      "div.overall_score.left span.the_score"
    );

    if (overallScore) {
      const overallScoreText = await overallScore.textContent();
      statsObject.overallScore = overallScoreText;
    } else {
      console.log(
        `Hubo un problema con overallScore en OverallCountry: ${overallScore}`
      );
    }

    if (overallCountry) {
      const titleText = await overallCountry.textContent();
      const lines = titleText
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line !== "");

      // Filtrar los valores numéricos y eliminar valores null
      const statsCountry = lines
        .slice(1)
        .map((line) => {
          const matches = line.match(/[\d.]+/);
          return matches ? matches[0] : null;
        })
        .filter((value) => value !== null); // Eliminar valores null

      // Definir las propiedades y sus nombres
      const propertyNames = [
        "propertyRights",
        "judicialEffectiveness",
        "governmentIntegrity",
        "taxBurden",
        "governmentSpending",
        "fiscalHealth",
        "businessFreedom",
        "laborFreedom",
        "monetaryFreedom",
        "tradeFreedom",
        "investmentFreedom",
        "financialFreedom",
      ];

      // Crear el objeto con las propiedades y valores correspondientes

      statsCountry.forEach((value, index) => {
        const propertyName = propertyNames[index];
        statsObject[propertyName] = value;
      });
    }

    return statsObject;
  } catch (error) {
    console.log(`En overallCountry: ${error}`);
  }
};

export default overallCountry;
