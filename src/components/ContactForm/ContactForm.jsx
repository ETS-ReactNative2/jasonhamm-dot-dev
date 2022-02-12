import React, { useState } from "react";
import {
  ContactFormContainer,
  ContactGrid,
  Form,
  Info,
  Label,
  Questions,
  InputEmail,
  InputText,
  TextArea,
  SubmitButton,
} from "./ContactForm.styled";
import Comment from "../Common/Comment/Index";
import SectionTitle from "../Common/SectionTitle/Index";
import GeneralAnchor from "../Common/GeneralAnchor/GeneralAnchor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        //not 200 response
        return;
      }

      //all OK
      alert("mail sent");
    } catch (error) {
      console.log(error.response.body);
    }
  };

  return (
    <ContactFormContainer id="contact">
      <SectionTitle>Contact</SectionTitle>
      <ContactGrid>
        <Info htmlFor="name">
          <Questions
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            Got any questions? 📬
          </Questions>
          <div
            data-sal="slide-right"
            data-sal-delay="500"
            data-sal-easing="ease"
          >
            <Comment htmlFor="name">
              Message me and I'll get right back to you!
            </Comment>
            <Comment htmlFor="name">
              Check me out on{" "}
              <GeneralAnchor href="https://github.com/Hamm-J" target="_blank">
                Github
                <FontAwesomeIcon icon={faGithub} />
              </GeneralAnchor>{" "}
              or{" "}
              <GeneralAnchor href="https://linkedin.com/" target="_blank">
                Linked
                <FontAwesomeIcon icon={faLinkedin} />.
              </GeneralAnchor>
            </Comment>
          </div>
        </Info>
        <Form
          name="contact-form"
          action="/success/"
          method="POST"
          onSubmit={submitForm}
        >
          <Label
            htmlFor="name"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            Name
          </Label>
          <InputText
            id="name"
            name="name"
            onChange={onChange}
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-easing="ease"
          ></InputText>
          <Label
            htmlFor="email"
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease"
          >
            Email
          </Label>
          <InputEmail
            id="email"
            name="email"
            onChange={onChange}
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease"
          ></InputEmail>
          <Label
            htmlFor="message"
            data-sal="slide-up"
            data-sal-delay="700"
            data-sal-easing="ease"
          >
            Message
          </Label>
          <TextArea
            id="message"
            name="message"
            onChange={onChange}
            data-sal="slide-up"
            data-sal-delay="800"
            data-sal-easing="ease"
          ></TextArea>
          <SubmitButton
            type="Submit"
            data-sal="flip-up"
            data-sal-delay="1000"
            data-sal-easing="ease"
          >
            Send
          </SubmitButton>
        </Form>
      </ContactGrid>
    </ContactFormContainer>
  );
};

export default ContactForm;
