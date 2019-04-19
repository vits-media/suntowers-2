import { Box, Flex, Image, Text } from "rebass";
import { Heading1 } from "../components/headings";
import { useTranslation } from "react-i18next";

const Daycare = () => {
  const { t } = useTranslation();
  return (
    <Flex flexDirection={["column", "row"]}>
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
  );
};

export default Daycare;
