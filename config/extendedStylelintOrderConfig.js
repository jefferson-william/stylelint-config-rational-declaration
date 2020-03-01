const path = require('path');
const specialProps = require('../groups/special');

module.exports = ({ 'empty-line-between-groups': emptyLineBetweenGroups = false } = {}) => ({
  plugins: ['stylelint-order', path.join(__dirname, '../plugin')],
  rules: {
    'order/properties-order': [],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: specialProps,
      },
    ],
    'plugin/rational-declaration': [
      true,
      {
        'empty-line-between-groups': emptyLineBetweenGroups,
      },
    ],
  },
});
