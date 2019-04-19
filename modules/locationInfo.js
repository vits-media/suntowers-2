import { Flex, Text, Box } from "rebass";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const LocationText = props => (
  <Text
    {...props}
    fontSize="location"
    fontWeight="bold"
    lineHeight="location"
    color="white"
    display="inline-block"
    whiteSpace="nowrap"
  />
);

const locationInfo = () => {
  const { t } = useTranslation();
  return (
    <Flex>
      <LocationText ml="4rem" mr="2rem">
        {t("experienceCenter")}
        <br />
        {t("experienceAddress")}
      </LocationText>
      <LocationText>
        {t("experiencePhone")}
        <br />
        {t("openHours")}
      </LocationText>
    </Flex>
  );
};

export default locationInfo;
