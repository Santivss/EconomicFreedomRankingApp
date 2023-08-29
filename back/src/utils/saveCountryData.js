import { chromium } from "playwright";
import filterAndProcessData from "./filterAndProcessData/filterAndProcessData.js";

const saveCountryData = async (page) => {
  let message = "";
  try {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const newPage = await context.newPage({
      userAgent:
        "MiProyectoDeWebScraping/1.0 (Extracción de datos para proyecto de muestra para mi portfolio)",
    });

    const mainDiv = await page.$(".content.left");
    const rankingElements = await mainDiv.$$(".rankings");

    for (const rankingElement of rankingElements) {
      const countryElements = await rankingElement.$$(".country");

      for (const countryElement of countryElements) {
        const linkElement = await countryElement.$("a");

        if (linkElement) {
          const linkHref = await linkElement.getAttribute("href");
          const completeLink = `https://www.heritage.org/index/${linkHref}`;

          const response = await newPage.goto(completeLink);

          if (response.ok()) {
            // Llamada a la función de filtrado y procesamiento
            const filteredData = await filterAndProcessData(newPage);

            if (filteredData) {
              message = "Los datos se crearon o actualizacon correctamente";
              console.log(filteredData);
            } else {
              console.log("No relevant data found inside the page.");
            }
          } else {
            console.log(`Failed to retrieve data from ${completeLink}`);
          }

          await delay(1000);
        } else {
          console.log("No 'a' element found inside the country element.");
        }
      }
    }

    await newPage.close();
    await browser.close();
    return message;
  } catch (error) {
    console.log(error.message);
  }
};

// Función para introducir un retraso (delay) en milisegundos
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default saveCountryData;
