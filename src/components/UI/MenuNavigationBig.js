import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 7rem;
    z-index: 1000;
    text-align: right;
    background: ${(props) =>
      props.scrolled ? "rgba(17, 91, 76, 0.9)" : "rgba(210, 245, 233, 0.432)"};
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

  @media screen and (min-width: 991px) {
    h3 {
      margin-left: 7rem;
    }
  }
`;

const LinkDiv = styled.div`
  width: 70%;
  margin-right: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (min-width: 991px) {
    margin-right: 7rem;
  }
`;

const ItemLink = styled(Link)`
  color: ${(props) =>
    props.scrolled ? "rgb(182, 237, 200)" : "rgb(17, 91, 76)"};
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 300;

  @media screen and (min-width: 991px) {
    font-size: 1.5rem;
  }
`;

const MenuNavigationBig = () => {
  const [changeNav, setChangeNav] = useState(false);

  const navChangeHandler = () => {
    if (window.scrollY >= 80) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  const scrollToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", navChangeHandler);
    return () => {
      window.removeEventListener("scroll", navChangeHandler);
    };
  });

  return (
    <Nav scrolled={changeNav}>
      <HomeDiv>
        <ItemLink onClick={scrollToTopHandler} scrolled={changeNav} to="/home">
          <h3>klimasmart</h3>
        </ItemLink>
      </HomeDiv>
      <LinkDiv>
        <ItemLink onClick={scrollToTopHandler} scrolled={changeNav} to="/warum">
          Warum klimasmart
        </ItemLink>
        <ItemLink
          onClick={scrollToTopHandler}
          scrolled={changeNav}
          to="/klimaschutz"
        >
          Klimaschutzkonzept
        </ItemLink>
        <ItemLink onClick={scrollToTopHandler} scrolled={changeNav} to="/ideen">
          Ideen und Tipps
        </ItemLink>
        <ItemLink onClick={scrollToTopHandler} scrolled={changeNav} to="/aqi">
          Air Quality Index
        </ItemLink>
      </LinkDiv>
    </Nav>
  );
};

export default MenuNavigationBig;
