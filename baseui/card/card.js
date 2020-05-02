"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasThumbnail = hasThumbnail;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _overrides = require("../helpers/overrides.js");

var _styledComponents = require("./styled-components.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function hasThumbnail(props) {
  return !!props.thumbnail;
}

function Card(props) {
  var action = props.action,
      children = props.children,
      hasThumbnail = props.hasThumbnail,
      headerImage = props.headerImage,
      thumbnailSrc = props.thumbnail,
      title = props.title,
      overrides = props.overrides,
      restProps = _objectWithoutProperties(props, ["action", "children", "hasThumbnail", "headerImage", "thumbnail", "title", "overrides"]);

  var ActionOverride = overrides.Action,
      BodyOverride = overrides.Body,
      ContentsOverride = overrides.Contents,
      HeaderImageOverride = overrides.HeaderImage,
      RootOverride = overrides.Root,
      ThumbnailOverride = overrides.Thumbnail,
      TitleOverride = overrides.Title;

  var Action = (0, _overrides.getOverride)(ActionOverride) || _styledComponents.Action;

  var Body = (0, _overrides.getOverride)(BodyOverride) || _styledComponents.Body;

  var Contents = (0, _overrides.getOverride)(ContentsOverride) || _styledComponents.Contents;

  var HeaderImage = (0, _overrides.getOverride)(HeaderImageOverride) || _styledComponents.HeaderImage;

  var Root = (0, _overrides.getOverride)(RootOverride) || _styledComponents.Root;

  var Thumbnail = (0, _overrides.getOverride)(ThumbnailOverride) || _styledComponents.Thumbnail;

  var Title = (0, _overrides.getOverride)(TitleOverride) || _styledComponents.Title;

  var $hasThumbnail = hasThumbnail(props);
  return React.createElement(Root, _extends({
    "data-baseweb": "card"
  }, restProps, (0, _overrides.getOverrideProps)(RootOverride)), headerImage && React.createElement(HeaderImage, _extends({
    src: headerImage
  }, (0, _overrides.getOverrideProps)(HeaderImageOverride))), React.createElement(Contents, (0, _overrides.getOverrideProps)(ContentsOverride), thumbnailSrc && React.createElement(Thumbnail, _extends({
    src: thumbnailSrc
  }, (0, _overrides.getOverrideProps)(ThumbnailOverride))), title && React.createElement(Title, _extends({
    $hasThumbnail: $hasThumbnail
  }, (0, _overrides.getOverrideProps)(TitleOverride)), title), React.createElement(Body, (0, _overrides.getOverrideProps)(BodyOverride), children), action && React.createElement(Action, (0, _overrides.getOverrideProps)(ActionOverride), action)));
}

Card.defaultProps = {
  action: null,
  children: null,
  hasThumbnail: hasThumbnail,
  overrides: {}
};
var _default = Card;
exports["default"] = _default;