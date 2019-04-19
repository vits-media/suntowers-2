import ReactSVG from "react-svg";
import { Box } from "rebass";

const SolarisLogo = props => {
  return (
    <Box {...props} width="5rem">
      <ReactSVG src="static/solaris.svg" />
    </Box>
  );
};

export default SolarisLogo;
