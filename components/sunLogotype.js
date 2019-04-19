import { Text } from "rebass";

const sunLogotype = () => {
  return (
    <>
      <Text
        mt={["3rem", "7rem", "10rem", "13rem"]}
        fontSize={["3rem", "4.7rem", "5.5rem", "8.5rem"]}
        fontFamily="vinter"
        textAlign="center"
        color="white"
      >
        SUN TOWERS&nbsp;
        <Text
          as="span"
          fontFamily="vinter"
          fontSize={["4.5rem", "6.7rem", "7.8rem", "12rem"]}
          color="white"
        >
          2
        </Text>
      </Text>
    </>
  );
};

export default sunLogotype;
