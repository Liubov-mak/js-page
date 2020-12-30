/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatejs_page"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var postData = function postData() {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: 'formData'\n    });\n  };\n\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMesage = 'Спасибо! Мы скоро с Вами свяжемся!';\n  var form1 = document.getElementById('form1'),\n      form2 = document.getElementById('form2'),\n      form3 = document.getElementById('form3');\n  var form = [form1, form2, form3];\n  console.log(form);\n  var statusMessage = document.createElement('div');\n  statusMessage.style.color = '#19b5fe';\n  statusMessage.style.margin = '25px';\n  form.forEach(function (element) {\n    element.addEventListener('submit', function (event) {\n      event.preventDefault();\n      element.appendChild(statusMessage);\n      var formData = new FormData(element);\n      statusMessage.textContent = loadMessage;\n      postData(formData).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('status network not 200');\n        }\n\n        statusMessage.textContent = successMesage;\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n      });\n      setTimeout(function () {\n        element.querySelectorAll('input').forEach(function (element) {\n          element.value = '';\n        });\n      }, 1000);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://js-page/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "b3af8c4d54478582bd8c"
/******/ 	})();
/******/ 	
/******/ }
);