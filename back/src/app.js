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

try {
  requestDataWeb();
} catch (error) {
  console.error("Error:", error);
}

app.use(cors());

app.use("/api", countriesRanking);
app.use("/santi", (req, res) => {
  res.status(200).json({
    message: "Hello",
  });
});

app.listen(3000, () => {
  console.log("Server is running");
});
