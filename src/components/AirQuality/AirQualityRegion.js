import React from "react";

import "./AirQualityRegion.css";

const AirQualityRegion = (props) => {
  let content = (
    <div className="air-quality-container green">
      <div className="air-quality">
        <div className="air-quality-left">
          <h4>Momentane Luftqualität in</h4>
          <h2>
            {props.airQuality.city}, {props.airQuality.country}
          </h2>
        </div>
        <div className="air-quality-right">
          <p className="live">Live Air Quality Index</p>
          <div className="aqi aqi-green">
            <p>
              US AQI
              <span>{props.airQuality.aqi}</span>
            </p>
          </div>
        </div>
      </div>
      <p className="air-quality-info">GUT</p>
      <p className="iqair">
        Für mehr Info besuchen Sie <span>iqair.com</span>
      </p>
    </div>
  );

  if (props.airQuality.aqi > 50) {
    content = (
      <div className="air-quality-container yellow">
        <div className="air-quality">
          <div className="air-quality-left">
            <h4>Momentane Luftqualität in</h4>
            <h2>
              {props.airQuality.city}, {props.airQuality.country}
            </h2>
          </div>
          <div className="air-quality-right">
            <p className="live">Live Air Quality Index</p>
            <div className="aqi aqi-yellow">
              <p>
                US AQI
                <span>{props.airQuality.aqi}</span>
              </p>
            </div>
          </div>
        </div>
        <p className="air-quality-info">MODERAT</p>
        <p className="iqair">
          Für mehr Info besuchen Sie <span>iqair.com</span>
        </p>
      </div>
    );
  }

  if (props.airQuality.aqi > 100) {
    content = (
      <div className="air-quality-container orange">
        <div className="air-quality">
          <div className="air-quality-left">
            <h4>Momentane Luftqualität in</h4>
            <h2>
              {props.airQuality.city}, {props.airQuality.country}
            </h2>
          </div>
          <div className="air-quality-right">
            <p className="live">Live Air Quality Index</p>
            <div className="aqi aqi-orange">
              <p>
                US AQI
                <span>{props.airQuality.aqi}</span>
              </p>
            </div>
          </div>
        </div>
        <p className="air-quality-info">UNGESUND FÜR SENSIBLE GRUPPEN</p>
        <p className="iqair">
          Für mehr Info besuchen Sie <span>iqair.com</span>
        </p>
      </div>
    );
  }

  if (props.airQuality.aqi > 150) {
    content = (
      <div className="air-quality-container red">
        <div className="air-quality">
          <div className="air-quality-left">
            <h4>Momentane Luftqualität in</h4>
            <h2>
              {props.airQuality.city}, {props.airQuality.country}
            </h2>
          </div>
          <div className="air-quality-right">
            <p className="live">Live Air Quality Index</p>
            <div className="aqi aqi-red">
              <p>
                US AQI
                <span>{props.airQuality.aqi}</span>
              </p>
            </div>
          </div>
        </div>
        <p className="air-quality-info">UNGESUND</p>
        <p className="iqair">
          Für mehr Info besuchen Sie <span>iqair.com</span>
        </p>
      </div>
    );
  }

  if (props.airQuality.aqi > 200) {
    content = (
      <div className="air-quality-container purple">
        <div className="air-quality">
          <div className="air-quality-left">
            <h4>Momentane Luftqualität in</h4>
            <h2>
              {props.airQuality.city}, {props.airQuality.country}
            </h2>
          </div>
          <div className="air-quality-right">
            <p className="live">Live Air Quality Index</p>
            <div className="aqi aqi-purple">
              <p>
                US AQI
                <span>{props.airQuality.aqi}</span>
              </p>
            </div>
          </div>
        </div>
        <p className="air-quality-info">SEHR UNGESUND</p>
        <p className="iqair">
          Für mehr Info besuchen Sie <span>iqair.com</span>
        </p>
      </div>
    );
  }

  return <>{content}</>;
};

export default AirQualityRegion;
