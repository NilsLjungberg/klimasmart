import React from "react";

import { FirstDiv, Div, Info, Copyright } from "./FooterBody.styles";

const FooterBody = () => {
  return (
    <FirstDiv>
      <Div>
        <Info>
          <h3>klimasmart</h3>
          <p>DOL Environmental Engineering & Consulting</p>
          <p>Oberer Graben 22</p>
          <p>CH - 9000 St. Gallen</p>
          <p>Tel. +41-71-230-30-20</p>
          <p>info@environ.ch</p>
        </Info>
        <Info>
          <h3>Platform</h3>
          <p>
            <a href="/about">Warum klimasmart</a>
          </p>
          <p>
            <a href="/klimaschutz">Klimaschutzkonzept</a>
          </p>
          <p>
            <a href="/ideen">Ideen und Tipps</a>
          </p>
          <p>
            <a href="/aqi">Air Quality Index</a>
          </p>
        </Info>
        <Info>
          <h3>Legal</h3>
          <p>
            <a href="/legal">Rechtliche Hinweise</a>
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
