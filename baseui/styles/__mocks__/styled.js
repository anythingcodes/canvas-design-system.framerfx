"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyletron = useStyletron;
exports.styled = styled;
exports.withStyle = void 0;

var React = _interopRequireWildcard(require("react"));

var _styletronStandard = require("styletron-standard");

var _index = require("../../themes/index.js");

var _createMockTheme = _interopRequireDefault(require("../../test/create-mock-theme.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MOCK_THEME = (0, _createMockTheme["default"])(_index.LightTheme);

var IDENTITY = function IDENTITY(x) {
  return x;
};

function useStyletron() {
  // eslint-disable-next-line flowtype/no-weak-types
  function useCss(styles) {
    return _objectSpread({
      label: 'useStyletron mock describes the applied css properties'
    }, styles);
  }

  return [useCss, MOCK_THEME];
}

function styled(ElementName) {
  var objOrFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var MockStyledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(MockStyledComponent, _React$Component);

    function MockStyledComponent() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MockStyledComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MockStyledComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {});

      return _this;
    }

    _createClass(MockStyledComponent, [{
      key: "getPassedProps",
      value: function getPassedProps() {
        var _this$props = this.props,
            forwardedRef = _this$props.forwardedRef,
            restProps = _objectWithoutProperties(_this$props, ["forwardedRef"]);

        return Object.keys(restProps).reduce(function (acc, key) {
          if (key[0] !== '$') {
            acc[key] = restProps[key];
          }

          return acc;
        }, {});
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(ElementName, _extends({
          ref: this.props.forwardedRef,
          "styled-component": "true",
          "test-style": this.state.styles
        }, this.getPassedProps()));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props) {
        var styleFnArg = _objectSpread({}, props, {
          // If we use defaultProps, $theme unnecessarily ends up in snapshots
          $theme: props.$theme || MOCK_THEME
        });

        var styles = typeof objOrFn === 'function' ? objOrFn(styleFnArg) : objOrFn; // Check for runtime overrides

        var $style = props.$style;

        if (typeof $style === 'function') {
          $style = $style(styleFnArg);
        }

        if ($style) {
          styles = _objectSpread({}, styles, {}, $style);
        }

        return {
          styles: styles
        };
      }
    }]);

    return MockStyledComponent;
  }(React.Component); // $FlowFixMe


  _defineProperty(MockStyledComponent, "displayName", 'MockStyledComponent');

  MockStyledComponent.__STYLETRON__ = {
    getInitialStyle: _styletronStandard.getInitialStyle,
    wrapper: IDENTITY,
    base: ElementName
  };
  return React.forwardRef(function (props, ref) {
    return React.createElement(MockStyledComponent, _extends({
      forwardedRef: ref
    }, props));
  });
}

var withStyle = styled;
exports.withStyle = withStyle;