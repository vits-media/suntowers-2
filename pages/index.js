import React from "react";
import Slide from "react-reveal/Slide";
import { Box, Image } from "rebass";
import Analytics from "../components/analytics";
import GlobalStyle from "../theme/globalStyle";
import ThemeContainer from "./themeContainer";
import { MobileOnly } from "../components/displayContainer";
import Head from "../components/head";
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

const Home = () => {
  return (
    <ThemeContainer>
      <>
        <Head title="New Metrotown Condos in Burnaby, BC | Sun Towers 2 | suntowersmetrotown.com" />
        <GlobalStyle />
        <Analytics />
        <Hero />
        <Slide bottom>
          <BestAddress width={["90%", "46rem"]} m="5rem auto 5rem auto" />
        </Slide>
        <Slide bottom>
          <Image width={1 / 1} src="static/tower-sunset.jpg" />
        </Slide>
        <Slide bottom>
          <TheSun width={["90%", "35rem"]} m="5rem auto 5rem auto" />
        </Slide>
        <Slide bottom>
          <SolarisClub />
        </Slide>
        <Slide bottom>
          <Daycare
            width={["100%", "95%"]}
            margin={["3rem auto 0 auto", "3rem auto 3rem auto"]}
          />
        </Slide>
        <Slide bottom>
          <Interior />
        </Slide>
        <Slide bottom>
          <Location />
        </Slide>
        <Box bg="lightgray" p="3rem">
          <Limited />
          <ContactForm
            post="form.php"
            redirect="/thankyou.php"
            width={[1 / 1, "600px"]}
            margin={["2rem auto 2rem auto", "2rem auto 5rem auto"]}
          />
          <FormFoot />
        </Box>
        <MobileOnly>
          <MobileHeader />
        </MobileOnly>
      </>
    </ThemeContainer>
  );
};

export default Home;
