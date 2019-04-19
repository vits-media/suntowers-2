import i18n from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";
import ReactSVG from "react-svg";
import { Box, Button, Flex, Image, Text } from "rebass";
import styled from "styled-components";
import Analytics from "../components/analytics";
import ContactForm from "../components/contactForm";
import DisplayContainer from "../components/displayContainer";
import FixedHeader from "../components/fixedHeader";
import Head from "../components/head";
import RegisterButton from "../components/registerButton";
import "../language/i18n";
import GlobalStyle from "../theme/globalStyle";
import ThemeContainer from "./themeContainer";

Text.defaultProps = {
  fontSize: "copy",
  fontFamily: "sans",
  fontWeight: 100,
  lineHeight: "copy",
  color: "gray"
};

const Heading3 = props => (
  <Text
    {...props}
    fontSize={["1.6rem", "2rem"]}
    fontFamily="serif"
    lineHeight="heading3"
    color="copper"
  />
);

const Heading2 = props => (
  <Text
    {...props}
    fontSize={["2rem", "3rem"]}
    lineHeight={["2.5rem", "3.2rem"]}
    fontFamily="vinter"
    color="copper"
  />
);

const Heading1 = props => (
  <Text
    {...props}
    fontSize={["3rem", "3rem", "4.5rem"]}
    lineHeight={["3.5rem", "3.5rem", "4.5rem"]}
    fontFamily="serif"
    color="copper"
  />
);

const LocationText = props => (
  <Text
    {...props}
    fontSize="location"
    fontWeight="bold"
    lineHeight="location"
    color="white"
  />
);

const LanguageButton = props => {
  const activeColor = props.lang === i18n.language ? "white" : "copper";
  return (
    <Button
      as="span"
      {...props}
      fontSize="location"
      lineHeight="location"
      color={["copper", activeColor]}
      mr={["0.5rem", "1rem"]}
      style={{
        background: "transparent",
        cursor: "pointer",
        padding: 0,
        lineHeight: "1.8rem"
      }}
    />
  );
};

const LanguageSelect = props => {
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <LanguageButton {...props} lang="en" onClick={() => changeLanguage("en")}>
        EN
      </LanguageButton>
      <LanguageButton {...props} lang="zh" onClick={() => changeLanguage("zh")}>
        中文
      </LanguageButton>
    </>
  );
};

const Suntowers1Link = props => (
  <Text
    {...props}
    as="a"
    href="http://www.suntowersmetrotown.com/suntower-1/"
    fontSize="location"
    fontWeight="bold"
    color="copper"
    target="_blank"
    cursor="pointer"
    style={{ textDecoration: "none" }}
  >
    SUN TOWERS 1
  </Text>
);

const Container = styled.section`
  width: 95%;
  margin: auto;
`;

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

const PreserveSpan = styled(Box)`
  span {
    display: inline-block;
    white-space: nowrap;
  }
`;

const ClubContainer = styled(Box)`
  background: rgba(255, 255, 255, 0.8);
`;

const HeroWrapper = styled.section`
  background: linear-gradient(
    180deg,
    #decdaa,
    #decdaa 75%,
    #fff 75%,
    #fff 100%
  );

  @media (max-width: 700px) {
    background: linear-gradient(
      180deg,
      #decdaa,
      #decdaa 90%,
      #fff 90%,
      #fff 100%
    );
  }
  color: white;
`;

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <ThemeContainer>
      <>
        <Head title="New Metrotown Condos in Burnaby, BC | Sun Towers 2 | suntowersmetrotown.com" />
        <GlobalStyle />

        <Analytics />

        <HeroWrapper>
          <Flex p={["1rem", "2rem"]} alignItems="center">
            <Box width={["7.5rem", "10rem"]}>
              <ReactSVG
                svgStyle={{ fill: "#8B634A" }}
                src="static/logo-full.svg"
              />
            </Box>

            <Box flex="1">
              <DisplayContainer display={["none", "none", "block"]}>
                <Flex>
                  <LocationText ml="4rem" mr="2rem">
                    <PreserveSpan>
                      <span>{t("experienceCenter")}</span>
                      <br />
                      <span>{t("experienceAddress")}</span>
                    </PreserveSpan>
                  </LocationText>
                  <LocationText>
                    <PreserveSpan>
                      <span>{t("experiencePhone")}</span>
                      <br />
                      <span>{t("openHours")}</span>
                    </PreserveSpan>
                  </LocationText>
                </Flex>
              </DisplayContainer>
            </Box>

            <DisplayContainer display={["block", "none", "none"]}>
              <Box mr="2rem">
                <Suntowers1Link />
              </Box>
            </DisplayContainer>

            <Box>
              <DisplayContainer display={["block", "none"]}>
                <LanguageSelect color="white" />
              </DisplayContainer>
              <DisplayContainer display={["none", "block"]}>
                <RegisterButton />
              </DisplayContainer>
            </Box>
          </Flex>

          <DisplayContainer display={["none", "block", "block"]}>
            <Flex
              flexDirection="row"
              alignItems="flex-end"
              style={{
                position: "relative",
                float: "right",
                width: "15rem",
                height: "3rem",
                transform: "translate(-3rem, 18rem) rotate(90deg)",
                transformOrigin: "100% 100%"
              }}
            >
              <LanguageSelect color="white" />
              <Suntowers1Link />
            </Flex>
          </DisplayContainer>

          <Box>
            <Slide bottom>
              <Text
                mt={["3rem", "7rem", "10rem", "13rem"]}
                fontSize={["3rem", "4.7rem", "5.5rem", "8.5rem"]}
                fontFamily="vinter"
                textAlign="center"
                color="white"
              >
                SUN TOWERS&nbsp;
                <Text
                  as="span"
                  fontFamily="vinter"
                  fontSize={["4.5rem", "6.7rem", "7.8rem", "12rem"]}
                  color="white"
                >
                  2
                </Text>
              </Text>
            </Slide>

            <Slide bottom>
              <Text
                mt={["3rem", "3rem", "5rem"]}
                mb={["3rem", "5rem"]}
                fontSize={["1.2rem", "1.6rem", "2rem", "2.2rem"]}
                lineHeight={["2rem", "2.5rem", "2.8rem", "3.8rem"]}
                fontWeight="medium"
                fontFamily="sans"
                textAlign="center"
                color="white"
                style={{ textTransform: "uppercase" }}
              >
                {t("frontRow")}
              </Text>
            </Slide>

            <DisplayContainer display={["block", "none"]} mb="4rem">
              <Box width="13rem" margin="auto">
                <RegisterButton />
              </Box>
            </DisplayContainer>
          </Box>

          <Container>
            <Slide bottom>
              <Image
                width={["100%"]}
                height={["20rem", "30rem", "40rem"]}
                src="static/tower-hero.png"
                style={{ objectFit: "cover" }}
              />
            </Slide>
          </Container>
        </HeroWrapper>

        <Slide bottom>
          <Box mt="5rem" mb="5rem" ml="auto" mr="auto" width={["90%", "46rem"]}>
            <Heading2 textAlign="center" mb="2.5rem" mr="4rem" ml="4rem">
              {t("bestAddress")}
            </Heading2>
            <Text textAlign="center" margin="auto">
              {t("closeToAction")}
            </Text>
          </Box>
        </Slide>

        <Slide bottom>
          <Image width={1 / 1} src="static/tower-sunset.png" />
        </Slide>

        <Slide bottom>
          <Box mt="5rem" mb="5rem" width={["90%", "35rem"]} ml="auto" mr="auto">
            <Heading2 textAlign="center" mb="1rem">
              {t("theSun")}
            </Heading2>

            <Text textAlign="center">{t("centreStage")}</Text>
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
          <Container>
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
          </Container>
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

          <ContactForm />

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

        <DisplayContainer display={["block", "none", "none"]}>
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
        </DisplayContainer>
      </>
    </ThemeContainer>
  );
};

export default Home;
