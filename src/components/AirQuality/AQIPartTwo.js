import React from "react";

import Flags from "country-flag-icons/react/3x2";

import styled from "styled-components";
import "./AQIPartTwo.css";

const Div = styled.div`
  height: 100%;
  font-size: 1.8rem;
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2.5rem;
`;

const DivTitle = styled.h2`
  line-height: 3.5rem;
  font-weight: bolder;
  margin-bottom: 1rem;
  text-align: left;
  margin: 0 3rem;
  margin-top: 3rem;
`;

const ItalicRed = styled.span`
  font-style: italic;
  font-weight: bold;
  color: rgb(254, 155, 86);
`;

const Card = styled.div`
  height: 100%;
  width: 270px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0.3rem 0.7rem rgba(47, 47, 51, 0.3);
  margin: 3rem;
  margin-bottom: 2.5rem;
  padding: 1.5rem 0;

  &:nth-of-type(2) {
    margin-top: 0;
  }

  @media screen and (min-width: 768px) {
    &:nth-of-type(1) {
      margin-bottom: 4rem;
    }
  }
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: rgb(254, 155, 86);

  p {
    width: 90%;
    text-align: left;
    font-weight: 500;
  }
`;

const CountryDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Para = styled.p`
  text-align: center;
  font-weight: 300;
  color: rgb(254, 155, 86);
  margin: 2rem 2.5rem;
  width: 75%;

  a {
    font-weight: 500;
    color: #115b4c;
    font-style: italic;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;

  &:nth-of-type(2) {
    margin-bottom: 2rem;
  }
`;

const AQIPartTwo = () => {
  return (
    <Div>
      <DivTitle>
        10 Länder mit der{" "}
        <ItalicRed>weltweit höchsten Luftverschmutzung 2020</ItalicRed>
      </DivTitle>
      <FlexDiv>
        <Row>
          <Card>
            <Text>
              <CountryDiv>
                <Flags.BD title="Bangladesh" className="flags" />
                <p>Bangladesh</p>
              </CountryDiv>
              <CountryDiv>
                <Flags.PK title="Pakistan" className="flags" />
                <p>Pakistan</p>
              </CountryDiv>
              <CountryDiv>
                <Flags.IN title="Indien" className="flags" />
                <p>Indien</p>
              </CountryDiv>
              <CountryDiv>
                <Flags.MN title="Mongolei" className="flags" />
                <p>Mongolei</p>
              </CountryDiv>
              <CountryDiv>
                <Flags.AF title="Afghanistan" className="flags" />
                <p>Afghanistan</p>
              </CountryDiv>
              <CountryDiv>
                <Flags.OM title="Oman" className="flags" />
                <p>Oman</p>
              </CountryDiv>
              <CountryDiv>
                <Flags.QA title="Katar" className="flags" />
                <p>Katar</p>
              </CountryDiv>
              <CountryDiv>
                <Flags.KG title="Kirgistan" className="flags" />
                <p>Kirgistan</p>
              </CountryDiv>
              <CountryDiv>
                <Flags.ID title="Indonesien" className="flags" />
                <p>Indonesien</p>
              </CountryDiv>
              <CountryDiv>
                <Flags.BA title="Bosnien u.H." className="flags" />
                <p>Bosnien u. H.</p>
              </CountryDiv>
            </Text>
          </Card>
        </Row>
        <Row>
          <Card>
            <Para>
              Luftverschmutzung hat geschätzte{" "}
              <ItalicRed>7 Mio. Todesfälle pro Jahr</ItalicRed> verursacht!
            </Para>
          </Card>
          <Para>
            Für mehr Infos zu Luftqualität besuchen Sie{" "}
            <a href="iqair.com">iqair.com</a>
          </Para>
        </Row>
      </FlexDiv>
    </Div>
  );
};

export default AQIPartTwo;
