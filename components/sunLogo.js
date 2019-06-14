import { Box } from "rebass";
import ReactSVG from "react-svg";

const SunLogo = props => {
  return (
    <Box {...props}>
      <ReactSVG svgStyle={{ fill: "#8B634A" }} src="/static/logo-full.svg" />
    </Box>
  );
};

export default SunLogo;
