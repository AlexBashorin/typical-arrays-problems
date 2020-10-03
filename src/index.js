
exports.min = function min (array) {
  let min = array[0];
  if (array.length === 0) {
    return 0;
  } else {
    return Math.min.apply(0, array); 
  }
}

exports.max = function max (array) {
  let max = array[0];
  if (array.length === 0) {
    return 0;
  } else {
    return Math.max.apply(0, array);
}
}

exports.avg = function avg (array) {
  let avg = array[0];
  if (array.length === 0) {
    return 0;
  } else {
    return array.reduce((a,b) => a + b, 0) / array.length;
}
}
