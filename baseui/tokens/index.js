"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  colors: true
};
Object.defineProperty(exports, "colors", {
  enumerable: true,
  get: function get() {
    return _colors["default"];
  }
});

var _colors = _interopRequireDefault(require("./colors.js"));

var _types = require("./types.js");

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