import styled from "styled-components";
import { Flex, Box, Text, Image } from "rebass";
import { display } from "styled-system";

const DisplayContainer = styled(Box)`
  ${display}
`;

export const MobileOnly = props => (
  <DisplayContainer {...props} display={["block", "none", "none"]} />
);

export const TabletOnly = props => (
  <DisplayContainer {...props} display={["none", "block"]} />
);

export const DesktopOnly = props => (
  <DisplayContainer {...props} display={["none", "none", "block"]} />
);

export const TabletDesktopOnly = props => (
  <DisplayContainer {...props} display={["none", "block", "block"]} />
);

export default DisplayContainer;
