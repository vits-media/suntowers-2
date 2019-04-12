const breakpoints = ["540px", "900px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];

export default {
  breakpoints: breakpoints,

  // fontSizes: ["0.8rem", "1.5rem", "1.5rem", "2.5rem", "4.7rem", "6.7rem"],

  fontSizes: {
    title: "4.7rem",
    titleNum: "6.7rem",
    headline: "1.6rem",
    heading1: "3rem",
    heading2: "2rem",
    heading3: "1.6rem",
    copy: "1rem",
    location: "0.8rem"
  },
  lineHeights: {
    headline: "2.5rem",
    heading1: "3.5rem",
    heading2: "2.5rem",
    heading3: "2rem",
    copy: "1.8rem",
    location: "1rem"
  },
  // lineHeights: ["0.8rem", "1.5rem", "2.3rem", "2.5rem", "4.7rem"],
  colors: {
    copper: "#8B634A",
    gray: "#8C8C8C",
    white: "#ffffff"
  },
  // space: [
  //   0, 4, 8, 16, 32, 64, 128, 256
  // ],
  fonts: {
    vinter: "vinter, serif",
    serif: "minion, serif",
    sans: "gotham, sans-serif"
  }
  // shadows: {
  //   small: '0 0 4px rgba(0, 0, 0, .125)',
  //   large: '0 0 24px rgba(0, 0, 0, .125)'
  // }
};
