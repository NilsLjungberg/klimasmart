import React from "react";

import "./AirQualityRegion.css";

const AirQualityRegion = (props) => {
  let containerColor = "green";
  let aqiColor = "aqi-green";
  let aqiInfo = "GUT";

  if (props.airQuality.aqi > 50) {
    containerColor = "yellow";
    aqiColor = "aqi-yellow";
    aqiInfo = "MODERAT";
  }

  if (props.airQuality.aqi > 100) {
    containerColor = "orange";
    aqiColor = "aqi-orange";
    aqiInfo = "UNGESUND FÜR SENSIBLE GRUPPEN";
  }

  if (props.airQuality.aqi > 150) {
    containerColor = "red";
    aqiColor = "aqi-red";
    aqiInfo = "UNGESUND";
  }

  if (props.airQuality.aqi > 200) {
    containerColor = "purple";
    aqiColor = "aqi-purple";
    aqiInfo = "SEHR UNGESUND";
  }

  return (
    <div className={`air-quality-container ${containerColor}`}>
      <div className="air-quality">
        <div className="air-quality-left">
          <h4>Momentane Luftqualität in</h4>
          <h2>
            {props.airQuality.city}, {props.airQuality.country}
          </h2>
        </div>
        <div className="air-quality-right">
          <p className="live">Live Air Quality Index</p>
          <div className={`aqi ${aqiColor}`}>
            <p>
              US AQI
              <span>{props.airQuality.aqi}</span>
            </p>
          </div>
        </div>
      </div>
      <p className="air-quality-info">{aqiInfo}</p>
      <p className="iqair">
        Für mehr Infos besuchen Sie <span>iqair.com</span>
      </p>
    </div>
  );
};

export default AirQualityRegion;
