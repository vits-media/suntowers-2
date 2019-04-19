import React from "react";
import { useTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";
import ReactSVG from "react-svg";
import { Box, Button, Flex, Image, Text } from "rebass";
import styled from "styled-components";
import Analytics from "../components/analytics";

import {
  DesktopOnly,
  MobileOnly,
  TabletOnly,
  TabletDesktopOnly
} from "../components/displayContainer";
import Head from "../components/head";
import "../language/i18n";
import { Heading1, Heading2, Heading3 } from "../components/headings";

import Hero from "../modules/hero";
import BestAddress from "../modules/bestAddress";
import TheSun from "../modules/theSun";
import SolarisClub from "../modules/solarisClub";
import Daycare from "../modules/daycare";
import Interior from "../modules/interior";
import Location from "../modules/location";
import Limited from "../modules/limited";
import FormFoot from "../modules/formFoot";
import ContactForm from "../modules/contactForm";
import MobileHeader from "../modules/mobileHeader";
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
          <Box>
            <Limited />
          </Box>

          <Box
            width={[1 / 1, "600px"]}
            margin={["2rem auto 2rem auto", "2rem auto 5rem auto"]}
          >
            <ContactForm />
          </Box>

          <Box>
            <FormFoot />
          </Box>
        </Box>

        <MobileOnly>
          <MobileHeader />
        </MobileOnly>
      </>
    </ThemeContainer>
  );
};

export default Home;
