'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Caption2 = exports.Caption = exports.Display = exports.Paragraph4 = exports.Paragraph3 = exports.Paragraph2 = exports.Paragraph = exports.Label4 = exports.Label3 = exports.Label2 = exports.Label = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Display4 = exports.Display3 = exports.Display2 = exports.Display1 = void 0;

var React = _interopRequireWildcard(require('react'));

var _block = _interopRequireDefault(require('../block/block.js'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

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

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

var Display1 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-display1',
      },
      props,
      {
        font: props.font || 'font1450',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.Display1 = Display1;
Display1.displayName = 'Display1';
var Display2 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-display2',
      },
      props,
      {
        font: props.font || 'font1350',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.Display2 = Display2;
Display2.displayName = 'Display2';
var Display3 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-display3',
      },
      props,
      {
        font: props.font || 'font1250',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.Display3 = Display3;
Display3.displayName = 'Display3';
var Display4 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-display4',
      },
      props,
      {
        font: props.font || 'font1150',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.Display4 = Display4;
Display4.displayName = 'Display4';
var H1 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-h1',
        as: props.as || 'h1',
      },
      props,
      {
        font: props.font || 'font1050',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.H1 = H1;
H1.displayName = 'H1';
var H2 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-h2',
        as: props.as || 'h2',
      },
      props,
      {
        font: props.font || 'font950',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.H2 = H2;
H2.displayName = 'H2';
var H3 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-h3',
        as: props.as || 'h3',
      },
      props,
      {
        font: props.font || 'font850',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.H3 = H3;
H3.displayName = 'H3';
var H4 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-h4',
        as: props.as || 'h4',
      },
      props,
      {
        font: props.font || 'font750',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.H4 = H4;
H4.displayName = 'H4';
var H5 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-h5',
        as: props.as || 'h5',
      },
      props,
      {
        font: props.font || 'font650',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.H5 = H5;
H5.displayName = 'H5';
var H6 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-h6',
        as: props.as || 'h6',
      },
      props,
      {
        font: props.font || 'font550',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.H6 = H6;
H6.displayName = 'H6';
var Label = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-label1',
      },
      props,
      {
        font: props.font || 'font450',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.Label = Label;
Label.displayName = 'Label';
var Label2 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-label2',
      },
      props,
      {
        font: props.font || 'font350',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.Label2 = Label2;
Label2.displayName = 'Label2';
var Label3 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-label3',
      },
      props,
      {
        font: props.font || 'font250',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.Label3 = Label3;
Label3.displayName = 'Label3';
var Label4 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-label4',
      },
      props,
      {
        font: props.font || 'font150',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.Label4 = Label4;
Label4.displayName = 'Label4';
var Paragraph = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-p1',
        as: props.as || 'p',
      },
      props,
      {
        font: props.font || 'font400',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.Paragraph = Paragraph;
Paragraph.displayName = 'Paragraph';
var Paragraph2 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-p2',
        as: props.as || 'p',
      },
      props,
      {
        font: props.font || 'font300',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.Paragraph2 = Paragraph2;
Paragraph2.displayName = 'Paragraph2';
var Paragraph3 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-p3',
        as: props.as || 'p',
      },
      props,
      {
        font: props.font || 'font200',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.Paragraph3 = Paragraph3;
Paragraph3.displayName = 'Paragraph3';
var Paragraph4 = React.forwardRef(function(props, ref) {
  return React.createElement(
    _block['default'],
    _extends(
      {
        'data-baseweb': 'typo-p4',
        as: props.as || 'p',
      },
      props,
      {
        font: props.font || 'font100',
        color: props.color || 'colorPrimary',
        ref: ref,
      },
    ),
  );
});
exports.Paragraph4 = Paragraph4;
Paragraph4.displayName = 'Paragraph4'; // Aliases for backwards compatability

var Display = Display1;
exports.Display = Display;
var Caption = React.forwardRef(function(props, ref) {
  return React.createElement(
    Paragraph4,
    _extends({}, props, {
      color: props.color || 'colorSecondary',
      ref: ref,
    }),
  );
});
exports.Caption = Caption;
Caption.displayName = 'Caption';
var Caption2 = React.forwardRef(function(props, ref) {
  return React.createElement(
    Label4,
    _extends({}, props, {
      color: props.color || 'colorSecondary',
    }),
  );
});
exports.Caption2 = Caption2;
Caption2.displayName = 'Caption2';
