const footerProcces = async (newPage) => {
  try {
    const footerElements = await newPage.$$("div.content.left p");
    const selectedIndexes = [6, 10, 14, 18];
    const selectedTexts = [];
    let resultObject = {};

    for (const index of selectedIndexes) {
      if (index < footerElements.length) {
        const selectedElement = footerElements[index];
        const textContent = await selectedElement.textContent();
        selectedTexts.push(textContent);
      }
    }

    resultObject = {
      ruleOfLaw: selectedTexts[0],
      govermentSize: selectedTexts[1],
      regulatoryEfficiency: selectedTexts[2],
      openMarkets: selectedTexts[3],
    };

    return resultObject;
  } catch (error) {
    console.log(`En footerProcces: ${error}`);
  }
};

export default footerProcces;
