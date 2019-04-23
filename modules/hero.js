import { Flex, Text, Box, Image } from "rebass";
import { useTranslation } from "react-i18next";
import RegisterButton from "../components/registerButton";
import styled from "styled-components";
import LanguageSelect from "../components/languageSelect";
import Slide from "react-reveal/Slide";
import {
  DesktopOnly,
  MobileOnly,
  TabletOnly,
  TabletDesktopOnly
} from "../components/displayContainer";
import SunLogo from "../components/sunLogo";
import SunLogotype from "../components/sunLogotype";
import LocationInfo from "../modules/locationInfo";
import Section from "../components/section";

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

const Hero = () => {
  const { t } = useTranslation();
  return (
    <HeroWrapper>
      <Flex p={["1rem", "2rem"]} alignItems="center">
        <SunLogo width={["7.5rem", "10rem"]} />

        <Box flex="1">
          <DesktopOnly>
            <LocationInfo />
          </DesktopOnly>
        </Box>

        <MobileOnly>
          <Box mr="2rem">
            <Suntowers1Link />
          </Box>
        </MobileOnly>

        <Box>
          <MobileOnly>
            <LanguageSelect/>
          </MobileOnly>
          <TabletOnly>
            <RegisterButton />
          </TabletOnly>
        </Box>
      </Flex>

      <TabletDesktopOnly>
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
          <LanguageSelect />
          <Suntowers1Link />
        </Flex>
      </TabletDesktopOnly>

      <Box>
        <Slide bottom>
          <SunLogotype />
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

        <MobileOnly>
          <Box width="13rem" margin="auto" mb="4rem">
            <RegisterButton />
          </Box>
        </MobileOnly>
      </Box>

      <Section>
        <Slide bottom>
          <Image
            width={["100%"]}
            height={["20rem", "30rem", "40rem"]}
            src="static/tower-hero.png"
            style={{ objectFit: "cover" }}
          />
        </Slide>
      </Section>
    </HeroWrapper>
  );
};

export default Hero;
