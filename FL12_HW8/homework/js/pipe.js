function pipe(){
	for (let i = 1; i < arguments.length; i++) {
		arguments[i] = arguments[i](arguments[i-1]);
		console.log(arguments[i]);
	}
	return arguments[arguments.length-1];
}
function add(x) {
  return x + 3;
}

pipe(3,add);