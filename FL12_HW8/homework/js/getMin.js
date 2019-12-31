function getMin(...mas){
	let min = mas[0];
	for(let i = 0; i < mas.length; i++){
		if(isSmaller(mas[i],min)){
			min = mas[i]
		}
	}
	return min;
}
function isSmaller(number1, number2){
	return !isBigger( number1, number2);
}

isSmaller(-2,2);

function isBigger(number1,number2){
	return number1 > number2;
}
getMin(5,-5,0);