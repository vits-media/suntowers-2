import { Box, Flex, Image, Text } from "rebass";
import { useTranslation } from "react-i18next";

const FormFoot = props => {
  const { t } = useTranslation();
  return (
    <Flex {...props} flexDirection={["column-reverse", "row"]}>
      <Box
        mr={["0", "1rem"]}
        mt={["2rem", "0"]}
        width={[1 / 1, "8rem", "12rem"]}
      >
        <Text textAlign={["center", "left"]}>
          <Image width="5rem" src="/static/belford.png" mr="1rem" />
        </Text>
      </Box>

      <Box mr={["0", "1rem"]} mt={["2rem", "0"]} flex="1">
        <Text
          fontSize="location"
          lineHeight="location"
          textAlign={["center", "left"]}
          margin={["auto"]}
          style={{ maxWidth: "35rem" }}
        >
          Sales & Marketing by Key Marketing. This is not an offering for sale.
          An offering for sale can only be made by way of disclosure statement
          E.&O.E.
        </Text>
      </Box>

      <Box width={[1 / 1, "12rem"]}>
        <Flex flexDirection={["column", "column", "row"]}>
          <Box mr="1rem">
            <Text
              fontSize="location"
              lineHeight="location"
              textAlign={["center", "left"]}
              style={{ whiteSpace: "nowrap" }}
              color="copper"
            >
              {t("experienceCenter")}
              <br />
              {t("experienceAddress")}
              <br />
              {t("experiencePhone")}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FormFoot;
