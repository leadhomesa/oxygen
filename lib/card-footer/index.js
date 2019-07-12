"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colors = _interopRequireDefault(require("../colors"));

var _style = _interopRequireDefault(require("./style"));

var _propTypes = require("prop-types");

var _pill = _interopRequireDefault(require("../pill"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SoldPill = (0, _styledComponents.css)(["background:", ";color:", ";"], _colors["default"].darkCoral, _colors["default"].white);
var StyledPill = (0, _styledComponents["default"])(_pill["default"]).withConfig({
  displayName: "card-footer__StyledPill",
  componentId: "sc-1pc7ygo-0"
})(["", ";"], function (_ref) {
  var variant = _ref.variant;
  return variant === 'sold' && SoldPill;
});

var CardFooter = function CardFooter(_ref2) {
  var children = _ref2.children,
      suburb = _ref2.suburb,
      variant = _ref2.variant;
  return _react["default"].createElement(_style["default"], {
    variant: variant,
    suburb: suburb
  }, children, _react["default"].createElement(StyledPill, {
    variant: variant
  }, suburb));
};

CardFooter.propTypes = {
  children: _propTypes.PropTypes.node,
  suburb: _propTypes.PropTypes.string.isRequired,
  variant: _propTypes.PropTypes.string
};
var _default = CardFooter;
exports["default"] = _default;