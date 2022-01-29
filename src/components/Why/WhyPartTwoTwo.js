import React from "react";

import Improvement from "../../images/Improvement.png";

import styled from "styled-components";

const Div = styled.div`
  height: 100%;
  width: 100%;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2.5rem;
`;

const Title = styled.h2`
  line-height: 3.5rem;
  font-weight: bolder;
  margin: 0 3rem;
  margin-top: 3rem;
  text-align: left;

  @media screen and (min-width: 991px) {
    width: 70%;
    text-align: center;
  }

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
  font-weight: 300;
  color: #115b4c;

  &:nth-of-type(2) {
    font-style: italic;
    text-align: center;
  }

  @media screen and (min-width: 991px) {
    text-align: center;
    width: 70%;
  }
`;

const Img = styled.img`
  margin: 0 3rem;
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 0.3rem 0.7rem rgba(47, 47, 51, 0.3);
`;

const WhyPartTwoTwo = () => {
  return (
    <Div>
      <Title>
        <Italic>Klima-Check</Italic> für Unternehmen und Gemeinden
      </Title>
      <Para>
        Warum sich mit Klimaschutz beschäftigen? Welchen Nutzen bringt das für
        Ihren Betrieb? Klimaschutz bedeutet nicht Verzicht! Ziel ist es, das
        langfristige Überleben des Unternehmens zu sichern, indem Innovationen
        für neue Produkte, Dienstleistungen und Technologien gefördert werden.
        Ein Klima-Check schafft die Voraussetzung dafür. Energie- und
        Materialflussanalysen gehören zu den ersten Schritten eines
        Klima-Checks. Mit Hilfe der systematischen Analyse von Prozesse und
        Verfahren sowie Lieferketten können Sie klimarelevante Bereiche
        eruieren.{" "}
      </Para>
      <Img src={Improvement} alt="kontinuierliche Verbesserung" />
      <Para>Klimaneutrales Wirtschaften als Wettbewerbsvorteil!</Para>
    </Div>
  );
};

export default WhyPartTwoTwo;
