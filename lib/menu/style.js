"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var ActiveMenu = (0, _styledComponents.css)(["display:block;"]);

var _default = _styledComponents["default"].nav.withConfig({
  displayName: "style",
  componentId: "sc-1ci8hy1-0"
})(["text-align:right;width:100%;& a{cursor:pointer;}& div{display:none;", ";}"], function (_ref) {
  var showMenu = _ref.showMenu;
  return showMenu && ActiveMenu;
});

exports["default"] = _default;
//# sourceMappingURL=style.js.map