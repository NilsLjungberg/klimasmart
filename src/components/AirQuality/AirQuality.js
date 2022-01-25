import React, { useState, useEffect, useCallback } from "react";

import AirQualityRegion from "./AirQualityRegion";

import styled from "styled-components";

const Para = styled.p`
  height: 25vh;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  letter-spacing: 0.2rem;
`;

const Luftquality = () => {
  const [airQuality, setAirQuality] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAirQualityHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.airvisual.com/v2/nearest_city?key=bac20422-8237-4735-9206-933abccf2398"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json();

      const transformedData = {
        country: result.data.country,
        city: result.data.city,
        aqi: result.data.current.pollution.aqius,
      };
      setAirQuality(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchAirQualityHandler();
  }, [fetchAirQualityHandler]);

  return (
    <>
      {!isLoading && <AirQualityRegion airQuality={airQuality} />}
      {!isLoading && error && <Para>{error}</Para>}
      {isLoading && <Para>Loading...</Para>}
    </>
  );
};

export default Luftquality;
