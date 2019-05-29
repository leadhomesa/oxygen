"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowIcon = exports.Option = exports.Options = exports.SelectedOption = exports.DropdownContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = _interopRequireDefault(require("../colors"));

var _material = require("styled-icons/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DropdownContainer = _styledComponents["default"].div.withConfig({
  displayName: "style__DropdownContainer",
  componentId: "sc-1xpjsfn-0"
})(["cursor:pointer;"]);

exports.DropdownContainer = DropdownContainer;

var SelectedOption = _styledComponents["default"].div.withConfig({
  displayName: "style__SelectedOption",
  componentId: "sc-1xpjsfn-1"
})(["color:", ";height:43px;width:100%;border-radius:4px;box-shadow:inset 0 2px 4px 0 rgba(65,65,96,0.18);border:1px solid ", ";border-radius:4px;display:flex;flex-grow:0;font-size:15px;padding:12px 15px;"], _colors["default"].lightStorm, _colors["default"].grey);

exports.SelectedOption = SelectedOption;

var Options = _styledComponents["default"].div.withConfig({
  displayName: "style__Options",
  componentId: "sc-1xpjsfn-2"
})(["display:", ";border:1px solid ", ";box-shadow:0 3px 6px 0 rgba(0,0,0,0.1);border-radius:0 0 4px 4px;"], function (_ref) {
  var visible = _ref.visible;
  return visible ? 'block' : 'none';
}, _colors["default"].grey);

exports.Options = Options;

var Option = _styledComponents["default"].div.withConfig({
  displayName: "style__Option",
  componentId: "sc-1xpjsfn-3"
})(["display:flex;align-items:center;border-radius:0 0 4px 4px;background-color:", ";width:100%;height:40px;color:", ";font-size:15px;padding-left:16px;padding-right:16px;&:hover{background-color:", ";}"], function (_ref2) {
  var active = _ref2.active;
  return active ? "".concat(_colors["default"].lightOcean) : "".concat(_colors["default"].white);
}, _colors["default"].lightStorm, _colors["default"].gallery);

exports.Option = Option;
var ArrowIcon = (0, _styledComponents["default"])(_material.KeyboardArrowDown).withConfig({
  displayName: "style__ArrowIcon",
  componentId: "sc-1xpjsfn-4"
})(["margin-left:auto;margin-top:-2px;fill:", ";transform:", ";float:right;width:24px;height:24px;"], _colors["default"].lighterStorm, function (_ref3) {
  var open = _ref3.open;
  return open ? 'rotate(180deg)' : 'rotate(0deg)';
});
exports.ArrowIcon = ArrowIcon;
//# sourceMappingURL=style.js.map