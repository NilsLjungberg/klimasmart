import React from "react";

import InfoImage from "../images/Info.jpeg";
import Klimakonzept from "../images/Klimakonzept.jpeg";
import Ideen from "../images/Ideen.jpeg";

import Button from "./UI/Button";

import styled from "styled-components";

const InfoParagraph = styled.section`
  height: 100%;
  background-color: white;
  color: rgb(47, 47, 51);
  font-size: 1.8rem;
  margin: 3rem;
  line-height: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    line-height: 3.5rem;
    font-weight: bolder;
    margin-bottom: 1rem;
    width: 100%;
    text-align: left;
  }

  p {
    text-align: left;
    font-weight: 300;
  }

  h3 {
    margin-bottom: 0.1rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media screen and (min-width: 991px) {
    h2,
    p {
      text-align: center;
      width: 70%;
    }
  }

  @media screen and (min-width: 1180px) {
    h2 {
      font-size: 4rem;
      line-height: 4.5rem;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 1rem 3rem rgba(47, 47, 51, 0.3);
  margin: 1.7rem 0.2rem;

  @media screen and (min-width: 768px) {
    width: 49%;
  }

  @media screen and (min-width: 991px) {
    width: 30%;
  }
`;

const Text = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3,
  p {
    width: 90%;
    text-align: left;
  }

  p {
    font-size: 1.8rem;
    font-weight: 300;
  }

  Button {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    height: 400px;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  color: #115b4c;
  margin-top: 2.5rem;
  text-align: left;
`;

const Italic = styled.span`
  font-style: italic;
  font-weight: bold;
  color: #115b4c;
`;

const Image = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const InfoCard = () => {
  return (
    <>
      <InfoParagraph>
        <h2>
          <Italic>Drei Pfeiler</Italic> zum nachhaltigen Erfolg ihres
          Unternehmens
        </h2>
        <p>
          <Italic>klimasmart</Italic> stellt sicher, dass Sie sowohl ihre
          Nachhaltigkeit in jedem Bereich optimieren, als auch ihre Transparenz
          nachvollziehbar erreichen.
        </p>
        <Container>
          <Image src={InfoImage} alt="" />
          <Text>
            <Title>Warum klimasmart?</Title>
            <p>
              Unternehmen stehen heute vor der Herausforderung, Klimastrategien
              in konkretes und glaubwürdiges Handeln umzusetzen.
              <br />
              <Italic>klimasmart</Italic> unterstützt Unternehmen und Gemeinden
              bei der Erfassung und Optimierung ihrer Klimasituation.
            </p>
            <Button>Mehr Info</Button>
          </Text>
        </Container>
        <Container>
          <Image src={Klimakonzept} alt="" />
          <Text>
            <Title>Klimaschutzkonzept</Title>
            <p>
              Klimaschutz bedeutet nicht Verzicht! Ziel ist es das langfristige
              Überleben des Unternehmens zu sichern, indem
              <Italic> Innovationen</Italic> für neue Produkte, Dienstleistungen
              und Technologien gefördert werden.
            </p>
            <Button>Mehr Info</Button>
          </Text>
        </Container>
        <Container>
          <Image src={Ideen} alt="" />
          <Text>
            <Title>Ideen und Tipps</Title>
            <p>
              Wesentliche Elemente für eine wettbewerbsfähige und klimaneutrale
              Wirtschaftsweise sind <Italic>Ressourceneffizienz</Italic> und
              eine <Italic>zirkuläre Wirtschaft.</Italic>
            </p>
            <Button>Mehr Info</Button>
          </Text>
        </Container>
      </InfoParagraph>
    </>
  );
};

export default InfoCard;
