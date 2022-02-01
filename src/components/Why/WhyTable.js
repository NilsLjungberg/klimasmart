import React from "react";

import Modal from "../UI/Modal";

import styled from "styled-components";

const TableDiv = styled.div`
  height: 100%;
  margin: 0 4.5rem 1.5rem 4.5rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: #b6edc8;
  color: #115b4c;
  box-shadow: 0 1rem 3rem rgba(47, 47, 51, 0.3);
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;

  h3 {
    margin-top: 3rem;
    height: 5vh;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin: 2rem 0;
  }
`;

const SubTableDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const SubRow = styled.div`
  display: flex;
  flex-direction: column;

  h6 {
    margin-top: 2rem;
    font-size: 1.3rem;
  }

  p {
    font-size: 1.2rem;
    margin: 2rem 0;
  }
`;

const Para = styled.p`
  text-align: center;
  margin: 2.5rem 0;
  font-size: 1.2rem;
  color: white;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin-bottom: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 7px;
  border: none;
  background: #b6edc8;
  color: #115b4c;
  text-align: center;

  &:hover {
    cursor: pointer;
    background: #115b4c;
    color: #b6edc8;
  }
`;

const WhyTable = (props) => {
  return (
    <Modal>
      <Para>
        Tabelle: Kurzlebige Klima- und Luftschadstoffe – ihre Quellen und
        Wirkungsgebiete
      </Para>
      <TableDiv>
        <Row>
          <h3>Kurzlebige Klima- und Luftschadstoffe </h3>
          <p>Russ (BC)</p>
          <p>Methan (CH4)</p>
          <p>Bodennahes Ozon (O3)</p>
        </Row>
        <Row>
          <h3>Anthropogene Quellen</h3>
          <p>Dieselmotoren, Industrie, Holzfeuerungen</p>
          <p>Landwirtschaft, Kläranlagen, Deponien etc.</p>
          <p>Verkehr, Industrie, Farb-/ Lösemittel-gebrauch</p>
        </Row>
        <Row>
          <h3>Verweildauer in der Atmosphäre</h3>
          <p>einige Tage</p>
          <p>ca. 12 Jahre</p>
          <p>einige Wochen</p>
        </Row>
        <Row>
          <h3>Einfluss</h3>
          <SubTableDiv>
            <SubRow>
              <p>++</p>
              <p>+</p>
              <p>++</p>
              <h6>Lokal</h6>
            </SubRow>
            <SubRow>
              <p>++</p>
              <p>+</p>
              <p>++</p>
              <h6>Regional</h6>
            </SubRow>
            <SubRow>
              <p>+</p>
              <p>++</p>
              <p>+</p>
              <h6>Global</h6>
            </SubRow>
          </SubTableDiv>
        </Row>
      </TableDiv>
      <ButtonDiv>
        <Button onClick={props.onHideTable}>Schliessen</Button>
      </ButtonDiv>
    </Modal>
  );
};

export default WhyTable;
