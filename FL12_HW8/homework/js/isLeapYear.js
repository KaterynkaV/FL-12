function isLeapYear(time){
	let date = new Date(time);
	let year = date.getFullYear();
	if(isNaN(year)){
		return 'Invalid Date';
	}else if(year % 4 === 0 ){
		if(year % 100 === 0){
			if(year % 400 === 0){
				return year + ' is a leap year';
			}else{
				return year + ' is not a leap year'
			}
		} else{
			return year + ' is a leap year';
		}
	}else{
		return year + ' is not a leap year';
	}
}

isLeapYear(1213131313);
