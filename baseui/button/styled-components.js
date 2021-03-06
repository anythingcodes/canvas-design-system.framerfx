"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingSpinner = exports.LoadingSpinnerContainer = exports.StartEnhancer = exports.EndEnhancer = exports.BaseButton = void 0;

var _index = require("../styles/index.js");

var _constants = require("./constants.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BaseButton = (0, _index.styled)('button', function (_ref) {
  var $theme = _ref.$theme,
      $size = _ref.$size,
      $kind = _ref.$kind,
      $shape = _ref.$shape,
      $isLoading = _ref.$isLoading,
      $isSelected = _ref.$isSelected,
      $disabled = _ref.$disabled;
  return _objectSpread({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderStyle: 'none',
    textDecoration: 'none',
    outline: 'none',
    WebkitAppearance: 'none',
    transitionProperty: 'background',
    transitionDuration: $theme.animation.timing100,
    transitionTimingFunction: $theme.animation.easeOutCurve,
    cursor: 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: $theme.colors.buttonDisabledFill,
      color: $theme.colors.buttonDisabledText
    },
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0
  }, getFontStyles({
    $theme: $theme,
    $size: $size
  }), {}, getBorderRadiiStyles({
    $theme: $theme,
    $size: $size,
    $shape: $shape
  }), {}, getPaddingStyles({
    $theme: $theme,
    $size: $size,
    $shape: $shape
  }), {}, getKindStyles({
    $theme: $theme,
    $kind: $kind,
    $isLoading: $isLoading,
    $isSelected: $isSelected,
    $disabled: $disabled
  }));
});
exports.BaseButton = BaseButton;
BaseButton.displayName = "BaseButton";
var EndEnhancer = (0, _index.styled)('div', function (_ref2) {
  var $theme = _ref2.$theme;
  return _defineProperty({
    display: 'flex'
  }, $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft', $theme.sizing.scale500);
});
exports.EndEnhancer = EndEnhancer;
EndEnhancer.displayName = "EndEnhancer";
var StartEnhancer = (0, _index.styled)('div', function (_ref4) {
  var $theme = _ref4.$theme;
  return _defineProperty({
    display: 'flex'
  }, $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight', $theme.sizing.scale500);
});
exports.StartEnhancer = StartEnhancer;
StartEnhancer.displayName = "StartEnhancer";
var LoadingSpinnerContainer = (0, _index.styled)('div', {
  // To center within parent
  position: 'absolute'
});
exports.LoadingSpinnerContainer = LoadingSpinnerContainer;
LoadingSpinnerContainer.displayName = "LoadingSpinnerContainer";
var LoadingSpinner = (0, _index.styled)('div', function (_ref6) {
  var $theme = _ref6.$theme,
      $kind = _ref6.$kind,
      $disabled = _ref6.$disabled;

  var _getLoadingSpinnerCol = getLoadingSpinnerColors({
    $theme: $theme,
    $kind: $kind,
    $disabled: $disabled
  }),
      foreground = _getLoadingSpinnerCol.foreground,
      background = _getLoadingSpinnerCol.background;

  return {
    height: $theme.sizing.scale600,
    width: $theme.sizing.scale600,
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    borderStyle: 'solid',
    borderWidth: $theme.sizing.scale0,
    borderTopColor: foreground,
    borderLeftColor: background,
    borderBottomColor: background,
    borderRightColor: background,
    animationDuration: $theme.animation.timing700,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationName: {
      to: {
        transform: 'rotate(360deg)'
      },
      from: {
        transform: 'rotate(0deg)'
      }
    }
  };
});
exports.LoadingSpinner = LoadingSpinner;
LoadingSpinner.displayName = "LoadingSpinner";

function getLoadingSpinnerColors(_ref7) {
  var $theme = _ref7.$theme,
      $kind = _ref7.$kind,
      $disabled = _ref7.$disabled;

  if ($disabled) {
    return {
      foreground: $theme.colors.buttonDisabledSpinnerForeground,
      background: $theme.colors.buttonDisabledSpinnerBackground
    };
  }

  switch ($kind) {
    case _constants.KIND.secondary:
      {
        return {
          foreground: $theme.colors.buttonSecondarySpinnerForeground,
          background: $theme.colors.buttonSecondarySpinnerBackground
        };
      }

    case _constants.KIND.tertiary:
      {
        return {
          foreground: $theme.colors.buttonTertiarySpinnerForeground,
          background: $theme.colors.buttonTertiarySpinnerBackground
        };
      }

    case _constants.KIND.minimal:
      {
        return {
          foreground: $theme.colors.buttonMinimalSpinnerForeground,
          background: $theme.colors.buttonMinimalSpinnerBackground
        };
      }

    case _constants.KIND.primary:
    default:
      {
        return {
          foreground: $theme.colors.buttonPrimarySpinnerForeground,
          background: $theme.colors.buttonPrimarySpinnerBackground
        };
      }
  }
}

function getBorderRadiiStyles(_ref8) {
  var $theme = _ref8.$theme,
      $size = _ref8.$size,
      $shape = _ref8.$shape;
  var value = $theme.borders.buttonBorderRadius;

  if ($shape === _constants.SHAPE.pill) {
    if ($size === _constants.SIZE.compact) {
      value = '30px';
    } else if ($size === _constants.SIZE.large) {
      value = '42px';
    } else {
      value = '38px';
    }
  } else if ($shape === _constants.SHAPE.round) {
    value = '50%';
  }

  return {
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value
  };
}

function getFontStyles(_ref9) {
  var $theme = _ref9.$theme,
      $size = _ref9.$size;

  switch ($size) {
    case _constants.SIZE.compact:
      return $theme.typography.font350;

    case _constants.SIZE.large:
      return $theme.typography.font550;

    default:
      return $theme.typography.font450;
  }
}

function getPaddingStyles(_ref10) {
  var $theme = _ref10.$theme,
      $size = _ref10.$size,
      $shape = _ref10.$shape;
  var iconShape = $shape === _constants.SHAPE.square || $shape === _constants.SHAPE.round;

  switch ($size) {
    case _constants.SIZE.compact:
      return {
        paddingTop: $theme.sizing.scale200,
        paddingBottom: $theme.sizing.scale200,
        paddingLeft: iconShape ? $theme.sizing.scale200 : $theme.sizing.scale500,
        paddingRight: iconShape ? $theme.sizing.scale200 : $theme.sizing.scale500
      };

    case _constants.SIZE.large:
      return {
        paddingTop: $theme.sizing.scale550,
        paddingBottom: $theme.sizing.scale550,
        paddingLeft: iconShape ? $theme.sizing.scale550 : $theme.sizing.scale700,
        paddingRight: iconShape ? $theme.sizing.scale550 : $theme.sizing.scale700
      };

    default:
      return {
        paddingTop: $theme.sizing.scale500,
        paddingBottom: $theme.sizing.scale500,
        paddingLeft: iconShape ? $theme.sizing.scale500 : $theme.sizing.scale600,
        paddingRight: iconShape ? $theme.sizing.scale500 : $theme.sizing.scale600
      };
  }
}

function getKindStyles(_ref11) {
  var $theme = _ref11.$theme,
      $isLoading = _ref11.$isLoading,
      $isSelected = _ref11.$isSelected,
      $kind = _ref11.$kind,
      $disabled = _ref11.$disabled;

  if ($disabled) {
    return {};
  }

  switch ($kind) {
    case _constants.KIND.primary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonPrimarySelectedText,
          backgroundColor: $theme.colors.buttonPrimarySelectedFill
        };
      }

      return {
        color: $theme.colors.buttonPrimaryText,
        backgroundColor: $theme.colors.buttonPrimaryFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonPrimaryActive : $theme.colors.buttonPrimaryHover
        },
        ':focus': {
          backgroundColor: $isLoading ? $theme.colors.buttonPrimaryActive : $theme.colors.buttonPrimaryHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonPrimaryActive
        }
      };

    case _constants.KIND.secondary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonSecondarySelectedText,
          backgroundColor: $theme.colors.buttonSecondarySelectedFill
        };
      }

      return {
        color: $theme.colors.buttonSecondaryText,
        backgroundColor: $theme.colors.buttonSecondaryFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonSecondaryActive : $theme.colors.buttonSecondaryHover
        },
        ':focus': {
          backgroundColor: $isLoading ? $theme.colors.buttonSecondaryActive : $theme.colors.buttonSecondaryHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonSecondaryActive
        }
      };

    case _constants.KIND.tertiary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonTertiarySelectedText,
          backgroundColor: $theme.colors.buttonTertiarySelectedFill
        };
      }

      return {
        color: $theme.colors.buttonTertiaryText,
        backgroundColor: $theme.colors.buttonTertiaryFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonTertiaryActive : $theme.colors.buttonTertiaryHover
        },
        ':focus': {
          backgroundColor: $isLoading ? $theme.colors.buttonTertiaryActive : $theme.colors.buttonTertiaryHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonTertiaryActive
        }
      };

    case _constants.KIND.minimal:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonMinimalSelectedText,
          backgroundColor: $theme.colors.buttonMinimalSelectedFill
        };
      }

      return {
        color: $theme.colors.buttonMinimalText,
        backgroundColor: $theme.colors.buttonMinimalFill,
        ':hover': {
          backgroundColor: $isLoading ? $theme.colors.buttonMinimalActive : $theme.colors.buttonMinimalHover
        },
        ':focus': {
          backgroundColor: $isLoading ? $theme.colors.buttonMinimalActive : $theme.colors.buttonMinimalHover
        },
        ':active': {
          backgroundColor: $theme.colors.buttonMinimalActive
        }
      };

    default:
      return {};
  }
}