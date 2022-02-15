import React from "react";

import styled from "styled-components";

const Div = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(210, 245, 233, 0.432);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
  margin: 3rem 3rem 1rem 3rem;
  line-height: 3.5rem;
  font-size: 2.7rem;
  width: 100%;

  @media screen and (min-width: 991px) {
    width: 70%;
  }

  @media screen and (min-width: 1180px) {
    font-size: 4rem;
    line-height: 4.5rem;
  }
`;

const Para = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 300;
  margin: 1rem 3rem 1rem 3rem;
  line-height: 2.5rem;

  &:nth-of-type(2) {
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 991px) {
    width: 70%;
  }
`;

const Italic = styled.span`
  font-style: italic;
  font-weight: bold;
  color: #115b4c;
`;

const ContactFormTitle = () => {
  return (
    <Div>
      <Title>
        <Italic>Interessiert</Italic> mehr zu erfahren?
      </Title>
      <Para>
        Mit einem Fokus auf die Bedürfnisse und Ambitionen Ihres Unternehmens
        geben wir Ihnen gerne mehr <Italic>Auskunft zu klimasmart.</Italic>
      </Para>
      <Para>
        Bitte geben Sie unten Ihre Kontaktangaben an und wir werden uns in Kürze
        mit Ihnen in Verbindung setzen.
      </Para>
    </Div>
  );
};

export default ContactFormTitle;
