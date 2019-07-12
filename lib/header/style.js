"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HeaderContainer = _styledComponents["default"].div.withConfig({
  displayName: "style__HeaderContainer",
  componentId: "sc-1qh3692-0"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-left:auto;background-color:", ";color:", ";"], _colors["default"].darkStorm, _colors["default"].white);

var _default = HeaderContainer;
exports["default"] = _default;