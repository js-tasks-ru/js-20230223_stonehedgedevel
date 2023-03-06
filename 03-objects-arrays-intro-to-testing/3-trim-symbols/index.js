/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const letters = string.split('');
  let counter = 0;
  let result = letters[0];

  if (!string.length || (typeof size === 'number' && size === 0)) return '';
  if (!size) return string;
  
  for (let i = 1; i < letters.length; i++) {
    if (letters[i] === letters[i - 1]) {
      counter++;
    } else {
      counter = 0;
    }
    
    if (counter < size) result += letters[i];
  }
  
  return result;
}
