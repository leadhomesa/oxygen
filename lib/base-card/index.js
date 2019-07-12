"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BaseCard = function BaseCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      shadow = _ref.shadow;
  return _react["default"].createElement(_style["default"], {
    className: className,
    shadow: shadow
  }, children);
};

BaseCard.propTypes = {
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string,
  shadow: _propTypes["default"].oneOf(['standard', 'diffuse', 'long', 'hard-long', 'thick', 'dark-thick'])
};
var _default = BaseCard;
exports["default"] = _default;