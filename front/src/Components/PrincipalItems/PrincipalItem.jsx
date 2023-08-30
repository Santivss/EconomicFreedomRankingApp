import { useEffect, useState } from "react";
import "./PrincipalItem.css";
import { motion, AnimatePresence } from "framer-motion";
import lines_1 from "../../assets/shapes/lines_1.svg";
import axios from "axios";
import spinner_icon from "../../assets/uiIcons/spinner_icon.svg";

const PrincipalItem = ({ elementSelected }) => {
  const [firstCountry, setFirstCountry] = useState(null);
  const [requestStatus, setRequestStatus] = useState(false);

  useEffect(() => {
    setRequestStatus(true);
    axios
      .get(
        `https://economicfreedomranking-back.onrender.com/api/firstCountry${1}`
      )
      .then((res) => {
        setRequestStatus(false);
        setFirstCountry({
          ...res.data.highestScoreCountry,
          pos: 1,
        });
      })
      .catch((err) => {
        setRequestStatus(false);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setRequestStatus(true);
    if (elementSelected) {
      axios
        .get(
          `https://economicfreedomranking-back.onrender.com/api/individualCountry${elementSelected}`
        )
        .then((res) => {
          setRequestStatus(false);
          setFirstCountry(res.data.selectedCountryWithPosition);
        })
        .catch((err) => {
          setRequestStatus(false);
          console.log(err);
        });
    }
  }, [elementSelected]);

  console.log(firstCountry);

  return (
    <div className="principalItem__container">
      {requestStatus ? (
        <img src={spinner_icon} alt="spinner_icon" className="spinner__icon" />
      ) : (
        <>
          <h1 id="principalItem__titleId" className="principalItem__title">
            {firstCountry?.title}
            <span className="principalItem__rank-title">
              #{firstCountry?.pos}
            </span>
          </h1>
          <span className="principalItem__description">
            {firstCountry?.description}
          </span>
        </>
      )}
    </div>
  );
};

export default PrincipalItem;
