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

makeNumber('jd3c21c32');