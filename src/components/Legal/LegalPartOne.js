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
  font-style: italic;
  color: #115b4c;

  @media screen and (min-width: 768px) {
    margin-top: 10rem;
  }

  @media screen and (min-width: 1180px) {
    font-size: 4rem;
    line-height: 4.5rem;
  }
`;

const Para = styled.p`
  text-align: left;
  font-weight: 300;
  color: #115b4c;
  margin: 3rem;

  &:last-of-type {
    margin-bottom: 6rem;
  }
`;

const List = styled.ol`
  text-align: left;
  font-weight: 500;
  color: #115b4c;
  margin: 0 3rem;

  li {
    margin: 1.2rem 0;
  }
`;

const SubTitle = styled.p`
  color: #115b4c;
  margin: 0 3rem;
  font-weight: 500;
`;

const Italic = styled.span`
  font-style: italic;
  font-weight: 500;
  color: #115b4c;
`;

const LegalPartOne = () => {
  return (
    <Div>
      <DivTitle>Rechtliche Hinweise</DivTitle>
      <Para>
        Wichtige rechtliche Hinweise
        <br />
        <br />
        Bitte lesen Sie diese rechtlichen Hinweise genau durch, bevor Sie dieses
        Internetangebot benutzen. Mit dem Zugriff auf diese Website erklären
        Sie, dass Sie die folgenden Bestimmungen zu:
      </Para>
      <List>
        <li>Allgemeine Nutzungsbestimmungen</li>
        <li>Datenschutz</li>
        <li>Hilfe</li>
        <li>Änderungen und Ergänzungen sowie anwendbares Recht</li>
        <li>Diverses</li>
      </List>
      <Para>
        verstanden haben und anerkennen. Falls Sie mit diesen Bestimmungen nicht
        einverstanden sind, dürfen Sie dieses Internet-Angebot nicht benutzen.
      </Para>
      <SubTitle>Allgemeine Nutzungsbestimmungen</SubTitle>
      <Para>
        <Italic>Eigentum der Webseite Klimasmart.ch und Urheberrechte</Italic>
        <br />
        Die Webseite Klimasmart.ch sowie sämtliche Elemente (insbesondere
        Urheber- und andere Rechte) gehören entweder DOL Environmental
        Engineering & Consulting., dieser Organisation nahestehende Dritten oder
        werden mit Zustimmung des jeweiligen Eigentümers verwendet. Kein
        Material, das von DOL Environmental Engineering & Consulting bezogen
        wird oder von einer anderen Adresse, die von den vorgenannten Personen
        betrieben, lizenziert oder kontrolliert wird, darf anders als zu
        Browsingzwecken und bloss ausschliesslich zum persönlichen privaten
        (nicht kommerziellen) Heimgebrauch genutzt werden. Änderungen der
        Webseite Klimasmart.ch oder anderweitiger Gebrauch stellen eine
        Urheberrechtsverletzung dar.
      </Para>
      <SubTitle>Keine Zusicherung</SubTitle>
      <Para>
        DOL Environmental Engineering & Consulting verwendet alle Sorgfalt
        darauf, dass die auf der Webseite klimasmart.ch enthaltenen
        Informationen genau sind, können aber gegenüber dem Benutzer weder
        Zusicherungen betreffend Zuverlässigkeit oder Vollständigkeit machen.
        Meinungen oder sonstige Informationen auf der Webseite Klimasmart.ch
        können jederzeit ohne Ankündigung geändert werden.
      </Para>
      <SubTitle>Links</SubTitle>
      <Para>
        Gewisse Links verweisen auf Websites Dritter, über diese DOL
        Environmental Engineering & Consulting keine Kontrolle hat. Diese
        Websites werden von DOL Environmental Engineering & Consulting nicht
        überprüft. DOL Environmental Engineering & Consulting ist für den Inhalt
        und Funktionen derartiger Websites nicht verantwortlich. Verbindungen zu
        solchen Websites erfolgen auf eigenes Risiko des Benutzers.
      </Para>
      <SubTitle>Haftungsausschuss</SubTitle>
      <Para>
        DOL Environmental Engineering & Consulting stellt die Informationen auf
        der Webseite Klimasmart.ch "wie besehen" und ohne jegliche Gewähr zur
        Verfügung. Insbesondere kann keine Haftung bei unterbrochenem oder
        gestörtem Besuch der Webseite Klimasmart.ch übernommen werden, etwa
        infolge <Italic>(i)</Italic> ungeeigneter Soft- oder Hardware auf Seiten
        des Benutzers, <Italic>(ii)</Italic> unsachgemässer Handhabung durch den
        Benutzer, <Italic>(iii)</Italic> Unmöglichkeit, Zugang zum Internet zu
        erhalten, <Italic>(iv)</Italic> Leistungsbeschränkungen oder
        -einstellung auf Seiten Dritter (etwa Wartungsarbeiten durch
        Telecomanbieter), <Italic>(v)</Italic> von DOL Environmental Engineering
        & Consulting angekündigte Unterbrechungen zwecks Wartungsarbeiten oder
        Einführung neuer Technologien oder allgemein infolge höherer Gewalt.
        Ebenfalls kann keine Haftung übernommen werden, dass Fehler behoben
        werden oder dass die Klimasmart.ch-Website oder der jeweilige Server
        frei von Viren oder schädlichen Bestandteilen ist. Für Schäden wird
        jegliche Haftung abgelehnt.
      </Para>
      <SubTitle>Datenschutz</SubTitle>
      <Para>
        Die Sicherheit der Daten wird nach den üblichen Standards gewährleistet.
      </Para>
      <SubTitle>Hilfe</SubTitle>
      <Para>
        Wenn Sie Probleme oder Fragen bei der Nutzung der Webseite klimasmart.ch
        haben, so kontaktieren Sie uns via info@klimasmart.ch oder rufen Sie an
        unter +41-71-230-30-20.
      </Para>
      <SubTitle>Änderungen und Ergänzungen sowie anwendbares Recht</SubTitle>
      <Para>
        <Italic>Änderungen und Ergänzungen</Italic>
        <br />
        DOL Environmental Engineering & Consulting kann diese rechtlichen
        Hinweise jederzeit ganz oder teilweise ändern oder ergänzen. Die
        aktuellen rechtlichen Hinweise werden auf der Webseite klimasmart.ch
        publiziert. Es wird empfohlen, diese rechtlichen Hinweise regelmässig
        zur Kenntnis zu nehmen.
        <br />
        <br />
        <Italic>Anwendbares Recht</Italic>
        <br />
        Auf sämtliche Rechtsbeziehungen mit dem Benutzer ist, mit Ausnahme von
        Bestellungen des Benutzers, unter Ausschluss von Artikel 19 des
        schweizerischen Bundesgesetzes über das Internationale Privatrecht
        ausschliesslich schweizerisches Recht anwendbar.
      </Para>
    </Div>
  );
};

export default LegalPartOne;
