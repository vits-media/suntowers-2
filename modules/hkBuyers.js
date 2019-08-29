import React from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import i18n from "i18next";

const Items = styled(Box)`
  text-align: center;
  margin: 0 1rem;
  span {
    white-space: nowrap;
  }
`;

const hkBuyers = () => {
  const { language } = i18n;

  if (language !== "zh") return null;
  return (
    <Flex
      justifyContent="center"
      flexDirection={["column", "column", "column", "row"]}
    >
      <Items>
        <span>香港地區請聯系: </span>
        <span>Sunny Tsoi</span>
      </Items>
      <Items>
        <span>
          <a href="tel:+852 3500 0998">+852 3500 0998</a> (香港時間 1am-3pm,
          9pm-12am)
        </span>
      </Items>
      <Items>
        <span>WhatsApp: </span> <span>+1 778 995 8113</span>
      </Items>
      <Items>
        <span>
          <a href="mailto:Sunny@SunTowersMetrotown.com">
            Sunny@SunTowersMetrotown.com
          </a>
        </span>
      </Items>
    </Flex>
  );
};

export default hkBuyers;
