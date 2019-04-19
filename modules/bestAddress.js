import { Text } from "rebass";
import { Heading2 } from "../components/headings";
import { useTranslation } from "react-i18next";

const BestAddress = () => {
  const { t } = useTranslation();
  return (
    <>
      <Heading2 textAlign="center" mb="2.5rem" mr="4rem" ml="4rem">
        {t("bestAddress")}
      </Heading2>
      <Text textAlign="center" margin="auto">
        {t("closeToAction")}
      </Text>
    </>
  );
};

export default BestAddress;
