import React, { useState, useRef } from "react";

import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

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
  MessageDiv,
} from "./ContactForm.styles";

const ContactForm = (props) => {
  /* emailjs and ReCAPTCHA */
  const form = useRef();
  const recaptchaKey = "6Lfi4mUeAAAAAL9fcf_qiUM0LUXUIqHndA6O89a9";
  const recaptchaRef = useRef();
  const [recaptchaClicked, setRecaptchaClicked] = useState(false);

  const recaptchaClickHandler = () => {
    setRecaptchaClicked(true);
  };

  /* End emailjs and ReCAPTCHA */

  /* Name, Surname and Email Input */

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

  /* End Name, Surname and Email Input */

  /* Phone Input */

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

  /* End Phone Input */

  /* Company Input */

  const [enteredCompany, setEnteredCompany] = useState("");

  const companyChangeHandler = (event) => {
    setEnteredCompany(event.target.value);
  };

  /* End Company Input */

  /* Message Input */

  const [enteredText, setEnteredText] = useState("");

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  /* End Message Input */

  /* Form Input Status */

  const [isSent, setIsSent] = useState(false);
  const [status, setStatus] = useState("Absenden");

  /* End Form Input Status */

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredSurnameIsValid &&
    enteredEmailIsValid &&
    phoneNumberIsValid &&
    recaptchaClicked
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setStatus("Senden...");

    emailjs
      .sendForm(
        "service_gjpy6v5",
        "template_kescx6z",
        form.current,
        "user_355Um5kO3FcpNkNZZL6Pr"
      )
      .then(
        (result) => {
          console.log(result.text);
          resetNameHandler();
          resetSurnameHandler();
          resetEmailHandler();
          resetPhoneNumberHandler();
          setEnteredCompany("");
          setEnteredText("");
          setIsSent(true);
          recaptchaRef.current.reset();
          setRecaptchaClicked(false);
          setStatus("Absenden");
          setTimeout(() => {
            setIsSent(false);
          }, 4000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Div>
      <Form ref={form} onSubmit={formSubmitHandler}>
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
              name="name"
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
              name="lastname"
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
              name="email"
            />
          </Complete>
          <Complete>
            <label htmlFor="telnummer">
              Tel.nummer<span>*</span>
            </label>
            <PhoneInput
              className="phone"
              country="CH"
              value={value}
              onChange={setValue}
              onBlur={numberBlurHandler}
              placeholder={
                numberIsInvalid
                  ? "Bitte füllen Sie das erforderliche Feld aus!"
                  : ""
              }
              name="phone"
            />
          </Complete>
        </Personal>
        <Other>
          <label htmlFor="company">Firmenname</label>
          <Input
            id="company"
            value={enteredCompany}
            onChange={companyChangeHandler}
            name="company"
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
            name="message"
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            onChange={recaptchaClickHandler}
            sitekey={recaptchaKey}
          />
        </Other>

        <ButtonDiv>
          <Button disabled={!formIsValid} type="submit">
            {status}
          </Button>
        </ButtonDiv>
        {isSent && (
          <MessageDiv>Ihre Nachricht wurde erfolgreich übermittelt.</MessageDiv>
        )}
      </Form>
    </Div>
  );
};

export default ContactForm;
