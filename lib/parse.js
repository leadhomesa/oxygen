"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nFormatter = exports.FormatCurrency = exports.ParseIntegerOrHalf = exports.ParseYear = exports.ParseInteger = exports.ParsePhone = void 0;

var ParsePhone = function ParsePhone(value) {
  if (!value) return value;
  var onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) return onlyNums;
  if (onlyNums.length <= 7) return "(".concat(onlyNums.slice(0, 3), ") ").concat(onlyNums.slice(3));
  return "(".concat(onlyNums.slice(0, 3), ") ").concat(onlyNums.slice(3, 6), "-").concat(onlyNums.slice(6, 10));
};

exports.ParsePhone = ParsePhone;

var ParseInteger = function ParseInteger(value) {
  if (!value) return;
  var onlyNums = value.replace(/[^\d]/g, '');
  if (!onlyNums) return;
  return parseFloat(onlyNums);
};

exports.ParseInteger = ParseInteger;

var ParseYear = function ParseYear(value) {
  if (!value) return;
  var onlyNums = value.replace(/[^\d]/g, '');
  if (!onlyNums) return;
  return parseFloat(onlyNums.substring(0, 4));
};

exports.ParseYear = ParseYear;

var ParseIntegerOrHalf = function ParseIntegerOrHalf(value) {
  if (!value) return;
  var onlyNums = value.replace(/[^\d.]/g, '');
  if (!onlyNums) return;
  var decimalPosition = onlyNums.indexOf('.');
  if (decimalPosition > -1) if (decimalPosition < onlyNums.length - 1) return "".concat(onlyNums.substring(0, decimalPosition), ".5");
  return onlyNums;
};

exports.ParseIntegerOrHalf = ParseIntegerOrHalf;

var FormatCurrency = function FormatCurrency(value) {
  if (!value && value !== 0) return '';
  return value.toLocaleString();
};

exports.FormatCurrency = FormatCurrency;

var nFormatter = function nFormatter(num, digits) {
  var si = [{
    value: 1,
    symbol: ''
  }, {
    value: 1e3,
    symbol: 'k'
  }, {
    value: 1e6,
    symbol: 'm'
  }, {
    value: 1e9,
    symbol: 'g'
  }, {
    value: 1e12,
    symbol: 't'
  }, {
    value: 1e15,
    symbol: 'p'
  }, {
    value: 1e18,
    symbol: 'e'
  }];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;

  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) break;
  }

  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
};

exports.nFormatter = nFormatter;