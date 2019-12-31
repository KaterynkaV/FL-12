function isSmaller(number1, number2){
	return !isBigger( number1, number2);
}

isSmaller(-2,2);

function isBigger(number1,number2){
	return number1 > number2;
}
isBigger(-8,5);