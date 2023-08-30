import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PrincipalItem from "./Components/PrincipalItems/PrincipalItem";
import Items from "./Components/Items/Items";
import shape_1 from "./assets/shapes/shape_1.svg";

const App = () => {
  const [countriesData, setCountriesData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://economicfreedomranking-back.onrender.com/api/simpleDataCountry"
      )
      .then((res) => {
        setCountriesData(res.data.simpleDataCountry);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [elementSelected, setElementSelected] = useState(null);

  const countrySelectedForRequest = (countrySelected) => {
    setElementSelected(countrySelected);
  };

  return (
    <div className="app__container">
      <PrincipalItem elementSelected={elementSelected} />
      <Items
        countriesData={countriesData}
        countrySelectedForRequest={countrySelectedForRequest}
      />
      <img src={shape_1} alt="shape_1" className="shape_1" />
      <img src={shape_1} alt="shape_1" className="shape_2" />
    </div>
  );
};

export default App;
