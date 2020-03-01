const special = require('../groups/special');
const positioning = require('../groups/positioning');
const structure = require('../groups/structure');
const dimension = require('../groups/dimension');
const definition = require('../groups/definition');
const typography = require('../groups/typography');
const visual = require('../groups/visual');
const animation = require('../groups/animation');
const misc = require('../groups/misc');

module.exports = ({ 'empty-line-between-groups': emptyLineBetweenGroups = false } = {}) =>
  [
    ['Special', special],
    ['Positioning', positioning],
    ['Structure', structure],
    ['Dimension', dimension],
    ['Definition', definition],
    ['Typography', typography],
    ['Visual', visual()],
    ['Animation', animation],
    ['Misc', misc],
  ].map(([groupName, properties]) => ({
    emptyLineBefore: emptyLineBetweenGroups ? 'always' : 'never',
    properties,
    groupName,
  }));
