/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatejs_page"]("main",{

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds'),\n      timerDays = document.querySelector('#timer-days');\n\n  function getTimeRemining() {\n    var dateStop = new Date(deadline).getTime(),\n        // дата дедлайна\n    dateNow = new Date().getTime(),\n        // получили текущую дату (чтобы посчитать разницу нам нужно получить милисекунды с использованием метода getTime)\n    timeRemining = (dateStop - dateNow) / 1000,\n        // делим на 1000 чтобы из милисекунды сделать секунды\n    seconds = Math.floor(timeRemining % 60),\n        // секунды\n    minutes = Math.floor(timeRemining / 60 % 60),\n        // минуты\n    hours = Math.floor(timeRemining / 60 / 60) % 24,\n        // часы (24 часа в дне)\n    days = Math.floor(timeRemining / 60 / 60 / 24); // дни\n\n    return {\n      timeRemining: timeRemining,\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function updateClock() {\n    // выводит счет на экран постоянный\n    var timer = getTimeRemining();\n    timerHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours; // добавляет 0 перед числом!\n\n    timerMinutes.textContent = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;\n    timerSeconds.innerHTML = timer.seconds < 10 ? '0' + timer.seconds : timer.seconds;\n    timerDays.textContent = timer.days < 10 ? '0' + timer.days : timer.days;\n\n    if (timer.timeRemining <= 0) {\n      // обнуляет счетчик по истечении срока\n      timerHours.textContent = \"00\";\n      timerHours.style.color = 'red';\n      timerMinutes.textContent = '00';\n      timerMinutes.style.color = 'red';\n      timerSeconds.innerHTML = '00';\n      timerSeconds.style.color = 'red';\n      timerDays.textContent = '00';\n      timerDays.style.color = 'red';\n      clearInterval(timer.timeRemining);\n    }\n    /* if (timer.timeRemining >= 0) {\r\n              setTimeout(updateClock, 1000);   // первый способ с помощью setTimeout\r\n          } */\n\n\n    setInterval(function () {\n      updateClock(); // второй способ с помощью setInterval\n    }, 1000);\n  }\n\n  updateClock();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://js-page/./src/modules/countTimer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "7ca66c127a1b438818c2"
/******/ 	})();
/******/ 	
/******/ }
);