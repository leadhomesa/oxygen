"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var BoxShadow = (0, _styledComponents.css)(["box-shadow:0 9px 7px 0 rgba(0,0,0,0.06),0 3px 4px 0 rgba(0,0,0,0.15);@media (hover:hover){&:hover{bottom:1px;box-shadow:0 11px 9px -1px rgba(0,0,0,0.06),0 5px 6px -1px rgba(0,0,0,0.15);}}"]);
var Disabled = (0, _styledComponents.css)(["opacity:0.5;cursor:not-allowed;"]);
var SmallButton = (0, _styledComponents.css)(["padding:7px 12px 7px;"]);
var LargeButton = (0, _styledComponents.css)(["padding:16px 20px 16px;"]);
var PrimaryButton = (0, _styledComponents.css)(["color:", ";background-color:", ";border:", ";"], function (_ref) {
  var variant = _ref.variant;
  return variant === 'flat' ? _colors["default"].white : _colors["default"].coral;
}, function (_ref2) {
  var variant = _ref2.variant;
  return variant === 'flat' ? _colors["default"].coral : 'transparent';
}, function (_ref3) {
  var variant = _ref3.variant;
  return variant !== 'text' ? "1px solid ".concat(_colors["default"].coral) : 'none';
});
var SecondaryButton = (0, _styledComponents.css)(["color:", ";background-color:", ";border:", ";"], function (_ref4) {
  var variant = _ref4.variant;
  return variant === 'flat' ? _colors["default"].white : _colors["default"].lighterStorm;
}, function (_ref5) {
  var variant = _ref5.variant;
  return variant === 'flat' ? _colors["default"].lighterStorm : 'transparent';
}, function (_ref6) {
  var variant = _ref6.variant;
  return variant !== 'text' ? "1px solid ".concat(_colors["default"].lighterStorm) : 'none';
});
var WarningButton = (0, _styledComponents.css)(["color:", ";background-color:", ";border:", ";"], function (_ref7) {
  var variant = _ref7.variant;
  return variant === 'flat' ? _colors["default"].white : _colors["default"].warning;
}, function (_ref8) {
  var variant = _ref8.variant;
  return variant === 'flat' ? _colors["default"].warning : 'transparent';
}, function (_ref9) {
  var variant = _ref9.variant;
  return variant !== 'text' ? "1px solid ".concat(_colors["default"].warning) : 'none';
});
var SuccessButton = (0, _styledComponents.css)(["color:", ";background-color:", ";border:", ";"], function (_ref10) {
  var variant = _ref10.variant;
  return variant === 'flat' ? _colors["default"].white : _colors["default"].ocean;
}, function (_ref11) {
  var variant = _ref11.variant;
  return variant === 'flat' ? _colors["default"].ocean : 'transparent';
}, function (_ref12) {
  var variant = _ref12.variant;
  return variant !== 'text' ? "1px solid ".concat(_colors["default"].ocean) : 'none';
});

var _default = _styledComponents["default"].button.withConfig({
  displayName: "style",
  componentId: "sc-1nqy8uv-0"
})(["text-decoration:none;display:inline-block;border-radius:4px;text-align:center;line-height:1;cursor:pointer;padding:11px 16px 10px;margin:4px;font-size:15px;position:relative;bottom:0;transition:all 0.1s ease-out;outline:none;", ";& > svg{float:right;height:20px;margin:-2px -5px -5px 2px;width:20px;}", ";", ";", ";"], function (_ref13) {
  var variant = _ref13.variant;
  return variant !== 'text' ? BoxShadow : 'none';
}, function (_ref14) {
  var disabled = _ref14.disabled;
  return disabled && Disabled;
}, function (_ref15) {
  var size = _ref15.size;

  switch (size) {
    case 'sm':
      return SmallButton;

    case 'lg':
      return LargeButton;
  }
}, function (_ref16) {
  var color = _ref16.color;

  switch (color) {
    case 'secondary':
      return SecondaryButton;

    case 'warning':
      return WarningButton;

    case 'success':
      return SuccessButton;

    case 'primary':
    default:
      return PrimaryButton;
  }
});

exports["default"] = _default;
//# sourceMappingURL=style.js.map