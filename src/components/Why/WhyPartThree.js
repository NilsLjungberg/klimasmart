import React from "react";

import { NavLink } from "react-router-dom";

import ClimateAndAir from "../../images/climateandair.jpeg";

import styled from "styled-components";

const Div = styled.div`
  height: 100%;
  width: 100%;
  font-size: 1.8rem;
  background: rgba(210, 245, 233, 0.432);
  display: flex;
  flex-direction: column;
  line-height: 2.5rem;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 991px) {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  line-height: 3.5rem;
  font-weight: bolder;
  margin-bottom: 1rem;
  text-align: left;
  margin: 0 3rem;
  margin-top: 3rem;

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

const ItemLink = styled(NavLink)`
  font-style: italic;
  font-weight: bold;
  color: #115b4c;
`;

const Img = styled.img`
  margin: 3rem;
  border-radius: 10px;
  width: 310px;
  height: 180px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 260px;
  }

  @media screen and (min-width: 1180px) {
    width: 470px;
    height: 300px;
  }
`;

const Para = styled.p`
  margin: 0 3rem;
  font-weight: 300;
  color: #115b4c;
  margin-bottom: 3rem;

  @media screen and (min-width: 991px) {
    margin-top: 3rem;
  }
`;

const WhyPartThree = () => {
  const scrollToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Div>
      <Title>
        <Italic>Ökologische</Italic> Herausforderungen
      </Title>
      <FlexDiv>
        <Img src={ClimateAndAir} alt="climate and air quality" />
        <Para>
          Eine{" "}
          <Italic>
            Verringerung der Klimaerwärmung und eine Verbesserung der{" "}
            <ItemLink onClick={scrollToTopHandler} to="/aqi">
              Luftqualität
            </ItemLink>
          </Italic>{" "}
          sind momentan zwei der dringendsten ökologischen Herausforderungen.
          Als Folge menschlicher Aktivitäten steigt die Konzentration von
          Treibhausgasen in der Atmosphäre zurzeit stetig an, das Klima heizt
          sich daher kontinuierlich auf. Folgen dieser vom Menschen verursachten
          Klimaveränderung sind v. a. eine Häufung extremer Wetterereignisse wie
          Dürre, Hagel, Stürme, Waldbrände und Überschwemmungen, das
          fortschreitende Abschmelzen der Pole sowie der Anstieg des
          Meeresspiegels und alle Folgewirkungen wie Artensterben,
          Ernteausfälle, Verlust von Siedlungsraum usw. Die Schadstoffe Russ,
          Ozon und Methan besitzen sowohl ein Klimaerwärmungs- als auch ein
          Luftschadstoffpotenzial. Sie haben eine Lebensdauer von einigen
          Stunden bis etwa 12 Jahren in der Atmosphäre und werden daher als
          kurzlebige Klimaschadstoffe (SLCPs, Short Lived Climate Pollutants)
          genannt. Im Gegensatz zu Kohlendioxid (CO₂), das in der Atmosphäre
          sehr langlebig ist, kann durch die Reduktion der SLCP-Emissionen rasch
          Beiträge zur Bremsung der Klimaerwärmung und zur Verbesserung der
          Luftqualität auf regionaler Ebene geleistet werden.{" "}
        </Para>
      </FlexDiv>
    </Div>
  );
};

export default WhyPartThree;
