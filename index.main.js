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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n    display: block;\n}\nbody {\n    line-height: 1;\n    font-family: 'Space Mono', monospace;\n}\nol, ul {\n    list-style: none;\n}\nblockquote, q {\n    quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n#content {\n\ndisplay: grid;\ngrid-template-rows:  1fr ;\ngrid-template-columns:  1fr ;\nheight: 100vh;\nwidth:100vw;\n\n}\n\n#todaysForecastWrap {\n\n\n    display: grid;\n    grid-template-columns: 1fr;\n    align-items: start;\n    align-content: start;\n    justify-content: start;\n    justify-items: start;\n    padding:60px;\n\n}\n\n#todaysForecast {\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: 1fr;\n    margin: 20px;  \n}\n\n#forecastImageWrap {\n\n    display: grid;   \n    grid-template-columns: 1fr;\n    justify-items: start;\n    justify-content: start;\n}\n\n#todaysForecast img {\n\n    width:100%;\n    height:80px;\n    max-width: 80px;\n    justify-self: start;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  \n}\n\n#infoWrap {\n\n    margin:10px;\n    border:solid 1px;\n    display: grid;\n}\n\n#detailsWrap {\n\n    border: solid 1px;\n    justify-self: end;\n    \n\n}\n\n#description {\n  \n    font-size: 36px;\n    font-weight: 900;\n}\n\n#location {\n\n    font-size: 18px;\n}\n\n#temp {\n\n    font-size: 24px;\n    font-weight: 200;\n    display: grid;\n    grid-template-columns: auto 1fr; \n}\n\n#searchWrap{\n\n    position: relative;\n}\n\ninput[type=\"text\"] {\n    max-width: 120px;\n    border:none;\n    border-bottom:solid 1px;\n    padding:6px;\n    padding-left: 26px;\n}\n\n#searchWrap img {\n    top:-4px;\n    left:0px;\n    width:auto;\n    height:16px;\n    position: absolute;\n}\n\n#searchWrap img:hover {\n\n    cursor: pointer;\n}\n\ninput:focus, textarea:focus, select:focus{\n    outline: none;\n}\n\n\n#temp img {\n\n    height:18px;\n    width:18px;\n    justify-self: start;\n    align-self: start;\n}\n\n.weatherInfoWrap {\n\n    display: grid; \n    align-content: center;\n    padding:2px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;AACD;;;;;;;;;;;;;IAaI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;AACA,gDAAgD;AAChD;;IAEI,cAAc;AAClB;AACA;IACI,cAAc;IACd,oCAAoC;AACxC;AACA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;AAChB;AACA;;IAEI,WAAW;IACX,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;;AAEA,aAAa;AACb,yBAAyB;AACzB,4BAA4B;AAC5B,aAAa;AACb,WAAW;;AAEX;;AAEA;;;IAGI,aAAa;IACb,0BAA0B;IAC1B,kBAAkB;IAClB,oBAAoB;IACpB,sBAAsB;IACtB,oBAAoB;IACpB,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;;IAEI,UAAU;IACV,WAAW;IACX,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;;AAEvB;;AAEA;;IAEI,WAAW;IACX,gBAAgB;IAChB,aAAa;AACjB;;AAEA;;IAEI,iBAAiB;IACjB,iBAAiB;;;AAGrB;;AAEA;;IAEI,eAAe;IACf,gBAAgB;AACpB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;;IAEI,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,+BAA+B;AACnC;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,uBAAuB;IACvB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,QAAQ;IACR,QAAQ;IACR,UAAU;IACV,WAAW;IACX,kBAAkB;AACtB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;;AAGA;;IAEI,WAAW;IACX,UAAU;IACV,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,qBAAqB;IACrB,WAAW;AACf","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n    display: block;\n}\nbody {\n    line-height: 1;\n    font-family: 'Space Mono', monospace;\n}\nol, ul {\n    list-style: none;\n}\nblockquote, q {\n    quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n#content {\n\ndisplay: grid;\ngrid-template-rows:  1fr ;\ngrid-template-columns:  1fr ;\nheight: 100vh;\nwidth:100vw;\n\n}\n\n#todaysForecastWrap {\n\n\n    display: grid;\n    grid-template-columns: 1fr;\n    align-items: start;\n    align-content: start;\n    justify-content: start;\n    justify-items: start;\n    padding:60px;\n\n}\n\n#todaysForecast {\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: 1fr;\n    margin: 20px;  \n}\n\n#forecastImageWrap {\n\n    display: grid;   \n    grid-template-columns: 1fr;\n    justify-items: start;\n    justify-content: start;\n}\n\n#todaysForecast img {\n\n    width:100%;\n    height:80px;\n    max-width: 80px;\n    justify-self: start;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  \n}\n\n#infoWrap {\n\n    margin:10px;\n    border:solid 1px;\n    display: grid;\n}\n\n#detailsWrap {\n\n    border: solid 1px;\n    justify-self: end;\n    \n\n}\n\n#description {\n  \n    font-size: 36px;\n    font-weight: 900;\n}\n\n#location {\n\n    font-size: 18px;\n}\n\n#temp {\n\n    font-size: 24px;\n    font-weight: 200;\n    display: grid;\n    grid-template-columns: auto 1fr; \n}\n\n#searchWrap{\n\n    position: relative;\n}\n\ninput[type=\"text\"] {\n    max-width: 120px;\n    border:none;\n    border-bottom:solid 1px;\n    padding:6px;\n    padding-left: 26px;\n}\n\n#searchWrap img {\n    top:-4px;\n    left:0px;\n    width:auto;\n    height:16px;\n    position: absolute;\n}\n\n#searchWrap img:hover {\n\n    cursor: pointer;\n}\n\ninput:focus, textarea:focus, select:focus{\n    outline: none;\n}\n\n\n#temp img {\n\n    height:18px;\n    width:18px;\n    justify-self: start;\n    align-self: start;\n}\n\n.weatherInfoWrap {\n\n    display: grid; \n    align-content: center;\n    padding:2px;\n}\n"],"sourceRoot":""}]);
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






const celsius = new Image();
celsius.src = _images_celsius_png__WEBPACK_IMPORTED_MODULE_1__;
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
        container.appendChild(celsius);
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

// sets up todays details on the right side
forecastGenerator.getTodaysDetails = (forecastObject) => {
  const forecastInfo = forecastObject.getDetails();
  const detailsWrap = document.createElement('div');
  detailsWrap.id = 'detailsWrap';

  for (const [key, val] of Object.entries(forecastInfo)) {
    const container = document.createElement('div');
    container.classList.add('forecastItem');
    container.id = key;
    container.innerText = val;
    detailsWrap.append(container);
  }

  // document.querySelector('#infoWrap').append(detailsWrap);
};

//

forecastGenerator.getHourlyElements = (elementArr) => {
  // loop through elements creating a container for each one
  // append to wrapper
  // return wrapper

  forecastGenerator.getDailyElements = (elementArr) => {
    // loop through elements creating a container for each one
    // append to wrapper
    // return wrapper
  };
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
    document.querySelector('#todaysForecastWrap').innerHTML = '';
    (0,_dom_dom__WEBPACK_IMPORTED_MODULE_0__.displayForecast)(currentforecast);
    // elementGenerator.getTodaysDetails(todaysForecast);
  } catch (err) {
    document.querySelector('#searchBox').value = '';
    document.querySelector('#searchBox').placeholder =
      'Location not found.';
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
const key = '5be21b7f49aed6165407fe53b49eba81';

const GetForecastObject = (forecast, location) => {
  // returns the details for display on the right side
  /*
  const getDetails = () => {
    const mainObject = {};
    mainObject.feel = forecast.current['feels_like'] + 'c';
    mainObject.humidity = forecast.current.humidity;
    mainObject.windSpeed = forecast.hourly[0]['wind_gust'];
    mainObject.rainChance = forecast.hourly[0].pop;
    return mainObject;
  };
*/
  // returns the main forecast object for display on the left side of screen
  const getMain = () => {
    const mainObject = {};
    mainObject.description = forecast.current.weather[0].description;
    mainObject.location = location;
    mainObject.temp = String(forecast.current.temp);
    mainObject.iconKey = forecast.current.weather[0].icon;
    return mainObject;
  };

  return {getMain};
};

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
  const todaysForecast = GetForecastObject(forecastJson, allForecastData[1]);

  return todaysForecast;
}




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHFvQkFBcW9CLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHNCQUFzQixvQkFBb0IsK0JBQStCLEdBQUcsZ0pBQWdKLHFCQUFxQixHQUFHLFFBQVEscUJBQXFCLDJDQUEyQyxHQUFHLFVBQVUsdUJBQXVCLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLDJEQUEyRCxrQkFBa0Isb0JBQW9CLEdBQUcsU0FBUyxnQ0FBZ0Msd0JBQXdCLEdBQUcsY0FBYyxrQkFBa0IsNEJBQTRCLCtCQUErQixnQkFBZ0IsY0FBYyxLQUFLLHlCQUF5Qix3QkFBd0IsaUNBQWlDLHlCQUF5QiwyQkFBMkIsNkJBQTZCLDJCQUEyQixtQkFBbUIsS0FBSyxxQkFBcUIsb0JBQW9CLHFCQUFxQixpQ0FBaUMscUJBQXFCLEdBQUcsd0JBQXdCLHlCQUF5QixpQ0FBaUMsMkJBQTJCLDZCQUE2QixHQUFHLHlCQUF5QixtQkFBbUIsa0JBQWtCLHNCQUFzQiwwQkFBMEIsdUJBQXVCLDBCQUEwQixPQUFPLGVBQWUsb0JBQW9CLHVCQUF1QixvQkFBb0IsR0FBRyxrQkFBa0IsMEJBQTBCLHdCQUF3QixXQUFXLGtCQUFrQiwwQkFBMEIsdUJBQXVCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxXQUFXLHdCQUF3Qix1QkFBdUIsb0JBQW9CLHVDQUF1QyxHQUFHLGdCQUFnQiwyQkFBMkIsR0FBRywwQkFBMEIsdUJBQXVCLGtCQUFrQiw4QkFBOEIsa0JBQWtCLHlCQUF5QixHQUFHLHFCQUFxQixlQUFlLGVBQWUsaUJBQWlCLGtCQUFrQix5QkFBeUIsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsOENBQThDLG9CQUFvQixHQUFHLGlCQUFpQixvQkFBb0IsaUJBQWlCLDBCQUEwQix3QkFBd0IsR0FBRyxzQkFBc0IsdUJBQXVCLDRCQUE0QixrQkFBa0IsR0FBRyxTQUFTLGtGQUFrRixLQUFLLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxlQUFlLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFFBQVEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxvbkJBQW9uQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixzQkFBc0Isb0JBQW9CLCtCQUErQixHQUFHLGdKQUFnSixxQkFBcUIsR0FBRyxRQUFRLHFCQUFxQiwyQ0FBMkMsR0FBRyxVQUFVLHVCQUF1QixHQUFHLGlCQUFpQixtQkFBbUIsR0FBRywyREFBMkQsa0JBQWtCLG9CQUFvQixHQUFHLFNBQVMsZ0NBQWdDLHdCQUF3QixHQUFHLGNBQWMsa0JBQWtCLDRCQUE0QiwrQkFBK0IsZ0JBQWdCLGNBQWMsS0FBSyx5QkFBeUIsd0JBQXdCLGlDQUFpQyx5QkFBeUIsMkJBQTJCLDZCQUE2QiwyQkFBMkIsbUJBQW1CLEtBQUsscUJBQXFCLG9CQUFvQixxQkFBcUIsaUNBQWlDLHFCQUFxQixHQUFHLHdCQUF3Qix5QkFBeUIsaUNBQWlDLDJCQUEyQiw2QkFBNkIsR0FBRyx5QkFBeUIsbUJBQW1CLGtCQUFrQixzQkFBc0IsMEJBQTBCLHVCQUF1QiwwQkFBMEIsT0FBTyxlQUFlLG9CQUFvQix1QkFBdUIsb0JBQW9CLEdBQUcsa0JBQWtCLDBCQUEwQix3QkFBd0IsV0FBVyxrQkFBa0IsMEJBQTBCLHVCQUF1QixHQUFHLGVBQWUsd0JBQXdCLEdBQUcsV0FBVyx3QkFBd0IsdUJBQXVCLG9CQUFvQix1Q0FBdUMsR0FBRyxnQkFBZ0IsMkJBQTJCLEdBQUcsMEJBQTBCLHVCQUF1QixrQkFBa0IsOEJBQThCLGtCQUFrQix5QkFBeUIsR0FBRyxxQkFBcUIsZUFBZSxlQUFlLGlCQUFpQixrQkFBa0IseUJBQXlCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLDhDQUE4QyxvQkFBb0IsR0FBRyxpQkFBaUIsb0JBQW9CLGlCQUFpQiwwQkFBMEIsd0JBQXdCLEdBQUcsc0JBQXNCLHVCQUF1Qiw0QkFBNEIsa0JBQWtCLEdBQUcscUJBQXFCO0FBQ3ZwTztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixrQ0FBa0M7O0FBRWxDLDhCQUE4Qjs7QUFFOUIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLLHlDQUF5QywwR0FBMEcsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRW5mLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxtRkFBTyxJQUFJLDBGQUFjLEdBQUcsMEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZnRDtBQUNBO0FBQ047QUFDTjtBQUNPOztBQUUzQztBQUNBLGNBQWMsZ0RBQVc7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qix1REFBZ0I7QUFDNUMsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBEQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLCtDQUFNOztBQUV6QjtBQUNBOztBQUVBO0FBQ0EsSUFBSSwwREFBa0I7QUFDdEIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWtCO0FBQ3RCLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HZ0I7QUFDVTtBQUNPOztBQUU1RDtBQUNBO0FBQ0EsaUNBQWlDLDBFQUFpQjtBQUNsRDtBQUNBLE1BQU0seUZBQTBDO0FBQ2hEO0FBQ0EsSUFBSSx5REFBZTtBQUNuQjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUV1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQk47QUFDRztBQUNJO0FBQ1Y7QUFDTTtBQUNOO0FBQ2dCO0FBQ0Y7QUFDTztBQUNSO0FBQ087QUFDYjtBQUNJOztBQUV6Qzs7QUFFQTtBQUNBOztBQUVBLFNBQVMsMENBQUc7QUFDWixTQUFTLDRDQUFJOztBQUViLFNBQVMsMkNBQVM7QUFDbEIsU0FBUyw2Q0FBVzs7QUFFcEIsU0FBUyxpREFBYztBQUN2QixTQUFTLGlEQUFjOztBQUV2QixTQUFTLGlEQUFjO0FBQ3ZCLFNBQVMsNkNBQVc7O0FBRXBCLFNBQVMsc0NBQUk7QUFDYixTQUFTLHNDQUFJOztBQUViLFNBQVMsMkNBQU87QUFDaEIsU0FBUyw2Q0FBUzs7QUFFbEIsU0FBUyxzQ0FBSTtBQUNiLFNBQVMsc0NBQUk7O0FBRWIsU0FBUyx5Q0FBTztBQUNoQixTQUFTLHlDQUFPOztBQUVoQixTQUFTLDhDQUFZO0FBQ3JCLFNBQVMsNENBQVc7O0FBRXBCOztBQUVlOzs7Ozs7Ozs7Ozs7Ozs7O0FDaERmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELFNBQVMsU0FBUyxJQUFJO0FBQ2hGLE9BQU8sYUFBYTtBQUNwQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxVQUFVLE9BQU8sVUFBVSxTQUFTLElBQUk7QUFDckcsT0FBTyxhQUFhO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUQzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnVDO0FBQ2xCOztBQUUwQjs7QUFFL0Msc0RBQVk7O0FBRVosOERBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Ryb3AtZG93bi8uL25vZGVfbW9kdWxlcy9jYXBpdGFsaXplL2luZGV4LmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvYXBwL2ZvcmVjYXN0RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vc3JjL2FwcC9sb2dpYy5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvZG9tL2RvbS5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvaW1hZ2VzL3dlYXRoZXJJY29ucy5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvd2VhdGhlckRhdGEvYXBpUXVlcmllcy5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Ryb3AtZG93bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Ryb3AtZG93bi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHJpbmcsIHByZXNlcnZlKSB7XG4gIGlmICghcHJlc2VydmUpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnN1YnN0cmluZygxKTtcbn1cblxubW9kdWxlLmV4cG9ydHMud29yZHMgPSBmdW5jdGlvbiAoc3RyaW5nLCBwcmVzZXJ2ZSkge1xuICBpZiAoIXByZXNlcnZlKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oPyFeWzAtOV0pKF58W15hLXpBLVpcXHUwMEMwLVxcdTAxN0ZcXHUwNDAwLVxcdTA0RkYnXSkoW2EtekEtWlxcdTAwQzAtXFx1MDE3RlxcdTA0MDAtXFx1MDRGRl0pL2csIGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIG0udG9VcHBlckNhc2UoKVxuICB9KVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcbnYyLjAgfCAyMDExMDEyNlxcbkxpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgTW9ubycsIG1vbm9zcGFjZTtcXG59XFxub2wsIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuICAgIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgMWZyIDtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICAxZnIgO1xcbmhlaWdodDogMTAwdmg7XFxud2lkdGg6MTAwdnc7XFxuXFxufVxcblxcbiN0b2RheXNGb3JlY2FzdFdyYXAge1xcblxcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIHBhZGRpbmc6NjBweDtcXG5cXG59XFxuXFxuI3RvZGF5c0ZvcmVjYXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBtYXJnaW46IDIwcHg7ICBcXG59XFxuXFxuI2ZvcmVjYXN0SW1hZ2VXcmFwIHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDsgICBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4jdG9kYXlzRm9yZWNhc3QgaW1nIHtcXG5cXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjgwcHg7XFxuICAgIG1heC13aWR0aDogODBweDtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIFxcbn1cXG5cXG4jaW5mb1dyYXAge1xcblxcbiAgICBtYXJnaW46MTBweDtcXG4gICAgYm9yZGVyOnNvbGlkIDFweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI2RldGFpbHNXcmFwIHtcXG5cXG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBcXG5cXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIFxcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiNsb2NhdGlvbiB7XFxuXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI3RlbXAge1xcblxcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7IFxcbn1cXG5cXG4jc2VhcmNoV3JhcHtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTpzb2xpZCAxcHg7XFxuICAgIHBhZGRpbmc6NnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XFxufVxcblxcbiNzZWFyY2hXcmFwIGltZyB7XFxuICAgIHRvcDotNHB4O1xcbiAgICBsZWZ0OjBweDtcXG4gICAgd2lkdGg6YXV0bztcXG4gICAgaGVpZ2h0OjE2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuI3NlYXJjaFdyYXAgaW1nOmhvdmVyIHtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHNlbGVjdDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuI3RlbXAgaW1nIHtcXG5cXG4gICAgaGVpZ2h0OjE4cHg7XFxuICAgIHdpZHRoOjE4cHg7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4ud2VhdGhlckluZm9XcmFwIHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDsgXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzoycHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7SUFhSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHdCQUF3QjtBQUM1QjtBQUNBLGdEQUFnRDtBQUNoRDs7SUFFSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTs7QUFFQSxhQUFhO0FBQ2IseUJBQXlCO0FBQ3pCLDRCQUE0QjtBQUM1QixhQUFhO0FBQ2IsV0FBVzs7QUFFWDs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7QUFFdkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixpQkFBaUI7OztBQUdyQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTs7SUFFSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXG52Mi4wIHwgMjAxMTAxMjZcXG5MaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LWZhbWlseTogJ1NwYWNlIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcbm9sLCB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcbiAgICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXG5kaXNwbGF5OiBncmlkO1xcbmdyaWQtdGVtcGxhdGUtcm93czogIDFmciA7XFxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMWZyIDtcXG5oZWlnaHQ6IDEwMHZoO1xcbndpZHRoOjEwMHZ3O1xcblxcbn1cXG5cXG4jdG9kYXlzRm9yZWNhc3RXcmFwIHtcXG5cXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBwYWRkaW5nOjYwcHg7XFxuXFxufVxcblxcbiN0b2RheXNGb3JlY2FzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgbWFyZ2luOiAyMHB4OyAgXFxufVxcblxcbiNmb3JlY2FzdEltYWdlV3JhcCB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7ICAgXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI3RvZGF5c0ZvcmVjYXN0IGltZyB7XFxuXFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDo4MHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBcXG59XFxuXFxuI2luZm9XcmFwIHtcXG5cXG4gICAgbWFyZ2luOjEwcHg7XFxuICAgIGJvcmRlcjpzb2xpZCAxcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNkZXRhaWxzV3JhcCB7XFxuXFxuICAgIGJvcmRlcjogc29saWQgMXB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgXFxuXFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jbG9jYXRpb24ge1xcblxcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiN0ZW1wIHtcXG5cXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyOyBcXG59XFxuXFxuI3NlYXJjaFdyYXB7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206c29saWQgMXB4O1xcbiAgICBwYWRkaW5nOjZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xcbn1cXG5cXG4jc2VhcmNoV3JhcCBpbWcge1xcbiAgICB0b3A6LTRweDtcXG4gICAgbGVmdDowcHg7XFxuICAgIHdpZHRoOmF1dG87XFxuICAgIGhlaWdodDoxNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiNzZWFyY2hXcmFwIGltZzpob3ZlciB7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbiN0ZW1wIGltZyB7XFxuXFxuICAgIGhlaWdodDoxOHB4O1xcbiAgICB3aWR0aDoxOHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLndlYXRoZXJJbmZvV3JhcCB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6MnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtpY29uc30gZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXJJY29ucy5qcyc7XG5pbXBvcnQgY2Vsc2l1c0ljb24gZnJvbSAnLi4vaW1hZ2VzL2NlbHNpdXMucG5nJztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vaW1hZ2VzL3NlYXJjaC5wbmcnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnY2FwaXRhbGl6ZSc7XG5pbXBvcnQge3NldEN1cnJlbnRGb3JlY2FzdH0gZnJvbSAnLi9sb2dpYyc7XG5cbmNvbnN0IGNlbHNpdXMgPSBuZXcgSW1hZ2UoKTtcbmNlbHNpdXMuc3JjID0gY2Vsc2l1c0ljb247XG5jb25zdCBmb3JlY2FzdEdlbmVyYXRvciA9IHt9O1xuXG4vLyBzZXRzIHVwIG1haW4gZm9yZWNhc3QgbGVmdCBzaWRlXG5mb3JlY2FzdEdlbmVyYXRvci5nZXRUb2RheXNGb3JlY2FzdEVsZW1lbnQgPSAoZm9yZWNhc3RPYmplY3QpID0+IHtcbiAgY29uc3QgY3VycmVudEZvcmVjYXN0ID0gZm9yZWNhc3RPYmplY3QuZ2V0TWFpbigpO1xuICBjb25zdCBmb3JlY2FzdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9yZWNhc3RXcmFwLmlkID0gJ3RvZGF5c0ZvcmVjYXN0JztcblxuICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoY3VycmVudEZvcmVjYXN0KSkge1xuICAgIGlmIChrZXkgIT0gJ2ljb25LZXknICYmIGtleSAhPSAnaWQnKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdEl0ZW0nKTtcbiAgICAgIGNvbnRhaW5lci5pZCA9IGtleTtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlckluZm9XcmFwJyk7XG5cbiAgICAgIGlmIChrZXkgIT0gJ2xvY2F0aW9uJykge1xuICAgICAgICB3cmFwcGVyLmlubmVyVGV4dCA9IGNhcGl0YWxpemUud29yZHModmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXIuaW5uZXJUZXh0ID0gdmFsO1xuICAgICAgfVxuICAgICAgY29udGFpbmVyLmFwcGVuZCh3cmFwcGVyKTtcblxuICAgICAgaWYgKGtleSA9PSAndGVtcCcpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNlbHNpdXMpO1xuICAgICAgfVxuICAgICAgZm9yZWNhc3RXcmFwLmFwcGVuZChjb250YWluZXIpO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT0gJ2ljb25LZXknKSB7XG4gICAgICBjb25zdCBpbWdXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpbWdXcmFwLmlkID0gJ2ZvcmVjYXN0SW1hZ2VXcmFwJztcbiAgICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGljb24uc3JjID0gaWNvbnNbdmFsXTtcbiAgICAgIGltZ1dyYXAuYXBwZW5kKGljb24pO1xuICAgICAgZm9yZWNhc3RXcmFwLmFwcGVuZChpbWdXcmFwKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2VhcmNoV3JhcCA9IGdldFNlYXJjaFdyYXAoKTtcbiAgZm9yZWNhc3RXcmFwLmFwcGVuZChzZWFyY2hXcmFwKTtcbiAgcmV0dXJuIGZvcmVjYXN0V3JhcDtcbn07XG5cbmNvbnN0IGdldFNlYXJjaFdyYXAgPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoV3JhcC5pZCA9ICdzZWFyY2hXcmFwJztcblxuICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hCb3gudHlwZSA9ICd0ZXh0JztcbiAgc2VhcmNoQm94LnBsYWNlaG9sZGVyID0gJ0V4OiBMaXZlcnBvb2wsIEdCJztcbiAgc2VhcmNoQm94LmlkID0gJ3NlYXJjaEJveCc7XG5cbiAgY29uc3Qgc2VhcmNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBzZWFyY2hJY29uLnNyYyA9IHNlYXJjaDtcblxuICBzZWFyY2hXcmFwLmFwcGVuZChzZWFyY2hCb3gpO1xuICBzZWFyY2hXcmFwLmFwcGVuZChzZWFyY2hJY29uKTtcblxuICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldEN1cnJlbnRGb3JlY2FzdChzZWFyY2hCb3gudmFsdWUpO1xuICB9KTtcblxuICBzZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ICE9ICdFbnRlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0Q3VycmVudEZvcmVjYXN0KHNlYXJjaEJveC52YWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiBzZWFyY2hXcmFwO1xufTtcblxuLy8gc2V0cyB1cCB0b2RheXMgZGV0YWlscyBvbiB0aGUgcmlnaHQgc2lkZVxuZm9yZWNhc3RHZW5lcmF0b3IuZ2V0VG9kYXlzRGV0YWlscyA9IChmb3JlY2FzdE9iamVjdCkgPT4ge1xuICBjb25zdCBmb3JlY2FzdEluZm8gPSBmb3JlY2FzdE9iamVjdC5nZXREZXRhaWxzKCk7XG4gIGNvbnN0IGRldGFpbHNXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRldGFpbHNXcmFwLmlkID0gJ2RldGFpbHNXcmFwJztcblxuICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoZm9yZWNhc3RJbmZvKSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdEl0ZW0nKTtcbiAgICBjb250YWluZXIuaWQgPSBrZXk7XG4gICAgY29udGFpbmVyLmlubmVyVGV4dCA9IHZhbDtcbiAgICBkZXRhaWxzV3JhcC5hcHBlbmQoY29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvV3JhcCcpLmFwcGVuZChkZXRhaWxzV3JhcCk7XG59O1xuXG4vL1xuXG5mb3JlY2FzdEdlbmVyYXRvci5nZXRIb3VybHlFbGVtZW50cyA9IChlbGVtZW50QXJyKSA9PiB7XG4gIC8vIGxvb3AgdGhyb3VnaCBlbGVtZW50cyBjcmVhdGluZyBhIGNvbnRhaW5lciBmb3IgZWFjaCBvbmVcbiAgLy8gYXBwZW5kIHRvIHdyYXBwZXJcbiAgLy8gcmV0dXJuIHdyYXBwZXJcblxuICBmb3JlY2FzdEdlbmVyYXRvci5nZXREYWlseUVsZW1lbnRzID0gKGVsZW1lbnRBcnIpID0+IHtcbiAgICAvLyBsb29wIHRocm91Z2ggZWxlbWVudHMgY3JlYXRpbmcgYSBjb250YWluZXIgZm9yIGVhY2ggb25lXG4gICAgLy8gYXBwZW5kIHRvIHdyYXBwZXJcbiAgICAvLyByZXR1cm4gd3JhcHBlclxuICB9O1xufTtcblxuZXhwb3J0IHtmb3JlY2FzdEdlbmVyYXRvcn07XG4iLCJpbXBvcnQge2Rpc3BsYXlGb3JlY2FzdH0gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQge2ZvcmVjYXN0R2VuZXJhdG9yfSBmcm9tICcuL2ZvcmVjYXN0RWxlbWVudHMnO1xuaW1wb3J0IHtnZXRUb2RheXNGb3JlY2FzdH0gZnJvbSAnLi4vd2VhdGhlckRhdGEvYXBpUXVlcmllcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEN1cnJlbnRGb3JlY2FzdChsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHRvZGF5c0ZvcmVjYXN0ID0gYXdhaXQgZ2V0VG9kYXlzRm9yZWNhc3QobG9jYXRpb24pO1xuICAgIGNvbnN0IGN1cnJlbnRmb3JlY2FzdCA9XG4gICAgICBmb3JlY2FzdEdlbmVyYXRvci5nZXRUb2RheXNGb3JlY2FzdEVsZW1lbnQodG9kYXlzRm9yZWNhc3QpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheXNGb3JlY2FzdFdyYXAnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkaXNwbGF5Rm9yZWNhc3QoY3VycmVudGZvcmVjYXN0KTtcbiAgICAvLyBlbGVtZW50R2VuZXJhdG9yLmdldFRvZGF5c0RldGFpbHModG9kYXlzRm9yZWNhc3QpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoQm94JykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoQm94JykucGxhY2Vob2xkZXIgPVxuICAgICAgJ0xvY2F0aW9uIG5vdCBmb3VuZC4nO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQge3NldEN1cnJlbnRGb3JlY2FzdH07XG4iLCJcbmZ1bmN0aW9uIGluaXRpYWxTZXR1cCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnN0IHRvZGF5c0ZvcmVjYXN0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RheXNGb3JlY2FzdFdyYXAuaWQgPSAndG9kYXlzRm9yZWNhc3RXcmFwJztcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvLmlkID0gJ2luZm9XcmFwJztcbiAgY29uc3QgZGFpbHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhaWx5V3JhcHBlci5pZCA9ICdkYWlseVdyYXBwZXInO1xuICAvLyBjb250ZW50LmFwcGVuZChpbmZvKTtcbiAgY29udGVudC5hcHBlbmQodG9kYXlzRm9yZWNhc3RXcmFwKTtcbn1cblxuY29uc3QgZGlzcGxheUZvcmVjYXN0ID0gKGZvcmVjYXN0KSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheXNGb3JlY2FzdFdyYXAnKS5hcHBlbmQoZm9yZWNhc3QpO1xufTtcblxuZXhwb3J0IHtpbml0aWFsU2V0dXAsIGRpc3BsYXlGb3JlY2FzdH07XG4iLCJpbXBvcnQgc3VuIGZyb20gJy4vY2xlYXJkYXkucG5nJztcbmltcG9ydCBtb29uIGZyb20gJy4vY2xlYXJOaWdodC5wbmcnO1xuaW1wb3J0IGNsb3VkeURheSBmcm9tICcuL2Nsb3VkeURheS5wbmcnO1xuaW1wb3J0IHNub3cgZnJvbSAnLi9zbm93LnBuZyc7XG5pbXBvcnQgZHJpenpsZSBmcm9tICcuL2RyaXp6bGUucG5nJztcbmltcG9ydCBoYXplIGZyb20gJy4vaGF6ZS5wbmcnO1xuaW1wb3J0IHRodW5kZXJzdG9ybSBmcm9tICcuL3RodW5kZXJzdG9ybS5wbmcnO1xuaW1wb3J0IGNsb3VkeW5pZ2h0IGZyb20gJy4vY2xvdWR5bmlnaHQucG5nJztcbmltcG9ydCBzY2F0dGVyZWRDbG91ZCBmcm9tICcuL3NjYXR0ZXJlZENsb3Vkcy5wbmcnO1xuaW1wb3J0IHN0b3JteU5pZ2h0IGZyb20gJy4vc3Rvcm1OaWdodC5wbmcnO1xuaW1wb3J0IGJyb2tlbkNsb3VkRGF5IGZyb20gJy4vYnJva2VuQ2xvdWREYXkucG5nJztcbmltcG9ydCByYWluRGF5IGZyb20gJy4vcmFpbnlEYXkucG5nJztcbmltcG9ydCByYWluTmlnaHQgZnJvbSAnLi9yYWlueU5pZ2h0LnBuZyc7XG5cbmNvbnN0IGljb25zID0ge1xuXG4gIC8vIG4gPSBuaWdodFxuICAvLyBkID0gZGF5XG5cbiAgJzAxZCc6IHN1bixcbiAgJzAxbic6IG1vb24sXG5cbiAgJzAyZCc6IGNsb3VkeURheSxcbiAgJzAybic6IGNsb3VkeW5pZ2h0LFxuXG4gICcwM2QnOiBzY2F0dGVyZWRDbG91ZCxcbiAgJzAzbic6IHNjYXR0ZXJlZENsb3VkLFxuXG4gICcwNGQnOiBicm9rZW5DbG91ZERheSxcbiAgJzA0bic6IGNsb3VkeW5pZ2h0LFxuXG4gICc1MGQnOiBoYXplLFxuICAnNTBuJzogaGF6ZSxcblxuICAnMTBkJzogcmFpbkRheSxcbiAgJzEwbic6IHJhaW5OaWdodCxcblxuICAnMTNkJzogc25vdyxcbiAgJzEzbic6IHNub3csXG5cbiAgJzA5ZCc6IGRyaXp6bGUsXG4gICcwOW4nOiBkcml6emxlLFxuXG4gICcxMWQnOiB0aHVuZGVyc3Rvcm0sXG4gICcxMW4nOiBzdG9ybXlOaWdodCxcblxufTtcblxuZXhwb3J0IHtpY29uc307XG4iLCJjb25zdCBrZXkgPSAnNWJlMjFiN2Y0OWFlZDYxNjU0MDdmZTUzYjQ5ZWJhODEnO1xuXG5jb25zdCBHZXRGb3JlY2FzdE9iamVjdCA9IChmb3JlY2FzdCwgbG9jYXRpb24pID0+IHtcbiAgLy8gcmV0dXJucyB0aGUgZGV0YWlscyBmb3IgZGlzcGxheSBvbiB0aGUgcmlnaHQgc2lkZVxuICAvKlxuICBjb25zdCBnZXREZXRhaWxzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5PYmplY3QgPSB7fTtcbiAgICBtYWluT2JqZWN0LmZlZWwgPSBmb3JlY2FzdC5jdXJyZW50WydmZWVsc19saWtlJ10gKyAnYyc7XG4gICAgbWFpbk9iamVjdC5odW1pZGl0eSA9IGZvcmVjYXN0LmN1cnJlbnQuaHVtaWRpdHk7XG4gICAgbWFpbk9iamVjdC53aW5kU3BlZWQgPSBmb3JlY2FzdC5ob3VybHlbMF1bJ3dpbmRfZ3VzdCddO1xuICAgIG1haW5PYmplY3QucmFpbkNoYW5jZSA9IGZvcmVjYXN0LmhvdXJseVswXS5wb3A7XG4gICAgcmV0dXJuIG1haW5PYmplY3Q7XG4gIH07XG4qL1xuICAvLyByZXR1cm5zIHRoZSBtYWluIGZvcmVjYXN0IG9iamVjdCBmb3IgZGlzcGxheSBvbiB0aGUgbGVmdCBzaWRlIG9mIHNjcmVlblxuICBjb25zdCBnZXRNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5PYmplY3QgPSB7fTtcbiAgICBtYWluT2JqZWN0LmRlc2NyaXB0aW9uID0gZm9yZWNhc3QuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIG1haW5PYmplY3QubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICBtYWluT2JqZWN0LnRlbXAgPSBTdHJpbmcoZm9yZWNhc3QuY3VycmVudC50ZW1wKTtcbiAgICBtYWluT2JqZWN0Lmljb25LZXkgPSBmb3JlY2FzdC5jdXJyZW50LndlYXRoZXJbMF0uaWNvbjtcbiAgICByZXR1cm4gbWFpbk9iamVjdDtcbiAgfTtcblxuICByZXR1cm4ge2dldE1haW59O1xufTtcblxuLy8gcmV0dXJucyB0aGUgY29vcmRzIG9mIGEgbG9jYXRpb25cbi8vIG9uZWNhbGwgcmVxdWlyZXMgY29vcmRzIGluc3RlYWQgb2YgbG9jYXRpb25cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRzQW5kTG9jYXRpb24obG9jYXRpb24pIHtcbiAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPSR7a2V5fSZ1bml0cz1tZXRyaWNgLFxuICAgICAge21vZGU6ICdjb3JzJ30sXG4gICk7XG4gIGNvbnN0IGxvY2F0aW9uRGF0YUpzb24gPSBhd2FpdCBsb2NhdGlvbkRhdGEuanNvbigpO1xuXG5cbiAgY29uc3QgbG9jYXRpb25OYW1lID1cbiAgICBsb2NhdGlvbkRhdGFKc29uLm5hbWUgKyAnLCAnICsgbG9jYXRpb25EYXRhSnNvbi5zeXNbJ2NvdW50cnknXTtcbiAgcmV0dXJuIFtsb2NhdGlvbkRhdGFKc29uLmNvb3JkLmxhdCwgbG9jYXRpb25EYXRhSnNvbi5jb29yZC5sb24sIGxvY2F0aW9uTmFtZV07XG59XG5cbi8vIHJldHVybnMgYWxsIHJlcXVpcmVkIGRhdGEgaW4gYSBzaW5nbGUgY2FsbFxuYXN5bmMgZnVuY3Rpb24gb25lQ2FsbChsb2NhdGlvbikge1xuICBjb25zdCBjb29yZHMgPSBhd2FpdCBnZXRDb29yZHNBbmRMb2NhdGlvbihsb2NhdGlvbik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjb29yZHNbMF19Jmxvbj0ke2Nvb3Jkc1sxXX0mYXBwaWQ9JHtrZXl9JnVuaXRzPW1ldHJpY2AsXG4gICAgICB7bW9kZTogJ2NvcnMnfSxcbiAgKTtcbiAgcmV0dXJuIFtkYXRhLCBjb29yZHNbMl1dO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUb2RheXNGb3JlY2FzdChsb2NhdGlvbikge1xuICBjb25zdCBhbGxGb3JlY2FzdERhdGEgPSBhd2FpdCBvbmVDYWxsKGxvY2F0aW9uKTtcbiAgY29uc3QgZm9yZWNhc3RKc29uID0gYXdhaXQgYWxsRm9yZWNhc3REYXRhWzBdLmpzb24oKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXBcbiAgY29uc3QgdG9kYXlzRm9yZWNhc3QgPSBHZXRGb3JlY2FzdE9iamVjdChmb3JlY2FzdEpzb24sIGFsbEZvcmVjYXN0RGF0YVsxXSk7XG5cbiAgcmV0dXJuIHRvZGF5c0ZvcmVjYXN0O1xufVxuXG5leHBvcnQge2dldFRvZGF5c0ZvcmVjYXN0fTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtpbml0aWFsU2V0dXB9IGZyb20gJy4vZG9tL2RvbSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHtzZXRDdXJyZW50Rm9yZWNhc3R9IGZyb20gJy4vYXBwL2xvZ2ljJztcblxuaW5pdGlhbFNldHVwKCk7XG5cbnNldEN1cnJlbnRGb3JlY2FzdCgnc291dGhwb3J0JykuY2F0Y2goKGVycikgPT4ge1xuICBpZiAoZXJyLm5hbWUgPT0gJ1R5cGVFcnJvcicpIHtcbiAgICBjb25zb2xlLmxvZygndHlwZScpO1xuICAgIC8vIGhhbmRsZVxuICB9XG59KTtcblxuLy8gY2FsbCBhbmQgc2V0dXAgdGhlIGVsZW1lbnQgaW4gZG9tXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=