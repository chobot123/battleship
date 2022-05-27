/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    height: 100%;\n    overflow: hidden;\n}\n\nbody {\n    background-color: grey;\n}\n\nbody, .content {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    min-height: 100%;\n}\n\n#title {\n    text-align: center;\n    margin: 0;\n    padding: 1rem;\n}\n\n#board-title {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board {\n    display: grid;\n    grid-template: repeat(10, minmax(0, 1fr)) / repeat(10, minmax(0, 1fr));\n    min-width: 400px;\n    min-height: 400px;\n}\n\n.board.two {\n    pointer-events: auto;\n}\n\n.board.two>*:hover {\n    border: 1px solid red;\n}\n\n.boards {\n    display: flex;\n    justify-content: center;\n    gap: 20%;\n    flex-wrap: wrap;\n}\n\n.cell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: black solid 1px;\n    user-select: none;\n}\n\n\n.ship.wrapper {\n    display: flex;\n}\n\n.ships-container {\n    padding: 20px;\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    justify-content: center;\n}\n\n.ships-container>*{\n    margin: 1rem;\n}\n\n.ships-container>*:hover {\n    transform: scale(1.1);\n}\n\n\n.carrier,\n.carrier-container {\n    background-color: darkblue;\n}\n\n.battleship,\n.battleship-container {\n    background-color: pink;\n}\n\n.cruiser,\n.cruiser-container {\n    background-color: lightgreen;\n}\n.submarine,\n.submarine-container {\n    background-color: rgb(80, 0, 98);\n}\n.destroyer,\n.destroyer-container {\n    background-color: yellow;\n}\n\n.hit {\n    background-color: rgb(255, 0, 0);\n}\n\n.miss {\n    background-color: aqua;\n}\n\n.sunk {\n    background-color: rgb(29, 0, 0) !important;\n}\n\n.instructions {\n    text-align: center;\n}\n\n.modal {\n    display: flex;\n    position: fixed;\n    padding-top: 11em;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.8);\n    align-items: flex-start;\n    justify-content: center;\n}\n\n.modal-content {\n    color: white;\n    font-size: 2rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.restart {\n    padding-top: 5px;\n    background-color: white;\n    border: 4px solid white;\n    border-radius: 12px;\n}\n\n.opacity {\n    opacity: 0.2;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,0JAA0J;IAC1J,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sEAAsE;IACtE,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;AACrB;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;;AAGA;;IAEI,0BAA0B;AAC9B;;AAEA;;IAEI,sBAAsB;AAC1B;;AAEA;;IAEI,4BAA4B;AAChC;AACA;;IAEI,gCAAgC;AACpC;AACA;;IAEI,wBAAwB;AAC5B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["html {\n    height: 100%;\n    overflow: hidden;\n}\n\nbody {\n    background-color: grey;\n}\n\nbody, .content {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    min-height: 100%;\n}\n\n#title {\n    text-align: center;\n    margin: 0;\n    padding: 1rem;\n}\n\n#board-title {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board {\n    display: grid;\n    grid-template: repeat(10, minmax(0, 1fr)) / repeat(10, minmax(0, 1fr));\n    min-width: 400px;\n    min-height: 400px;\n}\n\n.board.two {\n    pointer-events: auto;\n}\n\n.board.two>*:hover {\n    border: 1px solid red;\n}\n\n.boards {\n    display: flex;\n    justify-content: center;\n    gap: 20%;\n    flex-wrap: wrap;\n}\n\n.cell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: black solid 1px;\n    user-select: none;\n}\n\n\n.ship.wrapper {\n    display: flex;\n}\n\n.ships-container {\n    padding: 20px;\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    justify-content: center;\n}\n\n.ships-container>*{\n    margin: 1rem;\n}\n\n.ships-container>*:hover {\n    transform: scale(1.1);\n}\n\n\n.carrier,\n.carrier-container {\n    background-color: darkblue;\n}\n\n.battleship,\n.battleship-container {\n    background-color: pink;\n}\n\n.cruiser,\n.cruiser-container {\n    background-color: lightgreen;\n}\n.submarine,\n.submarine-container {\n    background-color: rgb(80, 0, 98);\n}\n.destroyer,\n.destroyer-container {\n    background-color: yellow;\n}\n\n.hit {\n    background-color: rgb(255, 0, 0);\n}\n\n.miss {\n    background-color: aqua;\n}\n\n.sunk {\n    background-color: rgb(29, 0, 0) !important;\n}\n\n.instructions {\n    text-align: center;\n}\n\n.modal {\n    display: flex;\n    position: fixed;\n    padding-top: 11em;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.8);\n    align-items: flex-start;\n    justify-content: center;\n}\n\n.modal-content {\n    color: white;\n    font-size: 2rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.restart {\n    padding-top: 5px;\n    background-color: white;\n    border: 4px solid white;\n    border-radius: 12px;\n}\n\n.opacity {\n    opacity: 0.2;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }", "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA;+EAC+E;;AAE/E;;;EAGE;;CAED;IACG,iBAAiB,EAAE,MAAM;IACzB,8BAA8B,EAAE,MAAM;EACxC;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,SAAS;EACX;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;IACE,uBAAuB,EAAE,MAAM;IAC/B,SAAS,EAAE,MAAM;IACjB,iBAAiB,EAAE,MAAM;EAC3B;;EAEA;;;IAGE;;EAEF;IACE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,6BAA6B;EAC/B;;EAEA;;;IAGE;;EAEF;IACE,mBAAmB,EAAE,MAAM;IAC3B,0BAA0B,EAAE,MAAM;IAClC,iCAAiC,EAAE,MAAM;EAC3C;;EAEA;;IAEE;;EAEF;;IAEE,mBAAmB;EACrB;;EAEA;;;IAGE;;EAEF;;;IAGE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;EAC1B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;;;;;IAKE,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;EACnB;;EAEA;;;IAGE;;EAEF;UACQ,MAAM;IACZ,iBAAiB;EACnB;;EAEA;;;IAGE;;EAEF;WACS,MAAM;IACb,oBAAoB;EACtB;;EAEA;;IAEE;;EAEF;;;;IAIE,0BAA0B;EAC5B;;EAEA;;IAEE;;EAEF;;;;IAIE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;;IAEE;;EAEF;;;;IAIE,8BAA8B;EAChC;;EAEA;;IAEE;;EAEF;IACE,8BAA8B;EAChC;;EAEA;;;;;IAKE;;EAEF;IACE,sBAAsB,EAAE,MAAM;IAC9B,cAAc,EAAE,MAAM;IACtB,cAAc,EAAE,MAAM;IACtB,eAAe,EAAE,MAAM;IACvB,UAAU,EAAE,MAAM;IAClB,mBAAmB,EAAE,MAAM;EAC7B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;EACpB;;EAEA;;IAEE;;EAEF;;IAEE,YAAY;EACd;;EAEA;;;IAGE;;EAEF;IACE,6BAA6B,EAAE,MAAM;IACrC,oBAAoB,EAAE,MAAM;EAC9B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;;IAGE;;EAEF;IACE,0BAA0B,EAAE,MAAM;IAClC,aAAa,EAAE,MAAM;EACvB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,aAAa;EACf;;EAEA;;IAEE;;EAEF;IACE,aAAa;EACf","sourcesContent":["/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/UI/boards.js":
/*!**********************************!*\
  !*** ./src/scripts/UI/boards.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeBoard": () => (/* binding */ makeBoard),
/* harmony export */   "toggleBoardOpacity": () => (/* binding */ toggleBoardOpacity)
/* harmony export */ });
const makeBoard = () => {

    const boards = document.createElement("div");
    boards.className = "boards";
    
    const  playerOne = document.createElement("div");
    const playerTwo = document.createElement("div");
    playerOne.className = 'playerOne';
    playerTwo.className = 'playerTwo';
    playerTwo.style.display = `none`;

    const pOneBoard = document.createElement("div");
    const pTwoBoard = document.createElement("div");
    pOneBoard.className = `board one`;
    pTwoBoard.className = `board two`;

    const pOneBoardTitle = document.createElement("id");
    pOneBoardTitle.id = "board-title";
    pOneBoardTitle.textContent = "My Board";

    const pTwoBoardTitle = document.createElement("id");
    pTwoBoardTitle.id = "board-title";
    pTwoBoardTitle.textContent = "Computer Board";


    makeGrid(pOneBoard);
    makeGrid(pTwoBoard);
    playerOne.appendChild(pOneBoardTitle);
    playerTwo.appendChild(pTwoBoardTitle);
    playerOne.appendChild(pOneBoard);
    playerTwo.appendChild(pTwoBoard);
    boards.appendChild(playerOne);
    boards.appendChild(playerTwo);

    return boards;
}

//make a grid with class names as array col and rows
const makeGrid = (thisBoard) => {
    let j = 0;
    for(let i = 0; i < 100; i++) {
        if(i % 10 === 0 && i > 0){
            j++;
        }
        let cell = document.createElement("div");
        cell.className = 'cell';
        cell.innerHTML = `${j}${i % 10}`;
        cell.style.color = "rgba(0,0,0,0)";
        cell.style.userSelect = "none";
        thisBoard.appendChild(cell);
    }
}

const toggleBoardOpacity = (board) => {
    board.classList.toggle("opacity");
}



/***/ }),

/***/ "./src/scripts/UI/header.js":
/*!**********************************!*\
  !*** ./src/scripts/UI/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTitle": () => (/* binding */ makeTitle)
/* harmony export */ });

const makeTitle = () => {
    const title = document.createElement("h1");
    title.id = "title";
    title.innerHTML = "Battleship";
    return title;
}



/***/ }),

/***/ "./src/scripts/UI/init.js":
/*!********************************!*\
  !*** ./src/scripts/UI/init.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _renderShips_displayShips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderShips/displayShips */ "./src/scripts/UI/renderShips/displayShips.js");
/* harmony import */ var _instructions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructions */ "./src/scripts/UI/instructions.js");


const { makeTitle } = __webpack_require__(/*! ./header */ "./src/scripts/UI/header.js");
const { makeBoard } = __webpack_require__(/*! ./boards */ "./src/scripts/UI/boards.js")



const init = () => {
    
    const content = document.createElement("div");
    content.className = "content";
    document.body.appendChild(content);

    content.appendChild(makeTitle());
    content.appendChild(makeBoard());
    content.appendChild((0,_renderShips_displayShips__WEBPACK_IMPORTED_MODULE_0__.getShips)());
    content.appendChild(_instructions__WEBPACK_IMPORTED_MODULE_1__["default"].shipInstructions());
    
}



/***/ }),

/***/ "./src/scripts/UI/instructions.js":
/*!****************************************!*\
  !*** ./src/scripts/UI/instructions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });



const instructions = (() => {

    const instructions = document.createElement("div");
    instructions.className = "instructions";

    const shipInstructions = () => {
        instructions.textContent = "Double Click a Ship to Change Orientation";
        return instructions;
    }

    const gameInstructions = () => {
        instructions.textContent = "Destroy the Enemy Ships";
        return instructions;
    }

    return {
        instructions,
        shipInstructions,
        gameInstructions,
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instructions);

/***/ }),

/***/ "./src/scripts/UI/renderShips/displayShips.js":
/*!****************************************************!*\
  !*** ./src/scripts/UI/renderShips/displayShips.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getShips": () => (/* binding */ getShips),
/* harmony export */   "makeHorizontal": () => (/* binding */ makeHorizontal),
/* harmony export */   "makeVertical": () => (/* binding */ makeVertical)
/* harmony export */ });
const displayShip = (name, length) => {

        const shipWrapper = document.createElement("div");
        const ship = document.createElement("div");

        shipWrapper.appendChild(ship);
        shipWrapper.className = `${name}-container`;
        shipWrapper.style.display = `flex`;

        ship.className = name;
        ship.style.display = `grid`;
        ship.style.minWidth = `40px`;
        ship.style.minHeight = `${40 * length}px`;
        ship.style.gridTemplateRows = `repeat(${length}, minmax(0, 40px))`;
        ship.setAttribute("draggable", "true");
        ship.classList.add('vertical');



        for(let i = 0; i < length; i++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.classList.add("ship");
            cell.innerHTML = i;
            cell.setAttribute("clickable", "false");
            cell.style.color = "transparent";
            cell.setAttribute("draggable", "false");
            ship.appendChild(cell);
        }
        return shipWrapper;
}

const makeVertical = (ship) => {

    ship.classList.remove('horizontal');
    ship.classList.add('vertical');
    ship.style.gridTemplateRows = `repeat(${ship.children.length}, minmax(0,40px))`
    ship.style.minHeight = `${40 * length}px`;
    ship.style.minWidth = `40px`;
    ship.style.gridTemplateColumns = "";
}

const makeHorizontal = (ship) => {

    ship.classList.remove('vertical');
    ship.classList.add('horizontal');
    ship.style.gridTemplateColumns = `repeat(${ship.children.length}, minmax(0,40px))`
    ship.style.minHeight = `40px`;
    ship.style.minWidth = `${40 * ship.children.length}px`;
    ship.style.gridTemplateRows = "";
}

const getShips = () => {

    const shipsContainer = document.createElement("div");
    shipsContainer.className = `ships-container`;

    shipsContainer.appendChild(displayShip('carrier', 5));
    shipsContainer.appendChild(displayShip('battleship', 4));
    shipsContainer.appendChild(displayShip('cruiser', 3));
    shipsContainer.appendChild(displayShip('submarine', 3));
    shipsContainer.appendChild(displayShip('destroyer', 2));

    return shipsContainer;
}




/***/ }),

/***/ "./src/scripts/UI/renderShips/placeShips.js":
/*!**************************************************!*\
  !*** ./src/scripts/UI/renderShips/placeShips.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderShips": () => (/* binding */ renderShips)
/* harmony export */ });
/* harmony import */ var _displayShips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayShips */ "./src/scripts/UI/renderShips/displayShips.js");
/* harmony import */ var _instructions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../instructions */ "./src/scripts/UI/instructions.js");
/* harmony import */ var _boards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../boards */ "./src/scripts/UI/boards.js");




const renderShips = (gameBoard) => {

    let shipCount = 0;

    const shipsContainer = document.querySelector(".ships-container")
    const content = document.querySelector(".content")
    const myBoard = document.querySelector(".board.one");
    let index = "";
    let currentShip = "";
    let location = {
        target : "",
        x : "",
        y : "",
    }

    // ================= Helper Functions ========================= //

    const getShipIndex = () => {
        //get index of ship on clicking a part of ship
        shipsContainer.addEventListener("mousedown" , (e) => {
            if(e.target.className === 'cell ship'){
                index = e.target.innerHTML;
            }
        })
    }

    const changeShipOrientation = () => {
        //double click a ship to turn it horizontal or vertical
        shipsContainer.addEventListener("dblclick", (e) => {
            
            if(e.target.className === 'cell ship'){
                (e.target.parentElement.classList[1] === 'vertical') ?
                    (0,_displayShips__WEBPACK_IMPORTED_MODULE_0__.makeHorizontal)(e.target.parentElement) :
                    (0,_displayShips__WEBPACK_IMPORTED_MODULE_0__.makeVertical)(e.target.parentElement);
            }
        })
    }

    const getShip = () => {
        shipsContainer.addEventListener("dragstart", (e) => {
            currentShip = e.target;
        })
    }

    const getBoardLocation = () => {
        //when cursor enters a grid block 
        content.addEventListener("dragenter", (e) => {
            if(e.target.className === 'cell'){
                location.target = e.target.innerHTML;
                location.x = location.target.at(0);
                location.y = location.target.at(1);

                if(location.x === '0'){
                    location.target = location.target.at(1);
                }      
                e.target.style.backgroundColor = "aqua";
                if(currentShip.classList[1] === 'vertical'){

                    (e.target.innerHTML.at(0) > 0) ? location.x = parseInt(location.x) - parseInt(index) 
                    : location.x = parseInt(location.x);

                    location.y = parseInt(location.y);

                
                }
                else if(currentShip.classList[1] === 'horizontal'){

                    (e.target.innerHTML.at(1) > 0) ? location.y = parseInt(location.y) - parseInt(index) 
                    : location.y = parseInt(e.target.innerHTML.at(1));

                    location.x = parseInt(location.x);
                }
            }
            else {

                location.target = "";
                location.x = "";
                location.y = "";
                
            }
        })

    }

    const updateLocation = () => {
        myBoard.addEventListener("dragleave", (e) => {

            if(e.target.className === "cell"){
                e.target.style.backgroundColor = "";
            }
        })
    }

    const renderShip = (myShip, x, y, align = 'vertical') => {
        if(x === 0){
            x = "";
        }
        let coord = parseInt(x.toString() + y.toString());

        let count = 0;
        while(count < myShip.children.length) {
            if(align === 'vertical'){
                myBoard.children[coord].classList.add(myShip.classList[0]);
                coord += 10;
            }
            else if(align === 'horizontal'){
                myBoard.children[coord].classList.add(myShip.classList[0]);
                coord += 1;
            }
            count++;
        }

    }

    const setShip = () => {
        //when user chooses a place to place ship
        content.addEventListener("dragend", (e) => {
            //we place ship
            //if valid, ship disappears from display onto board
            //else we start all over
            if(location.target !== ""){

                let shipIndex = gameBoard.ships.findIndex(e => e.name === currentShip.classList[0]);
                if(gameBoard.placeShip(gameBoard.ships[shipIndex], location.x,
                                        location.y, currentShip.classList[1])){
                                            
                    renderShip(currentShip, location.x, location.y, currentShip.classList[1]);
                    currentShip.style.display = 'none';
                    shipCount++;
                }
                myBoard.children[location.target].style.backgroundColor = "";
            }

            //if all ships are placed, reveal enemy board
            if(shipCount === 5){
                let compDisplay = document.querySelector(".playerTwo");
                compDisplay.style.display = ``;
                _instructions__WEBPACK_IMPORTED_MODULE_1__["default"].gameInstructions();
                shipCount = 0;
                (0,_boards__WEBPACK_IMPORTED_MODULE_2__.toggleBoardOpacity)(compDisplay.previousSibling.lastChild); //.board.one
            }
            reset();
        })
    }

    //reset all parameters
    const reset = () => {

        currentShip = "";
        location.target = "";
        location.x = "";
        location.y = "";
        index = "";
    }

    // ===================== Event Listeners ==================== //
    
    getShipIndex();
    getShip();
    changeShipOrientation();
    getBoardLocation();        
    updateLocation();
    setShip();
}




/***/ }),

/***/ "./src/scripts/factory/gameBoard.js":
/*!******************************************!*\
  !*** ./src/scripts/factory/gameBoard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/**
 * Factory Function
 * @description      This function will hold a <ships> array and create a 2D array <myBoard>
 *                   The FF includes functions that places ships on <myBoard>, receives attacks on <myBoard>,
 *                   and updates the status of <ships> depending whether or not a ship that was placed on the board
 *                   was hit, sunk, and in such, whether ALL ships in <ships> have been sunk
 * 
 * @returns { ships, myBoard, placeShip, receiveAttack, isAllSunk } 
 */
const Gameboard = () => {

    //ships array to hold ships
    const ships = [];

    /**
     * Helper Function 
     * @description         CREATE a game board object
     * @returns tempArray   a 2D array where each 'cell' contains the ship name, ship part, and status (0 (DEFAULT) = nothing, 1 = miss, 2 = hit)
     */
    const createBoard = () => {
        let tempArray = Array(10);
        for(let i = 0; i < 10; i++){
            tempArray[i] = Array.from({length: 10}, (e) => {
                if(e === undefined){
                    return e = {
                        ship: 'none',
                        shipPart: 'none',
                        status: 0 
                    }
                }
            })
        }
        return tempArray;
    }
    
    //game board object
    const myBoard = createBoard();

    /**
     * Helper Function for placeShip 
     * @description                   Check whether a ship already exists on the places on the game board myShip was to be potentially placed
     * 
     * @param {Object} myShip         The ship object that is to be potentially placed on the game board
     * @param {Number} x              First parameter of the 2D array, myBoard, and the x-coordinate
     * @param {Number} y              Second parameter of the 2D array, myBoard, and the y-coordinate
     * @param {String} align          The alignment of the ship ('vertical' or 'horizontal')
     * @returns Boolean               Return TRUE if there is no coinciding ship on the board coordinates, else return FALSE
     */
    const noOverlap = (myShip, x, y, align) => {
        if(align === 'horizontal'){
            for(let i = y; i < y + myShip.length && i <= 9; i++){
                if(myBoard[x][i].ship !== "none"){
                    return false;
                }
            }
        }
        else if(align === 'vertical'){
            for(let i = x; i < x + myShip.length && i <= 9; i++){
                if(myBoard[i][y].ship !== "none"){
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Method
     * @description                   Check whether the ship to be placed has a valid coordinate, that in its full length
     *                                fits onto the board, and whether it overlaps with any other ships on the board
     * 
     * @param {Object} myShip         The ship object that is to be potentially placed on the game board
     * @param {Number} x              First parameter of the 2D array, myBoard, and the x-coordinate
     * @param {Number} y              Second parameter of the 2D array, myBoard, and the y-coordinate
     * @param {String} align          The alignment of the ship ('vertical' or 'horizontal')
     * @returns Boolean               Return TRUE, if ship has been placed on a valid position, and return FALSE, if spot is invalid
     */
    const placeShip = (myShip, x, y, align) => {
        x = parseInt(x);
        y = parseInt(y);
        if((x >= 0 && x <= 9) && (y >= 0 && y <= 9) && noOverlap(myShip, x, y, align)){
            let pos = 0;
            if(align === 'horizontal'){
                if(y + myShip.length > 10){
                    return false;
                }
                for(let i = y; i < y + myShip.length; i++){
                    myBoard[x][i].ship = myShip.name;
                    myBoard[x][i].shipPart = myShip.shipParts[pos].position;
                    pos++;
                }
            }
            else if(align === 'vertical') {
                if(x + myShip.length > 10){

                    return false;
                }
                for(let i = x; i < x + myShip.length; i++){
                    myBoard[i][y].ship = myShip.name;
                    myBoard[i][y].shipPart = myShip.shipParts[pos].position;
                    pos++;
                }
            }
            return true;
        }

        return false;
    }

    /**
     * Method
     * @description                   Check the coordinate on the board to see if there is a ship part.
     *                                 If there is no ship, board status changes to 1 (missed), else 2 (hit),
     *                                 and records whether the hit sunk the ship or not and updates accordingly
     * 
     * @param {Number} x              First parameter of the 2D array, myBoard, and the x-coordinate
     * @param {Number} y              Second parameter of the 2D array, myBoard, and the y-coordinate
     * @returns status                An object that records the ship name, hit status, sunk status, and all the
     *                                coordinates on the board that coincide with said sunk ship, if any
     */
    const receiveAttack = (x, y) => {

        let status = {
            ship: "",
            hit: false,
            sunk: false,
            sunkCoord: [],
        }
        if(myBoard[x][y].ship !== 'none'){
            status.ship = myBoard[x][y].ship;
            for(let i = 0; i < ships.length; i++){
                if(ships[i].name === myBoard[x][y].ship){
                    ships[i].hit(myBoard[x][y].shipPart);
                    if(ships[i].isSunk()){
                        status.sunk = true;
                        status.sunkCoord = [...getShip(ships[i].name)];
                    }
                }
            }
            myBoard[x][y].status = 2;
            status.hit = true;
            return status;
        }
        else {
            myBoard[x][y].status = 1;
            return status;
        }
    }

    /**
     * Helper Function
     * @description                 Get the coordinates of a ship
     * @param {String} shipName     The name of the ship
     * @returns coords              An array of coordinates (0 -> 99)
     */
    const getShip = (shipName) => {
        let coords = [];
        myBoard.flat().forEach((cell, index) => {
            if(cell.ship === shipName){
                coords.push(index);
            }
        })
        return coords;
    }

    /**
     * Method
     * @description         Check whether all the ships on the board are sunk
     * @returns Boolean     Returns a boolean based on the above
     */
    const isAllSunk = () => {
        return (ships.every(e => e.isSunk() === true));
    }

    return {
        ships,
        myBoard,
        placeShip,
        receiveAttack,
        isAllSunk
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/scripts/factory/player.js":
/*!***************************************!*\
  !*** ./src/scripts/factory/player.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Factory Function
 * @description     Determine player turn and which board to attack
 * 
 * @returns { myTurn, attack} 
 */
const Player = () => {

    //status of player turn
    let myTurn = false;

    /**
     * 
     * @param {*} board The board object (see gameBoard)
     * @param {*} x                     the x-coordinate
     * @param {*} y                     the y-coordinate
     * @returns board.receiveAttack     Sends an attack to the chosen board
     */
    const attack = (board, x, y) => {
        myTurn = false;
        return board.receiveAttack(x, y);
    }

    return {
        myTurn,
        attack
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/scripts/factory/ship.js":
/*!*************************************!*\
  !*** ./src/scripts/factory/ship.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Factory Function
 * @description             The ship object to be placed on the game board
 *                          Include individual ship parts to coincide with grid coordinate
 *                          Each ship part has a status and position
 * 
 * @param {String} name     name of the ship
 * @param {Number} length   length of the ship
 * @returns {name, length, shipParts, hit, isSunk}
 */

const Ship = (name, length) => {
    
    //array that uses length of ship to create a collection of ship parts
    const shipParts = Array.apply(null, Array(length))
        .map(function (x, i) { 
            x = {                   //status
                "isHit" : false, 
                "position" : i
            }
            return x;
        }
    ); 

    /**
     * Method
     * @description         Changes status of ship part from 'not hit' to 'hit'
     * 
     * @param {Number} pos  position of ship part
     * @returns Boolean     Return TRUE, if hit
     */
    const hit = (pos) => {
        if(shipParts[pos].isHit === false) {
            shipParts[pos].isHit = true;
            return true;
        }
    }
    
    /**
     * Method
     * @description         Filters through each shipPart, and if all art hit, then ship is sunk
     * 
     * @returns Boolean     Return TRUE, if all parts are hit, else return FALSE
     */
    const isSunk = () => {
        if(shipParts.filter((e) => {return e.isHit === true}).length === length) {
            return true;
        }
        else {return false;}
    }

    return {
        name,
        length,
        shipParts,
        hit,
        isSunk,
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/scripts/game_loop/computerAI.js":
/*!*********************************************!*\
  !*** ./src/scripts/game_loop/computerAI.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "compPlaceShips": () => (/* binding */ compPlaceShips)
/* harmony export */ });

/**
* Module
* @description          The algorithm for the computer to attack
*                       1) The computer makes a "choice" 
*                       2) If the board tile is already hit, reroll
*                       3) If there are no previous valid hits, add the first success to moveList
*                       4) If there was a previous hit, check in the 4 cardinal directions for another hit 
*                       5) Rinse and repeat until all ships are sunk
 *          
 * @returns { smartMove }
 */
const computerAttack =(() => {

    const moveList = [];
    let count = 0; //see @checkAround

    /**
     * Method
     * @description                 The algorithm gets a coordinate (choice); since a ship has a minimum length of 2
     *                              the choice needs to only be 'every other' grid cell (ie [0,0], [0,2]...[1,1], [1,3]).
     *                              The algorithm uses this choice to target a grid cell, but if it has been already targeted
     *                              it recursively runs the function until a valid cell is found, and attacks the cell, adding
     *                              the choice to the moveList. If there are no previous moves found on the moveList, the algorithm 
     *                              then 'checkAround' for its next target.
     * 
     * @param {Object} player       The player 
     * @param {Object} enemyBoard   The board the player attacks
     */
    const smartMove = (player, enemyBoard) => {
        
        let choice = {
            
            x : Math.floor(Math.random() * 10),
            y : Math.floor(Math.random() * 10),
            
        }
        
        //x is even -> y must be even
        if(choice.x % 2 === 0){
            while(choice.y % 2 !== 0){
                choice.y = Math.floor(Math.random() * 10);
            }
        }
        //x is odd -> y must be odd
        else { 
            while(choice.y % 2 === 0){
                choice.y = Math.floor(Math.random() * 10);
            }
        }
        
        //if the cell has already been hit, run smartMove again
        if(enemyBoard.myBoard[choice.x][choice.y].status !== 0){
            return smartMove(player, enemyBoard);
        }
        
        if(moveList.length === 0) {
            let attackStatus = player.attack(enemyBoard, choice.x, choice.y);
            if(attackStatus.hit){
                moveList.push(choice);
                renderAttack(choice, attackStatus);
                return;
            }
            else {
                renderAttack(choice, attackStatus);
                return;
            }
        }
        else{ //if there are previous valid moves (there has been a successful hit before) 

            checkAround(player, enemyBoard, moveList[moveList.length - 1].x,
                moveList[moveList.length - 1].y);
            return;    
        }
    }
    
    /**
     * Helper Function
     * @description                    
     * @param {Object} player       The player 
     * @param {Object} enemyBoard   The board the player attacks
     * @param {Number} x            x-coordinate of the board to attack
     * @param {Number} y            y-coordinate of the board to attack
     * @returns 
     */
    const checkAround = (player, enemyBoard, x, y) => {
    
        const direction = ["up", "down", "left", "right"];
        const up = x - 1;
        const down = x + 1;
        const left = y - 1;
        const right = y + 1;
        let choice = {
            x : x, 
            y : y,
        }
        
        //go up
        if(direction[count] === "up"){
            if(x > 0 && enemyBoard.myBoard[up][y].status === 0){
                choice.x = up;
                let attackStatus = player.attack(enemyBoard, up, y);
                if(attackStatus.hit){
                    moveList.push(choice); //add to list 
                    renderAttack(choice, attackStatus);
                }
                else {
                    moveList.reverse();
                    renderAttack(choice, attackStatus);
                    count++;
                }
            }
            else {
                moveList.reverse();
                count++;
                smartMove(player, enemyBoard);
            }
            
        }
    
        else if(direction[count] === "down"){
            if(x < 9 && enemyBoard.myBoard[down][y].status === 0 ){
                choice.x = down;
                let attackStatus = player.attack(enemyBoard, down, y);
                if(attackStatus.hit){
                    moveList.push(choice);
                    renderAttack(choice, attackStatus);
                }
                else {
                    renderAttack(choice, attackStatus);
                    count++;
                }
            }
            else {
                count++;
                smartMove(player, enemyBoard);
            }
        }
    
        else if(direction[count] === "left"){
            if(y > 0 && enemyBoard.myBoard[x][left].status === 0){
                choice.y = left;
                let attackStatus = player.attack(enemyBoard, x, left);
                if(attackStatus.hit){
                    moveList.push(choice);
                    renderAttack(choice, attackStatus);
                }
                else {
                    moveList.reverse();
                    renderAttack(choice, attackStatus);
                    count++;
                }
            }
            else {
                moveList.reverse();
                count++;
                smartMove(player, enemyBoard);
            }
        }

        else if(direction[count] === "right"){
            if(y < 9 && enemyBoard.myBoard[x][right].status === 0 ){
                choice.y = right;
                let attackStatus = player.attack(enemyBoard, x, right);
                if(attackStatus.hit){
                    moveList.push(choice);
                    renderAttack(choice, attackStatus);
                }
                else {
                    renderAttack(choice, attackStatus);
                    count++;
                }
            }
            else {
                count = 0;
                smartMove(player, enemyBoard);
            }
        }
        else {
                while(moveList.length !== 0){
                    moveList.pop();
                }
                count = 0;
                smartMove(player, enemyBoard);
        }
        return;
    }
    
    const renderAttack = (choice, status) => {
    
        const enemyBoardDisplay = document.querySelector('.board.one');
        let x = choice.x;
        let y = choice.y;
    
        if(choice.x === 0){
            x = "";
        }
    
        let currentCoord = parseInt(x.toString() + y.toString());
    
        if(status.hit){
            if(status.sunk){
                for(let i = 0; i < status.sunkCoord.length; i++){
                    let sunkenCoord = status.sunkCoord[i];
                    enemyBoardDisplay.childNodes.item(sunkenCoord)
                        .classList.add("sunk");
                    
                    //resetMoveList
                    if(sunkenCoord < 10){
                        moveList.splice(moveList.indexOf({
                            x: '0',
                            y: sunkenCoord.toString(),
                        }), 1)
                    }else {
                        let convertSunkenCoord = sunkenCoord.toString();
                        moveList.splice(moveList.indexOf({
                            x: convertSunkenCoord.charAt(0),
                            y: convertSunkenCoord.charAt(1),
                        }), 1)
                    }
                }
                count = 0;
            }
            else {
    
                enemyBoardDisplay.children[currentCoord].classList.add("hit");
    
            }
        }
        else {
            
            enemyBoardDisplay.children[currentCoord].classList.add("miss");
    
        }
    }
    
    return {
        smartMove
    }
})();

const compPlaceShips = (computerBoard) => {

    let placeCount = 0;
    while(placeCount < 5){
        let alignment = Math.floor(Math.random() * 2);
        (alignment === 0) ? alignment = 'vertical' : alignment = 'horizontal';
        if(computerBoard.placeShip(computerBoard.ships[placeCount],
                                    Math.floor(Math.random() * 10),
                                    Math.floor(Math.random() * 10),
                                    alignment))
        {
            placeCount++;
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computerAttack);


/***/ }),

/***/ "./src/scripts/game_loop/createBoard.js":
/*!**********************************************!*\
  !*** ./src/scripts/game_loop/createBoard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factory_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory/gameBoard */ "./src/scripts/factory/gameBoard.js");
/* harmony import */ var _factory_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory/ship */ "./src/scripts/factory/ship.js");



const createBoard = () => {
    
    const board = (0,_factory_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const carrier = (0,_factory_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('carrier', 5);
    const battleship = (0,_factory_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('battleship', 4);
    const cruiser = (0,_factory_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('cruiser', 3);
    const submarine = (0,_factory_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('submarine', 3);
    const destroyer = (0,_factory_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('destroyer', 2);

    board.ships.push(carrier);
    board.ships.push(battleship);
    board.ships.push(cruiser);
    board.ships.push(submarine);
    board.ships.push(destroyer);
    
    return board;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBoard);

/***/ }),

/***/ "./src/scripts/game_loop/gameEnd.js":
/*!******************************************!*\
  !*** ./src/scripts/game_loop/gameEnd.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "announceWinner": () => (/* binding */ announceWinner),
/* harmony export */   "resetGame": () => (/* binding */ resetGame)
/* harmony export */ });
/* harmony import */ var _UI_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/init */ "./src/scripts/UI/init.js");
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLoop */ "./src/scripts/game_loop/gameLoop.js");




const announceWinner = (player) => {

    const content = document.querySelector(".content");

    const myModal = document.createElement("div");
    myModal.id = "myModal";
    myModal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const winner = document.createElement("p");
    (player === "computer") ? winner.innerHTML = `You have lost the battle!`
                            : winner.innerHTML = `You have defeated the enemy!`;

    const restartBtn = document.createElement("button");
    restartBtn.className = "restart";
    restartBtn.innerHTML = `Play Again?`;

    content.appendChild(myModal);
    myModal.appendChild(modalContent);
    modalContent.appendChild(winner);
    modalContent.appendChild(restartBtn);

}

const resetGame = () => {
    const reset = document.querySelector(".restart");

    reset.addEventListener("click", () => {
        console.log('works')
        while(document.body.lastChild){
            document.body.removeChild(document.body.lastChild);
        }
        (0,_UI_init__WEBPACK_IMPORTED_MODULE_0__.init)();
        (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.gameLoop)();
    })
}



/***/ }),

/***/ "./src/scripts/game_loop/gameLoop.js":
/*!*******************************************!*\
  !*** ./src/scripts/game_loop/gameLoop.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _factory_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory/player */ "./src/scripts/factory/player.js");
/* harmony import */ var _UI_renderShips_placeShips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/renderShips/placeShips */ "./src/scripts/UI/renderShips/placeShips.js");
/* harmony import */ var _computerAI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computerAI */ "./src/scripts/game_loop/computerAI.js");
/* harmony import */ var _gameEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameEnd */ "./src/scripts/game_loop/gameEnd.js");
/* harmony import */ var _createBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createBoard */ "./src/scripts/game_loop/createBoard.js");
/* harmony import */ var _UI_boards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/boards */ "./src/scripts/UI/boards.js");

/*
    1)Create Players
    2)Create Board
    3)Populate both boards
    4)Attack method
*/








const gameLoop = () => {
    
    const playerOne = (0,_factory_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const playerOneBoard = (0,_createBoard__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const playerBoardDOM = document.querySelector(".board.one")
    playerOne.myTurn = true;
    
    const computer = (0,_factory_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const computerBoard = (0,_createBoard__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const computerBoardDOM = document.querySelector(".board.two");

    (0,_computerAI__WEBPACK_IMPORTED_MODULE_2__.compPlaceShips)(computerBoard);
    (0,_UI_renderShips_placeShips__WEBPACK_IMPORTED_MODULE_1__.renderShips)(playerOneBoard);
    
    computerBoardDOM.addEventListener("mousedown", (e) => {
    
        if(playerOne.myTurn){
            const x = parseInt(e.target.innerHTML.at(0));
            const y = parseInt(e.target.innerHTML.at(1));

            if(e.target.classList[1] === "miss" || e.target.classList[1] === "hit"){
                return;
            }
            else {
                (0,_UI_boards__WEBPACK_IMPORTED_MODULE_5__.toggleBoardOpacity)(playerBoardDOM);
                (0,_UI_boards__WEBPACK_IMPORTED_MODULE_5__.toggleBoardOpacity)(computerBoardDOM);

                //if 'fresh' cell then attack
                let attackStatus = playerOne.attack(computerBoard, x, y);

                if(attackStatus.hit){
                    if(attackStatus.sunk){
                        for(let i = 0; i < attackStatus.sunkCoord.length; i++){
                            e.target.parentElement.childNodes.item(attackStatus.sunkCoord[i])
                                .classList.add("sunk");
                        }
                    }
                    else {
                        e.target.classList.add("hit");
                    }
                }
                else {
                    e.target.classList.add("miss");
                }
            }

            computer.myTurn = true;
            if(computerBoard.isAllSunk()){
                (0,_gameEnd__WEBPACK_IMPORTED_MODULE_3__.announceWinner)("player");
                return (0,_gameEnd__WEBPACK_IMPORTED_MODULE_3__.resetGame)();
            }
        }

        if(computer.myTurn){

            setTimeout(() => {
                _computerAI__WEBPACK_IMPORTED_MODULE_2__["default"].smartMove(computer, playerOneBoard);
                (0,_UI_boards__WEBPACK_IMPORTED_MODULE_5__.toggleBoardOpacity)(playerBoardDOM);
                (0,_UI_boards__WEBPACK_IMPORTED_MODULE_5__.toggleBoardOpacity)(computerBoardDOM);
                if(playerOneBoard.isAllSunk()){
                    (0,_gameEnd__WEBPACK_IMPORTED_MODULE_3__.announceWinner)("computer");
                    return (0,_gameEnd__WEBPACK_IMPORTED_MODULE_3__.resetGame)();
                }
                computerBoardDOM.style.pointerEvents = "auto";
            }, 500)

            playerOne.myTurn = true;
        }
    })

}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_game_loop_gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game_loop/gameLoop */ "./src/scripts/game_loop/gameLoop.js");
/* harmony import */ var _scripts_UI_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/UI/init */ "./src/scripts/UI/init.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/normalize.css */ "./src/styles/normalize.css");





const runApp = (() => {
    (0,_scripts_UI_init__WEBPACK_IMPORTED_MODULE_1__.init)();
    (0,_scripts_game_loop_gameLoop__WEBPACK_IMPORTED_MODULE_0__.gameLoop)();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVsQztBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsbUNBQW1DO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFjO0FBQzlCLHVCQUF1QixtREFBUztBQUNoQztBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLDZEQUF3QjtBQUN4QyxnQkFBZ0IsOERBQWtCO0FBQ2xDLGdCQUFnQiw4REFBa0I7QUFDbEM7QUFDQSxvQkFBb0Isd0RBQWM7QUFDbEMsMkJBQTJCLG1EQUFTO0FBQ3BDO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxLQUFLOztBQUVMOzs7Ozs7OztVQ3JGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTndEO0FBQ2Y7QUFDYjtBQUNJOztBQUVoQztBQUNBLElBQUksc0RBQUk7QUFDUixJQUFJLHFFQUFRO0FBQ1osQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzPzQzZjQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvVUkvYm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9VSS9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL1VJL2luaXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL1VJL2luc3RydWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvVUkvcmVuZGVyU2hpcHMvZGlzcGxheVNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9VSS9yZW5kZXJTaGlwcy9wbGFjZVNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9mYWN0b3J5L2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZmFjdG9yeS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2ZhY3Rvcnkvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZV9sb29wL2NvbXB1dGVyQUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVfbG9vcC9jcmVhdGVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZV9sb29wL2dhbWVFbmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVfbG9vcC9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbmJvZHksIC5jb250ZW50IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNib2FyZC10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIG1pbm1heCgwLCAxZnIpKSAvIHJlcGVhdCgxMCwgbWlubWF4KDAsIDFmcikpO1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLmJvYXJkLnR3byB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4uYm9hcmQudHdvPio6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMCU7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5cXG4uc2hpcC53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNoaXBzLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXI+KntcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uc2hpcHMtY29udGFpbmVyPio6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcblxcbi5jYXJyaWVyLFxcbi5jYXJyaWVyLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbn1cXG5cXG4uYmF0dGxlc2hpcCxcXG4uYmF0dGxlc2hpcC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG4uY3J1aXNlcixcXG4uY3J1aXNlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG4uc3VibWFyaW5lLFxcbi5zdWJtYXJpbmUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAwLCA5OCk7XFxufVxcbi5kZXN0cm95ZXIsXFxuLmRlc3Ryb3llci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4uc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMCwgMCkgIWltcG9ydGFudDtcXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBwYWRkaW5nLXRvcDogMTFlbTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZXN0YXJ0IHtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4ub3BhY2l0eSB7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwwSkFBMEo7SUFDMUosZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0VBQXNFO0lBQ3RFLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7OztBQUdBOztJQUVJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksNEJBQTRCO0FBQ2hDO0FBQ0E7O0lBRUksZ0NBQWdDO0FBQ3BDO0FBQ0E7O0lBRUksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG5ib2R5LCAuY29udGVudCB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jYm9hcmQtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCBtaW5tYXgoMCwgMWZyKSkgLyByZXBlYXQoMTAsIG1pbm1heCgwLCAxZnIpKTtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgbWluLWhlaWdodDogNDAwcHg7XFxufVxcblxcbi5ib2FyZC50d28ge1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLmJvYXJkLnR3bz4qOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjAlO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuXFxuLnNoaXAud3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcHMtY29udGFpbmVyPip7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnNoaXBzLWNvbnRhaW5lcj4qOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5cXG4uY2FycmllcixcXG4uY2Fycmllci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG59XFxuXFxuLmJhdHRsZXNoaXAsXFxuLmJhdHRsZXNoaXAtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuXFxuLmNydWlzZXIsXFxuLmNydWlzZXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuLnN1Ym1hcmluZSxcXG4uc3VibWFyaW5lLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgMCwgOTgpO1xcbn1cXG4uZGVzdHJveWVyLFxcbi5kZXN0cm95ZXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLnN1bmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDAsIDApICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcGFkZGluZy10b3A6IDExZW07XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVzdGFydCB7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLm9wYWNpdHkge1xcbiAgICBvcGFjaXR5OiAwLjI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuIGh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG4gIFxcbiAgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG4gIH1cXG4gIFxcbiAgLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG4gIFxcbiAgaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGIsXFxuICBzdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgY29kZSxcXG4gIGtiZCxcXG4gIHNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHN1YixcXG4gIHN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICBcXG4gIHN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG4gIH1cXG4gIFxcbiAgc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxuICB9XFxuICBcXG4gIC8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBpbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIGlucHV0LFxcbiAgb3B0Z3JvdXAsXFxuICBzZWxlY3QsXFxuICB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgaW5wdXQgeyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIHNlbGVjdCB7IC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBmaWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgbGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcbiAgXFxuICBwcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcbiAgXFxuICB0ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbiAgW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbiAgW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbiAgfVxcbiAgXFxuICAvKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcbiAgXFxuICB0ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7Q0FFRDtJQUNHLGlCQUFpQixFQUFFLE1BQU07SUFDekIsOEJBQThCLEVBQUUsTUFBTTtFQUN4Qzs7RUFFQTtpRkFDK0U7O0VBRS9FOztJQUVFOztFQUVGO0lBQ0UsU0FBUztFQUNYOztFQUVBOztJQUVFOztFQUVGO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7O0lBR0U7O0VBRUY7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBO2lGQUMrRTs7RUFFL0U7OztJQUdFOztFQUVGO0lBQ0UsdUJBQXVCLEVBQUUsTUFBTTtJQUMvQixTQUFTLEVBQUUsTUFBTTtJQUNqQixpQkFBaUIsRUFBRSxNQUFNO0VBQzNCOztFQUVBOzs7SUFHRTs7RUFFRjtJQUNFLGlDQUFpQyxFQUFFLE1BQU07SUFDekMsY0FBYyxFQUFFLE1BQU07RUFDeEI7O0VBRUE7aUZBQytFOztFQUUvRTs7SUFFRTs7RUFFRjtJQUNFLDZCQUE2QjtFQUMvQjs7RUFFQTs7O0lBR0U7O0VBRUY7SUFDRSxtQkFBbUIsRUFBRSxNQUFNO0lBQzNCLDBCQUEwQixFQUFFLE1BQU07SUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtFQUMzQzs7RUFFQTs7SUFFRTs7RUFFRjs7SUFFRSxtQkFBbUI7RUFDckI7O0VBRUE7OztJQUdFOztFQUVGOzs7SUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0lBQ3pDLGNBQWMsRUFBRSxNQUFNO0VBQ3hCOztFQUVBOztJQUVFOztFQUVGO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7O0lBR0U7O0VBRUY7O0lBRUUsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtpRkFDK0U7O0VBRS9FOztJQUVFOztFQUVGO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO2lGQUMrRTs7RUFFL0U7OztJQUdFOztFQUVGOzs7OztJQUtFLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsZUFBZSxFQUFFLE1BQU07SUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixTQUFTLEVBQUUsTUFBTTtFQUNuQjs7RUFFQTs7O0lBR0U7O0VBRUY7VUFDUSxNQUFNO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBOzs7SUFHRTs7RUFFRjtXQUNTLE1BQU07SUFDYixvQkFBb0I7RUFDdEI7O0VBRUE7O0lBRUU7O0VBRUY7Ozs7SUFJRSwwQkFBMEI7RUFDNUI7O0VBRUE7O0lBRUU7O0VBRUY7Ozs7SUFJRSxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBOztJQUVFOztFQUVGOzs7O0lBSUUsOEJBQThCO0VBQ2hDOztFQUVBOztJQUVFOztFQUVGO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBOzs7OztJQUtFOztFQUVGO0lBQ0Usc0JBQXNCLEVBQUUsTUFBTTtJQUM5QixjQUFjLEVBQUUsTUFBTTtJQUN0QixjQUFjLEVBQUUsTUFBTTtJQUN0QixlQUFlLEVBQUUsTUFBTTtJQUN2QixVQUFVLEVBQUUsTUFBTTtJQUNsQixtQkFBbUIsRUFBRSxNQUFNO0VBQzdCOztFQUVBOztJQUVFOztFQUVGO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBOztJQUVFOztFQUVGO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7O0lBR0U7O0VBRUY7O0lBRUUsc0JBQXNCLEVBQUUsTUFBTTtJQUM5QixVQUFVLEVBQUUsTUFBTTtFQUNwQjs7RUFFQTs7SUFFRTs7RUFFRjs7SUFFRSxZQUFZO0VBQ2Q7O0VBRUE7OztJQUdFOztFQUVGO0lBQ0UsNkJBQTZCLEVBQUUsTUFBTTtJQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0VBQzlCOztFQUVBOztJQUVFOztFQUVGO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBOzs7SUFHRTs7RUFFRjtJQUNFLDBCQUEwQixFQUFFLE1BQU07SUFDbEMsYUFBYSxFQUFFLE1BQU07RUFDdkI7O0VBRUE7aUZBQytFOztFQUUvRTs7SUFFRTs7RUFFRjtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7aUZBQytFOztFQUUvRTs7SUFFRTs7RUFFRjtJQUNFLGFBQWE7RUFDZjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLGFBQWE7RUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbiBodG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuICBcXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxuICB9XFxuICBcXG4gIC8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuICBcXG4gIGhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBwcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIGEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBhYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBiLFxcbiAgc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGNvZGUsXFxuICBrYmQsXFxuICBzYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzdWIsXFxuICBzdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgfVxcbiAgXFxuICBzdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxuICB9XFxuICBcXG4gIHN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbiAgfVxcbiAgXFxuICAvKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBpbnB1dCxcXG4gIG9wdGdyb3VwLFxcbiAgc2VsZWN0LFxcbiAgdGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIGlucHV0IHsgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBzZWxlY3QgeyAvKiAxICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcbiAgXFxuICBidXR0b246LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG4gIFxcbiAgcHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgKi9cXG4gIFxcbiAgdGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG4gIFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG4gIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBkZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG4gIH1cXG4gIFxcbiAgLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG4gIFxcbiAgdGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIFtoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IG1ha2VCb2FyZCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRzLmNsYXNzTmFtZSA9IFwiYm9hcmRzXCI7XG4gICAgXG4gICAgY29uc3QgIHBsYXllck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcGxheWVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXJPbmUuY2xhc3NOYW1lID0gJ3BsYXllck9uZSc7XG4gICAgcGxheWVyVHdvLmNsYXNzTmFtZSA9ICdwbGF5ZXJUd28nO1xuICAgIHBsYXllclR3by5zdHlsZS5kaXNwbGF5ID0gYG5vbmVgO1xuXG4gICAgY29uc3QgcE9uZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwVHdvQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBPbmVCb2FyZC5jbGFzc05hbWUgPSBgYm9hcmQgb25lYDtcbiAgICBwVHdvQm9hcmQuY2xhc3NOYW1lID0gYGJvYXJkIHR3b2A7XG5cbiAgICBjb25zdCBwT25lQm9hcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZFwiKTtcbiAgICBwT25lQm9hcmRUaXRsZS5pZCA9IFwiYm9hcmQtdGl0bGVcIjtcbiAgICBwT25lQm9hcmRUaXRsZS50ZXh0Q29udGVudCA9IFwiTXkgQm9hcmRcIjtcblxuICAgIGNvbnN0IHBUd29Cb2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlkXCIpO1xuICAgIHBUd29Cb2FyZFRpdGxlLmlkID0gXCJib2FyZC10aXRsZVwiO1xuICAgIHBUd29Cb2FyZFRpdGxlLnRleHRDb250ZW50ID0gXCJDb21wdXRlciBCb2FyZFwiO1xuXG5cbiAgICBtYWtlR3JpZChwT25lQm9hcmQpO1xuICAgIG1ha2VHcmlkKHBUd29Cb2FyZCk7XG4gICAgcGxheWVyT25lLmFwcGVuZENoaWxkKHBPbmVCb2FyZFRpdGxlKTtcbiAgICBwbGF5ZXJUd28uYXBwZW5kQ2hpbGQocFR3b0JvYXJkVGl0bGUpO1xuICAgIHBsYXllck9uZS5hcHBlbmRDaGlsZChwT25lQm9hcmQpO1xuICAgIHBsYXllclR3by5hcHBlbmRDaGlsZChwVHdvQm9hcmQpO1xuICAgIGJvYXJkcy5hcHBlbmRDaGlsZChwbGF5ZXJPbmUpO1xuICAgIGJvYXJkcy5hcHBlbmRDaGlsZChwbGF5ZXJUd28pO1xuXG4gICAgcmV0dXJuIGJvYXJkcztcbn1cblxuLy9tYWtlIGEgZ3JpZCB3aXRoIGNsYXNzIG5hbWVzIGFzIGFycmF5IGNvbCBhbmQgcm93c1xuY29uc3QgbWFrZUdyaWQgPSAodGhpc0JvYXJkKSA9PiB7XG4gICAgbGV0IGogPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBpZihpICUgMTAgPT09IDAgJiYgaSA+IDApe1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgICAgIGNlbGwuaW5uZXJIVE1MID0gYCR7an0ke2kgJSAxMH1gO1xuICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gXCJyZ2JhKDAsMCwwLDApXCI7XG4gICAgICAgIGNlbGwuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxufVxuXG5jb25zdCB0b2dnbGVCb2FyZE9wYWNpdHkgPSAoYm9hcmQpID0+IHtcbiAgICBib2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwib3BhY2l0eVwiKTtcbn1cblxuZXhwb3J0IHsgbWFrZUJvYXJkLCB0b2dnbGVCb2FyZE9wYWNpdHkgfSIsIlxuY29uc3QgbWFrZVRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlkID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiQmF0dGxlc2hpcFwiO1xuICAgIHJldHVybiB0aXRsZTtcbn1cblxuZXhwb3J0IHsgbWFrZVRpdGxlIH0iLCJpbXBvcnQgeyBnZXRTaGlwcyB9IGZyb20gXCIuL3JlbmRlclNoaXBzL2Rpc3BsYXlTaGlwc1wiO1xuaW1wb3J0IGluc3RydWN0aW9ucyBmcm9tICcuL2luc3RydWN0aW9ucyc7XG5jb25zdCB7IG1ha2VUaXRsZSB9ID0gcmVxdWlyZShcIi4vaGVhZGVyXCIpO1xuY29uc3QgeyBtYWtlQm9hcmQgfSA9IHJlcXVpcmUoXCIuL2JvYXJkc1wiKVxuXG5cblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VUaXRsZSgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VCb2FyZCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdldFNoaXBzKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zLnNoaXBJbnN0cnVjdGlvbnMoKSk7XG4gICAgXG59XG5cbmV4cG9ydCB7aW5pdH0iLCJcblxuXG5jb25zdCBpbnN0cnVjdGlvbnMgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnN0cnVjdGlvbnMuY2xhc3NOYW1lID0gXCJpbnN0cnVjdGlvbnNcIjtcblxuICAgIGNvbnN0IHNoaXBJbnN0cnVjdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgIGluc3RydWN0aW9ucy50ZXh0Q29udGVudCA9IFwiRG91YmxlIENsaWNrIGEgU2hpcCB0byBDaGFuZ2UgT3JpZW50YXRpb25cIjtcbiAgICAgICAgcmV0dXJuIGluc3RydWN0aW9ucztcbiAgICB9XG5cbiAgICBjb25zdCBnYW1lSW5zdHJ1Y3Rpb25zID0gKCkgPT4ge1xuICAgICAgICBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSBcIkRlc3Ryb3kgdGhlIEVuZW15IFNoaXBzXCI7XG4gICAgICAgIHJldHVybiBpbnN0cnVjdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5zdHJ1Y3Rpb25zLFxuICAgICAgICBzaGlwSW5zdHJ1Y3Rpb25zLFxuICAgICAgICBnYW1lSW5zdHJ1Y3Rpb25zLFxuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdHJ1Y3Rpb25zOyIsImNvbnN0IGRpc3BsYXlTaGlwID0gKG5hbWUsIGxlbmd0aCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHNoaXBXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgc2hpcFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgICAgIHNoaXBXcmFwcGVyLmNsYXNzTmFtZSA9IGAke25hbWV9LWNvbnRhaW5lcmA7XG4gICAgICAgIHNoaXBXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBgZmxleGA7XG5cbiAgICAgICAgc2hpcC5jbGFzc05hbWUgPSBuYW1lO1xuICAgICAgICBzaGlwLnN0eWxlLmRpc3BsYXkgPSBgZ3JpZGA7XG4gICAgICAgIHNoaXAuc3R5bGUubWluV2lkdGggPSBgNDBweGA7XG4gICAgICAgIHNoaXAuc3R5bGUubWluSGVpZ2h0ID0gYCR7NDAgKiBsZW5ndGh9cHhgO1xuICAgICAgICBzaGlwLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7bGVuZ3RofSwgbWlubWF4KDAsIDQwcHgpKWA7XG4gICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuXG5cblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjZWxsXCI7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJjbGlja2FibGVcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgc2hpcC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcFdyYXBwZXI7XG59XG5cbmNvbnN0IG1ha2VWZXJ0aWNhbCA9IChzaGlwKSA9PiB7XG5cbiAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKTtcbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgc2hpcC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke3NoaXAuY2hpbGRyZW4ubGVuZ3RofSwgbWlubWF4KDAsNDBweCkpYFxuICAgIHNoaXAuc3R5bGUubWluSGVpZ2h0ID0gYCR7NDAgKiBsZW5ndGh9cHhgO1xuICAgIHNoaXAuc3R5bGUubWluV2lkdGggPSBgNDBweGA7XG4gICAgc2hpcC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJcIjtcbn1cblxuY29uc3QgbWFrZUhvcml6b250YWwgPSAoc2hpcCkgPT4ge1xuXG4gICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xuICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgIHNoaXAuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtzaGlwLmNoaWxkcmVuLmxlbmd0aH0sIG1pbm1heCgwLDQwcHgpKWBcbiAgICBzaGlwLnN0eWxlLm1pbkhlaWdodCA9IGA0MHB4YDtcbiAgICBzaGlwLnN0eWxlLm1pbldpZHRoID0gYCR7NDAgKiBzaGlwLmNoaWxkcmVuLmxlbmd0aH1weGA7XG4gICAgc2hpcC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gXCJcIjtcbn1cblxuY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hpcHNDb250YWluZXIuY2xhc3NOYW1lID0gYHNoaXBzLWNvbnRhaW5lcmA7XG5cbiAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5U2hpcCgnY2FycmllcicsIDUpKTtcbiAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5U2hpcCgnYmF0dGxlc2hpcCcsIDQpKTtcbiAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5U2hpcCgnY3J1aXNlcicsIDMpKTtcbiAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5U2hpcCgnc3VibWFyaW5lJywgMykpO1xuICAgIHNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlTaGlwKCdkZXN0cm95ZXInLCAyKSk7XG5cbiAgICByZXR1cm4gc2hpcHNDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGdldFNoaXBzLCBtYWtlSG9yaXpvbnRhbCwgbWFrZVZlcnRpY2FsfVxuIiwiaW1wb3J0IHsgbWFrZUhvcml6b250YWwsIG1ha2VWZXJ0aWNhbCB9IGZyb20gXCIuL2Rpc3BsYXlTaGlwc1wiO1xuaW1wb3J0IGluc3RydWN0aW9ucyBmcm9tIFwiLi4vaW5zdHJ1Y3Rpb25zXCI7XG5pbXBvcnQgeyB0b2dnbGVCb2FyZE9wYWNpdHkgfSBmcm9tIFwiLi4vYm9hcmRzXCI7XG5cbmNvbnN0IHJlbmRlclNoaXBzID0gKGdhbWVCb2FyZCkgPT4ge1xuXG4gICAgbGV0IHNoaXBDb3VudCA9IDA7XG5cbiAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHMtY29udGFpbmVyXCIpXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxuICAgIGNvbnN0IG15Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLm9uZVwiKTtcbiAgICBsZXQgaW5kZXggPSBcIlwiO1xuICAgIGxldCBjdXJyZW50U2hpcCA9IFwiXCI7XG4gICAgbGV0IGxvY2F0aW9uID0ge1xuICAgICAgICB0YXJnZXQgOiBcIlwiLFxuICAgICAgICB4IDogXCJcIixcbiAgICAgICAgeSA6IFwiXCIsXG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT0gSGVscGVyIEZ1bmN0aW9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cbiAgICBjb25zdCBnZXRTaGlwSW5kZXggPSAoKSA9PiB7XG4gICAgICAgIC8vZ2V0IGluZGV4IG9mIHNoaXAgb24gY2xpY2tpbmcgYSBwYXJ0IG9mIHNoaXBcbiAgICAgICAgc2hpcHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiICwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NlbGwgc2hpcCcpe1xuICAgICAgICAgICAgICAgIGluZGV4ID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZVNoaXBPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgLy9kb3VibGUgY2xpY2sgYSBzaGlwIHRvIHR1cm4gaXQgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICAgICAgICBzaGlwc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY2VsbCBzaGlwJyl7XG4gICAgICAgICAgICAgICAgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdID09PSAndmVydGljYWwnKSA/XG4gICAgICAgICAgICAgICAgICAgIG1ha2VIb3Jpem9udGFsKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpIDpcbiAgICAgICAgICAgICAgICAgICAgbWFrZVZlcnRpY2FsKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXAgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwID0gZS50YXJnZXQ7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Qm9hcmRMb2NhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgLy93aGVuIGN1cnNvciBlbnRlcnMgYSBncmlkIGJsb2NrIFxuICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NlbGwnKXtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi50YXJnZXQgPSBlLnRhcmdldC5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ueCA9IGxvY2F0aW9uLnRhcmdldC5hdCgwKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi55ID0gbG9jYXRpb24udGFyZ2V0LmF0KDEpO1xuXG4gICAgICAgICAgICAgICAgaWYobG9jYXRpb24ueCA9PT0gJzAnKXtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24udGFyZ2V0ID0gbG9jYXRpb24udGFyZ2V0LmF0KDEpO1xuICAgICAgICAgICAgICAgIH0gICAgICBcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImFxdWFcIjtcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50U2hpcC5jbGFzc0xpc3RbMV0gPT09ICd2ZXJ0aWNhbCcpe1xuXG4gICAgICAgICAgICAgICAgICAgIChlLnRhcmdldC5pbm5lckhUTUwuYXQoMCkgPiAwKSA/IGxvY2F0aW9uLnggPSBwYXJzZUludChsb2NhdGlvbi54KSAtIHBhcnNlSW50KGluZGV4KSBcbiAgICAgICAgICAgICAgICAgICAgOiBsb2NhdGlvbi54ID0gcGFyc2VJbnQobG9jYXRpb24ueCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ueSA9IHBhcnNlSW50KGxvY2F0aW9uLnkpO1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY3VycmVudFNoaXAuY2xhc3NMaXN0WzFdID09PSAnaG9yaXpvbnRhbCcpe1xuXG4gICAgICAgICAgICAgICAgICAgIChlLnRhcmdldC5pbm5lckhUTUwuYXQoMSkgPiAwKSA/IGxvY2F0aW9uLnkgPSBwYXJzZUludChsb2NhdGlvbi55KSAtIHBhcnNlSW50KGluZGV4KSBcbiAgICAgICAgICAgICAgICAgICAgOiBsb2NhdGlvbi55ID0gcGFyc2VJbnQoZS50YXJnZXQuaW5uZXJIVE1MLmF0KDEpKTtcblxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi54ID0gcGFyc2VJbnQobG9jYXRpb24ueCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBsb2NhdGlvbi50YXJnZXQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnggPSBcIlwiO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnkgPSBcIlwiO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlTG9jYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIG15Qm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCAoZSkgPT4ge1xuXG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiY2VsbFwiKXtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclNoaXAgPSAobXlTaGlwLCB4LCB5LCBhbGlnbiA9ICd2ZXJ0aWNhbCcpID0+IHtcbiAgICAgICAgaWYoeCA9PT0gMCl7XG4gICAgICAgICAgICB4ID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29vcmQgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkgKyB5LnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHdoaWxlKGNvdW50IDwgbXlTaGlwLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYoYWxpZ24gPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgICAgIG15Qm9hcmQuY2hpbGRyZW5bY29vcmRdLmNsYXNzTGlzdC5hZGQobXlTaGlwLmNsYXNzTGlzdFswXSk7XG4gICAgICAgICAgICAgICAgY29vcmQgKz0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGFsaWduID09PSAnaG9yaXpvbnRhbCcpe1xuICAgICAgICAgICAgICAgIG15Qm9hcmQuY2hpbGRyZW5bY29vcmRdLmNsYXNzTGlzdC5hZGQobXlTaGlwLmNsYXNzTGlzdFswXSk7XG4gICAgICAgICAgICAgICAgY29vcmQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IHNldFNoaXAgPSAoKSA9PiB7XG4gICAgICAgIC8vd2hlbiB1c2VyIGNob29zZXMgYSBwbGFjZSB0byBwbGFjZSBzaGlwXG4gICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vd2UgcGxhY2Ugc2hpcFxuICAgICAgICAgICAgLy9pZiB2YWxpZCwgc2hpcCBkaXNhcHBlYXJzIGZyb20gZGlzcGxheSBvbnRvIGJvYXJkXG4gICAgICAgICAgICAvL2Vsc2Ugd2Ugc3RhcnQgYWxsIG92ZXJcbiAgICAgICAgICAgIGlmKGxvY2F0aW9uLnRhcmdldCAhPT0gXCJcIil7XG5cbiAgICAgICAgICAgICAgICBsZXQgc2hpcEluZGV4ID0gZ2FtZUJvYXJkLnNoaXBzLmZpbmRJbmRleChlID0+IGUubmFtZSA9PT0gY3VycmVudFNoaXAuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgICAgICAgICBpZihnYW1lQm9hcmQucGxhY2VTaGlwKGdhbWVCb2FyZC5zaGlwc1tzaGlwSW5kZXhdLCBsb2NhdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnksIGN1cnJlbnRTaGlwLmNsYXNzTGlzdFsxXSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyU2hpcChjdXJyZW50U2hpcCwgbG9jYXRpb24ueCwgbG9jYXRpb24ueSwgY3VycmVudFNoaXAuY2xhc3NMaXN0WzFdKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNoaXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgc2hpcENvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG15Qm9hcmQuY2hpbGRyZW5bbG9jYXRpb24udGFyZ2V0XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2lmIGFsbCBzaGlwcyBhcmUgcGxhY2VkLCByZXZlYWwgZW5lbXkgYm9hcmRcbiAgICAgICAgICAgIGlmKHNoaXBDb3VudCA9PT0gNSl7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJUd29cIik7XG4gICAgICAgICAgICAgICAgY29tcERpc3BsYXkuc3R5bGUuZGlzcGxheSA9IGBgO1xuICAgICAgICAgICAgICAgIGluc3RydWN0aW9ucy5nYW1lSW5zdHJ1Y3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgc2hpcENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICB0b2dnbGVCb2FyZE9wYWNpdHkoY29tcERpc3BsYXkucHJldmlvdXNTaWJsaW5nLmxhc3RDaGlsZCk7IC8vLmJvYXJkLm9uZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvL3Jlc2V0IGFsbCBwYXJhbWV0ZXJzXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG5cbiAgICAgICAgY3VycmVudFNoaXAgPSBcIlwiO1xuICAgICAgICBsb2NhdGlvbi50YXJnZXQgPSBcIlwiO1xuICAgICAgICBsb2NhdGlvbi54ID0gXCJcIjtcbiAgICAgICAgbG9jYXRpb24ueSA9IFwiXCI7XG4gICAgICAgIGluZGV4ID0gXCJcIjtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gRXZlbnQgTGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09IC8vXG4gICAgXG4gICAgZ2V0U2hpcEluZGV4KCk7XG4gICAgZ2V0U2hpcCgpO1xuICAgIGNoYW5nZVNoaXBPcmllbnRhdGlvbigpO1xuICAgIGdldEJvYXJkTG9jYXRpb24oKTsgICAgICAgIFxuICAgIHVwZGF0ZUxvY2F0aW9uKCk7XG4gICAgc2V0U2hpcCgpO1xufVxuXG5leHBvcnQge3JlbmRlclNoaXBzfVxuIiwiXG4vKipcbiAqIEZhY3RvcnkgRnVuY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiAgICAgIFRoaXMgZnVuY3Rpb24gd2lsbCBob2xkIGEgPHNoaXBzPiBhcnJheSBhbmQgY3JlYXRlIGEgMkQgYXJyYXkgPG15Qm9hcmQ+XG4gKiAgICAgICAgICAgICAgICAgICBUaGUgRkYgaW5jbHVkZXMgZnVuY3Rpb25zIHRoYXQgcGxhY2VzIHNoaXBzIG9uIDxteUJvYXJkPiwgcmVjZWl2ZXMgYXR0YWNrcyBvbiA8bXlCb2FyZD4sXG4gKiAgICAgICAgICAgICAgICAgICBhbmQgdXBkYXRlcyB0aGUgc3RhdHVzIG9mIDxzaGlwcz4gZGVwZW5kaW5nIHdoZXRoZXIgb3Igbm90IGEgc2hpcCB0aGF0IHdhcyBwbGFjZWQgb24gdGhlIGJvYXJkXG4gKiAgICAgICAgICAgICAgICAgICB3YXMgaGl0LCBzdW5rLCBhbmQgaW4gc3VjaCwgd2hldGhlciBBTEwgc2hpcHMgaW4gPHNoaXBzPiBoYXZlIGJlZW4gc3Vua1xuICogXG4gKiBAcmV0dXJucyB7IHNoaXBzLCBteUJvYXJkLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGlzQWxsU3VuayB9IFxuICovXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG5cbiAgICAvL3NoaXBzIGFycmF5IHRvIGhvbGQgc2hpcHNcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogSGVscGVyIEZ1bmN0aW9uIFxuICAgICAqIEBkZXNjcmlwdGlvbiAgICAgICAgIENSRUFURSBhIGdhbWUgYm9hcmQgb2JqZWN0XG4gICAgICogQHJldHVybnMgdGVtcEFycmF5ICAgYSAyRCBhcnJheSB3aGVyZSBlYWNoICdjZWxsJyBjb250YWlucyB0aGUgc2hpcCBuYW1lLCBzaGlwIHBhcnQsIGFuZCBzdGF0dXMgKDAgKERFRkFVTFQpID0gbm90aGluZywgMSA9IG1pc3MsIDIgPSBoaXQpXG4gICAgICovXG4gICAgY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wQXJyYXkgPSBBcnJheSgxMCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgICAgICAgIHRlbXBBcnJheVtpXSA9IEFycmF5LmZyb20oe2xlbmd0aDogMTB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFBhcnQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogMCBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBBcnJheTtcbiAgICB9XG4gICAgXG4gICAgLy9nYW1lIGJvYXJkIG9iamVjdFxuICAgIGNvbnN0IG15Qm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuXG4gICAgLyoqXG4gICAgICogSGVscGVyIEZ1bmN0aW9uIGZvciBwbGFjZVNoaXAgXG4gICAgICogQGRlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgIENoZWNrIHdoZXRoZXIgYSBzaGlwIGFscmVhZHkgZXhpc3RzIG9uIHRoZSBwbGFjZXMgb24gdGhlIGdhbWUgYm9hcmQgbXlTaGlwIHdhcyB0byBiZSBwb3RlbnRpYWxseSBwbGFjZWRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXlTaGlwICAgICAgICAgVGhlIHNoaXAgb2JqZWN0IHRoYXQgaXMgdG8gYmUgcG90ZW50aWFsbHkgcGxhY2VkIG9uIHRoZSBnYW1lIGJvYXJkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggICAgICAgICAgICAgIEZpcnN0IHBhcmFtZXRlciBvZiB0aGUgMkQgYXJyYXksIG15Qm9hcmQsIGFuZCB0aGUgeC1jb29yZGluYXRlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgICAgICAgICAgICAgIFNlY29uZCBwYXJhbWV0ZXIgb2YgdGhlIDJEIGFycmF5LCBteUJvYXJkLCBhbmQgdGhlIHktY29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhbGlnbiAgICAgICAgICBUaGUgYWxpZ25tZW50IG9mIHRoZSBzaGlwICgndmVydGljYWwnIG9yICdob3Jpem9udGFsJylcbiAgICAgKiBAcmV0dXJucyBCb29sZWFuICAgICAgICAgICAgICAgUmV0dXJuIFRSVUUgaWYgdGhlcmUgaXMgbm8gY29pbmNpZGluZyBzaGlwIG9uIHRoZSBib2FyZCBjb29yZGluYXRlcywgZWxzZSByZXR1cm4gRkFMU0VcbiAgICAgKi9cbiAgICBjb25zdCBub092ZXJsYXAgPSAobXlTaGlwLCB4LCB5LCBhbGlnbikgPT4ge1xuICAgICAgICBpZihhbGlnbiA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHk7IGkgPCB5ICsgbXlTaGlwLmxlbmd0aCAmJiBpIDw9IDk7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYobXlCb2FyZFt4XVtpXS5zaGlwICE9PSBcIm5vbmVcIil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihhbGlnbiA9PT0gJ3ZlcnRpY2FsJyl7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSB4OyBpIDwgeCArIG15U2hpcC5sZW5ndGggJiYgaSA8PSA5OyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKG15Qm9hcmRbaV1beV0uc2hpcCAhPT0gXCJub25lXCIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZFxuICAgICAqIEBkZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICBDaGVjayB3aGV0aGVyIHRoZSBzaGlwIHRvIGJlIHBsYWNlZCBoYXMgYSB2YWxpZCBjb29yZGluYXRlLCB0aGF0IGluIGl0cyBmdWxsIGxlbmd0aFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXRzIG9udG8gdGhlIGJvYXJkLCBhbmQgd2hldGhlciBpdCBvdmVybGFwcyB3aXRoIGFueSBvdGhlciBzaGlwcyBvbiB0aGUgYm9hcmRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXlTaGlwICAgICAgICAgVGhlIHNoaXAgb2JqZWN0IHRoYXQgaXMgdG8gYmUgcG90ZW50aWFsbHkgcGxhY2VkIG9uIHRoZSBnYW1lIGJvYXJkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggICAgICAgICAgICAgIEZpcnN0IHBhcmFtZXRlciBvZiB0aGUgMkQgYXJyYXksIG15Qm9hcmQsIGFuZCB0aGUgeC1jb29yZGluYXRlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgICAgICAgICAgICAgIFNlY29uZCBwYXJhbWV0ZXIgb2YgdGhlIDJEIGFycmF5LCBteUJvYXJkLCBhbmQgdGhlIHktY29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhbGlnbiAgICAgICAgICBUaGUgYWxpZ25tZW50IG9mIHRoZSBzaGlwICgndmVydGljYWwnIG9yICdob3Jpem9udGFsJylcbiAgICAgKiBAcmV0dXJucyBCb29sZWFuICAgICAgICAgICAgICAgUmV0dXJuIFRSVUUsIGlmIHNoaXAgaGFzIGJlZW4gcGxhY2VkIG9uIGEgdmFsaWQgcG9zaXRpb24sIGFuZCByZXR1cm4gRkFMU0UsIGlmIHNwb3QgaXMgaW52YWxpZFxuICAgICAqL1xuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChteVNoaXAsIHgsIHksIGFsaWduKSA9PiB7XG4gICAgICAgIHggPSBwYXJzZUludCh4KTtcbiAgICAgICAgeSA9IHBhcnNlSW50KHkpO1xuICAgICAgICBpZigoeCA+PSAwICYmIHggPD0gOSkgJiYgKHkgPj0gMCAmJiB5IDw9IDkpICYmIG5vT3ZlcmxhcChteVNoaXAsIHgsIHksIGFsaWduKSl7XG4gICAgICAgICAgICBsZXQgcG9zID0gMDtcbiAgICAgICAgICAgIGlmKGFsaWduID09PSAnaG9yaXpvbnRhbCcpe1xuICAgICAgICAgICAgICAgIGlmKHkgKyBteVNoaXAubGVuZ3RoID4gMTApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHk7IGkgPCB5ICsgbXlTaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgbXlCb2FyZFt4XVtpXS5zaGlwID0gbXlTaGlwLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIG15Qm9hcmRbeF1baV0uc2hpcFBhcnQgPSBteVNoaXAuc2hpcFBhcnRzW3Bvc10ucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoYWxpZ24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBpZih4ICsgbXlTaGlwLmxlbmd0aCA+IDEwKXtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHg7IGkgPCB4ICsgbXlTaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgbXlCb2FyZFtpXVt5XS5zaGlwID0gbXlTaGlwLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIG15Qm9hcmRbaV1beV0uc2hpcFBhcnQgPSBteVNoaXAuc2hpcFBhcnRzW3Bvc10ucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZFxuICAgICAqIEBkZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICBDaGVjayB0aGUgY29vcmRpbmF0ZSBvbiB0aGUgYm9hcmQgdG8gc2VlIGlmIHRoZXJlIGlzIGEgc2hpcCBwYXJ0LlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgdGhlcmUgaXMgbm8gc2hpcCwgYm9hcmQgc3RhdHVzIGNoYW5nZXMgdG8gMSAobWlzc2VkKSwgZWxzZSAyIChoaXQpLFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHJlY29yZHMgd2hldGhlciB0aGUgaGl0IHN1bmsgdGhlIHNoaXAgb3Igbm90IGFuZCB1cGRhdGVzIGFjY29yZGluZ2x5XG4gICAgICogXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggICAgICAgICAgICAgIEZpcnN0IHBhcmFtZXRlciBvZiB0aGUgMkQgYXJyYXksIG15Qm9hcmQsIGFuZCB0aGUgeC1jb29yZGluYXRlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgICAgICAgICAgICAgIFNlY29uZCBwYXJhbWV0ZXIgb2YgdGhlIDJEIGFycmF5LCBteUJvYXJkLCBhbmQgdGhlIHktY29vcmRpbmF0ZVxuICAgICAqIEByZXR1cm5zIHN0YXR1cyAgICAgICAgICAgICAgICBBbiBvYmplY3QgdGhhdCByZWNvcmRzIHRoZSBzaGlwIG5hbWUsIGhpdCBzdGF0dXMsIHN1bmsgc3RhdHVzLCBhbmQgYWxsIHRoZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyBvbiB0aGUgYm9hcmQgdGhhdCBjb2luY2lkZSB3aXRoIHNhaWQgc3VuayBzaGlwLCBpZiBhbnlcbiAgICAgKi9cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcblxuICAgICAgICBsZXQgc3RhdHVzID0ge1xuICAgICAgICAgICAgc2hpcDogXCJcIixcbiAgICAgICAgICAgIGhpdDogZmFsc2UsXG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIHN1bmtDb29yZDogW10sXG4gICAgICAgIH1cbiAgICAgICAgaWYobXlCb2FyZFt4XVt5XS5zaGlwICE9PSAnbm9uZScpe1xuICAgICAgICAgICAgc3RhdHVzLnNoaXAgPSBteUJvYXJkW3hdW3ldLnNoaXA7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKHNoaXBzW2ldLm5hbWUgPT09IG15Qm9hcmRbeF1beV0uc2hpcCl7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdChteUJvYXJkW3hdW3ldLnNoaXBQYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2hpcHNbaV0uaXNTdW5rKCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLnN1bmtDb29yZCA9IFsuLi5nZXRTaGlwKHNoaXBzW2ldLm5hbWUpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG15Qm9hcmRbeF1beV0uc3RhdHVzID0gMjtcbiAgICAgICAgICAgIHN0YXR1cy5oaXQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG15Qm9hcmRbeF1beV0uc3RhdHVzID0gMTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgRnVuY3Rpb25cbiAgICAgKiBAZGVzY3JpcHRpb24gICAgICAgICAgICAgICAgIEdldCB0aGUgY29vcmRpbmF0ZXMgb2YgYSBzaGlwXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNoaXBOYW1lICAgICBUaGUgbmFtZSBvZiB0aGUgc2hpcFxuICAgICAqIEByZXR1cm5zIGNvb3JkcyAgICAgICAgICAgICAgQW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgKDAgLT4gOTkpXG4gICAgICovXG4gICAgY29uc3QgZ2V0U2hpcCA9IChzaGlwTmFtZSkgPT4ge1xuICAgICAgICBsZXQgY29vcmRzID0gW107XG4gICAgICAgIG15Qm9hcmQuZmxhdCgpLmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZihjZWxsLnNoaXAgPT09IHNoaXBOYW1lKXtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBjb29yZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kXG4gICAgICogQGRlc2NyaXB0aW9uICAgICAgICAgQ2hlY2sgd2hldGhlciBhbGwgdGhlIHNoaXBzIG9uIHRoZSBib2FyZCBhcmUgc3Vua1xuICAgICAqIEByZXR1cm5zIEJvb2xlYW4gICAgIFJldHVybnMgYSBib29sZWFuIGJhc2VkIG9uIHRoZSBhYm92ZVxuICAgICAqL1xuICAgIGNvbnN0IGlzQWxsU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChzaGlwcy5ldmVyeShlID0+IGUuaXNTdW5rKCkgPT09IHRydWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaGlwcyxcbiAgICAgICAgbXlCb2FyZCxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBpc0FsbFN1bmtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCIvKipcbiAqIEZhY3RvcnkgRnVuY3Rpb25cbiAqIEBkZXNjcmlwdGlvbiAgICAgRGV0ZXJtaW5lIHBsYXllciB0dXJuIGFuZCB3aGljaCBib2FyZCB0byBhdHRhY2tcbiAqIFxuICogQHJldHVybnMgeyBteVR1cm4sIGF0dGFja30gXG4gKi9cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcblxuICAgIC8vc3RhdHVzIG9mIHBsYXllciB0dXJuXG4gICAgbGV0IG15VHVybiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHsqfSBib2FyZCBUaGUgYm9hcmQgb2JqZWN0IChzZWUgZ2FtZUJvYXJkKVxuICAgICAqIEBwYXJhbSB7Kn0geCAgICAgICAgICAgICAgICAgICAgIHRoZSB4LWNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0geyp9IHkgICAgICAgICAgICAgICAgICAgICB0aGUgeS1jb29yZGluYXRlXG4gICAgICogQHJldHVybnMgYm9hcmQucmVjZWl2ZUF0dGFjayAgICAgU2VuZHMgYW4gYXR0YWNrIHRvIHRoZSBjaG9zZW4gYm9hcmRcbiAgICAgKi9cbiAgICBjb25zdCBhdHRhY2sgPSAoYm9hcmQsIHgsIHkpID0+IHtcbiAgICAgICAgbXlUdXJuID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG15VHVybixcbiAgICAgICAgYXR0YWNrXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiLyoqXG4gKiBGYWN0b3J5IEZ1bmN0aW9uXG4gKiBAZGVzY3JpcHRpb24gICAgICAgICAgICAgVGhlIHNoaXAgb2JqZWN0IHRvIGJlIHBsYWNlZCBvbiB0aGUgZ2FtZSBib2FyZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgIEluY2x1ZGUgaW5kaXZpZHVhbCBzaGlwIHBhcnRzIHRvIGNvaW5jaWRlIHdpdGggZ3JpZCBjb29yZGluYXRlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgRWFjaCBzaGlwIHBhcnQgaGFzIGEgc3RhdHVzIGFuZCBwb3NpdGlvblxuICogXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAgICAgbmFtZSBvZiB0aGUgc2hpcFxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCAgIGxlbmd0aCBvZiB0aGUgc2hpcFxuICogQHJldHVybnMge25hbWUsIGxlbmd0aCwgc2hpcFBhcnRzLCBoaXQsIGlzU3Vua31cbiAqL1xuXG5jb25zdCBTaGlwID0gKG5hbWUsIGxlbmd0aCkgPT4ge1xuICAgIFxuICAgIC8vYXJyYXkgdGhhdCB1c2VzIGxlbmd0aCBvZiBzaGlwIHRvIGNyZWF0ZSBhIGNvbGxlY3Rpb24gb2Ygc2hpcCBwYXJ0c1xuICAgIGNvbnN0IHNoaXBQYXJ0cyA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGxlbmd0aCkpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHgsIGkpIHsgXG4gICAgICAgICAgICB4ID0geyAgICAgICAgICAgICAgICAgICAvL3N0YXR1c1xuICAgICAgICAgICAgICAgIFwiaXNIaXRcIiA6IGZhbHNlLCBcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCIgOiBpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfVxuICAgICk7IFxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kXG4gICAgICogQGRlc2NyaXB0aW9uICAgICAgICAgQ2hhbmdlcyBzdGF0dXMgb2Ygc2hpcCBwYXJ0IGZyb20gJ25vdCBoaXQnIHRvICdoaXQnXG4gICAgICogXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBvcyAgcG9zaXRpb24gb2Ygc2hpcCBwYXJ0XG4gICAgICogQHJldHVybnMgQm9vbGVhbiAgICAgUmV0dXJuIFRSVUUsIGlmIGhpdFxuICAgICAqL1xuICAgIGNvbnN0IGhpdCA9IChwb3MpID0+IHtcbiAgICAgICAgaWYoc2hpcFBhcnRzW3Bvc10uaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzaGlwUGFydHNbcG9zXS5pc0hpdCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNZXRob2RcbiAgICAgKiBAZGVzY3JpcHRpb24gICAgICAgICBGaWx0ZXJzIHRocm91Z2ggZWFjaCBzaGlwUGFydCwgYW5kIGlmIGFsbCBhcnQgaGl0LCB0aGVuIHNoaXAgaXMgc3Vua1xuICAgICAqIFxuICAgICAqIEByZXR1cm5zIEJvb2xlYW4gICAgIFJldHVybiBUUlVFLCBpZiBhbGwgcGFydHMgYXJlIGhpdCwgZWxzZSByZXR1cm4gRkFMU0VcbiAgICAgKi9cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmKHNoaXBQYXJ0cy5maWx0ZXIoKGUpID0+IHtyZXR1cm4gZS5pc0hpdCA9PT0gdHJ1ZX0pLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtyZXR1cm4gZmFsc2U7fVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgc2hpcFBhcnRzLFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3VuayxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiXG4vKipcbiogTW9kdWxlXG4qIEBkZXNjcmlwdGlvbiAgICAgICAgICBUaGUgYWxnb3JpdGhtIGZvciB0aGUgY29tcHV0ZXIgdG8gYXR0YWNrXG4qICAgICAgICAgICAgICAgICAgICAgICAxKSBUaGUgY29tcHV0ZXIgbWFrZXMgYSBcImNob2ljZVwiIFxuKiAgICAgICAgICAgICAgICAgICAgICAgMikgSWYgdGhlIGJvYXJkIHRpbGUgaXMgYWxyZWFkeSBoaXQsIHJlcm9sbFxuKiAgICAgICAgICAgICAgICAgICAgICAgMykgSWYgdGhlcmUgYXJlIG5vIHByZXZpb3VzIHZhbGlkIGhpdHMsIGFkZCB0aGUgZmlyc3Qgc3VjY2VzcyB0byBtb3ZlTGlzdFxuKiAgICAgICAgICAgICAgICAgICAgICAgNCkgSWYgdGhlcmUgd2FzIGEgcHJldmlvdXMgaGl0LCBjaGVjayBpbiB0aGUgNCBjYXJkaW5hbCBkaXJlY3Rpb25zIGZvciBhbm90aGVyIGhpdCBcbiogICAgICAgICAgICAgICAgICAgICAgIDUpIFJpbnNlIGFuZCByZXBlYXQgdW50aWwgYWxsIHNoaXBzIGFyZSBzdW5rXG4gKiAgICAgICAgICBcbiAqIEByZXR1cm5zIHsgc21hcnRNb3ZlIH1cbiAqL1xuY29uc3QgY29tcHV0ZXJBdHRhY2sgPSgoKSA9PiB7XG5cbiAgICBjb25zdCBtb3ZlTGlzdCA9IFtdO1xuICAgIGxldCBjb3VudCA9IDA7IC8vc2VlIEBjaGVja0Fyb3VuZFxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kXG4gICAgICogQGRlc2NyaXB0aW9uICAgICAgICAgICAgICAgICBUaGUgYWxnb3JpdGhtIGdldHMgYSBjb29yZGluYXRlIChjaG9pY2UpOyBzaW5jZSBhIHNoaXAgaGFzIGEgbWluaW11bSBsZW5ndGggb2YgMlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNob2ljZSBuZWVkcyB0byBvbmx5IGJlICdldmVyeSBvdGhlcicgZ3JpZCBjZWxsIChpZSBbMCwwXSwgWzAsMl0uLi5bMSwxXSwgWzEsM10pLlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGFsZ29yaXRobSB1c2VzIHRoaXMgY2hvaWNlIHRvIHRhcmdldCBhIGdyaWQgY2VsbCwgYnV0IGlmIGl0IGhhcyBiZWVuIGFscmVhZHkgdGFyZ2V0ZWRcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0IHJlY3Vyc2l2ZWx5IHJ1bnMgdGhlIGZ1bmN0aW9uIHVudGlsIGEgdmFsaWQgY2VsbCBpcyBmb3VuZCwgYW5kIGF0dGFja3MgdGhlIGNlbGwsIGFkZGluZ1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNob2ljZSB0byB0aGUgbW92ZUxpc3QuIElmIHRoZXJlIGFyZSBubyBwcmV2aW91cyBtb3ZlcyBmb3VuZCBvbiB0aGUgbW92ZUxpc3QsIHRoZSBhbGdvcml0aG0gXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVuICdjaGVja0Fyb3VuZCcgZm9yIGl0cyBuZXh0IHRhcmdldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGxheWVyICAgICAgIFRoZSBwbGF5ZXIgXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVuZW15Qm9hcmQgICBUaGUgYm9hcmQgdGhlIHBsYXllciBhdHRhY2tzXG4gICAgICovXG4gICAgY29uc3Qgc21hcnRNb3ZlID0gKHBsYXllciwgZW5lbXlCb2FyZCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IGNob2ljZSA9IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgeCA6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgIHkgOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy94IGlzIGV2ZW4gLT4geSBtdXN0IGJlIGV2ZW5cbiAgICAgICAgaWYoY2hvaWNlLnggJSAyID09PSAwKXtcbiAgICAgICAgICAgIHdoaWxlKGNob2ljZS55ICUgMiAhPT0gMCl7XG4gICAgICAgICAgICAgICAgY2hvaWNlLnkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy94IGlzIG9kZCAtPiB5IG11c3QgYmUgb2RkXG4gICAgICAgIGVsc2UgeyBcbiAgICAgICAgICAgIHdoaWxlKGNob2ljZS55ICUgMiA9PT0gMCl7XG4gICAgICAgICAgICAgICAgY2hvaWNlLnkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vaWYgdGhlIGNlbGwgaGFzIGFscmVhZHkgYmVlbiBoaXQsIHJ1biBzbWFydE1vdmUgYWdhaW5cbiAgICAgICAgaWYoZW5lbXlCb2FyZC5teUJvYXJkW2Nob2ljZS54XVtjaG9pY2UueV0uc3RhdHVzICE9PSAwKXtcbiAgICAgICAgICAgIHJldHVybiBzbWFydE1vdmUocGxheWVyLCBlbmVteUJvYXJkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYobW92ZUxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgYXR0YWNrU3RhdHVzID0gcGxheWVyLmF0dGFjayhlbmVteUJvYXJkLCBjaG9pY2UueCwgY2hvaWNlLnkpO1xuICAgICAgICAgICAgaWYoYXR0YWNrU3RhdHVzLmhpdCl7XG4gICAgICAgICAgICAgICAgbW92ZUxpc3QucHVzaChjaG9pY2UpO1xuICAgICAgICAgICAgICAgIHJlbmRlckF0dGFjayhjaG9pY2UsIGF0dGFja1N0YXR1cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyQXR0YWNrKGNob2ljZSwgYXR0YWNrU3RhdHVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXsgLy9pZiB0aGVyZSBhcmUgcHJldmlvdXMgdmFsaWQgbW92ZXMgKHRoZXJlIGhhcyBiZWVuIGEgc3VjY2Vzc2Z1bCBoaXQgYmVmb3JlKSBcblxuICAgICAgICAgICAgY2hlY2tBcm91bmQocGxheWVyLCBlbmVteUJvYXJkLCBtb3ZlTGlzdFttb3ZlTGlzdC5sZW5ndGggLSAxXS54LFxuICAgICAgICAgICAgICAgIG1vdmVMaXN0W21vdmVMaXN0Lmxlbmd0aCAtIDFdLnkpO1xuICAgICAgICAgICAgcmV0dXJuOyAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgRnVuY3Rpb25cbiAgICAgKiBAZGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwbGF5ZXIgICAgICAgVGhlIHBsYXllciBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZW5lbXlCb2FyZCAgIFRoZSBib2FyZCB0aGUgcGxheWVyIGF0dGFja3NcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCAgICAgICAgICAgIHgtY29vcmRpbmF0ZSBvZiB0aGUgYm9hcmQgdG8gYXR0YWNrXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgICAgICAgICAgICB5LWNvb3JkaW5hdGUgb2YgdGhlIGJvYXJkIHRvIGF0dGFja1xuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGNvbnN0IGNoZWNrQXJvdW5kID0gKHBsYXllciwgZW5lbXlCb2FyZCwgeCwgeSkgPT4ge1xuICAgIFxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBbXCJ1cFwiLCBcImRvd25cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIl07XG4gICAgICAgIGNvbnN0IHVwID0geCAtIDE7XG4gICAgICAgIGNvbnN0IGRvd24gPSB4ICsgMTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHkgLSAxO1xuICAgICAgICBjb25zdCByaWdodCA9IHkgKyAxO1xuICAgICAgICBsZXQgY2hvaWNlID0ge1xuICAgICAgICAgICAgeCA6IHgsIFxuICAgICAgICAgICAgeSA6IHksXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vZ28gdXBcbiAgICAgICAgaWYoZGlyZWN0aW9uW2NvdW50XSA9PT0gXCJ1cFwiKXtcbiAgICAgICAgICAgIGlmKHggPiAwICYmIGVuZW15Qm9hcmQubXlCb2FyZFt1cF1beV0uc3RhdHVzID09PSAwKXtcbiAgICAgICAgICAgICAgICBjaG9pY2UueCA9IHVwO1xuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tTdGF0dXMgPSBwbGF5ZXIuYXR0YWNrKGVuZW15Qm9hcmQsIHVwLCB5KTtcbiAgICAgICAgICAgICAgICBpZihhdHRhY2tTdGF0dXMuaGl0KXtcbiAgICAgICAgICAgICAgICAgICAgbW92ZUxpc3QucHVzaChjaG9pY2UpOyAvL2FkZCB0byBsaXN0IFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJBdHRhY2soY2hvaWNlLCBhdHRhY2tTdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZUxpc3QucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJBdHRhY2soY2hvaWNlLCBhdHRhY2tTdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdmVMaXN0LnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIHNtYXJ0TW92ZShwbGF5ZXIsIGVuZW15Qm9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb25bY291bnRdID09PSBcImRvd25cIil7XG4gICAgICAgICAgICBpZih4IDwgOSAmJiBlbmVteUJvYXJkLm15Qm9hcmRbZG93bl1beV0uc3RhdHVzID09PSAwICl7XG4gICAgICAgICAgICAgICAgY2hvaWNlLnggPSBkb3duO1xuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tTdGF0dXMgPSBwbGF5ZXIuYXR0YWNrKGVuZW15Qm9hcmQsIGRvd24sIHkpO1xuICAgICAgICAgICAgICAgIGlmKGF0dGFja1N0YXR1cy5oaXQpe1xuICAgICAgICAgICAgICAgICAgICBtb3ZlTGlzdC5wdXNoKGNob2ljZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckF0dGFjayhjaG9pY2UsIGF0dGFja1N0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJBdHRhY2soY2hvaWNlLCBhdHRhY2tTdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgc21hcnRNb3ZlKHBsYXllciwgZW5lbXlCb2FyZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb25bY291bnRdID09PSBcImxlZnRcIil7XG4gICAgICAgICAgICBpZih5ID4gMCAmJiBlbmVteUJvYXJkLm15Qm9hcmRbeF1bbGVmdF0uc3RhdHVzID09PSAwKXtcbiAgICAgICAgICAgICAgICBjaG9pY2UueSA9IGxlZnQ7XG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja1N0YXR1cyA9IHBsYXllci5hdHRhY2soZW5lbXlCb2FyZCwgeCwgbGVmdCk7XG4gICAgICAgICAgICAgICAgaWYoYXR0YWNrU3RhdHVzLmhpdCl7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVMaXN0LnB1c2goY2hvaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXR0YWNrKGNob2ljZSwgYXR0YWNrU3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVMaXN0LnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXR0YWNrKGNob2ljZSwgYXR0YWNrU3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb3ZlTGlzdC5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICBzbWFydE1vdmUocGxheWVyLCBlbmVteUJvYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uW2NvdW50XSA9PT0gXCJyaWdodFwiKXtcbiAgICAgICAgICAgIGlmKHkgPCA5ICYmIGVuZW15Qm9hcmQubXlCb2FyZFt4XVtyaWdodF0uc3RhdHVzID09PSAwICl7XG4gICAgICAgICAgICAgICAgY2hvaWNlLnkgPSByaWdodDtcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrU3RhdHVzID0gcGxheWVyLmF0dGFjayhlbmVteUJvYXJkLCB4LCByaWdodCk7XG4gICAgICAgICAgICAgICAgaWYoYXR0YWNrU3RhdHVzLmhpdCl7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVMaXN0LnB1c2goY2hvaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXR0YWNrKGNob2ljZSwgYXR0YWNrU3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckF0dGFjayhjaG9pY2UsIGF0dGFja1N0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIHNtYXJ0TW92ZShwbGF5ZXIsIGVuZW15Qm9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlKG1vdmVMaXN0Lmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVMaXN0LnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgc21hcnRNb3ZlKHBsYXllciwgZW5lbXlCb2FyZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW5kZXJBdHRhY2sgPSAoY2hvaWNlLCBzdGF0dXMpID0+IHtcbiAgICBcbiAgICAgICAgY29uc3QgZW5lbXlCb2FyZERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQub25lJyk7XG4gICAgICAgIGxldCB4ID0gY2hvaWNlLng7XG4gICAgICAgIGxldCB5ID0gY2hvaWNlLnk7XG4gICAgXG4gICAgICAgIGlmKGNob2ljZS54ID09PSAwKXtcbiAgICAgICAgICAgIHggPSBcIlwiO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGxldCBjdXJyZW50Q29vcmQgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkgKyB5LnRvU3RyaW5nKCkpO1xuICAgIFxuICAgICAgICBpZihzdGF0dXMuaGl0KXtcbiAgICAgICAgICAgIGlmKHN0YXR1cy5zdW5rKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RhdHVzLnN1bmtDb29yZC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdW5rZW5Db29yZCA9IHN0YXR1cy5zdW5rQ29vcmRbaV07XG4gICAgICAgICAgICAgICAgICAgIGVuZW15Qm9hcmREaXNwbGF5LmNoaWxkTm9kZXMuaXRlbShzdW5rZW5Db29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vcmVzZXRNb3ZlTGlzdFxuICAgICAgICAgICAgICAgICAgICBpZihzdW5rZW5Db29yZCA8IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVMaXN0LnNwbGljZShtb3ZlTGlzdC5pbmRleE9mKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc3Vua2VuQ29vcmQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAxKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udmVydFN1bmtlbkNvb3JkID0gc3Vua2VuQ29vcmQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVMaXN0LnNwbGljZShtb3ZlTGlzdC5pbmRleE9mKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBjb252ZXJ0U3Vua2VuQ29vcmQuY2hhckF0KDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvbnZlcnRTdW5rZW5Db29yZC5jaGFyQXQoMSksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICBcbiAgICAgICAgICAgICAgICBlbmVteUJvYXJkRGlzcGxheS5jaGlsZHJlbltjdXJyZW50Q29vcmRdLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVuZW15Qm9hcmREaXNwbGF5LmNoaWxkcmVuW2N1cnJlbnRDb29yZF0uY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc21hcnRNb3ZlXG4gICAgfVxufSkoKTtcblxuY29uc3QgY29tcFBsYWNlU2hpcHMgPSAoY29tcHV0ZXJCb2FyZCkgPT4ge1xuXG4gICAgbGV0IHBsYWNlQ291bnQgPSAwO1xuICAgIHdoaWxlKHBsYWNlQ291bnQgPCA1KXtcbiAgICAgICAgbGV0IGFsaWdubWVudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICAoYWxpZ25tZW50ID09PSAwKSA/IGFsaWdubWVudCA9ICd2ZXJ0aWNhbCcgOiBhbGlnbm1lbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIGlmKGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKGNvbXB1dGVyQm9hcmQuc2hpcHNbcGxhY2VDb3VudF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbm1lbnQpKVxuICAgICAgICB7XG4gICAgICAgICAgICBwbGFjZUNvdW50Kys7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVyQXR0YWNrO1xuZXhwb3J0IHsgY29tcFBsYWNlU2hpcHMgfSIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4uL2ZhY3RvcnkvZ2FtZUJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vZmFjdG9yeS9zaGlwXCI7XG5cbmNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcCgnY2FycmllcicsIDUpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKCdiYXR0bGVzaGlwJywgNCk7XG4gICAgY29uc3QgY3J1aXNlciA9IFNoaXAoJ2NydWlzZXInLCAzKTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKCdzdWJtYXJpbmUnLCAzKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKCdkZXN0cm95ZXInLCAyKTtcblxuICAgIGJvYXJkLnNoaXBzLnB1c2goY2Fycmllcik7XG4gICAgYm9hcmQuc2hpcHMucHVzaChiYXR0bGVzaGlwKTtcbiAgICBib2FyZC5zaGlwcy5wdXNoKGNydWlzZXIpO1xuICAgIGJvYXJkLnNoaXBzLnB1c2goc3VibWFyaW5lKTtcbiAgICBib2FyZC5zaGlwcy5wdXNoKGRlc3Ryb3llcik7XG4gICAgXG4gICAgcmV0dXJuIGJvYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb2FyZDsiLCJpbXBvcnQgeyBpbml0IH0gZnJvbSAnLi4vVUkvaW5pdCdcbmltcG9ydCB7IGdhbWVMb29wIH0gZnJvbSAnLi9nYW1lTG9vcCc7XG5cblxuY29uc3QgYW5ub3VuY2VXaW5uZXIgPSAocGxheWVyKSA9PiB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgY29uc3QgbXlNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbXlNb2RhbC5pZCA9IFwibXlNb2RhbFwiO1xuICAgIG15TW9kYWwuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NOYW1lID0gXCJtb2RhbC1jb250ZW50XCI7XG5cbiAgICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAocGxheWVyID09PSBcImNvbXB1dGVyXCIpID8gd2lubmVyLmlubmVySFRNTCA9IGBZb3UgaGF2ZSBsb3N0IHRoZSBiYXR0bGUhYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogd2lubmVyLmlubmVySFRNTCA9IGBZb3UgaGF2ZSBkZWZlYXRlZCB0aGUgZW5lbXkhYDtcblxuICAgIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlc3RhcnRCdG4uY2xhc3NOYW1lID0gXCJyZXN0YXJ0XCI7XG4gICAgcmVzdGFydEJ0bi5pbm5lckhUTUwgPSBgUGxheSBBZ2Fpbj9gO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChteU1vZGFsKTtcbiAgICBteU1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHdpbm5lcik7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHJlc3RhcnRCdG4pO1xuXG59XG5cbmNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydFwiKTtcblxuICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3b3JrcycpXG4gICAgICAgIHdoaWxlKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKXtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgZ2FtZUxvb3AoKTtcbiAgICB9KVxufVxuXG5leHBvcnQgeyBhbm5vdW5jZVdpbm5lciwgcmVzZXRHYW1lIH0iLCJcbi8qXG4gICAgMSlDcmVhdGUgUGxheWVyc1xuICAgIDIpQ3JlYXRlIEJvYXJkXG4gICAgMylQb3B1bGF0ZSBib3RoIGJvYXJkc1xuICAgIDQpQXR0YWNrIG1ldGhvZFxuKi9cblxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vZmFjdG9yeS9wbGF5ZXJcIjtcbmltcG9ydCB7IHJlbmRlclNoaXBzIH0gZnJvbSBcIi4uL1VJL3JlbmRlclNoaXBzL3BsYWNlU2hpcHNcIjtcbmltcG9ydCBjb21wdXRlckF0dGFjaywgeyBjb21wUGxhY2VTaGlwc30gZnJvbSBcIi4vY29tcHV0ZXJBSVwiO1xuaW1wb3J0IHsgYW5ub3VuY2VXaW5uZXIsIHJlc2V0R2FtZSB9IGZyb20gXCIuL2dhbWVFbmRcIlxuaW1wb3J0IGNyZWF0ZUJvYXJkIGZyb20gXCIuL2NyZWF0ZUJvYXJkXCI7XG5pbXBvcnQgeyB0b2dnbGVCb2FyZE9wYWNpdHkgfSBmcm9tIFwiLi4vVUkvYm9hcmRzXCI7XG5cbmNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcigpO1xuICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gY3JlYXRlQm9hcmQoKTtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQub25lXCIpXG4gICAgcGxheWVyT25lLm15VHVybiA9IHRydWU7XG4gICAgXG4gICAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gY3JlYXRlQm9hcmQoKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC50d29cIik7XG5cbiAgICBjb21wUGxhY2VTaGlwcyhjb21wdXRlckJvYXJkKTtcbiAgICByZW5kZXJTaGlwcyhwbGF5ZXJPbmVCb2FyZCk7XG4gICAgXG4gICAgY29tcHV0ZXJCb2FyZERPTS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XG4gICAgXG4gICAgICAgIGlmKHBsYXllck9uZS5teVR1cm4pe1xuICAgICAgICAgICAgY29uc3QgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmlubmVySFRNTC5hdCgwKSk7XG4gICAgICAgICAgICBjb25zdCB5ID0gcGFyc2VJbnQoZS50YXJnZXQuaW5uZXJIVE1MLmF0KDEpKTtcblxuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0WzFdID09PSBcIm1pc3NcIiB8fCBlLnRhcmdldC5jbGFzc0xpc3RbMV0gPT09IFwiaGl0XCIpe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvZ2dsZUJvYXJkT3BhY2l0eShwbGF5ZXJCb2FyZERPTSk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQm9hcmRPcGFjaXR5KGNvbXB1dGVyQm9hcmRET00pO1xuXG4gICAgICAgICAgICAgICAgLy9pZiAnZnJlc2gnIGNlbGwgdGhlbiBhdHRhY2tcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrU3RhdHVzID0gcGxheWVyT25lLmF0dGFjayhjb21wdXRlckJvYXJkLCB4LCB5KTtcblxuICAgICAgICAgICAgICAgIGlmKGF0dGFja1N0YXR1cy5oaXQpe1xuICAgICAgICAgICAgICAgICAgICBpZihhdHRhY2tTdGF0dXMuc3Vuayl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXR0YWNrU3RhdHVzLnN1bmtDb29yZC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzLml0ZW0oYXR0YWNrU3RhdHVzLnN1bmtDb29yZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21wdXRlci5teVR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgaWYoY29tcHV0ZXJCb2FyZC5pc0FsbFN1bmsoKSl7XG4gICAgICAgICAgICAgICAgYW5ub3VuY2VXaW5uZXIoXCJwbGF5ZXJcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc2V0R2FtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoY29tcHV0ZXIubXlUdXJuKXtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZXJBdHRhY2suc21hcnRNb3ZlKGNvbXB1dGVyLCBwbGF5ZXJPbmVCb2FyZCk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQm9hcmRPcGFjaXR5KHBsYXllckJvYXJkRE9NKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVCb2FyZE9wYWNpdHkoY29tcHV0ZXJCb2FyZERPTSk7XG4gICAgICAgICAgICAgICAgaWYocGxheWVyT25lQm9hcmQuaXNBbGxTdW5rKCkpe1xuICAgICAgICAgICAgICAgICAgICBhbm5vdW5jZVdpbm5lcihcImNvbXB1dGVyXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzZXRHYW1lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmRET00uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgfSwgNTAwKVxuXG4gICAgICAgICAgICBwbGF5ZXJPbmUubXlUdXJuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxuZXhwb3J0IHtnYW1lTG9vcH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2FtZUxvb3AgfSBmcm9tICcuL3NjcmlwdHMvZ2FtZV9sb29wL2dhbWVMb29wJztcbmltcG9ydCB7IGluaXQgfSBmcm9tICcuL3NjcmlwdHMvVUkvaW5pdCc7XG5pbXBvcnQgICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL25vcm1hbGl6ZS5jc3MnO1xuXG5jb25zdCBydW5BcHAgPSAoKCkgPT4ge1xuICAgIGluaXQoKTtcbiAgICBnYW1lTG9vcCgpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=