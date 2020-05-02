"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledNumberContentTail = exports.StyledNumberIcon = exports.StyledNumberStep = exports.StyledContentDescription = exports.StyledContentTail = exports.StyledContentTitle = exports.StyledContent = exports.StyledInnerIcon = exports.StyledIcon = exports.StyledStep = exports.StyledProgressSteps = void 0;

var _index = require("../styles/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledProgressSteps = (0, _index.styled)('ol', function (_ref) {
  var $theme = _ref.$theme;
  return {
    backgroundColor: $theme.colors.listHeaderFill,
    display: 'inline-block',
    marginBottom: 0,
    marginTop: 0,
    paddingTop: $theme.sizing.scale300,
    paddingRight: $theme.sizing.scale500,
    paddingLeft: $theme.sizing.scale500,
    paddingBottom: $theme.sizing.scale300
  };
});
exports.StyledProgressSteps = StyledProgressSteps;
StyledProgressSteps.displayName = "StyledProgressSteps";
var StyledStep = (0, _index.styled)('li', function (_ref2) {
  var $theme = _ref2.$theme;
  return {
    listStyleType: 'none',
    position: 'relative',
    overflow: 'visible'
  };
});
exports.StyledStep = StyledStep;
StyledStep.displayName = "StyledStep";
var StyledIcon = (0, _index.styled)('div', function (_ref3) {
  var $theme = _ref3.$theme,
      $isActive = _ref3.$isActive,
      $isCompleted = _ref3.$isCompleted,
      $disabled = _ref3.$disabled;
  var currentColor = $theme.colors.mono400;
  var size = $theme.sizing.scale300;
  var marginRight = $theme.sizing.scale500;
  var marginLeft = $theme.sizing.scale100;
  var font = $theme.typography.font300;

  if ($isCompleted) {
    currentColor = $theme.colors.primary;
  } else if ($isActive) {
    font = $theme.typography.font350;
    currentColor = $theme.colors.progressStepsActiveFill;
  }

  if ($isActive) {
    size = $theme.sizing.scale600;
    marginLeft = 0;
    marginRight = $theme.sizing.scale300;
  }

  var marginTop = "calc((".concat(font.lineHeight, " - ").concat(size, ") / 2)");

  if ($theme.direction === 'rtl') {
    var _ref4 = [marginRight, marginLeft];
    marginLeft = _ref4[0];
    marginRight = _ref4[1];
  }

  return {
    marginRight: marginRight,
    marginLeft: marginLeft,
    marginTop: marginTop,
    width: size,
    height: size,
    lineHeight: size,
    borderTopLeftRadius: size,
    borderTopRightRadius: size,
    borderBottomRightRadius: size,
    borderBottomLeftRadius: size,
    backgroundColor: currentColor,
    "float": $theme.direction === 'rtl' ? 'right' : 'left',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
});
exports.StyledIcon = StyledIcon;
StyledIcon.displayName = "StyledIcon";
var StyledInnerIcon = (0, _index.styled)('div', function (_ref5) {
  var $theme = _ref5.$theme;
  return {
    width: $theme.sizing.scale100,
    height: $theme.sizing.scale100,
    lineHeight: $theme.sizing.scale100,
    borderTopLeftRadius: $theme.sizing.scale100,
    borderTopRightRadius: $theme.sizing.scale100,
    borderBottomRightRadius: $theme.sizing.scale100,
    borderBottomLeftRadius: $theme.sizing.scale100,
    backgroundColor: $theme.colors.progressStepsActiveText,
    textAlign: 'center'
  };
});
exports.StyledInnerIcon = StyledInnerIcon;
StyledInnerIcon.displayName = "StyledInnerIcon";
var StyledContent = (0, _index.styled)('div', function (_ref6) {
  var $theme = _ref6.$theme;
  return _defineProperty({}, $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft', $theme.sizing.scale900);
});
exports.StyledContent = StyledContent;
StyledContent.displayName = "StyledContent";
var StyledContentTitle = (0, _index.styled)('div', function (_ref8) {
  var $theme = _ref8.$theme,
      $isActive = _ref8.$isActive;
  var color = $theme.colors.foregroundAlt;
  var font = $theme.typography.font300;

  if ($isActive) {
    color = $theme.colors.foreground;
    font = $theme.typography.font350;
  }

  return _objectSpread({}, font, {
    color: color
  });
});
exports.StyledContentTitle = StyledContentTitle;
StyledContentTitle.displayName = "StyledContentTitle";
var StyledContentTail = (0, _index.styled)('div', function (_ref9) {
  var _ref10;

  var $theme = _ref9.$theme,
      $isCompleted = _ref9.$isCompleted,
      $isActive = _ref9.$isActive;
  var currentColor = $theme.colors.mono400;

  if ($isCompleted) {
    currentColor = $theme.colors.primary;
  }

  return _ref10 = {
    position: 'absolute'
  }, _defineProperty(_ref10, $theme.direction === 'rtl' ? 'right' : 'left', '7px'), _defineProperty(_ref10, "top", 0), _defineProperty(_ref10, "height", '100%'), _defineProperty(_ref10, "paddingBottom", 0), _defineProperty(_ref10, "width", $theme.sizing.scale0), _defineProperty(_ref10, "paddingTop", $isActive ? $theme.sizing.scale700 : $theme.sizing.scale600), _defineProperty(_ref10, ':after', {
    content: '""',
    display: 'inline-block',
    height: "calc(100% + ".concat($theme.sizing.scale500, ")"),
    width: '100%',
    backgroundColor: currentColor
  }), _ref10;
});
exports.StyledContentTail = StyledContentTail;
StyledContentTail.displayName = "StyledContentTail";
var StyledContentDescription = (0, _index.styled)('div', function (_ref11) {
  var $theme = _ref11.$theme;
  return {
    marginBottom: $theme.sizing.scale700
  };
});
exports.StyledContentDescription = StyledContentDescription;
StyledContentDescription.displayName = "StyledContentDescription";
var StyledNumberStep = (0, _index.styled)('li', function (_ref12) {
  var $theme = _ref12.$theme;
  return {
    listStyleType: 'none',
    position: 'relative',
    overflow: 'visible'
  };
});
exports.StyledNumberStep = StyledNumberStep;
StyledNumberStep.displayName = "StyledNumberStep";
var StyledNumberIcon = (0, _index.styled)('div', function (_ref13) {
  var $theme = _ref13.$theme,
      $isActive = _ref13.$isActive,
      $isCompleted = _ref13.$isCompleted,
      $disabled = _ref13.$disabled;
  var backgroundColor = $theme.colors.mono400;
  var color = $theme.colors.colorSecondary;
  var size = $theme.sizing.scale800;
  var marginRight = $theme.sizing.scale300;
  var font = $theme.typography.font250;
  var titleFont = $theme.typography.font300;

  if ($isCompleted) {
    color = $theme.colors.progressStepsCompletedText;
    backgroundColor = $theme.colors.progressStepsCompletedFill;
  } else if ($isActive) {
    titleFont = $theme.typography.font350;
    color = $theme.colors.progressStepsActiveText;
    backgroundColor = $theme.colors.progressStepsActiveFill;
  }

  var marginTop = "calc((".concat(titleFont.lineHeight, " - ").concat(size, ") / 2)");
  return _objectSpread({
    marginRight: marginRight,
    marginTop: marginTop,
    width: size,
    height: size,
    borderTopLeftRadius: size,
    borderTopRightRadius: size,
    borderBottomRightRadius: size,
    borderBottomLeftRadius: size,
    backgroundColor: backgroundColor,
    color: color,
    "float": $theme.direction === 'rtl' ? 'right' : 'left',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }, font);
});
exports.StyledNumberIcon = StyledNumberIcon;
StyledNumberIcon.displayName = "StyledNumberIcon";
var StyledNumberContentTail = (0, _index.styled)('div', function (_ref14) {
  var $theme = _ref14.$theme,
      $isActive = _ref14.$isActive,
      $isCompleted = _ref14.$isCompleted,
      $disabled = _ref14.$disabled;
  var currentColor = $theme.colors.mono300;

  if ($isCompleted) {
    currentColor = $theme.colors.primary;
  }

  return {
    position: 'absolute',
    left: '11px',
    top: 0,
    height: '100%',
    paddingBottom: 0,
    width: $theme.sizing.scale0,
    paddingTop: $theme.sizing.scale800,
    ':after': {
      content: '""',
      display: 'inline-block',
      height: '100%',
      width: '100%',
      backgroundColor: currentColor
    }
  };
});
exports.StyledNumberContentTail = StyledNumberContentTail;
StyledNumberContentTail.displayName = "StyledNumberContentTail";