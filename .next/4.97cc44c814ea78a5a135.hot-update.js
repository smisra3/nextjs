webpackHotUpdate(4,{

/***/ "./reducers/globalReducer/globalReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var initialState = {
  userProfile: {}
};

var globalReducer = function globalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (global);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./reducers/globalReducer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globalReducer__ = __webpack_require__("./reducers/globalReducer/globalReducer.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__globalReducer__["a"]; });


/***/ }),

/***/ "./reducers/rootReducer/rootReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globalReducer__ = __webpack_require__("./reducers/globalReducer/index.js");


var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  global: __WEBPACK_IMPORTED_MODULE_1__globalReducer__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ })

})
//# sourceMappingURL=4.97cc44c814ea78a5a135.hot-update.js.map