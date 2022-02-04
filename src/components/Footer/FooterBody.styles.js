import styled from "styled-components";

export const FirstDiv = styled.div`
  height: 100%;
  background: #115b4c;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Div = styled.div`
  height: 100%;
  background: #115b4c;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (min-width: 991px) {
    flex-direction: row;
  }
`;

export const Info = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 3rem;

  font-size: 1.5rem;

  &:nth-of-type(3) {
    margin-bottom: 2rem;
  }

  p {
    margin: 0.3rem 0;
    font-weight: 300;
  }

  a {
    margin: 0.3rem 0;
    color: white;
    text-decoration: none;
    font-weight: 300;
  }

  a:hover {
    color: #b6edc8;
    text-decoration-line: underline;
  }

  @media screen and (min-width: 991px) {
    margin-left: 4.5rem;
  }
`;

export const Copyright = styled.div`
  margin: 0 3rem 1.5rem 3rem;
  font-size: 1rem;

  @media screen and (min-width: 991px) {
    margin-left: 4.5rem;
  }
`;
