import React from "react";

import StufenSystem from "../../images/stufenweise_optimierung.png";

import styled from "styled-components";

const Div = styled.div`
  height: 100%;
  width: 100%;
  font-size: 1.8rem;
  background: rgba(210, 245, 233, 0.432);
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2.5rem;
`;

const Title = styled.h2`
  line-height: 3.5rem;
  font-weight: bolder;
  margin: 0 3rem;
  margin-top: 3rem;
  text-align: left;

  @media screen and (min-width: 991px) {
    width: 70%;
    text-align: center;
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
  margin-top: 2.5rem;
  font-weight: 300;
  color: #115b4c;

  @media screen and (min-width: 991px) {
    text-align: center;
    width: 70%;
  }
`;

const Img = styled.img`
  margin: 0 3rem 4.5rem 3rem;
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 0.3rem 0.7rem rgba(47, 47, 51, 0.3);
`;

const WhyPartTwo = () => {
  return (
    <Div>
      <Title>
        Eine abgestufte <Italic>Erfassung und Optimierung</Italic>
      </Title>
      <Para>
        Klimaneutrales Wirtschaften bedeutet effiziente Ressourcennutzung,
        umweltverträgliches Handeln und soziale Verantwortung. Klimaneutrales
        Wirtschaften schafft sowohl für die einzelnen Unternehmen als auch für
        die gesamte Gesellschaft und die künftigen Generationen eine
        zukunftsfähige Umwelt. Klimaneutrales Management steigert langfristig
        den Unternehmenswert, in dem es Innovationen, Mitarbeitermotivation,
        Risikoreduktion, Stakeholdervertrauen und Reputation fördert.
      </Para>
      <Img src={StufenSystem} alt="stufenweise optimierung" />
    </Div>
  );
};

export default WhyPartTwo;
