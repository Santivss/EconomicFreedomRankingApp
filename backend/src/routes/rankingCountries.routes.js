import { Router } from "express";
import { prisma } from "../db.js";

const routes = Router();

routes.get("/simpleDataCountry", async (req, res) => {
  try {
    const countries = await prisma.CountryData.findMany();

    const sortedCountries = countries.slice().sort((a, b) => {
      return b.overallScore - a.overallScore;
    });

    const simpleDataCountry = [];

    for (let i = 0; i < sortedCountries.length; i++) {
      const country = sortedCountries[i];
      simpleDataCountry.push({
        id: country.id,
        title: country.title,
        description: country.description,
        population: country.population,
        inflation: country.inflation,
        updatedAt: country.updatedAt,
        overallScore: country.overallScore,
        taxBurden: country.taxBurden,
        pbiPerCapita: country.pbiPerCapita,
        pos: i + 1,
      });
    }

    res.status(200).json({
      message: "Success",
      simpleDataCountry,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "An error occurred",
    });
  }
});

routes.get("/individualCountry:elementSelected", async (req, res) => {
  try {
    const countrySelected = req.params.elementSelected;

    const allCountries = await prisma.CountryData.findMany();

    if (allCountries.length > 0) {
      // Ordenar los países por overallScore en orden descendente
      const sortedCountries = allCountries.slice().sort((a, b) => {
        return b.overallScore - a.overallScore;
      });

      // Asignar posición según el orden
      sortedCountries.forEach((country, index) => {
        country.pos = index + 1;
      });

      const selectedCountryWithPosition = sortedCountries.find(
        (country) => country.title === countrySelected
      );

      if (selectedCountryWithPosition) {
        return res.status(200).json({
          message: "Success",
          selectedCountryWithPosition,
        });
      } else {
        return res.status(404).json({
          message: "Country not found in the sorted list",
        });
      }
    } else {
      return res.status(404).json({
        message: "No countries found in the database",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: error.message,
    });
  }
});

routes.get("/firstCountry:posCountry", async (req, res) => {
  try {
    const countryExist = await prisma.CountryData.findMany();

    if (countryExist.length > 0) {
      let highestScoreCountry = countryExist[0];

      for (let i = 1; i < countryExist.length; i++) {
        if (countryExist[i].overallScore > highestScoreCountry.overallScore) {
          highestScoreCountry = countryExist[i];
        }
      }

      if (highestScoreCountry) {
        res.status(200).json({
          message: "Success",
          highestScoreCountry,
        });
      } else {
        res.status(404).json({
          message: "No se encontró ningún país.",
        });
      }
    } else {
      res.status(404).json({
        message: "No hay países en la base de datos.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default routes;
