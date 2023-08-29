import { chromium } from "playwright";
import saveMetadata from "./saveMetadata.js";
import saveCountryData from "./saveCountryData.js";

const requestDataWeb = async () => {
  try {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page = await context.newPage({
      userAgent:
        "MiProyectoDeWebScraping/1.0 (Extracción de datos para proyecto de muestra para mi portfolio)",
    });

    await page.goto("https://www.heritage.org/index/ranking");

    // Extraer el título de la página
    const pageTitle = await page.title();

    // Utilizar page.$$eval() para seleccionar todos los elementos <meta>
    const metadata = await page.$$eval(
      "meta",
      (elements) => {
        const result = {}; // Objeto para almacenar la metadata

        const propertyNameMappings = {
          // Aquí defines tus mapeos de propiedades
          "application-name": "applicationName",
          "msapplication-tooltip": "msApplicationTooltip",
          "og:image": "ogImage",
          description: "description",
          keywords: "keywords",
        };

        elements.forEach((element) => {
          const name = element.getAttribute("name");
          const property = element.getAttribute("property");
          const content = element.getAttribute("content");

          let key = name || property;
          if (key && propertyNameMappings[key]) {
            key = propertyNameMappings[key];
          }

          if (key) {
            if (content) {
              result[key] = content;
            } else {
              result[key] = null;
            }
          }
        });

        return result;
      },
      pageTitle
    );

    const saveMetadataResult = await saveMetadata(metadata, pageTitle);
    if (saveMetadataResult) {
      console.log(`La metada ${saveMetadataResult}`);
    }

    const saveCountryResult = await saveCountryData(page);

    if (saveCountryResult) {
      console.log(saveCountryResult);
    }

    await browser.close();
  } catch (error) {
    console.log(error.message);
  }
};

export default requestDataWeb;
