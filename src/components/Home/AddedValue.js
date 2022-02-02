import React from "react";

import styled from "styled-components";

import { HiBadgeCheck, HiDocumentReport } from "react-icons/hi";
import { IoSearchCircleSharp } from "react-icons/io5";
import { GiKitchenScale } from "react-icons/gi";

const Section = styled.section`
  height: 100%;
  background: rgba(210, 245, 233, 0.432);
  font-size: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #115b4c;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

const TwoValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3rem;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    width: 40%;
  }

  @media screen and (min-width: 991px) {
    flex-direction: row;

    &:nth-of-type(1) {
      margin-right: 0rem;
    }

    &:nth-of-type(2) {
      margin-left: 0rem;
    }
  }
`;

const Value = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #b6edc8;

  p {
    margin-top: 3rem;
    font-size: 1.8rem;
    text-align: center;
    color: black;
    font-weight: 300;
    line-height: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    p {
      height: 150px;
    }
  }

  @media screen and (min-width: 991px) {
    justify-content: space-evenly;

    &:nth-of-type(1) {
      margin-right: 7rem;
    }

    &:nth-of-type(4) {
      margin-left: 7rem;
    }

    p {
      height: 175px;
    }
  }
`;

const AddedValue = () => {
  return (
    <Section>
      <TwoValue>
        <Value>
          <HiBadgeCheck />
          <p>
            Sorgen Sie für Kontrolle und erleichtern Sie die Überprüfung Ihres
            Betriebs dank vollständiger Datenrückverfolgung und -übersicht.
          </p>
        </Value>
        <Value>
          <HiDocumentReport />
          <p>
            Sparen Sie Zeit und fördern Sie Proaktivität durch automatisierte
            Datensammlung, -berechnung, -visualisierung und -reporting.
          </p>
        </Value>
      </TwoValue>
      <TwoValue>
        <Value>
          <IoSearchCircleSharp />
          <p>
            Datenstrukturierung gemäss eingebauten Standards und best practices
            in der Nachhaltigkeit.
          </p>
        </Value>
        <Value>
          <GiKitchenScale />
          <p>
            Anpassung von aktuellen und zukünftigen Rahmenbedingungen durch
            skalierbare Maßstruktur.
          </p>
        </Value>
      </TwoValue>
    </Section>
  );
};

export default AddedValue;
