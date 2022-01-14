import React from "react";

import { FirstDiv, Div, Info, Copyright } from "./FooterBody.styles";

const FooterBody = () => {
  return (
    <FirstDiv>
      <Div>
        <Info>
          <h3>klimasmart</h3>
          <p>Address</p>
          <p>Not</p>
          <p>Public</p>
          <p>Yet</p>
          <p>Coming Soon</p>
        </Info>
        <Info>
          <h3>Unternehmen</h3>
          <p>
            <a href="/">Über uns</a>
          </p>
          <p>
            <a href="/">Partner</a>
          </p>
          <p>
            <a href="/">Blog</a>
          </p>
          <p>
            <a href="/">Kontakt</a>
          </p>
        </Info>
        <Info>
          <h3>Legal</h3>
          <p>
            <a href="/">Cookie Policy</a>
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
