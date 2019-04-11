webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_solarisLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/solarisLogo */ "./components/solarisLogo.js");
/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/logo */ "./components/logo.js");
/* harmony import */ var _themeContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./themeContainer */ "./pages/themeContainer.js");
/* harmony import */ var _language_strings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language/strings */ "./language/strings.js");
/* harmony import */ var _theme_globalStyle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../theme/globalStyle */ "./theme/globalStyle.js");
/* harmony import */ var _theme_color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../theme/color */ "./theme/color.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "/Users/casey/Developer/st/pages/index.js";

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  background: ", ";\n  color: ", ";\n  text-align: center;\n  width: 12rem;\n  padding: 0.5rem;\n  white-space: nowrap;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @media (max-width: 540px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: rgba(255, 255, 255, 0.8);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: white;\n  max-width: 50%;\n  /* align-self: flex-end; */\n  position: absolute;\n  bottom: 0%;\n  right: 0;\n\n  @media (max-width: 540px) {\n    position: relative;\n    max-width: inherit;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  height: 40rem;\n\n  img {\n    position: absolute;\n    object-fit: cover;\n    height: 100%;\n    z-index: -1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 95%;\n  margin: auto;\n\n  img {\n    max-height: 40rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}













rebass__WEBPACK_IMPORTED_MODULE_13__["Text"].defaultProps = {
  fontSize: "copy",
  fontFamily: "sans",
  fontWeight: 100,
  lineHeight: "copy",
  color: "gray"
};

var Heading3 = function Heading3(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Text"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    fontSize: "heading3",
    fontFamily: "serif",
    lineHeight: "heading3",
    color: "copper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

var Heading2 = function Heading2(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Text"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    fontSize: "heading2",
    fontFamily: "serif",
    lineHeight: "heading2",
    color: "copper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};

var Heading1 = function Heading1(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Text"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    fontSize: "heading1",
    fontFamily: "serif",
    lineHeight: "heading1",
    color: "copper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
};

var LocationText = function LocationText(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    fontSize: "location",
    lineHeight: "location",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }));
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].section(_templateObject());
var OverlayImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].section(_templateObject2());
var TextInsert = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject3());
var ClubContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(rebass__WEBPACK_IMPORTED_MODULE_13__["Box"])(_templateObject4());
var DoubleContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(rebass__WEBPACK_IMPORTED_MODULE_13__["Flex"])(_templateObject5());
var HeroWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].section(_templateObject6(), _theme_color__WEBPACK_IMPORTED_MODULE_12__["default"].BEIGE, _theme_color__WEBPACK_IMPORTED_MODULE_12__["default"].WHITE);
var Register = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].span(_templateObject7(), _theme_color__WEBPACK_IMPORTED_MODULE_12__["default"].DARK_BROWN, _theme_color__WEBPACK_IMPORTED_MODULE_12__["default"].WHITE);

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_themeContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_theme_globalStyle__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HeroWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Flex"], {
    p: "2rem",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      fill: _theme_color__WEBPACK_IMPORTED_MODULE_12__["default"].DARK_BROWN
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Flex"], {
    flex: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LocationText, {
    ml: "2rem",
    mr: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Belford Experience Center", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), "101 \u2013 4211 Kingsway, Burnaby"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LocationText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "604 336 0899", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), "Open Daily 11 am to 5 pm (except Friday)")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Register, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, _language_strings__WEBPACK_IMPORTED_MODULE_10__["default"].register))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Text"], {
    mt: "7rem",
    fontSize: ["2.5rem", "title"],
    fontFamily: "serif",
    textAlign: "center",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "SUN TOWERS", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Text"], {
    as: "span",
    fontFamily: "serif",
    fontSize: ["3.5rem", "titleNum"],
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "2")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Text"], {
    mt: "3rem",
    mb: "3rem",
    fontSize: ["1.2rem", "headline"],
    fontFamily: "sans",
    lineHeight: ["2rem", "headline"],
    textAlign: "center",
    style: {
      textTransform: "uppercase"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Get Your Front Row Seat", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), "To Metrotown")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    style: {
      width: "100%"
    },
    src: "static/tower-hero.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    mt: "5rem",
    mb: "5rem",
    width: ["80%", "32rem"],
    ml: "auto",
    mr: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Heading2, {
    textAlign: "center",
    mb: "2.5rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Sun Towers in Metrotown's", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), "Best Address"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Text"], {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Close to all the action, it is home to an international lifestyle paired with the unltimate convenience of SkyTrain and destination shopping. A place of unmatched amenities and prestigious personal services.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Image"], {
    width: 1 / 1,
    src: "static/tower-sunset.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    mt: "5rem",
    mb: "5rem",
    width: ["80%", "32rem"],
    ml: "auto",
    mr: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Heading2, {
    textAlign: "center",
    mb: "1rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "The Sun as returned to Metrotown"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Text"], {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Now it's your turn to take centre stage")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OverlayImageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Image"], {
    width: 1 / 1,
    src: "static/pool.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ClubContainer, {
    p: "2rem",
    width: ["80%", "23rem"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Text"], {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_solarisLogo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Heading3, {
    mt: "2rem",
    mb: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "Membership Included"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Text"], {
    mb: "2rem",
    color: "copper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "Enjoy the exclusive, private Solaris Club - 24,000 sf of unmatched amenity over 3 floors, including swimming pool, sauna, badminton court, golf room, Sky Garden and more."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Register, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, _language_strings__WEBPACK_IMPORTED_MODULE_10__["default"].register)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DoubleContainer, {
    mt: "3rem",
    mb: "3rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    flex: "1",
    ml: ["auto", "3rem"],
    mr: ["auto", "3rem"],
    mb: ["2rem", 0],
    mt: ["0", "3rem"],
    width: ["80%", "auto"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Heading1, {
    mb: "1rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "Priority Daycare Access"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, "Enjoy the exclusive, private Solaris Club - 24,000 sf of unmatched amenity over 3 floors, including swimming pool, sauna, badminton court, golf room, Sky Garden and more.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    width: [1 / 1, 1 / 2],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Image"], {
    src: "static/daycare.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OverlayImageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Image"], {
    width: 1 / 1,
    src: "static/livingroom.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextInsert, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Text"], {
    p: "2rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, "The distinct interiors of each home echo a modern elegance,with thoughtfully designed floorplans, sleek, modern kitchens, and sophisticated touches at every turn. Interior colours are elegant and understated. Beautiful woods add warmth; classic marble and quartz bring sophistication."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DoubleContainer, {
    mt: "3rem",
    mb: "3rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    flex: "1",
    ml: ["auto", "3rem"],
    mr: ["auto", "3rem"],
    mb: ["2rem", 0],
    mt: ["0", "3rem"],
    width: ["80%", "auto"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Heading1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, "The Best Location, And So Much More.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Box"], {
    width: [1 / 1, 1 / 2],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_13__["Image"], {
    src: "static/location.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.b64fca14a88210bb1945.hot-update.js.map