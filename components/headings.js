import { Text } from "rebass";

export const Heading3 = props => (
  <Text
    {...props}
    fontSize={["1.6rem", "2rem"]}
    fontFamily="serif"
    lineHeight="heading3"
    color="copper"
  />
);

export const Heading2 = props => (
  <Text
    {...props}
    fontSize={["2rem", "3rem"]}
    lineHeight={["2.5rem", "3.2rem"]}
    fontFamily="vinter"
    color="copper"
  />
);

export const Heading1 = props => (
  <Text
    {...props}
    fontSize={["3rem", "3rem", "4.5rem"]}
    lineHeight={["3.5rem", "3.5rem", "4.5rem"]}
    fontFamily="serif"
    color="copper"
  />
);
