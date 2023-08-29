const description = async (newPage) => {
  try {
    const descriptionElement = await newPage.$("div.first-intro-paragraph p");
    const descriptionPart2Element = await newPage.$(
      "div.enconomic-freedom-snapshot p"
    );

    let description = "";

    if (descriptionElement) {
      const descriptionText = await descriptionElement.textContent();
      description += descriptionText;
    }

    if (descriptionPart2Element) {
      const descriptionPart2Text = await descriptionPart2Element.textContent();
      description += descriptionPart2Text;
    }
    return description;
  } catch (error) {
    console.log(`En description: ${error}`);
  }
};

export default description;
