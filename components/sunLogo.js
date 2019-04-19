import { Box } from "rebass";
import ReactSVG from "react-svg";

const SunLogo = () => {
  return (
    <Box width={["7.5rem", "10rem"]}>
      <ReactSVG svgStyle={{ fill: "#8B634A" }} src="static/logo-full.svg" />
    </Box>
  );
};

export default SunLogo;
