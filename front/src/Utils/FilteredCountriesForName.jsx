const FilteredCountriesForName = (data, nameFilter) => {
  if (!nameFilter) {
    return data;
  }

  const filteredData = data.filter((item) => {
    const titleLower = item.title.toLowerCase();
    const filterLower = nameFilter.toLowerCase();

    return titleLower.startsWith(filterLower);
  });

  return filteredData;
};

export default FilteredCountriesForName;
