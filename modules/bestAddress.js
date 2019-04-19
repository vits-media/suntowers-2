import { Text } from "rebass";
import { Heading2 } from "../components/headings";
import { Box } from "rebass";

import { useTranslation } from "react-i18next";

const BestAddress = props => {
  const { t } = useTranslation();
  return (
    <Box {...props}>
      <Heading2 textAlign="center" mb="2.5rem" mr="4rem" ml="4rem">
        {t("bestAddress")}
      </Heading2>
      <Text textAlign="center" margin="auto">
        {t("closeToAction")}
      </Text>
    </Box>
  );
};

export default BestAddress;
