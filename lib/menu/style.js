"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colors = _interopRequireDefault(require("../colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var ActiveMenu = (0, _styledComponents.css)(["display:block;"]);

var _default = _styledComponents["default"].nav.withConfig({
  displayName: "style",
  componentId: "sc-1ci8hy1-0"
})(["align-items:center;display:flex;flex-direction:row;justify-content:flex-end;text-align:right;width:100%;& a{color:", ";cursor:pointer;display:inline-block;}& div{display:none;list-style:none;text-align:center;width:100%;", ";}"], _colors["default"].white, function (_ref) {
  var showMenu = _ref.showMenu;
  return showMenu && ActiveMenu;
});

exports["default"] = _default;