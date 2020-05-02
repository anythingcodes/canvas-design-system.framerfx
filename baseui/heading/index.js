"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  HeadingLevel: true,
  Heading: true
};
Object.defineProperty(exports, "HeadingLevel", {
  enumerable: true,
  get: function get() {
    return _headingLevel["default"];
  }
});
Object.defineProperty(exports, "Heading", {
  enumerable: true,
  get: function get() {
    return _heading["default"];
  }
});

var _headingLevel = _interopRequireDefault(require("./heading-level.js"));

var _heading = _interopRequireDefault(require("./heading.js"));

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