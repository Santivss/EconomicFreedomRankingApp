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

          <span className="principalItem__stats-description-title">
            Descripción:
            <span className="principalItem__stats-description">
              {firstCountry?.description}
            </span>
          </span>

          <div className="principalItem__stats-container">
            <span className="principalItem__description-title">
              Estadísticas
            </span>
            <span className="principalItem__description">
              <span className="principalItem__desc-title">
                Derechos de propiedad:
              </span>
              {firstCountry?.propertyRights}%
            </span>
            <span className="principalItem__description">
              <span className="principalItem__desc-title">
                Efectividad Judicia:l
              </span>
              {firstCountry?.judicialEffectivness}%
            </span>
            <span className="principalItem__description">
              <span className="principalItem__desc-title">
                Integridad del gobierno:
              </span>
              {firstCountry?.governmentIntegrity}%
            </span>

            <span className="principalItem__description">
              <span className="principalItem__desc-title">
                Libertad empresarial:
              </span>
              {firstCountry?.businessFreedom}%
            </span>
            <span className="principalItem__description">
              <span className="principalItem__desc-title">
                Libertad Laboral:
              </span>
              {firstCountry?.laborFreedom}%
            </span>
            <span className="principalItem__description">
              <span className="principalItem__desc-title">
                Libertad monetaria:
              </span>
              {firstCountry?.monetaryFreedom}%
            </span>

            <span className="principalItem__description">
              <span className="principalItem__desc-title">Carga fiscal:</span>
              {firstCountry?.taxBurden}%
            </span>

            <span className="principalItem__description">
              <span className="principalItem__desc-title">Salud fiscal:</span>
              {firstCountry?.fiscalHealth}%
            </span>
            <span className="principalItem__description">
              <span className="principalItem__desc-title">
                Libertad de comercio:
              </span>
              {firstCountry?.tradeFreedom}%
            </span>
            <span className="principalItem__description">
              <span className="principalItem__desc-title">
                Libertad de inversión:
              </span>
              {firstCountry?.investmentFreedom}%
            </span>
            <span className="principalItem__description">
              <span className="principalItem__desc-title">
                Libertad financiera:
              </span>
              {firstCountry?.financialFreedom}%
            </span>
            <span className="principalItem__description">
              <span className="principalItem__desc-title">Inflación:</span>
              {firstCountry?.inflation}%
            </span>
            <span className="principalItem__description">
              <span className="principalItem__desc-title">Deuda Pública:</span>
              {firstCountry?.publicDebt}%
            </span>
            <span className="principalItem__description">
              <span className="principalItem__desc-title">Desempleo:</span>
              {firstCountry?.unemployment}%
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default PrincipalItem;
