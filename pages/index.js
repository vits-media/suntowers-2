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

const OverlayImageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 40rem;

  @media (max-width: 700px) {
    height: 42rem;
  }

  img {
    position: absolute;
    object-fit: cover;
    height: 100%;
    z-index: -1;
  }
`;

const LivingContainer = styled.section`
  position: relative;
`;

const LivingText = styled.div`
  background: white;
  max-width: 50%;
  position: absolute;
  bottom: 0%;
  right: 0;

  @media (max-width: 700px) {
    position: relative;
    max-width: inherit;
  }
`;

const ClubContainer = styled(Box)`
  background: rgba(255, 255, 255, 0.8);
`;

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
          <Box mt="5rem" mb="5rem" ml="auto" mr="auto" width={["90%", "46rem"]}>
            <BestAddress />
          </Box>
        </Slide>

        <Slide bottom>
          <Image width={1 / 1} src="static/tower-sunset.png" />
        </Slide>

        <Slide bottom>
          <Box mt="5rem" mb="5rem" width={["90%", "35rem"]} ml="auto" mr="auto">
            <TheSun />
          </Box>
        </Slide>

        <Slide bottom>
          <OverlayImageContainer>
            <Image width={1 / 1} src="static/pool.png" />

            <ClubContainer p="2rem" width={["80%", "35rem"]}>
              <Text textAlign="center">
                <Box width="5rem" m="auto">
                  <ReactSVG src="static/solaris.svg" />
                </Box>

                <Heading3 mt="2rem" mb="2rem">
                  {t("membership")}
                </Heading3>

                <Text mb="2rem" color="copper">
                  {t("membershipExclusive")}
                </Text>

                <Box width="12rem" margin="auto">
                  <RegisterButton />
                </Box>
              </Text>
            </ClubContainer>
          </OverlayImageContainer>
        </Slide>

        <Slide bottom>
          <Box width={["100%", "95%"]} margin="auto">
            <Flex flexDirection={["column", "row"]} mt="3rem" mb={[0, "3rem"]}>
              <Box
                flex="1"
                padding={["2rem", "inherit", "inherit"]}
                ml={["auto", "2rem", "4rem"]}
                mr={["auto", "2rem", "4rem"]}
                mb={["2rem", 0]}
                mt={[0, "3rem", "4rem", "10rem"]}
              >
                <Heading1
                  mb="1rem"
                  style={{
                    maxWidth: "30rem"
                  }}
                >
                  {t("daycare")}
                </Heading1>

                <Text
                  style={{
                    maxWidth: "28rem"
                  }}
                >
                  {t("daycareBody")}
                </Text>
              </Box>

              <Box width={[1 / 1, 1 / 2]}>
                <Image src="static/daycare.png" />
              </Box>
            </Flex>
          </Box>
        </Slide>

        <Slide bottom>
          <LivingContainer>
            <LivingText>
              <Text p="2rem" fontSize="copy" lineHeight="copy">
                {t("interior")}
              </Text>
            </LivingText>

            <Image width={1 / 1} src="static/livingroom.png" />
          </LivingContainer>
        </Slide>

        <Slide bottom>
          <Section>
            <Flex flexDirection={["column", "row"]} mt="3rem" mb={[0, "3rem"]}>
              <Box
                flex="1"
                padding={["2rem", "inherit", "inherit"]}
                ml={["auto", "2rem", "4rem"]}
                mr={["auto", "2rem", "4rem"]}
                mb={["2rem", 0]}
                mt={[0, "4rem", "4rem", "12rem"]}
              >
                <Heading1
                  style={{
                    maxWidth: "30rem"
                  }}
                >
                  {t("bestLocation")}
                </Heading1>
              </Box>

              <Box width={[1 / 1, 1 / 2, 1 / 2]}>
                <Image src="static/location.png" />
              </Box>
            </Flex>
          </Section>
        </Slide>

        <Box bg="lightgray" p="3rem">
          <Text textAlign={["inherit", "center"]}>
            <Text
              color="copper"
              mb="1rem"
              fontSize={["2rem", "3.5rem"]}
              lineHeight={["2.5rem", "3.2rem"]}
              fontFamily="serif"
              color="copper"
            >
              {t("limited")}
            </Text>

            <Text
              color="copper"
              width={["auto", "32rem", "32rem"]}
              margin="auto"
            >
              {t("information")}
            </Text>
          </Text>

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
