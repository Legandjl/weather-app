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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n  font-family: 'Space Mono', monospace;\n  background-color: #23f1dd;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 1fr auto;\n  grid-template-columns: 1fr;\n  height: 100vh;\n  max-height: 100vh;\n}\n\n#todaysForecastWrap {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  align-content: center;\n  justify-content: start;\n  justify-items: start;\n  padding: 60px;\n  min-width: 40vw;\n  justify-self: center;\n  align-self: center;\n  grid-gap: 20px;\n}\n\n#todaysForecast {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 1fr;\n}\n\n#forecastImageWrap {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: start;\n  justify-content: start;\n}\n\n#todaysForecast img {\n  width: 100%;\n  height: 90px;\n  max-width: 90px;\n  justify-self: start;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#infoWrap {\n  margin: 10px;\n  border: solid 1px;\n  display: grid;\n}\n\n#description {\n  font-size: 38px;\n  font-weight: 900;\n  white-space: nowrap;\n}\n\n#location {\n  font-size: 22px;\n  font-weight: 100;\n}\n\n#temp {\n  font-size: 28px;\n  font-weight: 600;\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\n\n#searchWrap {\n  position: relative;\n}\n\ninput[type='text'] {\n  max-width: 120px;\n  border: none;\n  border-bottom: solid 1px;\n  padding: 6px;\n  padding-left: 26px;\n  background-color: #23f1dd;\n}\n\n#searchWrap img {\n  top: -4px;\n  left: 0px;\n  width: auto;\n  height: 16px;\n  position: absolute;\n}\n\n#searchWrap img:hover {\n  cursor: pointer;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n}\n\n#temp img {\n  height: 18px;\n  width: 18px;\n  justify-self: start;\n  align-self: start;\n \n}\n\n.weatherInfoWrap {\n  display: grid;\n  align-content: center;\n  padding: 2px;\n  grid-gap: 10px;\n  text-align: left;\n\n}\n\n#detailsWrap {\n  justify-self: end;\n  display: grid;\n  grid-gap: 10px;\n  align-items: center;\n  align-content: center;\n  margin: 20px;\n  white-space: nowrap;\n}\n\n.forecastItem {\n  font-weight: 900;\n  font-size: 24px;\n  text-align: start;\n}\n\n.forecastItem img {\n  width: auto;\n  height: 15px;\n  margin-left: 4px;\n}\n\n#footer {\n  grid-column: 1/-1;\n  grid-row-end: -1;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n \n  border-top: solid 1px;\n  align-items: center;\n  align-self: center;\n}\n\n#dailyItemWrap {\n \n  display: grid;\n  grid-gap: 10px;\n  margin: 25px;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  \n}\n\n#dailyText {\n\n  font-weight: 600;\n}\n\n#dailyTemp {\n  width: auto;\n  max-height: 10px;\n  justify-self: start;\n\n  margin-left: 3px;\n}\n\n#dailyImageWrap img {\n  width: auto;\n  max-height: 60px;\n  \n}\n\n.weekDay {\n  font-weight: 900;\n  font-size: 18px;\n  text-decoration: underline;\n}\n\n#unitToggle {\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  position: fixed;\n  top:0; \n margin:5px;\n  align-items: center;\n  align-content: center;\n}\n\n#unitToggle:hover {\n\n  cursor: pointer;\n}\n\n#unitToggle img {\n\n  height:auto;\n  width:20px;\n}\n\n@media only screen and (max-width: 950px) {\n\n\n  #description {\n    font-size: 30px;\n  }\n\n  #location {\n    font-size: 18px;\n  }\n\n  #temp {\n    font-size: 24px;\n  \n    display: grid;\n    grid-template-columns: auto 1fr;\n  }\n\n  #dailyImageWrap img {\n    width: auto;\n    max-height: 40px;\n  }\n\n  #dailyItemWrap {\n    margin: 5px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n\n  .forecastItem {\n    font-size: 22px;\n\n    \n  }\n\n  .weekDay {\n    font-size: 16px;\n  }\n\n  #footer {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (max-width: 650px) {\n\n  #detailsWrap {\n\n    display: none;\n  }\n\n  #todaysForecastWrap {\n\n    justify-self: center;\n    width:auto;\n    margin:0px;\n    padding:0px;\n    align-content: center;\n    justify-content: center;\n    grid-template-columns: 1fr;\n  }\n\n\n  #temp img {\n    \n    height: 12px;\n    width: 12px;\n    justify-self: start;\n    align-self: start;\n  }\n  \n  #content {\n\n    grid-template-columns: 1fr;\n  }\n\n  #description {\n    font-size: 24px;\n  }\n\n  #location {\n    display: grid;\n    font-size: 14px;\n    text-align: center;\n    justify-content: center;\n    justify-items: center;\n  }\n\n  #temp, #forecastImageWrap {\n    font-size: 18px;\n   \n    justify-self: center;\n  }\n\n  #searchWrap {\n\n    justify-self: center;\n  }\n\n  .forecastItem {\n    font-size: 18px;\n   \n  }\n\n\n  #footer {\n    grid-template-columns: 1fr;\n    border: none;\n    margin-bottom: 40px;\n    justify-content: center;   \n    justify-self: center;\n    \n    grid-column: 1/-1;\n\n  }\n\n  #dailyImageWrap img {\n    width: auto;\n    max-height: 40px;\n    \n  }\n\n  #dailyItemWrap {\n    display: grid;\n    text-align: start;\n    justify-content: start;\n    justify-items: start;\n    align-content: center;\n    align-items: center;\n    margin: 5px;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-column: 1/-1;\n  \n    justify-self: center;\n    \n    padding:5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n    \n  }\n\n  #dailyImageWrap {\n\n    display: grid;\n    justify-self: end;\n  }\n\n\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;AACD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;EACd,oCAAoC;EACpC,yBAAyB;AAC3B;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,0BAA0B;EAC1B,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,qBAAqB;EACrB,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,SAAS;EACT,SAAS;EACT,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,iBAAiB;;AAEnB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,YAAY;EACZ,cAAc;EACd,gBAAgB;;AAElB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,qBAAqB;EACrB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,qCAAqC;;EAErC,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,cAAc;EACd,YAAY;EACZ,0BAA0B;EAC1B,qBAAqB;;AAEvB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,mBAAmB;;EAEnB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,gBAAgB;;AAElB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,0BAA0B;AAC5B;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,KAAK;CACN,UAAU;EACT,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;;EAEE,WAAW;EACX,UAAU;AACZ;;AAEA;;;EAGE;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;;IAEf,aAAa;IACb,+BAA+B;EACjC;;EAEA;IACE,WAAW;IACX,gBAAgB;EAClB;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,eAAe;;;EAGjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;;EAEE;;IAEE,aAAa;EACf;;EAEA;;IAEE,oBAAoB;IACpB,UAAU;IACV,UAAU;IACV,WAAW;IACX,qBAAqB;IACrB,uBAAuB;IACvB,0BAA0B;EAC5B;;;EAGA;;IAEE,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;;IAEE,0BAA0B;EAC5B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,uBAAuB;IACvB,qBAAqB;EACvB;;EAEA;IACE,eAAe;;IAEf,oBAAoB;EACtB;;EAEA;;IAEE,oBAAoB;EACtB;;EAEA;IACE,eAAe;;EAEjB;;;EAGA;IACE,0BAA0B;IAC1B,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,oBAAoB;;IAEpB,iBAAiB;;EAEnB;;EAEA;IACE,WAAW;IACX,gBAAgB;;EAElB;;EAEA;IACE,aAAa;IACb,iBAAiB;IACjB,sBAAsB;IACtB,oBAAoB;IACpB,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,sCAAsC;IACtC,iBAAiB;;IAEjB,oBAAoB;;IAEpB,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,qIAAqI;;EAEvI;;EAEA;;IAEE,aAAa;IACb,iBAAiB;EACnB;;;AAGF","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n  font-family: 'Space Mono', monospace;\n  background-color: #23f1dd;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 1fr auto;\n  grid-template-columns: 1fr;\n  height: 100vh;\n  max-height: 100vh;\n}\n\n#todaysForecastWrap {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  align-content: center;\n  justify-content: start;\n  justify-items: start;\n  padding: 60px;\n  min-width: 40vw;\n  justify-self: center;\n  align-self: center;\n  grid-gap: 20px;\n}\n\n#todaysForecast {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 1fr;\n}\n\n#forecastImageWrap {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: start;\n  justify-content: start;\n}\n\n#todaysForecast img {\n  width: 100%;\n  height: 90px;\n  max-width: 90px;\n  justify-self: start;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#infoWrap {\n  margin: 10px;\n  border: solid 1px;\n  display: grid;\n}\n\n#description {\n  font-size: 38px;\n  font-weight: 900;\n  white-space: nowrap;\n}\n\n#location {\n  font-size: 22px;\n  font-weight: 100;\n}\n\n#temp {\n  font-size: 28px;\n  font-weight: 600;\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\n\n#searchWrap {\n  position: relative;\n}\n\ninput[type='text'] {\n  max-width: 120px;\n  border: none;\n  border-bottom: solid 1px;\n  padding: 6px;\n  padding-left: 26px;\n  background-color: #23f1dd;\n}\n\n#searchWrap img {\n  top: -4px;\n  left: 0px;\n  width: auto;\n  height: 16px;\n  position: absolute;\n}\n\n#searchWrap img:hover {\n  cursor: pointer;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n}\n\n#temp img {\n  height: 18px;\n  width: 18px;\n  justify-self: start;\n  align-self: start;\n \n}\n\n.weatherInfoWrap {\n  display: grid;\n  align-content: center;\n  padding: 2px;\n  grid-gap: 10px;\n  text-align: left;\n\n}\n\n#detailsWrap {\n  justify-self: end;\n  display: grid;\n  grid-gap: 10px;\n  align-items: center;\n  align-content: center;\n  margin: 20px;\n  white-space: nowrap;\n}\n\n.forecastItem {\n  font-weight: 900;\n  font-size: 24px;\n  text-align: start;\n}\n\n.forecastItem img {\n  width: auto;\n  height: 15px;\n  margin-left: 4px;\n}\n\n#footer {\n  grid-column: 1/-1;\n  grid-row-end: -1;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n \n  border-top: solid 1px;\n  align-items: center;\n  align-self: center;\n}\n\n#dailyItemWrap {\n \n  display: grid;\n  grid-gap: 10px;\n  margin: 25px;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  \n}\n\n#dailyText {\n\n  font-weight: 600;\n}\n\n#dailyTemp {\n  width: auto;\n  max-height: 10px;\n  justify-self: start;\n\n  margin-left: 3px;\n}\n\n#dailyImageWrap img {\n  width: auto;\n  max-height: 60px;\n  \n}\n\n.weekDay {\n  font-weight: 900;\n  font-size: 18px;\n  text-decoration: underline;\n}\n\n#unitToggle {\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  position: fixed;\n  top:0; \n margin:5px;\n  align-items: center;\n  align-content: center;\n}\n\n#unitToggle:hover {\n\n  cursor: pointer;\n}\n\n#unitToggle img {\n\n  height:auto;\n  width:20px;\n}\n\n@media only screen and (max-width: 950px) {\n\n\n  #description {\n    font-size: 30px;\n  }\n\n  #location {\n    font-size: 18px;\n  }\n\n  #temp {\n    font-size: 24px;\n  \n    display: grid;\n    grid-template-columns: auto 1fr;\n  }\n\n  #dailyImageWrap img {\n    width: auto;\n    max-height: 40px;\n  }\n\n  #dailyItemWrap {\n    margin: 5px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n\n  .forecastItem {\n    font-size: 22px;\n\n    \n  }\n\n  .weekDay {\n    font-size: 16px;\n  }\n\n  #footer {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (max-width: 650px) {\n\n  #detailsWrap {\n\n    display: none;\n  }\n\n  #todaysForecastWrap {\n\n    justify-self: center;\n    width:auto;\n    margin:0px;\n    padding:0px;\n    align-content: center;\n    justify-content: center;\n    grid-template-columns: 1fr;\n  }\n\n\n  #temp img {\n    \n    height: 12px;\n    width: 12px;\n    justify-self: start;\n    align-self: start;\n  }\n  \n  #content {\n\n    grid-template-columns: 1fr;\n  }\n\n  #description {\n    font-size: 24px;\n  }\n\n  #location {\n    display: grid;\n    font-size: 14px;\n    text-align: center;\n    justify-content: center;\n    justify-items: center;\n  }\n\n  #temp, #forecastImageWrap {\n    font-size: 18px;\n   \n    justify-self: center;\n  }\n\n  #searchWrap {\n\n    justify-self: center;\n  }\n\n  .forecastItem {\n    font-size: 18px;\n   \n  }\n\n\n  #footer {\n    grid-template-columns: 1fr;\n    border: none;\n    margin-bottom: 40px;\n    justify-content: center;   \n    justify-self: center;\n    \n    grid-column: 1/-1;\n\n  }\n\n  #dailyImageWrap img {\n    width: auto;\n    max-height: 40px;\n    \n  }\n\n  #dailyItemWrap {\n    display: grid;\n    text-align: start;\n    justify-content: start;\n    justify-items: start;\n    align-content: center;\n    align-items: center;\n    margin: 5px;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-column: 1/-1;\n  \n    justify-self: center;\n    \n    padding:5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n    \n  }\n\n  #dailyImageWrap {\n\n    display: grid;\n    justify-self: end;\n  }\n\n\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _images_celsius2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/celsius2.png */ "./src/images/celsius2.png");
/* harmony import */ var _images_farhenheit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/farhenheit.png */ "./src/images/farhenheit.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/search.png */ "./src/images/search.png");
/* harmony import */ var capitalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! capitalize */ "./node_modules/capitalize/index.js");
/* harmony import */ var capitalize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(capitalize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic */ "./src/app/logic.js");
/* harmony import */ var _units_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./units.js */ "./src/app/units.js");



// import farhenheit from '../images/farhenheit.png';





const forecastGenerator = {};
const unitIcons = {
  metric: _images_celsius2_png__WEBPACK_IMPORTED_MODULE_1__,
  imperial: _images_farhenheit_png__WEBPACK_IMPORTED_MODULE_2__,
};

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
        wrapper.innerText = capitalize__WEBPACK_IMPORTED_MODULE_4___default().words(val);
      } else {
        wrapper.innerText = val;
      }
      container.append(wrapper);

      if (key == 'temp') {
        const image = new Image();
        image.src = unitIcons[(0,_units_js__WEBPACK_IMPORTED_MODULE_6__.getUnits)()];
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
  document
      .querySelector('#content')
      .append(getUnitToggle(currentForecast.location));
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
      image.src = _images_celsius2_png__WEBPACK_IMPORTED_MODULE_1__;
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
          icon.src = unitIcons[(0,_units_js__WEBPACK_IMPORTED_MODULE_6__.getUnits)()];
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

const getUnitToggle = (loc) => {
  const unitToggle = document.createElement('div');
  unitToggle.id = 'unitToggle';

  const celsiusToggle = new Image();
  celsiusToggle.src = unitIcons[(0,_units_js__WEBPACK_IMPORTED_MODULE_6__.getUnits)()];

  unitToggle.addEventListener('click', (e) => {
    unitToggle.innerHTML = '';

    if ((0,_units_js__WEBPACK_IMPORTED_MODULE_6__.getUnits)() == 'metric') {
      (0,_units_js__WEBPACK_IMPORTED_MODULE_6__.setUnits)('imperial');
    } else {
      (0,_units_js__WEBPACK_IMPORTED_MODULE_6__.setUnits)('metric');
    }
    (0,_logic__WEBPACK_IMPORTED_MODULE_5__.setCurrentForecast)(loc);
  });

  unitToggle.append(celsiusToggle);
  return unitToggle;
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
  searchIcon.src = _images_search_png__WEBPACK_IMPORTED_MODULE_3__;

  searchWrap.append(searchBox);
  searchWrap.append(searchIcon);

  searchIcon.addEventListener('click', () => {
    (0,_logic__WEBPACK_IMPORTED_MODULE_5__.setCurrentForecast)(searchBox.value);
  });

  searchBox.addEventListener('keydown', (e) => {
    if (e.key != 'Enter') {
      return;
    }
    (0,_logic__WEBPACK_IMPORTED_MODULE_5__.setCurrentForecast)(searchBox.value);
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
    document.querySelector('#searchBox').value = '';
    document.querySelector('#searchBox').placeholder = 'Location not found.';
    return;
  }
}




/***/ }),

/***/ "./src/app/units.js":
/*!**************************!*\
  !*** ./src/app/units.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUnits": () => (/* binding */ setUnits),
/* harmony export */   "getUnits": () => (/* binding */ getUnits),
/* harmony export */   "getSpeedUnit": () => (/* binding */ getSpeedUnit)
/* harmony export */ });
let units = 'metric';


const setUnits = (unit) => {
  units = unit;
};

const getUnits = () => {
  return units;
};

const getSpeedUnit = () => {
  if (units == 'metric') {
    return ' m/ph';
  } else {
    return ' k/mh';
  }
};



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
/* harmony import */ var _app_units__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/units */ "./src/app/units.js");
/* harmony import */ var _forecastObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecastObject */ "./src/weatherData/forecastObject.js");



const key = '5be21b7f49aed6165407fe53b49eba81';

// returns the coords of a location
// onecall requires coords instead of location

async function getCoordsAndLocation(location) {
  const locationData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=${(0,_app_units__WEBPACK_IMPORTED_MODULE_0__.getUnits)()}`,
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
      ` https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&appid=${key}&units=${(0,_app_units__WEBPACK_IMPORTED_MODULE_0__.getUnits)()}`,
      {mode: 'cors'},
  );
  return [data, coords[2]];
}

async function getTodaysForecast(location) {
  const allForecastData = await oneCall(location);
  const forecastJson = await allForecastData[0].json();
  // eslint-disable-next-line new-cap
  const todaysForecast = (0,_forecastObject__WEBPACK_IMPORTED_MODULE_1__.GetForecastObject)(forecastJson, allForecastData[1]);
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/eachDayOfInterval/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addWeeks/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var _app_units__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/units */ "./src/app/units.js");



const GetForecastObject = (forecast, location) => {
  // returns the details for display on the right side

  const getDetails = () => {
    const mainObject = {};
    mainObject['Feels Like'] = forecast.current['feels_like'];
    mainObject['Humidity'] = forecast.current.humidity + '%';
    mainObject['Wind Speed'] =
      Number.parseFloat(forecast.current['wind_speed'] * 2.237).toPrecision(2) +
      (0,_app_units__WEBPACK_IMPORTED_MODULE_0__.getSpeedUnit)();
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

    const eachDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)({
      start: new Date(),
      end: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(new Date(), 1),
    });

    eachDay.forEach((day, index) => {
      if (index == 0) {
        return;
      }
      const forecastObj = {
        weekDay: daysOfWeek[(0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(day)],
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

/***/ "./src/images/celsius2.png":
/*!*********************************!*\
  !*** ./src/images/celsius2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b62876e94140b40a8f86.png";

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

/***/ "./src/images/farhenheit.png":
/*!***********************************!*\
  !*** ./src/images/farhenheit.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff55b4994a023f088c4a.png";

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

(0,_app_logic__WEBPACK_IMPORTED_MODULE_2__.setCurrentForecast)('southport');



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxjQUFjLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxL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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnVDO0FBQ2xCOztBQUUwQjs7O0FBRy9DLHNEQUFZOztBQUVaLDhEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Ryb3AtZG93bi8uL25vZGVfbW9kdWxlcy9jYXBpdGFsaXplL2luZGV4LmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkV2Vla3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lYWNoRGF5T2ZJbnRlcnZhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvYXBwL2ZvcmVjYXN0RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duLy4vc3JjL2FwcC9sb2dpYy5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vLi9zcmMvYXBwL3VuaXRzLmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL3NyYy9kb20vZG9tLmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL3NyYy9pbWFnZXMvd2VhdGhlckljb25zLmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL3NyYy93ZWF0aGVyRGF0YS9hcGlRdWVyaWVzLmpzIiwid2VicGFjazovL2Ryb3AtZG93bi8uL3NyYy93ZWF0aGVyRGF0YS9mb3JlY2FzdE9iamVjdC5qcyIsIndlYnBhY2s6Ly9kcm9wLWRvd24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Ryb3AtZG93bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHJvcC1kb3duL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Ryb3AtZG93bi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHJpbmcsIHByZXNlcnZlKSB7XG4gIGlmICghcHJlc2VydmUpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnN1YnN0cmluZygxKTtcbn1cblxubW9kdWxlLmV4cG9ydHMud29yZHMgPSBmdW5jdGlvbiAoc3RyaW5nLCBwcmVzZXJ2ZSkge1xuICBpZiAoIXByZXNlcnZlKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oPyFeWzAtOV0pKF58W15hLXpBLVpcXHUwMEMwLVxcdTAxN0ZcXHUwNDAwLVxcdTA0RkYnXSkoW2EtekEtWlxcdTAwQzAtXFx1MDE3RlxcdTA0MDAtXFx1MDRGRl0pL2csIGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIG0udG9VcHBlckNhc2UoKVxuICB9KVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcbnYyLjAgfCAyMDExMDEyNlxcbkxpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBNb25vJywgbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzZjFkZDtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jdG9kYXlzRm9yZWNhc3RXcmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgcGFkZGluZzogNjBweDtcXG4gIG1pbi13aWR0aDogNDB2dztcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxufVxcblxcbiN0b2RheXNGb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuI2ZvcmVjYXN0SW1hZ2VXcmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI3RvZGF5c0ZvcmVjYXN0IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOTBweDtcXG4gIG1heC13aWR0aDogOTBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI2luZm9XcmFwIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMzhweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4jbG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuI3RlbXAge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbn1cXG5cXG4jc2VhcmNoV3JhcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBtYXgtd2lkdGg6IDEyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xcbiAgcGFkZGluZzogNnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzZjFkZDtcXG59XFxuXFxuI3NlYXJjaFdyYXAgaW1nIHtcXG4gIHRvcDogLTRweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4jc2VhcmNoV3JhcCBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI3RlbXAgaW1nIHtcXG4gIGhlaWdodDogMThweDtcXG4gIHdpZHRoOiAxOHB4O1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiBcXG59XFxuXFxuLndlYXRoZXJJbmZvV3JhcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbn1cXG5cXG4jZGV0YWlsc1dyYXAge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmZvcmVjYXN0SXRlbSB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5mb3JlY2FzdEl0ZW0gaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGdyaWQtcm93LWVuZDogLTE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gXFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jZGFpbHlJdGVtV3JhcCB7XFxuIFxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxMHB4O1xcbiAgbWFyZ2luOiAyNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBcXG59XFxuXFxuI2RhaWx5VGV4dCB7XFxuXFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jZGFpbHlUZW1wIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMTBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuXFxuICBtYXJnaW4tbGVmdDogM3B4O1xcbn1cXG5cXG4jZGFpbHlJbWFnZVdyYXAgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWF4LWhlaWdodDogNjBweDtcXG4gIFxcbn1cXG5cXG4ud2Vla0RheSB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiN1bml0VG9nZ2xlIHtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6MDsgXFxuIG1hcmdpbjo1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jdW5pdFRvZ2dsZTpob3ZlciB7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN1bml0VG9nZ2xlIGltZyB7XFxuXFxuICBoZWlnaHQ6YXV0bztcXG4gIHdpZHRoOjIwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcXG5cXG5cXG4gICNkZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gIH1cXG5cXG4gICNsb2NhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG5cXG4gICN0ZW1wIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICB9XFxuXFxuICAjZGFpbHlJbWFnZVdyYXAgaW1nIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICAjZGFpbHlJdGVtV3JhcCB7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0SXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG5cXG4gICAgXFxuICB9XFxuXFxuICAud2Vla0RheSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gICNmb290ZXIge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXG5cXG4gICNkZXRhaWxzV3JhcCB7XFxuXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjdG9kYXlzRm9yZWNhc3RXcmFwIHtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOmF1dG87XFxuICAgIG1hcmdpbjowcHg7XFxuICAgIHBhZGRpbmc6MHB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG5cXG4gICN0ZW1wIGltZyB7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIH1cXG4gIFxcbiAgI2NvbnRlbnQge1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG4gICNkZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gIH1cXG5cXG4gICNsb2NhdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI3RlbXAsICNmb3JlY2FzdEltYWdlV3JhcCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICBcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjc2VhcmNoV3JhcCB7XFxuXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0SXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICBcXG4gIH1cXG5cXG5cXG4gICNmb290ZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICBcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG5cXG4gIH1cXG5cXG4gICNkYWlseUltYWdlV3JhcCBpbWcge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgXFxuICB9XFxuXFxuICAjZGFpbHlJdGVtV3JhcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBcXG4gICAgcGFkZGluZzo1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXG4gICAgXFxuICB9XFxuXFxuICAjZGFpbHlJbWFnZVdyYXAge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIH1cXG5cXG5cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBQ0EsZ0RBQWdEO0FBQ2hEOzs7Ozs7Ozs7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OztFQUV2STs7RUFFQTs7SUFFRSxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COzs7QUFHRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcbnYyLjAgfCAyMDExMDEyNlxcbkxpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBNb25vJywgbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzZjFkZDtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jdG9kYXlzRm9yZWNhc3RXcmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgcGFkZGluZzogNjBweDtcXG4gIG1pbi13aWR0aDogNDB2dztcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxufVxcblxcbiN0b2RheXNGb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuI2ZvcmVjYXN0SW1hZ2VXcmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI3RvZGF5c0ZvcmVjYXN0IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOTBweDtcXG4gIG1heC13aWR0aDogOTBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI2luZm9XcmFwIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMzhweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4jbG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuI3RlbXAge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbn1cXG5cXG4jc2VhcmNoV3JhcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBtYXgtd2lkdGg6IDEyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xcbiAgcGFkZGluZzogNnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzZjFkZDtcXG59XFxuXFxuI3NlYXJjaFdyYXAgaW1nIHtcXG4gIHRvcDogLTRweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4jc2VhcmNoV3JhcCBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI3RlbXAgaW1nIHtcXG4gIGhlaWdodDogMThweDtcXG4gIHdpZHRoOiAxOHB4O1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiBcXG59XFxuXFxuLndlYXRoZXJJbmZvV3JhcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbn1cXG5cXG4jZGV0YWlsc1dyYXAge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmZvcmVjYXN0SXRlbSB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5mb3JlY2FzdEl0ZW0gaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGdyaWQtcm93LWVuZDogLTE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gXFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jZGFpbHlJdGVtV3JhcCB7XFxuIFxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxMHB4O1xcbiAgbWFyZ2luOiAyNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBcXG59XFxuXFxuI2RhaWx5VGV4dCB7XFxuXFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jZGFpbHlUZW1wIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMTBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuXFxuICBtYXJnaW4tbGVmdDogM3B4O1xcbn1cXG5cXG4jZGFpbHlJbWFnZVdyYXAgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWF4LWhlaWdodDogNjBweDtcXG4gIFxcbn1cXG5cXG4ud2Vla0RheSB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiN1bml0VG9nZ2xlIHtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6MDsgXFxuIG1hcmdpbjo1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jdW5pdFRvZ2dsZTpob3ZlciB7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN1bml0VG9nZ2xlIGltZyB7XFxuXFxuICBoZWlnaHQ6YXV0bztcXG4gIHdpZHRoOjIwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcXG5cXG5cXG4gICNkZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gIH1cXG5cXG4gICNsb2NhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG5cXG4gICN0ZW1wIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICB9XFxuXFxuICAjZGFpbHlJbWFnZVdyYXAgaW1nIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICAjZGFpbHlJdGVtV3JhcCB7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0SXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG5cXG4gICAgXFxuICB9XFxuXFxuICAud2Vla0RheSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gICNmb290ZXIge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXG5cXG4gICNkZXRhaWxzV3JhcCB7XFxuXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjdG9kYXlzRm9yZWNhc3RXcmFwIHtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOmF1dG87XFxuICAgIG1hcmdpbjowcHg7XFxuICAgIHBhZGRpbmc6MHB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG5cXG4gICN0ZW1wIGltZyB7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIH1cXG4gIFxcbiAgI2NvbnRlbnQge1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG4gICNkZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gIH1cXG5cXG4gICNsb2NhdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI3RlbXAsICNmb3JlY2FzdEltYWdlV3JhcCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICBcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjc2VhcmNoV3JhcCB7XFxuXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0SXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICBcXG4gIH1cXG5cXG5cXG4gICNmb290ZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICBcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG5cXG4gIH1cXG5cXG4gICNkYWlseUltYWdlV3JhcCBpbWcge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgXFxuICB9XFxuXFxuICAjZGFpbHlJdGVtV3JhcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBcXG4gICAgcGFkZGluZzo1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXG4gICAgXFxuICB9XFxuXFxuICAjZGFpbHlJbWFnZVdyYXAge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIH1cXG5cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZFdlZWtzXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiB3ZWVrcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSB3ZWVrcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNCB3ZWVrcyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkV2Vla3MobmV3IERhdGUoMjAxNCwgOCwgMSksIDQpXG4gKiAvLz0+IE1vbiBTZXAgMjkgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFdlZWtzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICB2YXIgZGF5cyA9IGFtb3VudCAqIDc7XG4gIHJldHVybiBhZGREYXlzKGRpcnR5RGF0ZSwgZGF5cyk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlYWNoRGF5T2ZJbnRlcnZhbFxuICogQGNhdGVnb3J5IEludGVydmFsIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgYXJyYXkgb2YgZGF0ZXMgd2l0aGluIHRoZSBzcGVjaWZpZWQgdGltZSBpbnRlcnZhbC5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgYXJyYXkgb2YgZGF0ZXMgd2l0aGluIHRoZSBzcGVjaWZpZWQgdGltZSBpbnRlcnZhbC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIGZ1bmN0aW9uIHdhcyByZW5hbWVkIGZyb20gYGVhY2hEYXlgIHRvIGBlYWNoRGF5T2ZJbnRlcnZhbGAuXG4gKiAgIFRoaXMgY2hhbmdlIHdhcyBtYWRlIHRvIG1pcnJvciB0aGUgdXNlIG9mIHRoZSB3b3JkIFwiaW50ZXJ2YWxcIiBpbiBzdGFuZGFyZCBJU08gODYwMToyMDA0IHRlcm1pbm9sb2d5OlxuICpcbiAqICAgYGBgXG4gKiAgIDIuMS4zXG4gKiAgIHRpbWUgaW50ZXJ2YWxcbiAqICAgcGFydCBvZiB0aGUgdGltZSBheGlzIGxpbWl0ZWQgYnkgdHdvIGluc3RhbnRzXG4gKiAgIGBgYFxuICpcbiAqICAgQWxzbywgdGhpcyBmdW5jdGlvbiBub3cgYWNjZXB0cyBhbiBvYmplY3Qgd2l0aCBgc3RhcnRgIGFuZCBgZW5kYCBwcm9wZXJ0aWVzXG4gKiAgIGluc3RlYWQgb2YgdHdvIGFyZ3VtZW50cyBhcyBhbiBpbnRlcnZhbC5cbiAqICAgVGhpcyBmdW5jdGlvbiBub3cgdGhyb3dzIGBSYW5nZUVycm9yYCBpZiB0aGUgc3RhcnQgb2YgdGhlIGludGVydmFsIGlzIGFmdGVyIGl0cyBlbmRcbiAqICAgb3IgaWYgYW55IGRhdGUgaW4gdGhlIGludGVydmFsIGlzIGBJbnZhbGlkIERhdGVgLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKlxuICogICBlYWNoRGF5KG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwgbmV3IERhdGUoMjAxNCwgMCwgMjApKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgZWFjaERheU9mSW50ZXJ2YWwoXG4gKiAgICAgeyBzdGFydDogbmV3IERhdGUoMjAxNCwgMCwgMTApLCBlbmQ6IG5ldyBEYXRlKDIwMTQsIDAsIDIwKSB9XG4gKiAgIClcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtJbnRlcnZhbH0gaW50ZXJ2YWwgLSB0aGUgaW50ZXJ2YWwuIFNlZSBbSW50ZXJ2YWxde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvSW50ZXJ2YWx9XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5zdGVwPTFdIC0gdGhlIHN0ZXAgdG8gaW5jcmVtZW50IGJ5LiBUaGUgdmFsdWUgc2hvdWxkIGJlIG1vcmUgdGhhbiAxLlxuICogQHJldHVybnMge0RhdGVbXX0gdGhlIGFycmF5IHdpdGggc3RhcnRzIG9mIGRheXMgZnJvbSB0aGUgZGF5IG9mIHRoZSBpbnRlcnZhbCBzdGFydCB0byB0aGUgZGF5IG9mIHRoZSBpbnRlcnZhbCBlbmRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuc3RlcGAgbXVzdCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gMVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gVGhlIHN0YXJ0IG9mIGFuIGludGVydmFsIGNhbm5vdCBiZSBhZnRlciBpdHMgZW5kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBEYXRlIGluIGludGVydmFsIGNhbm5vdCBiZSBgSW52YWxpZCBEYXRlYFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFYWNoIGRheSBiZXR3ZWVuIDYgT2N0b2JlciAyMDE0IGFuZCAxMCBPY3RvYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBlYWNoRGF5T2ZJbnRlcnZhbCh7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCA5LCA2KSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCA5LCAxMClcbiAqIH0pXG4gKiAvLz0+IFtcbiAqIC8vICAgTW9uIE9jdCAwNiAyMDE0IDAwOjAwOjAwLFxuICogLy8gICBUdWUgT2N0IDA3IDIwMTQgMDA6MDA6MDAsXG4gKiAvLyAgIFdlZCBPY3QgMDggMjAxNCAwMDowMDowMCxcbiAqIC8vICAgVGh1IE9jdCAwOSAyMDE0IDAwOjAwOjAwLFxuICogLy8gICBGcmkgT2N0IDEwIDIwMTQgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlYWNoRGF5T2ZJbnRlcnZhbChkaXJ0eUludGVydmFsLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgaW50ZXJ2YWwgPSBkaXJ0eUludGVydmFsIHx8IHt9O1xuICB2YXIgc3RhcnREYXRlID0gdG9EYXRlKGludGVydmFsLnN0YXJ0KTtcbiAgdmFyIGVuZERhdGUgPSB0b0RhdGUoaW50ZXJ2YWwuZW5kKTtcbiAgdmFyIGVuZFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKTsgLy8gVGhyb3cgYW4gZXhjZXB0aW9uIGlmIHN0YXJ0IGRhdGUgaXMgYWZ0ZXIgZW5kIGRhdGUgb3IgaWYgYW55IGRhdGUgaXMgYEludmFsaWQgRGF0ZWBcblxuICBpZiAoIShzdGFydERhdGUuZ2V0VGltZSgpIDw9IGVuZFRpbWUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgaW50ZXJ2YWwnKTtcbiAgfVxuXG4gIHZhciBkYXRlcyA9IFtdO1xuICB2YXIgY3VycmVudERhdGUgPSBzdGFydERhdGU7XG4gIGN1cnJlbnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RlcCA9IG9wdGlvbnMgJiYgJ3N0ZXAnIGluIG9wdGlvbnMgPyBOdW1iZXIob3B0aW9ucy5zdGVwKSA6IDE7XG4gIGlmIChzdGVwIDwgMSB8fCBpc05hTihzdGVwKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2BvcHRpb25zLnN0ZXBgIG11c3QgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDEnKTtcblxuICB3aGlsZSAoY3VycmVudERhdGUuZ2V0VGltZSgpIDw9IGVuZFRpbWUpIHtcbiAgICBkYXRlcy5wdXNoKHRvRGF0ZShjdXJyZW50RGF0ZSkpO1xuICAgIGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgc3RlcCk7XG4gICAgY3VycmVudERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIH1cblxuICByZXR1cm4gZGF0ZXM7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHswfDF8MnwzfDR8NXw2fSB0aGUgZGF5IG9mIHdlZWssIDAgcmVwcmVzZW50cyBTdW5kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIHdlZWsgaXMgMjkgRmVicnVhcnkgMjAxMj9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheShuZXcgRGF0ZSgyMDEyLCAxLCAyOSkpXG4gKiAvLz0+IDNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgcmV0dXJuIGRheTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7aWNvbnN9IGZyb20gJy4uL2ltYWdlcy93ZWF0aGVySWNvbnMuanMnO1xuaW1wb3J0IGNlbHNpdXNJY29uIGZyb20gJy4uL2ltYWdlcy9jZWxzaXVzMi5wbmcnO1xuaW1wb3J0IGZhcmhlbmhlaXRJY29uIGZyb20gJy4uL2ltYWdlcy9mYXJoZW5oZWl0LnBuZyc7XG4vLyBpbXBvcnQgZmFyaGVuaGVpdCBmcm9tICcuLi9pbWFnZXMvZmFyaGVuaGVpdC5wbmcnO1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuLi9pbWFnZXMvc2VhcmNoLnBuZyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICdjYXBpdGFsaXplJztcbmltcG9ydCB7c2V0Q3VycmVudEZvcmVjYXN0fSBmcm9tICcuL2xvZ2ljJztcbmltcG9ydCB7Z2V0VW5pdHMsIHNldFVuaXRzfSBmcm9tICcuL3VuaXRzLmpzJztcblxuY29uc3QgZm9yZWNhc3RHZW5lcmF0b3IgPSB7fTtcbmNvbnN0IHVuaXRJY29ucyA9IHtcbiAgbWV0cmljOiBjZWxzaXVzSWNvbixcbiAgaW1wZXJpYWw6IGZhcmhlbmhlaXRJY29uLFxufTtcblxuLy8gc2V0cyB1cCBtYWluIGZvcmVjYXN0IGxlZnQgc2lkZVxuZm9yZWNhc3RHZW5lcmF0b3IuZ2V0VG9kYXlzRm9yZWNhc3RFbGVtZW50ID0gKGZvcmVjYXN0T2JqZWN0KSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRGb3JlY2FzdCA9IGZvcmVjYXN0T2JqZWN0LmdldE1haW4oKTtcbiAgY29uc3QgZm9yZWNhc3RXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcmVjYXN0V3JhcC5pZCA9ICd0b2RheXNGb3JlY2FzdCc7XG5cbiAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGN1cnJlbnRGb3JlY2FzdCkpIHtcbiAgICBpZiAoa2V5ICE9ICdpY29uS2V5JyAmJiBrZXkgIT0gJ2lkJykge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3RJdGVtJyk7XG4gICAgICBjb250YWluZXIuaWQgPSBrZXk7XG4gICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJJbmZvV3JhcCcpO1xuXG4gICAgICBpZiAoa2V5ICE9ICdsb2NhdGlvbicpIHtcbiAgICAgICAgd3JhcHBlci5pbm5lclRleHQgPSBjYXBpdGFsaXplLndvcmRzKHZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cmFwcGVyLmlubmVyVGV4dCA9IHZhbDtcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lci5hcHBlbmQod3JhcHBlcik7XG5cbiAgICAgIGlmIChrZXkgPT0gJ3RlbXAnKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IHVuaXRJY29uc1tnZXRVbml0cygpXTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgIH1cbiAgICAgIGZvcmVjYXN0V3JhcC5hcHBlbmQoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09ICdpY29uS2V5Jykge1xuICAgICAgY29uc3QgaW1nV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaW1nV3JhcC5pZCA9ICdmb3JlY2FzdEltYWdlV3JhcCc7XG4gICAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gICAgICBpY29uLnNyYyA9IGljb25zW3ZhbF07XG4gICAgICBpbWdXcmFwLmFwcGVuZChpY29uKTtcbiAgICAgIGZvcmVjYXN0V3JhcC5hcHBlbmQoaW1nV3JhcCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNlYXJjaFdyYXAgPSBnZXRTZWFyY2hXcmFwKCk7XG4gIGZvcmVjYXN0V3JhcC5hcHBlbmQoc2VhcmNoV3JhcCk7XG4gIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgICAgLmFwcGVuZChnZXRVbml0VG9nZ2xlKGN1cnJlbnRGb3JlY2FzdC5sb2NhdGlvbikpO1xuICByZXR1cm4gZm9yZWNhc3RXcmFwO1xufTtcbi8vIHNldHMgdXAgdG9kYXlzIGRldGFpbHMgb24gdGhlIHJpZ2h0IHNpZGVcbmZvcmVjYXN0R2VuZXJhdG9yLmdldFRvZGF5c0RldGFpbHMgPSAoZm9yZWNhc3RPYmplY3QpID0+IHtcbiAgY29uc3QgZm9yZWNhc3RJbmZvID0gZm9yZWNhc3RPYmplY3QuZ2V0RGV0YWlscygpO1xuICBjb25zb2xlLmxvZyhmb3JlY2FzdEluZm8pO1xuICBjb25zdCBkZXRhaWxzV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXRhaWxzV3JhcC5pZCA9ICdkZXRhaWxzV3JhcCc7XG5cbiAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGZvcmVjYXN0SW5mbykpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250YWluZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lclRpdGxlJyk7XG4gICAgY29udGFpbmVyVGl0bGUuaW5uZXJUZXh0ID0ga2V5O1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdEl0ZW0nKTtcbiAgICBjb250YWluZXIuaW5uZXJUZXh0ID0gdmFsO1xuICAgIGlmIChrZXkgPT0gJ0ZlZWxzIExpa2UnKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uuc3JjID0gY2Vsc2l1c0ljb247XG4gICAgICBjb250YWluZXIuYXBwZW5kKGltYWdlKTtcbiAgICB9XG4gICAgZGV0YWlsc1dyYXAuYXBwZW5kKGNvbnRhaW5lclRpdGxlKTtcbiAgICBkZXRhaWxzV3JhcC5hcHBlbmQoY29udGFpbmVyKTtcbiAgfVxuXG4gIHJldHVybiBkZXRhaWxzV3JhcDtcbn07XG4vLyBzZXRzIHVwIHRoZSBmb290ZXIgZm9yIGRpc3BsYXlpbmcgZGFpbHkgZm9yZWNhc3RcbmZvcmVjYXN0R2VuZXJhdG9yLmdldERhaWx5ID0gKGZvcmVjYXN0QXJyYXkpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5pZCA9ICdmb290ZXInO1xuXG4gIGNvbnN0IGFyciA9IGZvcmVjYXN0QXJyYXkuZ2V0RGFpbHkoKTtcblxuICBmb3IgKGxldCB4ID0gMDsgeCA8IGFyci5sZW5ndGg7IHgrKykge1xuICAgIGNvbnN0IGN1cnJlbnRGb3JlY2FzdEl0ZW0gPSBhcnJbeF07XG4gICAgY29uc3QgZGFpbHlXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGFpbHlJdGVtV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGN1cnJlbnRGb3JlY2FzdEl0ZW0pKSB7XG4gICAgICBkYWlseUl0ZW1XcmFwLmlkID0gJ2RhaWx5SXRlbVdyYXAnO1xuICAgICAgaWYgKGtleSAhPSAnaWNvbicpIHtcbiAgICAgICAgY29uc3QgdGV4dFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGV4dFdyYXAuaWQgPSAnZGFpbHlUZXh0JztcbiAgICAgICAgdGV4dFdyYXAuY2xhc3NMaXN0LmFkZChrZXkpO1xuICAgICAgICB0ZXh0V3JhcC5pbm5lclRleHQgPSB2YWw7XG4gICAgICAgIGRhaWx5SXRlbVdyYXAuYXBwZW5kKHRleHRXcmFwKTtcblxuICAgICAgICBpZiAoa2V5ID09ICd0ZW1wTG93JyB8fCBrZXkgPT0gJ3RlbXBIaWdoJykge1xuICAgICAgICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpY29uLnNyYyA9IHVuaXRJY29uc1tnZXRVbml0cygpXTtcbiAgICAgICAgICBpY29uLmlkID0gJ2RhaWx5VGVtcCc7XG4gICAgICAgICAgdGV4dFdyYXAuYXBwZW5kKGljb24pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT0gJ2ljb24nKSB7XG4gICAgICAgIGNvbnN0IGltZ1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW1nV3JhcC5pZCA9ICdkYWlseUltYWdlV3JhcCc7XG4gICAgICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaWNvbi5zcmMgPSBpY29uc1t2YWxdO1xuICAgICAgICBpbWdXcmFwLmFwcGVuZChpY29uKTtcbiAgICAgICAgZGFpbHlJdGVtV3JhcC5hcHBlbmQoaW1nV3JhcCk7XG4gICAgICB9XG4gICAgICBkYWlseVdyYXAuYXBwZW5kKGRhaWx5SXRlbVdyYXApO1xuICAgIH1cblxuICAgIGZvb3Rlci5hcHBlbmQoZGFpbHlXcmFwKTtcbiAgfVxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuY29uc3QgZ2V0VW5pdFRvZ2dsZSA9IChsb2MpID0+IHtcbiAgY29uc3QgdW5pdFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1bml0VG9nZ2xlLmlkID0gJ3VuaXRUb2dnbGUnO1xuXG4gIGNvbnN0IGNlbHNpdXNUb2dnbGUgPSBuZXcgSW1hZ2UoKTtcbiAgY2Vsc2l1c1RvZ2dsZS5zcmMgPSB1bml0SWNvbnNbZ2V0VW5pdHMoKV07XG5cbiAgdW5pdFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgdW5pdFRvZ2dsZS5pbm5lckhUTUwgPSAnJztcblxuICAgIGlmIChnZXRVbml0cygpID09ICdtZXRyaWMnKSB7XG4gICAgICBzZXRVbml0cygnaW1wZXJpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VW5pdHMoJ21ldHJpYycpO1xuICAgIH1cbiAgICBzZXRDdXJyZW50Rm9yZWNhc3QobG9jKTtcbiAgfSk7XG5cbiAgdW5pdFRvZ2dsZS5hcHBlbmQoY2Vsc2l1c1RvZ2dsZSk7XG4gIHJldHVybiB1bml0VG9nZ2xlO1xufTtcbi8vIGhlbHBlciAtIHNldHMgdXAgYW5kIHJldHVybnMgc2VhcmNoYm94XG5jb25zdCBnZXRTZWFyY2hXcmFwID0gKCkgPT4ge1xuICBjb25zdCBzZWFyY2hXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlYXJjaFdyYXAuaWQgPSAnc2VhcmNoV3JhcCc7XG5cbiAgY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoQm94LnR5cGUgPSAndGV4dCc7XG4gIHNlYXJjaEJveC5wbGFjZWhvbGRlciA9ICdFeDogTGl2ZXJwb29sLCBHQic7XG4gIHNlYXJjaEJveC5pZCA9ICdzZWFyY2hCb3gnO1xuXG4gIGNvbnN0IHNlYXJjaEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgc2VhcmNoSWNvbi5zcmMgPSBzZWFyY2g7XG5cbiAgc2VhcmNoV3JhcC5hcHBlbmQoc2VhcmNoQm94KTtcbiAgc2VhcmNoV3JhcC5hcHBlbmQoc2VhcmNoSWNvbik7XG5cbiAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZXRDdXJyZW50Rm9yZWNhc3Qoc2VhcmNoQm94LnZhbHVlKTtcbiAgfSk7XG5cbiAgc2VhcmNoQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSAhPSAnRW50ZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEN1cnJlbnRGb3JlY2FzdChzZWFyY2hCb3gudmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gc2VhcmNoV3JhcDtcbn07XG5cbmV4cG9ydCB7Zm9yZWNhc3RHZW5lcmF0b3J9O1xuIiwiaW1wb3J0IHtkaXNwbGF5Rm9yZWNhc3R9IGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IHtmb3JlY2FzdEdlbmVyYXRvcn0gZnJvbSAnLi9mb3JlY2FzdEVsZW1lbnRzJztcbmltcG9ydCB7Z2V0VG9kYXlzRm9yZWNhc3R9IGZyb20gJy4uL3dlYXRoZXJEYXRhL2FwaVF1ZXJpZXMnO1xuXG5hc3luYyBmdW5jdGlvbiBzZXRDdXJyZW50Rm9yZWNhc3QobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0b2RheXNGb3JlY2FzdCA9IGF3YWl0IGdldFRvZGF5c0ZvcmVjYXN0KGxvY2F0aW9uKTtcbiAgICBjb25zdCBjdXJyZW50Zm9yZWNhc3QgPVxuICAgICAgZm9yZWNhc3RHZW5lcmF0b3IuZ2V0VG9kYXlzRm9yZWNhc3RFbGVtZW50KHRvZGF5c0ZvcmVjYXN0KTtcbiAgICBjb25zdCBleHRyYUluZm8gPSBmb3JlY2FzdEdlbmVyYXRvci5nZXRUb2RheXNEZXRhaWxzKHRvZGF5c0ZvcmVjYXN0KTtcbiAgICBjb25zdCBkYWlseSA9IGZvcmVjYXN0R2VuZXJhdG9yLmdldERhaWx5KHRvZGF5c0ZvcmVjYXN0KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXlzRm9yZWNhc3RXcmFwJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZGlzcGxheUZvcmVjYXN0KGN1cnJlbnRmb3JlY2FzdCk7XG4gICAgZGlzcGxheUZvcmVjYXN0KGV4dHJhSW5mbyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvb3RlcicpLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kKGRhaWx5KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEJveCcpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEJveCcpLnBsYWNlaG9sZGVyID0gJ0xvY2F0aW9uIG5vdCBmb3VuZC4nO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQge3NldEN1cnJlbnRGb3JlY2FzdH07XG4iLCJsZXQgdW5pdHMgPSAnbWV0cmljJztcblxuXG5jb25zdCBzZXRVbml0cyA9ICh1bml0KSA9PiB7XG4gIHVuaXRzID0gdW5pdDtcbn07XG5cbmNvbnN0IGdldFVuaXRzID0gKCkgPT4ge1xuICByZXR1cm4gdW5pdHM7XG59O1xuXG5jb25zdCBnZXRTcGVlZFVuaXQgPSAoKSA9PiB7XG4gIGlmICh1bml0cyA9PSAnbWV0cmljJykge1xuICAgIHJldHVybiAnIG0vcGgnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnIGsvbWgnO1xuICB9XG59O1xuZXhwb3J0IHtzZXRVbml0cywgZ2V0VW5pdHMsIGdldFNwZWVkVW5pdH07XG4iLCJcbmZ1bmN0aW9uIGluaXRpYWxTZXR1cCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnN0IHRvZGF5c0ZvcmVjYXN0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RheXNGb3JlY2FzdFdyYXAuaWQgPSAndG9kYXlzRm9yZWNhc3RXcmFwJztcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvLmlkID0gJ2luZm9XcmFwJztcbiAgY29uc3QgZGFpbHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhaWx5V3JhcHBlci5pZCA9ICdkYWlseVdyYXBwZXInO1xuICAvLyBjb250ZW50LmFwcGVuZChpbmZvKTtcbiAgY29udGVudC5hcHBlbmQodG9kYXlzRm9yZWNhc3RXcmFwKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5pZCA9ICdmb290ZXInO1xuICBjb250ZW50LmFwcGVuZChmb290ZXIpO1xufVxuXG5jb25zdCBkaXNwbGF5Rm9yZWNhc3QgPSAoZm9yZWNhc3QpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5c0ZvcmVjYXN0V3JhcCcpLmFwcGVuZChmb3JlY2FzdCk7XG59O1xuXG5leHBvcnQge2luaXRpYWxTZXR1cCwgZGlzcGxheUZvcmVjYXN0fTtcbiIsImltcG9ydCBzdW4gZnJvbSAnLi9jbGVhcmRheS5wbmcnO1xuaW1wb3J0IG1vb24gZnJvbSAnLi9jbGVhck5pZ2h0LnBuZyc7XG5pbXBvcnQgY2xvdWR5RGF5IGZyb20gJy4vY2xvdWR5RGF5LnBuZyc7XG5pbXBvcnQgc25vdyBmcm9tICcuL3Nub3cucG5nJztcbmltcG9ydCBkcml6emxlIGZyb20gJy4vZHJpenpsZS5wbmcnO1xuaW1wb3J0IGhhemUgZnJvbSAnLi9oYXplLnBuZyc7XG5pbXBvcnQgdGh1bmRlcnN0b3JtIGZyb20gJy4vdGh1bmRlcnN0b3JtLnBuZyc7XG5pbXBvcnQgY2xvdWR5bmlnaHQgZnJvbSAnLi9jbG91ZHluaWdodC5wbmcnO1xuaW1wb3J0IHNjYXR0ZXJlZENsb3VkIGZyb20gJy4vc2NhdHRlcmVkQ2xvdWRzLnBuZyc7XG5pbXBvcnQgc3Rvcm15TmlnaHQgZnJvbSAnLi9zdG9ybU5pZ2h0LnBuZyc7XG5pbXBvcnQgYnJva2VuQ2xvdWREYXkgZnJvbSAnLi9icm9rZW5DbG91ZERheS5wbmcnO1xuaW1wb3J0IHJhaW5EYXkgZnJvbSAnLi9yYWlueURheS5wbmcnO1xuaW1wb3J0IHJhaW5OaWdodCBmcm9tICcuL3JhaW55TmlnaHQucG5nJztcblxuY29uc3QgaWNvbnMgPSB7XG5cbiAgLy8gbiA9IG5pZ2h0XG4gIC8vIGQgPSBkYXlcblxuICAnMDFkJzogc3VuLFxuICAnMDFuJzogbW9vbixcblxuICAnMDJkJzogY2xvdWR5RGF5LFxuICAnMDJuJzogY2xvdWR5bmlnaHQsXG5cbiAgJzAzZCc6IHNjYXR0ZXJlZENsb3VkLFxuICAnMDNuJzogc2NhdHRlcmVkQ2xvdWQsXG5cbiAgJzA0ZCc6IGJyb2tlbkNsb3VkRGF5LFxuICAnMDRuJzogY2xvdWR5bmlnaHQsXG5cbiAgJzUwZCc6IGhhemUsXG4gICc1MG4nOiBoYXplLFxuXG4gICcxMGQnOiByYWluRGF5LFxuICAnMTBuJzogcmFpbk5pZ2h0LFxuXG4gICcxM2QnOiBzbm93LFxuICAnMTNuJzogc25vdyxcblxuICAnMDlkJzogZHJpenpsZSxcbiAgJzA5bic6IGRyaXp6bGUsXG5cbiAgJzExZCc6IHRodW5kZXJzdG9ybSxcbiAgJzExbic6IHN0b3JteU5pZ2h0LFxuXG59O1xuXG5leHBvcnQge2ljb25zfTtcbiIsImltcG9ydCB7Z2V0VW5pdHN9IGZyb20gJy4uL2FwcC91bml0cyc7XG5pbXBvcnQge0dldEZvcmVjYXN0T2JqZWN0fSBmcm9tICcuL2ZvcmVjYXN0T2JqZWN0JztcblxuY29uc3Qga2V5ID0gJzViZTIxYjdmNDlhZWQ2MTY1NDA3ZmU1M2I0OWViYTgxJztcblxuLy8gcmV0dXJucyB0aGUgY29vcmRzIG9mIGEgbG9jYXRpb25cbi8vIG9uZWNhbGwgcmVxdWlyZXMgY29vcmRzIGluc3RlYWQgb2YgbG9jYXRpb25cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRzQW5kTG9jYXRpb24obG9jYXRpb24pIHtcbiAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2tleX0mdW5pdHM9JHtnZXRVbml0cygpfWAsXG4gICAgICB7bW9kZTogJ2NvcnMnfSxcbiAgKTtcbiAgY29uc3QgbG9jYXRpb25EYXRhSnNvbiA9IGF3YWl0IGxvY2F0aW9uRGF0YS5qc29uKCk7XG4gIGNvbnN0IGxvY2F0aW9uTmFtZSA9XG4gICAgbG9jYXRpb25EYXRhSnNvbi5uYW1lICsgJywgJyArIGxvY2F0aW9uRGF0YUpzb24uc3lzWydjb3VudHJ5J107XG4gIHJldHVybiBbbG9jYXRpb25EYXRhSnNvbi5jb29yZC5sYXQsIGxvY2F0aW9uRGF0YUpzb24uY29vcmQubG9uLCBsb2NhdGlvbk5hbWVdO1xufVxuXG4vLyByZXR1cm5zIGFsbCByZXF1aXJlZCBkYXRhIGluIGEgc2luZ2xlIGNhbGxcbmFzeW5jIGZ1bmN0aW9uIG9uZUNhbGwobG9jYXRpb24pIHtcbiAgY29uc3QgY29vcmRzID0gYXdhaXQgZ2V0Q29vcmRzQW5kTG9jYXRpb24obG9jYXRpb24pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgIGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2Nvb3Jkc1swXX0mbG9uPSR7Y29vcmRzWzFdfSZhcHBpZD0ke2tleX0mdW5pdHM9JHtnZXRVbml0cygpfWAsXG4gICAgICB7bW9kZTogJ2NvcnMnfSxcbiAgKTtcbiAgcmV0dXJuIFtkYXRhLCBjb29yZHNbMl1dO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUb2RheXNGb3JlY2FzdChsb2NhdGlvbikge1xuICBjb25zdCBhbGxGb3JlY2FzdERhdGEgPSBhd2FpdCBvbmVDYWxsKGxvY2F0aW9uKTtcbiAgY29uc3QgZm9yZWNhc3RKc29uID0gYXdhaXQgYWxsRm9yZWNhc3REYXRhWzBdLmpzb24oKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXBcbiAgY29uc3QgdG9kYXlzRm9yZWNhc3QgPSBHZXRGb3JlY2FzdE9iamVjdChmb3JlY2FzdEpzb24sIGFsbEZvcmVjYXN0RGF0YVsxXSk7XG4gIHJldHVybiB0b2RheXNGb3JlY2FzdDtcbn1cblxuZXhwb3J0IHtnZXRUb2RheXNGb3JlY2FzdH07XG4iLCJpbXBvcnQge2dldERheSwgYWRkV2Vla3MsIGVhY2hEYXlPZkludGVydmFsfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQge2dldFNwZWVkVW5pdH0gZnJvbSAnLi4vYXBwL3VuaXRzJztcblxuY29uc3QgR2V0Rm9yZWNhc3RPYmplY3QgPSAoZm9yZWNhc3QsIGxvY2F0aW9uKSA9PiB7XG4gIC8vIHJldHVybnMgdGhlIGRldGFpbHMgZm9yIGRpc3BsYXkgb24gdGhlIHJpZ2h0IHNpZGVcblxuICBjb25zdCBnZXREZXRhaWxzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5PYmplY3QgPSB7fTtcbiAgICBtYWluT2JqZWN0WydGZWVscyBMaWtlJ10gPSBmb3JlY2FzdC5jdXJyZW50WydmZWVsc19saWtlJ107XG4gICAgbWFpbk9iamVjdFsnSHVtaWRpdHknXSA9IGZvcmVjYXN0LmN1cnJlbnQuaHVtaWRpdHkgKyAnJSc7XG4gICAgbWFpbk9iamVjdFsnV2luZCBTcGVlZCddID1cbiAgICAgIE51bWJlci5wYXJzZUZsb2F0KGZvcmVjYXN0LmN1cnJlbnRbJ3dpbmRfc3BlZWQnXSAqIDIuMjM3KS50b1ByZWNpc2lvbigyKSArXG4gICAgICBnZXRTcGVlZFVuaXQoKTtcbiAgICBtYWluT2JqZWN0WydDaGFuY2UgT2YgUmFpbiddID0gZm9yZWNhc3QuaG91cmx5WzBdLnBvcCArICclJztcbiAgICByZXR1cm4gbWFpbk9iamVjdDtcbiAgfTtcbiAgLy8gcmV0dXJucyB0aGUgbWFpbiBmb3JlY2FzdCBvYmplY3QgZm9yIGRpc3BsYXkgb24gdGhlIGxlZnQgc2lkZSBvZiBzY3JlZW5cbiAgY29uc3QgZ2V0TWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluT2JqZWN0ID0ge307XG4gICAgbWFpbk9iamVjdC5kZXNjcmlwdGlvbiA9IGZvcmVjYXN0LmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBtYWluT2JqZWN0LmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgbWFpbk9iamVjdC50ZW1wID0gU3RyaW5nKGZvcmVjYXN0LmN1cnJlbnQudGVtcCk7XG4gICAgbWFpbk9iamVjdC5pY29uS2V5ID0gZm9yZWNhc3QuY3VycmVudC53ZWF0aGVyWzBdLmljb247XG4gICAgcmV0dXJuIG1haW5PYmplY3Q7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGFpbHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZGFpbHlBcnJheSA9IFtdO1xuICAgIGNvbnN0IGRhaWx5ID0gZm9yZWNhc3QuZGFpbHk7XG5cbiAgICBjb25zdCBkYXlzT2ZXZWVrID0ge1xuICAgICAgMDogJ1N1bmRheScsXG4gICAgICAxOiAnTW9uZGF5JyxcbiAgICAgIDI6ICdUdWVzZGF5JyxcbiAgICAgIDM6ICdXZWRuZXNkYXknLFxuICAgICAgNDogJ1RodXJzZGF5JyxcbiAgICAgIDU6ICdGcmlkYXknLFxuICAgICAgNjogJ1NhdHVyZGF5JyxcbiAgICB9O1xuXG4gICAgY29uc3QgZWFjaERheSA9IGVhY2hEYXlPZkludGVydmFsKHtcbiAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgpLFxuICAgICAgZW5kOiBhZGRXZWVrcyhuZXcgRGF0ZSgpLCAxKSxcbiAgICB9KTtcblxuICAgIGVhY2hEYXkuZm9yRWFjaCgoZGF5LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZm9yZWNhc3RPYmogPSB7XG4gICAgICAgIHdlZWtEYXk6IGRheXNPZldlZWtbZ2V0RGF5KGRheSldLFxuICAgICAgICB0ZW1wSGlnaDogZGFpbHlbaW5kZXhdLnRlbXAubWF4LFxuICAgICAgICB0ZW1wTG93OiBkYWlseVtpbmRleF0udGVtcC5taW4sXG4gICAgICAgIGljb246IGRhaWx5W2luZGV4XS53ZWF0aGVyWzBdLmljb24sXG4gICAgICB9O1xuICAgICAgZGFpbHlBcnJheS5wdXNoKGZvcmVjYXN0T2JqKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGFpbHlBcnJheTtcbiAgfTtcblxuICByZXR1cm4ge2dldE1haW4sIGdldERldGFpbHMsIGdldERhaWx5fTtcbn07XG5cbmV4cG9ydCB7R2V0Rm9yZWNhc3RPYmplY3R9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQge2luaXRpYWxTZXR1cH0gZnJvbSAnLi9kb20vZG9tJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQge3NldEN1cnJlbnRGb3JlY2FzdH0gZnJvbSAnLi9hcHAvbG9naWMnO1xuXG5cbmluaXRpYWxTZXR1cCgpO1xuXG5zZXRDdXJyZW50Rm9yZWNhc3QoJ3NvdXRocG9ydCcpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==