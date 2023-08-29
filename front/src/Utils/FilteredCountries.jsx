const FilteredCountries = (countriesData, activeCategory) => {
  if (!countriesData) {
    return [];
  }

  switch (activeCategory.categoryName) {
    case 0:
      return PosFiltered(countriesData, activeCategory.state);
    case 1:
      return PaisFiltered(countriesData, activeCategory.state);
    case 2:
      return PBIFiltered(countriesData, activeCategory.state);
    case 3:
      return HabitantesFiltered(countriesData, activeCategory.state);
    case 4:
      return CargaFiscalFiltered(countriesData, activeCategory.state);
    case 5:
      return InflacionFiltered(countriesData, activeCategory.state);
    default:
      return [];
  }
};

const PosFiltered = (countriesData, ascending) => {
  const sortedCountries = countriesData.slice().sort((a, b) => {
    if (ascending) {
      return a.pos - b.pos;
    } else {
      return b.pos - a.pos;
    }
  });
  return sortedCountries;
};

const PaisFiltered = (countriesData, ascending) => {
  const sortedCountries = countriesData.slice().sort((a, b) => {
    const countryA = a.title.toLowerCase();
    const countryB = b.title.toLowerCase();

    if (ascending) {
      return countryA.localeCompare(countryB);
    } else {
      return countryB.localeCompare(countryA);
    }
  });

  return sortedCountries;
};

const PBIFiltered = (countriesData, ascending) => {
  const sortedCountries = countriesData.slice().sort((a, b) => {
    if (ascending) {
      return b.pbiPerCapita - a.pbiPerCapita;
    } else {
      return a.pbiPerCapita - b.pbiPerCapita;
    }
  });

  return sortedCountries;
};

const HabitantesFiltered = (countriesData, ascending) => {
  const sortedCountries = countriesData.slice().sort((a, b) => {
    if (ascending) {
      return b.population - a.population;
    } else {
      return a.population - b.population;
    }
  });

  return sortedCountries;
};

const CargaFiscalFiltered = (countriesData, ascending) => {
  const sortedCountries = countriesData.slice().sort((a, b) => {
    if (ascending) {
      return b.taxBurden - a.taxBurden;
    } else {
      return a.taxBurden - b.taxBurden;
    }
  });

  return sortedCountries;
};

const InflacionFiltered = (countriesData, ascending) => {
  const sortedCountries = countriesData.slice().sort((a, b) => {
    if (ascending) {
      return b.inflation - a.inflation;
    } else {
      return a.inflation - b.inflation;
    }
  });

  return sortedCountries;
};

export default FilteredCountries;
