"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Filter;

var React = _interopRequireWildcard(require("react"));

var _icon = _interopRequireDefault(require("./icon.js"));

var _omitDollarPrefixedKeys = _interopRequireDefault(require("./omit-dollar-prefixed-keys.js"));

var _themeProvider = require("../styles/theme-provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Filter(props) {
  return React.createElement(_themeProvider.ThemeContext.Consumer, null, function (theme) {
    return theme.icons && theme.icons.Filter ? React.createElement(theme.icons.Filter, _extends({
      title: "Filter",
      viewBox: "0 0 24 24"
    }, (0, _omitDollarPrefixedKeys["default"])(props))) : React.createElement(_icon["default"], _extends({
      title: "Filter",
      viewBox: "0 0 24 24"
    }, props), React.createElement("rect", {
      x: "7",
      y: "11",
      width: "10",
      height: "2",
      rx: "1"
    }), React.createElement("rect", {
      x: "4",
      y: "7",
      width: "16",
      height: "2",
      rx: "1"
    }), React.createElement("rect", {
      x: "10",
      y: "15",
      width: "4",
      height: "2",
      rx: "1"
    }));
  });
}