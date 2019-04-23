import { Image, Text } from "rebass";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

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

const Daycare = () => {
  const { t } = useTranslation();
  return (
    <LivingContainer>
      <LivingText>
        <Text p="2rem" fontSize="copy" lineHeight="copy">
          {t("interior")}
        </Text>
      </LivingText>

      <Image width={1 / 1} src="static/livingroom.jpg" />
    </LivingContainer>
  );
};

export default Daycare;
