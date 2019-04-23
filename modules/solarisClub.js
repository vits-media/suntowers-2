import { Box, Image, Text } from "rebass";
import { Heading3 } from "../components/headings";
import RegisterButton from "../components/registerButton";
import SolarisLogo from "../components/solarisLogo";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

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

const ClubContainer = styled(Box)`
  background: rgba(255, 255, 255, 0.8);
`;

const SolarisClub = () => {
  const { t } = useTranslation();
  return (
    <OverlayImageContainer>
      <Image width={1 / 1} src="static/pool.jpg" />

      <ClubContainer p="2rem" width={["80%", "35rem"]}>
        <Text textAlign="center">
          <SolarisLogo m="auto" />

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
  );
};

export default SolarisClub;
