"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var StandardShadow = (0, _styledComponents.css)(["box-shadow:0 9px 12px 0 rgba(7,0,37,0.07),0 2px 4px 0 rgba(7,0,37,0.06);"]);
var DiffuseShadow = (0, _styledComponents.css)(["box-shadow:8px 13px 18px 0 rgba(7,0,37,0.05);"]);
var LongShadow = (0, _styledComponents.css)(["box-shadow:0 13px 17px 0 rgba(7,0,37,0.09);"]);
var HardLongShadow = (0, _styledComponents.css)(["box-shadow:0 15px 20px 0 rgba(7,0,37,0.15);"]);
var ThickShadow = (0, _styledComponents.css)(["box-shadow:0 16px 21px 0 rgba(7,0,37,0.22);"]);
var HardThickShadow = (0, _styledComponents.css)(["box-shadow:10px 25px 30px 0 rgba(7,0,37,0.4);"]);

var _default = _styledComponents["default"].div.withConfig({
  displayName: "style",
  componentId: "sc-1hzmi6u-0"
})(["background:", ";border-radius:4px;display:flex;justify-content:center;overflow:hidden;", ";"], _colors["default"].white, function (_ref) {
  var shadow = _ref.shadow;

  switch (shadow) {
    case 'standard':
      return StandardShadow;

    case 'long':
      return LongShadow;

    case 'hard-long':
      return HardLongShadow;

    case 'thick':
      return ThickShadow;

    case 'hard-thick':
      return HardThickShadow;

    case 'diffuse':
    default:
      return DiffuseShadow;
  }
});

exports["default"] = _default;