"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _popper = _interopRequireDefault(require("popper.js"));

var _utils = require("./utils.js");

var _constants = require("./constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tether =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tether, _React$Component);

  function Tether() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tether);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tether)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "popper", void 0);

    _defineProperty(_assertThisInitialized(_this), "popperHeight", 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isMounted: false
    });

    _defineProperty(_assertThisInitialized(_this), "onPopperUpdate", function (data) {
      var normalizedOffsets = {
        popper: (0, _utils.parsePopperOffset)(data.offsets.popper),
        arrow: data.offsets.arrow ? (0, _utils.parsePopperOffset)(data.offsets.arrow) : {
          top: 0,
          left: 0
        }
      };

      _this.props.onPopperUpdate(normalizedOffsets, data);
    });

    return _this;
  }

  _createClass(Tether, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isMounted: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // Handles the case where popover content changes size and creates a gap between the anchor and
      // the popover. Popper.js only schedules updates on resize and scroll events. In the case of
      // the Select component, when options were filtered in the dropdown menu it creates a gap
      // between it and the input element.
      if (this.props.popperRef) {
        var _this$props$popperRef = this.props.popperRef.getBoundingClientRect(),
            height = _this$props$popperRef.height;

        if (this.popperHeight !== height) {
          this.popperHeight = height;
          this.popper && this.popper.scheduleUpdate();
        }

        if (this.state.isMounted !== prevState.isMounted) {
          if (!this.props.anchorRef) {
            if (process.env.NODE_ENV !== "production") {
              // eslint-disable-next-line no-console
              console.warn("[baseui][TetherBehavior] ref has not been passed to the Popper's anchor element.\n              See how to pass the ref to an anchor element in the Popover example\n              http://baseui.design/components/popover#anchor-ref-handling-example");
            }
          } else {
            this.initializePopper();
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyPopover();
    }
  }, {
    key: "initializePopper",
    value: function initializePopper() {
      var _this$props = this.props,
          placement = _this$props.placement,
          popperOptions = _this$props.popperOptions;

      var modifiers = popperOptions.modifiers,
          restOptions = _objectWithoutProperties(popperOptions, ["modifiers"]);

      this.popper = new _popper["default"](this.props.anchorRef, this.props.popperRef, _objectSpread({
        // Recommended placement (popper may ignore if it causes a viewport overflow, etc)
        placement: (0, _utils.toPopperPlacement)(placement),
        modifiers: _objectSpread({
          // Passing the arrow ref will measure the arrow when calculating styles
          arrow: {
            element: this.props.arrowRef,
            enabled: !!this.props.arrowRef
          },
          computeStyle: {
            // Make popper use top/left instead of transform translate, this is because
            // we use transform for animations and we dont want them to conflict
            gpuAcceleration: false
          },
          applyStyle: {
            // Disable default styling modifier, we'll apply styles on our own
            enabled: false
          },
          applyReactStyle: {
            enabled: true,
            fn: this.onPopperUpdate,
            order: 900
          },
          preventOverflow: {
            enabled: true
          }
        }, modifiers)
      }, restOptions));
    }
  }, {
    key: "destroyPopover",
    value: function destroyPopover() {
      if (this.popper) {
        this.popper.destroy();
        delete this.popper;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children || null;
    }
  }]);

  return Tether;
}(React.Component);

_defineProperty(Tether, "defaultProps", {
  anchorRef: null,
  onPopperUpdate: function onPopperUpdate() {
    return null;
  },
  placement: _constants.TETHER_PLACEMENT.auto,
  popperRef: null,
  popperOptions: {}
});

var _default = Tether;
exports["default"] = _default;