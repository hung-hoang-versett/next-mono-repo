"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./azureConfig/NavigationClient.ts":
/*!*****************************************!*\
  !*** ./azureConfig/NavigationClient.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CustomNavigationClient\": () => (/* binding */ CustomNavigationClient)\n/* harmony export */ });\n/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/msal-browser */ \"@azure/msal-browser\");\n/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/**\n * This is an example for overriding the default function MSAL uses to navigate to other urls in your webpage\n */\nclass CustomNavigationClient extends _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.NavigationClient {\n  constructor(router) {\n    super();\n\n    _defineProperty(this, \"router\", void 0);\n\n    this.router = router;\n  }\n  /**\n   * Navigates to other pages within the same web application\n   * You can use the useRouter hook provided by next.js to take advantage of client-side routing\n   * @param url\n   * @param options\n   */\n\n\n  async navigateInternal(url, options) {\n    const relativePath = url.replace(window.location.origin, \"\");\n\n    if (options.noHistory) {\n      this.router.replace(relativePath);\n    } else {\n      this.router.push(relativePath);\n    }\n\n    return false;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9henVyZUNvbmZpZy9OYXZpZ2F0aW9uQ2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ08sTUFBTUMsc0JBQU4sU0FBcUNELGlFQUFyQyxDQUFzRDtBQUczREUsRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQXFCO0FBQzlCOztBQUQ4Qjs7QUFFOUIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUN3QixRQUFoQkMsZ0JBQWdCLENBQUNDLEdBQUQsRUFBY0MsT0FBZCxFQUEwQztBQUM5RCxVQUFNQyxZQUFZLEdBQUdGLEdBQUcsQ0FBQ0csT0FBSixDQUFZQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQTVCLEVBQW9DLEVBQXBDLENBQXJCOztBQUNBLFFBQUlMLE9BQU8sQ0FBQ00sU0FBWixFQUF1QjtBQUNyQixXQUFLVCxNQUFMLENBQVlLLE9BQVosQ0FBb0JELFlBQXBCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0osTUFBTCxDQUFZVSxJQUFaLENBQWlCTixZQUFqQjtBQUNEOztBQUVELFdBQU8sS0FBUDtBQUNEOztBQXZCMEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9henVyZUNvbmZpZy9OYXZpZ2F0aW9uQ2xpZW50LnRzP2YyNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2aWdhdGlvbkNsaWVudCwgTmF2aWdhdGlvbk9wdGlvbnMgfSBmcm9tIFwiQGF6dXJlL21zYWwtYnJvd3NlclwiO1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuLyoqXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgZm9yIG92ZXJyaWRpbmcgdGhlIGRlZmF1bHQgZnVuY3Rpb24gTVNBTCB1c2VzIHRvIG5hdmlnYXRlIHRvIG90aGVyIHVybHMgaW4geW91ciB3ZWJwYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21OYXZpZ2F0aW9uQ2xpZW50IGV4dGVuZHMgTmF2aWdhdGlvbkNsaWVudCB7XG4gIHByaXZhdGUgcm91dGVyOiBOZXh0Um91dGVyO1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlcjogTmV4dFJvdXRlcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGVzIHRvIG90aGVyIHBhZ2VzIHdpdGhpbiB0aGUgc2FtZSB3ZWIgYXBwbGljYXRpb25cbiAgICogWW91IGNhbiB1c2UgdGhlIHVzZVJvdXRlciBob29rIHByb3ZpZGVkIGJ5IG5leHQuanMgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgY2xpZW50LXNpZGUgcm91dGluZ1xuICAgKiBAcGFyYW0gdXJsXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBhc3luYyBuYXZpZ2F0ZUludGVybmFsKHVybDogc3RyaW5nLCBvcHRpb25zOiBOYXZpZ2F0aW9uT3B0aW9ucykge1xuICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHVybC5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sIFwiXCIpO1xuICAgIGlmIChvcHRpb25zLm5vSGlzdG9yeSkge1xuICAgICAgdGhpcy5yb3V0ZXIucmVwbGFjZShyZWxhdGl2ZVBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5wdXNoKHJlbGF0aXZlUGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmF2aWdhdGlvbkNsaWVudCIsIkN1c3RvbU5hdmlnYXRpb25DbGllbnQiLCJjb25zdHJ1Y3RvciIsInJvdXRlciIsIm5hdmlnYXRlSW50ZXJuYWwiLCJ1cmwiLCJvcHRpb25zIiwicmVsYXRpdmVQYXRoIiwicmVwbGFjZSIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibm9IaXN0b3J5IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./azureConfig/NavigationClient.ts\n");

/***/ }),

/***/ "./azureConfig/authConfig.ts":
/*!***********************************!*\
  !*** ./azureConfig/authConfig.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"msalConfig\": () => (/* binding */ msalConfig),\n/* harmony export */   \"loginRequest\": () => (/* binding */ loginRequest),\n/* harmony export */   \"graphConfig\": () => (/* binding */ graphConfig)\n/* harmony export */ });\nconst AzureActiveDirectoryAppClientId = \"34faef4c-ec7e-4bb7-8d73-49fd24701d9d\";\nconst AzureActiveDirectoryAppTenantId = \"b812daa0-e4c0-4231-9b49-dedcf3b1477e\";\nconst AzureActiveDirectoryAppRedirectUri = \"http://localhost:3000\"; // Config object to be passed to Msal on creation\n\nconst msalConfig = {\n  auth: {\n    clientId: AzureActiveDirectoryAppClientId,\n    authority: `https://login.microsoftonline.com/${AzureActiveDirectoryAppTenantId}`,\n    redirectUri: AzureActiveDirectoryAppRedirectUri,\n    postLogoutRedirectUri: \"/\"\n  }\n}; // Add here scopes for id token to be used at MS Identity Platform endpoints.\n\nconst loginRequest = {\n  scopes: [\"User.Read\"]\n}; // Add here the endpoints for MS Graph API services you would like to use.\n\nconst graphConfig = {\n  // graphMeEndpoint: \"https://graph.microsoft.com\",\n  graphMeEndpoint: \"https://graph.microsoft.com/v1.0/me\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9henVyZUNvbmZpZy9hdXRoQ29uZmlnLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE1BQU1BLCtCQUFvQyxHQUN4Q0Msc0NBREY7QUFFQSxNQUFNRywrQkFBb0MsR0FDeENILHNDQURGO0FBRUEsTUFBTUssa0NBQXVDLEdBQzNDTCx1QkFERixFQUVBOztBQUNPLE1BQU1PLFVBQXlCLEdBQUc7QUFDdkNDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxRQUFRLEVBQUVWLCtCQUROO0FBRUpXLElBQUFBLFNBQVMsRUFBRyxxQ0FBb0NQLCtCQUFnQyxFQUY1RTtBQUdKUSxJQUFBQSxXQUFXLEVBQUVOLGtDQUhUO0FBSUpPLElBQUFBLHFCQUFxQixFQUFFO0FBSm5CO0FBRGlDLENBQWxDLEVBU1A7O0FBQ08sTUFBTUMsWUFBMEIsR0FBRztBQUN4Q0MsRUFBQUEsTUFBTSxFQUFFLENBQUMsV0FBRDtBQURnQyxDQUFuQyxFQUlQOztBQUNPLE1BQU1DLFdBQVcsR0FBRztBQUN6QjtBQUNBQyxFQUFBQSxlQUFlLEVBQUU7QUFGUSxDQUFwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL2F6dXJlQ29uZmlnL2F1dGhDb25maWcudHM/NGQ4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBQb3B1cFJlcXVlc3QgfSBmcm9tIFwiQGF6dXJlL21zYWwtYnJvd3NlclwiO1xuY29uc3QgQXp1cmVBY3RpdmVEaXJlY3RvcnlBcHBDbGllbnRJZDogYW55ID1cbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVpVUkVfQUNUSVZFX0RJUkVDVE9SWV9BUFBfQ0xJRU5UX0lEO1xuY29uc3QgQXp1cmVBY3RpdmVEaXJlY3RvcnlBcHBUZW5hbnRJZDogYW55ID1cbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVpVUkVfQUNUSVZFX0RJUkVDVE9SWV9BUFBfVEVOQU5UX0lEO1xuY29uc3QgQXp1cmVBY3RpdmVEaXJlY3RvcnlBcHBSZWRpcmVjdFVyaTogYW55ID1cbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVpVUkVfQUNUSVZFX0RJUkVDVE9SWV9BUFBfUkVESVJFQ1RfVVJJO1xuLy8gQ29uZmlnIG9iamVjdCB0byBiZSBwYXNzZWQgdG8gTXNhbCBvbiBjcmVhdGlvblxuZXhwb3J0IGNvbnN0IG1zYWxDb25maWc6IENvbmZpZ3VyYXRpb24gPSB7XG4gIGF1dGg6IHtcbiAgICBjbGllbnRJZDogQXp1cmVBY3RpdmVEaXJlY3RvcnlBcHBDbGllbnRJZCxcbiAgICBhdXRob3JpdHk6IGBodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vJHtBenVyZUFjdGl2ZURpcmVjdG9yeUFwcFRlbmFudElkfWAsXG4gICAgcmVkaXJlY3RVcmk6IEF6dXJlQWN0aXZlRGlyZWN0b3J5QXBwUmVkaXJlY3RVcmksXG4gICAgcG9zdExvZ291dFJlZGlyZWN0VXJpOiBcIi9cIixcbiAgfSxcbn07XG5cbi8vIEFkZCBoZXJlIHNjb3BlcyBmb3IgaWQgdG9rZW4gdG8gYmUgdXNlZCBhdCBNUyBJZGVudGl0eSBQbGF0Zm9ybSBlbmRwb2ludHMuXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0OiBQb3B1cFJlcXVlc3QgPSB7XG4gIHNjb3BlczogW1wiVXNlci5SZWFkXCJdLFxufTtcblxuLy8gQWRkIGhlcmUgdGhlIGVuZHBvaW50cyBmb3IgTVMgR3JhcGggQVBJIHNlcnZpY2VzIHlvdSB3b3VsZCBsaWtlIHRvIHVzZS5cbmV4cG9ydCBjb25zdCBncmFwaENvbmZpZyA9IHtcbiAgLy8gZ3JhcGhNZUVuZHBvaW50OiBcImh0dHBzOi8vZ3JhcGgubWljcm9zb2Z0LmNvbVwiLFxuICBncmFwaE1lRW5kcG9pbnQ6IFwiaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tL3YxLjAvbWVcIixcbn07XG4iXSwibmFtZXMiOlsiQXp1cmVBY3RpdmVEaXJlY3RvcnlBcHBDbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BWlVSRV9BQ1RJVkVfRElSRUNUT1JZX0FQUF9DTElFTlRfSUQiLCJBenVyZUFjdGl2ZURpcmVjdG9yeUFwcFRlbmFudElkIiwiTkVYVF9QVUJMSUNfQVpVUkVfQUNUSVZFX0RJUkVDVE9SWV9BUFBfVEVOQU5UX0lEIiwiQXp1cmVBY3RpdmVEaXJlY3RvcnlBcHBSZWRpcmVjdFVyaSIsIk5FWFRfUFVCTElDX0FaVVJFX0FDVElWRV9ESVJFQ1RPUllfQVBQX1JFRElSRUNUX1VSSSIsIm1zYWxDb25maWciLCJhdXRoIiwiY2xpZW50SWQiLCJhdXRob3JpdHkiLCJyZWRpcmVjdFVyaSIsInBvc3RMb2dvdXRSZWRpcmVjdFVyaSIsImxvZ2luUmVxdWVzdCIsInNjb3BlcyIsImdyYXBoQ29uZmlnIiwiZ3JhcGhNZUVuZHBvaW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./azureConfig/authConfig.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"msalInstance\": () => (/* binding */ msalInstance),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/msal-react */ \"@azure/msal-react\");\n/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var azureConfig_NavigationClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! azureConfig/NavigationClient */ \"./azureConfig/NavigationClient.ts\");\n/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/msal-browser */ \"@azure/msal-browser\");\n/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var azureConfig_authConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! azureConfig/authConfig */ \"./azureConfig/authConfig.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Applications/MAMP/htdocs/Learn/next-mono-repo/packages/web/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst msalInstance = new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__.PublicClientApplication(azureConfig_authConfig__WEBPACK_IMPORTED_MODULE_4__.msalConfig); // Account selection logic is app dependent. Adjust as needed for different use cases.\n\nconst accounts = msalInstance.getAllAccounts();\n\nif (accounts.length > 0) {\n  msalInstance.setActiveAccount(accounts[0]);\n}\n\nmsalInstance.addEventCallback(event => {\n  if (event.eventType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__.EventType.LOGIN_SUCCESS && event.payload) {\n    const payload = event.payload;\n    const account = payload.account;\n    msalInstance.setActiveAccount(account);\n  }\n});\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const navigationClient = new azureConfig_NavigationClient__WEBPACK_IMPORTED_MODULE_2__.CustomNavigationClient(router);\n  msalInstance.setNavigationClient(navigationClient);\n  console.log(\"navigationClient\", navigationClient);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_azure_msal_react__WEBPACK_IMPORTED_MODULE_0__.MsalProvider, {\n    instance: msalInstance,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7O0FBQ08sTUFBTU0sWUFBWSxHQUFHLElBQUlILHdFQUFKLENBQTRCRSw4REFBNUIsQ0FBckIsRUFFUDs7QUFDQSxNQUFNRSxRQUFRLEdBQUdELFlBQVksQ0FBQ0UsY0FBYixFQUFqQjs7QUFDQSxJQUFJRCxRQUFRLENBQUNFLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkJILEVBQUFBLFlBQVksQ0FBQ0ksZ0JBQWIsQ0FBOEJILFFBQVEsQ0FBQyxDQUFELENBQXRDO0FBQ0Q7O0FBRURELFlBQVksQ0FBQ0ssZ0JBQWIsQ0FBK0JDLEtBQUQsSUFBeUI7QUFDckQsTUFBSUEsS0FBSyxDQUFDQyxTQUFOLEtBQW9CVCx3RUFBcEIsSUFBK0NRLEtBQUssQ0FBQ0csT0FBekQsRUFBa0U7QUFDaEUsVUFBTUEsT0FBTyxHQUFHSCxLQUFLLENBQUNHLE9BQXRCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHRCxPQUFPLENBQUNDLE9BQXhCO0FBQ0FWLElBQUFBLFlBQVksQ0FBQ0ksZ0JBQWIsQ0FBOEJNLE9BQTlCO0FBQ0Q7QUFDRixDQU5EOztBQU9BLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUFtRDtBQUNqRCxRQUFNQyxNQUFNLEdBQUduQixzREFBUyxFQUF4QjtBQUNBLFFBQU1vQixnQkFBZ0IsR0FBRyxJQUFJbkIsZ0ZBQUosQ0FBMkJrQixNQUEzQixDQUF6QjtBQUNBZCxFQUFBQSxZQUFZLENBQUNnQixtQkFBYixDQUFpQ0QsZ0JBQWpDO0FBQ0FFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDSCxnQkFBaEM7QUFDQSxzQkFDRSw4REFBQywyREFBRDtBQUFjLFlBQVEsRUFBRWYsWUFBeEI7QUFBQSwyQkFDRSw4REFBQyxTQUFELG9CQUFlYSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFDRCxpRUFBZUYsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3BhZ2VzL19hcHAudHN4PzcyMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgTXNhbFByb3ZpZGVyIH0gZnJvbSBcIkBhenVyZS9tc2FsLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEN1c3RvbU5hdmlnYXRpb25DbGllbnQgfSBmcm9tIFwiYXp1cmVDb25maWcvTmF2aWdhdGlvbkNsaWVudFwiO1xuaW1wb3J0IHtcbiAgUHVibGljQ2xpZW50QXBwbGljYXRpb24sXG4gIEV2ZW50VHlwZSxcbiAgRXZlbnRNZXNzYWdlLFxuICBBdXRoZW50aWNhdGlvblJlc3VsdCxcbn0gZnJvbSBcIkBhenVyZS9tc2FsLWJyb3dzZXJcIjtcbmltcG9ydCB7IG1zYWxDb25maWcgfSBmcm9tIFwiYXp1cmVDb25maWcvYXV0aENvbmZpZ1wiO1xuZXhwb3J0IGNvbnN0IG1zYWxJbnN0YW5jZSA9IG5ldyBQdWJsaWNDbGllbnRBcHBsaWNhdGlvbihtc2FsQ29uZmlnKTtcblxuLy8gQWNjb3VudCBzZWxlY3Rpb24gbG9naWMgaXMgYXBwIGRlcGVuZGVudC4gQWRqdXN0IGFzIG5lZWRlZCBmb3IgZGlmZmVyZW50IHVzZSBjYXNlcy5cbmNvbnN0IGFjY291bnRzID0gbXNhbEluc3RhbmNlLmdldEFsbEFjY291bnRzKCk7XG5pZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICBtc2FsSW5zdGFuY2Uuc2V0QWN0aXZlQWNjb3VudChhY2NvdW50c1swXSk7XG59XG5cbm1zYWxJbnN0YW5jZS5hZGRFdmVudENhbGxiYWNrKChldmVudDogRXZlbnRNZXNzYWdlKSA9PiB7XG4gIGlmIChldmVudC5ldmVudFR5cGUgPT09IEV2ZW50VHlwZS5MT0dJTl9TVUNDRVNTICYmIGV2ZW50LnBheWxvYWQpIHtcbiAgICBjb25zdCBwYXlsb2FkID0gZXZlbnQucGF5bG9hZCBhcyBBdXRoZW50aWNhdGlvblJlc3VsdDtcbiAgICBjb25zdCBhY2NvdW50ID0gcGF5bG9hZC5hY2NvdW50O1xuICAgIG1zYWxJbnN0YW5jZS5zZXRBY3RpdmVBY2NvdW50KGFjY291bnQpO1xuICB9XG59KTtcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IG5hdmlnYXRpb25DbGllbnQgPSBuZXcgQ3VzdG9tTmF2aWdhdGlvbkNsaWVudChyb3V0ZXIpO1xuICBtc2FsSW5zdGFuY2Uuc2V0TmF2aWdhdGlvbkNsaWVudChuYXZpZ2F0aW9uQ2xpZW50KTtcbiAgY29uc29sZS5sb2coXCJuYXZpZ2F0aW9uQ2xpZW50XCIsIG5hdmlnYXRpb25DbGllbnQpO1xuICByZXR1cm4gKFxuICAgIDxNc2FsUHJvdmlkZXIgaW5zdGFuY2U9e21zYWxJbnN0YW5jZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Nc2FsUHJvdmlkZXI+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJNc2FsUHJvdmlkZXIiLCJ1c2VSb3V0ZXIiLCJDdXN0b21OYXZpZ2F0aW9uQ2xpZW50IiwiUHVibGljQ2xpZW50QXBwbGljYXRpb24iLCJFdmVudFR5cGUiLCJtc2FsQ29uZmlnIiwibXNhbEluc3RhbmNlIiwiYWNjb3VudHMiLCJnZXRBbGxBY2NvdW50cyIsImxlbmd0aCIsInNldEFjdGl2ZUFjY291bnQiLCJhZGRFdmVudENhbGxiYWNrIiwiZXZlbnQiLCJldmVudFR5cGUiLCJMT0dJTl9TVUNDRVNTIiwicGF5bG9hZCIsImFjY291bnQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsIm5hdmlnYXRpb25DbGllbnQiLCJzZXROYXZpZ2F0aW9uQ2xpZW50IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@azure/msal-browser":
/*!**************************************!*\
  !*** external "@azure/msal-browser" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@azure/msal-browser");

/***/ }),

/***/ "@azure/msal-react":
/*!************************************!*\
  !*** external "@azure/msal-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@azure/msal-react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();