"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Loading = function Loading(props) {
  return _react["default"].createElement("svg", props, _react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "3"
  }, _react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: "2"
  }, _react["default"].createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), _react["default"].createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), _react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: "2"
  }, _react["default"].createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), _react["default"].createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  }))));
};

Loading.defaultProps = {
  width: "22",
  height: "22",
  viewBox: "0 0 44 44",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "#fff"
};

var Button = function Button(_ref) {
  var children = _ref.children,
      loading = _ref.loading,
      rest = _objectWithoutProperties(_ref, ["children", "loading"]);

  return _react["default"].createElement(_style["default"], rest, children, loading && _react["default"].createElement(Loading, null));
};

Button.propTypes = {
  color: _propTypes["default"].oneOf(['primary', 'secondary', 'warning', 'success']),
  children: _propTypes["default"].any.isRequired,
  loading: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['sm', 'md', 'lg']),
  variant: _propTypes["default"].oneOf(['flat', 'outlined', 'text'])
};
Button.defaultProps = {
  color: 'primary',
  loading: false,
  size: 'md',
  variant: 'flat'
};
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=index.js.map