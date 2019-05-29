"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AddOnContainer", {
  enumerable: true,
  get: function get() {
    return _style.AddOnContainer;
  }
});
Object.defineProperty(exports, "TextInputContainer", {
  enumerable: true,
  get: function get() {
    return _style.Container;
  }
});
Object.defineProperty(exports, "ErrorMessage", {
  enumerable: true,
  get: function get() {
    return _style.ErrorMessage;
  }
});
Object.defineProperty(exports, "TextInput", {
  enumerable: true,
  get: function get() {
    return _style.TextInput;
  }
});
exports.Year = exports.IntegerOrHalf = exports.Integer = exports.Currency = exports.MetersSquared = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _parse = require("../parse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Input =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Input, _React$PureComponent);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var onChange = _this.props.input.onChange;
      _this.cursorBeforeChange = e.target.selectionStart;
      _this.valueBeforeChange = e.target.value;
      _this.target = e.target;
      setTimeout(function () {
        var valueAfterChange = _this.target.value;
        var lengthDifference = valueAfterChange.length - _this.valueBeforeChange.length;
        var newSelection = _this.cursorBeforeChange + lengthDifference;

        try {
          _this.target.setSelectionRange(newSelection, newSelection);
        } catch (e) {// Ignore
        }
      }, 0);
      onChange(e);
      return true;
    });

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          AddOn = _this$props.addOn,
          Affix = _this$props.affix,
          Icon = _this$props.icon,
          addOnSm = _this$props.addOnSm,
          input = _this$props.input,
          _this$props$meta = _this$props.meta,
          meta = _this$props$meta === void 0 ? {} : _this$props$meta,
          parse = _this$props.parse,
          format = _this$props.format,
          disabled = _this$props.disabled,
          readOnly = _this$props.readOnly,
          showError = _this$props.showError,
          showWarning = _this$props.showWarning,
          flexGrow = _this$props.flexGrow,
          rest = _objectWithoutProperties(_this$props, ["addOn", "affix", "icon", "addOnSm", "input", "meta", "parse", "format", "disabled", "readOnly", "showError", "showWarning", "flexGrow"]);

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_style.Container, {
        warning: showWarning(meta),
        active: meta.active,
        disabled: disabled,
        flexGrow: flexGrow
      }, AddOn && _react["default"].createElement(_style.AddOnContainer, {
        sm: addOnSm
      }, _react["default"].createElement(AddOn, null)), _react["default"].createElement(_style.TextInput, _extends({
        disabled: disabled,
        readOnly: readOnly
      }, input, rest, {
        onChange: this.onChange
      })), Affix && _react["default"].createElement(_style.AffixContainer, {
        sm: addOnSm
      }, _react["default"].createElement(Affix, null)), Icon && _react["default"].createElement(_style.IconRegion, null, _react["default"].createElement(Icon, null))), showError(meta) && _react["default"].createElement(_style.ErrorMessage, null, meta.error));
    }
  }]);

  return Input;
}(_react["default"].PureComponent);

_defineProperty(Input, "defaultProps", {
  showError: function showError(meta) {
    return meta.error && meta.touched;
  },
  showWarning: function showWarning(meta) {
    return meta.error && meta.touched;
  }
});

var _default = Input;
exports["default"] = _default;

var CurrencyAddon = function CurrencyAddon() {
  return 'R';
};

var Currency = {
  addOn: CurrencyAddon,
  parse: _parse.ParseInteger,
  format: _parse.FormatCurrency
};
exports.Currency = Currency;
var MetersSquared = {
  affix: function affix() {
    return '㎡';
  },
  parse: _parse.ParseInteger
};
exports.MetersSquared = MetersSquared;
var Integer = {
  parse: _parse.ParseInteger
};
exports.Integer = Integer;
var Year = {
  parse: _parse.ParseYear
};
exports.Year = Year;
var IntegerOrHalf = {
  parse: _parse.ParseIntegerOrHalf
};
exports.IntegerOrHalf = IntegerOrHalf;
Input.propTypes = {
  input: _propTypes["default"].object,
  addOn: _propTypes["default"].func,
  affix: _propTypes["default"].object,
  icon: _propTypes["default"].object,
  addOnSm: _propTypes["default"].bool,
  meta: _propTypes["default"].object,
  parse: _propTypes["default"].func,
  format: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  showError: _propTypes["default"].func,
  showWarning: _propTypes["default"].func,
  flexGrow: _propTypes["default"].bool
};
//# sourceMappingURL=index.js.map