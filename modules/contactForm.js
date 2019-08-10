import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex, Text } from "rebass";
import styled from "styled-components";
import { fontSize, width } from "styled-system";
import { Register } from "../components/registerButton";
import Router from "next/router";

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

const ContactForm = props => {
  const { t, i18n } = useTranslation();
  const [guid, setGuid] = useState(null);

  const formComplete = response => {
    console.log("Form complete: ", response);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  const redirect = response => {
    console.log("Redirecting: ", props.redirect);
    Router.push({
      pathname: props.redirect
    });
  };

  useEffect(() => {
    setGuid(window.LassoCRM.tracker.readCookie("ut"));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);

    const formData = new URLSearchParams();

    for (var [key, value] of data) {
      formData.append(key, value);
    }

    fetch(props.post, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: formData
    })
      .then(formComplete)
      .then(redirect)
      .catch(error => console.error(error));
  };

  return (
    <Box {...props}>
      <Flex
        onSubmit={handleSubmit}
        as="form"
        id="ContactForm"
        flexDirection="column"
      >
        <input type="hidden" name="domainAccountId" value="LAS-355170-01" />
        <input type="hidden" name="guid" value={guid} />
        <Flex flexDirection={["column", "row"]}>
          <TextInput
            width={[1 / 1, 1 / 2]}
            type="text"
            name="firstName"
            required
            placeholder={t("firstName")}
          />
          <TextInput
            width={[1 / 1, 1 / 2]}
            type="text"
            name="lastName"
            required
            placeholder={t("lastName")}
          />
        </Flex>
        <Flex flexDirection={["column", "row"]}>
          <TextInput
            width={[1 / 1, 1 / 2]}
            type="email"
            name="email"
            required
            placeholder={t("email")}
            type="email"
          />
          <TextInput
            width={[1 / 1, 1 / 2]}
            type="text"
            name="phone"
            required
            placeholder={t("phone")}
          />
        </Flex>
        <Box>
          <Select name="HowHear" width={[1 / 1]}>
            <option value={t("howHear")} defaultValue>
              {t("howHear")}
            </option>
            <option value="251982">{t("online")}</option>
            <option value="251987">{t("radio")}</option>
            <option value="252006">{t("yvr")}</option>
            <option value="251958">{t("chinesePaper")}</option>
            <option value="251983">{t("other")}</option>
            <option value="251986">{t("publication")}</option>
            <option value="252003">{t("wechat")}</option>
            <option value="252005">{t("wordofmouth")}</option>
          </Select>
        </Box>
        <Box>
          <TextInput
            width={[1 / 1]}
            type="text"
            name="HowHearOther"
            placeholder={t("ifOther")}
          />
        </Box>
        <Box>
          <Select name="HomeType" width={[1 / 1]}>
            <option value={t("homeType")} defaultValue>
              {t("homeType")}
            </option>
            <option value="252291">{t("oneBedroom")}</option>
            <option value="252292">{t("twoBedroom")}</option>
            <option value="252293">{t("threeBedroom")}</option>
            <option value="252294">{t("townhomeOrPenthouse")}</option>
          </Select>
        </Box>
        <Box>
          <Select name="Budget" width={[1 / 1]}>
            <option value={t("budget")} defaultValue>
              {t("budget")}
            </option>
            <option value="252296">{t("belowFive")}</option>
            <option value="252297">{t("fiveToSevenFifty")}</option>
            <option value="252298">{t("sevenFiftyToOneMil")}</option>
            <option value="252299">{t("aboveOneMil")}</option>
          </Select>
        </Box>
        <Box>
          <Text fontSize="location">
            {t("workingWithRealtor")}&nbsp;
            <input
              type="radio"
              name="WorkingWithRealtor"
              // yes
              value="252301"
            />{" "}
            {t("yes")}
            &nbsp;
            <input
              type="radio"
              name="WorkingWithRealtor"
              // no
              value="252302"
              defaultChecked
            />{" "}
            {t("no")}
          </Text>
        </Box>
        <Box>
          <TextInput
            width={[1 / 1]}
            type="text"
            name="RealtorName"
            placeholder={t("realtorName")}
          />
        </Box>
        <Box>
          <TextInput
            width={[1 / 1]}
            type="text"
            name="RealtorPhone"
            placeholder={t("realtorPhone")}
          />
        </Box>
        <Box>
          <TextInput
            width={[1 / 1]}
            type="text"
            name="RealtorBrokerage"
            placeholder={t("realtorBrokerage")}
          />
        </Box>
        <Box>
          <Text fontSize="location">
            {t("realtor")}&nbsp;
            <input
              type="radio"
              name="IAmRealtor"
              // yes
              value="251952"
            />
            {t("yes")}
            &nbsp;
            <input
              type="radio"
              name="IAmRealtor"
              // no
              value="251953"
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
    </Box>
  );
};

export default ContactForm;
