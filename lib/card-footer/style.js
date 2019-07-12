"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var ForSaleFooter = (0, _styledComponents.css)(["background:", ";color:", ";"], _colors["default"].white, _colors["default"].storm);
var ReservedFooter = (0, _styledComponents.css)(["background:", ";color:", ";"], _colors["default"].white, _colors["default"].coral);
var SoldFooter = (0, _styledComponents.css)(["background:", ";color:", ";"], _colors["default"].coral, _colors["default"].white);

var _default = _styledComponents["default"].div.withConfig({
  displayName: "style",
  componentId: "sc-15971we-0"
})(["align-items:center;color:", ";display:flex;flex-direction:row;justify-content:space-between;height:60px;padding:0 20px;width:100%;", ";"], _colors["default"].storm, function (_ref) {
  var variant = _ref.variant;

  switch (variant) {
    case 'reserved':
      return ReservedFooter;

    case 'sold':
      return SoldFooter;

    case 'for-sale':
    default:
      return ForSaleFooter;
  }
});

exports["default"] = _default;