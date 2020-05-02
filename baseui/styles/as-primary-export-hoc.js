"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = asPrimaryExport;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// transforms props for native styled components adding $ symbol to avoid to supported warning
function asPrimaryExport(StyledComponent, propsTransformNames) {
  return function withStyledPropsHOC(props) {
    var styledProps = Object.keys(props).reduce(function (acc, key) {
      if (key[0] === '$' || propsTransformNames.indexOf(key) < 0) {
        acc[key] = props[key];
      } else if (propsTransformNames.indexOf(key) >= 0) {
        acc['$' + key] = props[key];
      }

      return acc;
    }, {});
    return React.createElement(StyledComponent, styledProps);
  };
}