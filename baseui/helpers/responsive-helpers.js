"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMediaQueries = exports.getMediaQuery = void 0;

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/**
 * Helper function that generates media queries based on given parameters
 *
 * E.g.
 * getMediaQuery({'max-width': '1280px', 'min-height': '720px'}, 'and') =>
 *   '@media screen and (max-width: 1280px) and (min-height: 720px)'
 */
var getMediaQuery = function getMediaQuery(options) {
  var booleanOperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'OR';
  var mediaFeatureSeparator = booleanOperator === 'OR' ? ', ' : ' and ';
  var mediaFeatures = Object.keys(options).map(function (key) {
    return "(".concat(key, ": ").concat(options[key], ")");
  });
  return "@media screen and ".concat(mediaFeatures.join(mediaFeatureSeparator));
};

exports.getMediaQuery = getMediaQuery;

var getMediaQueries = function getMediaQueries(breakpoints) {
  return Object.keys(breakpoints).map(function (key) {
    return breakpoints[key];
  }).sort(function (a, b) {
    return a - b;
  }).map(function (size) {
    return getMediaQuery({
      'min-width': "".concat(size, "px")
    });
  });
};

exports.getMediaQueries = getMediaQueries;