"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Dropdown = function Dropdown(_ref) {
  var options = _ref.options,
      input = _ref.input;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdownOpen = _useState2[0],
      toggleDropdown = _useState2[1];

  var _useState3 = (0, _react.useState)(input.value),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedValue = _useState4[0],
      updateSelectedValue = _useState4[1];

  var optionKeys = Object.keys(options);
  (0, _react.useEffect)(function () {
    input.onChange(selectedValue);
  });
  return _react["default"].createElement(_style.DropdownContainer, {
    onClick: function onClick() {
      return toggleDropdown(!dropdownOpen);
    }
  }, _react["default"].createElement(_style.SelectedOption, null, options[selectedValue], _react["default"].createElement(_style.ArrowIcon, {
    open: dropdownOpen
  })), _react["default"].createElement(_style.Options, {
    visible: dropdownOpen
  }, optionKeys.map(function (key) {
    return _react["default"].createElement(_style.Option, {
      onClick: function onClick() {
        return updateSelectedValue(key);
      },
      key: key,
      active: key === selectedValue
    }, options[key]);
  })));
};

Dropdown.propTypes = {
  options: _propTypes["default"].shape({
    name: _propTypes["default"].arrayOf(_propTypes["default"].string)
  }).isRequired,
  input: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    onBlur: _propTypes["default"].func,
    onChange: _propTypes["default"].func,
    onFocus: _propTypes["default"].func,
    value: _propTypes["default"].string.isRequired
  })
};
var _default = Dropdown;
exports["default"] = _default;
//# sourceMappingURL=index.js.map