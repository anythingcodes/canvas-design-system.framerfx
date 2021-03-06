"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactFocusLock = _interopRequireDefault(require("react-focus-lock"));

var _index = require("../locale/index.js");

var _overrides = require("../helpers/overrides.js");

var _index2 = require("../layer/index.js");

var _constants = require("./constants.js");

var _styledComponents = require("./styled-components.js");

var _closeIcon = require("./close-icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "animateOutTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "animateStartTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "lastFocus", null);

    _defineProperty(_assertThisInitialized(_this), "lastMountNodeOverflowStyle", null);

    _defineProperty(_assertThisInitialized(_this), "_refs", {});

    _defineProperty(_assertThisInitialized(_this), "state", {
      isVisible: false,
      mounted: false
    });

    _defineProperty(_assertThisInitialized(_this), "onDocumentKeyPress", function (event) {
      if (event.key !== 'Escape') {
        return;
      } // Ignore events that have been `event.preventDefault()` marked.


      if (event.defaultPrevented) {
        return;
      }

      if (!_this.props.closeable) {
        return;
      }

      _this.triggerClose(_constants.CLOSE_SOURCE.escape);
    });

    _defineProperty(_assertThisInitialized(_this), "onBackdropClick", function () {
      if (!_this.props.closeable) {
        return;
      }

      _this.triggerClose(_constants.CLOSE_SOURCE.backdrop);
    });

    _defineProperty(_assertThisInitialized(_this), "onCloseClick", function () {
      _this.triggerClose(_constants.CLOSE_SOURCE.closeButton);
    });

    _defineProperty(_assertThisInitialized(_this), "animateOutComplete", function () {
      _this.setState({
        isVisible: false
      });
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        mounted: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeDomEvents();
      this.resetMountNodeScroll();
      this.clearTimers();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isOpen = this.props.isOpen;

      if ( // If isOpen is changing *or* we just mounted and modal should be open
      isOpen !== prevProps.isOpen || isOpen && this.state.mounted && !prevState.mounted) {
        if (isOpen) {
          this.didOpen();
        } else {
          this.didClose();
        }
      }
    }
  }, {
    key: "addDomEvents",
    value: function addDomEvents() {
      if (typeof document !== 'undefined') {
        document.addEventListener('keyup', this.onDocumentKeyPress);
      }
    }
  }, {
    key: "removeDomEvents",
    value: function removeDomEvents() {
      if (typeof document !== 'undefined') {
        document.removeEventListener('keyup', this.onDocumentKeyPress);
      }
    }
  }, {
    key: "disableMountNodeScroll",
    value: function disableMountNodeScroll() {
      var mountNode = this.getMountNode();
      this.lastMountNodeOverflowStyle = mountNode.style.overflow || '';
      mountNode.style.overflow = 'hidden';
    }
  }, {
    key: "resetMountNodeScroll",
    value: function resetMountNodeScroll() {
      var mountNode = this.getMountNode();
      var lastStyle = this.lastMountNodeOverflowStyle;

      if (mountNode && lastStyle !== null) {
        mountNode.style.overflow = lastStyle || '';
        this.lastMountNodeOverflowStyle = null;
      }
    }
  }, {
    key: "clearTimers",
    value: function clearTimers() {
      if (this.animateOutTimer) {
        clearTimeout(this.animateOutTimer);
      }

      if (this.animateStartTimer) {
        // eslint-disable-next-line cup/no-undef
        cancelAnimationFrame(this.animateStartTimer);
      }
    }
  }, {
    key: "didOpen",
    value: function didOpen() {
      var _this2 = this;

      // Sometimes scroll starts past zero, possibly due to animation
      // Reset scroll to 0 (other libraries do this as well)
      var rootRef = this.getRef('Root').current;

      if (rootRef) {
        rootRef.scrollTop = 0;
      } // Clear any existing timers (like previous animateOutTimer)


      this.clearTimers();
      this.addDomEvents();
      this.disableMountNodeScroll(); // eslint-disable-next-line cup/no-undef

      this.animateStartTimer = requestAnimationFrame(function () {
        _this2.setState({
          isVisible: true
        });
      });
    }
  }, {
    key: "didClose",
    value: function didClose() {
      this.removeDomEvents();
      this.resetMountNodeScroll();
      this.animateOutTimer = setTimeout(this.animateOutComplete, 500);
    }
  }, {
    key: "triggerClose",
    value: function triggerClose(source) {
      // If there's no source, it just means the isOpen prop changed. No need to call onClose.
      if (this.props.onClose && source) {
        this.props.onClose({
          closeSource: source
        });
      }
    }
  }, {
    key: "getSharedProps",
    value: function getSharedProps() {
      var _this$props = this.props,
          animate = _this$props.animate,
          isOpen = _this$props.isOpen,
          size = _this$props.size,
          role = _this$props.role,
          closeable = _this$props.closeable;
      return {
        $animate: animate,
        $isVisible: this.state.isVisible,
        $isOpen: !!isOpen,
        $size: size,
        $role: role,
        $closeable: !!closeable
      };
    }
  }, {
    key: "getMountNode",
    value: function getMountNode() {
      var mountNode = this.props.mountNode;

      if (mountNode) {
        return mountNode;
      } // Flow thinks body could be null (cast through any)
      // eslint-disable-next-line flowtype/no-weak-types


      return document.body;
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var children = this.props.children;
      return typeof children === 'function' ? children() : children;
    }
  }, {
    key: "getRef",
    value: function getRef(component) {
      if (!this._refs[component]) {
        this._refs[component] = React.createRef();
      }

      return this._refs[component];
    }
  }, {
    key: "renderModal",
    value: function renderModal() {
      var _this3 = this;

      var _this$props2 = this.props,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override,
          closeable = _this$props2.closeable,
          role = _this$props2.role;
      var RootOverride = overrides.Root,
          DialogOverride = overrides.Dialog,
          DialogContainerOverride = overrides.DialogContainer,
          BackdropOverride = overrides.Backdrop,
          CloseOverride = overrides.Close;

      var _getOverrides = (0, _overrides.getOverrides)(RootOverride, _styledComponents.Root),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = (0, _overrides.getOverrides)(BackdropOverride, _styledComponents.Backdrop),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          Backdrop = _getOverrides4[0],
          backdropProps = _getOverrides4[1];

      var _getOverrides5 = (0, _overrides.getOverrides)(DialogContainerOverride, _styledComponents.DialogContainer),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          DialogContainer = _getOverrides6[0],
          dialogContainerProps = _getOverrides6[1];

      var _getOverrides7 = (0, _overrides.getOverrides)(DialogOverride, _styledComponents.Dialog),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          Dialog = _getOverrides8[0],
          dialogProps = _getOverrides8[1];

      var _getOverrides9 = (0, _overrides.getOverrides)(CloseOverride, _styledComponents.Close),
          _getOverrides10 = _slicedToArray(_getOverrides9, 2),
          Close = _getOverrides10[0],
          closeProps = _getOverrides10[1];

      var sharedProps = this.getSharedProps();
      var children = this.getChildren();
      return React.createElement(_index.LocaleContext.Consumer, null, function (locale) {
        return (// eslint-disable-next-line jsx-a11y/no-autofocus
          React.createElement(_reactFocusLock["default"], {
            returnFocus: true,
            autoFocus: _this3.props.autofocus
          }, React.createElement(Root, _extends({
            "data-baseweb": "modal",
            ref: _this3.getRef('Root')
          }, sharedProps, rootProps), React.createElement(Backdrop, _extends({
            onClick: _this3.onBackdropClick
          }, sharedProps, backdropProps)), React.createElement(DialogContainer, _extends({}, sharedProps, dialogContainerProps), React.createElement(Dialog, _extends({
            tabIndex: -1,
            "aria-modal": // aria-modal replaces the need to apply aria-hidden="true" to all other page
            // content underneath the modal.
            // https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html
            'true',
            role: role,
            ref: _this3.getRef('Dialog')
          }, sharedProps, dialogProps), children, closeable ? React.createElement(Close, _extends({
            "aria-label": locale.modal.close,
            onClick: _this3.onCloseClick
          }, sharedProps, closeProps), React.createElement(_closeIcon.CloseIcon, null)) : null))))
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      // Only render modal on the browser (portals aren't supported server-side)
      if (!this.state.mounted) {
        return null;
      } // Only render the modal if its isOpen is passed, or isVisible is true (still animating)


      if (!this.props.isOpen && !this.state.isVisible) {
        return null;
      }

      return React.createElement(_index2.Layer, {
        mountNode: this.props.mountNode
      }, this.renderModal());
    }
  }]);

  return Modal;
}(React.Component);

_defineProperty(Modal, "defaultProps", {
  animate: true,
  autofocus: true,
  closeable: true,
  isOpen: false,
  overrides: {},
  role: _constants.ROLE.dialog,
  size: _constants.SIZE["default"]
});

var _default = Modal;
exports["default"] = _default;