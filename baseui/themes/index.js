"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  LightTheme: true,
  createTheme: true,
  lightThemePrimitives: true,
  darkThemePrimitives: true,
  LightThemeMove: true,
  DarkThemeMove: true,
  DarkTheme: true
};
Object.defineProperty(exports, "createTheme", {
  enumerable: true,
  get: function get() {
    return _creator["default"];
  }
});
Object.defineProperty(exports, "lightThemePrimitives", {
  enumerable: true,
  get: function get() {
    return _lightThemePrimitives.primitives;
  }
});
Object.defineProperty(exports, "darkThemePrimitives", {
  enumerable: true,
  get: function get() {
    return _darkThemePrimitives.primitives;
  }
});
Object.defineProperty(exports, "LightThemeMove", {
  enumerable: true,
  get: function get() {
    return _lightThemeWithMove.LightThemeMove;
  }
});
Object.defineProperty(exports, "DarkThemeMove", {
  enumerable: true,
  get: function get() {
    return _darkThemeWithMove.DarkThemeMove;
  }
});
Object.defineProperty(exports, "DarkTheme", {
  enumerable: true,
  get: function get() {
    return _darkTheme.DarkTheme;
  }
});
exports.LightTheme = void 0;

var _creator = _interopRequireDefault(require("./creator.js"));

var _lightThemePrimitives = require("./light-theme-primitives.js");

var _darkThemePrimitives = require("./dark-theme-primitives.js");

var _lightThemeWithMove = require("./light-theme-with-move.js");

var _darkThemeWithMove = require("./dark-theme-with-move.js");

var _darkTheme = require("./dark-theme.js");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var LightTheme = (0, _creator["default"])(_lightThemePrimitives.primitives, {
  name: 'light-theme'
});
exports.LightTheme = LightTheme;