"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TriangleLeft;

var React = _interopRequireWildcard(require("react"));

var _icon = _interopRequireDefault(require("./icon.js"));

var _omitDollarPrefixedKeys = _interopRequireDefault(require("./omit-dollar-prefixed-keys.js"));

var _themeProvider = require("../styles/theme-provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function TriangleLeft(props) {
  return React.createElement(_themeProvider.ThemeContext.Consumer, null, function (theme) {
    return theme.icons && theme.icons.TriangleLeft ? React.createElement(theme.icons.TriangleLeft, _extends({
      title: "Triangle Left",
      viewBox: "0 0 24 24"
    }, (0, _omitDollarPrefixedKeys["default"])(props))) : React.createElement(_icon["default"], _extends({
      title: "Triangle Left",
      viewBox: "0 0 24 24"
    }, props), React.createElement("path", {
      d: "M8.70711 11.2929L13.1464 6.85355C13.4614 6.53857 14 6.76165 14 7.20711L14 16.7929C14 17.2383 13.4614 17.4614 13.1464 17.1464L8.70711 12.7071C8.31658 12.3166 8.31658 11.6834 8.70711 11.2929Z"
    }));
  });
}