// 1/ The first n elements of an array
function first(array, n) {
  if (array == null) return [];
  if (n == null) return array[0];   
  if (n <= 0) return [];
  return array.slice(0, n);
}
// 2/ The last n elements of an array
function last(array, n) {
  if (array == null) return [];
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
}
// 3/ String = concatenation of all strings in array
function joinStrings(arr) {
  return arr.join('');
}
// 4/ Divide an array into several sub-arrays of predefined size
function chunk(array, size) {
  var chunkedArr = [];
  var index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}
module.exports = { first, last, joinStrings, chunk };
