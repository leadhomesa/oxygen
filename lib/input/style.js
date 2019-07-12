"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconRegion = exports.ErrorMessage = exports.AffixContainer = exports.AddOnContainer = exports.Container = exports.TextInput = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _easing = require("../easing");

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var TextInputDisabled = (0, _styledComponents.css)(["box-shadow:none;color:", ";cursor:default;"], _colors["default"].disabled);
var TextInputReadOnly = (0, _styledComponents.css)(["box-shadow:none;cursor:default;"]);

var TextInput = _styledComponents["default"].input.withConfig({
  displayName: "style__TextInput",
  componentId: "rrdoqj-0"
})(["font-size:15px;width:100%;padding:10px 15px;outline:none;color:", ";flex-grow:1;border:none;z-index:1;background:transparent;&::placeholder{font-size:14px;color:", ";}", ";", ";"], _colors["default"].lightStorm, _colors["default"].grey, function (_ref) {
  var disabled = _ref.disabled;
  return disabled && TextInputDisabled;
}, function (_ref2) {
  var readOnly = _ref2.readOnly;
  return readOnly && TextInputReadOnly;
});

exports.TextInput = TextInput;
var ContainerWarning = (0, _styledComponents.css)(["border-color:", ";"], _colors["default"].warning);
var ContainerActive = (0, _styledComponents.css)(["border-color:", ";"], _colors["default"].lighterStorm);
var ContainerDisabled = (0, _styledComponents.css)(["border-color:", ";background-color:", ";color:", ";"], _colors["default"].grey, _colors["default"].lightgrey, _colors["default"].disabled);

var Container = _styledComponents["default"].div.withConfig({
  displayName: "style__Container",
  componentId: "rrdoqj-1"
})(["border:", ";box-shadow:", ";border-radius:4px;display:flex;flex-grow:", ";", ";", ";", ";"], function (_ref3) {
  var noBorder = _ref3.noBorder;
  return noBorder ? 'none' : "1px solid ".concat(_colors["default"].grey);
}, function (_ref4) {
  var noShadow = _ref4.noShadow;
  return noShadow ? 'none' : 'inset 0 2px 4px 0 rgba(65,65,96,0.18)';
}, function (_ref5) {
  var flexGrow = _ref5.flexGrow;
  return flexGrow || '0';
}, function (_ref6) {
  var active = _ref6.active;
  return active && ContainerActive;
}, function (_ref7) {
  var disabled = _ref7.disabled;
  return disabled && ContainerDisabled;
}, function (_ref8) {
  var warning = _ref8.warning;
  return warning && ContainerWarning;
});

exports.Container = Container;

var AddOnContainer = _styledComponents["default"].div.withConfig({
  displayName: "style__AddOnContainer",
  componentId: "rrdoqj-2"
})(["padding:", ";display:flex;align-items:center;border-right:1px solid ", ";color:", ";"], function (_ref9) {
  var sm = _ref9.sm;
  return sm ? '0 13px' : '0 18px';
}, _colors["default"].grey, _colors["default"].storm);

exports.AddOnContainer = AddOnContainer;

var AffixContainer = _styledComponents["default"].div.withConfig({
  displayName: "style__AffixContainer",
  componentId: "rrdoqj-3"
})(["padding:", ";display:flex;align-items:center;border-left:1px solid ", ";color:", ";"], function (_ref10) {
  var sm = _ref10.sm;
  return sm ? '0 13px' : '0 18px';
}, _colors["default"].grey, _colors["default"].storm);

exports.AffixContainer = AffixContainer;
var ErrorIn = (0, _styledComponents.keyframes)(["from{height:0.1em;}to{height:1em;}"]);

var ErrorMessage = _styledComponents["default"].div.withConfig({
  displayName: "style__ErrorMessage",
  componentId: "rrdoqj-4"
})(["color:", ";font-size:12px;font-weight:600;animation:", " 0.3s ", " forwards;"], _colors["default"].warning, ErrorIn, _easing.EASE_OUT_EXPO);

exports.ErrorMessage = ErrorMessage;

var IconRegion = _styledComponents["default"].span.withConfig({
  displayName: "style__IconRegion",
  componentId: "rrdoqj-5"
})(["display:flex;align-items:center;padding:0 7px 0 0;& > *{height:20px;}"]);

exports.IconRegion = IconRegion;