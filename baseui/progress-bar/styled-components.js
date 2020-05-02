"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.BarProgress = exports.Bar = exports.Root = void 0;

var _index = require("../styles/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Root = (0, _index.styled)('div', function (props) {
  return {
    width: '100%'
  };
});
exports.Root = Root;
Root.displayName = "Root";
var Bar = (0, _index.styled)('div', function (props) {
  var $theme = props.$theme;
  var colors = $theme.colors,
      sizing = $theme.sizing,
      borders = $theme.borders;
  var borderRadius = borders.useRoundedCorners ? sizing.scale0 : 0;
  return {
    marginLeft: sizing.scale500,
    marginRight: sizing.scale500,
    marginTop: sizing.scale500,
    marginBottom: sizing.scale500,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    backgroundColor: (0, _index.hexToRgb)(colors.progressbarTrackFill, '0.16'),
    height: '4px'
  };
});
exports.Bar = Bar;
Bar.displayName = "Bar";
var BarProgress = (0, _index.styled)('div', function (props) {
  var $theme = props.$theme,
      $value = props.$value,
      $successValue = props.$successValue;
  var colors = $theme.colors,
      sizing = $theme.sizing,
      borders = $theme.borders;
  var width = "".concat($value / $successValue * 100, "%");
  var borderRadius = borders.useRoundedCorners ? sizing.scale0 : 0;
  return {
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    backgroundColor: colors.accent,
    width: width,
    transition: 'width 0.5s',
    height: '100%'
  };
});
exports.BarProgress = BarProgress;
BarProgress.displayName = "BarProgress";
var Label = (0, _index.styled)('div', function (props) {
  return _objectSpread({
    textAlign: 'center'
  }, props.$theme.typography.font150, {
    color: props.$theme.colors.mono700
  });
});
exports.Label = Label;
Label.displayName = "Label";