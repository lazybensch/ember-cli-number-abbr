import { numberAbbr } from '../../../helpers/number-abbr';
import { module, test } from 'qunit';

module('Unit | Helper | number abbr');

test('formats numbers correctly', function(assert) {
  assert.equal(numberAbbr(3),           '3');
  assert.equal(numberAbbr(33),          '33');
  assert.equal(numberAbbr(333),         '333');
  assert.equal(numberAbbr(3333),        '3.33K');
  assert.equal(numberAbbr(33333),       '33.3K');
  assert.equal(numberAbbr(333333),      '333K');
  assert.equal(numberAbbr(3333333),     '3.33M');
  assert.equal(numberAbbr(33333333),    '33.3M');
  assert.equal(numberAbbr(333333333),   '333M');
  assert.equal(numberAbbr(3333333333),  '3.33B');
});

test('respects padding and maxSignificantPlaces', function(assert) {

  assert.equal(numberAbbr(3,5,true),     '3.0000');
  assert.equal(numberAbbr(1234,2,true),  '1.2K');
  assert.equal(numberAbbr(1999,2,true),  '2.0K');
  assert.equal(numberAbbr(1999,2,false), '2K');

});
