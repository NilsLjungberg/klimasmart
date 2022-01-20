import React, { useState } from "react";

import useInput from "../../hooks/use-input";

import PhoneInput from "react-phone-number-input/input";

import "react-phone-number-input/style.css";
import "./PhoneNumberInput.css";

import {
  Div,
  Form,
  Personal,
  Complete,
  Other,
  Input,
  Textarea,
  ButtonDiv,
  Button,
} from "./ContactForm.styles";

const ContactForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredSurname,
    isValid: enteredSurnameIsValid,
    hasError: surnameInputHasError,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    reset: resetSurnameHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailHandler,
  } = useInput((value) => value.includes("@"));

  const [value, setValue] = useState();
  const [isTouched, setIsTouched] = useState(false);

  const phoneNumberIsValid = value;
  const numberIsInvalid = !value && isTouched;

  const numberBlurHandler = () => {
    setIsTouched(true);
  };

  const resetPhoneNumberHandler = () => {
    setIsTouched(false);
    setValue("");
  };

  const [enteredCompany, setEnteredCompany] = useState("");

  const companyChangeHandler = (event) => {
    setEnteredCompany(event.target.value);
  };

  const [enteredText, setEnteredText] = useState("");

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredSurnameIsValid &&
    enteredEmailIsValid &&
    phoneNumberIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    resetNameHandler();
    resetSurnameHandler();
    resetEmailHandler();
    resetPhoneNumberHandler();
    setEnteredCompany("");
    setEnteredText("");
  };

  return (
    <Div>
      <Form onSubmit={formSubmitHandler}>
        <Personal>
          <Complete>
            <label htmlFor="vorname">
              Vorname<span>*</span>
            </label>
            <Input
              id="vorname"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
              placeholder={
                nameInputHasError
                  ? "Bitte füllen Sie das erforderliche Feld aus!"
                  : ""
              }
            />
          </Complete>
          <Complete>
            <label htmlFor="nachname">
              Nachname<span>*</span>
            </label>
            <Input
              id="nachname"
              onChange={surnameChangeHandler}
              onBlur={surnameBlurHandler}
              value={enteredSurname}
              placeholder={
                surnameInputHasError
                  ? "Bitte füllen Sie das erforderliche Feld aus!"
                  : ""
              }
            />
          </Complete>
        </Personal>
        <Personal>
          <Complete>
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <Input
              id="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
              placeholder={
                emailInputHasError
                  ? "Bitte füllen Sie das erforderliche Feld aus! (inkl. @)"
                  : ""
              }
            />
          </Complete>
          <Complete>
            <label htmlFor="telnummer">
              Tel.nummer<span>*</span>
            </label>
            <PhoneInput
              className="phone"
              country="CH"
              international="true"
              value={value}
              onChange={setValue}
              onBlur={numberBlurHandler}
              placeholder={
                numberIsInvalid
                  ? "Bitte füllen Sie das erforderliche Feld aus!"
                  : ""
              }
            />
          </Complete>
        </Personal>
        <Other>
          <label htmlFor="company">Firmenname</label>
          <Input
            id="company"
            value={enteredCompany}
            onChange={companyChangeHandler}
          />
        </Other>
        <Other>
          <label htmlFor="textarea">
            Zusätzliche Informationen zu Ihrem Unternehmen und den
            Herausforderungen, Erwartungen und Bedürfnissen bezüglich
            Nachhaltigkeit
          </label>
          <Textarea
            id="textarea"
            value={enteredText}
            onChange={textChangeHandler}
          />
        </Other>
        <ButtonDiv>
          <Button disabled={!formIsValid}>Absenden</Button>
        </ButtonDiv>
      </Form>
    </Div>
  );
};

export default ContactForm;
