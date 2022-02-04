import React, { useState, useEffect, useCallback } from "react";

import Loader from "./Loader";

import AirQualityRegion from "./AirQualityRegion";

import styled from "styled-components";

const Para = styled.p`
  height: 25vh;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

      if (response.status !== 200) {
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
      {!isLoading && Object.keys(airQuality).length > 0 && (
        <AirQualityRegion airQuality={airQuality} />
      )}
      {!isLoading && Object.keys(airQuality).length === 0 && error && (
        <Para>{error}</Para>
      )}
      {isLoading && (
        <Para>
          <Loader />
        </Para>
      )}
    </>
  );
};

export default Luftquality;
