import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
import "../language/i18n";
import { useTranslation } from "react-i18next";

export const Register = styled.span`
  font-size: ${props => props.theme.fontSizes.copy};
  font-weight: 700;
  display: inline-block;
  background: ${props => props.theme.colors.copper};
  text-align: center;
  font-weight: 300;
  width: 100%;
  padding: 0.5rem 2rem;
  height: 3rem;
  margin: auto;
  line-height: 2.1rem;
  white-space: nowrap;
  border: none;
  box-shadow: inset 0 0 0 0.4rem ${props => props.theme.colors.copper},
    inset 0 0 0 0.45rem #fff;
  cursor: pointer;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
`;

const RegisterButton = props => {
  const { t } = useTranslation();
  return (
    <Box {...props}>
      <Register>
        <a href="#ContactForm">{t("register")}</a>
      </Register>
    </Box>
  );
};

export default RegisterButton;
