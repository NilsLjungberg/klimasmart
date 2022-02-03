import React from "react";

import KlimasmartMac from "../../images/klimasmart_mac.png";

import styled from "styled-components";

const Div = styled.div`
  height: 100%;
  width: 100%;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  line-height: 2.5rem;
`;

const FlexDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 991px) {
    flex-direction: row;
    justify-content: space-between;
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

const Img = styled.img`
  margin: 3rem;
  width: 310px;
  height: 180px;

  @media screen and (min-width: 768px) {
    width: 510px;
    height: 300px;
    margin-right: 1.5rem;
  }
`;

const Para = styled.p`
  margin: 0 3rem 3rem 3rem;
  font-weight: 300;
  color: #115b4c;

  @media screen and (min-width: 991px) {
    margin-top: 3rem;
    margin-left: 1.5rem;
    width: 50%;
  }
`;

const WhyPartOne = () => {
  return (
    <>
      <Div>
        <Title>
          Warum <Italic>klimasmart?</Italic>
        </Title>
        <FlexDiv>
          <Img src={KlimasmartMac} alt="klimasmart home macbook" />
          <Para>
            Klimawandel und Klimaschutz sind hochaktuelle Themen. Wie können
            Unternehmen und Gemeinden eine zukunftsorientierte Klimastrategie
            entwickeln? Wir empfehlen Ihnen die Politik der kleinen und
            effizienten Schritte. Klimaschutz ist kein „Modethema", das gut für
            bessere Zeiten wäre. Sondern es ist ein Thema, das grundlegende
            Fragen an unsere Gestaltung von Zukunft und Gesellschaft stellt. Nur
            wer die Aspekte der begrenzten natürlichen Ressourcen, den Schutz
            der Umwelt und der sozialen Anforderungen in der Unternehmensplanung
            mit einbezieht, nimmt seine gesellschaftliche Verantwortung wahr und
            handelt nachhaltig. Ballonpionier Bertrand Piccard sagt{" "}
            <span style={{ fontStyle: "italic" }}>
              „dass erneuerbare Energien eine wunderbare Chance für die Schweiz
              sind“.
            </span>{" "}
            Eine Chance, auch wirtschaftlich wieder eine Führungsrolle in der
            Welt einzunehmen.{" "}
            <span style={{ fontStyle: "italic" }}>
              „Warum sich also kein ehrgeiziges Ziel setzen?"
            </span>{" "}
            Unternehmen und Gemeinden stehen heute vor der Herausforderung,
            Klimastrategien in konkretes und glaubwürdiges Handeln umzusetzen.{" "}
          </Para>
        </FlexDiv>
      </Div>
    </>
  );
};

export default WhyPartOne;
