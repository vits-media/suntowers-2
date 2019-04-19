import { Box, Flex, Text } from "rebass";
import { useTranslation } from "react-i18next";
import ReactSVG from "react-svg";
import LanguageSelect from "../components/languageSelect";
import FixedHeader from "../components/fixedHeader";
import RegisterButton from "../components/registerButton";

const MobileHeader = () => {
  const { t } = useTranslation();
  return (
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
  );
};

export default MobileHeader;
