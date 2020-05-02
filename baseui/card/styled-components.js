"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Thumbnail = exports.Root = exports.HeaderImage = exports.Contents = exports.Body = exports.Action = void 0;

var _index = require("../styles/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Action = (0, _index.styled)('div', function (_ref) {
  var typography = _ref.$theme.typography;
  return _objectSpread({}, typography.font350);
});
exports.Action = Action;
Action.displayName = "Action";
var Body = (0, _index.styled)('div', function (_ref2) {
  var $theme = _ref2.$theme;
  var colors = $theme.colors,
      sizing = $theme.sizing,
      typography = $theme.typography;
  return _objectSpread({
    marginBottom: sizing.scale600,
    color: colors.foregroundAlt
  }, typography.font200);
});
exports.Body = Body;
Body.displayName = "Body";
var Contents = (0, _index.styled)('div', function (_ref3) {
  var $theme = _ref3.$theme;
  var sizing = $theme.sizing;
  return {
    marginLeft: sizing.scale800,
    marginTop: sizing.scale800,
    marginRight: sizing.scale800,
    marginBottom: sizing.scale800
  };
});
exports.Contents = Contents;
Contents.displayName = "Contents";
var HeaderImage = (0, _index.styled)('img', function (_ref4) {
  var borders = _ref4.$theme.borders;
  return {
    borderTopLeftRadius: borders.surfaceBorderRadius,
    borderTopRightRadius: borders.surfaceBorderRadius,
    objectFit: 'contain',
    maxWidth: '100%'
  };
});
exports.HeaderImage = HeaderImage;
HeaderImage.displayName = "HeaderImage";
var Root = (0, _index.styled)('div', function (_ref5) {
  var $theme = _ref5.$theme;
  var borders = $theme.borders,
      lighting = $theme.lighting,
      colors = $theme.colors;
  return _objectSpread({}, borders.border300, {
    boxShadow: lighting.shadow400,
    borderTopLeftRadius: borders.surfaceBorderRadius,
    borderTopRightRadius: borders.surfaceBorderRadius,
    borderBottomLeftRadius: borders.surfaceBorderRadius,
    borderBottomRightRadius: borders.surfaceBorderRadius,
    backgroundColor: colors.backgroundAlt
  });
});
exports.Root = Root;
Root.displayName = "Root";
var Thumbnail = (0, _index.styled)('img', function (props) {
  var _props$$theme = props.$theme,
      borders = _props$$theme.borders,
      sizing = _props$$theme.sizing;
  return _objectSpread({
    "float": 'right',
    height: sizing.scale2400,
    width: sizing.scale2400,
    objectFit: 'cover',
    borderTopLeftRadius: borders.surfaceBorderRadius,
    borderTopRightRadius: borders.surfaceBorderRadius,
    borderBottomLeftRadius: borders.surfaceBorderRadius,
    borderBottomRightRadius: borders.surfaceBorderRadius
  }, borders.border200, {
    margin: "0 0 ".concat(sizing.scale500, " ").concat(sizing.scale500)
  });
});
exports.Thumbnail = Thumbnail;
Thumbnail.displayName = "Thumbnail";
var Title = (0, _index.styled)('h1', function (_ref6) {
  var $theme = _ref6.$theme;
  var colors = $theme.colors,
      sizing = $theme.sizing,
      typography = $theme.typography;
  return _objectSpread({}, typography.font550, {
    color: colors.foreground,
    fontWeight: 500,
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: sizing.scale300,
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0
  });
});
exports.Title = Title;
Title.displayName = "Title";