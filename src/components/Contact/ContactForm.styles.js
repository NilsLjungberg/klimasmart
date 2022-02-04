import styled from "styled-components";

export const Div = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(210, 245, 233, 0.432);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  height: 100%;
  margin: 1.5rem 3rem;

  @media screen and (min-width: 991px) {
    width: 75%;
  }
`;

export const Personal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 3rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin: 0;
  }
`;

export const Complete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 1rem 3rem;

  label {
    text-align: left;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: rgb(47, 47, 51);
    font-weight: 300;
  }

  span {
    font-weight: bold;
    color: rgb(161, 5, 5);
    font-size: 1.5rem;
  }
`;

export const Other = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 3rem 2rem 3rem;

  label {
    text-align: left;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: rgb(47, 47, 51);
    font-weight: 300;
    line-height: 1.7rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3.5rem;
  border-radius: 10px;
  border: 0.5px solid #b6edc8;
  background: whitesmoke;
  font-family: "Poppins", sans-serif;
  color: #115b4c;
  box-shadow: 0 1rem 3rem rgba(47, 47, 51, 0.3);

  &:focus {
    outline: none;
    border: 0.5px solid #115b4c;
    background: #b6edc8;
  }

  &::placeholder {
    color: rgb(161, 5, 5);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 7rem;
  border-radius: 10px;
  border: 0.5px solid #b6edc8;
  background: whitesmoke;
  font-family: "Poppins", sans-serif;
  color: #115b4c;
  box-shadow: 0 1rem 3rem rgba(47, 47, 51, 0.3);

  &:focus {
    outline: none;
    border: 0.5px solid #115b4c;
    background: #b6edc8;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
  margin-left: 2rem;
`;

export const Button = styled.button`
  margin: 1rem 1rem 0 1rem;
  padding: 1rem 2rem;
  border-radius: 7px;
  border: none;
  background: #115b4c;
  color: whitesmoke;

  &:hover {
    background: #b6edc8;
    color: rgb(47, 47, 51);
    cursor: pointer;
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background: #115b4c;
    color: whitesmoke;
    cursor: not-allowed;
  }
`;

export const MessageDiv = styled.div`
  text-align: center;
  color: #b6edc8;
  font-size: 1.8rem;
  margin: 3rem 0;
  background: #115b4c;
  width: 50%;
  margin-left: 25%;
  padding: 2rem 0;
  border-radius: 10px;
  box-shadow: 0 1rem 3rem rgba(47, 47, 51, 0.3);
`;
