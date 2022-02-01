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

const FlexDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 3rem;

  @media screen and (min-width: 991px) {
    flex-direction: row;
  }
`;

const ParaDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 991px) {
    width: 100%;
    margin-left: 3rem;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  background: #b6edc8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 0 0.3rem 0.7rem rgba(47, 47, 51, 0.3);
  margin: 3rem 0;

  @media screen and (min-width: 991px) {
    width: 450px;
    margin-top: 2.5rem;
  }
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #115b4c;
  margin-left: 5rem;
  margin-bottom: 2.5rem;

  h3,
  p,
  ul {
    width: 90%;
    text-align: left;
  }

  p,
  li {
    font-weight: 300;
  }

  li {
    font-size: 1.5rem;
    text-align: left;
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  color: #115b4c;
  margin-top: 2.5rem;
  text-align: left;
  margin-bottom: 0;
`;

const Para = styled.p`
  text-align: left;
  font-weight: 300;
  color: #115b4c;
  margin-bottom: 2rem;

  &:nth-of-type(3) {
    margin-bottom: 3.5rem;
  }
`;

const KlimaschutzTwo = () => {
  return (
    <Div>
      <DivTitle>
        <Italic>Tools und Standards</Italic> für die Umsetzung eines
        Klimaschutzkonzepts
      </DivTitle>
      <FlexDiv>
        <Card>
          <Text>
            <CardTitle>Standards und Normen</CardTitle>
            <p>
              Verwenden Sie als Grundlage für die Klimaschutzarbeit bekannte
              Standards und Normen:
            </p>
            <li>GRI</li>
            <li>EU Taxonomie</li>
            <li>SFDR</li>
            <li>UN SDG's</li>
            <li>ISO 14000 & 26000</li>
            <li>TCFD</li>
            <li>CDP</li>
            <li>UN Global Compact</li>
            <li>GHG</li>
          </Text>
        </Card>
        <ParaDiv>
          <Para>
            <Italic>GRI ist ein Rahmenwerk,</Italic> das von Organisationen
            angewendet wird, um Stakeholder strukturell über ihren
            Nachhaltigkeitsansatz zu informieren und systematisch
            sicherzustellen, dass er alle Bereiche abdeckt, die in den Bereich
            der unternehmerischen Nachhaltigkeit fallen. GRI ist einer der am
            häufigsten angewandten Standards bei mittelständischen und großen
            Unternehmen weltweit. Die aktualisierte Version von 2021 steht im
            Einklang mit OECD, ICGN, Due Diligence sowie den UN-Leitprinzipien
            für Wirtschaft und Menschenrechte. Wenn die kommende EU-Richtlinie
            CSRD in Kraft tritt, wird GRI ein relevanter Berichtsrahmen sein,
            der mehrere der Richtlinienanforderungen widerspiegelt. Die
            Zusammenarbeit mit GRI wird einen reibungsloseren Übergang während
            des Berichtszeitraums 2023 (einschließlich Daten für 2022)
            ermöglichen.
          </Para>
          <Para>
            Der Zweck der <Italic>EU-Taxonomie</Italic> besteht darin, den
            Prozess der Identifizierung und des Vergleichs umweltverträglicher
            Investitionen durch ein für die gesamte EU gemeinsames
            Klassifizierungssystem zu erleichtern. Ziel ist es, starke Anreize
            für einen Übergang zu einer umweltverträglichen Wirtschaft zu
            schaffen. Grosse Körperschaften von öffentlichem Interesse (PIE) mit
            mehr als 500 Mitarbeitern unterliegen den Meldedaten gemäss den
            EU-Taxonomieartikeln. Unternehmen in diesem Segment müssen Daten
            gemäß der Taxonomie melden.
          </Para>
          <Para>
            <Italic>Das GHG Protocol</Italic> wird vom World Resource Institute
            in Zusammenarbeit mit dem World Business Council on Sustainable
            Development entwickelt. Es ist ein weltweit führender Standard, der
            von Unternehmen auf der ganzen Welt verwendet wird, um
            Treibhausgasemissionen zu messen, zu verwalten und zu melden.
            Direkte und indirekte Emissionen aus den Aktivitäten der
            Organisationen werden in drei verschiedene Bereiche unterteilt. Der
            Zweck der Scope-Aufteilung besteht darin, dass Unternehmen ihre
            Emissionen nach verschiedenen Wirkungsstufen verfolgen können, d. h.
            sichtbar machen, wo in der Wertschöpfungskette die Emissionen eines
            Unternehmens anfallen und Maßnahmen zur Reduzierung dieser
            Emissionen anstossen.
            <br />
            <br />
            <Italic>Scope 1:</Italic> Direkte Emissionen aus eigenen oder
            geleasten Aktivitäten. Unternehmen haben Zugriff auf Daten und die
            Möglichkeit, ihre Emissionen zu beeinflussen.
            <br />
            <br />
            <Italic>Scope 2:</Italic> Indirekte Emissionen bei vorgelagerten
            Aktivitäten (gekaufte Energie). Organisationen haben die
            Möglichkeit, ihren Einfluss durch aktive Entscheidungen zu
            reduzieren, z.B. Heizung, Kühlung und Energie.
            <br />
            <br />
            <Italic>Scope 3:</Italic> Indirekte Emissionen bei vor- und
            nachgelagerten Aktivitäten (ohne eingekaufte Energie). Unternehmen
            haben die Möglichkeit, die Reduzierung ihrer Emissionen durch
            umweltfreundlichere Verkehrsmittel, Anforderungen an die
            Lieferkette, die Wahl des Lieferanten sowie die Wahl von Materialien
            und Qualität zu beeinflussen. Der größte Teil der Emissionen eines
            Unternehmens stammt aus Scope 3, jedoch ist die Messung und
            Berichterstattung zu Scope 3 optional und Unternehmen müssen
            identifizieren, welche Kategorien für ihr Geschäft relevant sind.
            <br />
            <br />
            Die gesammelten Daten sind gemäss Scope 1, 2 und 3 in CO₂-Emissionen
            umzurechnen.
          </Para>
        </ParaDiv>
      </FlexDiv>
    </Div>
  );
};

export default KlimaschutzTwo;
