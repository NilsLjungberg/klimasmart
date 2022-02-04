import React from "react";

import { NavLink } from "react-router-dom";

import { FirstDiv, Div, Info, Copyright } from "./FooterBody.styles";

const FooterBody = () => {
  const clickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <FirstDiv>
      <Div>
        <Info>
          <h3>klimasmart</h3>
          <a href={"https://environ.ch"} target="_blank" rel="noreferrer">
            DOL Environmental Engineering & Consulting
          </a>
          <p>Oberer Graben 22</p>
          <p>CH - 9000 St. Gallen</p>
          <p>Tel. +41-71-230-30-20</p>
          <p>info@environ.ch</p>
        </Info>
        <Info>
          <h3>Platform</h3>
          <p>
            <NavLink onClick={clickHandler} to="/warum">
              Warum klimasmart
            </NavLink>
          </p>
          <p>
            <NavLink onClick={clickHandler} to="/klimaschutz">
              Klimaschutzkonzept
            </NavLink>
          </p>
          <p>
            <NavLink onClick={clickHandler} to="/ideen">
              Ideen und Tipps
            </NavLink>
          </p>
          <p>
            <NavLink onClick={clickHandler} to="/aqi">
              Air Quality Index
            </NavLink>
          </p>
        </Info>
        <Info>
          <h3>Legal</h3>
          <p>
            <NavLink onClick={clickHandler} to="/legal">
              Rechtliche Hinweise
            </NavLink>
          </p>
        </Info>
      </Div>
      <Copyright>
        <p>&#169; 2022 - klimasmart</p>
      </Copyright>
    </FirstDiv>
  );
};

export default FooterBody;
