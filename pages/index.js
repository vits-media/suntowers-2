import React from "react";
import { useTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";
import ReactSVG from "react-svg";
import { Box, Button, Flex, Image, Text } from "rebass";
import styled from "styled-components";
import Analytics from "../components/analytics";
import ContactForm from "../components/contactForm";
import {
  DesktopOnly,
  MobileOnly,
  TabletOnly,
  TabletDesktopOnly
} from "../components/displayContainer";
import FixedHeader from "../components/fixedHeader";
import Head from "../components/head";
import RegisterButton from "../components/registerButton";
import "../language/i18n";
import { Heading1, Heading2, Heading3 } from "../components/headings";

import LanguageSelect from "../components/languageSelect";
import Hero from "../modules/hero";
import BestAddress from "../modules/bestAddress";
import TheSun from "../modules/theSun";
import SolarisClub from "../modules/solarisClub";
import Daycare from "../modules/daycare";
import Interior from "../modules/interior";
import Location from "../modules/location";
import Limited from "../modules/limited";
import GlobalStyle from "../theme/globalStyle";
import ThemeContainer from "./themeContainer";
import Section from "../components/section";

Text.defaultProps = {
  fontSize: "copy",
  fontFamily: "sans",
  fontWeight: 100,
  lineHeight: "copy",
  color: "gray"
};

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <ThemeContainer>
      <>
        <Head title="New Metrotown Condos in Burnaby, BC | Sun Towers 2 | suntowersmetrotown.com" />
        <GlobalStyle />

        <Analytics />

        <Hero />

        <Slide bottom>
          <Box width={["90%", "46rem"]} m="5rem auto 5rem auto">
            <BestAddress />
          </Box>
        </Slide>

        <Slide bottom>
          <Image width={1 / 1} src="static/tower-sunset.png" />
        </Slide>

        <Slide bottom>
          <Box width={["90%", "35rem"]} m="5rem auto 5rem auto">
            <TheSun />
          </Box>
        </Slide>

        <Slide bottom>
          <SolarisClub />
        </Slide>

        <Slide bottom>
          <Box
            width={["100%", "95%"]}
            margin={["3rem auto 0 auto", "3rem auto 3rem auto"]}
          >
            <Daycare />
          </Box>
        </Slide>

        <Slide bottom>
          <Interior />
        </Slide>

        <Slide bottom>
          <Location />
        </Slide>

        <Box bg="lightgray" p="3rem">
          <Limited />

          <ContactForm onSubmit="/thankyou.php" />

          <Flex flexDirection={["column-reverse", "row"]} mt={["2rem", "5rem"]}>
            <Box
              mr={["0", "1rem"]}
              mt={["2rem", "0"]}
              width={[1 / 1, "8rem", "12rem"]}
            >
              <Text textAlign={["center", "left"]}>
                <Image width="5rem" src="static/belford.png" mr="1rem" />
                <Image width="2rem" src="static/key.png" />
              </Text>
            </Box>

            <Box mr={["0", "1rem"]} mt={["2rem", "0"]} flex="1">
              <Text
                fontSize="location"
                lineHeight="location"
                textAlign={["center", "left"]}
                margin={["auto"]}
                style={{ maxWidth: "35rem" }}
              >
                Sales & Marketing by Key Marketing. This is not an offering for
                sale. An offering for sale can only be made by way of disclosure
                statement E.&O.E.
              </Text>
            </Box>

            <Box width={[1 / 1, "12rem"]}>
              <Flex flexDirection={["column", "column", "row"]}>
                <Box mr="1rem">
                  <Text
                    fontSize="location"
                    lineHeight="location"
                    textAlign={["center", "left"]}
                    style={{ whiteSpace: "nowrap" }}
                    color="copper"
                  >
                    {t("experienceCenter")}
                    <br />
                    {t("experienceAddress")}
                    <br />
                    {t("experiencePhone")}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <MobileOnly>
          <FixedHeader>
            <Flex alignItems="center">
              <Box width="6rem">
                <ReactSVG
                  svgStyle={{ fill: "#8B634A" }}
                  src="static/logo-full.svg"
                  style={{
                    position: "relative",
                    top: "0.15rem",
                    left: "0.5rem"
                  }}
                />
              </Box>
              <Box flex="1">
                <Text textAlign="right" pr="1rem">
                  <LanguageSelect color="darkgray" />
                </Text>
              </Box>
              <Box width="10rem">
                <RegisterButton />
              </Box>
            </Flex>
          </FixedHeader>
        </MobileOnly>
      </>
    </ThemeContainer>
  );
};

export default Home;
