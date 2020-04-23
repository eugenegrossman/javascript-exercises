function add (a,b) {
	return (a)+(b)
};

function subtract (a,b) {
	return (a)-(b)
};

function sum (array) {
	return array.reduce((start,next)=> start + next, 0);
};
	
function multiply (array) {
	return array.length
	  ? array.reduce((start, next)=> start * next): 0;
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(n) {
	if(n===0){
		return 1
	}else {
	return n * factorial(n-1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}