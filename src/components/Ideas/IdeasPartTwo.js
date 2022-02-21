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

const Para = styled.p`
  margin: 3rem;
  margin-bottom: 3.5rem;
  font-weight: 300;
  color: #115b4c;
`;

const IdeasPartTwo = () => {
  return (
    <Div>
      <DivTitle>
        <Italic>Graue Energie</Italic>
      </DivTitle>
      <Para>
        Die graue Energie eines Produktes ist{" "}
        <Italic>
          die benötigte Energie für Herstellung, Transport, Lagerung, Verkauf
          und Entsorgung.
        </Italic>{" "}
        Berücksichtigt werden auch alle Vorprodukte bis zur Rohstoffgewinnung,
        als auch der Energieeinsatz aller angewandten Produktionsprozesse. Je
        mehr graue Energie sich hinter einem Produkt verbirgt, umso grösser ist
        die Umweltbelastung. Denn die unsichtbare Energie verursacht
        Treibhausgase wie CO₂.{" "}
        <Italic>
          Zwei Drittel des gesamten Energieverbrauchs wird in Form von grauer
          Energie verbraucht.
        </Italic>{" "}
        Für ein Unternehmen bedeutet dies, dass er nicht nur den
        Energieverbrauch und die CO₂-Emissionen an den eigenen
        Produktionsstandort erfassen muss, sondern auch den Energieverbrauch und
        die CO₂-Emissionen für sämtliche Rohstoffe und Zwischenprodukte, um
        seine gesamten CO₂-Emissionen zu bestimmen.
      </Para>
    </Div>
  );
};

export default IdeasPartTwo;
