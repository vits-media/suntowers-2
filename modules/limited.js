import { Box, Text } from "rebass";
import { useTranslation } from "react-i18next";

const Limited = props => {
  const { t } = useTranslation();
  return (
    <Box {...props}>
      <Text textAlign={["inherit", "center"]}>
        <Text
          color="copper"
          mb="1rem"
          fontSize={["2rem", "3.5rem"]}
          lineHeight={["2.5rem", "3.2rem"]}
          fontFamily="serif"
          color="copper"
        >
          {t("limited")}
        </Text>

        <Text color="copper" width={["auto", "32rem", "32rem"]} margin="auto">
          {t("information")}
        </Text>
      </Text>
    </Box>
  );
};

export default Limited;
