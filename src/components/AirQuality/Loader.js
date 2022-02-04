import React from "react";

import styled from "styled-components";

const Spinner = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    transparent,
    transparent 40%,
    rgb(17, 91, 76)
  );
  animation: animate 2s linear infinite;

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    bottom: 6px;
    right: 6px;
    background: rgb(182, 237, 200);
    border-radius: 50%;
    z-index: 1000;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background: linear-gradient(
      45deg,
      transparent,
      transparent 40%,
      rgb(17, 91, 76)
    );
    border-radius: 50%;
    z-index: 1000;
    z-index: 1;
    filter: blur(30px);
  }
`;

const Loader = () => {
  return <Spinner></Spinner>;
};
export default Loader;
