import { useEffect, useState } from "react";
import "./PrincipalItem.css";
import { motion, AnimatePresence } from "framer-motion";
import lines_1 from "../../assets/shapes/lines_1.svg";
import axios from "axios";

const PrincipalItem = ({ elementSelected }) => {
  const [firstCountry, setFirstCountry] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://economicfreedomranking-back.onrender.com/api/firstCountry${1}`
      )
      .then((res) => {
        setFirstCountry({
          ...res.data.highestScoreCountry,
          pos: 1,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (elementSelected) {
      axios
        .get(
          `https://economicfreedomranking-back.onrender.com/api/individualCountry${elementSelected}`
        )
        .then((res) => {
          setFirstCountry(res.data.selectedCountryWithPosition);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [elementSelected]);

  return (
    <div className="principalItem__container">
      <h1 id="principalItem__titleId" className="principalItem__title">
        {firstCountry?.title}
      </h1>
      <span className="principalItem__rank-title">{firstCountry?.pos}</span>
      <span className="principalItem__description">
        {firstCountry?.description}
      </span>
      <img src={lines_1} alt="" className="principalItem__lines1" />
      {/* <img
        src="https://flagsapi.com/:country_code/:style/:size.png"
        alt=""
        className="flag"
      /> */}
    </div>
  );
};

export default PrincipalItem;
