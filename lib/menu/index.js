"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Menu = require("styled-icons/boxicons-regular/Menu");

var _Close = require("styled-icons/evil/Close");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Menu = function Menu(_ref) {
  var children = _ref.children,
      setShowMenu = _ref.setShowMenu,
      showMenu = _ref.showMenu;
  return _react["default"].createElement(_style["default"], {
    showMenu: showMenu
  }, children, _react["default"].createElement("a", {
    onClick: function onClick(e) {
      e.preventDefault();
      setShowMenu(!showMenu);
    }
  }, !showMenu && _react["default"].createElement(_Menu.Menu, {
    size: 40
  }), showMenu && _react["default"].createElement(_Close.Close, {
    size: 40
  })));
};

Menu.propTypes = {
  children: _propTypes["default"].node,
  setShowMenu: _propTypes["default"].func.isRequired,
  showMenu: _propTypes["default"].bool
};
Menu.defaultProps = {
  showMenu: false
};
var _default = Menu;
exports["default"] = _default;