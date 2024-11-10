/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('30 november 2024')\r\n});\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate),\n/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)\n/* harmony export */ });\n/* всякие ползности */\n\n\n\n// универсальный аниматор\nconst animate = ({ draw, duration = 1000, timingplane = 'linear' }) => {\n\n  const timing = {\n    linear: (x) => x,\n\n    // Кубические функции Безье (в т.ч. ease, ease-in, ease-out и ease-in-out)\n    easeOutCubic: (x) => 1 - Math.pow(1 - x, 3),        // для вертикального скролла\n    easeInOutCubic: (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,\n    easeOutQuart: (x) => 1 - Math.pow(1 - x, 5),\n    aseOutExpo: (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),  // для выезжающих модальных окон\n  };\n  if (!(timingplane in timing)) { timingplane = 'linear'; }\n\n  // максимальное количество анимаций\n  const maxCountAnimation = Math.max(Math.round(duration / 16.7), 1);\n  // счетчик анимаций, максимальное количество анимаций\n  let countAnimation = 0;\n\n  requestAnimationFrame(function animation() {\n    // вычисление текущего состояния анимации\n    // число от 0 до 1 с учетом указанной линейности, заданной в настроку timing\n    let progress = countAnimation === 0 ? 0 :\n      countAnimation > maxCountAnimation - 1 ? 1 :\n        timing[timingplane](countAnimation / maxCountAnimation);\n    draw(progress); // отрисовать\n\n    if (countAnimation < maxCountAnimation) {\n      countAnimation++;\n      requestAnimationFrame(animation);\n    }\n  });\n\n};\n\n// плавный скролл по a.href\nconst smoothScroll = (selectors, duration = 1000) => {\n\n  // счетчик прокрученных строк и целевое кол-во строк к прокрутке всё за 1 сек\n  const scrollY = window.scrollY;\n\n  // необходимо докрутить до начала элемента перехода\n  const transitionHeight = document.querySelector(selectors).getBoundingClientRect().top;\n\n  animate({\n    duration: duration,\n    timingplane: 'easeOutCubic',\n    draw(progress) {\n      // вертикальный скролл документа\n      window.scrollTo(0, scrollY + transitionHeight * progress);\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst menu = () => {\r\n    const menuBtm = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = menu.querySelector('.close-btn')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n    const goServiceBlock = document.querySelector('main a')\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    menuBtm.addEventListener('click', handleMenu)\r\n    closeBtn.addEventListener('click', handleMenu)\r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', (e) => {\r\n        handleMenu()\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)(e.target.getAttribute(\"href\"))\r\n    }))\r\n\r\n    goServiceBlock.addEventListener('click', (e) => {\r\n        const el = e.target.closest('main a')\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)(el.getAttribute(\"href\"))\r\n    })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const popupContent = modal.querySelector('.popup-content');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const closeBtn = modal.querySelector('.popup-close');\r\n\r\n    const showModal = (time = 1000) => {\r\n        modal.style.display = 'block';\r\n\r\n        if (window.innerWidth < 768) {\r\n            popupContent.style.left = `50%`;\r\n            popupContent.style.transform = `translateX(-20rem )`;\r\n\r\n        } else {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                timingplane: 'aseOutExpo',\r\n                draw(progress) {\r\n                    popupContent.style.left = `${100 - progress * 50}%`;\r\n                    popupContent.style.transform = `translateX( ${-20 * progress}rem )`;\r\n                },\r\n                duration: time\r\n            });\r\n        }\r\n    };\r\n\r\n    const hideModal = (time = 300) => {\r\n\r\n        if (window.innerWidth < 768) {\r\n            popupContent.style.left = ``;\r\n            popupContent.style.transform = ``;\r\n            modal.style.display = ''\r\n\r\n        } else {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                draw(progress) {\r\n                    if (progress === 1) {\r\n                        modal.style.opacity = '';\r\n                        popupContent.style.left = ``;\r\n                        popupContent.style.transform = ``;\r\n                        modal.style.display = ''\r\n                    } else modal.style.opacity = `${1 - progress}`;\r\n                },\r\n                duration: time\r\n            });\r\n        }\r\n    };\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => showModal());\r\n    });\r\n    closeBtn.addEventListener('click', () => hideModal());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n    const timerHours = document.getElementById(\"timer-hours\")\r\n    const timerMinutes = document.getElementById('timer-minutes')\r\n    const timerSeconds = document.getElementById('timer-seconds')\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = Math.max(0, (dateStop - dateNow) / 1000)\r\n        let hours = Math.floor(timeRemaining / 3600)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return { timeRemaining, hours, minutes, seconds }\r\n    }\r\n\r\n    const showClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        const picture = (n) => (n < 10) ? ('0' + n).slice(-2) : n;\r\n\r\n        timerHours.textContent = picture(getTime.hours)\r\n        timerMinutes.textContent = picture(getTime.minutes)\r\n        timerSeconds.textContent = picture(getTime.seconds)\r\n        return getTime.timeRemaining\r\n    }\r\n\r\n    const updateClock = setInterval(() => {\r\n        if (!showClock()) clearInterval(updateClock);\r\n    }, 1000);\r\n\r\n    showClock()\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;