import i18n from "i18next";
import { Text } from "rebass";

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

const LanguageButton = (props) => {
  const {
    lang,
    gap = '1rem',
    activeColor = 'white',
    color = 'copper', ...restProps
  } = props;

  return (
    <Text
      {...restProps}
      as="span"
      bg="transparent"
      color={lang === i18n.language ? activeColor : color}
      mr={gap}
      p="0"
      fontSize="location"
      lineHeight="1.8rem"
      fontWeight="bold"
      style={{ cursor: "pointer" }}
    />
  );
};

const LanguageSelect = props => {
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
