
var isPrime = (function(){
	var cache = {};

	function isPrime(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];
		console.log('Processing ', n);
		cache[n] = true;
		for(var i=2; i <= (n/2); i++)
			if (n % i === 0){
				cache[n] = false;
				break;
			}
		return cache[n];
	}
	return isPrime;
})();


var isOddOrEven = (function(){
	var cache = {};

	function isOddOrEven(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];
		console.log('Processing ', n);
		
		cache[n] = n % 2 === 0 ? 'even' : 'odd';

		return cache[n];
	}
	return isOddOrEven;
})();


function memoize(fn){
	var cache = {};

	return function(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];
		console.log('Processing ', n);
		cache[n] = fn(n)
		return cache[n];
	}
}

var isPrime = memoize(function(n){
	for(var i=2; i <= (n/2); i++)
    if (n % i === 0){
        return false;
    }
	return true;
})

var isOddOrEven = memoize(function(n){
	return n % 2 === 0 ? 'even' : 'odd';
});

var add = memoize(function(x,y){
	return x + y;
});

function memoize(fn){
	var cache = {};

	return function(){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] !== 'undefined')
			return cache[key];
		console.log('Processing ', arguments);
		cache[key] = fn.apply(this, arguments);
		return cache[key];
	}
}


