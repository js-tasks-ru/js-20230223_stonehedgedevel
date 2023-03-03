/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortedArray = [...arr];

  if (param === 'desc') {
    sortedArray = sortedArray.sort((a, b) => b.localeCompare(a, 'ru', {caseFirst: 'upper'}));
  } else {
    sortedArray = sortedArray.sort((a, b) => a.localeCompare(b, 'ru', {caseFirst: 'upper'}));
  }

  return sortedArray;
}
