import React from "react";

import styled from "styled-components";

const Div = styled.div`
  height: 100%;
  width: 100%;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  line-height: 2.5rem;
`;

const DivTitle = styled.h2`
  line-height: 3.5rem;
  font-weight: bolder;
  margin-bottom: 1rem;
  text-align: left;
  margin: 0 3rem;
  margin-top: 14rem;

  @media screen and (min-width: 1180px) {
    font-size: 4rem;
    line-height: 4.5rem;
  }
`;

const Italic = styled.span`
  font-style: italic;
  font-weight: bold;
  color: #115b4c;
`;

const Para = styled.p`
  margin: 3rem;
  margin-bottom: 3.5rem;
  font-weight: 300;
  color: #115b4c;
`;

const AQIPartOne = () => {
  return (
    <Div>
      <DivTitle>
        <Italic>Air Quality Index</Italic>
      </DivTitle>
      <Para>
        Erfahren Sie mehr über die{" "}
        <Italic>aktuelle Luftqualität in Ihrer Region:</Italic>
      </Para>
    </Div>
  );
};

export default AQIPartOne;
