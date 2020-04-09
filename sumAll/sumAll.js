const sumAll = function(min, max) {

  if(min>max) {
    let temp = min
    min = max ;
    max = temp;
  }

  if(min < 0 || max < 0) return 'ERROR';
  if(typeof min !== "number" || typeof max  !== "number") return 'ERROR';

  var sum = 0

  for(i=min; i<max+1; i++){
    sum += i;
  }
  return sum;

}

module.exports = sumAll
