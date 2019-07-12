"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Footer = function Footer(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_style.FooterContainer, null, children);
};

Footer.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
var _default = Footer;
exports["default"] = _default;