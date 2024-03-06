import React, { useState } from "react";

const YourComponent = () => {
  // Assuming your data structure looks like this
  const countries = [
    {
      country: "India",
      value: "IN",
      cities: ["Delhi", "Uttrarakhand", "Uttarpradesh"],
    },
    {
      country: "Bangadesh",
      value: "BG",
      cities: ["Barma", "West Bengal"],
    },
    {
      country: "chaina",
      value: "CH",
      cities: ["Koria", "Russia", "Gaba"],
    },
  ];

  const [selectedData, setSelectedData] = useState({ country: "", cities: [] });

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    const selectedCountryData = countries.find(
      (item) => item.country === selectedCountry
    );

    setSelectedData({
      country: selectedCountry,
      cities: selectedCountryData ? selectedCountryData.cities : [],
    });
  };

  return (
    <div>
      <select
        id="countrySelect"
        onChange={handleCountryChange}
        value={selectedData.country}
      >
        <option value="">Select</option>
        {countries.map((item) => (
          <option key={item.value} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>

      <select id="citiesSelect" value={selectedData.cities}>
        {selectedData.cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YourComponent;
