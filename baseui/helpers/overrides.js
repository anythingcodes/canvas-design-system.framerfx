"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOverride = getOverride;
exports.getOverrideProps = getOverrideProps;
exports.toObjectOverride = toObjectOverride;
exports.getOverrides = getOverrides;
exports.mergeOverrides = mergeOverrides;
exports.mergeOverride = mergeOverride;
exports.mergeConfigurationOverrides = mergeConfigurationOverrides;

var React = _interopRequireWildcard(require("react"));

var _reactIs = require("react-is");

var _deepMerge = _interopRequireDefault(require("../utils/deep-merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Given an override argument, returns the component implementation override if it exists
 */
// eslint-disable-next-line flowtype/no-weak-types
function getOverride(override) {
  if ((0, _reactIs.isValidElementType)(override)) {
    return override;
  } // Check if override is OverrideObjectT


  if (override && _typeof(override) === 'object') {
    // Remove this 'any' once this flow issue is fixed:
    // https://github.com/facebook/flow/issues/6666
    // eslint-disable-next-line flowtype/no-weak-types
    return override.component;
  } // null/undefined


  return override;
}
/**
 * Given an override argument, returns the override props that should be passed
 * to the component when rendering it.
 */


function getOverrideProps(override) {
  if (override && _typeof(override) === 'object') {
    var props = typeof override.props === 'function' ? override.props(override) : override.props;
    return _objectSpread({}, props, {
      $style: override.style
    });
  }

  return {};
}
/**
 * Coerces an override argument into an override object
 * (sometimes it is just an override component)
 */


function toObjectOverride(override) {
  if ((0, _reactIs.isValidElementType)(override)) {
    return {
      // eslint-disable-next-line flowtype/no-weak-types
      component: override
    };
  } // Flow can't figure out that typeof 'function' above will
  // catch React.StatelessFunctionalComponent
  // (probably related to https://github.com/facebook/flow/issues/6666)
  // eslint-disable-next-line flowtype/no-weak-types


  return override || {};
}
/**
 * Get a convenient override array that will always have [component, props]
 */

/* eslint-disable flowtype/no-weak-types */


function getOverrides(override, defaultComponent) {
  var component = getOverride(override) || defaultComponent;
  var props = getOverrideProps(override);
  return [component, props];
}
/* eslint-enable flowtype/no-weak-types */

/**
 * Merges two overrides objects – this is useful if you want to inject your own
 * overrides into a child component, but also accept further overrides from
 * from upstream. See `mergeOverride` below.
 */


function mergeOverrides() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var allIdentifiers = Object.keys(_objectSpread({}, target, {}, source));
  return allIdentifiers.reduce(function (acc, name) {
    acc[name] = mergeOverride(toObjectOverride(target[name]), toObjectOverride(source[name]));
    return acc;
  }, {});
}
/**
 * Merges two override objects using the following behavior:
 * - Component implementation from the source (parent) replaces target
 * - Props and styles are both deep merged
 */


function mergeOverride(target, source) {
  // Shallow merge should handle `component`
  var merged = _objectSpread({}, target, {}, source);

  if (target.props && source.props) {
    merged.props = mergeConfigurationOverrides(target.props, source.props);
  }

  if (target.style && source.style) {
    merged.style = mergeConfigurationOverrides(target.style, source.style);
  }

  return merged;
}
/**
 * Since style or props overrides can be an object *or* a function, we need to handle
 * the case that one of them is a function. We do this by returning a new
 * function that deep merges the result of each style override
 */


function mergeConfigurationOverrides(target, source) {
  // Simple case of both objects
  if (_typeof(target) === 'object' && _typeof(source) === 'object') {
    return (0, _deepMerge["default"])({}, target, source);
  } // At least one is a function, return a new composite function


  return function () {
    return (0, _deepMerge["default"])({}, typeof target === 'function' ? target.apply(void 0, arguments) : target, typeof source === 'function' ? source.apply(void 0, arguments) : source);
  };
}