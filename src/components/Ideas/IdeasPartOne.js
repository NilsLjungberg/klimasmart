import React from "react";

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
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    margin-top: 10rem;
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
  margin-bottom: 3.5rem;
  font-weight: 300;
  color: #115b4c;
`;

const IdeasPartOne = () => {
  return (
    <Div>
      <DivTitle>
        <Italic>Ideen und Tipps</Italic>
      </DivTitle>
      <Para>
        Wesentliche Elemente für eine wettbewerbsfähige und klimaneutrale
        Wirtschaftsweise sind <Italic>Ressourceneffizienz</Italic> und eine{" "}
        <Italic>zirkuläre Wirtschaft.</Italic>
        <br />
        <br />
        Der Begriff „zirkuläre Wirtschaft“ taucht immer häufiger in Zusammenhang
        mit einer klimaneutralen Wirtschaftsentwicklung auf, aber was bedeutet
        der Begriff und wie entsteht eine zirkuläre Wirtschaft? Eine wachsende
        Bevölkerung mit zunehmenden materiellen Ansprüchen führt dazu, dass
        Rohstoffe und Materialien immer knapper und teurer werden. Aus diesem
        Grund braucht es eine nachhaltige Entwicklung mit neuen
        ressourcenschonenden Wirtschaftsmodellen. Zirkuläre Wirtschaft ist ein
        wirtschaftliches System, welches auf geschlossenen Kreisläufen beruht
        und neue innovative Geschäftsmodelle für die Unternehmen eröffnet. In
        einer Kreislaufwirtschaft nehmen weder der Wert, noch die Qualität eines
        Rohstoffes nach Gebrauch ab. Dies im Gegensatz zum klassischen
        Recycling, bei dem in der nächsten Stufe immer minderwertige Produkte
        entstehen, welche schliesslich als Abfall entsorgt werden. Die Lösung
        liegt in einer vollständigen, wertverlustfreien Wiederverwertung. Das
        Problem besteht momentan darin, dass wir immer noch fest daran glauben,
        ein Gerät besitzen zu müssen, um es verwenden zu können. Es geht darum,
        clevere Materialflüsse zu entwickeln und ressourcenschonende
        Geschäftsmodelle sowie einen kollaborativen Konsum (Gegenstände teilen
        statt besitzen) zwischen den Menschen zu fördern. Das neue Unternehmen
        verkauft einen Service bzw. eine Dienstleistung und keine Produkte. Für
        viele Unternehmen wird es jetzt höchste Zeit, mehr zu tun.
        <br />
        <br />
        Sie brauchen eine Auslegeordnung zum Thema «Klimaschutz»? Für ein
        unverbindliches Gespräch stehen wir Ihnen jederzeit gerne zur Verfügung.
        Bitte, teilen Sie uns Ihre Koordinaten mit und wir werden uns mit Ihnen
        in Verbindung setzen.
      </Para>
    </Div>
  );
};

export default IdeasPartOne;
