import React from "react";

import Bestandteile from "../../images/Bestandteile.jpeg";
import Umsetzung from "../../images/Umsetzung.jpeg";

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

const CardsDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #115b4c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 1rem 3rem rgba(47, 47, 51, 0.3);
  margin: 1.7rem 0.2rem;

  &:nth-of-type(1) {
    margin-top: 3rem;
  }

  &:nth-of-type(2) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
`;

const Text = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3,
  ul {
    width: 90%;
    text-align: left;
  }

  li {
    font-size: 1.5rem;
    font-weight: 300;
    color: whitesmoke;
  }

  @media screen and (min-width: 768px) {
    height: 400px;
  }

  @media screen and (min-width: 991px) {
    height: 330px;
  }

  @media screen and (min-width: 1180px) {
    li {
      font-size: 1.8rem;
    }
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  color: whitesmoke;
  margin-top: 2.5rem;
  text-align: left;
  margin-bottom: 0;
`;

const Image = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Para = styled.p`
  text-align: center;
  font-weight: 300;
  color: #115b4c;
  margin-bottom: 0;

  &:nth-of-type(2) {
    margin-bottom: 3rem;
  }
`;

const KlimaschutzOne = () => {
  return (
    <Div>
      <DivTitle>
        <Italic>Klimaschutz- und Klimaanpassungskonzept</Italic>
      </DivTitle>
      <CardsDiv>
        <Container>
          <Image src={Bestandteile} alt="" />
          <Text>
            <CardTitle>Bestandteile eines Klimaschutzkonzepts</CardTitle>
            <ul>
              <li>Ausgangssituation</li>
              <li>Leitbild und Ziele (hier wollen wir hin)</li>
              <li>Strategie (so wollen wir die Ziele erreichen)</li>
              <li>Leitprojekte / Massnahmenkatalog (so fangen wir an)</li>
              <li>Akteure / Teilnehmer (Personal, Kunden, Lieferanten etc.)</li>
              <li>Kommunikationsstrategie</li>
              <li>Controlling</li>
              <li>Finanzierung</li>
              <li>Zeitplan</li>
            </ul>
          </Text>
        </Container>
        <Container>
          <Image src={Umsetzung} alt="" />
          <Text>
            <CardTitle>Umsetzung eines Klimaschutzkonzepts</CardTitle>
            <ul>
              <li>Verantwortliche Stellen bestimmen und Team bilden</li>
              <li>Aufnahme der IST-Situation</li>
              <li>Verbesserungspotenzial eruieren</li>
              <li>Massnahmen entwickeln</li>
              <li>Kennzahlen und Ziele definieren</li>
              <li>Erfolgskontrolle aufbauen</li>
              <li>Periodische Berichterstattung und Erfolgskontrolle</li>
            </ul>
          </Text>
        </Container>
      </CardsDiv>
      <Para>
        Ziel des Klimaschutzkonzepts ist eine <Italic>kontinuierliche</Italic>{" "}
        Verbesserung!
      </Para>
      <Para>
        Die Umsetzung und Steuerung liegt dabei in der Verantwortung der
        Geschäftsleitung.
      </Para>
    </Div>
  );
};

export default KlimaschutzOne;
