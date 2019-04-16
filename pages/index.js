import React from "react";
import Head from "../components/head";
import ContactForm from "../components/contactForm";
import styled from "styled-components";
import ThemeContainer from "./themeContainer";
import Slide from "react-reveal/Slide";
import RegisterButton from "../components/registerButton";
import DisplayContainer from "../components/displayContainer";
import FixedHeader from "../components/fixedHeader";
import strings from "../language/strings";
import GlobalStyle from "../theme/globalStyle";
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
    fontSize={["1.6rem", "2rem"]}
    fontFamily="serif"
    lineHeight="heading3"
    color="copper"
  />
);

const Heading2 = props => (
  <Text
    {...props}
    fontSize={["2rem", "2.7rem"]}
    lineHeight={["2.5rem", "3.2rem"]}
    fontFamily="vinter"
    color="copper"
  />
);

const Heading1 = props => (
  <Text
    {...props}
    fontSize={["3rem", "3rem", "4rem"]}
    lineHeight={["3.5rem", "3.5rem", "4.5rem"]}
    fontFamily="serif"
    color="copper"
  />
);

const LocationText = props => (
  <Text {...props} fontSize="location" lineHeight="location" color="white" />
);

const LanguageSelect = props => (
  <Text
    {...props}
    fontSize="location"
    mr={[0, "2rem", "2rem"]}
    fontWeight="bold"
  >
    EN | CH
  </Text>
);

const Suntowers1Link = props => (
  <Text
    {...props}
    as="a"
    href="http://www.suntowersmetrotown.com/suntower-1/"
    fontSize="location"
    fontWeight="bold"
    color="white"
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

const Home = () => (
  <ThemeContainer>
    <>
      <Head title="New Metrotown Condos in Burnaby, BC | Sun Towers 2 | suntowersmetrotown.com" />
      <GlobalStyle />
      <HeroWrapper>
        <Flex p={["1rem", "2rem"]} alignItems="center">
          <Box width={["7rem", "10rem"]}>
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
                    <span>Belford Experience Center</span>
                    <br />
                    <span>101 – 4211 Kingsway, Burnaby</span>
                  </PreserveSpan>
                </LocationText>
                <LocationText>
                  <PreserveSpan>
                    <span>604 336 0899</span>
                    <br />
                    <span>Open Daily 11 am to 5 pm (except Friday)</span>
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
              transform: "translate(-3rem, 17rem) rotate(90deg)",
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
              mt={["3rem", "7rem"]}
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
              lineHeight={["2rem", "2.5rem", "2.5rem", "3.8rem"]}
              fontFamily="sans"
              textAlign="center"
              color="white"
              style={{ textTransform: "uppercase" }}
            >
              Get Your Front Row Seat
              <br />
              To Metrotown
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
        <Box mt="5rem" mb="5rem" width={["90%", "35rem"]} ml="auto" mr="auto">
          <Heading2 textAlign="center" mb="2.5rem">
            Sun Towers in Metrotown's
            <br />
            Best Address
          </Heading2>

          <Text textAlign="center">
            Close to all the action, it is home to an international lifestyle
            paired with the unltimate convenience of SkyTrain and destination
            shopping. A place of unmatched amenities and prestigious personal
            services.cd
          </Text>
        </Box>
      </Slide>

      <Slide bottom>
        <Image width={1 / 1} src="static/tower-sunset.png" />
      </Slide>

      <Slide bottom>
        <Box mt="5rem" mb="5rem" width={["80%", "35rem"]} ml="auto" mr="auto">
          <Heading2 textAlign="center" mb="1rem">
            The Sun has returned to Metrotown
          </Heading2>

          <PreserveSpan>
            <Text textAlign="center">
              Now it's your turn to take centre stage
            </Text>
          </PreserveSpan>
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
                Membership Included
              </Heading3>

              <Text mb="2rem" color="copper">
                Enjoy the exclusive, private Solaris Club - 24,000 sf of
                unmatched amenity over 3 floors, including swimming pool, sauna,
                badminton court, golf room, Sky Garden and more.
              </Text>

              <Box width="12rem" margin="auto">
                <RegisterButton />
              </Box>
            </Text>
          </ClubContainer>
        </OverlayImageContainer>
      </Slide>

      <Slide bottom>
        <Box width={["100%", "95%"]}>
          <Flex flexDirection={["column", "row"]} mt="3rem" mb={[0, "3rem"]}>
            <Box
              flex="1"
              ml={["auto", "3rem"]}
              mr={["auto", "3rem"]}
              mb={["2rem", 0]}
              mt={[0, 0, "3rem"]}
              width={["80%", "auto"]}
            >
              <Heading1 mb="1rem">Priority Daycare Access</Heading1>

              <Text>
                Enjoy the exclusive, private Solaris Club - 24,000 sf of
                unmatched amenity over 3 floors, including swimming pool, sauna,
                badminton court, golf room, Sky Garden and more.
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
              The distinct interiors of each home echo a modern elegance,with
              thoughtfully designed floorplans, sleek, modern kitchens, and
              sophisticated touches at every turn. Interior colours are elegant
              and understated. Beautiful woods add warmth; classic marble and
              quartz bring sophistication.
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
              ml={["auto", "3rem"]}
              mr={["auto", "3rem"]}
              mb={["2rem", 0]}
              mt={[0, 0, "3rem"]}
              width={["80%", "auto"]}
            >
              <Heading1>The Best Location, And So Much More.</Heading1>
            </Box>

            <Box width={[1 / 1, 1 / 2, 1 / 2]}>
              <Image src="static/location.png" />
            </Box>
          </Flex>
        </Container>
      </Slide>

      <Box bg="lightgray" p="3rem">
        <Text textAlign="center">
          <Heading2 color="copper" mb="1rem">
            Limited Opportunities
          </Heading2>

          <Text color="copper">
            Register to receive more information and an invitation <br />
            to the Belford Experience Centre
          </Text>
        </Text>

        <ContactForm />

        <Flex flexDirection={["column-reverse", "row"]} mt={["2rem", "5rem"]}>
          <Box mr={["0", "1rem"]} mt={["2rem", "0"]} width={[1 / 1, "25rem"]}>
            <Text textAlign="center">
              <Image width="5rem" src="static/belford.png" mr="1rem" />
              <Image width="2rem" src="static/key.png" />
            </Text>
          </Box>

          <Box mr={["0", "1rem"]} mt={["2rem", "0"]}>
            <Text
              fontSize="location"
              lineHeight="location"
              textAlign={["center", "left"]}
            >
              Sales & Marketing by Key Marketing. This is not an offering for
              sale. An offering for sale can only be made by way of disclosure
              statement E.&O.E.
            </Text>
          </Box>

          <Box>
            <Flex flexDirection={["column", "row"]}>
              <Box mr="1rem">
                <Text
                  fontSize="location"
                  lineHeight="location"
                  textAlign={["center", "left"]}
                >
                  Belford&nbsp;Experiece&nbsp;Center
                </Text>
                <Text
                  fontSize="location"
                  lineHeight="location"
                  textAlign={["center", "left"]}
                >
                  101- 4211 Kingsway, Burnaby, BC V5H&nbsp;3Z2
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="location"
                  lineHeight="location"
                  textAlign={["center", "left"]}
                >
                  <DisplayContainer display={["none", "block", "block"]}>
                    contact
                    <br />
                    <span style={{ whiteSpace: "nowrap" }}>
                      {strings.phone}
                    </span>
                  </DisplayContainer>

                  <DisplayContainer display={["block", "none", "none"]}>
                    <span style={{ whiteSpace: "nowrap" }}>
                      {strings.phone}
                    </span>
                  </DisplayContainer>
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
                style={{ position: "relative", top: "0.15rem", left: "0.5rem" }}
              />
            </Box>
            <Box flex="1">
              <Text textAlign="right" pr="1rem">
                <LanguageSelect color="darkgray" />
              </Text>
            </Box>
            <Box width="10rem" bg="pink">
              <RegisterButton />
            </Box>
          </Flex>
        </FixedHeader>
      </DisplayContainer>
    </>
  </ThemeContainer>
);

export default Home;
