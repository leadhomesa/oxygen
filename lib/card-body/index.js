"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireWildcard(require("./style"));

var _propTypes = require("prop-types");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardBody = function CardBody(_ref) {
  var description = _ref.description,
      image = _ref.image,
      meta = _ref.meta,
      price = _ref.price;
  return _react["default"].createElement(_style["default"], {
    image: image
  }, _react["default"].createElement(_style.BodyMeta, null, meta), _react["default"].createElement(_style.BodyData, null, _react["default"].createElement(_style.BodyPrice, null, price), _react["default"].createElement(_style.BodyDescription, null, description)));
};

CardBody.propTypes = {
  description: _propTypes.PropTypes.string.isRequired,
  image: _propTypes.PropTypes.string.isRequired,
  meta: _propTypes.PropTypes.elementType.isRequired,
  price: _propTypes.PropTypes.string.isRequired
};
var _default = CardBody;
exports["default"] = _default;
//# sourceMappingURL=index.js.map