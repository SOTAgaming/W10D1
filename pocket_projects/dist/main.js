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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clock; });\nclass Clock {\n  constructor(){\n    let date = new Date();\n    this.seconds = date.getSeconds();\n    this.minutes = date.getMinutes();\n    this.hours = date.getHours();\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    // setInterval(this._tick.bind(this), 0);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    // Use console.log to print it.\n    // console.log(timeString);\n    return timeString;\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    return this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! exports provided: dogs, dogLinkCreator, attachDogLinks, handleEnter, handleLeave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dogs\", function() { return dogs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dogLinkCreator\", function() { return dogLinkCreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attachDogLinks\", function() { return attachDogLinks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleEnter\", function() { return handleEnter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleLeave\", function() { return handleLeave; });\n\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nlet nav = document.querySelector('.drop-down-dog-nav');\nlet ul = document.querySelector('.drop-down-dog-list');\n\nfunction dogLinkCreator() {\n  let accum = [];\n  for (let name in dogs) {\n    let link = document.createElement(\"a\");\n    link.href = dogs[name];\n    link.innerHTML = name;\n    let li = document.createElement(\"li\");\n    li.className = \"dog-link\";\n    li.appendChild(link);\n    accum.push(li);\n  }\n  return accum;\n}\n\nfunction attachDogLinks() {\n  let dogLinks  = dogLinkCreator();\n  for(let i = 0; i < dogLinks.length; i++){\n    ul.appendChild(dogLinks[i]);\n  }\n}\n\n\nfunction handleEnter(){\n  nav.addEventListener('mouseover', (e) => {\n    ul.classList.remove('hidden');\n  });\n}\n\nfunction handleLeave(){\n  nav.addEventListener('mouseleave', (e) => {\n    ul.classList.add('hidden');\n  });\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _slide_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide_scroll */ \"./src/slide_scroll.js\");\n\n\n\n\n\n\n\nconsole.log(Object(_drop_down__WEBPACK_IMPORTED_MODULE_2__[\"dogLinkCreator\"])(_drop_down__WEBPACK_IMPORTED_MODULE_2__[\"dogs\"]));\nconst clock = new _clock__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nlet clockDiv = document.querySelector('#clock');\n// let arr = [\n//   {\n//     \"done\": false,\n//     todo: \"walk the dog\"\n//   },\n//   {\n//     \"done\": true,\n//     todo: \"feed the dog\"\n//   }\n// ];\nObject(_drop_down__WEBPACK_IMPORTED_MODULE_2__[\"attachDogLinks\"])();\nObject(_drop_down__WEBPACK_IMPORTED_MODULE_2__[\"handleEnter\"])();\nObject(_drop_down__WEBPACK_IMPORTED_MODULE_2__[\"handleLeave\"])();\nObject(_todo_list__WEBPACK_IMPORTED_MODULE_3__[\"addTodo\"])();\nlet initial = window.localStorage.getItem(\"todos\") || \"[]\";\nObject(_todo_list__WEBPACK_IMPORTED_MODULE_3__[\"populateList\"])(JSON.parse(initial));\nObject(_todo_list__WEBPACK_IMPORTED_MODULE_3__[\"checkbox\"])();\nObject(_slide_scroll__WEBPACK_IMPORTED_MODULE_4__[\"scrollListener\"])();\n\n\n// htmlGenerator(clock.printTime(), clockDiv);\n\nsetInterval(() => {\n  Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(clock._tick.bind(clock)(), clockDiv)\n}, 1000);\n\n\n\n\n// window.addEventListener(\"scroll\", (e) => {\n\n//   if (window.innerHeight > img.y - img.height) {\n\n//   }\n\n// });\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slide_scroll.js":
/*!*****************************!*\
  !*** ./src/slide_scroll.js ***!
  \*****************************/
/*! exports provided: scrollListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollListener\", function() { return scrollListener; });\nfunction debounce(func, wait = 20, immediate = true) {\n  let timeout;\n\n  // This is the function that is actually executed when\n  // the DOM event is triggered.\n  return function executedFunction() {\n    // Store the context of this and any\n    // parameters passed to executedFunction\n    const context = this;\n    const args = arguments;\n    \n    // The function to be called after debounce time has elapsed\n    const later = function () {\n      // null timeout to indicate the debounce ended\n      timeout = null;\n\n      // Call function now if you did not in the beginning\n      if (!immediate) func.apply(context, args);\n    };\n\n    // Determine if you should call the function\n    // on the leading or trail end\n    const callNow = immediate && !timeout;\n\n    // This will reset the waiting every function execution.\n    clearTimeout(timeout);\n\n    // Restart the debounce waiting period - returns true\n    timeout = setTimeout(later, wait);\n\n    // Call immediately if you're doing a leading end execution\n    if (callNow) func.apply(context, args);\n  };\n}\n\nlet img = document.querySelector(\"img\");\nimg.addEventListener(\"scroll\", (e) => {\n  console.log(\"hello\");\n});\n\nfunction scrollListener(){\n  let imgs = document.querySelectorAll(\"img\");\n\n  for (let i = 0; i < imgs.length; i++) {\n    let img = imgs[i];\n    window.addEventListener(\"scroll\", (e) => {\n\n      if (window.innerHeight > img.y - img.height) {\n\n        img.classList.add('active');\n      } else {\n        img.classList.remove('active');\n      }\n      if ((img.y + img.height) < 0) {\n        img.classList.remove('active');\n\n      }\n\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/slide_scroll.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! exports provided: addTodo, populateList, checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateList\", function() { return populateList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkbox\", function() { return checkbox; });\nlet todos = [];\n\nlet ul = document.querySelector(\".todos\");\nlet form = document.querySelector(\".add-todo-form\");\n\nfunction addTodo() {\n    form.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      let task = form.children[0].value;\n      let todoObject = {\n        \"done\": false,\n        todo: task\n      };\n      todos.push(todoObject);\n      form.children[0].value = \"\";\n      populateList([todoObject]);\n      let storage = window.localStorage.getItem(\"todos\");\n      if (!storage) {\n        storage = \"[]\";\n      } \n      let parsed = JSON.parse(storage);\n      parsed.push(todoObject);\n      let stringified = JSON.stringify(parsed);\n      window.localStorage.setItem(\"todos\", stringified); \n    });\n}\n\nfunction populateList(array) {\n  return array.map(todo => {\n    let label = document.createElement(\"label\");\n    label.innerText = todo[\"todo\"];\n    let checkbox = document.createElement(\"input\");\n    checkbox.type = \"checkbox\";\n    checkbox.checked = todo[\"done\"];\n    let li = document.createElement(\"li\");\n    li.appendChild(label);\n    li.appendChild(checkbox);\n    ul.appendChild(li);\n  });\n}\n\nfunction checkbox (){\n  ul.addEventListener('change', (e) => {\n    let label = e.target.previousSibling;\n    let todos = JSON.parse(localStorage.getItem('todos'));\n    let todo;\n    let idx;\n    for(let i = 0; i < todos.length; i++){\n      if(label.innerText === todos[i]['todo']){\n        todo = todos[i];\n        idx = i;\n        // console.log(todo);\n      }\n    }\n    if(e.target.checked){\n      todo['done'] = true;\n    } else {\n      todo['done'] = false;\n    }\n    todos[idx] = todo;\n    let str = JSON.stringify(todos);\n    localStorage.setItem('todos', str);\n    console.log(todo);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  let element = document.createElement('p');\n  element.innerText = string;\n  if (htmlElement.children[0]){\n    htmlElement.removeChild(htmlElement.children[0]);\n  }\n  htmlElement.appendChild(element);\n\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });