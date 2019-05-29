"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style"));

var _propTypes = require("prop-types");

var _Menu = _interopRequireDefault(require("styled-icons/boxicons-regular/Menu"));

var _Close = _interopRequireDefault(require("styled-icons/evil/Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Menu = function Menu(_ref) {
  var children = _ref.children,
      setShowMenu = _ref.setShowMenu,
      showMenu = _ref.showMenu;
  return _react["default"].createElement(_style["default"], {
    showMenu: showMenu
  }, _react["default"].createElement("div", null, children), _react["default"].createElement("a", {
    onPress: function onPress() {
      return setShowMenu(!showMenu);
    }
  }, !showMenu && _react["default"].createElement(_Menu["default"], null), showMenu && _react["default"].createElement(_Close["default"], null)));
};

Menu.propTypes = {
  children: _propTypes.PropTypes.node,
  setShowMenu: _propTypes.PropTypes.func.isRequired,
  showMenu: _propTypes.PropTypes.bool
};
Menu.defaultProps = {
  showMenu: false
};
var _default = Menu;
exports["default"] = _default;
//# sourceMappingURL=index.js.map