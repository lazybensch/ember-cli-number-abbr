import Ember from 'ember';

function getDecimalPlaces(adjustedNumber, maxSignificantPlaces) {
  const baseLength = Math.ceil( Math.log10(adjustedNumber) );
  const decimalPlaces = maxSignificantPlaces - (baseLength > 0 ? baseLength : 0);
  return decimalPlaces > 0 ? decimalPlaces : 0;
}

export function numberAbbr(number = 0, maxSignificantPlaces = 3, padding = false) {

  let symbols = Ember.A(['', 'K', 'M', 'B', 'T', 'Qua', 'Qui', 'Sex', 'Sep', 'Oct', 'Non', 'Dec']);

  let results = symbols.map( (symbol, index) => {
    const adjustedNumber = number / Math.pow(10, index*3);

    const decimalPlaces = getDecimalPlaces(adjustedNumber, maxSignificantPlaces);

    const roundedNumber = adjustedNumber.toFixed( decimalPlaces > 0 ? decimalPlaces : 0 );
    const strippedNumber = padding ? roundedNumber : roundedNumber.replace(/(\.0+$)/, '');
    return strippedNumber + symbol;
  });

  const result = Ember.A(results).find( (result, index) => {
    return number.toString().length <= (index+1)*3;
  });

  return result;
}

export default Ember.Helper.helper(numberAbbr);
