const ftoc = function(f) {

  let c = ((f)-32)*(5/9)
  let roundc = Number((c).toFixed(1));
  return roundc;
}

const ctof = function(c) {
  
  let f = ((c) *(9/5)) + 32
  let roundf = Number((f).toFixed(1));
  return roundf;
}

module.exports = {
  ftoc,
  ctof
}
