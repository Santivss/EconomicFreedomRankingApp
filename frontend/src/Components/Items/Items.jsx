import "./Items.css";
import triangle_icon from "../../assets/uiIcons/triangle_icon.svg";
import { useState } from "react";
import FilteredCountries from "../../Utils/FilteredCountries";
import FilteredCountriesForName from "../../Utils/FilteredCountriesForName";
import spinner_icon from "../../assets/uiIcons/spinner_icon.svg";
import { motion } from "framer-motion";

const Items = ({ countriesData, countrySelectedForRequest }) => {
  const originalDate = countriesData?.[0].updatedAt;
  const dateObject = new Date(originalDate);
  const [nameFilter, setNameFilter] = useState("");
  const countriesFilteredByName = FilteredCountriesForName(
    countriesData,
    nameFilter
  );
  const categories = [
    "Pos",
    "Nombre",
    "PBI",
    "Habitantes",
    "Carga Fiscal",
    "Inflación",
  ];

  const [activeCategory, setActiveCategory] = useState({
    categoryName: 0,
    state: true,
  });

  const [countrySelected, setCountrySelected] = useState(null);

  const handleCountrySelected = (selectedCountry) => {
    setCountrySelected(selectedCountry?.title);
  };

  const handleCategoryClick = (categoryName) => {
    setActiveCategory((prevActiveCategory) => {
      if (prevActiveCategory.categoryName === categoryName) {
        // Cambiar el estado al valor opuesto si es la misma categoría
        return {
          categoryName: categoryName,
          state: !prevActiveCategory.state,
        };
      } else {
        // Cambiar a la nueva categoría con estado en true
        return {
          categoryName: categoryName,
          state: true,
        };
      }
    });
  };

  const formattedDate = `${dateObject.getFullYear()}-${(
    dateObject.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${dateObject.getDate().toString().padStart(2, "0")}`;

  const filteredCategories = FilteredCountries(
    countriesFilteredByName,
    activeCategory
  );

  const buttonVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      className={`items__container ${countriesData ? "" : "spinner-active"}`}
    >
      {countriesData ? (
        <div className="itemsContainer__title">
          <input
            type="text"
            placeholder="Buscar"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <span className="itemsTitle__dateUpdate">
            Actualizado por última vez:
            <span className="itemsTitle__date">{formattedDate}</span>
          </span>
        </div>
      ) : null}
      {countriesData ? (
        <div className="countryList__container">
          <div className={`countryCategories__container`}>
            {categories.map((item, index) => (
              <span
                key={index}
                onClick={() => handleCategoryClick(index)}
                className={`category__item ${
                  activeCategory.categoryName === index ? "active" : ""
                } ${item === "Nombre" ? "left" : ""} ${
                  item === "PBI" ? "elementAlignLeft" : ""
                }
                ${item === "Habitantes" ? "elementAlignLeft" : ""}
                ${item === "Carga Fiscal" ? "elementAlignLeft" : ""}
                ${item === "Inflación" ? "elementAlignLeft" : ""}
                `}
              >
                {item}
                <img
                  src={triangle_icon}
                  alt="triangle_icon"
                  className={`countryCategory__triangle_icon ${
                    activeCategory.categoryName === index &&
                    activeCategory.state
                      ? "triangle_icon-active"
                      : ""
                  } ${
                    activeCategory.categoryName === index &&
                    !activeCategory.state
                      ? "triangle_icon-false"
                      : ""
                  }`}
                />
              </span>
            ))}
          </div>
          {filteredCategories.map((item, index) => {
            const formattedPbiPerCapita = parseFloat(item.pbiPerCapita)
              .toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 3,
              })
              .replace(/(\.\d*?[1-9])0+$/, "$1")
              .replace(/\.$/, "");

            return (
              <motion.button
                variants={buttonVariants} // Usar la variante de la animación de botones
                initial="hidden" // Iniciar desde el estado oculto
                animate="visible" // Anima hacia el estado visible
                transition={{ delay: index * 0.01, duration: 0.01 }}
                key={item.id}
                className={`countryListItem__container ${
                  countrySelected === item.title
                    ? "countrySelected__active"
                    : ""
                }`}
                onClick={() => {
                  countrySelectedForRequest(item.title),
                    handleCountrySelected(item);
                }}
              >
                <div className="decorativeLine"></div>
                <span className="countryListItem__rank-title">{item.pos}</span>
                <span className="countryListItem__country-title">
                  {item.title}
                </span>
                <span className="elementAlignLeft">
                  {formattedPbiPerCapita !== "0"
                    ? `$${formattedPbiPerCapita}`
                    : "N/A"}
                </span>
                <span>{item.population ? item.population : "N/A"} M</span>
                <span>{item.taxBurden ? `${item.taxBurden}%` : "N/A"}</span>
                <span>{item.inflation ? `${item.inflation}%` : "N/A"}</span>
              </motion.button>
            );
          })}
        </div>
      ) : (
        <img src={spinner_icon} alt="" className="spinnerIcon__items " />
      )}
    </div>
  );
};

export default Items;
