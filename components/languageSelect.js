import i18n from "i18next";
import { Text } from "rebass";

const LanguageButton = ({ lang, ...props }) => {
  const activeColor = lang === i18n.language ? "white" : "copper";
  return (
    <Text
      {...props}
      as="span"
      bg="transparent"
      color={["copper", activeColor]}
      mr={["0.5rem", "1rem"]}
      p="0"
      fontSize="location"
      lineHeight="1.8rem"
      fontWeight="bold"
      style={{ cursor: "pointer" }}
    />
  );
};

const LanguageSelect = props => {
  const languages = [
    {
      code: "en",
      string: "EN"
    },
    {
      code: "zh",
      string: "中文"
    }
  ];

  const changeLanguage = lng => i18n.changeLanguage(lng);

  const languageItems = languages.map(({ code, string }, index) => (
    <LanguageButton
      {...props}
      key={index}
      lang={code}
      onClick={() => changeLanguage(code)}
    >
      {string}
    </LanguageButton>
  ));

  return languageItems;
};

export default LanguageSelect;
