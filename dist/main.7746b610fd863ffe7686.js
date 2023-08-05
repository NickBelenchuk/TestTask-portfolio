/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/cardSort.js":
/*!*********************************!*\
  !*** ./src/modules/cardSort.js ***!
  \*********************************/
/***/ (() => {

var filterItem = document.querySelector(".skills");
var filterCard = document.querySelectorAll(".cards .cards__item");
window.onload = function () {
  filterItem.onclick = function (selectedItem) {
    if (selectedItem.target.classList.contains("skills__item")) {
      filterItem.querySelector(".skills__item--active").classList.remove("skills__item--active");
      selectedItem.target.classList.add("skills__item--active");
      var filterName = selectedItem.target.getAttribute("data-name");
      filterCard.forEach(function (card) {
        var filterCards = card.getAttribute("data-name");
        if (filterCards == filterName || filterName == "all") {
          card.classList.remove("cards__item---hide");
          card.classList.add("cards__item---show");
        } else {
          card.classList.add("cards__item---hide");
          card.classList.remove("cards__item---show");
        }
      });
    }
  };
};

/***/ }),

/***/ "./src/modules/range.js":
/*!******************************!*\
  !*** ./src/modules/range.js ***!
  \******************************/
/***/ (() => {

var rangeInputs = document.querySelectorAll('input[type="range"]');
var numberInput = document.querySelector('input[type="number"]');
var dataValue = document.querySelectorAll("option");
function handleInputChange(e) {
  var target = e.target;
  if (e.target.type !== "range") {
    target = document.getElementById("range");
  }
  var min = target.min;
  var max = target.max;
  var val = target.value;
  dataValue.forEach(function (option) {
    option.addEventListener("option", handleInputChange);
    option.label == val ? option.classList.add("current") : option.classList.remove("current");
  });
  target.style.backgroundSize = (val - min) * 100 / (max - min) + "% 100%";
}
rangeInputs.forEach(function (input) {
  input.addEventListener("input", handleInputChange);
});

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ (() => {

var anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var elementId = anchor.getAttribute("href").substring(1);
    var section = document.getElementById(elementId);
    if (!section) return;
    var topOffset = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var scrollPos = topOffset - sectionHeight;
    window.scrollTo({
      top: scrollPos,
      behavior: "smooth"
    });
  });
});
window.addEventListener("scroll", function () {
  var scrollBar = window.scrollY;
  document.querySelectorAll(".section").forEach(function (el, i) {
    if (el.offsetTop <= scrollBar) {
      document.querySelectorAll(".menu path ").forEach(function (el) {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      document.querySelectorAll(".menu a")[i].querySelector("path").classList.add("active");
    }
    if (el.offsetTop <= scrollBar) {
      document.querySelectorAll(".menu p ").forEach(function (el) {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      document.querySelectorAll(".menu a")[i].querySelector("p").classList.add("active");
    }
  });
});

/***/ }),

/***/ "./src/modules/swiper.js":
/*!*******************************!*\
  !*** ./src/modules/swiper.js ***!
  \*******************************/
/***/ (() => {

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

/***/ }),

/***/ "./src/modules/theme.js":
/*!******************************!*\
  !*** ./src/modules/theme.js ***!
  \******************************/
/***/ (() => {

var body = document.querySelector("body");
var themeSwitcher = document.querySelector(".toggle");
themeSwitcher.addEventListener("click", function () {
  body.classList.toggle("light");
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/slide2.png */ "./src/img/slide2.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.swiper {
  max-width: 611px;
  padding-top: 50px;
  padding-bottom: 32px;
}

.swiper-wrapper {
  gap: 20px;
}

.swiper-slide {
  flex-direction: column;
  font-size: 18px;
  height: 241px;
  overflow: hidden;
  border-radius: 12px;
  /* Center slide text vertically */
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
}
.swiper-slide:hover .slide__content {
  transition: all 0.3s ease-in-out;
  -webkit-filter: blur(6.5px);
          filter: blur(6.5px);
}
.swiper-slide:hover .blur__content--btn {
  transition: all 0.3s ease-in-out;
  display: block;
}
.swiper-slide .blur__content--btn {
  display: none;
  position: absolute;
  padding: 10px 40px;
  background: #8541FA;
  box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.25);
  border-radius: 12px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  z-index: 999999999999999;
}
.swiper-slide .blur__content--btn:hover {
  background: #A068FF;
}
.swiper-slide .blur__content--btn:active {
  background: #7036D3;
}
.swiper-slide .slide__content {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.swiper-slide .slide__content--text {
  background: #2C314F;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  width: 225px;
  height: 46px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.swiper-slide-active {
  -webkit-transform: scale(1.1) !important;
          transform: scale(1.1) !important;
}
.swiper-slide-active {
  opacity: 1;
  transition: all 0.3s ease-in-out;
}

.swiper-button-next {
  padding: 20px;
  width: 15px;
  height: 15px;
  top: 156px;
  right: 0;
  background: rgba(198, 199, 201, 0.3);
  -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
  border-radius: 12px;
}

.swiper-button-prev {
  padding: 20px;
  width: 15px;
  height: 15px;
  top: 156px;
  left: 0;
  background: rgba(198, 199, 201, 0.3);
  -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
  border-radius: 12px;
}

.swiper-button-next,
.swiper-button-prev :root {
  --swiper-navigation-size: 15px !important;
}

.swiper-button-next,
.swiper-button-prev :root {
  color: #fcbd30;
}

.swiper-button-prev,
.swiper-button-next :root {
  --swiper-navigation-size: 15px !important;
}

.swiper-button-prev,
.swiper-button-next :root {
  color: #fcbd30;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
  background: #10141d;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.container {
  max-width: 1360px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
}

section {
  background-color: #151c2c;
  border-radius: 12px;
}

.subheader {
  text-align: center;
  padding-top: 34px;
  font-size: 17px;
  line-height: 23px;
  color: #edecf1;
}
.subheader span {
  color: #fcbd30;
  text-transform: uppercase;
}

/*       { sidebar }      */
.sidebar {
  position: relative;
  width: 300px;
  margin: 20px 20px 0 0;
  border-radius: 12px;
}
.sidebar .section__sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  background: #151c2c;
  padding: 34px 0 32px 0;
  max-height: 650px;
}
.sidebar .section__sidebar .menu__item {
  padding-bottom: 28px;
}
.sidebar .section__sidebar .menu__item .active {
  color: #8541fa;
  fill: #8541fa;
}
.sidebar .section__sidebar .menu__item--link {
  display: flex;
  color: #c6c7c9;
  align-items: center;
  padding-left: 32px;
}
.sidebar .section__sidebar .menu__item--link svg {
  width: 20px;
  height: 20px;
}
.sidebar .section__sidebar .menu__item--link svg path {
  fill: #c6c7c9;
  transition: all 0.3s ease-in-out;
}
.sidebar .section__sidebar .menu__item--link p {
  padding-left: 20px;
  transition: all 0.3s ease-in-out;
}
.sidebar .section__sidebar .menu__item :hover {
  color: #8541fa;
}
.sidebar .section__sidebar .menu__item :hover svg path {
  fill: #8541fa;
}
.sidebar .section__sidebar .daynight {
  display: flex;
  color: #c6c7c9;
  justify-content: center;
  margin-top: 322px;
}
.sidebar .section__sidebar .daynight p {
  padding: 0 14px;
}
.sidebar .section__sidebar .daynight #checkbox {
  display: none;
  background-color: #0c0a15;
}
.sidebar .section__sidebar .daynight .toggle {
  display: flex;
  justify-content: space-around;
  height: 20px;
  width: 43px;
  background-color: #0c0a15;
  border-radius: 9999px;
  background-size: cover;
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.sidebar .section__sidebar .daynight .toggle::before {
  content: "";
  height: 14px;
  width: 14px;
  position: absolute;
  top: 3px;
  right: 10%;
  border-radius: 50%;
  background-color: #8541fa;
  transition: all 0.5s ease-in-out;
}
.sidebar .section__sidebar .daynight #checkbox:checked + .toggle::before {
  position: absolute;
  right: 62%;
}

/*      { Main }        */
.main {
  width: 100%;
  max-width: 1000px;
  padding-top: 20px;
  /*      { hero__section }        */
  /*      { biography__section }        */
  /*       { skills__section }      */
  /*       { works__section }      */
  /*       { education__section }      */
  /*       { footer__section }      */
}
.main .hero__section {
  padding: 0 40px 88px 40px;
  max-height: 429px;
}
.main .hero__section .icons {
  display: flex;
  justify-content: flex-end;
  gap: 19px;
  padding-top: 34px;
  padding-bottom: 38px;
}
.main .hero__section .icons__item {
  display: flex;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 99999;
}
.main .hero__section .icons :hover svg .github__item,
.main .hero__section .icons :hover svg .linkedin__item,
.main .hero__section .icons :hover svg .instagram__item,
.main .hero__section .icons :hover svg .youtube__icon {
  fill: #8541fa;
  transition: all 0.2s ease-in-out;
}
.main .hero__section .hero {
  display: flex;
  justify-content: space-between;
}
.main .hero__section .hero .about {
  font-style: normal;
  color: #edecf1;
}
.main .hero__section .hero .about__hi {
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
}
.main .hero__section .hero .about__title {
  color: #fcbd30;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  padding-top: 1px;
}
.main .hero__section .hero .about__exp {
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  padding-top: 9px;
}
.main .hero__section .hero .about__btn {
  margin-top: 27px;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: #ffffff;
  padding: 7px 23px;
  background: #8541fa;
  box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.3);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.main .hero__section .hero .about__btn:hover {
  background: #a068ff;
}
.main .hero__section .hero .about__btn:active {
  background: #8541fa;
}
.main .hero__section .hero .image__block {
  margin-left: auto;
}
.main .hero__section .hero .image__block .block {
  position: relative;
  background: #fcbd30;
  width: 460px;
  height: 253px;
  border-radius: 12px;
}
.main .hero__section .hero .image__block .block .photo {
  position: absolute;
  left: 20%;
  top: -42.7%;
}
.main .biography__section {
  margin: 20px 0;
  color: #edecf1;
  font-style: normal;
  font-weight: 400;
  padding: 0 10px;
}
.main .biography__section .biography__text {
  max-width: 700px;
  margin: 0 auto;
  padding: 24px 0 38px 0;
  font-size: 15px;
  line-height: 26px;
  color: #ffffff;
}
.main .biography__section .biography__text #rangevalue {
  color: #fcbd30;
}
.main .biography__section .range {
  padding-bottom: 34px;
  text-align: center;
  /* Input Thumb */
}
.main .biography__section .range input,
.main .biography__section .range output {
  display: inline-block;
  vertical-align: middle;
  font-size: 1em;
  font-family: Arial, sans-serif;
}
.main .biography__section .range output {
  background: #151c2c;
  padding: 5px 16px;
  border-radius: 3px;
  color: #fff;
}
.main .biography__section .range input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  max-width: 448px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  background-image: linear-gradient(#8541fa, #8541fa);
  background-size: 45% 100%;
  background-repeat: no-repeat;
  align-items: center;
}
.main .biography__section .range input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background: #8541fa;
  border: 2px solid #ffffff;
  cursor: ew-resize;
}
.main .skills__section {
  padding-bottom: 32px;
}
.main .skills__section .skills {
  padding: 24px 0 38px 0;
  max-width: 513px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 15px;
}
.main .skills__section .skills__item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2c314f;
  border-radius: 12px;
  width: 161px;
  height: 40px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: rgba(198, 199, 201, 0.5);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.main .skills__section .skills__item:hover {
  background: #a068ff;
  box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.3);
  border-radius: 12px;
  color: #edecf1;
}
.main .skills__section .skills__item:active {
  background: #8541fa;
}
.main .skills__section .skills .skills__item--active {
  box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.3);
  border-radius: 12px;
  color: #edecf1;
  background: #8541fa;
}
.main .skills__section .cards {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  overflow: hidden;
  max-width: 490px;
  gap: 20px;
  color: #ffffff;
}
.main .skills__section .cards__item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid #2c314f;
  border-radius: 12px;
  width: 150px;
  height: 150px;
}
.main .skills__section .cards__item img {
  width: 91px;
  height: 91px;
}
.main .skills__section .cards__item p {
  width: 80px;
  text-align: center;
  font-weight: 600;
  font-size: 11px;
  line-height: 15px;
  text-transform: uppercase;
}
.main .skills__section .cards__item---hide {
  display: none;
}
.main .skills__section .cards__item---show {
  -webkit-animation: animate 0.4s ease;
          animation: animate 0.4s ease;
}
@-webkit-keyframes animate {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes animate {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
.main .works__section {
  margin-top: 20px;
}
.main .education__section {
  margin-top: 20px;
}
.main .education__section .education__container {
  margin: 0 auto;
  max-width: 590px;
}
.main .education__section .education__container .subheader {
  padding-bottom: 10px;
}
.main .education__section .education__container .educations .education__card {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
}
.main .education__section .education__container .educations .education__card--text {
  flex: 1;
}
.main .education__section .education__container .educations .education__card--text .text__subheader {
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #edecf1;
}
.main .education__section .education__container .educations .education__card--text .text__info {
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  color: #c6c7c9;
  padding-top: 12px;
}
.main .education__section .education__container .educations .education__card--line {
  display: block;
  border-radius: 12px;
  border: 1.4px rgba(198, 199, 201, 0.5) solid;
  height: auto;
  margin: 0 20px;
}
.main .education__section .education__container .educations .education__card--years {
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;
  color: rgba(255, 255, 255, 0.05);
}
.main .footer__section {
  margin: 20px 0;
}
.main .footer__section .footer__icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 32px 0;
  flex-wrap: wrap;
}
.main .footer__section .footer__icons--item {
  transition: all 0.3s ease-in-out;
  width: 74px;
  height: 74px;
  background: #2c314f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.5;
}
.main .footer__section .footer__icons :hover {
  opacity: 1;
}

datalist {
  display: flex;
  width: 100%;
  max-width: 448px;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #C6C7C9;
}
datalist .current {
  color: #fcbd30;
}

.light {
  /*       { sidebar }      */
  /*      { Main }        */
}
.light section,
.light .sidebar .section__sidebar {
  background: #edecf1;
  color: #2c314f;
}
.light .subheader {
  color: #2c314f;
}
.light .sidebar .section__sidebar .menu .active {
  color: #8541fa;
  fill: #8541fa;
}
.light .sidebar .section__sidebar .menu__item--link {
  color: #2c314f;
}
.light .sidebar .section__sidebar .menu__item--link svg {
  width: 20px;
  height: 20px;
}
.light .sidebar .section__sidebar .menu__item--link svg path {
  fill: #2c314f;
}
.light .sidebar .section__sidebar .menu__item :hover {
  color: #8541fa;
}
.light .sidebar .section__sidebar .menu__item :hover svg path {
  fill: #8541fa;
}
.light .main {
  /*      { hero__section }        */
  /*      { biography__section }        */
  /*       { skills__section }      */
  /*       { works__section }      */
  /*       { education__section }      */
  /*       { footer__section }      */
}
.light .main .hero__section .hero .about {
  color: #2c314f;
}
.light .main .hero__section .hero .icons :hover svg .github__item,
.light .main .hero__section .hero .icons :hover svg .linkedin__item,
.light .main .hero__section .hero .icons :hover svg .instagram__item,
.light .main .hero__section .hero .icons :hover svg .youtube__icon {
  fill: #8541fa;
  transition: all 0.2s ease-in-out;
}
.light .main .biography__section {
  color: #2c314f;
}
.light .main .biography__section .biography__text {
  color: #2c314f;
}
.light .main .skills__section .skills__item {
  background: #c6c7c9;
  color: rgba(44, 49, 79, 0.5);
}
.light .main .skills__section .skills__item:hover {
  background: #a068ff;
  box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.3);
  color: #edecf1;
}
.light .main .skills__section .skills__item:active {
  background: #8541fa;
}
.light .main .skills__section .skills__item--active {
  background: #8541fa;
  color: #EDECF1;
}
.light .main .skills__section .cards__item {
  border: 2px solid #c6c7c9;
  color: #2c314f;
}
.light .main .education__section .education__container .educations .education__card--text .text__subheader {
  color: #2c314f;
}
.light .main .education__section .education__container .educations .education__card--text .text__info {
  color: #2c314f;
}
.light .main .education__section .education__container .educations .education__card--line {
  border: 1.4px rgba(44, 49, 79, 0.5) solid;
}
.light .main .education__section .education__container .educations .education__card--years {
  color: rgba(44, 49, 79, 0.05);
}
.light .main .footer__section .footer__icons--item {
  background: #2c314f;
}
.light path.youtube__white {
  fill: #edecf1;
}
.light path.github__item,
.light path.linkedin__item,
.light path.instagram__item,
.light path.youtube__icon {
  fill: #2c314f;
}

.popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  max-width: 500px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(155, 154, 154);
  padding: 25px;
  text-align: center;
  background: rgb(245, 240, 240);
  border-radius: 20px;
  z-index: 9999;
}
.popup span {
  display: inline-flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
  background: rgb(36, 34, 34);
  color: #c6c7c9;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.popup span:hover {
  background: #c6c7c9;
  color: rgb(214, 6, 6);
}
@media (max-width: 760px){
  .swiper-button-next {
    right: 20px;
  }
  .swiper-button-prev {
    left: 20px;
  }
}
@media (max-width: 1024px){
  .container {
    padding: 0px 10px 0px 24px;
  }
  .sidebar {
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    width: 70px;
  }
  .sidebar p {
    display: none;
  }
  .sidebar .section__sidebar {
    padding: 24px 0 32px 0;
    width: 70px;
  }
  .sidebar .section__sidebar .menu__item--link {
    padding-left: 0px;
    justify-content: center;
  }
}
@media (max-width: 768px){
  .container {
    padding: 0;
  }
  section {
    border-radius: 0;
  }
  .subheader {
    padding-top: 14px;
    font-size: 13px;
    line-height: 18px;
  }
  .sidebar {
    margin: 0 5px 0 0;
  }
  .sidebar .section__sidebar {
    top: 0px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    width: 60px;
  }
  .main {
    padding-top: 0px;
  }
  .main .biography__section .biography__text {
    padding: 16px 0 20px 0;
    font-size: 12px;
  }
  .main .skills__section .cards {
    overflow: scroll;
    height: 320px;
  }
  .main .education__section .education__container {
    max-width: 100%;
    padding-bottom: 14px;
  }
  .main .education__section .education__container .educations .education__card {
    flex-direction: column;
    padding: 5px 10px;
  }
  .main .education__section .education__container .educations .education__card--line {
    margin: 8px 0;
  }
  .main .education__section .education__container .educations .education__card--years {
    display: block;
    font-weight: 700;
    font-size: 25px;
    line-height: 34px;
    text-align: right;
    color: rgba(255, 255, 255, 0.25);
  }
  .main .education__section .education__container .educations .education__card--reverse {
    flex-direction: column-reverse;
    padding-top: 0px;
    padding-bottom: 0;
  }
  .main .footer__section .footer__icons {
    padding: 22px 10px 14px 10px;
  }
  .main .hero__section,
  .main .biography__section,
  .main .skills__section,
  .main .works__section,
  .main .education__section,
  .main .footer__section {
    border-radius: 12px 0px 0px 12px;
  }
}
@media (max-width: 989px){
  .main .hero__section {
    padding: 0 0 18px 0;
    max-height: 100%;
  }
  .main .hero__section .icons {
    justify-content: center;
    gap: 19px;
    padding: 20px 0;
  }
  .main .hero__section .hero {
    flex-direction: column;
    align-items: center;
  }
  .main .hero__section .hero .about {
    text-align: center;
  }
  .main .hero__section .hero .image__block {
    margin-top: 32px;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: -webkit-fill-available;
  }
  .main .hero__section .hero .image__block .block {
    width: auto;
    margin-left: auto;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .main .hero__section .hero .image__block .block .photo {
    width: 280px;
    top: -58%;
    max-width: 90%;
    left: auto;
  }
}
@media (max-width: 425px){
  .main .hero__section .hero .about__hi {
    font-size: 14px;
    line-height: 19px;
  }
  .main .hero__section .hero .about__title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
  }
  .main .hero__section .hero .about__exp {
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
  }
  .main .hero__section .hero .image__block .block {
    width: auto;
    margin-left: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 163px;
    border-radius: 0;
  }
  .main .hero__section .hero .image__block .block .photo {
    width: 187px;
  }
  .main .skills__section {
    padding-bottom: 14px;
  }
  .main .skills__section .skills {
    flex-direction: column;
    padding: 10px 10px 14px 10px;
    gap: 4px;
  }
  .main .skills__section .skills__item {
    flex-direction: column;
    padding: 10px 10px 14px 10px;
    width: 100%;
    height: 32px;
  }
  .main .skills__section .cards {
    overflow: scroll;
    gap: 11px;
    height: 271px;
  }
  .main .skills__section .cards__item {
    max-width: 130px;
    max-height: 130px;
  }
  .main .hero__section,
  .main .biography__section,
  .main .skills__section,
  .main .works__section,
  .main .education__section,
  .main .footer__section {
    margin: 0 0 5px 0;
  }
}
@media (max-width: 1100px){
  .main .hero__section .hero .image__block {
    max-width: 100%;
  }
  .main .hero__section .hero .image__block .block {
    min-width: 80%;
    margin-left: auto;
  }
}
@media (max-width: 375px){
  .main .biography__section .biography__text {
    font-size: 10px;
    line-height: 18px;
  }
}`, "",{"version":3,"sources":["webpack://./src/style/_swiper.scss","webpack://./../../../%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0/Tomkovich/portfolio-test-task/src/index.scss","webpack://./src/style/_style.scss","webpack://./src/style/_var.scss","webpack://./src/style/_popup.scss","webpack://./<no source>","webpack://./src/index.scss"],"names":[],"mappings":"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","sourcesContent":[".swiper {\r\n  max-width: 611px;\r\n  padding-top: 50px;\r\n  padding-bottom: 32px;\r\n}\r\n\r\n.swiper-wrapper {\r\n  gap: 20px;\r\n}\r\n\r\n.swiper-slide {\r\n  flex-direction: column;\r\n  font-size: 18px;\r\n  height: 241px;\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n  /* Center slide text vertically */\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: -webkit-flex;\r\n  -webkit-box-pack: center;\r\n  -ms-flex-pack: center;\r\n  -webkit-justify-content: center;\r\n  justify-content: center;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  -webkit-align-items: center;\r\n  align-items: center;\r\n  opacity: 0.5;\r\n\r\n  &:hover {\r\n    .slide__content {\r\n      transition: all 0.3s ease-in-out;\r\n      filter: blur(6.5px);\r\n    }\r\n\r\n    .blur__content--btn {\r\n      transition: all 0.3s ease-in-out;\r\n      display: block;\r\n    }\r\n  }\r\n\r\n  .blur__content--btn {\r\n    display: none;\r\n    position: absolute;\r\n    padding: 10px 40px;\r\n    background: #8541FA;\r\n    box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.25);\r\n    border-radius: 12px;\r\n    text-transform: uppercase;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 15px;\r\n    line-height: 20px;\r\n    color: #FFFFFF;\r\n    border: none;\r\n    cursor: pointer;\r\n    z-index: 999999999999999;\r\n\r\n    &:hover {\r\n      background: #A068FF;\r\n    }\r\n\r\n    &:active {\r\n      background: #7036D3;\r\n    }\r\n  }\r\n\r\n  .slide__content {\r\n    display: flex;\r\n    height: 100%;\r\n    width: 100%;\r\n    align-items: center;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-image: url(../img/slide2.png);\r\n\r\n\r\n    &--text {\r\n      background: #2C314F;\r\n      color: #fff;\r\n      font-weight: 600;\r\n      font-size: 13px;\r\n      line-height: 18px;\r\n      width: 225px;\r\n      height: 46px;\r\n      justify-content: center;\r\n      align-items: center;\r\n      display: flex;\r\n    }\r\n\r\n  }\r\n}\r\n\r\n@media (max-width: 760px) {\r\n  .swiper-button-next {\r\n    right: 20px;\r\n  }\r\n\r\n  .swiper-button-prev {\r\n    left: 20px;\r\n  }\r\n}\r\n\r\n.swiper-slide-active {\r\n  opacity: 1;\r\n  transform: scale(1.1) !important;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.swiper-button-next {\r\n  padding: 20px;\r\n  width: 15px;\r\n  height: 15px;\r\n  top: 156px;\r\n  right: 0;\r\n  background: rgba(198, 199, 201, 0.3);\r\n  backdrop-filter: blur(5px);\r\n  border-radius: 12px;\r\n}\r\n\r\n.swiper-button-prev {\r\n  padding: 20px;\r\n  width: 15px;\r\n  height: 15px;\r\n  top: 156px;\r\n  left: 0;\r\n  background: rgba(198, 199, 201, 0.3);\r\n  backdrop-filter: blur(5px);\r\n  border-radius: 12px;\r\n}\r\n\r\n.swiper-button-next,\r\n.swiper-button-prev :root {\r\n  --swiper-navigation-size: 15px !important;\r\n  color: #fcbd30;\r\n}\r\n\r\n.swiper-button-prev,\r\n.swiper-button-next :root {\r\n  --swiper-navigation-size: 15px !important;\r\n  color: #fcbd30;\r\n}","@import \"~normalize.css\";\n@import url(https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css);\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap\");\n.swiper {\n  max-width: 611px;\n  padding-top: 50px;\n  padding-bottom: 32px;\n}\n\n.swiper-wrapper {\n  gap: 20px;\n}\n\n.swiper-slide {\n  flex-direction: column;\n  font-size: 18px;\n  height: 241px;\n  overflow: hidden;\n  border-radius: 12px;\n  /* Center slide text vertically */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  opacity: 0.5;\n}\n.swiper-slide:hover .slide__content {\n  transition: all 0.3s ease-in-out;\n  filter: blur(6.5px);\n}\n.swiper-slide:hover .blur__content--btn {\n  transition: all 0.3s ease-in-out;\n  display: block;\n}\n.swiper-slide .blur__content--btn {\n  display: none;\n  position: absolute;\n  padding: 10px 40px;\n  background: #8541FA;\n  box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.25);\n  border-radius: 12px;\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 20px;\n  color: #FFFFFF;\n  border: none;\n  cursor: pointer;\n  z-index: 999999999999999;\n}\n.swiper-slide .blur__content--btn:hover {\n  background: #A068FF;\n}\n.swiper-slide .blur__content--btn:active {\n  background: #7036D3;\n}\n.swiper-slide .slide__content {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url(../img/slide2.png);\n}\n.swiper-slide .slide__content--text {\n  background: #2C314F;\n  color: #fff;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  width: 225px;\n  height: 46px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n@media (max-width: 760px) {\n  .swiper-button-next {\n    right: 20px;\n  }\n  .swiper-button-prev {\n    left: 20px;\n  }\n}\n.swiper-slide-active {\n  opacity: 1;\n  transform: scale(1.1) !important;\n  transition: all 0.3s ease-in-out;\n}\n\n.swiper-button-next {\n  padding: 20px;\n  width: 15px;\n  height: 15px;\n  top: 156px;\n  right: 0;\n  background: rgba(198, 199, 201, 0.3);\n  backdrop-filter: blur(5px);\n  border-radius: 12px;\n}\n\n.swiper-button-prev {\n  padding: 20px;\n  width: 15px;\n  height: 15px;\n  top: 156px;\n  left: 0;\n  background: rgba(198, 199, 201, 0.3);\n  backdrop-filter: blur(5px);\n  border-radius: 12px;\n}\n\n.swiper-button-next,\n.swiper-button-prev :root {\n  --swiper-navigation-size: 15px !important;\n  color: #fcbd30;\n}\n\n.swiper-button-prev,\n.swiper-button-next :root {\n  --swiper-navigation-size: 15px !important;\n  color: #fcbd30;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  background: #10141d;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  padding: 0;\n  margin: 0;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.container {\n  max-width: 1360px;\n  width: 100%;\n  padding: 0 20px;\n  margin: 0 auto;\n  display: flex;\n}\n@media (max-width: 1024px) {\n  .container {\n    padding: 0px 10px 0px 24px;\n  }\n}\n@media (max-width: 768px) {\n  .container {\n    padding: 0;\n  }\n}\n\nsection {\n  background-color: #151c2c;\n  border-radius: 12px;\n}\n@media (max-width: 768px) {\n  section {\n    border-radius: 0;\n  }\n}\n\n.subheader {\n  text-align: center;\n  padding-top: 34px;\n  font-size: 17px;\n  line-height: 23px;\n  color: #edecf1;\n}\n.subheader span {\n  color: #fcbd30;\n  text-transform: uppercase;\n}\n@media (max-width: 768px) {\n  .subheader {\n    padding-top: 14px;\n    font-size: 13px;\n    line-height: 18px;\n  }\n}\n\n/*       { sidebar }      */\n.sidebar {\n  position: relative;\n  width: 300px;\n  margin: 20px 20px 0 0;\n  border-radius: 12px;\n}\n@media (max-width: 1024px) {\n  .sidebar {\n    align-items: center;\n    justify-content: center;\n    margin-right: 10px;\n    width: 70px;\n  }\n  .sidebar p {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .sidebar {\n    margin: 0 5px 0 0;\n  }\n}\n.sidebar .section__sidebar {\n  position: sticky;\n  top: 20px;\n  background: #151c2c;\n  padding: 34px 0 32px 0;\n  max-height: 650px;\n}\n@media (max-width: 1024px) {\n  .sidebar .section__sidebar {\n    padding: 24px 0 32px 0;\n    width: 70px;\n  }\n}\n@media (max-width: 768px) {\n  .sidebar .section__sidebar {\n    top: 0px;\n    border-top-right-radius: 12px;\n    border-bottom-right-radius: 12px;\n    width: 60px;\n  }\n}\n.sidebar .section__sidebar .menu__item {\n  padding-bottom: 28px;\n}\n.sidebar .section__sidebar .menu__item .active {\n  color: #8541fa;\n  fill: #8541fa;\n}\n.sidebar .section__sidebar .menu__item--link {\n  display: flex;\n  color: #c6c7c9;\n  align-items: center;\n  padding-left: 32px;\n}\n@media (max-width: 1024px) {\n  .sidebar .section__sidebar .menu__item--link {\n    padding-left: 0px;\n    justify-content: center;\n  }\n}\n.sidebar .section__sidebar .menu__item--link svg {\n  width: 20px;\n  height: 20px;\n}\n.sidebar .section__sidebar .menu__item--link svg path {\n  fill: #c6c7c9;\n  transition: all 0.3s ease-in-out;\n}\n.sidebar .section__sidebar .menu__item--link p {\n  padding-left: 20px;\n  transition: all 0.3s ease-in-out;\n}\n.sidebar .section__sidebar .menu__item :hover {\n  color: #8541fa;\n}\n.sidebar .section__sidebar .menu__item :hover svg path {\n  fill: #8541fa;\n}\n.sidebar .section__sidebar .daynight {\n  display: flex;\n  color: #c6c7c9;\n  justify-content: center;\n  margin-top: 322px;\n}\n.sidebar .section__sidebar .daynight p {\n  padding: 0 14px;\n}\n.sidebar .section__sidebar .daynight #checkbox {\n  display: none;\n  background-color: #0c0a15;\n}\n.sidebar .section__sidebar .daynight .toggle {\n  display: flex;\n  justify-content: space-around;\n  height: 20px;\n  width: 43px;\n  background-color: #0c0a15;\n  border-radius: 9999px;\n  background-size: cover;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n.sidebar .section__sidebar .daynight .toggle::before {\n  content: \"\";\n  height: 14px;\n  width: 14px;\n  position: absolute;\n  top: 3px;\n  right: 10%;\n  border-radius: 50%;\n  background-color: #8541fa;\n  transition: all 0.5s ease-in-out;\n}\n.sidebar .section__sidebar .daynight #checkbox:checked + .toggle::before {\n  position: absolute;\n  right: 62%;\n}\n\n/*      { Main }        */\n.main {\n  width: 100%;\n  max-width: 1000px;\n  padding-top: 20px;\n  /*      { hero__section }        */\n  /*      { biography__section }        */\n  /*       { skills__section }      */\n  /*       { works__section }      */\n  /*       { education__section }      */\n  /*       { footer__section }      */\n}\n@media (max-width: 768px) {\n  .main {\n    padding-top: 0px;\n  }\n}\n.main .hero__section {\n  padding: 0 40px 88px 40px;\n  max-height: 429px;\n}\n@media (max-width: 989px) {\n  .main .hero__section {\n    padding: 0 0 18px 0;\n    max-height: 100%;\n  }\n}\n.main .hero__section .icons {\n  display: flex;\n  justify-content: flex-end;\n  gap: 19px;\n  padding-top: 34px;\n  padding-bottom: 38px;\n}\n@media (max-width: 989px) {\n  .main .hero__section .icons {\n    justify-content: center;\n    gap: 19px;\n    padding: 20px 0;\n  }\n}\n.main .hero__section .icons__item {\n  display: flex;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 99999;\n}\n.main .hero__section .icons :hover svg .github__item,\n.main .hero__section .icons :hover svg .linkedin__item,\n.main .hero__section .icons :hover svg .instagram__item,\n.main .hero__section .icons :hover svg .youtube__icon {\n  fill: #8541fa;\n  transition: all 0.2s ease-in-out;\n}\n.main .hero__section .hero {\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 989px) {\n  .main .hero__section .hero {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.main .hero__section .hero .about {\n  font-style: normal;\n  color: #edecf1;\n}\n@media (max-width: 989px) {\n  .main .hero__section .hero .about {\n    text-align: center;\n  }\n}\n.main .hero__section .hero .about__hi {\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 27px;\n}\n@media (max-width: 425px) {\n  .main .hero__section .hero .about__hi {\n    font-size: 14px;\n    line-height: 19px;\n  }\n}\n.main .hero__section .hero .about__title {\n  color: #fcbd30;\n  font-weight: 700;\n  font-size: 40px;\n  line-height: 54px;\n  padding-top: 1px;\n}\n@media (max-width: 425px) {\n  .main .hero__section .hero .about__title {\n    font-style: normal;\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 33px;\n  }\n}\n.main .hero__section .hero .about__exp {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 33px;\n  padding-top: 9px;\n}\n@media (max-width: 425px) {\n  .main .hero__section .hero .about__exp {\n    font-weight: 600;\n    font-size: 15px;\n    line-height: 20px;\n  }\n}\n.main .hero__section .hero .about__btn {\n  margin-top: 27px;\n  outline: none;\n  border: none;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  color: #ffffff;\n  padding: 7px 23px;\n  background: #8541fa;\n  box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.3);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.main .hero__section .hero .about__btn:hover {\n  background: #a068ff;\n}\n.main .hero__section .hero .about__btn:active {\n  background: #8541fa;\n}\n.main .hero__section .hero .image__block {\n  margin-left: auto;\n}\n@media (max-width: 1100px) {\n  .main .hero__section .hero .image__block {\n    max-width: 100%;\n  }\n}\n@media (max-width: 989px) {\n  .main .hero__section .hero .image__block {\n    margin-top: 32px;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    width: -webkit-fill-available;\n  }\n}\n.main .hero__section .hero .image__block .block {\n  position: relative;\n  background: #fcbd30;\n  width: 460px;\n  height: 253px;\n  border-radius: 12px;\n}\n@media (max-width: 1100px) {\n  .main .hero__section .hero .image__block .block {\n    min-width: 80%;\n    margin-left: auto;\n  }\n}\n@media (max-width: 989px) {\n  .main .hero__section .hero .image__block .block {\n    width: auto;\n    margin-left: auto;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n  }\n}\n@media (max-width: 425px) {\n  .main .hero__section .hero .image__block .block {\n    width: auto;\n    margin-left: auto;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    height: 163px;\n    border-radius: 0;\n  }\n}\n.main .hero__section .hero .image__block .block .photo {\n  position: absolute;\n  left: 20%;\n  top: -42.7%;\n}\n@media (max-width: 989px) {\n  .main .hero__section .hero .image__block .block .photo {\n    width: 280px;\n    top: -58%;\n    max-width: 90%;\n    left: auto;\n  }\n}\n@media (max-width: 425px) {\n  .main .hero__section .hero .image__block .block .photo {\n    width: 187px;\n  }\n}\n.main .biography__section {\n  margin: 20px 0;\n  color: #edecf1;\n  font-style: normal;\n  font-weight: 400;\n  padding: 0 10px;\n}\n.main .biography__section .biography__text {\n  max-width: 700px;\n  margin: 0 auto;\n  padding: 24px 0 38px 0;\n  font-size: 15px;\n  line-height: 26px;\n  color: #ffffff;\n}\n.main .biography__section .biography__text #rangevalue {\n  color: #fcbd30;\n}\n@media (max-width: 768px) {\n  .main .biography__section .biography__text {\n    padding: 16px 0 20px 0;\n    font-size: 12px;\n  }\n}\n@media (max-width: 375px) {\n  .main .biography__section .biography__text {\n    font-size: 10px;\n    line-height: 18px;\n  }\n}\n.main .biography__section .range {\n  padding-bottom: 34px;\n  text-align: center;\n  /* Input Thumb */\n}\n.main .biography__section .range input,\n.main .biography__section .range output {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 1em;\n  font-family: Arial, sans-serif;\n}\n.main .biography__section .range output {\n  background: #151c2c;\n  padding: 5px 16px;\n  border-radius: 3px;\n  color: #fff;\n}\n.main .biography__section .range input[type=range] {\n  -webkit-appearance: none;\n  width: 100%;\n  max-width: 448px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 10px;\n  background-image: linear-gradient(#8541fa, #8541fa);\n  background-size: 45% 100%;\n  background-repeat: no-repeat;\n  align-items: center;\n}\n.main .biography__section .range input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #8541fa;\n  border: 2px solid #ffffff;\n  cursor: ew-resize;\n}\n.main .skills__section {\n  padding-bottom: 32px;\n}\n@media (max-width: 425px) {\n  .main .skills__section {\n    padding-bottom: 14px;\n  }\n}\n.main .skills__section .skills {\n  padding: 24px 0 38px 0;\n  max-width: 513px;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n@media (max-width: 425px) {\n  .main .skills__section .skills {\n    flex-direction: column;\n    padding: 10px 10px 14px 10px;\n    gap: 4px;\n  }\n}\n.main .skills__section .skills__item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #2c314f;\n  border-radius: 12px;\n  width: 161px;\n  height: 40px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 20px;\n  color: rgba(198, 199, 201, 0.5);\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.main .skills__section .skills__item:hover {\n  background: #a068ff;\n  box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.3);\n  border-radius: 12px;\n  color: #edecf1;\n}\n.main .skills__section .skills__item:active {\n  background: #8541fa;\n}\n@media (max-width: 425px) {\n  .main .skills__section .skills__item {\n    flex-direction: column;\n    padding: 10px 10px 14px 10px;\n    width: 100%;\n    height: 32px;\n  }\n}\n.main .skills__section .skills .skills__item--active {\n  box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.3);\n  border-radius: 12px;\n  color: #edecf1;\n  background: #8541fa;\n}\n.main .skills__section .cards {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  overflow: hidden;\n  max-width: 490px;\n  gap: 20px;\n  color: #ffffff;\n}\n@media (max-width: 768px) {\n  .main .skills__section .cards {\n    overflow: scroll;\n    height: 320px;\n  }\n}\n@media (max-width: 425px) {\n  .main .skills__section .cards {\n    overflow: scroll;\n    gap: 11px;\n    height: 271px;\n  }\n}\n.main .skills__section .cards__item {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: center;\n  border: 2px solid #2c314f;\n  border-radius: 12px;\n  width: 150px;\n  height: 150px;\n}\n@media (max-width: 425px) {\n  .main .skills__section .cards__item {\n    max-width: 130px;\n    max-height: 130px;\n  }\n}\n.main .skills__section .cards__item img {\n  width: 91px;\n  height: 91px;\n}\n.main .skills__section .cards__item p {\n  width: 80px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 15px;\n  text-transform: uppercase;\n}\n.main .skills__section .cards__item---hide {\n  display: none;\n}\n.main .skills__section .cards__item---show {\n  animation: animate 0.4s ease;\n}\n@keyframes animate {\n  0% {\n    transform: scale(0.5);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.main .works__section {\n  margin-top: 20px;\n}\n.main .education__section {\n  margin-top: 20px;\n}\n.main .education__section .education__container {\n  margin: 0 auto;\n  max-width: 590px;\n}\n@media (max-width: 768px) {\n  .main .education__section .education__container {\n    max-width: 100%;\n    padding-bottom: 14px;\n  }\n}\n.main .education__section .education__container .subheader {\n  padding-bottom: 10px;\n}\n.main .education__section .education__container .educations .education__card {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 30px;\n}\n@media (max-width: 768px) {\n  .main .education__section .education__container .educations .education__card {\n    flex-direction: column;\n    padding: 5px 10px;\n  }\n}\n.main .education__section .education__container .educations .education__card--text {\n  flex: 1;\n}\n.main .education__section .education__container .educations .education__card--text .text__subheader {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n  color: #edecf1;\n}\n.main .education__section .education__container .educations .education__card--text .text__info {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 21px;\n  color: #c6c7c9;\n  padding-top: 12px;\n}\n.main .education__section .education__container .educations .education__card--line {\n  display: block;\n  border-radius: 12px;\n  border: 1.4px rgba(198, 199, 201, 0.5) solid;\n  height: auto;\n  margin: 0 20px;\n}\n@media (max-width: 768px) {\n  .main .education__section .education__container .educations .education__card--line {\n    margin: 8px 0;\n  }\n}\n.main .education__section .education__container .educations .education__card--years {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  font-weight: 700;\n  font-size: 50px;\n  line-height: 68px;\n  color: rgba(255, 255, 255, 0.05);\n}\n@media (max-width: 768px) {\n  .main .education__section .education__container .educations .education__card--years {\n    display: block;\n    font-weight: 700;\n    font-size: 25px;\n    line-height: 34px;\n    text-align: right;\n    color: rgba(255, 255, 255, 0.25);\n  }\n}\n@media (max-width: 768px) {\n  .main .education__section .education__container .educations .education__card--reverse {\n    flex-direction: column-reverse;\n    padding-top: 0px;\n    padding-bottom: 0;\n  }\n}\n.main .footer__section {\n  margin: 20px 0;\n}\n.main .footer__section .footer__icons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  padding: 32px 0;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .main .footer__section .footer__icons {\n    padding: 22px 10px 14px 10px;\n  }\n}\n.main .footer__section .footer__icons--item {\n  transition: all 0.3s ease-in-out;\n  width: 74px;\n  height: 74px;\n  background: #2c314f;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  opacity: 0.5;\n}\n.main .footer__section .footer__icons :hover {\n  opacity: 1;\n}\n@media (max-width: 768px) {\n  .main .hero__section,\n  .main .biography__section,\n  .main .skills__section,\n  .main .works__section,\n  .main .education__section,\n  .main .footer__section {\n    border-radius: 12px 0px 0px 12px;\n  }\n}\n@media (max-width: 425px) {\n  .main .hero__section,\n  .main .biography__section,\n  .main .skills__section,\n  .main .works__section,\n  .main .education__section,\n  .main .footer__section {\n    margin: 0 0 5px 0;\n  }\n}\n\ndatalist {\n  display: flex;\n  width: 100%;\n  max-width: 448px;\n  align-items: center;\n  margin: 0 auto;\n  justify-content: space-between;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #C6C7C9;\n}\ndatalist .current {\n  color: #fcbd30;\n}\n\n.light {\n  /*       { sidebar }      */\n  /*      { Main }        */\n}\n.light section,\n.light .sidebar .section__sidebar {\n  background: #edecf1;\n  color: #2c314f;\n}\n.light .subheader {\n  color: #2c314f;\n}\n.light .sidebar .section__sidebar .menu .active {\n  color: #8541fa;\n  fill: #8541fa;\n}\n.light .sidebar .section__sidebar .menu__item--link {\n  color: #2c314f;\n}\n.light .sidebar .section__sidebar .menu__item--link svg {\n  width: 20px;\n  height: 20px;\n}\n.light .sidebar .section__sidebar .menu__item--link svg path {\n  fill: #2c314f;\n}\n.light .sidebar .section__sidebar .menu__item :hover {\n  color: #8541fa;\n}\n.light .sidebar .section__sidebar .menu__item :hover svg path {\n  fill: #8541fa;\n}\n.light .main {\n  /*      { hero__section }        */\n  /*      { biography__section }        */\n  /*       { skills__section }      */\n  /*       { works__section }      */\n  /*       { education__section }      */\n  /*       { footer__section }      */\n}\n.light .main .hero__section .hero .about {\n  color: #2c314f;\n}\n.light .main .hero__section .hero .icons :hover svg .github__item,\n.light .main .hero__section .hero .icons :hover svg .linkedin__item,\n.light .main .hero__section .hero .icons :hover svg .instagram__item,\n.light .main .hero__section .hero .icons :hover svg .youtube__icon {\n  fill: #8541fa;\n  transition: all 0.2s ease-in-out;\n}\n.light .main .biography__section {\n  color: #2c314f;\n}\n.light .main .biography__section .biography__text {\n  color: #2c314f;\n}\n.light .main .skills__section .skills__item {\n  background: #c6c7c9;\n  color: rgba(44, 49, 79, 0.5);\n}\n.light .main .skills__section .skills__item:hover {\n  background: #a068ff;\n  box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.3);\n  color: #edecf1;\n}\n.light .main .skills__section .skills__item:active {\n  background: #8541fa;\n}\n.light .main .skills__section .skills__item--active {\n  background: #8541fa;\n  color: #EDECF1;\n}\n.light .main .skills__section .cards__item {\n  border: 2px solid #c6c7c9;\n  color: #2c314f;\n}\n.light .main .education__section .education__container .educations .education__card--text .text__subheader {\n  color: #2c314f;\n}\n.light .main .education__section .education__container .educations .education__card--text .text__info {\n  color: #2c314f;\n}\n.light .main .education__section .education__container .educations .education__card--line {\n  border: 1.4px rgba(44, 49, 79, 0.5) solid;\n}\n.light .main .education__section .education__container .educations .education__card--years {\n  color: rgba(44, 49, 79, 0.05);\n}\n.light .main .footer__section .footer__icons--item {\n  background: #2c314f;\n}\n.light path.youtube__white {\n  fill: #edecf1;\n}\n.light path.github__item,\n.light path.linkedin__item,\n.light path.instagram__item,\n.light path.youtube__icon {\n  fill: #2c314f;\n}\n\n.popup {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 500px;\n  max-height: 300px;\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgb(155, 154, 154);\n  padding: 25px;\n  text-align: center;\n  background: rgb(245, 240, 240);\n  border-radius: 20px;\n  z-index: 9999;\n}\n.popup span {\n  display: inline-flex;\n  width: 20px;\n  height: 20px;\n  justify-content: center;\n  text-align: center;\n  border-radius: 50%;\n  background: rgb(36, 34, 34);\n  color: #c6c7c9;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.popup span:hover {\n  background: #c6c7c9;\n  color: rgb(214, 6, 6);\n}","* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  background: $back;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.container {\r\n  max-width: 1360px;\r\n  width: 100%;\r\n  padding: 0 20px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n\r\n  @media (max-width: 1024px) {\r\n    padding: 0px 10px 0px 24px;\r\n  }\r\n\r\n  @media (max-width: 768px) {\r\n    padding: 0;\r\n  }\r\n}\r\n\r\nsection {\r\n  background-color: $bg;\r\n  border-radius: 12px;\r\n\r\n  @media (max-width: 768px) {\r\n    border-radius: 0;\r\n  }\r\n}\r\n\r\n.subheader {\r\n  text-align: center;\r\n  padding-top: 34px;\r\n  font-size: 17px;\r\n  line-height: 23px;\r\n  color: #edecf1;\r\n\r\n  span {\r\n    color: $orange;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  @media (max-width: 768px) {\r\n    padding-top: 14px;\r\n    font-size: 13px;\r\n    line-height: 18px;\r\n  }\r\n}\r\n\r\n/*       { sidebar }      */\r\n.sidebar {\r\n  position: relative;\r\n  width: 300px;\r\n  margin: 20px 20px 0 0;\r\n  border-radius: 12px;\r\n\r\n  // transition: all 0.5s ease-in-out;\r\n  @media (max-width: 1024px) {\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-right: 10px;\r\n    width: 70px;\r\n\r\n    p {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  @media (max-width: 768px) {\r\n    margin: 0 5px 0 0;\r\n  }\r\n\r\n  .section__sidebar {\r\n    position: sticky;\r\n    top: 20px;\r\n    background: $bg;\r\n    padding: 34px 0 32px 0;\r\n    max-height: 650px;\r\n\r\n    @media (max-width: 1024px) {\r\n      padding: 24px 0 32px 0;\r\n      width: 70px;\r\n    }\r\n\r\n    @media (max-width: 768px) {\r\n      top: 0px;\r\n      border-top-right-radius: 12px;\r\n      border-bottom-right-radius: 12px;\r\n      width: 60px;\r\n    }\r\n\r\n    .menu {\r\n      &__item {\r\n        padding-bottom: 28px;\r\n\r\n        .active {\r\n          color: $activeIcon;\r\n          fill: $activeIcon;\r\n        }\r\n\r\n\r\n\r\n        &--link {\r\n          display: flex;\r\n          color: $gray;\r\n          align-items: center;\r\n          padding-left: 32px;\r\n\r\n          @media (max-width: 1024px) {\r\n            padding-left: 0px;\r\n            justify-content: center;\r\n          }\r\n\r\n          svg {\r\n            width: 20px;\r\n            height: 20px;\r\n\r\n            path {\r\n              fill: $gray;\r\n              transition: all 0.3s ease-in-out;\r\n            }\r\n          }\r\n\r\n          p {\r\n            padding-left: 20px;\r\n            transition: all 0.3s ease-in-out;\r\n          }\r\n        }\r\n\r\n\r\n      }\r\n\r\n      &__item :hover {\r\n        color: $activeIcon;\r\n\r\n        svg {\r\n          path {\r\n            fill: $activeIcon;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .daynight {\r\n      display: flex;\r\n      color: $gray;\r\n      justify-content: center;\r\n      margin-top: 322px;\r\n\r\n      p {\r\n        padding: 0 14px;\r\n      }\r\n\r\n      #checkbox {\r\n        display: none;\r\n        background-color: #0c0a15;\r\n      }\r\n\r\n      .toggle {\r\n        display: flex;\r\n        justify-content: space-around;\r\n        height: 20px;\r\n        width: 43px;\r\n        background-color: #0c0a15;\r\n        border-radius: 9999px;\r\n        // background-image: url();\r\n        background-size: cover;\r\n        position: relative;\r\n        cursor: pointer;\r\n        transition: all 0.5s ease-in-out;\r\n      }\r\n\r\n\r\n      .toggle::before {\r\n        content: \"\";\r\n        height: 14px;\r\n        width: 14px;\r\n        position: absolute;\r\n        top: 3px;\r\n        right: 10%;\r\n        border-radius: 50%;\r\n        background-color: $activeIcon;\r\n        transition: all 0.5s ease-in-out;\r\n      }\r\n\r\n      #checkbox:checked+.toggle::before {\r\n        position: absolute;\r\n        right: calc(100% - 38%);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/*      { Main }        */\r\n.main {\r\n  width: 100%;\r\n  max-width: 1000px;\r\n  padding-top: 20px;\r\n\r\n  @media (max-width: 768px) {\r\n    padding-top: 0px;\r\n  }\r\n\r\n  /*      { hero__section }        */\r\n  .hero__section {\r\n    padding: 0 40px 88px 40px;\r\n    max-height: 429px;\r\n\r\n    @media (max-width: 989px) {\r\n      padding: 0 0 18px 0;\r\n      max-height: 100%;\r\n    }\r\n\r\n    .icons {\r\n      display: flex;\r\n      justify-content: flex-end;\r\n      gap: 19px;\r\n      padding-top: 34px;\r\n      padding-bottom: 38px;\r\n\r\n      @media (max-width: 989px) {\r\n        justify-content: center;\r\n        gap: 19px;\r\n        padding: 20px 0;\r\n      }\r\n\r\n      &__item {\r\n        display: flex;\r\n        width: 16px;\r\n        height: 16px;\r\n        border-radius: 50%;\r\n        align-items: center;\r\n        justify-content: center;\r\n        cursor: pointer;\r\n        z-index: 99999;\r\n      }\r\n\r\n      & :hover {\r\n        svg {\r\n\r\n          .github__item,\r\n          .linkedin__item,\r\n          .instagram__item,\r\n          .youtube__icon {\r\n            fill: $activeIcon;\r\n            transition: all 0.2s ease-in-out;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .hero {\r\n      display: flex;\r\n      justify-content: space-between;\r\n\r\n      @media (max-width: 989px) {\r\n        flex-direction: column;\r\n        align-items: center;\r\n      }\r\n\r\n      .about {\r\n        font-style: normal;\r\n        color: #edecf1;\r\n\r\n        @media (max-width: 989px) {\r\n          text-align: center;\r\n        }\r\n\r\n        &__hi {\r\n          font-weight: 400;\r\n          font-size: 20px;\r\n          line-height: 27px;\r\n\r\n          @media (max-width: 425px) {\r\n            font-size: 14px;\r\n            line-height: 19px;\r\n          }\r\n        }\r\n\r\n        &__title {\r\n          color: $orange;\r\n          font-weight: 700;\r\n          font-size: 40px;\r\n          line-height: 54px;\r\n          padding-top: 1px;\r\n\r\n          @media (max-width: 425px) {\r\n            font-style: normal;\r\n            font-weight: 700;\r\n            font-size: 24px;\r\n            line-height: 33px;\r\n          }\r\n        }\r\n\r\n        &__exp {\r\n          font-weight: 600;\r\n          font-size: 24px;\r\n          line-height: 33px;\r\n          padding-top: 9px;\r\n\r\n          @media (max-width: 425px) {\r\n            font-weight: 600;\r\n            font-size: 15px;\r\n            line-height: 20px;\r\n          }\r\n        }\r\n\r\n        &__btn {\r\n          margin-top: 27px;\r\n          outline: none;\r\n          border: none;\r\n          font-weight: 600;\r\n          font-size: 13px;\r\n          line-height: 18px;\r\n          color: $text;\r\n          padding: 7px 23px;\r\n          background: #8541fa;\r\n          box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.3);\r\n          border-radius: 12px;\r\n          cursor: pointer;\r\n          transition: all 0.3s ease-in-out;\r\n\r\n          &:hover {\r\n            background: #a068ff;\r\n          }\r\n\r\n          &:active {\r\n            background: $activeIcon;\r\n          }\r\n        }\r\n      }\r\n\r\n      .image__block {\r\n        margin-left: auto;\r\n\r\n        @media (max-width: 1100px) {\r\n          max-width: 100%;\r\n        }\r\n\r\n        @media (max-width: 989px) {\r\n          margin-top: 32px;\r\n          text-align: center;\r\n          justify-content: center;\r\n          align-items: center;\r\n          width: -webkit-fill-available;\r\n        }\r\n\r\n        .block {\r\n          position: relative;\r\n          background: $orange;\r\n          width: 460px;\r\n          height: 253px;\r\n          border-radius: 12px;\r\n\r\n          @media (max-width: 1100px) {\r\n            min-width: 80%;\r\n            margin-left: auto;\r\n          }\r\n\r\n          @media (max-width: 989px) {\r\n            width: auto;\r\n            margin-left: auto;\r\n            justify-content: center;\r\n            align-items: center;\r\n            display: flex;\r\n          }\r\n\r\n          @media (max-width: 425px) {\r\n            width: auto;\r\n            margin-left: auto;\r\n            justify-content: center;\r\n            align-items: center;\r\n            display: flex;\r\n            height: 163px;\r\n            border-radius: 0;\r\n          }\r\n\r\n          .photo {\r\n            position: absolute;\r\n            left: 20%;\r\n            top: -42.7%;\r\n\r\n            @media (max-width: 989px) {\r\n              width: 280px;\r\n              top: -58%;\r\n              max-width: 90%;\r\n              left: auto;\r\n            }\r\n\r\n            @media (max-width: 425px) {\r\n              width: 187px;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /*      { biography__section }        */\r\n  .biography__section {\r\n    margin: 20px 0;\r\n    color: #edecf1;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    padding: 0 10px;\r\n\r\n    .biography__text {\r\n      max-width: 700px;\r\n      margin: 0 auto;\r\n      padding: 24px 0 38px 0;\r\n      font-size: 15px;\r\n      line-height: 26px;\r\n      color: $text;\r\n\r\n      #rangevalue {\r\n        color: #fcbd30;\r\n      }\r\n\r\n      @media (max-width: 768px) {\r\n        padding: 16px 0 20px 0;\r\n        font-size: 12px;\r\n      }\r\n\r\n      @media (max-width: 375px) {\r\n        font-size: 10px;\r\n        line-height: 18px;\r\n      }\r\n    }\r\n\r\n    .range {\r\n      padding-bottom: 34px;\r\n      text-align: center;\r\n\r\n      input,\r\n      output {\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n        font-size: 1em;\r\n        font-family: Arial, sans-serif;\r\n      }\r\n\r\n      output {\r\n        background: $bg;\r\n        padding: 5px 16px;\r\n        border-radius: 3px;\r\n        color: #fff;\r\n      }\r\n\r\n      input[type=\"range\"] {\r\n        -webkit-appearance: none;\r\n        width: 100%;\r\n        max-width: 448px;\r\n        height: 4px;\r\n        background: rgba(255, 255, 255, 0.6);\r\n        border-radius: 10px;\r\n        background-image: linear-gradient($activeIcon, $activeIcon);\r\n        background-size: 45% 100%;\r\n        background-repeat: no-repeat;\r\n        align-items: center;\r\n      }\r\n\r\n      /* Input Thumb */\r\n      input[type=\"range\"]::-webkit-slider-thumb {\r\n        -webkit-appearance: none;\r\n        height: 14px;\r\n        width: 14px;\r\n        border-radius: 50%;\r\n        background: $activeIcon;\r\n        border: 2px solid #ffffff;\r\n        cursor: ew-resize;\r\n      }\r\n    }\r\n  }\r\n\r\n  /*       { skills__section }      */\r\n  .skills__section {\r\n    padding-bottom: 32px;\r\n\r\n    @media (max-width: 425px) {\r\n      padding-bottom: 14px;\r\n    }\r\n\r\n    .skills {\r\n      padding: 24px 0 38px 0;\r\n      max-width: 513px;\r\n      display: flex;\r\n      justify-content: center;\r\n      margin: 0 auto;\r\n      flex-wrap: wrap;\r\n      gap: 15px;\r\n\r\n      @media (max-width: 425px) {\r\n        flex-direction: column;\r\n        padding: 10px 10px 14px 10px;\r\n        gap: 4px;\r\n      }\r\n\r\n      &__item {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background: #2c314f;\r\n        border-radius: 12px;\r\n        width: 161px;\r\n        height: 40px;\r\n        font-style: normal;\r\n        font-weight: 600;\r\n        font-size: 15px;\r\n        line-height: 20px;\r\n        color: rgba(198, 199, 201, 0.5);\r\n        cursor: pointer;\r\n        transition: all 0.3s ease-in-out;\r\n\r\n        &:hover {\r\n          background: #a068ff;\r\n          box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.3);\r\n          border-radius: 12px;\r\n          color: #edecf1;\r\n        }\r\n\r\n        &:active {\r\n          background: $activeIcon;\r\n        }\r\n\r\n        @media (max-width: 425px) {\r\n          flex-direction: column;\r\n          padding: 10px 10px 14px 10px;\r\n          width: 100%;\r\n          height: 32px;\r\n        }\r\n      }\r\n\r\n      .skills__item--active {\r\n        box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.3);\r\n        border-radius: 12px;\r\n        color: #edecf1;\r\n        background: $activeIcon;\r\n      }\r\n    }\r\n\r\n    .cards {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      flex-wrap: wrap;\r\n      margin: 0 auto;\r\n      overflow: hidden;\r\n      max-width: 490px;\r\n\r\n      gap: 20px;\r\n      color: $text;\r\n\r\n      @media (max-width: 768px) {\r\n        overflow: scroll;\r\n        height: 320px;\r\n      }\r\n\r\n      @media (max-width: 425px) {\r\n        overflow: scroll;\r\n        gap: 11px;\r\n        height: 271px;\r\n      }\r\n\r\n      &__item {\r\n        display: flex;\r\n        align-items: center;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        border: 2px solid #2c314f;\r\n        border-radius: 12px;\r\n        width: 150px;\r\n        height: 150px;\r\n\r\n        @media (max-width: 425px) {\r\n          max-width: 130px;\r\n          max-height: 130px;\r\n        }\r\n\r\n        img {\r\n          width: 91px;\r\n          height: 91px;\r\n        }\r\n\r\n        p {\r\n          width: 80px;\r\n          text-align: center;\r\n          font-weight: 600;\r\n          font-size: 11px;\r\n          line-height: 15px;\r\n          text-transform: uppercase;\r\n        }\r\n      }\r\n    }\r\n\r\n    .cards__item---hide {\r\n      display: none;\r\n    }\r\n\r\n    .cards__item---show {\r\n      animation: animate 0.4s ease;\r\n\r\n      @keyframes animate {\r\n        0% {\r\n          transform: scale(0.5);\r\n        }\r\n\r\n        100% {\r\n          transform: scale(1);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n\r\n  /*       { works__section }      */\r\n  .works__section {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  /*       { education__section }      */\r\n  .education__section {\r\n    margin-top: 20px;\r\n\r\n    .education__container {\r\n      margin: 0 auto;\r\n      max-width: 590px;\r\n\r\n      @media (max-width: 768px) {\r\n        max-width: 100%;\r\n        padding-bottom: 14px;\r\n      }\r\n\r\n      .subheader {\r\n        padding-bottom: 10px;\r\n      }\r\n\r\n      .educations {\r\n        .education__card {\r\n          display: flex;\r\n          justify-content: space-between;\r\n          padding-bottom: 30px;\r\n\r\n          @media (max-width: 768px) {\r\n            flex-direction: column;\r\n            padding: 5px 10px;\r\n          }\r\n\r\n          &--text {\r\n            flex: 1;\r\n\r\n            .text__subheader {\r\n              font-weight: 700;\r\n              font-size: 16px;\r\n              line-height: 22px;\r\n              color: #edecf1;\r\n            }\r\n\r\n            .text__info {\r\n              font-weight: 400;\r\n              font-size: 13px;\r\n              line-height: 21px;\r\n              color: $gray;\r\n              padding-top: 12px;\r\n            }\r\n          }\r\n\r\n          &--line {\r\n            display: block;\r\n            border-radius: 12px;\r\n            border: 1.4px rgba(198, 199, 201, 0.5) solid;\r\n            height: auto;\r\n            margin: 0 20px;\r\n\r\n            @media (max-width: 768px) {\r\n              margin: 8px 0;\r\n            }\r\n          }\r\n\r\n          &--years {\r\n            flex: 1;\r\n            display: flex;\r\n            align-items: center;\r\n            font-weight: 700;\r\n            font-size: 50px;\r\n            line-height: 68px;\r\n            color: rgba(255, 255, 255, 0.05);\r\n\r\n            @media (max-width: 768px) {\r\n              display: block;\r\n              font-weight: 700;\r\n              font-size: 25px;\r\n              line-height: 34px;\r\n              text-align: right;\r\n              color: rgba(255, 255, 255, 0.25);\r\n            }\r\n          }\r\n        }\r\n\r\n        .education__card--reverse {\r\n          @media (max-width: 768px) {\r\n            flex-direction: column-reverse;\r\n            padding-top: 0px;\r\n            padding-bottom: 0;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /*       { footer__section }      */\r\n  .footer__section {\r\n    margin: 20px 0;\r\n\r\n    .footer__icons {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      gap: 20px;\r\n      padding: 32px 0;\r\n      flex-wrap: wrap;\r\n\r\n      @media (max-width: 768px) {\r\n        padding: 22px 10px 14px 10px;\r\n      }\r\n\r\n      &--item {\r\n        transition: all 0.3s ease-in-out;\r\n        width: 74px;\r\n        height: 74px;\r\n        background: #2c314f;\r\n        border-radius: 50%;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        cursor: pointer;\r\n        opacity: 0.5;\r\n      }\r\n\r\n      :hover {\r\n        opacity: 1;\r\n      }\r\n    }\r\n  }\r\n\r\n  .hero__section,\r\n  .biography__section,\r\n  .skills__section,\r\n  .works__section,\r\n  .education__section,\r\n  .footer__section {\r\n    @media (max-width: 768px) {\r\n      border-radius: 12px 0px 0px 12px;\r\n    }\r\n\r\n    @media (max-width: 425px) {\r\n      margin: 0 0 5px 0;\r\n    }\r\n  }\r\n}\r\n\r\ndatalist {\r\n  display: flex;\r\n  width: 100%;\r\n  max-width: 448px;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  justify-content: space-between;\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  color: #C6C7C9;\r\n\r\n  .current {\r\n    color: $orange;\r\n  }\r\n}\r\n\r\n.light {\r\n\r\n  section,\r\n  .sidebar .section__sidebar {\r\n    background: $lightbg;\r\n    color: $darktext;\r\n  }\r\n\r\n  .subheader {\r\n    color: $darktext;\r\n  }\r\n\r\n  /*       { sidebar }      */\r\n  .sidebar {\r\n    .section__sidebar {\r\n      .menu {\r\n        .active {\r\n          color: $activeIcon;\r\n          fill: $activeIcon;\r\n        }\r\n\r\n        &__item {\r\n          &--link {\r\n            color: $darktext;\r\n\r\n            svg {\r\n              width: 20px;\r\n              height: 20px;\r\n\r\n              path {\r\n                fill: $darktext;\r\n              }\r\n            }\r\n          }\r\n\r\n          & :hover {\r\n            color: $activeIcon;\r\n\r\n            svg {\r\n              path {\r\n                fill: $activeIcon;\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n\r\n  }\r\n\r\n  /*      { Main }        */\r\n  .main {\r\n\r\n    /*      { hero__section }        */\r\n    .hero__section {\r\n      .hero {\r\n        .about {\r\n          color: $darktext;\r\n        }\r\n\r\n        .icons {\r\n          & :hover {\r\n            svg {\r\n\r\n              .github__item,\r\n              .linkedin__item,\r\n              .instagram__item,\r\n              .youtube__icon {\r\n                fill: $activeIcon;\r\n                transition: all 0.2s ease-in-out;\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n    }\r\n\r\n    /*      { biography__section }        */\r\n    .biography__section {\r\n      color: $darktext;\r\n\r\n      .biography__text {\r\n        color: $darktext;\r\n      }\r\n    }\r\n\r\n    /*       { skills__section }      */\r\n    .skills__section {\r\n      .skills {\r\n        &__item {\r\n          background: $gray;\r\n          color: rgba(44, 49, 79, 0.5);\r\n\r\n          &:hover {\r\n            background: #a068ff;\r\n            box-shadow: 0px 0px 25px rgba(133, 65, 250, 0.3);\r\n            color: #edecf1;\r\n          }\r\n\r\n          &:active {\r\n            background: $activeIcon;\r\n          }\r\n\r\n          &--active {\r\n            background: $activeIcon;\r\n            color: #EDECF1;\r\n          }\r\n        }\r\n      }\r\n\r\n      .cards__item {\r\n        border: 2px solid $gray;\r\n        color: $darktext;\r\n      }\r\n    }\r\n\r\n    /*       { works__section }      */\r\n\r\n    /*       { education__section }      */\r\n    .education__section {\r\n      .education__container {\r\n        .educations {\r\n          .education__card {\r\n            &--text {\r\n              .text__subheader {\r\n                color: $darktext;\r\n              }\r\n\r\n              .text__info {\r\n                color: $darktext;\r\n              }\r\n            }\r\n\r\n            &--line {\r\n              border: 1.4px rgba(44, 49, 79, 0.5) solid;\r\n            }\r\n\r\n            &--years {\r\n              color: rgba(44, 49, 79, 0.05);\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    /*       { footer__section }      */\r\n    .footer__section {\r\n      .footer__icons {\r\n        &--item {\r\n          background: #2c314f;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  path.youtube__white {\r\n    fill: $lightbg;\r\n  }\r\n\r\n  path.github__item,\r\n  path.linkedin__item,\r\n  path.instagram__item,\r\n  path.youtube__icon {\r\n    fill: $darktext;\r\n  }\r\n}","$back: #10141d;\r\n$bg: #151c2c;\r\n$text: #ffffff;\r\n$gray: #c6c7c9;\r\n$orange: #fcbd30;\r\n$activeIcon: #8541fa;\r\n$lightbg: #edecf1;\r\n$darktext: #2c314f;",".popup {\r\n    display: none;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    max-width: 500px;\r\n    max-height: 300px;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 1px solid rgb(155, 154, 154);\r\n    padding: 25px;\r\n    text-align: center;\r\n    background: rgb(245, 240, 240);\r\n    border-radius: 20px;\r\n    z-index: 9999;\r\n\r\n    span {\r\n        display: inline-flex;\r\n        width: 20px;\r\n        height: 20px;\r\n        justify-content: center;\r\n        text-align: center;\r\n        border-radius: 50%;\r\n        background: rgb(36, 34, 34);\r\n        color: $gray;\r\n        cursor: pointer;\r\n        transition: all 0.3s ease-in-out;\r\n\r\n        &:hover {\r\n\r\n            background: $gray;\r\n            color: rgb(214, 6, 6);\r\n        }\r\n    }\r\n}",null,"@import \"~normalize.css\";\r\n@import url(https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css);\r\n@import \"style/swiper\";\r\n@import \"style/fonts\";\r\n@import \"style/var\";\r\n@import \"style/style\";\r\n@import \"style/popup\";"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo.png */ "./src/img/photo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/typesript.png */ "./src/img/typesript.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/javascript.png */ "./src/img/javascript.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/nodejs.png */ "./src/img/nodejs.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/python.png */ "./src/img/python.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/html.png */ "./src/img/html.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/gulp.png */ "./src/img/gulp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/webpack.png */ "./src/img/webpack.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/jest.jfif */ "./src/img/jest.jfif"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/react.png */ "./src/img/react.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var code = "<!DOCTYPE html>\r\n<html lang=\"eng\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Portfolio website</title>\r\n  </head>\r\n  <body>\r\n    <div class=\"container\">\r\n      <nav class=\"sidebar\">\r\n        <section class=\"section section__sidebar\">\r\n          <ul class=\"menu\">\r\n            <li class=\"menu__item\">\r\n              <a class=\"menu__item--link\" href=\"#biography\">\r\n                <svg\r\n                  width=\"20\"\r\n                  height=\"20\"\r\n                  viewBox=\"0 0 20 20\"\r\n                  fill=\"none\"\r\n                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                >\r\n                  <path\r\n                    class=\"active\"\r\n                    d=\"M8.20705 12.9582C9.40677 12.8615 10.612 12.8615 11.8117 12.9582C12.4651 12.9963 13.1153 13.078 13.7583 13.2029C15.1497 13.4846 16.0581 13.9443 16.4474 14.6857C16.7398 15.2643 16.7398 15.9531 16.4474 16.5317C16.0581 17.2731 15.1857 17.7625 13.7439 18.0145C13.1014 18.1441 12.451 18.2283 11.7973 18.2666C11.1917 18.3333 10.5861 18.3333 9.97335 18.3333H8.87031C8.63961 18.3037 8.41612 18.2889 8.19984 18.2889C7.54614 18.2552 6.89563 18.1735 6.25331 18.0442C4.8619 17.7773 3.95351 17.3028 3.56421 16.5614C3.41392 16.2742 3.33469 15.9534 3.33342 15.6272C3.33037 15.2991 3.40721 14.9754 3.557 14.6857C3.9391 13.9443 4.84748 13.4623 6.25331 13.2029C6.89846 13.0762 7.55119 12.9945 8.20705 12.9582ZM10.0022 1.66667C12.419 1.66667 14.3783 3.68152 14.3783 6.16697C14.3783 8.65241 12.419 10.6673 10.0022 10.6673C7.58533 10.6673 5.62609 8.65241 5.62609 6.16697C5.62609 3.68152 7.58533 1.66667 10.0022 1.66667Z\"\r\n                    fill=\"#8541FA\"\r\n                  />\r\n                </svg>\r\n                <p class=\"active\">Biography</p>\r\n              </a>\r\n            </li>\r\n            <li class=\"menu__item\">\r\n              <a class=\"menu__item--link\" href=\"#skills\"\r\n                ><svg\r\n                  width=\"20\"\r\n                  height=\"20\"\r\n                  viewBox=\"0 0 20 20\"\r\n                  fill=\"none\"\r\n                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                >\r\n                  <path\r\n                    d=\"M13.8912 1.66701C16.7253 1.66701 18.3253 3.27451 18.3337 6.10867V13.892C18.3337 16.7253 16.7253 18.3337 13.8912 18.3337H6.10867C3.27451 18.3337 1.66701 16.7253 1.66701 13.892V6.10867C1.66701 3.27451 3.27451 1.66701 6.10867 1.66701H13.8912ZM10.417 5.10867C10.1828 4.96701 9.89951 4.96701 9.67534 5.10867C9.44951 5.24951 9.32534 5.50867 9.34951 5.76701V14.2587C9.39201 14.617 9.69117 14.8837 10.0412 14.8837C10.4003 14.8837 10.6995 14.617 10.7328 14.2587V5.76701C10.7662 5.50867 10.642 5.24951 10.417 5.10867ZM6.52534 7.84201C6.30034 7.70034 6.01617 7.70034 5.79201 7.84201C5.56617 7.98367 5.44201 8.24117 5.46701 8.50034V14.2587C5.49951 14.617 5.79951 14.8837 6.15784 14.8837C6.51701 14.8837 6.81617 14.617 6.84951 14.2587V8.50034C6.87534 8.24117 6.74951 7.98367 6.52534 7.84201ZM14.2412 10.867C14.017 10.7253 13.7337 10.7253 13.5003 10.867C13.2745 11.0087 13.1503 11.2578 13.1837 11.5253V14.2587C13.217 14.617 13.5162 14.8837 13.8753 14.8837C14.2253 14.8837 14.5245 14.617 14.567 14.2587V11.5253C14.5912 11.2578 14.467 11.0087 14.2412 10.867Z\"\r\n                    fill=\"#C6C7C9\"\r\n                  />\r\n                </svg>\r\n                <p>Skills</p>\r\n              </a>\r\n            </li>\r\n            <li class=\"menu__item\">\r\n              <a class=\"menu__item--link\" href=\"#works\"\r\n                ><svg\r\n                  width=\"20\"\r\n                  height=\"20\"\r\n                  viewBox=\"0 0 20 20\"\r\n                  fill=\"none\"\r\n                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                >\r\n                  <path\r\n                    d=\"M5.37458 3.06508C8.67458 0.865079 13.0737 1.29925 15.8912 4.09841C17.4654 5.67425 18.3404 7.80675 18.3321 10.0317C18.3162 13.9984 15.4987 17.4067 11.6071 18.1742C7.70708 18.9409 3.80791 16.8484 2.29875 13.1742C0.782078 9.50675 2.06625 5.27341 5.37458 3.06508ZM12.9154 6.87341C12.8079 6.82341 12.6821 6.80675 12.5662 6.84841L8.44875 8.14841C8.30708 8.19008 8.19875 8.30675 8.15791 8.44841L6.84874 12.5651C6.82374 12.6484 6.82374 12.7401 6.84874 12.8234C6.88208 12.9401 6.96624 13.0401 7.07458 13.0984C7.19041 13.1651 7.31624 13.1742 7.43208 13.1401L11.5496 11.8401C11.6912 11.7984 11.7996 11.6901 11.8487 11.5484L13.1404 7.43175C13.1746 7.34091 13.1746 7.24008 13.1404 7.14841C13.1079 7.03175 13.0237 6.93175 12.9154 6.87341Z\"\r\n                    fill=\"#C6C7C9\"\r\n                  />\r\n                </svg>\r\n                <p>Works</p>\r\n              </a>\r\n            </li>\r\n            <li class=\"menu__item\">\r\n              <a class=\"menu__item--link\" href=\"#education\"\r\n                ><svg\r\n                  width=\"20\"\r\n                  height=\"20\"\r\n                  viewBox=\"0 0 20 20\"\r\n                  fill=\"none\"\r\n                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                >\r\n                  <path\r\n                    d=\"M12.5582 1.66676C14.8166 1.66676 16.6416 2.55843 16.6666 4.8251V17.4751C16.6666 17.6168 16.6332 17.7584 16.5666 17.8834C16.4582 18.0834 16.2749 18.2334 16.0499 18.3001C15.8332 18.3668 15.5916 18.3334 15.3916 18.2168L9.99155 15.5168L4.58322 18.2168C4.45905 18.2826 4.31655 18.3251 4.17489 18.3251C3.70822 18.3251 3.33322 17.9418 3.33322 17.4751V4.8251C3.33322 2.55843 5.16655 1.66676 7.41655 1.66676H12.5582ZM13.1249 6.7001H6.84989C6.49155 6.7001 6.19989 6.99176 6.19989 7.35843C6.19989 7.72426 6.49155 8.01676 6.84989 8.01676H13.1249C13.4832 8.01676 13.7749 7.72426 13.7749 7.35843C13.7749 6.99176 13.4832 6.7001 13.1249 6.7001Z\"\r\n                    fill=\"#C6C7C9\"\r\n                  />\r\n                </svg>\r\n                <p>Education</p>\r\n              </a>\r\n            </li>\r\n            <li class=\"menu__item\">\r\n              <a class=\"menu__item--link\" href=\"#contacts\"\r\n                ><svg\r\n                  width=\"20\"\r\n                  height=\"20\"\r\n                  viewBox=\"0 0 20 20\"\r\n                  fill=\"none\"\r\n                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                >\r\n                  <path\r\n                    d=\"M14.1162 2.5C15.2337 2.5 16.3087 2.94167 17.0995 3.73417C17.8912 4.525 18.3337 5.59167 18.3337 6.70833V13.2917C18.3337 15.6167 16.442 17.5 14.1162 17.5H5.88367C3.55784 17.5 1.66701 15.6167 1.66701 13.2917V6.70833C1.66701 4.38333 3.54951 2.5 5.88367 2.5H14.1162ZM15.0587 6.83333C14.8837 6.82417 14.717 6.88333 14.5912 7L10.8337 10C10.3503 10.4008 9.65784 10.4008 9.16701 10L5.41701 7C5.15784 6.80833 4.79951 6.83333 4.58367 7.05833C4.35867 7.28333 4.33367 7.64167 4.52451 7.89167L4.63367 8L8.42534 10.9583C8.89201 11.325 9.45784 11.525 10.0503 11.525C10.6412 11.525 11.217 11.325 11.6828 10.9583L15.442 7.95L15.5087 7.88333C15.7078 7.64167 15.7078 7.29167 15.4995 7.05C15.3837 6.92583 15.2245 6.85 15.0587 6.83333Z\"\r\n                    fill=\"#C6C7C9\"\r\n                  />\r\n                </svg>\r\n                <p>Contacts</p>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <div class=\"daynight\">\r\n            <p>Light</p>\r\n            <label for=\"checkbox\">\r\n              <input type=\"checkbox\" name=\"\" id=\"checkbox\" />\r\n              <div class=\"toggle\" id=\"switcher\">\r\n                <div class=\"star1\">\r\n                  <svg\r\n                    width=\"10\"\r\n                    height=\"10\"\r\n                    viewBox=\"0 0 10 10\"\r\n                    fill=\"none\"\r\n                    xmlns=\"http://www.w3.org/2000/svg\"\r\n                  >\r\n                    <g clip-path=\"url(#clip0_4_85)\">\r\n                      <path\r\n                        d=\"M9.944 6.21201C9.91052 6.18878 9.87074 6.17634 9.83 6.17634C9.78925 6.17634 9.74948 6.18878 9.716 6.21201C8.89511 6.71501 7.92872 6.92684 6.9727 6.81334C6.01667 6.69984 5.12674 6.26763 4.44645 5.5864C3.76615 4.90518 3.33514 4.01467 3.22294 3.05849C3.11074 2.10231 3.32388 1.13621 3.828 0.316009C3.85773 0.281973 3.87506 0.238871 3.87716 0.193728C3.87925 0.148585 3.866 0.104061 3.83956 0.067413C3.81312 0.0307645 3.77504 0.00415184 3.73154 -0.00808832C3.68804 -0.0203285 3.64167 -0.0174745 3.6 8.55979e-06C2.76134 0.262346 2.00453 0.736603 1.40274 1.37694C0.800956 2.01727 0.374536 2.80202 0.164704 3.65534C-0.0451283 4.50865 -0.0312758 5.40167 0.204922 6.24807C0.441121 7.09446 0.891676 7.86561 1.51304 8.48697C2.1344 9.10833 2.90554 9.55889 3.75194 9.79508C4.59834 10.0313 5.49135 10.0451 6.34467 9.8353C7.19798 9.62547 7.98274 9.19905 8.62307 8.59726C9.2634 7.99547 9.73766 7.23867 10 6.40001C10.0076 6.3665 10.0064 6.3316 9.99663 6.29867C9.98682 6.26574 9.96869 6.2359 9.944 6.21201Z\"\r\n                        fill=\"#C6C7C9\"\r\n                      />\r\n                    </g>\r\n                    <defs>\r\n                      <clipPath id=\"clip0_4_85\">\r\n                        <rect width=\"10\" height=\"10\" fill=\"white\" />\r\n                      </clipPath>\r\n                    </defs>\r\n                  </svg>\r\n                </div>\r\n                <div class=\"star2\">\r\n                  <svg\r\n                    width=\"12\"\r\n                    height=\"12\"\r\n                    viewBox=\"0 0 12 12\"\r\n                    fill=\"none\"\r\n                    xmlns=\"http://www.w3.org/2000/svg\"\r\n                  >\r\n                    <path\r\n                      d=\"M6 2.31625C5.91298 2.31625 5.82952 2.28168 5.76798 2.22014C5.70645 2.15861 5.67188 2.07515 5.67188 1.98812V1.02344C5.67188 0.936413 5.70645 0.852953 5.76798 0.791418C5.82952 0.729883 5.91298 0.695313 6 0.695312C6.08702 0.695312 6.17048 0.729883 6.23202 0.791418C6.29356 0.852953 6.32812 0.936413 6.32812 1.02344V1.98812C6.32812 2.07515 6.29356 2.15861 6.23202 2.22014C6.17048 2.28168 6.08702 2.31625 6 2.31625Z\"\r\n                      fill=\"#C6C7C9\"\r\n                    />\r\n                    <path\r\n                      d=\"M8.84375 3.49095C8.78009 3.48997 8.71806 3.47061 8.66515 3.4352C8.61223 3.39979 8.57067 3.34985 8.54548 3.29137C8.52029 3.2329 8.51253 3.16839 8.52315 3.10561C8.53376 3.04283 8.5623 2.98445 8.60531 2.93751L9.28125 2.25064C9.34333 2.18856 9.42752 2.15369 9.51531 2.15369C9.6031 2.15369 9.6873 2.18856 9.74938 2.25064C9.81145 2.31272 9.84633 2.39691 9.84633 2.4847C9.84633 2.57249 9.81145 2.65669 9.74938 2.71876L9.0625 3.3947C9.00415 3.45296 8.92612 3.4873 8.84375 3.49095Z\"\r\n                      fill=\"#C6C7C9\"\r\n                    />\r\n                    <path\r\n                      d=\"M6 2.75375C5.13922 2.75433 4.31386 3.09653 3.7052 3.7052C3.09653 4.31386 2.75433 5.13922 2.75375 6C2.9375 10.3072 9.0625 10.3072 9.24625 6C9.24567 5.13922 8.90347 4.31386 8.29481 3.7052C7.68614 3.09653 6.86078 2.75433 6 2.75375Z\"\r\n                      fill=\"#C6C7C9\"\r\n                    />\r\n                    <path\r\n                      d=\"M10.9766 5.67188H10.0119C9.92485 5.67188 9.84139 5.70645 9.77986 5.76798C9.71832 5.82952 9.68375 5.91298 9.68375 6C9.68375 6.08702 9.71832 6.17048 9.77986 6.23202C9.84139 6.29356 9.92485 6.32812 10.0119 6.32812H10.9766C11.0636 6.32812 11.147 6.29356 11.2086 6.23202C11.2701 6.17048 11.3047 6.08702 11.3047 6C11.3047 5.91298 11.2701 5.82952 11.2086 5.76798C11.147 5.70645 11.0636 5.67188 10.9766 5.67188Z\"\r\n                      fill=\"#C6C7C9\"\r\n                    />\r\n                    <path\r\n                      d=\"M9.0625 8.60531C8.9993 8.56083 8.92243 8.54008 8.84543 8.54672C8.76844 8.55336 8.69626 8.58696 8.64161 8.64161C8.58696 8.69626 8.55336 8.76844 8.54672 8.84543C8.54008 8.92243 8.56083 8.9993 8.60531 9.0625L9.28125 9.74937C9.31154 9.78005 9.34766 9.80436 9.38748 9.82089C9.42729 9.83742 9.47001 9.84583 9.51312 9.84562C9.57878 9.84626 9.64314 9.82731 9.69799 9.7912C9.75283 9.75508 9.79566 9.70344 9.82101 9.64287C9.84637 9.5823 9.8531 9.51555 9.84034 9.45114C9.82758 9.38672 9.79591 9.32758 9.74937 9.28125L9.0625 8.60531Z\"\r\n                      fill=\"#C6C7C9\"\r\n                    />\r\n                    <path\r\n                      d=\"M6 11.3047C5.91298 11.3047 5.82952 11.2701 5.76798 11.2086C5.70645 11.147 5.67188 11.0636 5.67188 10.9766V10.0119C5.67188 9.92485 5.70645 9.84139 5.76798 9.77985C5.82952 9.71832 5.91298 9.68375 6 9.68375C6.08702 9.68375 6.17048 9.71832 6.23202 9.77985C6.29356 9.84139 6.32812 9.92485 6.32812 10.0119V10.9766C6.32812 11.0636 6.29356 11.147 6.23202 11.2086C6.17048 11.2701 6.08702 11.3047 6 11.3047Z\"\r\n                      fill=\"#C6C7C9\"\r\n                    />\r\n                    <path\r\n                      d=\"M2.4825 9.84563C2.41721 9.8454 2.35346 9.82582 2.29929 9.78937C2.24513 9.75292 2.20297 9.70124 2.17816 9.64085C2.15335 9.58046 2.14699 9.51407 2.15989 9.45007C2.17279 9.38607 2.20436 9.32732 2.25063 9.28126L2.9375 8.60532C2.96504 8.56619 3.00081 8.53357 3.04229 8.50972C3.08376 8.48587 3.12996 8.47139 3.17763 8.46728C3.22529 8.46317 3.27329 8.46953 3.31824 8.48592C3.36319 8.50231 3.40401 8.52834 3.43784 8.56217C3.47167 8.596 3.49769 8.63682 3.51409 8.68177C3.53048 8.72672 3.53684 8.77471 3.53273 8.82238C3.52862 8.87005 3.51413 8.91624 3.49029 8.95772C3.46644 8.9992 3.43381 9.03497 3.39469 9.06251L2.71875 9.74938C2.68794 9.78059 2.65112 9.80521 2.61051 9.82176C2.5699 9.8383 2.52635 9.84642 2.4825 9.84563Z\"\r\n                      fill=\"#C6C7C9\"\r\n                    />\r\n                    <path\r\n                      d=\"M1.98812 6.32812H1.02344C0.936413 6.32812 0.852953 6.29356 0.791418 6.23202C0.729883 6.17048 0.695312 6.08702 0.695312 6C0.695312 5.91298 0.729883 5.82952 0.791418 5.76798C0.852953 5.70645 0.936413 5.67188 1.02344 5.67188H1.98812C2.07515 5.67188 2.15861 5.70645 2.22014 5.76798C2.28168 5.82952 2.31625 5.91298 2.31625 6C2.31625 6.08702 2.28168 6.17048 2.22014 6.23202C2.15861 6.29356 2.07515 6.32812 1.98812 6.32812Z\"\r\n                      fill=\"#C6C7C9\"\r\n                    />\r\n                    <path\r\n                      d=\"M3.15625 3.49095C3.07387 3.4873 2.99585 3.45296 2.9375 3.3947L2.25062 2.71876C2.18855 2.65669 2.15367 2.57249 2.15367 2.4847C2.15367 2.39691 2.18855 2.31272 2.25062 2.25064C2.3127 2.18856 2.3969 2.15369 2.48469 2.15369C2.57248 2.15369 2.65667 2.18856 2.71875 2.25064L3.39469 2.93751C3.4377 2.98445 3.46624 3.04283 3.47685 3.10561C3.48747 3.16839 3.47971 3.2329 3.45452 3.29137C3.42932 3.34985 3.38777 3.39979 3.33485 3.4352C3.28193 3.47061 3.21991 3.48997 3.15625 3.49095Z\"\r\n                      fill=\"#C6C7C9\"\r\n                    />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </label>\r\n            <p>Dark</p>\r\n          </div>\r\n        </section>\r\n      </nav>\r\n      <main class=\"main\">\r\n        <section id=\"biography\" class=\"section hero__section\">\r\n          <div class=\"icons\">\r\n            <a href=\"#\" class=\"icons__item\">\r\n              <svg\r\n                width=\"16\"\r\n                height=\"16\"\r\n                viewBox=\"0 0 16 16\"\r\n                fill=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n              >\r\n                <g clip-path=\"url(#clip0_5_117)\">\r\n                  <path\r\n                    class=\"github__item\"\r\n                    d=\"M8.00007 0C3.58233 0 0 3.58167 0 8.00006C0 11.5347 2.29226 14.5335 5.47093 15.5913C5.87075 15.6654 6.01754 15.4178 6.01754 15.2065C6.01754 15.0157 6.01012 14.3855 6.00667 13.717C3.78105 14.201 3.31141 12.7731 3.31141 12.7731C2.9475 11.8484 2.42315 11.6025 2.42315 11.6025C1.6973 11.106 2.47786 11.1162 2.47786 11.1162C3.28121 11.1726 3.70421 11.9406 3.70421 11.9406C4.41774 13.1637 5.57572 12.8101 6.03224 12.6057C6.10404 12.0886 6.31137 11.7357 6.54016 11.5359C4.76324 11.3336 2.8953 10.6476 2.8953 7.58223C2.8953 6.70881 3.20782 5.99515 3.71958 5.4349C3.63651 5.2334 3.36268 4.41972 3.79708 3.31777C3.79708 3.31777 4.46887 3.10276 5.99766 4.13781C6.63581 3.96055 7.32019 3.87166 8.00007 3.86861C8.67994 3.87166 9.36485 3.96055 10.0042 4.13781C11.5311 3.10276 12.202 3.31777 12.202 3.31777C12.6375 4.41972 12.3635 5.2334 12.2804 5.4349C12.7934 5.99515 13.1038 6.70881 13.1038 7.58223C13.1038 10.6549 11.2323 11.3315 9.45083 11.5295C9.73778 11.7778 9.99346 12.2647 9.99346 13.011C9.99346 14.0815 9.98419 14.943 9.98419 15.2065C9.98419 15.4193 10.1282 15.6688 10.5337 15.5902C13.7107 14.5312 16 11.5335 16 8.00006C16 3.58167 12.4182 0 8.00007 0ZM2.99628 11.3963C2.97867 11.436 2.91614 11.4479 2.85917 11.4206C2.80115 11.3945 2.76856 11.3404 2.78737 11.3005C2.80459 11.2595 2.86725 11.2482 2.92514 11.2756C2.9833 11.3017 3.01642 11.3564 2.99628 11.3963ZM3.3898 11.7474C3.35165 11.7828 3.27706 11.7663 3.22645 11.7104C3.17413 11.6547 3.16432 11.5801 3.20301 11.5442C3.24235 11.5088 3.31468 11.5254 3.36715 11.5811C3.41947 11.6376 3.42968 11.7116 3.3898 11.7474ZM3.65977 12.1966C3.61075 12.2307 3.5306 12.1988 3.48105 12.1276C3.43204 12.0565 3.43204 11.9712 3.48211 11.937C3.53179 11.9028 3.61075 11.9335 3.66096 12.0042C3.70984 12.0765 3.70984 12.1618 3.65977 12.1966ZM4.11633 12.7169C4.07248 12.7653 3.97909 12.7523 3.91073 12.6863C3.84078 12.6218 3.82131 12.5303 3.86529 12.4819C3.90967 12.4334 4.0036 12.4471 4.07248 12.5125C4.1419 12.5769 4.1631 12.6691 4.11633 12.7169ZM4.70641 12.8926C4.68707 12.9553 4.59711 12.9837 4.5065 12.9571C4.41602 12.9297 4.3568 12.8563 4.37508 12.793C4.39389 12.7299 4.48424 12.7002 4.57552 12.7287C4.66587 12.756 4.72522 12.8289 4.70641 12.8926ZM5.37793 12.9671C5.38019 13.0331 5.30335 13.0878 5.20823 13.089C5.11258 13.0911 5.03521 13.0377 5.03415 12.9728C5.03415 12.9062 5.10927 12.852 5.20492 12.8504C5.30004 12.8485 5.37793 12.9015 5.37793 12.9671ZM6.03763 12.9418C6.04903 13.0062 5.98292 13.0723 5.88846 13.0899C5.7956 13.1069 5.70962 13.0671 5.69783 13.0033C5.6863 12.9373 5.7536 12.8712 5.84634 12.8541C5.94093 12.8377 6.02558 12.8764 6.03763 12.9418Z\"\r\n                    fill=\"#C6C7C9\"\r\n                  />\r\n                </g>\r\n                <defs>\r\n                  <clipPath id=\"clip0_5_117\">\r\n                    <rect width=\"16\" height=\"15.625\" fill=\"white\" />\r\n                  </clipPath>\r\n                </defs>\r\n              </svg>\r\n            </a>\r\n            <a href=\"#\" class=\"icons__item\">\r\n              <svg\r\n                width=\"16\"\r\n                height=\"16\"\r\n                viewBox=\"0 0 16 16\"\r\n                fill=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n              >\r\n                <g clip-path=\"url(#clip0_5_120)\">\r\n                  <path\r\n                    class=\"linkedin__item\"\r\n                    fill-rule=\"evenodd\"\r\n                    clip-rule=\"evenodd\"\r\n                    d=\"M8 0C3.58173 0 0 3.58173 0 8C0 12.4183 3.58173 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58173 12.4183 0 8 0ZM3.84053 6.62593H5.6535V12.0732H3.84053V6.62593ZM5.77293 4.9409C5.76117 4.4068 5.37923 4 4.759 4C4.1388 4 3.73333 4.4068 3.73333 4.9409C3.73333 5.46393 4.12683 5.88243 4.73547 5.88243H4.74707C5.37923 5.88243 5.77293 5.46393 5.77293 4.9409ZM10.1044 6.49803C11.2974 6.49803 12.1918 7.27677 12.1918 8.9499L12.1917 12.0732H10.3788V9.1589C10.3788 8.4269 10.1165 7.9274 9.46017 7.9274C8.9593 7.9274 8.66097 8.26413 8.52993 8.5894C8.482 8.70593 8.47023 8.86833 8.47023 9.03113V12.0733H6.65703C6.65703 12.0733 6.68093 7.13723 6.65703 6.6261H8.47023V7.39763C8.71083 7.02673 9.1418 6.49803 10.1044 6.49803Z\"\r\n                    fill=\"#C6C7C9\"\r\n                  />\r\n                </g>\r\n                <defs>\r\n                  <clipPath id=\"clip0_5_120\">\r\n                    <rect width=\"16\" height=\"16\" fill=\"white\" />\r\n                  </clipPath>\r\n                </defs>\r\n              </svg>\r\n            </a>\r\n            <a href=\"#\" class=\"icons__item\">\r\n              <svg\r\n                width=\"16\"\r\n                height=\"16\"\r\n                viewBox=\"0 0 16 16\"\r\n                fill=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n              >\r\n                <g clip-path=\"url(#clip0_5_122)\">\r\n                  <path\r\n                    class=\"instagram__item\"\r\n                    fill-rule=\"evenodd\"\r\n                    clip-rule=\"evenodd\"\r\n                    d=\"M8 0C3.58173 0 0 3.58173 0 8C0 12.4183 3.58173 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58173 12.4183 0 8 0ZM6.2411 3.7591C6.6962 3.7384 6.84163 3.73333 8.0004 3.73333H7.99907C9.1582 3.73333 9.30307 3.7384 9.7582 3.7591C10.2124 3.7799 10.5226 3.85183 10.7947 3.95733C11.0755 4.06623 11.3129 4.212 11.5502 4.44933C11.7876 4.6865 11.9333 4.92453 12.0427 5.20517C12.1476 5.47647 12.2196 5.7865 12.2409 6.24073C12.2613 6.69587 12.2667 6.84127 12.2667 8.00003C12.2667 9.1588 12.2613 9.30387 12.2409 9.759C12.2196 10.213 12.1476 10.5232 12.0427 10.7946C11.9333 11.0751 11.7876 11.3131 11.5502 11.5503C11.3131 11.7876 11.0755 11.9338 10.7949 12.0428C10.5234 12.1483 10.213 12.2202 9.75883 12.241C9.3037 12.2617 9.15873 12.2668 7.99987 12.2668C6.8412 12.2668 6.69587 12.2617 6.24073 12.241C5.7866 12.2202 5.47647 12.1483 5.205 12.0428C4.92453 11.9338 4.6865 11.7876 4.44943 11.5503C4.21217 11.3131 4.0664 11.0751 3.95733 10.7945C3.8519 10.5232 3.78 10.2131 3.7591 9.7589C3.7385 9.3038 3.73333 9.1588 3.73333 8.00003C3.73333 6.84127 3.73867 6.69577 3.75903 6.24063C3.77947 5.7866 3.85147 5.47647 3.95723 5.20507C4.06657 4.92453 4.21237 4.6865 4.4497 4.44933C4.68687 4.2121 4.9249 4.0663 5.20553 3.95733C5.47683 3.85183 5.78687 3.7799 6.2411 3.7591Z\"\r\n                    fill=\"#C6C7C9\"\r\n                  />\r\n                  <path\r\n                    class=\"instagram__item\"\r\n                    fill-rule=\"evenodd\"\r\n                    clip-rule=\"evenodd\"\r\n                    d=\"M7.61763 4.50223C7.69193 4.50213 7.7719 4.50216 7.85816 4.50219L8.0004 4.50223C9.1396 4.50223 9.27463 4.50633 9.7245 4.52676C10.1405 4.54579 10.3663 4.61529 10.5167 4.67369C10.7158 4.75103 10.8577 4.84349 11.007 4.99283C11.1563 5.14216 11.2488 5.28439 11.3263 5.48349C11.3847 5.63373 11.4543 5.85949 11.4732 6.27549C11.4937 6.72529 11.4981 6.86039 11.4981 7.99906C11.4981 9.13776 11.4937 9.27286 11.4732 9.72266C11.4542 10.1387 11.3847 10.3644 11.3263 10.5147C11.249 10.7138 11.1563 10.8556 11.007 11.0048C10.8577 11.1541 10.7159 11.2466 10.5167 11.3239C10.3665 11.3826 10.1405 11.4519 9.7245 11.4709C9.2747 11.4914 9.1396 11.4958 8.0004 11.4958C6.8611 11.4958 6.72606 11.4914 6.27626 11.4709C5.86026 11.4517 5.6345 11.3822 5.484 11.3238C5.2849 11.2465 5.14266 11.154 4.99333 11.0047C4.844 10.8554 4.75156 10.7135 4.67403 10.5143C4.61563 10.3641 4.54603 10.1383 4.5271 9.72229C4.50666 9.27253 4.50256 9.13739 4.50256 7.99799C4.50256 6.85863 4.50666 6.72423 4.5271 6.27443C4.54613 5.85843 4.61563 5.63266 4.67403 5.48226C4.75136 5.28313 4.844 5.14093 4.99333 4.99159C5.14266 4.84226 5.2849 4.74979 5.484 4.67229C5.6344 4.61363 5.86026 4.54429 6.27626 4.52516C6.66986 4.50739 6.82243 4.50206 7.61763 4.50116V4.50223ZM10.2779 5.21069C9.99526 5.21069 9.7659 5.43976 9.7659 5.72253C9.7659 6.00519 9.99526 6.23453 10.2779 6.23453C10.5606 6.23453 10.7899 6.00519 10.7899 5.72253C10.7899 5.43986 10.5606 5.21053 10.2779 5.21053V5.21069ZM5.80926 8.00006C5.80926 6.79003 6.79026 5.80896 8.0003 5.80893C9.21036 5.80893 10.1912 6.78999 10.1912 8.00006C10.1912 9.21013 9.21043 10.1908 8.0004 10.1908C6.79033 10.1908 5.80926 9.21013 5.80926 8.00006Z\"\r\n                    fill=\"#C6C7C9\"\r\n                  />\r\n                  <path\r\n                    class=\"instagram__item\"\r\n                    d=\"M8.00036 6.5778C8.78579 6.5778 9.42259 7.21454 9.42259 8.00004C9.42259 8.78547 8.78579 9.42227 8.00036 9.42227C7.21486 9.42227 6.57812 8.78547 6.57812 8.00004C6.57812 7.21454 7.21486 6.5778 8.00036 6.5778Z\"\r\n                    fill=\"#C6C7C9\"\r\n                  />\r\n                </g>\r\n                <defs>\r\n                  <clipPath id=\"clip0_5_122\">\r\n                    <rect width=\"16\" height=\"16\" fill=\"white\" />\r\n                  </clipPath>\r\n                </defs>\r\n              </svg>\r\n            </a>\r\n            <a href=\"#\" class=\"icons__item\">\r\n              <svg\r\n                width=\"16\"\r\n                height=\"16\"\r\n                viewBox=\"0 0 16 16\"\r\n                fill=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n              >\r\n                <g clip-path=\"url(#clip0_5_126)\">\r\n                  <path\r\n                    class=\"youtube__icon\"\r\n                    d=\"M0 8C0 3.58173 3.58173 0 8 0C12.4183 0 16 3.58173 16 8C16 12.4183 12.4183 16 8 16C3.58173 16 0 12.4183 0 8Z\"\r\n                    fill=\"#C6C7C9\"\r\n                  />\r\n                  <path\r\n                    class=\"youtube__white\"\r\n                    d=\"M12.0883 6.0244C11.9901 5.6474 11.701 5.35053 11.3338 5.24977C10.6684 5.06667 7.99994 5.06667 7.99994 5.06667C7.99994 5.06667 5.33148 5.06667 4.66604 5.24977C4.29884 5.35053 4.00968 5.6474 3.91154 6.0244C3.73328 6.7077 3.73328 8.13333 3.73328 8.13333C3.73328 8.13333 3.73328 9.55893 3.91154 10.2423C4.00968 10.6193 4.29884 10.9161 4.66604 11.0169C5.33148 11.2 7.99994 11.2 7.99994 11.2C7.99994 11.2 10.6684 11.2 11.3338 11.0169C11.701 10.9161 11.9901 10.6193 12.0883 10.2423C12.2666 9.55893 12.2666 8.13333 12.2666 8.13333C12.2666 8.13333 12.2666 6.7077 12.0883 6.0244Z\"\r\n                    fill=\"#151C2C\"\r\n                  />\r\n                  <path\r\n                    class=\"youtube__icon\"\r\n                    d=\"M7.19995 9.6V6.93333L9.33328 8.2667L7.19995 9.6Z\"\r\n                    fill=\"#C6C7C9\"\r\n                  />\r\n                </g>\r\n                <defs>\r\n                  <clipPath id=\"clip0_5_126\">\r\n                    <rect width=\"16\" height=\"16\" fill=\"white\" />\r\n                  </clipPath>\r\n                </defs>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n          <div class=\"hero\">\r\n            <div class=\"about\">\r\n              <p class=\"about__hi\">Hi, it's me</p>\r\n              <h1 class=\"about__title\">Mykola Belenchuk</h1>\r\n              <p class=\"about__exp\">\r\n                Software Engineer <br />\r\n                with 1+ years experience\r\n              </p>\r\n              <button class=\"about__btn\">Get to know me</button>\r\n            </div>\r\n            <div class=\"image__block\">\r\n              <div class=\"block\">\r\n                <img class=\"photo\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"photo\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"biography\" class=\"section biography__section\">\r\n          <p class=\"biography__subheader subheader\">\r\n            Read my incredible <span>BIOGRAPHY</span>\r\n          </p>\r\n          <p class=\"biography__text\">\r\n            In <output id=\"rangevalue\">2018</output> I started to learn\r\n            JavaScript. This language suprised me, because I could make\r\n            interesting things on my websites such as animations, dynamic\r\n            changes, sliders, displaying data from BE on pages, etc. Later I\r\n            knew about the React.JS framework, which help me to understand a lot\r\n            about JavaScript, business logic, state managment, mutations,\r\n            classes, SPA building. It was a great time, because it allowed me to\r\n            jump into the Frontend even deeper. I took a bunch of courses to\r\n            study ReactJS, Redux and JavaScript when it wasn’t mainstream. Also\r\n            I started freelancing. It wasn’t much money, but I learned how to\r\n            communicate with clients and other developers. Even though my\r\n            clients were Russian, but I tried studying English by myself.\r\n          </p>\r\n          <div class=\"range\">\r\n            <input\r\n              list=\"markers\"\r\n              type=\"range\"\r\n              value=\"2018\"\r\n              min=\"2014\"\r\n              max=\"2023\"\r\n              oninput=\"rangevalue.value=value\"\r\n            />\r\n            <datalist id=\"markers\">\r\n              <option value=\"2014\" label=\"2014\"></option>\r\n              <option value=\"2015\" label=\"2017\"></option>\r\n              <option value=\"2016\" label=\"2020\"></option>\r\n              <option value=\"2023\" label=\"2023\"></option>\r\n            </datalist>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"skills\" class=\"section skills__section\">\r\n          <p class=\"skills__subheader subheader\">\r\n            What <span>SKILLS</span> do I have?\r\n          </p>\r\n          <div class=\"skills\">\r\n            <span class=\"skills__item\" data-name=\"all\">All</span>\r\n            <span\r\n              class=\"skills__item skills__item--active\"\r\n              data-name=\"languages\"\r\n              >Languages</span\r\n            >\r\n            <span class=\"skills__item\" data-name=\"frameworks\">Frameworks</span>\r\n            <span class=\"skills__item\" data-name=\"tools\">Tools</span>\r\n            <span class=\"skills__item\" data-name=\"testing\">Testing</span>\r\n          </div>\r\n          <div class=\"cards\">\r\n            <div class=\"cards__item\" data-name=\"languages\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"skill\" />\r\n              <p>Typescript</p>\r\n            </div>\r\n            <div class=\"cards__item\" data-name=\"languages\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"skill\" />\r\n              <p>JavaScript</p>\r\n            </div>\r\n            <div class=\"cards__item\" data-name=\"languages\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"skill\" />\r\n              <p>nodejs</p>\r\n            </div>\r\n            <div class=\"cards__item\" data-name=\"languages\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"skill\" />\r\n              <p>Python</p>\r\n            </div>\r\n            <div class=\"cards__item\" data-name=\"languages\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"skill\" />\r\n              <p>HTML</p>\r\n            </div>\r\n            <div class=\"cards__item cards__item---hide\" data-name=\"tools\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"skill\" />\r\n              <p>Gulp</p>\r\n            </div>\r\n            <div class=\"cards__item cards__item---hide\" data-name=\"tools\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"skill\" />\r\n              <p>webpack</p>\r\n            </div>\r\n            <div class=\"cards__item cards__item---hide\" data-name=\"testing\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"skill\" />\r\n              <p>JEST</p>\r\n            </div>\r\n            <div class=\"cards__item cards__item---hide\" data-name=\"frameworks\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"skill\" />\r\n              <p>REACT</p>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"works\" class=\"section works__section\">\r\n          <p class=\"subheader\">Let’s look at my <span>Works</span></p>\r\n          <div class=\"swiper\">\r\n            <div class=\"swiper-wrapper\">\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"slide__content\"></div>\r\n                <button class=\"blur__content--btn\">VIEW</button>\r\n                <p class=\"slide__content--text\">Website for Physiotherapist</p>\r\n              </div>\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"slide__content\"></div>\r\n                <button class=\"blur__content--btn\">VIEW</button>\r\n                <p class=\"slide__content--text\">Website for Physiotherapist</p>\r\n              </div>\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"slide__content\"></div>\r\n                <button class=\"blur__content--btn\">VIEW</button>\r\n                <p class=\"slide__content--text\">Website for Physiotherapist</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-button-next\"></div>\r\n            <div class=\"swiper-button-prev\"></div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"education\" class=\"section education__section\">\r\n          <div class=\"education__container\">\r\n            <p class=\"subheader\">\r\n              How about my\r\n              <span>EDUCATION</span>?\r\n            </p>\r\n            <div class=\"educations\">\r\n              <div class=\"education__card education__card--reverse\">\r\n                <div class=\"education__card--text\">\r\n                  <p class=\"text__subheader\">School</p>\r\n                  <p class=\"text__info\">\r\n                    When I was in school, I had a friend called Murland Evans...\r\n                    and one day we were talking about what we would do when we\r\n                    were grown up.\r\n                  </p>\r\n                </div>\r\n                <div class=\"education__card--line\"></div>\r\n                <p class=\"education__card--years\">2003 - 2014</p>\r\n              </div>\r\n              <div class=\"education__card\">\r\n                <p class=\"education__card--years\">2014 - 2018</p>\r\n                <div class=\"education__card--line\"></div>\r\n                <div class=\"education__card--text\">\r\n                  <p class=\"text__subheader\">University</p>\r\n                  <p class=\"text__info\">\r\n                    A graduate of Cracow University of Economics (Marketing and\r\n                    Management) as well as Cracow School of Business Executive\r\n                    MBA and Stockholm Univesity School of Business.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"education__card education__card--reverse\">\r\n                <div class=\"education__card--text\">\r\n                  <p class=\"text__subheader\">RSSchool Course</p>\r\n                  <p class=\"text__info\">\r\n                    The first thing of course was to check whether something\r\n                    like this has already been done.\r\n                  </p>\r\n                </div>\r\n                <div class=\"education__card--line\"></div>\r\n                <p class=\"education__card--years\">2018 - 2019</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        <section id=\"contacts\" class=\"section footer__section\">\r\n          <p class=\"subheader\">\r\n            You can find me on these\r\n            <span>CONTACTS</span>\r\n          </p>\r\n          <div class=\"footer__icons\">\r\n            <a\r\n              class=\"footer__icons--item\"\r\n              target=\"_blank\"\r\n              href=\"https://github.com/\"\r\n            >\r\n              <svg\r\n                width=\"27\"\r\n                height=\"29\"\r\n                viewBox=\"0 0 27 29\"\r\n                fill=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n              >\r\n                <path\r\n                  d=\"M10.25 23.75C4 25.625 4 20.625 1.5 20M19 27.5V22.6625C19.0469 22.0665 18.9664 21.4673 18.7638 20.9048C18.5612 20.3423 18.2412 19.8293 17.825 19.4C21.75 18.9625 25.875 17.475 25.875 10.65C25.8747 8.90483 25.2034 7.22654 24 5.96254C24.5698 4.43568 24.5295 2.74798 23.8875 1.25004C23.8875 1.25004 22.4125 0.812544 19 3.10004C16.135 2.32357 13.115 2.32357 10.25 3.10004C6.8375 0.812544 5.3625 1.25004 5.3625 1.25004C4.72047 2.74798 4.68018 4.43568 5.25 5.96254C4.03766 7.23592 3.36565 8.92937 3.375 10.6875C3.375 17.4625 7.5 18.95 11.425 19.4375C11.0137 19.8625 10.6966 20.3693 10.4941 20.9249C10.2917 21.4806 10.2085 22.0726 10.25 22.6625V27.5\"\r\n                  stroke=\"#C6C7C9\"\r\n                  stroke-width=\"2\"\r\n                  stroke-linecap=\"round\"\r\n                  stroke-linejoin=\"round\"\r\n                />\r\n              </svg>\r\n            </a>\r\n            <a\r\n              class=\"footer__icons--item\"\r\n              target=\"_blank\"\r\n              href=\"https://www.linkedin.com\"\r\n            >\r\n              <svg\r\n                width=\"30\"\r\n                height=\"30\"\r\n                viewBox=\"0 0 30 30\"\r\n                fill=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n              >\r\n                <path\r\n                  d=\"M6.81633 9.98047H0.371063V29.3357H6.81633V9.98047Z\"\r\n                  fill=\"#C6C7C9\"\r\n                />\r\n                <path\r\n                  d=\"M27.9686 11.7485C26.6148 10.2706 24.8241 9.53149 22.5977 9.53149C21.7774 9.53149 21.0317 9.6324 20.361 9.83434C19.6906 10.0362 19.1243 10.3193 18.6619 10.6839C18.1998 11.0485 17.8317 11.387 17.5585 11.6994C17.2987 11.9961 17.0446 12.3417 16.7967 12.7326V9.9804H10.3707L10.3904 10.918C10.4036 11.5432 10.4101 13.4702 10.4101 16.6992C10.4101 19.9284 10.3971 24.1405 10.3709 29.3359H16.7967V18.5349C16.7967 17.871 16.8679 17.3438 17.0114 16.9528C17.2851 16.2884 17.6981 15.7322 18.2518 15.2832C18.8054 14.8336 19.492 14.609 20.3126 14.609C21.4321 14.609 22.2559 14.9963 22.7834 15.7711C23.3106 16.5457 23.5742 17.6167 23.5742 18.984V29.3353H30V18.2423C29.9995 15.3904 29.323 13.2259 27.9686 11.7485Z\"\r\n                  fill=\"#C6C7C9\"\r\n                />\r\n                <path\r\n                  d=\"M3.63275 0.664062C2.55215 0.664062 1.67658 0.980046 1.00582 1.6114C0.335138 2.24288 0 3.04013 0 4.00388C0 4.95415 0.325492 5.74866 0.976545 6.38651C1.62739 7.02443 2.48689 7.34356 3.55455 7.34356H3.59362C4.68748 7.34356 5.56976 7.0247 6.24024 6.38651C6.91072 5.74866 7.23943 4.95443 7.2265 4.00388C7.2135 3.0402 6.88124 2.24288 6.23039 1.6114C5.57961 0.979772 4.71341 0.664062 3.63275 0.664062Z\"\r\n                  fill=\"#C6C7C9\"\r\n                />\r\n              </svg>\r\n            </a>\r\n            <a\r\n              class=\"footer__icons--item\"\r\n              target=\"_blank\"\r\n              href=\"https://www.google.com/\"\r\n            >\r\n              <svg\r\n                width=\"30\"\r\n                height=\"30\"\r\n                viewBox=\"0 0 30 30\"\r\n                fill=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n              >\r\n                <path\r\n                  d=\"M23.125 24.375H6.875\"\r\n                  stroke=\"#C6C7C9\"\r\n                  stroke-linecap=\"round\"\r\n                  stroke-linejoin=\"round\"\r\n                />\r\n                <path\r\n                  d=\"M15 25.9375C14.8146 25.9375 14.6333 25.9925 14.4792 26.0955C14.325 26.1985 14.2048 26.3449 14.1339 26.5162C14.0629 26.6875 14.0443 26.876 14.0805 27.0579C14.1167 27.2398 14.206 27.4068 14.3371 27.5379C14.4682 27.669 14.6352 27.7583 14.8171 27.7945C14.999 27.8307 15.1875 27.8121 15.3588 27.7411C15.5301 27.6702 15.6765 27.55 15.7795 27.3958C15.8825 27.2417 15.9375 27.0604 15.9375 26.875C15.9377 26.7518 15.9135 26.6299 15.8665 26.516C15.8194 26.4022 15.7504 26.2988 15.6633 26.2117C15.5762 26.1246 15.4728 26.0556 15.359 26.0085C15.2451 25.9615 15.1232 25.9373 15 25.9375Z\"\r\n                  fill=\"#C6C7C9\"\r\n                />\r\n                <path\r\n                  d=\"M20.625 0.625H9.375C7.99429 0.625 6.875 1.74429 6.875 3.125V26.875C6.875 28.2557 7.99429 29.375 9.375 29.375H20.625C22.0057 29.375 23.125 28.2557 23.125 26.875V3.125C23.125 1.74429 22.0057 0.625 20.625 0.625Z\"\r\n                  stroke=\"#C6C7C9\"\r\n                  stroke-linecap=\"round\"\r\n                  stroke-linejoin=\"round\"\r\n                />\r\n              </svg>\r\n            </a>\r\n            <a\r\n              class=\"footer__icons--item\"\r\n              target=\"_blank\"\r\n              href=\"https://mail.google.com/\"\r\n            >\r\n              <svg\r\n                width=\"28\"\r\n                height=\"20\"\r\n                viewBox=\"0 0 28 20\"\r\n                fill=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n              >\r\n                <path\r\n                  d=\"M26.9 0.699951H1.1C0.77 0.699951 0.5 0.969951 0.5 1.29995V18.6999C0.5 18.6999 0.5 18.6999 0.5 18.7299C0.5 18.7599 0.5 18.76 0.5 18.79C0.5 18.82 0.5 18.82 0.5 18.85C0.5 18.8799 0.5 18.8799 0.53 18.9099C0.53 18.9399 0.53 18.94 0.56 18.9699C0.56 19 0.59 19 0.59 19.0299C0.59 19.0599 0.62 19.06 0.62 19.09C0.62 19.09 0.62 19.09 0.62 19.12C0.62 19.12 0.62 19.1199 0.65 19.15L0.68 19.1799L0.71 19.2099C0.71 19.2099 0.74 19.24 0.77 19.24C0.8 19.24 0.8 19.27 0.83 19.27C0.86 19.27 0.86 19.2999 0.89 19.2999C0.92 19.2999 0.92 19.2999 0.95 19.33C0.98 19.33 0.98 19.33 1.01 19.33C1.04 19.33 1.04 19.33 1.07 19.33H1.1H26.9C26.96 19.33 26.99 19.33 27.02 19.33H27.05C27.08 19.33 27.11 19.2999 27.14 19.2999L27.17 19.27C27.2 19.27 27.23 19.2399 27.23 19.2099L27.26 19.1799C27.29 19.15 27.29 19.15 27.32 19.12L27.35 19.09C27.35 19.09 27.35 19.0899 27.35 19.0599C27.35 19.0299 27.38 19.0299 27.38 19C27.38 19 27.41 18.97 27.41 18.94C27.41 18.91 27.41 18.91 27.44 18.8799C27.47 18.8499 27.44 18.85 27.47 18.82C27.47 18.79 27.47 18.7899 27.47 18.7599C27.47 18.7299 27.47 18.7299 27.47 18.6999C27.47 18.6999 27.47 18.7 27.47 18.67V1.29995C27.5 0.969951 27.23 0.699951 26.9 0.699951ZM1.7 4.62995L9.8 11.05L1.7 17.4699V4.62995ZM2.84 18.1L10.79 11.8L13.64 14.05C13.76 14.14 13.88 14.17 14 14.17C14.12 14.17 14.27 14.14 14.36 14.05L17.21 11.8L25.16 18.1H2.84ZM26.3 17.4699L18.2 11.05L26.3 4.62995V17.4699ZM26.3 3.09995L25.94 3.39995L14 12.85L2.06 3.39995L1.7 3.09995V1.89995H26.3V3.09995Z\"\r\n                  fill=\"white\"\r\n                />\r\n              </svg>\r\n            </a>\r\n            <a\r\n              class=\"footer__icons--item\"\r\n              target=\"_blank\"\r\n              href=\"https://www.instagram.com/\"\r\n            >\r\n              <svg\r\n                width=\"30\"\r\n                height=\"30\"\r\n                viewBox=\"0 0 30 30\"\r\n                fill=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n              >\r\n                <g clip-path=\"url(#clip0_20_38)\">\r\n                  <path\r\n                    d=\"M21.25 2.5H8.75C5.29822 2.5 2.5 5.29822 2.5 8.75V21.25C2.5 24.7018 5.29822 27.5 8.75 27.5H21.25C24.7018 27.5 27.5 24.7018 27.5 21.25V8.75C27.5 5.29822 24.7018 2.5 21.25 2.5Z\"\r\n                    stroke=\"#C6C7C9\"\r\n                    stroke-width=\"2\"\r\n                    stroke-linecap=\"round\"\r\n                    stroke-linejoin=\"round\"\r\n                  />\r\n                  <path\r\n                    d=\"M20 14.2124C20.1543 15.2527 19.9766 16.3152 19.4922 17.2487C19.0078 18.1822 18.2414 18.9392 17.302 19.412C16.3626 19.8848 15.2981 20.0494 14.2597 19.8823C13.2214 19.7152 12.2622 19.225 11.5185 18.4813C10.7749 17.7377 10.2847 16.7785 10.1176 15.7402C9.9505 14.7018 10.1151 13.6373 10.5879 12.6979C11.0607 11.7585 11.8177 10.9921 12.7512 10.5077C13.6847 10.0233 14.7472 9.84562 15.7875 9.99989C16.8487 10.1572 17.8311 10.6517 18.5896 11.4103C19.3482 12.1688 19.8426 13.1512 20 14.2124Z\"\r\n                    stroke=\"#C6C7C9\"\r\n                    stroke-width=\"2\"\r\n                    stroke-linecap=\"round\"\r\n                    stroke-linejoin=\"round\"\r\n                  />\r\n                </g>\r\n                <defs>\r\n                  <clipPath id=\"clip0_20_38\">\r\n                    <rect width=\"30\" height=\"30\" fill=\"white\" />\r\n                  </clipPath>\r\n                </defs>\r\n              </svg>\r\n            </a>\r\n          </div>\r\n        </section>\r\n      </main>\r\n    </div>\r\n    <" + "script src=\"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js\"><" + "/script>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/img/gulp.png":
/*!**************************!*\
  !*** ./src/img/gulp.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/gulp.png";

/***/ }),

/***/ "./src/img/html.png":
/*!**************************!*\
  !*** ./src/img/html.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/html.png";

/***/ }),

/***/ "./src/img/javascript.png":
/*!********************************!*\
  !*** ./src/img/javascript.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/javascript.png";

/***/ }),

/***/ "./src/img/jest.jfif":
/*!***************************!*\
  !*** ./src/img/jest.jfif ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/jest.jfif";

/***/ }),

/***/ "./src/img/nodejs.png":
/*!****************************!*\
  !*** ./src/img/nodejs.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/nodejs.png";

/***/ }),

/***/ "./src/img/photo.png":
/*!***************************!*\
  !*** ./src/img/photo.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/photo.png";

/***/ }),

/***/ "./src/img/python.png":
/*!****************************!*\
  !*** ./src/img/python.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/python.png";

/***/ }),

/***/ "./src/img/react.png":
/*!***************************!*\
  !*** ./src/img/react.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/react.png";

/***/ }),

/***/ "./src/img/slide2.png":
/*!****************************!*\
  !*** ./src/img/slide2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/slide2.png";

/***/ }),

/***/ "./src/img/typesript.png":
/*!*******************************!*\
  !*** ./src/img/typesript.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/typesript.png";

/***/ }),

/***/ "./src/img/webpack.png":
/*!*****************************!*\
  !*** ./src/img/webpack.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/webpack.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _modules_cardSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cardSort */ "./src/modules/cardSort.js");
/* harmony import */ var _modules_cardSort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_cardSort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/theme */ "./src/modules/theme.js");
/* harmony import */ var _modules_theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_theme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/swiper */ "./src/modules/swiper.js");
/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scroll */ "./src/modules/scroll.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/range */ "./src/modules/range.js");
/* harmony import */ var _modules_range__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_range__WEBPACK_IMPORTED_MODULE_6__);







})();

/******/ })()
;
//# sourceMappingURL=main.7746b610fd863ffe7686.js.map