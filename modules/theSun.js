import { Text } from "rebass";
import { Heading2 } from "../components/headings";
import { useTranslation } from "react-i18next";

const TheSun = () => {
  const { t } = useTranslation();
  return (
    <>
      <Heading2 textAlign="center" mb="1rem">
        {t("theSun")}
      </Heading2>

      <Text textAlign="center">{t("centreStage")}</Text>
    </>
  );
};

export default TheSun;
