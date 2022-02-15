import React from "react";

import styled from "styled-components";

const Div = styled.div`
  height: 100%;
  background: #115b4c;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Title = styled.h2`
  text-align: left;
  line-height: 3.5rem;
  font-size: 2.7rem;
  margin: 3rem;

  @media screen and (min-width: 991px) {
    width: 70%;
    margin-left: 4.5rem;
    margin-top: 4.5rem;
  }
`;

const Italic = styled.span`
  font-style: italic;
  font-weight: bold;
  color: #b6edc8;
`;

const FooterTitle = () => {
  return (
    <Div>
      <Title>
        Die <Italic>zukunftsorientierte Plattform</Italic> für Klimastrategien
      </Title>
    </Div>
  );
};

export default FooterTitle;
