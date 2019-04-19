import { Text, Box } from "rebass";
import { Heading2 } from "../components/headings";
import { useTranslation } from "react-i18next";

const TheSun = props => {
  const { t } = useTranslation();
  return (
    <Box {...props}>
      <Heading2 textAlign="center" mb="1rem">
        {t("theSun")}
      </Heading2>

      <Text textAlign="center">{t("centreStage")}</Text>
    </Box>
  );
};

export default TheSun;
