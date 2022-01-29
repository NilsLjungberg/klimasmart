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

const Title = styled.h2`
  line-height: 3.5rem;
  font-weight: bolder;
  margin-bottom: 1rem;
  text-align: left;
  margin: 0 3rem 1.5rem 3rem;
  margin-top: 3rem;

  @media screen and (min-width: 1180px) {
    font-size: 4rem;
    line-height: 4.5rem;
  }
`;

const CardsDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3rem;
`;

const TwoCardsDiv = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-of-type(1) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    &:nth-of-type(1) {
      margin-top: 2.5rem;
    }
  }
`;

const Card = styled.div`
  width: 100%;
  height: 570px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 0 0.3rem 0.7rem rgba(47, 47, 51, 0.3);
  margin: 1.5rem 0;

  &:nth-of-type(1) {
    margin-top: 3rem;
  }

  @media screen and (min-width: 768px) {
    width: 48%;
    height: 680px;
    margin: 3rem 0;

    &:nth-of-type(1) {
      margin-top: 0;
    }

    &:nth-of-type(2) {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 991px) {
    height: 530px;
  }

  @media screen and (min-width: 1180px) {
    height: 460px;
  }
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #115b4c;

  h3,
  p {
    width: 90%;
    text-align: left;
  }

  p {
    font-weight: 300;
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  color: #115b4c;
  margin-top: 2.5rem;
  text-align: left;
  margin-bottom: 0;
`;

const Italic = styled.span`
  font-style: italic;
  font-weight: bold;
  color: #115b4c;
`;

const Para = styled.p`
  margin: 0 3rem 1.5rem 3rem;
  font-weight: 300;
  color: #115b4c;
`;

const List = styled.ul`
  margin: 0 3rem 3rem 0.7rem;
  font-weight: 300;
  color: #115b4c;
  font-size: 1.5rem;
  font-style: italic;

  @media screen and (min-width: 991px) {
    width: 70%;
    margin-left: 22.5%;
    font-size: 1.8rem;
  }
`;

const WhyPartFour = () => {
  return (
    <Div>
      <Title>
        <Italic>Treibhausgase</Italic>
      </Title>
      <CardsDiv>
        <TwoCardsDiv>
          <Card>
            <Text>
              <CardTitle>Kohlendioxid</CardTitle>
              <p>
                Kohlenstoffdioxid (CO2) ist das wichtigste Treibhausgas. Trotz
                der geringen Konzentration ist CO2 für das Leben auf der Erde in
                vielerlei Hinsicht von elementarer Bedeutung: Pflanzen nehmen
                das für sie lebensnotwendige Spurengas auf und geben Sauerstoff
                ab (Photosynthese). Als Treibhausgas beeinflusst CO2 durch den
                Treibhauseffekt das Klima der Erde und durch seine Löslichkeit
                in Wasser den pH-Wert der Ozeane wesentlich. CO2 entsteht durch
                die Verbrennung von fossilen Brennstoffe. Fossile Energieträger
                sind die Hauptquelle von menschengemachten
                Treibhausgasemissionen und damit der globalen Klimaerwärmung. Je
                nach Zusammensetzung und Reinheit des fossilen Brennstoffes
                entstehen auch andere chemische Verbindungen wie Stickstoffoxide
                und Russ sowie Feinstaub.
              </p>
            </Text>
          </Card>
          <Card>
            <Text>
              <CardTitle>Methan</CardTitle>
              <p>
                Methan (CH4) ist ein starkes Treibhausgas und ein Vorläufer von
                Ozon. Etwa 60% der Methanemissionen auf globaler Ebene kommen
                aus anthropogenen Aktivitäten (CCAC, 2014). Die Bereiche
                fossiler Brennstoffe, Abfalldeponien und die Landwirtschaft sind
                die Hauptverantwortliche für die CH4-Emissionen. Das absolute
                Treibhauspotential von Methan pro Einheit ist etwa 28-mal
                grösser als das von CO2, aber die Lebenszeit ist viel kürzer,
                etwa 12 Jahre (Myhre et al., 2013B).
              </p>
            </Text>
          </Card>
        </TwoCardsDiv>
        <TwoCardsDiv>
          <Card>
            <Text>
              <CardTitle>Ozon in der Troposphäre</CardTitle>
              <p>
                Ozon ist ein Oxidationsmittel, welches nicht direkt durch
                menschliche Aktivitäten emittiert wird. Ozon bildet sich in der
                Atmosphäre aufgrund der Emissionen von NOx, NMVOC und CO. Hohe
                Ozonbelastungen sind verantwortlich für 25.000 vorzeitige
                Todesfälle pro Jahr in Europa (IIASA, 2013) und haben erhebliche
                negative Auswirkungen auf die landwirtschaftlichen Erträge.
              </p>
            </Text>
          </Card>
          <Card>
            <Text>
              <CardTitle>Kohlenstoffhaltige und organische Aerosole</CardTitle>
              <p>
                Russ wird als ein Ergebnis einer unvollständigen Verbrennung
                emittiert. Die Quellen der Russ-Emissionen sind u.a. Verkehr,
                Feuerungen, Industrie und Landwirtschaft. Kohlenstoffhaltige
                Aerosole wurden historisch als Russ bezeichnet, heute werden
                zusätzlich die Begriffe "schwarz" oder "elementarer" Kohlenstoff
                (BC oder EC) verwendet. Russ wird häufig mit einem Anteil von
                organischen Kohlenstoffen oder NMVOCs zusammen emittiert, die
                letztlich zur Bildung von sekundärem organischen Kohlenstoff
                führen kann. Während Russ bzw. elementarer Kohlenstoff durch
                Absorption von Sonnenlicht zur Erwärmung beiträgt, neigen
                organische Aerosole dazu, Licht zu streuen und haben dadurch
                einen kühlenden Effekt.
              </p>
            </Text>
          </Card>
        </TwoCardsDiv>
      </CardsDiv>
      <Para>
        Viele Emissionsquellen emittieren einen Cocktail von Treibhausgasen und
        Luftschadstoffen. Russ, Ozon und Methan erzeugen nicht nur einen starken
        globalen Treibhauseffekt, sondern sie tragen auch signifikant zu den
        vielen vorzeitigen Todesfällen bei, die jedes Jahr mit Luftverschmutzung
        in Verbindung gebracht werden. Neben der zwingenden Reduktion der
        CO2-Emissionen, ist deshalb die rasche Verringerung von Russ, Methan und
        anderen Ozonschädlingen heute dringend geboten. Die positiven Wirkungen,
        die von solchen Minderungsmassnahmen ausgehen, sind wesentlich grösser
        als bislang angenommen. Sie können sofort und vor Ort durch lokale,
        regionale und nationale Umweltbehörden umgesetzt werden.{" "}
        <Italic>
          U.a. in den folgenden Bereichen lassen sich sowohl eine Verbesserung
          der Luftqualität als auch die Eindämmung der Klimaerwärmung erreichen:
        </Italic>
      </Para>
      <List>
        <li>Einsatz erneuerbarer Energien (Gebäude, Verkehr, Industrie)</li>
        <li>Ressourcenschonende Mobilität (öV, Langsamverkehr)</li>
        <li>
          Ressourcenschonende Beschaffung und Konsum (zirkuläre Wirtschaft)
        </li>
        <li>
          Ausrüstung dieselbetriebener Fahrzeuge und Maschinen mit
          Partikelfiltern
        </li>
        <li>
          Staubminderung bei emissionsintensiven Feuerungen, speziell kleine
          Holzfeuerungen
        </li>
        <li>Landwirtschaft</li>
        <li>Abgaswartungspflicht auch für Zweiräder</li>
      </List>
    </Div>
  );
};

export default WhyPartFour;
