import { Flex, Text } from "rebass";
import SunLogo from "../components/sunLogo";
import LanguageSelect from "../components/languageSelect";
import FixedHeader from "../components/fixedHeader";
import RegisterButton from "../components/registerButton";

const MobileHeader = () => {
  return (
    <FixedHeader>
      <Flex alignItems="center">
        <SunLogo width="6rem" m="0 0.3rem" />
        <Text textAlign="right" pr="1rem" flex="1">
          <LanguageSelect color="darkgray" />
        </Text>
        <RegisterButton width="11rem" />
      </Flex>
    </FixedHeader>
  );
};

export default MobileHeader;
