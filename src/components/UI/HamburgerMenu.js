import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const colors = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

const MenuLabel = styled.label`
  background-color: ${colors.primaryLight};
  position: fixed;
  top: 3rem;
  right: 3rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const MenuBar = styled.div`
  width: 100%;
  background-color: whitesmoke;
  height: 7rem;
  z-index: 1000;
  text-align: right;
  position: fixed;
  cursor: pointer;
  box-shadow: 0 0.5rem 2rem rgba(47, 47, 51);
  display: flex;
  justify-content: space-around;

  h2 {
    font-size: 23px;
    font-family: "Playfair Display", serif;
    letter-spacing: 2px;
  }
`;

const NavBackground = styled.div`
  position: fixed;
  top: 3.5rem;
  right: 3.5rem;
  background-image: radial-gradient(
    ${colors.primaryDark},
    ${colors.primaryLight}
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;

  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }

  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }

  ${MenuBar}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }

  ${MenuBar}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100%;
  position: ${(props) => (props.clicked ? window.scrollTo(0, 0) : "fixed")};
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: ${(props) => (props.clicked ? "fixed" : "absolute")};
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: ${colors.primaryLight};
  padding: 1rem 2rem;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: ${colors.primaryDark};
    transform: translateX(1rem);
  }
`;

const MenuNavigation = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [changeNav, setChangeNav] = useState(false);

  const clickNavHandler = () => {
    setIsClicked(!isClicked);
  };

  const navChangeHandler = () => {
    if (window.scrollY >= 80) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  window.addEventListener("scroll", navChangeHandler);

  return (
    <>
      {isClicked && (
        <MenuLabel htmlFor="navigation-toggle" onClick={clickNavHandler}>
          <Icon clicked={isClicked}>&nbsp;</Icon>
        </MenuLabel>
      )}
      {!changeNav && (
        <MenuLabel htmlFor="navigation-toggle" onClick={clickNavHandler}>
          <Icon clicked={isClicked}>&nbsp;</Icon>
        </MenuLabel>
      )}
      {changeNav && !isClicked && (
        <MenuBar htmlFor="navigation-toggle" onClick={clickNavHandler}>
          <h2>klimasmart</h2>
          <Icon clicked={isClicked}>&nbsp;</Icon>
        </MenuBar>
      )}

      <NavBackground clicked={isClicked}>&nbsp;</NavBackground>

      <Navigation clicked={isClicked}>
        <List>
          <li>
            <ItemLink onClick={clickNavHandler} to="/home">
              Startseite
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={clickNavHandler} to="/about">
              Warum klimasmart
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={clickNavHandler} to="/klimaschutz">
              Klimaschutzkonzept
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={clickNavHandler} to="/blog">
              Ideen und Tipps
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={clickNavHandler} to="/aqi">
              Air Quality Index
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
};

export default MenuNavigation;
