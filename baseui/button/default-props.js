"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = void 0;

var _constants = require("./constants.js");

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var defaultProps = {
  disabled: false,
  isLoading: false,
  isSelected: false,
  kind: _constants.KIND.primary,
  overrides: {},
  shape: _constants.SHAPE["default"],
  size: _constants.SIZE["default"]
};
exports.defaultProps = defaultProps;