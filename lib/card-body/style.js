"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BodyDescription = exports.BodyPrice = exports.BodyData = exports.BodyMeta = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BodyMeta = _styledComponents["default"].div.withConfig({
  displayName: "style__BodyMeta",
  componentId: "sc-7kqqd4-0"
})(["background:linear-gradient(360deg,transparent 0,rgba(59,59,87,0.8));padding:20px;display:flex;flex-direction:row;justify-content:flex-end;text-align:right;width:100%;"]);

exports.BodyMeta = BodyMeta;

var BodyData = _styledComponents["default"].div.withConfig({
  displayName: "style__BodyData",
  componentId: "sc-7kqqd4-1"
})(["align-items:flex-end;background:linear-gradient(180deg,transparent 0,rgba(59,59,87,0.8));display:flex;flex-direction:row;justify-content:space-between;padding:20px;width:100%;"]);

exports.BodyData = BodyData;

var BodyPrice = _styledComponents["default"].div.withConfig({
  displayName: "style__BodyPrice",
  componentId: "sc-7kqqd4-2"
})(["flex-grow:1;font-size:20px;font-weight:bold;"]);

exports.BodyPrice = BodyPrice;

var BodyDescription = _styledComponents["default"].div.withConfig({
  displayName: "style__BodyDescription",
  componentId: "sc-7kqqd4-3"
})(["flex-grow:1;text-align:right;"]);

exports.BodyDescription = BodyDescription;

var _default = _styledComponents["default"].div.withConfig({
  displayName: "style",
  componentId: "sc-7kqqd4-4"
})(["align-items:center;background-size:cover;background-image:url('", "');background-position:center center;background-repeat:no-repeat;color:", ";display:flex;flex-direction:column;height:300px;justify-content:space-between;width:100%;"], function (_ref) {
  var image = _ref.image;
  return image;
}, _colors["default"].white);

exports["default"] = _default;
//# sourceMappingURL=style.js.map