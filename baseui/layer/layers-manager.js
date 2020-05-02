"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Consumer = exports.Provider = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../styles/index.js");

var _overrides = require("../helpers/overrides.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledAppContainer = (0, _index.styled)('div', {});
StyledAppContainer.displayName = "StyledAppContainer";
var StyledLayersContainer = (0, _index.styled)('div', {});
StyledLayersContainer.displayName = "StyledLayersContainer";

var _React$createContext = React.createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

exports.Consumer = Consumer;
exports.Provider = Provider;

var LayersManager =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LayersManager, _React$Component);

  function LayersManager() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LayersManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LayersManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "host", React.createRef());

    return _this;
  }

  _createClass(LayersManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$overrides = this.props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides;

      var _getOverrides = (0, _overrides.getOverrides)(overrides.AppContainer, StyledAppContainer),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          AppContainer = _getOverrides2[0],
          appContainerProps = _getOverrides2[1];

      var _getOverrides3 = (0, _overrides.getOverrides)(overrides.LayersContainer, StyledLayersContainer),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          LayersContainer = _getOverrides4[0],
          layersContainerProps = _getOverrides4[1];

      return React.createElement(Consumer, null, function (_ref) {
        var host = _ref.host;

        if (process.env.NODE_ENV !== "production") {
          if (host !== undefined) {
            // eslint-disable-next-line no-console
            console.warn('There is a LayersManager already exists in your application. It is not recommended to have more than one LayersManager in an application.');
          }
        }

        return React.createElement(Provider, {
          value: {
            host: host || _this2.host.current,
            zIndex: _this2.props.zIndex
          }
        }, React.createElement(AppContainer, appContainerProps, _this2.props.children), React.createElement(LayersContainer, _extends({}, layersContainerProps, {
          ref: _this2.host
        })));
      });
    }
  }]);

  return LayersManager;
}(React.Component);

exports["default"] = LayersManager;