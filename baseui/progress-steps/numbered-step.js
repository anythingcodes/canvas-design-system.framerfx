"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _overrides = require("../helpers/overrides.js");

var _styledComponents = require("./styled-components.js");

var _check = _interopRequireDefault(require("../icon/check.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function NumberedStep(_ref) {
  var _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides,
      isCompleted = _ref.isCompleted,
      isActive = _ref.isActive,
      isLast = _ref.isLast,
      title = _ref.title,
      step = _ref.step,
      children = _ref.children;

  var _getOverrides = (0, _overrides.getOverrides)(overrides.Root, _styledComponents.StyledNumberStep),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Root = _getOverrides2[0],
      rootProps = _getOverrides2[1];

  var _getOverrides3 = (0, _overrides.getOverrides)(overrides.Icon, _styledComponents.StyledNumberIcon),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      Icon = _getOverrides4[0],
      iconProps = _getOverrides4[1];

  var _getOverrides5 = (0, _overrides.getOverrides)(overrides.Tail, _styledComponents.StyledNumberContentTail),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      Tail = _getOverrides6[0],
      tailProps = _getOverrides6[1];

  var _getOverrides7 = (0, _overrides.getOverrides)(overrides.Content, _styledComponents.StyledContent),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      Content = _getOverrides8[0],
      contentProps = _getOverrides8[1];

  var _getOverrides9 = (0, _overrides.getOverrides)(overrides.Title, _styledComponents.StyledContentTitle),
      _getOverrides10 = _slicedToArray(_getOverrides9, 2),
      Title = _getOverrides10[0],
      titleProps = _getOverrides10[1];

  var _getOverrides11 = (0, _overrides.getOverrides)(overrides.Description, _styledComponents.StyledContentDescription),
      _getOverrides12 = _slicedToArray(_getOverrides11, 2),
      Description = _getOverrides12[0],
      descriptionProps = _getOverrides12[1];

  var _getOverrides13 = (0, _overrides.getOverrides)(overrides.Icon, _check["default"]),
      _getOverrides14 = _slicedToArray(_getOverrides13, 2),
      CheckIcon = _getOverrides14[0],
      checkIconProps = _getOverrides14[1];

  var sharedProps = {
    $isCompleted: isCompleted,
    $isActive: isActive
  };
  return React.createElement(Root, _extends({}, sharedProps, rootProps), React.createElement(Icon, _extends({}, sharedProps, iconProps), !isCompleted && React.createElement("span", null, step), isCompleted && React.createElement(CheckIcon, _extends({
    size: 12
  }, checkIconProps))), !isLast && React.createElement(Tail, _extends({}, sharedProps, tailProps)), React.createElement(Content, _extends({}, sharedProps, contentProps), React.createElement(Title, _extends({}, sharedProps, titleProps), title), React.createElement(Description, descriptionProps, isActive && children)));
}

NumberedStep.defaultProps = {
  isCompleted: false,
  isActive: false,
  isLast: false
};
var _default = NumberedStep;
exports["default"] = _default;