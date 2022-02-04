import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 7rem;
    z-index: 1000;
    text-align: right;
    background: rgba(17, 91, 76, 0.9);
    position: fixed;
    cursor: pointer;
    box-shadow: 0 0.5rem 2rem rgba(47, 47, 51);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const HomeDiv = styled.div`
  width: 30%;
  text-align: left;

  h3 {
    font-size: 2rem;
    margin-left: 3rem;
    font-family: "Playfair Display", serif;
    letter-spacing: 0.3rem;
  }
`;

const LinkDiv = styled.div`
  width: 70%;
  margin-right: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ItemLink = styled(Link)`
  color: #b6edc8;
  text-decoration: none;
  font-size: 1.5rem;
`;

const MenuNavigationBig = () => {
  return (
    <Nav>
      <HomeDiv>
        <ItemLink to="/home">
          <h3>klimasmart</h3>
        </ItemLink>
      </HomeDiv>
      <LinkDiv>
        <ItemLink to="/about">Warum klimasmart</ItemLink>
        <ItemLink to="/klimaschutz">Klimaschutzkonzept</ItemLink>
        <ItemLink to="/ideen">Ideen und Tipps</ItemLink>
        <ItemLink to="/aqi">Air Quality Index</ItemLink>
      </LinkDiv>
    </Nav>
  );
};

export default MenuNavigationBig;
