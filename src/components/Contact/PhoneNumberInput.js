import React, { useState } from "react";

import PhoneInput from "react-phone-number-input/input";

import "react-phone-number-input/style.css";
import "./PhoneNumberInput.css";

const PhoneNumberInput = () => {
  const [value, setValue] = useState();
  const [isTouched, setIsTouched] = useState(false);

  const numberIsInvalid = !value && isTouched;

  const numberBlurHandler = () => {
    setIsTouched(true);
  };

  const phoneNumberReset = () => {
    setIsTouched(false);
    setValue("");
  };

  return (
    <PhoneInput
      className="phone"
      country="CH"
      international="true"
      value={value}
      onChange={setValue}
      onBlur={numberBlurHandler}
      placeholder={
        numberIsInvalid ? "Bitte füllen Sie das erforderliche Feld aus!" : ""
      }
    />
  );
};

export default PhoneNumberInput;
