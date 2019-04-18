import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import { fontSize, width } from "styled-system";
import * as Yup from "yup";
import { Register } from "../components/registerButton";

const SignupSchema = Yup.object().shape({
  FirstName: Yup.string().required("Required"),
  LastName: Yup.string().required("Required"),
  Phone: Yup.string().required("Required"),
  Email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

export const TextInput = styled.input`
  ${width}
  ${fontSize}
  height: 3rem;
  font-size: ${props => props.theme.fontSizes.location};
  border: ${props =>
    props.hasError ? "1px solid " + props.theme.colors.red : "none"};
  background-color: #fff;
  margin-bottom: 0.5rem;
  border-radius: 0px;
  color: ${props => props.theme.colors.darkgray};
  padding: 0.75rem;
  appearance: textfield;

  ::-webkit-input-placeholder {
    color: ${props => props.theme.colors.darkgray};
  }

  ::-moz-placeholder {
    color: ${props => props.theme.colors.darkgray};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${props => props.theme.colors.darkgray};
  }

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

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const formComplete = () => {
    console.log("form submitted, redirect to thank you.");
  };
  return (
    <Formik
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        // submit
        console.log("formdata:", values);

        fetch("form.php", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        })
          .then(formComplete)
          .catch(error => console.error("Error:", error));
      }}
      render={({ errors, touched, handleBlur, handleChange, handleSubmit }) => (
        <Flex
          onSubmit={handleSubmit}
          as="form"
          id="ContactForm"
          flexDirection="column"
          width={[1 / 1, "600px"]}
          ml={["auto"]}
          mr={["auto"]}
          mt="2rem"
        >
          <Flex flexDirection={["column", "row"]}>
            <TextInput
              width={[1 / 1, 1 / 2]}
              type="text"
              name="FirstName"
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={errors.FirstName && touched.FirstName}
              placeholder={t("firstName")}
            />

            <TextInput
              width={[1 / 1, 1 / 2]}
              type="text"
              name="LastName"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t("lastName")}
              hasError={errors.LastName && touched.LastName}
            />
          </Flex>
          <Flex flexDirection={["column", "row"]}>
            <TextInput
              width={[1 / 1, 1 / 2]}
              type="email"
              name="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t("email")}
              hasError={errors.Email && touched.Email}
              type="email"
            />
            <TextInput
              width={[1 / 1, 1 / 2]}
              type="text"
              name="Phone"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t("phone")}
              hasError={errors.Phone && touched.Phone}
            />
          </Flex>
          <Box>
            <Select
              name="HowDidYou"
              width={[1 / 1]}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value={t("howHear")} defaultValue>
                {t("howHear")}
              </option>
              <option value="Online Web Search">{t("online")}</option>
              <option value="Radio">{t("radio")}</option>
              <option value="YVR Airport">{t("yvr")}</option>
              <option value="Chinese Newspaper/Print">
                {t("chinesePaper")}
              </option>
              <option value="Other">{t("other")}</option>
              <option value="Publication">{t("publication")}</option>
              <option value="WeChat">{t("wechat")}</option>
              <option value="Word of mouth">{t("wordofmouth")}</option>
            </Select>
          </Box>
          <Box>
            <TextInput
              width={[1 / 1]}
              type="text"
              name="HowHeardOther"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t("ifOther")}
            />
          </Box>

          <Box>
            <Text fontSize="location">
              {t("realtor")}&nbsp;
              <input
                type="radio"
                onChange={handleChange}
                onBlur={handleBlur}
                name="isRealtor"
                value="Yes"
              />{" "}
              {t("yes")}
              &nbsp;
              <input
                type="radio"
                onChange={handleChange}
                onBlur={handleBlur}
                name="isRealtor"
                value="No"
                defaultChecked
              />{" "}
              {t("no")}
            </Text>
          </Box>

          <Box mt="2rem">
            <Register as="button" type="submit">
              {t("register")}
            </Register>
          </Box>
        </Flex>
      )}
    />
  );
};

export default ContactForm;
