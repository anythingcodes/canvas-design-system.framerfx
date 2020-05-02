"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LocaleContext = void 0;

var React = _interopRequireWildcard(require("react"));

var _justExtend = _interopRequireDefault(require("just-extend"));

var _en_US = _interopRequireDefault(require("./en_US.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var LocaleContext = React.createContext(_en_US["default"]);
exports.LocaleContext = LocaleContext;

var LocaleProvider = function LocaleProvider(props) {
  var locale = props.locale,
      children = props.children;
  return React.createElement(LocaleContext.Provider, {
    value: (0, _justExtend["default"])({}, _en_US["default"], locale)
  }, children);
};

var _default = LocaleProvider;
exports["default"] = _default;