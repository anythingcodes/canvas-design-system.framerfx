'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.CloseIcon = CloseIcon;

var React = _interopRequireWildcard(require('react'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  if (obj != null) {
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// TODO Switch to using Icon component once it exists

function CloseIcon() {
  return React.createElement(
    'svg',
    {
      width: '16',
      height: '16',
      viewBox: '0 0 14 14',
      style: {
        stroke: 'currentColor',
      },
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d: 'M14.5,1.5l-13,13m0-13,13,13',
      transform: 'translate(-1 -1)',
      strokeWidth: 2,
    }),
  );
}
