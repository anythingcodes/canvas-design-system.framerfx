"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = omitDollarPrefixedKeys;

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// eslint-disable-next-line flowtype/no-weak-types
function omitDollarPrefixedKeys(source) {
  var result = {};

  for (var key in source) {
    if (key[0] !== '$') {
      result[key] = source[key];
    }
  }

  return result;
}