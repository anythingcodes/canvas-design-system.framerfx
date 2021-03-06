"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toPopperPlacement = toPopperPlacement;
exports.parsePopperOffset = parsePopperOffset;

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
function toPopperPlacement(placement) {
  return placement.replace(/(Top|Left)$/, '-start').replace(/(Right|Bottom)$/, '-end');
}
/**
 * Takes the offset passed from popper.js and normalizes it
 */


function parsePopperOffset(offset) {
  return {
    top: Math.floor(offset.top || 0),
    left: Math.floor(offset.left || 0)
  };
}