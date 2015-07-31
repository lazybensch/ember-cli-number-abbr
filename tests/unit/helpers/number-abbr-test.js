import { numberAbbr } from '../../../helpers/number-abbr';
import { module, test } from 'qunit';

module('Unit | Helper | number abbr', {
  beforeEach: function() {
    Math.log10 = Math.log10 || function(x) {
      return Math.log(x) / Math.LN10;
    };
  }
});

test('asdf', function(assert) {


  assert.equal(numberAbbr(3),          '3');
  assert.equal(numberAbbr(33),         '33');
  assert.equal(numberAbbr(333),        '333');
  assert.equal(numberAbbr(3333),       '3.33K');
  assert.equal(numberAbbr(33333),      '33.3K');
  assert.equal(numberAbbr(333333),     '333K');
  assert.equal(numberAbbr(3333333),    '3.33M');
  assert.equal(numberAbbr(33333333),   '33.3M');
  assert.equal(numberAbbr(333333333),  '333M');
  assert.equal(numberAbbr(3333333333), '3.33B');
});
