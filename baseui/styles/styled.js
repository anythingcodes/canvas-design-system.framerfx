"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createThemedStyled = createThemedStyled;
exports.createThemedWithStyle = createThemedWithStyle;
exports.createThemedUseStyletron = createThemedUseStyletron;
exports.useStyletron = exports.withStyle = exports.styled = void 0;

var React = _interopRequireWildcard(require("react"));

var _styletronReact = require("styletron-react");

var _styletronStandard = require("styletron-standard");

var _themeProvider = require("./theme-provider.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var wrapper = function wrapper(StyledComponent) {
  return React.forwardRef(function (props, ref) {
    return React.createElement(_themeProvider.ThemeContext.Consumer, null, function (theme) {
      return React.createElement(StyledComponent, _extends({
        ref: ref
      }, props, {
        $theme: theme
      }));
    });
  });
};
/* eslint-disable flowtype/generic-spacing */

/* eslint-disable flowtype/no-weak-types */


/* eslint-enable flowtype/generic-spacing */

/* eslint-enable flowtype/no-weak-types */
function createThemedStyled() {
  return (0, _styletronReact.createStyled)({
    wrapper: wrapper,
    getInitialStyle: _styletronStandard.getInitialStyle,
    driver: _styletronStandard.driver // eslint-disable-next-line flowtype/no-weak-types

  });
}

var styled = createThemedStyled();
exports.styled = styled;

function createThemedWithStyle() {
  // eslint-disable-next-line flowtype/no-weak-types
  return _styletronReact.withStyle;
}

var withStyle = createThemedWithStyle();
exports.withStyle = withStyle;

function createThemedUseStyletron() {
  return function () {
    // eslint-disable-next-line flowtype/no-weak-types
    var theme = React.useContext(_themeProvider.ThemeContext);

    var _styletronUseStyletro = (0, _styletronReact.useStyletron)(),
        _styletronUseStyletro2 = _slicedToArray(_styletronUseStyletro, 1),
        useCss = _styletronUseStyletro2[0];

    return [useCss, theme];
  };
}

var useStyletron = createThemedUseStyletron();
exports.useStyletron = useStyletron;