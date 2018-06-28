/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/laravel.loc/ysbm/node_modules/popper.js/dist/esm/popper.js'");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/laravel.loc/ysbm/node_modules/jquery/dist/jquery.js'");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(43);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(13);

window.Vue = __webpack_require__(36);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', __webpack_require__(39));

var app = new Vue({
  el: '#app'
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(14);
window.Popper = __webpack_require__(3).default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = __webpack_require__(4);

  __webpack_require__(16);
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(17);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/laravel.loc/ysbm/node_modules/lodash/lodash.js'");

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/laravel.loc/ysbm/node_modules/bootstrap/dist/js/bootstrap.js'");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/laravel.loc/ysbm/node_modules/axios/index.js'");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/laravel.loc/ysbm/node_modules/vue/dist/vue.common.js'");

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(40)
/* script */
var __vue_script__ = __webpack_require__(41)
/* template */
var __vue_template__ = __webpack_require__(42)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ExampleComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7168fb6a", Component.options)
  } else {
    hotAPI.reload("data-v-7168fb6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/laravel.loc/ysbm/node_modules/vue-loader/lib/component-normalizer.js'");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ReferenceError: Unknown plugin \"transform-object-rest-spread\" specified in \"base\" at 0, attempted to resolve relative to \"/var/www/laravel.loc/ysbm/resources/assets/js/components\"\n    at /var/www/laravel.loc/ysbm/node_modules/babel-core/lib/transformation/file/options/option-manager.js:180:17\n    at Array.map (<anonymous>)\n    at Function.normalisePlugins (/var/www/laravel.loc/ysbm/node_modules/babel-core/lib/transformation/file/options/option-manager.js:158:20)\n    at OptionManager.mergeOptions (/var/www/laravel.loc/ysbm/node_modules/babel-core/lib/transformation/file/options/option-manager.js:234:36)\n    at OptionManager.init (/var/www/laravel.loc/ysbm/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)\n    at File.initOptions (/var/www/laravel.loc/ysbm/node_modules/babel-core/lib/transformation/file/index.js:212:65)\n    at new File (/var/www/laravel.loc/ysbm/node_modules/babel-core/lib/transformation/file/index.js:135:24)\n    at Pipeline.transform (/var/www/laravel.loc/ysbm/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/var/www/laravel.loc/ysbm/node_modules/babel-loader/lib/index.js:50:20)\n    at /var/www/laravel.loc/ysbm/node_modules/babel-loader/lib/fs-cache.js:118:18\n    at ReadFileContext.callback (/var/www/laravel.loc/ysbm/node_modules/babel-loader/lib/fs-cache.js:31:21)\n    at FSReqWrap.readFileAfterOpen [as oncomplete] (fs.js:441:13)");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: Cannot read property 'split' of null\n    at splitPath (/var/www/laravel.loc/ysbm/node_modules/prettier/third-party.js:5376:25)\n    at Object.exports.sync [as findParentDir] (/var/www/laravel.loc/ysbm/node_modules/prettier/third-party.js:5403:20)\n    at loadPlugins (/var/www/laravel.loc/ysbm/node_modules/prettier/index.js:26833:36)\n    at /var/www/laravel.loc/ysbm/node_modules/prettier/index.js:31215:16\n    at Object.format (/var/www/laravel.loc/ysbm/node_modules/prettier/index.js:31236:12)\n    at Object.module.exports (/var/www/laravel.loc/ysbm/node_modules/vue-loader/lib/template-compiler/index.js:80:23)");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n@import '~bootstrap/scss/bootstrap';\n^\n      File to import not found or unreadable: /var/www/laravel.loc/ysbm/node_modules/bootstrap/scss/bootstrap.scss.\n      in /var/www/laravel.loc/ysbm/resources/assets/sass/app.scss (line 9, column 1)\n    at runLoaders (/var/www/laravel.loc/ysbm/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /var/www/laravel.loc/ysbm/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /var/www/laravel.loc/ysbm/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/var/www/laravel.loc/ysbm/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/var/www/laravel.loc/ysbm/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.done [as callback] (/var/www/laravel.loc/ysbm/node_modules/neo-async/async.js:7974:18)\n    at options.error (/var/www/laravel.loc/ysbm/node_modules/node-sass/lib/index.js:294:32)");

/***/ })
/******/ ]);