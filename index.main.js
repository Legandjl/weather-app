/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/capitalize/index.js":
/*!******************************************!*\
  !*** ./node_modules/capitalize/index.js ***!
  \******************************************/
/***/ ((module) => {

module.exports = function (string, preserve) {
  if (!preserve) {
    string = string.toLowerCase();
  }
  return string.charAt(0).toUpperCase() + string.substring(1);
}

module.exports.words = function (string, preserve) {
  if (!preserve) {
    string = string.toLowerCase();
  }
  return string.replace(/(?!^[0-9])(^|[^a-zA-Z\u00C0-\u017F\u0400-\u04FF'])([a-zA-Z\u00C0-\u017F\u0400-\u04FF])/g, function (m) {
    return m.toUpperCase()
  })
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n  font-family: 'Space Mono', monospace;\n  background-color: #23f1dd;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 1fr auto;\n  grid-template-columns: 1fr;\n  height: 100vh;\n  max-height: 100vh;\n}\n\n#todaysForecastWrap {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  align-content: center;\n  justify-content: start;\n  justify-items: start;\n  padding: 60px;\n  min-width: 40vw;\n  justify-self: center;\n  align-self: center;\n}\n\n#todaysForecast {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 1fr;\n}\n\n#forecastImageWrap {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: start;\n  justify-content: start;\n}\n\n#todaysForecast img {\n  width: 100%;\n  height: 90px;\n  max-width: 90px;\n  justify-self: start;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#infoWrap {\n  margin: 10px;\n  border: solid 1px;\n  display: grid;\n}\n\n#description {\n  font-size: 38px;\n  font-weight: 900;\n}\n\n#location {\n  font-size: 22px;\n}\n\n#temp {\n  font-size: 28px;\n  font-weight: 200;\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\n\n#searchWrap {\n  position: relative;\n}\n\ninput[type='text'] {\n  max-width: 120px;\n  border: none;\n  border-bottom: solid 1px;\n  padding: 6px;\n  padding-left: 26px;\n  background-color: #23f1dd;\n}\n\n#searchWrap img {\n  top: -4px;\n  left: 0px;\n  width: auto;\n  height: 16px;\n  position: absolute;\n}\n\n#searchWrap img:hover {\n  cursor: pointer;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n}\n\n#temp img {\n  height: 18px;\n  width: 18px;\n  justify-self: start;\n  align-self: start;\n}\n\n.weatherInfoWrap {\n  display: grid;\n  align-content: center;\n  padding: 2px;\n  grid-gap: 10px;\n  text-align: left;\n}\n\n#detailsWrap {\n  justify-self: end;\n  display: grid;\n  grid-gap: 10px;\n  align-items: center;\n  align-content: center;\n  margin: 20px;\n}\n\n.forecastItem {\n  font-weight: 900;\n  font-size: 24px;\n  text-align: start;\n}\n\n.forecastItem img {\n  width: auto;\n  height: 15px;\n}\n\n#footer {\n  grid-column: 1/-1;\n  grid-row-end: -1;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-items: center;\n  justify-content: center;\n  border-top: solid 1px;\n  align-items: center;\n  align-self: center;\n}\n\n#dailyItemWrap {\n  text-align: center;\n  display: grid;\n  grid-gap: 10px;\n  margin: 25px;\n  grid-template-columns: 1fr;\n}\n\n#dailyTemp {\n  width: auto;\n  max-height: 10px;\n  justify-self: start;\n}\n\n#dailyImageWrap img {\n  width: auto;\n  max-height: 60px;\n}\n\n.weekDay {\n  font-weight: 900;\n  font-size: 18px;\n  text-decoration: underline;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;AACD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;EACd,oCAAoC;EACpC,yBAAyB;AAC3B;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,0BAA0B;EAC1B,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,mBAAmB;EACnB,qBAAqB;EACrB,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,eAAe;EACf,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,SAAS;EACT,SAAS;EACT,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,YAAY;EACZ,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,uBAAuB;EACvB,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,YAAY;EACZ,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,0BAA0B;AAC5B","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n  font-family: 'Space Mono', monospace;\n  background-color: #23f1dd;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 1fr auto;\n  grid-template-columns: 1fr;\n  height: 100vh;\n  max-height: 100vh;\n}\n\n#todaysForecastWrap {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  align-content: center;\n  justify-content: start;\n  justify-items: start;\n  padding: 60px;\n  min-width: 40vw;\n  justify-self: center;\n  align-self: center;\n}\n\n#todaysForecast {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 1fr;\n}\n\n#forecastImageWrap {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: start;\n  justify-content: start;\n}\n\n#todaysForecast img {\n  width: 100%;\n  height: 90px;\n  max-width: 90px;\n  justify-self: start;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#infoWrap {\n  margin: 10px;\n  border: solid 1px;\n  display: grid;\n}\n\n#description {\n  font-size: 38px;\n  font-weight: 900;\n}\n\n#location {\n  font-size: 22px;\n}\n\n#temp {\n  font-size: 28px;\n  font-weight: 200;\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\n\n#searchWrap {\n  position: relative;\n}\n\ninput[type='text'] {\n  max-width: 120px;\n  border: none;\n  border-bottom: solid 1px;\n  padding: 6px;\n  padding-left: 26px;\n  background-color: #23f1dd;\n}\n\n#searchWrap img {\n  top: -4px;\n  left: 0px;\n  width: auto;\n  height: 16px;\n  position: absolute;\n}\n\n#searchWrap img:hover {\n  cursor: pointer;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n}\n\n#temp img {\n  height: 18px;\n  width: 18px;\n  justify-self: start;\n  align-self: start;\n}\n\n.weatherInfoWrap {\n  display: grid;\n  align-content: center;\n  padding: 2px;\n  grid-gap: 10px;\n  text-align: left;\n}\n\n#detailsWrap {\n  justify-self: end;\n  display: grid;\n  grid-gap: 10px;\n  align-items: center;\n  align-content: center;\n  margin: 20px;\n}\n\n.forecastItem {\n  font-weight: 900;\n  font-size: 24px;\n  text-align: start;\n}\n\n.forecastItem img {\n  width: auto;\n  height: 15px;\n}\n\n#footer {\n  grid-column: 1/-1;\n  grid-row-end: -1;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-items: center;\n  justify-content: center;\n  border-top: solid 1px;\n  align-items: center;\n  align-self: center;\n}\n\n#dailyItemWrap {\n  text-align: center;\n  display: grid;\n  grid-gap: 10px;\n  margin: 25px;\n  grid-template-columns: 1fr;\n}\n\n#dailyTemp {\n  width: auto;\n  max-height: 10px;\n  justify-self: start;\n}\n\n#dailyImageWrap img {\n  width: auto;\n  max-height: 60px;\n}\n\n.weekDay {\n  font-weight: 900;\n  font-size: 18px;\n  text-decoration: underline;\n}\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addWeeks/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addWeeks/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addWeeks)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  var days = amount * 7;
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, days);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/eachDayOfInterval/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/eachDayOfInterval/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ eachDayOfInterval)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `eachDay` to `eachDayOfInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   eachDay(new Date(2014, 0, 10), new Date(2014, 0, 20))
 *
 *   // v2.0.0 onward
 *
 *   eachDayOfInterval(
 *     { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) }
 *   )
 *   ```
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The value should be more than 1.
 * @returns {Date[]} the array with starts of days from the day of the interval start to the day of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */

function eachDayOfInterval(dirtyInterval, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(interval.start);
  var endDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = options && 'step' in options ? Number(options.step) : 1;
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number greater than 1');

  while (currentDate.getTime() <= endTime) {
    dates.push((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }

  return dates;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDay/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
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
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/forecastElements.js":
/*!*************************************!*\
  !*** ./src/app/forecastElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forecastGenerator": () => (/* binding */ forecastGenerator)
/* harmony export */ });
/* harmony import */ var _images_weatherIcons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/weatherIcons.js */ "./src/images/weatherIcons.js");
/* harmony import */ var _images_celsius_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/celsius.png */ "./src/images/celsius.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/search.png */ "./src/images/search.png");
/* harmony import */ var capitalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! capitalize */ "./node_modules/capitalize/index.js");
/* harmony import */ var capitalize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(capitalize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic */ "./src/app/logic.js");






const forecastGenerator = {};
// sets up main forecast left side
forecastGenerator.getTodaysForecastElement = (forecastObject) => {
  const currentForecast = forecastObject.getMain();
  const forecastWrap = document.createElement('div');
  forecastWrap.id = 'todaysForecast';

  for (const [key, val] of Object.entries(currentForecast)) {
    if (key != 'iconKey' && key != 'id') {
      const container = document.createElement('div');
      container.classList.add('forecastItem');
      container.id = key;
      const wrapper = document.createElement('div');
      wrapper.classList.add('weatherInfoWrap');

      if (key != 'location') {
        wrapper.innerText = capitalize__WEBPACK_IMPORTED_MODULE_3___default().words(val);
      } else {
        wrapper.innerText = val;
      }
      container.append(wrapper);

      if (key == 'temp') {
        const image = new Image();
        image.src = _images_celsius_png__WEBPACK_IMPORTED_MODULE_1__;
        container.appendChild(image);
      }
      forecastWrap.append(container);
    }

    if (key == 'iconKey') {
      const imgWrap = document.createElement('div');
      imgWrap.id = 'forecastImageWrap';
      const icon = new Image();
      icon.src = _images_weatherIcons_js__WEBPACK_IMPORTED_MODULE_0__.icons[val];
      imgWrap.append(icon);
      forecastWrap.append(imgWrap);
    }
  }
  const searchWrap = getSearchWrap();
  forecastWrap.append(searchWrap);
  return forecastWrap;
};
// sets up todays details on the right side
forecastGenerator.getTodaysDetails = (forecastObject) => {
  const forecastInfo = forecastObject.getDetails();
  console.log(forecastInfo);
  const detailsWrap = document.createElement('div');
  detailsWrap.id = 'detailsWrap';

  for (const [key, val] of Object.entries(forecastInfo)) {
    const container = document.createElement('div');
    const containerTitle = document.createElement('div');
    containerTitle.classList.add('containerTitle');
    containerTitle.innerText = key;
    container.classList.add('forecastItem');
    container.innerText = val;
    if (key == 'Feels Like') {
      const image = new Image();
      image.src = _images_celsius_png__WEBPACK_IMPORTED_MODULE_1__;
      container.append(image);
    }
    detailsWrap.append(containerTitle);
    detailsWrap.append(container);
  }

  return detailsWrap;
};
// sets up the footer for displaying daily forecast
forecastGenerator.getDaily = (forecastArray) => {
  const footer = document.createElement('div');
  footer.id = 'footer';

  const arr = forecastArray.getDaily();

  for (let x = 0; x < arr.length; x++) {
    const currentForecastItem = arr[x];
    const dailyWrap = document.createElement('div');
    const dailyItemWrap = document.createElement('div');

    for (const [key, val] of Object.entries(currentForecastItem)) {
      dailyItemWrap.id = 'dailyItemWrap';
      if (key != 'icon') {
        const textWrap = document.createElement('div');
        textWrap.id = 'dailyText';
        textWrap.classList.add(key);
        textWrap.innerText = val;
        dailyItemWrap.append(textWrap);

        if (key == 'tempLow' || key == 'tempHigh') {
          const icon = new Image();
          icon.src = _images_celsius_png__WEBPACK_IMPORTED_MODULE_1__;
          icon.id = 'dailyTemp';
          textWrap.append(icon);
        }
      }

      if (key == 'icon') {
        const imgWrap = document.createElement('div');
        imgWrap.id = 'dailyImageWrap';
        const icon = new Image();
        icon.src = _images_weatherIcons_js__WEBPACK_IMPORTED_MODULE_0__.icons[val];
        imgWrap.append(icon);
        dailyItemWrap.append(imgWrap);
      }
      dailyWrap.append(dailyItemWrap);
    }

    footer.append(dailyWrap);
  }
  return footer;
};
// helper - sets up and returns searchbox
const getSearchWrap = () => {
  const searchWrap = document.createElement('div');
  searchWrap.id = 'searchWrap';

  const searchBox = document.createElement('input');
  searchBox.type = 'text';
  searchBox.placeholder = 'Ex: Liverpool, GB';
  searchBox.id = 'searchBox';

  const searchIcon = new Image();
  searchIcon.src = _images_search_png__WEBPACK_IMPORTED_MODULE_2__;

  searchWrap.append(searchBox);
  searchWrap.append(searchIcon);

  searchIcon.addEventListener('click', () => {
    (0,_logic__WEBPACK_IMPORTED_MODULE_4__.setCurrentForecast)(searchBox.value);
  });

  searchBox.addEventListener('keydown', (e) => {
    if (e.key != 'Enter') {
      return;
    }
    (0,_logic__WEBPACK_IMPORTED_MODULE_4__.setCurrentForecast)(searchBox.value);
  });

  return searchWrap;
};




/***/ }),

/***/ "./src/app/logic.js":
/*!**************************!*\
  !*** ./src/app/logic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCurrentForecast": () => (/* binding */ setCurrentForecast)
/* harmony export */ });
/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/dom */ "./src/dom/dom.js");
/* harmony import */ var _forecastElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecastElements */ "./src/app/forecastElements.js");
/* harmony import */ var _weatherData_apiQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weatherData/apiQueries */ "./src/weatherData/apiQueries.js");




async function setCurrentForecast(location) {
  try {
    const todaysForecast = await (0,_weatherData_apiQueries__WEBPACK_IMPORTED_MODULE_2__.getTodaysForecast)(location);
    const currentforecast =
      _forecastElements__WEBPACK_IMPORTED_MODULE_1__.forecastGenerator.getTodaysForecastElement(todaysForecast);
    const extraInfo = _forecastElements__WEBPACK_IMPORTED_MODULE_1__.forecastGenerator.getTodaysDetails(todaysForecast);
    const daily = _forecastElements__WEBPACK_IMPORTED_MODULE_1__.forecastGenerator.getDaily(todaysForecast);
    document.querySelector('#todaysForecastWrap').innerHTML = '';
    (0,_dom_dom__WEBPACK_IMPORTED_MODULE_0__.displayForecast)(currentforecast);
    (0,_dom_dom__WEBPACK_IMPORTED_MODULE_0__.displayForecast)(extraInfo);
    document.querySelector('#footer').remove();
    document.querySelector('#content').append(daily);
  } catch (err) {
    console.log(err);
    document.querySelector('#searchBox').value = '';
    document.querySelector('#searchBox').placeholder = 'Location not found.';
    return;
  }
}




/***/ }),

/***/ "./src/dom/dom.js":
/*!************************!*\
  !*** ./src/dom/dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialSetup": () => (/* binding */ initialSetup),
/* harmony export */   "displayForecast": () => (/* binding */ displayForecast)
/* harmony export */ });

function initialSetup() {
  const content = document.querySelector('#content');
  const todaysForecastWrap = document.createElement('div');
  todaysForecastWrap.id = 'todaysForecastWrap';
  const info = document.createElement('div');
  info.id = 'infoWrap';
  const dailyWrapper = document.createElement('div');
  dailyWrapper.id = 'dailyWrapper';
  // content.append(info);
  content.append(todaysForecastWrap);
  const footer = document.createElement('div');
  footer.id = 'footer';
  content.append(footer);
}

const displayForecast = (forecast) => {
  document.querySelector('#todaysForecastWrap').append(forecast);
};




/***/ }),

/***/ "./src/images/weatherIcons.js":
/*!************************************!*\
  !*** ./src/images/weatherIcons.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icons": () => (/* binding */ icons)
/* harmony export */ });
/* harmony import */ var _clearday_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearday.png */ "./src/images/clearday.png");
/* harmony import */ var _clearNight_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearNight.png */ "./src/images/clearNight.png");
/* harmony import */ var _cloudyDay_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cloudyDay.png */ "./src/images/cloudyDay.png");
/* harmony import */ var _snow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snow.png */ "./src/images/snow.png");
/* harmony import */ var _drizzle_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drizzle.png */ "./src/images/drizzle.png");
/* harmony import */ var _haze_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./haze.png */ "./src/images/haze.png");
/* harmony import */ var _thunderstorm_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thunderstorm.png */ "./src/images/thunderstorm.png");
/* harmony import */ var _cloudynight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cloudynight.png */ "./src/images/cloudynight.png");
/* harmony import */ var _scatteredClouds_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scatteredClouds.png */ "./src/images/scatteredClouds.png");
/* harmony import */ var _stormNight_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stormNight.png */ "./src/images/stormNight.png");
/* harmony import */ var _brokenCloudDay_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./brokenCloudDay.png */ "./src/images/brokenCloudDay.png");
/* harmony import */ var _rainyDay_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rainyDay.png */ "./src/images/rainyDay.png");
/* harmony import */ var _rainyNight_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rainyNight.png */ "./src/images/rainyNight.png");














const icons = {

  // n = night
  // d = day

  '01d': _clearday_png__WEBPACK_IMPORTED_MODULE_0__,
  '01n': _clearNight_png__WEBPACK_IMPORTED_MODULE_1__,

  '02d': _cloudyDay_png__WEBPACK_IMPORTED_MODULE_2__,
  '02n': _cloudynight_png__WEBPACK_IMPORTED_MODULE_7__,

  '03d': _scatteredClouds_png__WEBPACK_IMPORTED_MODULE_8__,
  '03n': _scatteredClouds_png__WEBPACK_IMPORTED_MODULE_8__,

  '04d': _brokenCloudDay_png__WEBPACK_IMPORTED_MODULE_10__,
  '04n': _cloudynight_png__WEBPACK_IMPORTED_MODULE_7__,

  '50d': _haze_png__WEBPACK_IMPORTED_MODULE_5__,
  '50n': _haze_png__WEBPACK_IMPORTED_MODULE_5__,

  '10d': _rainyDay_png__WEBPACK_IMPORTED_MODULE_11__,
  '10n': _rainyNight_png__WEBPACK_IMPORTED_MODULE_12__,

  '13d': _snow_png__WEBPACK_IMPORTED_MODULE_3__,
  '13n': _snow_png__WEBPACK_IMPORTED_MODULE_3__,

  '09d': _drizzle_png__WEBPACK_IMPORTED_MODULE_4__,
  '09n': _drizzle_png__WEBPACK_IMPORTED_MODULE_4__,

  '11d': _thunderstorm_png__WEBPACK_IMPORTED_MODULE_6__,
  '11n': _stormNight_png__WEBPACK_IMPORTED_MODULE_9__,

};




/***/ }),

/***/ "./src/weatherData/apiQueries.js":
/*!***************************************!*\
  !*** ./src/weatherData/apiQueries.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodaysForecast": () => (/* binding */ getTodaysForecast)
/* harmony export */ });
/* harmony import */ var _forecastObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecastObject */ "./src/weatherData/forecastObject.js");


const key = '5be21b7f49aed6165407fe53b49eba81';

// returns the coords of a location
// onecall requires coords instead of location

async function getCoordsAndLocation(location) {
  const locationData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`,
      {mode: 'cors'},
  );
  const locationDataJson = await locationData.json();
  const locationName =
    locationDataJson.name + ', ' + locationDataJson.sys['country'];
  return [locationDataJson.coord.lat, locationDataJson.coord.lon, locationName];
}

// returns all required data in a single call
async function oneCall(location) {
  const coords = await getCoordsAndLocation(location);
  const data = await fetch(
      ` http://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&appid=${key}&units=metric`,
      {mode: 'cors'},
  );
  return [data, coords[2]];
}

async function getTodaysForecast(location) {
  const allForecastData = await oneCall(location);
  const forecastJson = await allForecastData[0].json();
  // eslint-disable-next-line new-cap
  const todaysForecast = (0,_forecastObject__WEBPACK_IMPORTED_MODULE_0__.GetForecastObject)(forecastJson, allForecastData[1]);
  return todaysForecast;
}




/***/ }),

/***/ "./src/weatherData/forecastObject.js":
/*!*******************************************!*\
  !*** ./src/weatherData/forecastObject.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetForecastObject": () => (/* binding */ GetForecastObject)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/eachDayOfInterval/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addWeeks/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDay/index.js");


const GetForecastObject = (forecast, location) => {
  // returns the details for display on the right side

  const getDetails = () => {
    const mainObject = {};
    mainObject['Feels Like'] = forecast.current['feels_like'];
    mainObject['Humidity'] = forecast.current.humidity + '%';
    mainObject['Wind Speed'] =
      Number.parseFloat(forecast.current['wind_speed'] * 2.237).toPrecision(2) +
      ' m/ph';
    mainObject['Chance Of Rain'] = forecast.hourly[0].pop + '%';
    return mainObject;
  };
  // returns the main forecast object for display on the left side of screen
  const getMain = () => {
    const mainObject = {};
    mainObject.description = forecast.current.weather[0].description;
    mainObject.location = location;
    mainObject.temp = String(forecast.current.temp);
    mainObject.iconKey = forecast.current.weather[0].icon;
    return mainObject;
  };

  const getDaily = () => {
    const dailyArray = [];
    const daily = forecast.daily;

    const daysOfWeek = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
    };

    const eachDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)({
      start: new Date(),
      end: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(new Date(), 1),
    });

    eachDay.forEach((day, index) => {
      if (index == 0) {
        return;
      }
      const forecastObj = {
        weekDay: daysOfWeek[(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(day)],
        tempHigh: daily[index].temp.max,
        tempLow: daily[index].temp.min,
        icon: daily[index].weather[0].icon,
      };
      dailyArray.push(forecastObj);
    });
    return dailyArray;
  };

  return {getMain, getDetails, getDaily};
};




/***/ }),

/***/ "./src/images/brokenCloudDay.png":
/*!***************************************!*\
  !*** ./src/images/brokenCloudDay.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c52208377bc5ef9fa7c.png";

/***/ }),

/***/ "./src/images/celsius.png":
/*!********************************!*\
  !*** ./src/images/celsius.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ddcd71f8c6f137b3cc2c.png";

/***/ }),

/***/ "./src/images/clearNight.png":
/*!***********************************!*\
  !*** ./src/images/clearNight.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c2312b6e522fa54baca9.png";

/***/ }),

/***/ "./src/images/clearday.png":
/*!*********************************!*\
  !*** ./src/images/clearday.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "53b31af41caf2a8f8f06.png";

/***/ }),

/***/ "./src/images/cloudyDay.png":
/*!**********************************!*\
  !*** ./src/images/cloudyDay.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "357385f6fa91f452c9dd.png";

/***/ }),

/***/ "./src/images/cloudynight.png":
/*!************************************!*\
  !*** ./src/images/cloudynight.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "25747838388ef2cf71a5.png";

/***/ }),

/***/ "./src/images/drizzle.png":
/*!********************************!*\
  !*** ./src/images/drizzle.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2374fc22bd87985a2d5a.png";

/***/ }),

/***/ "./src/images/haze.png":
/*!*****************************!*\
  !*** ./src/images/haze.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7dd8da79142eecc6cad0.png";

/***/ }),

/***/ "./src/images/rainyDay.png":
/*!*********************************!*\
  !*** ./src/images/rainyDay.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ad1922350d50a0efd033.png";

/***/ }),

/***/ "./src/images/rainyNight.png":
/*!***********************************!*\
  !*** ./src/images/rainyNight.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8413f5b7af0924d0a606.png";

/***/ }),

/***/ "./src/images/scatteredClouds.png":
/*!****************************************!*\
  !*** ./src/images/scatteredClouds.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2e4634f0a7e664af30d5.png";

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f71fba615ea1accf268b.png";

/***/ }),

/***/ "./src/images/snow.png":
/*!*****************************!*\
  !*** ./src/images/snow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7d54faf1efed2341fab5.png";

/***/ }),

/***/ "./src/images/stormNight.png":
/*!***********************************!*\
  !*** ./src/images/stormNight.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "473f0d437adb73a43e89.png";

/***/ }),

/***/ "./src/images/thunderstorm.png":
/*!*************************************!*\
  !*** ./src/images/thunderstorm.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a8994d3e7c8aeb5b80b7.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/dom */ "./src/dom/dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _app_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/logic */ "./src/app/logic.js");





(0,_dom_dom__WEBPACK_IMPORTED_MODULE_0__.initialSetup)();

(0,_app_logic__WEBPACK_IMPORTED_MODULE_2__.setCurrentForecast)('southport').catch((err) => {
  if (err.name == 'TypeError') {
    console.log('type');
    // handle
  }
});

// call and setup the element in dom

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnVDO0FBQ2xCOztBQUUwQjs7QUFFL0Msc0RBQVk7O0FBRVosOERBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Ryb3AtZG93bi8uL25vZGVfbW9kdWxlcy9jYXBpdGFsaXplL2luZGV4LmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkV2Vla3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lYWNoRGF5T2ZJbnRlcnZhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvYXBwL2ZvcmVjYXN0RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vc3JjL2FwcC9sb2dpYy5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvZG9tL2RvbS5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvaW1hZ2VzL3dlYXRoZXJJY29ucy5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvd2VhdGhlckRhdGEvYXBpUXVlcmllcy5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvd2VhdGhlckRhdGEvZm9yZWNhc3RPYmplY3QuanMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Ryb3AtZG93bi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kcm9wLWRvd24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Ryb3AtZG93bi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Ryb3AtZG93bi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Ryb3AtZG93bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Ryb3AtZG93bi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyaW5nLCBwcmVzZXJ2ZSkge1xuICBpZiAoIXByZXNlcnZlKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zdWJzdHJpbmcoMSk7XG59XG5cbm1vZHVsZS5leHBvcnRzLndvcmRzID0gZnVuY3Rpb24gKHN0cmluZywgcHJlc2VydmUpIHtcbiAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgIHN0cmluZyA9IHN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKD8hXlswLTldKShefFteYS16QS1aXFx1MDBDMC1cXHUwMTdGXFx1MDQwMC1cXHUwNEZGJ10pKFthLXpBLVpcXHUwMEMwLVxcdTAxN0ZcXHUwNDAwLVxcdTA0RkZdKS9nLCBmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBtLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXG52Mi4wIHwgMjAxMTAxMjZcXG5MaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtZmFtaWx5OiAnU3BhY2UgTW9ubycsIG1vbm9zcGFjZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyM2YxZGQ7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3RvZGF5c0ZvcmVjYXN0V3JhcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICBwYWRkaW5nOiA2MHB4O1xcbiAgbWluLXdpZHRoOiA0MHZ3O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiN0b2RheXNGb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuI2ZvcmVjYXN0SW1hZ2VXcmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI3RvZGF5c0ZvcmVjYXN0IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOTBweDtcXG4gIG1heC13aWR0aDogOTBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI2luZm9XcmFwIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMzhweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiNsb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbiN0ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG59XFxuXFxuI3NlYXJjaFdyYXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgbWF4LXdpZHRoOiAxMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIHBhZGRpbmctbGVmdDogMjZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyM2YxZGQ7XFxufVxcblxcbiNzZWFyY2hXcmFwIGltZyB7XFxuICB0b3A6IC00cHg7XFxuICBsZWZ0OiAwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMTZweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuI3NlYXJjaFdyYXAgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiN0ZW1wIGltZyB7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICB3aWR0aDogMThweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLndlYXRoZXJJbmZvV3JhcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jZGV0YWlsc1dyYXAge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3RJdGVtIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLmZvcmVjYXN0SXRlbSBpbWcge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcblxcbiNmb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBncmlkLXJvdy1lbmQ6IC0xO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNkYWlseUl0ZW1XcmFwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMTBweDtcXG4gIG1hcmdpbjogMjVweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG5cXG4jZGFpbHlUZW1wIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMTBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbiNkYWlseUltYWdlV3JhcCBpbWcge1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ud2Vla0RheSB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxudjIuMCB8IDIwMTEwMTI2XFxuTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LWZhbWlseTogJ1NwYWNlIE1vbm8nLCBtb25vc3BhY2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNmMWRkO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxufVxcblxcbiN0b2RheXNGb3JlY2FzdFdyYXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgcGFkZGluZzogNjBweDtcXG4gIG1pbi13aWR0aDogNDB2dztcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jdG9kYXlzRm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbiNmb3JlY2FzdEltYWdlV3JhcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbiN0b2RheXNGb3JlY2FzdCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBtYXgtd2lkdGg6IDkwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNpbmZvV3JhcCB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDM4cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jbG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4jdGVtcCB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxufVxcblxcbiNzZWFyY2hXcmFwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gIG1heC13aWR0aDogMTIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDI2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNmMWRkO1xcbn1cXG5cXG4jc2VhcmNoV3JhcCBpbWcge1xcbiAgdG9wOiAtNHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiNzZWFyY2hXcmFwIGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jdGVtcCBpbWcge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgd2lkdGg6IDE4cHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi53ZWF0aGVySW5mb1dyYXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGdyaWQtZ2FwOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuI2RldGFpbHNXcmFwIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmZvcmVjYXN0SXRlbSB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5mb3JlY2FzdEl0ZW0gaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZ3JpZC1yb3ctZW5kOiAtMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jZGFpbHlJdGVtV3JhcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBtYXJnaW46IDI1cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuI2RhaWx5VGVtcCB7XFxuICB3aWR0aDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDEwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4jZGFpbHlJbWFnZVdyYXAgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWF4LWhlaWdodDogNjBweDtcXG59XFxuXFxuLndlZWtEYXkge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkV2Vla3NcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIHdlZWtzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIHdlZWtzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA0IHdlZWtzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRXZWVrcyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgNClcbiAqIC8vPT4gTW9uIFNlcCAyOSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkV2Vla3MoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHZhciBkYXlzID0gYW1vdW50ICogNztcbiAgcmV0dXJuIGFkZERheXMoZGlydHlEYXRlLCBkYXlzKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVhY2hEYXlPZkludGVydmFsXG4gKiBAY2F0ZWdvcnkgSW50ZXJ2YWwgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBhcnJheSBvZiBkYXRlcyB3aXRoaW4gdGhlIHNwZWNpZmllZCB0aW1lIGludGVydmFsLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBhcnJheSBvZiBkYXRlcyB3aXRoaW4gdGhlIHNwZWNpZmllZCB0aW1lIGludGVydmFsLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgZnVuY3Rpb24gd2FzIHJlbmFtZWQgZnJvbSBgZWFjaERheWAgdG8gYGVhY2hEYXlPZkludGVydmFsYC5cbiAqICAgVGhpcyBjaGFuZ2Ugd2FzIG1hZGUgdG8gbWlycm9yIHRoZSB1c2Ugb2YgdGhlIHdvcmQgXCJpbnRlcnZhbFwiIGluIHN0YW5kYXJkIElTTyA4NjAxOjIwMDQgdGVybWlub2xvZ3k6XG4gKlxuICogICBgYGBcbiAqICAgMi4xLjNcbiAqICAgdGltZSBpbnRlcnZhbFxuICogICBwYXJ0IG9mIHRoZSB0aW1lIGF4aXMgbGltaXRlZCBieSB0d28gaW5zdGFudHNcbiAqICAgYGBgXG4gKlxuICogICBBbHNvLCB0aGlzIGZ1bmN0aW9uIG5vdyBhY2NlcHRzIGFuIG9iamVjdCB3aXRoIGBzdGFydGAgYW5kIGBlbmRgIHByb3BlcnRpZXNcbiAqICAgaW5zdGVhZCBvZiB0d28gYXJndW1lbnRzIGFzIGFuIGludGVydmFsLlxuICogICBUaGlzIGZ1bmN0aW9uIG5vdyB0aHJvd3MgYFJhbmdlRXJyb3JgIGlmIHRoZSBzdGFydCBvZiB0aGUgaW50ZXJ2YWwgaXMgYWZ0ZXIgaXRzIGVuZFxuICogICBvciBpZiBhbnkgZGF0ZSBpbiB0aGUgaW50ZXJ2YWwgaXMgYEludmFsaWQgRGF0ZWAuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGVhY2hEYXkobmV3IERhdGUoMjAxNCwgMCwgMTApLCBuZXcgRGF0ZSgyMDE0LCAwLCAyMCkpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKlxuICogICBlYWNoRGF5T2ZJbnRlcnZhbChcbiAqICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxMCksIGVuZDogbmV3IERhdGUoMjAxNCwgMCwgMjApIH1cbiAqICAgKVxuICogICBgYGBcbiAqXG4gKiBAcGFyYW0ge0ludGVydmFsfSBpbnRlcnZhbCAtIHRoZSBpbnRlcnZhbC4gU2VlIFtJbnRlcnZhbF17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9JbnRlcnZhbH1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnN0ZXA9MV0gLSB0aGUgc3RlcCB0byBpbmNyZW1lbnQgYnkuIFRoZSB2YWx1ZSBzaG91bGQgYmUgbW9yZSB0aGFuIDEuXG4gKiBAcmV0dXJucyB7RGF0ZVtdfSB0aGUgYXJyYXkgd2l0aCBzdGFydHMgb2YgZGF5cyBmcm9tIHRoZSBkYXkgb2YgdGhlIGludGVydmFsIHN0YXJ0IHRvIHRoZSBkYXkgb2YgdGhlIGludGVydmFsIGVuZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5zdGVwYCBtdXN0IGJlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAxXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBUaGUgc3RhcnQgb2YgYW4gaW50ZXJ2YWwgY2Fubm90IGJlIGFmdGVyIGl0cyBlbmRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IERhdGUgaW4gaW50ZXJ2YWwgY2Fubm90IGJlIGBJbnZhbGlkIERhdGVgXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVhY2ggZGF5IGJldHdlZW4gNiBPY3RvYmVyIDIwMTQgYW5kIDEwIE9jdG9iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVhY2hEYXlPZkludGVydmFsKHtcbiAqICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTQsIDksIDYpLFxuICogICBlbmQ6IG5ldyBEYXRlKDIwMTQsIDksIDEwKVxuICogfSlcbiAqIC8vPT4gW1xuICogLy8gICBNb24gT2N0IDA2IDIwMTQgMDA6MDA6MDAsXG4gKiAvLyAgIFR1ZSBPY3QgMDcgMjAxNCAwMDowMDowMCxcbiAqIC8vICAgV2VkIE9jdCAwOCAyMDE0IDAwOjAwOjAwLFxuICogLy8gICBUaHUgT2N0IDA5IDIwMTQgMDA6MDA6MDAsXG4gKiAvLyAgIEZyaSBPY3QgMTAgMjAxNCAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVhY2hEYXlPZkludGVydmFsKGRpcnR5SW50ZXJ2YWwsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBpbnRlcnZhbCA9IGRpcnR5SW50ZXJ2YWwgfHwge307XG4gIHZhciBzdGFydERhdGUgPSB0b0RhdGUoaW50ZXJ2YWwuc3RhcnQpO1xuICB2YXIgZW5kRGF0ZSA9IHRvRGF0ZShpbnRlcnZhbC5lbmQpO1xuICB2YXIgZW5kVGltZSA9IGVuZERhdGUuZ2V0VGltZSgpOyAvLyBUaHJvdyBhbiBleGNlcHRpb24gaWYgc3RhcnQgZGF0ZSBpcyBhZnRlciBlbmQgZGF0ZSBvciBpZiBhbnkgZGF0ZSBpcyBgSW52YWxpZCBEYXRlYFxuXG4gIGlmICghKHN0YXJ0RGF0ZS5nZXRUaW1lKCkgPD0gZW5kVGltZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBpbnRlcnZhbCcpO1xuICB9XG5cbiAgdmFyIGRhdGVzID0gW107XG4gIHZhciBjdXJyZW50RGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgY3VycmVudERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGVwID0gb3B0aW9ucyAmJiAnc3RlcCcgaW4gb3B0aW9ucyA/IE51bWJlcihvcHRpb25zLnN0ZXApIDogMTtcbiAgaWYgKHN0ZXAgPCAxIHx8IGlzTmFOKHN0ZXApKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYG9wdGlvbnMuc3RlcGAgbXVzdCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gMScpO1xuXG4gIHdoaWxlIChjdXJyZW50RGF0ZS5nZXRUaW1lKCkgPD0gZW5kVGltZSkge1xuICAgIGRhdGVzLnB1c2godG9EYXRlKGN1cnJlbnREYXRlKSk7XG4gICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyBzdGVwKTtcbiAgICBjdXJyZW50RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgfVxuXG4gIHJldHVybiBkYXRlcztcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldERheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMgezB8MXwyfDN8NHw1fDZ9IHRoZSBkYXkgb2Ygd2VlaywgMCByZXByZXNlbnRzIFN1bmRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgd2VlayBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5KG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gM1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICByZXR1cm4gZGF5O1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtpY29uc30gZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXJJY29ucy5qcyc7XG5pbXBvcnQgY2Vsc2l1c0ljb24gZnJvbSAnLi4vaW1hZ2VzL2NlbHNpdXMucG5nJztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vaW1hZ2VzL3NlYXJjaC5wbmcnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnY2FwaXRhbGl6ZSc7XG5pbXBvcnQge3NldEN1cnJlbnRGb3JlY2FzdH0gZnJvbSAnLi9sb2dpYyc7XG5cbmNvbnN0IGZvcmVjYXN0R2VuZXJhdG9yID0ge307XG4vLyBzZXRzIHVwIG1haW4gZm9yZWNhc3QgbGVmdCBzaWRlXG5mb3JlY2FzdEdlbmVyYXRvci5nZXRUb2RheXNGb3JlY2FzdEVsZW1lbnQgPSAoZm9yZWNhc3RPYmplY3QpID0+IHtcbiAgY29uc3QgY3VycmVudEZvcmVjYXN0ID0gZm9yZWNhc3RPYmplY3QuZ2V0TWFpbigpO1xuICBjb25zdCBmb3JlY2FzdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9yZWNhc3RXcmFwLmlkID0gJ3RvZGF5c0ZvcmVjYXN0JztcblxuICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoY3VycmVudEZvcmVjYXN0KSkge1xuICAgIGlmIChrZXkgIT0gJ2ljb25LZXknICYmIGtleSAhPSAnaWQnKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdEl0ZW0nKTtcbiAgICAgIGNvbnRhaW5lci5pZCA9IGtleTtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlckluZm9XcmFwJyk7XG5cbiAgICAgIGlmIChrZXkgIT0gJ2xvY2F0aW9uJykge1xuICAgICAgICB3cmFwcGVyLmlubmVyVGV4dCA9IGNhcGl0YWxpemUud29yZHModmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXIuaW5uZXJUZXh0ID0gdmFsO1xuICAgICAgfVxuICAgICAgY29udGFpbmVyLmFwcGVuZCh3cmFwcGVyKTtcblxuICAgICAgaWYgKGtleSA9PSAndGVtcCcpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gY2Vsc2l1c0ljb247XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICB9XG4gICAgICBmb3JlY2FzdFdyYXAuYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PSAnaWNvbktleScpIHtcbiAgICAgIGNvbnN0IGltZ1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGltZ1dyYXAuaWQgPSAnZm9yZWNhc3RJbWFnZVdyYXAnO1xuICAgICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgaWNvbi5zcmMgPSBpY29uc1t2YWxdO1xuICAgICAgaW1nV3JhcC5hcHBlbmQoaWNvbik7XG4gICAgICBmb3JlY2FzdFdyYXAuYXBwZW5kKGltZ1dyYXApO1xuICAgIH1cbiAgfVxuICBjb25zdCBzZWFyY2hXcmFwID0gZ2V0U2VhcmNoV3JhcCgpO1xuICBmb3JlY2FzdFdyYXAuYXBwZW5kKHNlYXJjaFdyYXApO1xuICByZXR1cm4gZm9yZWNhc3RXcmFwO1xufTtcbi8vIHNldHMgdXAgdG9kYXlzIGRldGFpbHMgb24gdGhlIHJpZ2h0IHNpZGVcbmZvcmVjYXN0R2VuZXJhdG9yLmdldFRvZGF5c0RldGFpbHMgPSAoZm9yZWNhc3RPYmplY3QpID0+IHtcbiAgY29uc3QgZm9yZWNhc3RJbmZvID0gZm9yZWNhc3RPYmplY3QuZ2V0RGV0YWlscygpO1xuICBjb25zb2xlLmxvZyhmb3JlY2FzdEluZm8pO1xuICBjb25zdCBkZXRhaWxzV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXRhaWxzV3JhcC5pZCA9ICdkZXRhaWxzV3JhcCc7XG5cbiAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGZvcmVjYXN0SW5mbykpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lclRpdGxlJyk7XG4gICAgY29udGFpbmVyVGl0bGUuaW5uZXJUZXh0ID0ga2V5O1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdEl0ZW0nKTtcbiAgICBjb250YWluZXIuaW5uZXJUZXh0ID0gdmFsO1xuICAgIGlmIChrZXkgPT0gJ0ZlZWxzIExpa2UnKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uuc3JjID0gY2Vsc2l1c0ljb247XG4gICAgICBjb250YWluZXIuYXBwZW5kKGltYWdlKTtcbiAgICB9XG4gICAgZGV0YWlsc1dyYXAuYXBwZW5kKGNvbnRhaW5lclRpdGxlKTtcbiAgICBkZXRhaWxzV3JhcC5hcHBlbmQoY29udGFpbmVyKTtcbiAgfVxuXG4gIHJldHVybiBkZXRhaWxzV3JhcDtcbn07XG4vLyBzZXRzIHVwIHRoZSBmb290ZXIgZm9yIGRpc3BsYXlpbmcgZGFpbHkgZm9yZWNhc3RcbmZvcmVjYXN0R2VuZXJhdG9yLmdldERhaWx5ID0gKGZvcmVjYXN0QXJyYXkpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5pZCA9ICdmb290ZXInO1xuXG4gIGNvbnN0IGFyciA9IGZvcmVjYXN0QXJyYXkuZ2V0RGFpbHkoKTtcblxuICBmb3IgKGxldCB4ID0gMDsgeCA8IGFyci5sZW5ndGg7IHgrKykge1xuICAgIGNvbnN0IGN1cnJlbnRGb3JlY2FzdEl0ZW0gPSBhcnJbeF07XG4gICAgY29uc3QgZGFpbHlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGFpbHlJdGVtV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGN1cnJlbnRGb3JlY2FzdEl0ZW0pKSB7XG4gICAgICBkYWlseUl0ZW1XcmFwLmlkID0gJ2RhaWx5SXRlbVdyYXAnO1xuICAgICAgaWYgKGtleSAhPSAnaWNvbicpIHtcbiAgICAgICAgY29uc3QgdGV4dFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dFdyYXAuaWQgPSAnZGFpbHlUZXh0JztcbiAgICAgICAgdGV4dFdyYXAuY2xhc3NMaXN0LmFkZChrZXkpO1xuICAgICAgICB0ZXh0V3JhcC5pbm5lclRleHQgPSB2YWw7XG4gICAgICAgIGRhaWx5SXRlbVdyYXAuYXBwZW5kKHRleHRXcmFwKTtcblxuICAgICAgICBpZiAoa2V5ID09ICd0ZW1wTG93JyB8fCBrZXkgPT0gJ3RlbXBIaWdoJykge1xuICAgICAgICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpY29uLnNyYyA9IGNlbHNpdXNJY29uO1xuICAgICAgICAgIGljb24uaWQgPSAnZGFpbHlUZW1wJztcbiAgICAgICAgICB0ZXh0V3JhcC5hcHBlbmQoaWNvbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGtleSA9PSAnaWNvbicpIHtcbiAgICAgICAgY29uc3QgaW1nV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbWdXcmFwLmlkID0gJ2RhaWx5SW1hZ2VXcmFwJztcbiAgICAgICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpY29uLnNyYyA9IGljb25zW3ZhbF07XG4gICAgICAgIGltZ1dyYXAuYXBwZW5kKGljb24pO1xuICAgICAgICBkYWlseUl0ZW1XcmFwLmFwcGVuZChpbWdXcmFwKTtcbiAgICAgIH1cbiAgICAgIGRhaWx5V3JhcC5hcHBlbmQoZGFpbHlJdGVtV3JhcCk7XG4gICAgfVxuXG4gICAgZm9vdGVyLmFwcGVuZChkYWlseVdyYXApO1xuICB9XG4gIHJldHVybiBmb290ZXI7XG59O1xuLy8gaGVscGVyIC0gc2V0cyB1cCBhbmQgcmV0dXJucyBzZWFyY2hib3hcbmNvbnN0IGdldFNlYXJjaFdyYXAgPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoV3JhcC5pZCA9ICdzZWFyY2hXcmFwJztcblxuICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hCb3gudHlwZSA9ICd0ZXh0JztcbiAgc2VhcmNoQm94LnBsYWNlaG9sZGVyID0gJ0V4OiBMaXZlcnBvb2wsIEdCJztcbiAgc2VhcmNoQm94LmlkID0gJ3NlYXJjaEJveCc7XG5cbiAgY29uc3Qgc2VhcmNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBzZWFyY2hJY29uLnNyYyA9IHNlYXJjaDtcblxuICBzZWFyY2hXcmFwLmFwcGVuZChzZWFyY2hCb3gpO1xuICBzZWFyY2hXcmFwLmFwcGVuZChzZWFyY2hJY29uKTtcblxuICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldEN1cnJlbnRGb3JlY2FzdChzZWFyY2hCb3gudmFsdWUpO1xuICB9KTtcblxuICBzZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ICE9ICdFbnRlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0Q3VycmVudEZvcmVjYXN0KHNlYXJjaEJveC52YWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiBzZWFyY2hXcmFwO1xufTtcblxuZXhwb3J0IHtmb3JlY2FzdEdlbmVyYXRvcn07XG4iLCJpbXBvcnQge2Rpc3BsYXlGb3JlY2FzdH0gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQge2ZvcmVjYXN0R2VuZXJhdG9yfSBmcm9tICcuL2ZvcmVjYXN0RWxlbWVudHMnO1xuaW1wb3J0IHtnZXRUb2RheXNGb3JlY2FzdH0gZnJvbSAnLi4vd2VhdGhlckRhdGEvYXBpUXVlcmllcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEN1cnJlbnRGb3JlY2FzdChsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHRvZGF5c0ZvcmVjYXN0ID0gYXdhaXQgZ2V0VG9kYXlzRm9yZWNhc3QobG9jYXRpb24pO1xuICAgIGNvbnN0IGN1cnJlbnRmb3JlY2FzdCA9XG4gICAgICBmb3JlY2FzdEdlbmVyYXRvci5nZXRUb2RheXNGb3JlY2FzdEVsZW1lbnQodG9kYXlzRm9yZWNhc3QpO1xuICAgIGNvbnN0IGV4dHJhSW5mbyA9IGZvcmVjYXN0R2VuZXJhdG9yLmdldFRvZGF5c0RldGFpbHModG9kYXlzRm9yZWNhc3QpO1xuICAgIGNvbnN0IGRhaWx5ID0gZm9yZWNhc3RHZW5lcmF0b3IuZ2V0RGFpbHkodG9kYXlzRm9yZWNhc3QpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheXNGb3JlY2FzdFdyYXAnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkaXNwbGF5Rm9yZWNhc3QoY3VycmVudGZvcmVjYXN0KTtcbiAgICBkaXNwbGF5Rm9yZWNhc3QoZXh0cmFJbmZvKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyJykucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmQoZGFpbHkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hCb3gnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hCb3gnKS5wbGFjZWhvbGRlciA9ICdMb2NhdGlvbiBub3QgZm91bmQuJztcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IHtzZXRDdXJyZW50Rm9yZWNhc3R9O1xuIiwiXG5mdW5jdGlvbiBpbml0aWFsU2V0dXAoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb25zdCB0b2RheXNGb3JlY2FzdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kYXlzRm9yZWNhc3RXcmFwLmlkID0gJ3RvZGF5c0ZvcmVjYXN0V3JhcCc7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mby5pZCA9ICdpbmZvV3JhcCc7XG4gIGNvbnN0IGRhaWx5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYWlseVdyYXBwZXIuaWQgPSAnZGFpbHlXcmFwcGVyJztcbiAgLy8gY29udGVudC5hcHBlbmQoaW5mbyk7XG4gIGNvbnRlbnQuYXBwZW5kKHRvZGF5c0ZvcmVjYXN0V3JhcCk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuaWQgPSAnZm9vdGVyJztcbiAgY29udGVudC5hcHBlbmQoZm9vdGVyKTtcbn1cblxuY29uc3QgZGlzcGxheUZvcmVjYXN0ID0gKGZvcmVjYXN0KSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheXNGb3JlY2FzdFdyYXAnKS5hcHBlbmQoZm9yZWNhc3QpO1xufTtcblxuZXhwb3J0IHtpbml0aWFsU2V0dXAsIGRpc3BsYXlGb3JlY2FzdH07XG4iLCJpbXBvcnQgc3VuIGZyb20gJy4vY2xlYXJkYXkucG5nJztcbmltcG9ydCBtb29uIGZyb20gJy4vY2xlYXJOaWdodC5wbmcnO1xuaW1wb3J0IGNsb3VkeURheSBmcm9tICcuL2Nsb3VkeURheS5wbmcnO1xuaW1wb3J0IHNub3cgZnJvbSAnLi9zbm93LnBuZyc7XG5pbXBvcnQgZHJpenpsZSBmcm9tICcuL2RyaXp6bGUucG5nJztcbmltcG9ydCBoYXplIGZyb20gJy4vaGF6ZS5wbmcnO1xuaW1wb3J0IHRodW5kZXJzdG9ybSBmcm9tICcuL3RodW5kZXJzdG9ybS5wbmcnO1xuaW1wb3J0IGNsb3VkeW5pZ2h0IGZyb20gJy4vY2xvdWR5bmlnaHQucG5nJztcbmltcG9ydCBzY2F0dGVyZWRDbG91ZCBmcm9tICcuL3NjYXR0ZXJlZENsb3Vkcy5wbmcnO1xuaW1wb3J0IHN0b3JteU5pZ2h0IGZyb20gJy4vc3Rvcm1OaWdodC5wbmcnO1xuaW1wb3J0IGJyb2tlbkNsb3VkRGF5IGZyb20gJy4vYnJva2VuQ2xvdWREYXkucG5nJztcbmltcG9ydCByYWluRGF5IGZyb20gJy4vcmFpbnlEYXkucG5nJztcbmltcG9ydCByYWluTmlnaHQgZnJvbSAnLi9yYWlueU5pZ2h0LnBuZyc7XG5cbmNvbnN0IGljb25zID0ge1xuXG4gIC8vIG4gPSBuaWdodFxuICAvLyBkID0gZGF5XG5cbiAgJzAxZCc6IHN1bixcbiAgJzAxbic6IG1vb24sXG5cbiAgJzAyZCc6IGNsb3VkeURheSxcbiAgJzAybic6IGNsb3VkeW5pZ2h0LFxuXG4gICcwM2QnOiBzY2F0dGVyZWRDbG91ZCxcbiAgJzAzbic6IHNjYXR0ZXJlZENsb3VkLFxuXG4gICcwNGQnOiBicm9rZW5DbG91ZERheSxcbiAgJzA0bic6IGNsb3VkeW5pZ2h0LFxuXG4gICc1MGQnOiBoYXplLFxuICAnNTBuJzogaGF6ZSxcblxuICAnMTBkJzogcmFpbkRheSxcbiAgJzEwbic6IHJhaW5OaWdodCxcblxuICAnMTNkJzogc25vdyxcbiAgJzEzbic6IHNub3csXG5cbiAgJzA5ZCc6IGRyaXp6bGUsXG4gICcwOW4nOiBkcml6emxlLFxuXG4gICcxMWQnOiB0aHVuZGVyc3Rvcm0sXG4gICcxMW4nOiBzdG9ybXlOaWdodCxcblxufTtcblxuZXhwb3J0IHtpY29uc307XG4iLCJpbXBvcnQge0dldEZvcmVjYXN0T2JqZWN0fSBmcm9tICcuL2ZvcmVjYXN0T2JqZWN0JztcblxuY29uc3Qga2V5ID0gJzViZTIxYjdmNDlhZWQ2MTY1NDA3ZmU1M2I0OWViYTgxJztcblxuLy8gcmV0dXJucyB0aGUgY29vcmRzIG9mIGEgbG9jYXRpb25cbi8vIG9uZWNhbGwgcmVxdWlyZXMgY29vcmRzIGluc3RlYWQgb2YgbG9jYXRpb25cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRzQW5kTG9jYXRpb24obG9jYXRpb24pIHtcbiAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPSR7a2V5fSZ1bml0cz1tZXRyaWNgLFxuICAgICAge21vZGU6ICdjb3JzJ30sXG4gICk7XG4gIGNvbnN0IGxvY2F0aW9uRGF0YUpzb24gPSBhd2FpdCBsb2NhdGlvbkRhdGEuanNvbigpO1xuICBjb25zdCBsb2NhdGlvbk5hbWUgPVxuICAgIGxvY2F0aW9uRGF0YUpzb24ubmFtZSArICcsICcgKyBsb2NhdGlvbkRhdGFKc29uLnN5c1snY291bnRyeSddO1xuICByZXR1cm4gW2xvY2F0aW9uRGF0YUpzb24uY29vcmQubGF0LCBsb2NhdGlvbkRhdGFKc29uLmNvb3JkLmxvbiwgbG9jYXRpb25OYW1lXTtcbn1cblxuLy8gcmV0dXJucyBhbGwgcmVxdWlyZWQgZGF0YSBpbiBhIHNpbmdsZSBjYWxsXG5hc3luYyBmdW5jdGlvbiBvbmVDYWxsKGxvY2F0aW9uKSB7XG4gIGNvbnN0IGNvb3JkcyA9IGF3YWl0IGdldENvb3Jkc0FuZExvY2F0aW9uKGxvY2F0aW9uKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYCBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2Nvb3Jkc1swXX0mbG9uPSR7Y29vcmRzWzFdfSZhcHBpZD0ke2tleX0mdW5pdHM9bWV0cmljYCxcbiAgICAgIHttb2RlOiAnY29ycyd9LFxuICApO1xuICByZXR1cm4gW2RhdGEsIGNvb3Jkc1syXV07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRvZGF5c0ZvcmVjYXN0KGxvY2F0aW9uKSB7XG4gIGNvbnN0IGFsbEZvcmVjYXN0RGF0YSA9IGF3YWl0IG9uZUNhbGwobG9jYXRpb24pO1xuICBjb25zdCBmb3JlY2FzdEpzb24gPSBhd2FpdCBhbGxGb3JlY2FzdERhdGFbMF0uanNvbigpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3LWNhcFxuICBjb25zdCB0b2RheXNGb3JlY2FzdCA9IEdldEZvcmVjYXN0T2JqZWN0KGZvcmVjYXN0SnNvbiwgYWxsRm9yZWNhc3REYXRhWzFdKTtcbiAgcmV0dXJuIHRvZGF5c0ZvcmVjYXN0O1xufVxuXG5leHBvcnQge2dldFRvZGF5c0ZvcmVjYXN0fTtcbiIsImltcG9ydCB7Z2V0RGF5LCBhZGRXZWVrcywgZWFjaERheU9mSW50ZXJ2YWx9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgR2V0Rm9yZWNhc3RPYmplY3QgPSAoZm9yZWNhc3QsIGxvY2F0aW9uKSA9PiB7XG4gIC8vIHJldHVybnMgdGhlIGRldGFpbHMgZm9yIGRpc3BsYXkgb24gdGhlIHJpZ2h0IHNpZGVcblxuICBjb25zdCBnZXREZXRhaWxzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5PYmplY3QgPSB7fTtcbiAgICBtYWluT2JqZWN0WydGZWVscyBMaWtlJ10gPSBmb3JlY2FzdC5jdXJyZW50WydmZWVsc19saWtlJ107XG4gICAgbWFpbk9iamVjdFsnSHVtaWRpdHknXSA9IGZvcmVjYXN0LmN1cnJlbnQuaHVtaWRpdHkgKyAnJSc7XG4gICAgbWFpbk9iamVjdFsnV2luZCBTcGVlZCddID1cbiAgICAgIE51bWJlci5wYXJzZUZsb2F0KGZvcmVjYXN0LmN1cnJlbnRbJ3dpbmRfc3BlZWQnXSAqIDIuMjM3KS50b1ByZWNpc2lvbigyKSArXG4gICAgICAnIG0vcGgnO1xuICAgIG1haW5PYmplY3RbJ0NoYW5jZSBPZiBSYWluJ10gPSBmb3JlY2FzdC5ob3VybHlbMF0ucG9wICsgJyUnO1xuICAgIHJldHVybiBtYWluT2JqZWN0O1xuICB9O1xuICAvLyByZXR1cm5zIHRoZSBtYWluIGZvcmVjYXN0IG9iamVjdCBmb3IgZGlzcGxheSBvbiB0aGUgbGVmdCBzaWRlIG9mIHNjcmVlblxuICBjb25zdCBnZXRNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5PYmplY3QgPSB7fTtcbiAgICBtYWluT2JqZWN0LmRlc2NyaXB0aW9uID0gZm9yZWNhc3QuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIG1haW5PYmplY3QubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICBtYWluT2JqZWN0LnRlbXAgPSBTdHJpbmcoZm9yZWNhc3QuY3VycmVudC50ZW1wKTtcbiAgICBtYWluT2JqZWN0Lmljb25LZXkgPSBmb3JlY2FzdC5jdXJyZW50LndlYXRoZXJbMF0uaWNvbjtcbiAgICByZXR1cm4gbWFpbk9iamVjdDtcbiAgfTtcblxuICBjb25zdCBnZXREYWlseSA9ICgpID0+IHtcbiAgICBjb25zdCBkYWlseUFycmF5ID0gW107XG4gICAgY29uc3QgZGFpbHkgPSBmb3JlY2FzdC5kYWlseTtcblxuICAgIGNvbnN0IGRheXNPZldlZWsgPSB7XG4gICAgICAwOiAnU3VuZGF5JyxcbiAgICAgIDE6ICdNb25kYXknLFxuICAgICAgMjogJ1R1ZXNkYXknLFxuICAgICAgMzogJ1dlZG5lc2RheScsXG4gICAgICA0OiAnVGh1cnNkYXknLFxuICAgICAgNTogJ0ZyaWRheScsXG4gICAgICA2OiAnU2F0dXJkYXknLFxuICAgIH07XG5cbiAgICBjb25zdCBlYWNoRGF5ID0gZWFjaERheU9mSW50ZXJ2YWwoe1xuICAgICAgc3RhcnQ6IG5ldyBEYXRlKCksXG4gICAgICBlbmQ6IGFkZFdlZWtzKG5ldyBEYXRlKCksIDEpLFxuICAgIH0pO1xuXG4gICAgZWFjaERheS5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBmb3JlY2FzdE9iaiA9IHtcbiAgICAgICAgd2Vla0RheTogZGF5c09mV2Vla1tnZXREYXkoZGF5KV0sXG4gICAgICAgIHRlbXBIaWdoOiBkYWlseVtpbmRleF0udGVtcC5tYXgsXG4gICAgICAgIHRlbXBMb3c6IGRhaWx5W2luZGV4XS50ZW1wLm1pbixcbiAgICAgICAgaWNvbjogZGFpbHlbaW5kZXhdLndlYXRoZXJbMF0uaWNvbixcbiAgICAgIH07XG4gICAgICBkYWlseUFycmF5LnB1c2goZm9yZWNhc3RPYmopO1xuICAgIH0pO1xuICAgIHJldHVybiBkYWlseUFycmF5O1xuICB9O1xuXG4gIHJldHVybiB7Z2V0TWFpbiwgZ2V0RGV0YWlscywgZ2V0RGFpbHl9O1xufTtcblxuZXhwb3J0IHtHZXRGb3JlY2FzdE9iamVjdH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7aW5pdGlhbFNldHVwfSBmcm9tICcuL2RvbS9kb20nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7c2V0Q3VycmVudEZvcmVjYXN0fSBmcm9tICcuL2FwcC9sb2dpYyc7XG5cbmluaXRpYWxTZXR1cCgpO1xuXG5zZXRDdXJyZW50Rm9yZWNhc3QoJ3NvdXRocG9ydCcpLmNhdGNoKChlcnIpID0+IHtcbiAgaWYgKGVyci5uYW1lID09ICdUeXBlRXJyb3InKSB7XG4gICAgY29uc29sZS5sb2coJ3R5cGUnKTtcbiAgICAvLyBoYW5kbGVcbiAgfVxufSk7XG5cbi8vIGNhbGwgYW5kIHNldHVwIHRoZSBlbGVtZW50IGluIGRvbVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9