import { Box, Flex, Image } from "rebass";
import { Heading1 } from "../components/headings";
import { useTranslation } from "react-i18next";
import Section from "../components/section";

const Location = () => {
  const { t } = useTranslation();
  return (
    <Section>
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
          <Image src="/static/location.png" />
        </Box>
      </Flex>
    </Section>
  );
};

export default Location;
