"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Plus;

var React = _interopRequireWildcard(require("react"));

var _icon = _interopRequireDefault(require("./icon.js"));

var _omitDollarPrefixedKeys = _interopRequireDefault(require("./omit-dollar-prefixed-keys.js"));

var _themeProvider = require("../styles/theme-provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Plus(props) {
  return React.createElement(_themeProvider.ThemeContext.Consumer, null, function (theme) {
    return theme.icons && theme.icons.Plus ? React.createElement(theme.icons.Plus, _extends({
      title: "Plus",
      viewBox: "0 0 24 24"
    }, (0, _omitDollarPrefixedKeys["default"])(props))) : React.createElement(_icon["default"], _extends({
      title: "Plus",
      viewBox: "0 0 24 24"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 5C12.5523 5 13 5.44772 13 6V11L18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13L13 13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13L6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44771 11 6 11L11 11V6C11 5.44772 11.4477 5 12 5Z"
    }));
  });
}