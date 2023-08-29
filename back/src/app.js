import express from "express";
import countriesRanking from "./routes/rankingCountries.routes.js";
import requestDataWeb from "./utils/requestDataWeb.js";
import cors from "cors";

const app = express();

const SCRAPING_INTERVAL = process.env.SCRAPING_INTERVAL || 604800000;

setInterval(() => {
  try {
    requestDataWeb();
  } catch (error) {
    console.error("Error:", error);
  }
}, SCRAPING_INTERVAL);

app.use(cors());

app.use("/api", countriesRanking);

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
