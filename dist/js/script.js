/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/app.ts":
/*!*******************!*\
  !*** ./ts/app.ts ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.myApp = void 0;
var headerObserver_class_1 = __importDefault(__webpack_require__(/*! modules/headerObserver.class */ "./ts/modules/headerObserver.class.ts"));
var navigation_class_1 = __importDefault(__webpack_require__(/*! modules/navigation.class */ "./ts/modules/navigation.class.ts"));
var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    this.headerObserver = headerObserver_class_1["default"].instance;
    this.navigation = navigation_class_1["default"].instance;
    // Call instance methods
    this.headerObserver.onWindowScroll();
    this.headerObserver.setHeaderShadow();
    // Call the init method
    this.initApp();
  }
  /* Register your methods inside the initApp function here */
  _createClass(App, [{
    key: "initApp",
    value: function initApp() {}
  }]);
  return App;
}();
exports.myApp = new App();

/***/ }),

/***/ "./ts/core/checkMedia.core.ts":
/*!************************************!*\
  !*** ./ts/core/checkMedia.core.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {



/**
 * @function HELPER
 * @returns { string }
 * @description Current page url string
 */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
function mediaScreen(size, screen, callback) {
  var media = window.matchMedia("(".concat(size, " : ").concat(screen, "px)"));
  media.addEventListener('change', function (e) {
    callback(e);
  });
}
exports["default"] = mediaScreen;

/***/ }),

/***/ "./ts/core/startModule.ts":
/*!********************************!*\
  !*** ./ts/core/startModule.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var startModule = function startModule(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      callback();
    });
  } else {
    callback();
  }
};
exports["default"] = startModule;

/***/ }),

/***/ "./ts/modules/UI.core.ts":
/*!*******************************!*\
  !*** ./ts/modules/UI.core.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/**
 * @description: "Application UI constructor"
 * @return: "HTML Elements"
 */
var UI = /*#__PURE__*/_createClass(function UI() {
  _classCallCheck(this, UI);
  this.header = document.querySelector("[data-header]");
  this.headerIntersect = document.querySelector("[data-observer-intercept]");
  this.navBar = document.querySelector("[data-navbar]");
  this.navBarLists = document.querySelector("[data-nav-items]");
  this.navBarList = Array.from(document.querySelectorAll('[data-nav-item]'));
  this.navBarToggle = document.querySelector("[data-toggle]");
});
UI.instance = new UI();
exports["default"] = UI;

/***/ }),

/***/ "./ts/modules/headerObserver.class.ts":
/*!********************************************!*\
  !*** ./ts/modules/headerObserver.class.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var UI_core_1 = __importDefault(__webpack_require__(/*! ./UI.core */ "./ts/modules/UI.core.ts"));
var HeaderObserver = /*#__PURE__*/function () {
  function HeaderObserver() {
    _classCallCheck(this, HeaderObserver);
    this.ui = UI_core_1["default"].instance;
  }
  _createClass(HeaderObserver, [{
    key: "onWindowScroll",
    value: function onWindowScroll() {
      var _a;
      var scrollableWatcher = document.createElement("div");
      scrollableWatcher.setAttribute('data-observer-intercept', '');
      (_a = this.ui) === null || _a === void 0 ? void 0 : _a.header.before(scrollableWatcher);
      this.ui.headerIntersect = document.querySelector("[data-observer-intercept]");
    }
    /**
     * @description Function set a box shadow on header when past scroll a certain point.
     */
  }, {
    key: "setHeaderShadow",
    value: function setHeaderShadow() {
      var _this = this;
      /* The callback that will fire on intersection */
      var onIntersect = function onIntersect(entries) {
        entries.forEach(function (entry) {
          _this.ui.header.toggleAttribute("data-header-box-shadow", !entry.isIntersecting);
        });
      };
      var observer = new IntersectionObserver(onIntersect);
      this.ui.headerIntersect && observer.observe(this.ui.headerIntersect);
    }
  }]);
  return HeaderObserver;
}();
HeaderObserver.instance = new HeaderObserver();
exports["default"] = HeaderObserver;

/***/ }),

/***/ "./ts/modules/navigation.class.ts":
/*!****************************************!*\
  !*** ./ts/modules/navigation.class.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var checkMedia_core_1 = __importDefault(__webpack_require__(/*! core/checkMedia.core */ "./ts/core/checkMedia.core.ts"));
var UI_core_1 = __importDefault(__webpack_require__(/*! ./UI.core */ "./ts/modules/UI.core.ts"));
var Navigation = /*#__PURE__*/function () {
  function Navigation() {
    _classCallCheck(this, Navigation);
    this.ui = UI_core_1["default"].instance;
    this.init();
  }
  _createClass(Navigation, [{
    key: "init",
    value: function init() {
      this.handleNavBarToggleButton();
      this.disableAriaExpanded();
      // this.handleActiveLinkOnPageLoad()
      // this.handleNavigationToggle()
      // this.handleActiveLinkOnclick()
    }
    /**
     * @function HELPER
     * @returns { string }
     * @description Current page url string
     */
  }, {
    key: "getCurrentPage",
    value: function getCurrentPage() {
      return window.location.pathname;
    }
    /**
     * @function HELPER
     * @param listItem
     * @param classList
     * @description Adds active state class to list item element
     */
  }, {
    key: "setActiveLink",
    value: function setActiveLink(listItem, classList) {
      var _a, _b;
      if (((_a = listItem.querySelector("a")) === null || _a === void 0 ? void 0 : _a.getAttribute("href")) === this.getCurrentPage()) {
        listItem.classList.add(classList);
        listItem.closest(".navBarListItem") && ((_b = listItem.closest(".navBarListItem")) === null || _b === void 0 ? void 0 : _b.classList.add(classList));
      }
    }
  }, {
    key: "resetAttributes",
    value: function resetAttributes() {
      var _this$ui = this.ui,
        navBarToggle = _this$ui.navBarToggle,
        navBarLists = _this$ui.navBarLists;
      navBarToggle.setAttribute('aria-expanded', 'false');
      navBarLists.removeAttribute('aria-expanded');
    }
  }, {
    key: "handleNavBarToggleButton",
    value: function handleNavBarToggleButton() {
      var _this$ui2 = this.ui,
        navBarToggle = _this$ui2.navBarToggle,
        navBarLists = _this$ui2.navBarLists;
      this.ui.navBarToggle.addEventListener('click', function () {
        navBarToggle === null || navBarToggle === void 0 ? void 0 : navBarToggle.setAttribute('aria-expanded', "".concat(!(navBarToggle.getAttribute('aria-expanded') === 'true')));
        navBarLists === null || navBarLists === void 0 ? void 0 : navBarLists.setAttribute('aria-expanded', "".concat(!(navBarLists.getAttribute('aria-expanded') === 'true')));
      });
    }
  }, {
    key: "disableAriaExpanded",
    value: function disableAriaExpanded() {
      var _this = this;
      var navBarLists = this.ui.navBarLists;
      (0, checkMedia_core_1["default"])('min-width', '768', function (e) {
        if (e.matches) {
          _this.resetAttributes();
        } else {
          navBarLists.removeAttribute('aria-expanded');
        }
      });
    }
  }]);
  return Navigation;
}();
Navigation.instance = new Navigation();
exports["default"] = Navigation;

/***/ }),

/***/ "./ts/script.ts":
/*!**********************!*\
  !*** ./ts/script.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



/**
 *
 * Below is a list of hashed out modules and is tracked by core.
 * This is the only ts file which will be in core. Local project and can be editted by both.
 * Git will merge in new hashed lines from core as and when new modules are made.
 * Local project amends will be unhased lines; no other core.
 *
 */
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
//import { anchorScroll } from "./core_modules/anchorScoll";
//import { eProtection } from "./core_modules/eProtection";
//import { getMediaQuery } from "./core_modules/checkMedia";
var startModule_1 = __importDefault(__webpack_require__(/*! ./core/startModule */ "./ts/core/startModule.ts"));
var custom = __importStar(__webpack_require__(/*! ./app */ "./ts/app.ts"));
/**
 *
 * DO NOT EDIT ABOVE THIS LINE ON PROJECT (EXPECT FOR UNHASHING)
 * DO NOT EDIT BELOW THIS LINE ON CORE
 *
 */
(0, startModule_1["default"])(function () {
  custom.myApp;
  // custom.myScript();
});

/***/ }),

/***/ "./scss/site.scss":
/*!************************!*\
  !*** ./scss/site.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/vendors/bootstrap.scss":
/*!*************************************!*\
  !*** ./scss/vendors/bootstrap.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/script": 0,
/******/ 			"css/bootstrap": 0,
/******/ 			"css/site": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbase_project_setup"] = self["webpackChunkbase_project_setup"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/bootstrap","css/site"], () => (__webpack_require__("./ts/script.ts")))
/******/ 	__webpack_require__.O(undefined, ["css/bootstrap","css/site"], () => (__webpack_require__("./scss/site.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/bootstrap","css/site"], () => (__webpack_require__("./scss/vendors/bootstrap.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=script.js.map