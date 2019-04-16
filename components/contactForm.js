import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import RegisterButton from "../components/registerButton";
import strings from "../language/strings";
import DisplayContainer from "../components/displayContainer";

import { Flex, Box, Text, Image } from "rebass";
import { width, fontSize, color } from "styled-system";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

export const TextInput = styled.input`
  ${width}
  ${fontSize}
  height: 3rem;
  font-size: ${props => props.theme.fontSizes.location};
  border: none;
  background-color: #fff;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.gray};
  padding: 0.75rem;
  @media (min-width: 700px) {
    &:nth-child(2) {
      margin-left: 0.5rem;
    }
  }
`;

export const Select = styled.select`
  ${width}
  ${fontSize}
  border: none;
  background-color: #fff;

  color: ${props => props.theme.colors.darkgray};
  font-size: ${props => props.theme.fontSizes.location};
  height: 3rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  appearance: none;
  background-repeat: no-repeat;
  background-size: 0.5em auto;
  background-position: right 1em center;
  background-image: url("data:image/svg+xml;charset=utf-8, \
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'> \
      <polygon points='0,0 60,0 30,40' style='fill:gray;'/> \
    </svg>");
`;

const ContactForm = () => (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: ""
    }}
    validationSchema={SignupSchema}
    onSubmit={values => {
      // same shape as initial values
      console.log(values);
    }}
  >
    {({ errors, touched, handleSubmit }) => (
      <Flex
        width={[1 / 1, "600px"]}
        ml={["auto"]}
        mr={["auto"]}
        mt="2rem"
        flexDirection="column"
        as="form"
        id="ContactForm"
        onSubmit={handleSubmit}
      >
        <Flex flexDirection={["column", "row"]}>
          <TextInput
            width={[1 / 1, 1 / 2]}
            type="text"
            name="firstName"
            placeholder="First Name *"
          />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <TextInput
            width={[1 / 1, 1 / 2]}
            type="text"
            name="lastName"
            placeholder="Last Name *"
          />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
        </Flex>
        <Flex flexDirection={["column", "row"]}>
          <TextInput
            width={[1 / 1, 1 / 2]}
            type="text"
            name="email"
            placeholder="Email *"
            type="email"
          />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <TextInput
            width={[1 / 1, 1 / 2]}
            type="text"
            name="phoneNumber"
            placeholder="Phone *"
          />
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}
        </Flex>
        <Box>
          <Select name="heardAboutFrom" width={[1 / 1]}>
            <option value="" disabled selected>
              How did you hear about us?
            </option>
            <option value="181538">Online Web Search</option>
            <option value="178861">Radio</option>
            <option value="239584">YVR Airport</option>
            <option value="239585">Chinese Newspaper/Print</option>
            <option value="178860">Other</option>
            <option value="239586">Publication</option>
            <option value="194800">WeChat</option>
            <option value="178599">Word of mouth</option>
          </Select>
        </Box>
        <Box>
          <TextInput
            width={[1 / 1]}
            type="text"
            name="Other"
            placeholder="If Other (please Specify)"
          />
        </Box>

        <Box>
          <Text fontSize="location">
            Are you are realtor?&nbsp;
            <input type="radio" name="isRealtor" value="Yes" /> Yes&nbsp;
            <input type="radio" name="isRealtor" value="No" checked /> No
          </Text>
        </Box>

        <Box mt="2rem" bg="pink">
          <RegisterButton />
        </Box>
      </Flex>
    )}
  </Formik>
);

export default ContactForm;
