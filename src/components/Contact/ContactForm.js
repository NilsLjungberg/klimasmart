import React from "react";

import {
  Div,
  Form,
  Personal,
  Complete,
  Other,
  Input,
  Textarea,
  ButtonDiv,
} from "./ContactForm.styles";

import Button from "../UI/Button";

const ContactForm = () => {
  return (
    <Div>
      <Form>
        <Personal>
          <Complete>
            <label htmlFor="vorname">
              Vorname<span>*</span>
            </label>
            <Input id="vorname" />
          </Complete>
          <Complete>
            <label htmlFor="nachname">
              Nachname<span>*</span>
            </label>
            <Input id="nachname" />
          </Complete>
        </Personal>
        <Personal>
          <Complete>
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <Input id="email" />
          </Complete>
          <Complete>
            <label htmlFor="telnummer">
              Tel.nummer<span>*</span>
            </label>
            <Input id="telnummer" />
          </Complete>
        </Personal>
        <Other>
          <label htmlFor="company">Firmenname</label>
          <Input id="company" />
        </Other>
        <Other>
          <label htmlFor="textarea">
            Zusätzliche Informationen zu Ihrem Unternehmen und den
            Herausforderungen, Erwartungen und Bedürfnissen bezüglich
            Nachhaltigkeit
          </label>
          <Textarea id="textarea" />
        </Other>
        <ButtonDiv>
          <Button>Absenden</Button>
        </ButtonDiv>
      </Form>
    </Div>
  );
};

export default ContactForm;
