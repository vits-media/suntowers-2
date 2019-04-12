export default () => (
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

    // p {
    //   font-size: 0.8rem;
    //   line-height: 1.5rem;
    //   font-weight: 100;
    // }

    // h1,
    // h3 {
    //   font-family: "vinter";
    // }

    // h1 {
    //   font-weight: 100;
    // }

    // h2 {
    //   font-family: "vinter";
    //   font-weight: 100;
    // }

    // h3 {
    //   font-family: "vinter";
    //   font-weight: 100;
    // }
  `}</style>
);
