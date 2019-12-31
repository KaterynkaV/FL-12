function countNumbers(string){
	let number = makeNumber(string);
	let count = {};
	for(let i = 0; i < number.length; i++){
		count[number[i]] = 0;
	}
		for(let i = 0; i < number.length; i++){
		count[number[i]] +=1;
	}
	return count;
}

function makeNumber(mas){
	let number =''
	mas = [...mas];

	for(let i = 0; i < mas.length; i++){
		if(!isNaN(+mas[i])){
			if(!(mas[i] ===' ')){
				number+= mas[i];
			}
		}
	}
	return number;
}
countNumbers('125fv2r');