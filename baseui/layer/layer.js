"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Layer;

var React = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _index = require("../styles/index.js");

var _layersManager = require("./layers-manager.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Container = (0, _index.styled)('div', function (_ref) {
  var $zIndex = _ref.$zIndex;
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: $zIndex || null
  };
});
Container.displayName = "Container";

var LayerComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LayerComponent, _React$Component);

  function LayerComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LayerComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LayerComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      container: null
    });

    return _this;
  }

  _createClass(LayerComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          onMount = _this$props.onMount,
          mountNode = _this$props.mountNode;

      if (mountNode) {
        onMount && onMount();
        return;
      } // There was no LayersManager added if this.props.host === undefined.
      // Use document.body is the case no LayersManager is used.


      var host = this.props.host !== undefined ? this.props.host : document.body;

      if (host) {
        this.addContainer(host);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          host = _this$props2.host,
          mountNode = _this$props2.mountNode;

      if (mountNode) {
        return;
      }

      if (host && host !== prevProps.host && prevProps.host === null) {
        this.addContainer(host);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var container = this.state.container;
      var _this$props3 = this.props,
          host = _this$props3.host,
          onUnmount = _this$props3.onUnmount;
      onUnmount && onUnmount();
      host && container && host.contains(container) && host.removeChild(container);
    }
  }, {
    key: "addContainer",
    value: function addContainer(host) {
      var _this$props4 = this.props,
          index = _this$props4.index,
          mountNode = _this$props4.mountNode,
          onMount = _this$props4.onMount; // Do nothing if mountNode is provided

      if (mountNode) {
        return;
      }

      if (host) {
        var container = host.ownerDocument.createElement('div');
        var sibling = typeof index === 'number' ? React.Children.toArray(host.children)[index] : null;
        sibling ? host.insertBefore(container, sibling) : host.appendChild(container);
        this.setState({
          container: container
        }, function () {
          onMount && onMount();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var container = this.state.container;
      var _this$props5 = this.props,
          children = _this$props5.children,
          mountNode = _this$props5.mountNode,
          zIndex = _this$props5.zIndex; // Only adding an additional wrapper when a layer has z-index to be set

      var childrenToRender = zIndex ? React.createElement(Container, {
        $zIndex: zIndex
      }, children) : children;

      if (typeof document !== 'undefined') {
        if (mountNode || container) {
          // $FlowFixMe
          return _reactDom["default"].createPortal(childrenToRender, mountNode || container);
        }

        return null;
      }

      return null;
    }
  }]);

  return LayerComponent;
}(React.Component);

function Layer(props) {
  return React.createElement(_layersManager.Consumer, null, function (_ref2) {
    var host = _ref2.host,
        zIndex = _ref2.zIndex;
    return React.createElement(LayerComponent, _extends({}, props, {
      host: host,
      zIndex: zIndex
    }));
  });
}