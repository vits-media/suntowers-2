import React from "react";
import Link from "next/link";
import Nav from "../components/nav";
import Head from "../components/head";
import styled from "styled-components";
import ThemeContainer from "./themeContainer";

import strings from "../language/strings";
import GlobalStyle from "../theme/globalStyle";
import Color from "../theme/color";
import { display } from "styled-system";
import ReactSVG from "react-svg";
import { Flex, Box, Text, Image } from "rebass";

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
    fontSize="heading3"
    fontFamily="serif"
    lineHeight="heading3"
    color="copper"
  />
);

const Heading2 = props => (
  <Text
    {...props}
    fontSize="heading2"
    fontFamily="vinter"
    lineHeight="heading2"
    color="copper"
  />
);

const Heading1 = props => (
  <Text
    {...props}
    fontSize="heading1"
    fontFamily="serif"
    lineHeight="heading1"
    color="copper"
  />
);

const LocationText = props => (
  <Text {...props} fontSize="location" lineHeight="location" color="white" />
);

const Container = styled.section`
  width: 95%;
  margin: auto;

  img {
    max-height: 40rem;
  }
`;

const OverlayImageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 40rem;

  img {
    position: absolute;
    object-fit: cover;
    height: 100%;
    z-index: -1;
  }
`;

const TextInsert = styled.div`
  background: white;
  max-width: 50%;
  /* align-self: flex-end; */
  position: absolute;
  bottom: 0%;
  right: 0;

  @media (max-width: 540px) {
    position: relative;
    max-width: inherit;
  }
`;

const ClubContainer = styled(Box)`
  background: rgba(255, 255, 255, 0.8);
`;

const DisplayContainer = styled(Box)`
  ${display}
`;

const DoubleContainer = styled(Flex)`
  @media (max-width: 540px) {
    flex-direction: column;
  }
`;
const HeroWrapper = styled.section`
  background: ${Color.BEIGE};
  color: ${Color.WHITE};
`;

const Register = styled.span`
  font-size: 1rem;
  display: inline-block;
  background: ${Color.DARK_BROWN};
  color: ${Color.WHITE};
  text-align: center;
  font-weight: 300;
  width: 12rem;
  padding: 0.5rem;
  white-space: nowrap;
`;

const Home = () => (
  <ThemeContainer>
    <>
      <Head title="Home" />
      <GlobalStyle />

      <HeroWrapper>
        <Flex p={["1rem", "2rem"]} alignItems="center">
          <Box width="10rem">
            <ReactSVG
              svgStyle={{ fill: "#8B634A" }}
              src="static/logo-full.svg"
            />
          </Box>

          <Box flex="1">
            <DisplayContainer display={["none", "block"]}>
              <Flex>
                <LocationText ml="2rem" mr="2rem">
                  Belford Experience Center
                  <br />
                  101 – 4211 Kingsway, Burnaby
                </LocationText>
                <LocationText>
                  604 336 0899
                  <br />
                  Open Daily 11 am to 5 pm (except Friday)
                </LocationText>
              </Flex>
            </DisplayContainer>
          </Box>

          <DisplayContainer display={["block", "none"]}>
            <Box mr="2rem">
              <Text fontSize="copy" color="copper" fontWeight="300">
                SUN TOWERS 1
              </Text>
            </Box>
          </DisplayContainer>

          <Box>
            <DisplayContainer display={["block", "none"]}>
              <Text fontSize="copy" color="white">
                EN | CH
              </Text>
            </DisplayContainer>
            <DisplayContainer display={["none", "block"]}>
              <Register>{strings.register}</Register>
            </DisplayContainer>
          </Box>

          {/* <LanguageSelect /> */}
        </Flex>
        <Box>
          <Text
            mt={["5rem", "7rem"]}
            fontSize={["2.5rem", "title"]}
            fontFamily="vinter"
            textAlign="center"
            color="white"
          >
            SUN TOWERS&nbsp;
            <Text
              as="span"
              fontFamily="vinter"
              fontSize={["3.5rem", "titleNum"]}
              color="white"
            >
              2
            </Text>
          </Text>

          <Text
            mt="3rem"
            mb="3rem"
            fontSize={["1.2rem", "headline"]}
            fontFamily="sans"
            lineHeight={["2rem", "headline"]}
            textAlign="center"
            color="white"
            style={{ textTransform: "uppercase" }}
          >
            Get Your Front Row Seat
            <br />
            To Metrotown
          </Text>

          <DisplayContainer display={["block", "none"]} mb="4rem">
            <Text textAlign="center">
              <Register>{strings.register}</Register>
            </Text>
          </DisplayContainer>
        </Box>

        <Container>
          <img style={{ width: "100%" }} src="static/tower-hero.png" />
        </Container>
      </HeroWrapper>

      <Box mt="5rem" mb="5rem" width={["80%", "32rem"]} ml="auto" mr="auto">
        <Heading2 textAlign="center" mb="2.5rem">
          Sun Towers in Metrotown's
          <br />
          Best Address
        </Heading2>

        <Text textAlign="center">
          Close to all the action, it is home to an international lifestyle
          paired with the unltimate convenience of SkyTrain and destination
          shopping. A place of unmatched amenities and prestigious personal
          services.
        </Text>
      </Box>

      <Image width={1 / 1} src="static/tower-sunset.png" />

      <Box mt="5rem" mb="5rem" width={["80%", "32rem"]} ml="auto" mr="auto">
        <Heading2 textAlign="center" mb="1rem">
          The Sun as returned to Metrotown
        </Heading2>

        <Text textAlign="center">Now it's your turn to take centre stage</Text>
      </Box>

      <OverlayImageContainer>
        <Image width={1 / 1} src="static/pool.png" />
        <ClubContainer p="2rem" width={["80%", "23rem"]}>
          <Text textAlign="center">
            <ReactSVG svgStyle={{ width: "5rem" }} src="static/solaris.svg" />

            <Heading3 mt="2rem" mb="2rem">
              Membership Included
            </Heading3>

            <Text mb="2rem" color="copper">
              Enjoy the exclusive, private Solaris Club - 24,000 sf of unmatched
              amenity over 3 floors, including swimming pool, sauna, badminton
              court, golf room, Sky Garden and more.
            </Text>

            <Register>{strings.register}</Register>
          </Text>
        </ClubContainer>
      </OverlayImageContainer>

      <Container>
        <DoubleContainer mt="3rem" mb="3rem">
          <Box
            flex="1"
            ml={["auto", "3rem"]}
            mr={["auto", "3rem"]}
            mb={["2rem", 0]}
            mt={["0", "3rem"]}
            width={["80%", "auto"]}
          >
            <Heading1 mb="1rem">Priority Daycare Access</Heading1>

            <Text>
              Enjoy the exclusive, private Solaris Club - 24,000 sf of unmatched
              amenity over 3 floors, including swimming pool, sauna, badminton
              court, golf room, Sky Garden and more.
            </Text>
          </Box>
          <Box width={[1 / 1, 1 / 2]}>
            <Image src="static/daycare.png" />
          </Box>
        </DoubleContainer>
      </Container>

      <OverlayImageContainer>
        <Image width={1 / 1} src="static/livingroom.png" />

        <TextInsert>
          <Text p="2rem">
            The distinct interiors of each home echo a modern elegance,with
            thoughtfully designed floorplans, sleek, modern kitchens, and
            sophisticated touches at every turn. Interior colours are elegant
            and understated. Beautiful woods add warmth; classic marble and
            quartz bring sophistication.
          </Text>
        </TextInsert>
      </OverlayImageContainer>

      <DoubleContainer mt="3rem" mb="3rem">
        <Box
          flex="1"
          ml={["auto", "3rem"]}
          mr={["auto", "3rem"]}
          mb={["2rem", 0]}
          mt={["0", "3rem"]}
          width={["80%", "auto"]}
        >
          <Heading1>The Best Location, And So Much More.</Heading1>
        </Box>
        <Box width={[1 / 1, 1 / 2]}>
          <Image src="static/location.png" />
        </Box>
      </DoubleContainer>
    </>
  </ThemeContainer>
);

export default Home;
