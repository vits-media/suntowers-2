import { Text } from "rebass";

export default () => {
  Text.defaultProps = {
    fontSize: "copy",
    fontFamily: "sans",
    fontWeight: 100,
    lineHeight: "copy",
    color: "gray"
  };

  return (
    <style global jsx>{`
      @font-face {
        font-family: "gotham";
        src: url("static/fonts/GothamLight.ttf") format("truetype");
        font-weight: 100;
      }
      @font-face {
        font-family: "gotham";
        src: url("static/fonts/GothamBook.ttf") format("truetype");
        font-weight: 300;
      }
      @font-face {
        font-family: "gotham";
        src: url("static/fonts/GothamMedium.ttf") format("truetype");
        font-weight: 400;
      }
      @font-face {
        font-family: "gotham";
        src: url("static/fonts/GothamBold.otf") format("opentype");
        font-weight: 700;
      }
      @font-face {
        font-family: "vinter";
        src: url("static/fonts/vintermedium.ttf") format("truetype");
        font-weight: 100;
      }
      @font-face {
        font-family: "minion";
        src: url("static/fonts/MinionPro-Regular.ttf") format("truetype");
        font-weight: 300;
      }

      *,
      :after,
      :before {
        box-sizing: inherit;
      }
      html,
      body {
        margin: 0;
        padding: 0;
      }

      body {
        font-size: 16px;
        font-family: "gotham", sans-serif;
      }

      a,
      a:visited {
        color: white;
      }
    `}</style>
  );
};
