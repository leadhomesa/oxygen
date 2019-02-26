export const ParsePhone = value => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length <= 3) return onlyNums;

  if (onlyNums.length <= 7)
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;

  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(
    6,
    10
  )}`;
};

export const ParseInteger = value => {
  if (!value) return;

  const onlyNums = value.replace(/[^\d]/g, '');

  if (!onlyNums) return;

  return parseFloat(onlyNums);
};

export const ParseYear = value => {
  if (!value) return;

  const onlyNums = value.replace(/[^\d]/g, '');

  if (!onlyNums) return;

  return parseFloat(onlyNums.substring(0, 4));
};

export const ParseIntegerOrHalf = value => {
  if (!value) return;

  const onlyNums = value.replace(/[^\d.]/g, '');

  if (!onlyNums) return;

  const decimalPosition = onlyNums.indexOf('.');
  if (decimalPosition > -1)
    if (decimalPosition < onlyNums.length - 1)
      return `${onlyNums.substring(0, decimalPosition)}.5`;

  return onlyNums;
};

export const FormatCurrency = value => {
  if (!value && value !== 0) return '';

  return value.toLocaleString();
};

export const nFormatter = (num, digits) => {
  var si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'm' },
    { value: 1e9, symbol: 'g' },
    { value: 1e12, symbol: 't' },
    { value: 1e15, symbol: 'p' },
    { value: 1e18, symbol: 'e' }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) if (num >= si[i].value) break;

  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
};
