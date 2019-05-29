"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormSubTitle = exports.FormDivider = exports.ToggleFormField = exports.ToggleFormFieldLabel = exports.FieldSpacer = exports.FormFieldWarning = exports.FormFieldBottomHint = exports.FormFieldHint = exports.FormFieldLabel = exports.FormField = exports.FormSeparator = exports.FormHeaderSeparator = exports.FormTitle = exports.FormHeader = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var FormHeader = _styledComponents["default"].div.withConfig({
  displayName: "form__FormHeader",
  componentId: "sc-1hx4bvl-0"
})(["position:relative;padding-bottom:18px;"]);

exports.FormHeader = FormHeader;

var FormTitle = _styledComponents["default"].div.withConfig({
  displayName: "form__FormTitle",
  componentId: "sc-1hx4bvl-1"
})(["color:", ";font-size:15px;font-weight:600;"], _colors["default"].storm);

exports.FormTitle = FormTitle;

var FormHeaderSeparator = _styledComponents["default"].div.withConfig({
  displayName: "form__FormHeaderSeparator",
  componentId: "sc-1hx4bvl-2"
})(["background-color:", ";height:1px;margin-top:20px;"], _colors["default"].lightGallery);

exports.FormHeaderSeparator = FormHeaderSeparator;

var FormSeparator = _styledComponents["default"].div.withConfig({
  displayName: "form__FormSeparator",
  componentId: "sc-1hx4bvl-3"
})(["background-color:", ";height:1px;margin:30px 0;"], _colors["default"].lightGallery);

exports.FormSeparator = FormSeparator;

var FormField = _styledComponents["default"].div.withConfig({
  displayName: "form__FormField",
  componentId: "sc-1hx4bvl-4"
})(["margin-bottom:10px;"]);

exports.FormField = FormField;

var FormFieldLabel = _styledComponents["default"].div.withConfig({
  displayName: "form__FormFieldLabel",
  componentId: "sc-1hx4bvl-5"
})(["color:", ";font-size:15px;margin-bottom:5px;"], _colors["default"].lighterStorm);

exports.FormFieldLabel = FormFieldLabel;
var HintBaseStyle = (0, _styledComponents.css)(["font-size:12px;font-weight:600;padding-top:5px;"]);

var FormFieldHint = _styledComponents["default"].div.withConfig({
  displayName: "form__FormFieldHint",
  componentId: "sc-1hx4bvl-6"
})(["", " color:", ";opacity:", ";"], HintBaseStyle, _colors["default"].ocean, function (_ref) {
  var stale = _ref.stale;
  return stale ? '0.5' : '1';
});

exports.FormFieldHint = FormFieldHint;

var FormFieldBottomHint = _styledComponents["default"].div.withConfig({
  displayName: "form__FormFieldBottomHint",
  componentId: "sc-1hx4bvl-7"
})(["color:", ";", ""], _colors["default"].lightStorm, HintBaseStyle);

exports.FormFieldBottomHint = FormFieldBottomHint;

var FormFieldWarning = _styledComponents["default"].div.withConfig({
  displayName: "form__FormFieldWarning",
  componentId: "sc-1hx4bvl-8"
})(["color:", ";", ""], _colors["default"].warning, HintBaseStyle);

exports.FormFieldWarning = FormFieldWarning;

var FieldSpacer = _styledComponents["default"].div.withConfig({
  displayName: "form__FieldSpacer",
  componentId: "sc-1hx4bvl-9"
})(["height:15px;"]);

exports.FieldSpacer = FieldSpacer;

var ToggleFormFieldLabel = _styledComponents["default"].div.withConfig({
  displayName: "form__ToggleFormFieldLabel",
  componentId: "sc-1hx4bvl-10"
})(["color:", ";padding-left:10px;"], _colors["default"].lighterStorm);

exports.ToggleFormFieldLabel = ToggleFormFieldLabel;

var ToggleFormField = _styledComponents["default"].div.withConfig({
  displayName: "form__ToggleFormField",
  componentId: "sc-1hx4bvl-11"
})(["display:flex;align-items:center;"]);

exports.ToggleFormField = ToggleFormField;

var FormDivider = _styledComponents["default"].div.withConfig({
  displayName: "form__FormDivider",
  componentId: "sc-1hx4bvl-12"
})(["width:100%;height:1px;background-color:", ";margin-top:30px;margin-bottom:30px;"], _colors["default"].lightGallery);

exports.FormDivider = FormDivider;

var FormSubTitle = _styledComponents["default"].div.withConfig({
  displayName: "form__FormSubTitle",
  componentId: "sc-1hx4bvl-13"
})(["color:", ";font-size:15px;"], _colors["default"].lightStorm);

exports.FormSubTitle = FormSubTitle;
//# sourceMappingURL=index.js.map