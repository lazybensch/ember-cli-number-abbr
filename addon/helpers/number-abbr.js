import Ember from 'ember';

export function numberAbbr(number = 0, maxSignificantPlaces = 3) {

  let symbols = Ember.A(['', 'K', 'M', 'B', 'T', 'Qua', 'Qui']);

  let results = symbols.map( (symbol, index) => {
    const adjustedNumber = number / Math.pow(10, index*3);
    const padding = Math.ceil( Math.log10(adjustedNumber) );
    const decimalPlaces = maxSignificantPlaces - padding;
    const roundedNumber = adjustedNumber.toFixed( decimalPlaces > 0 ? decimalPlaces : 0 );
    const strippedNumber = roundedNumber.replace(/(\.0+$)/, '');
    return strippedNumber + symbol;
  });

  const result = Ember.A(results).find( (result, index) => {
    return number.toString().length <= (index+1)*3;
  });

  return result;
}

export default Ember.Helper.helper(numberAbbr);


// 0 - 999 / 1.000 - 999.999 / 1.000.000 - 999.000.000
// 3*1 3*2 3*3
