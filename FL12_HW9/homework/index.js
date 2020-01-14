let a = 12;
let b = 3;
let c = 845;
 
function convert(...args){
	let converted_values = [];
	for(let i = 0; i < args.length; i ++){
		if(typeof args[i] === 'string'){
			converted_values.push(parseInt(args[i],10));
		}else if (typeof args[i] === 'number'){
			converted_values.push(args[i].toString());
		}
	}
	return converted_values;
}

function executeforEach(array, func){
	for(let i = 0; i < array.length; i++){
		func(array[i]);
	}
}

function mapArray(array, fanctionTransform){
	let newArray = [];
	executeforEach(array, function(el){
		if(typeof el === 'string'){
			el = parseInt(el,10)
		}
		newArray.push(fanctionTransform(el))
	});
	return newArray;
}

function filterArray(array, functionFilter){
	let newArray = [];
	executeforEach(array, function(el){
		if(functionFilter(el)){
			newArray.push(el);
		}
	})
return newArray;
}

function flipOver(str){
	let flipStr = '';
	let length = str.length;
	for (let i = length-1 ; i>=0 ; i --){
		flipStr = flipStr + str[i];
	}
	return flipStr;
}

function makeListFromRange(arr){
	let list = [];
	for (let i = arr[0]; i <= arr[1]; i++){
		list.push(i);
	}
	return list;
}

function substitute(arr){
	return mapArray(arr,function(el){
		if(el<30){
			el = '*'
			return el;
		}else{
			return el
		}
		})
}

function formatDate(date){
	if(arguments.length === 0){
		date = new Date();
	}
	return console.log(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()} 
		${date.getHours()}:${date.getMinutes()}`);
}

convert("1", "22", "jfj", a, b, c);
executeforEach([1,2,3], function(el){
	console.log(el * 2)
});
mapArray([2, '5', 8], function(el) {
	return el + 3
});
filterArray([2, 5, 8], function(el) {
	return el % 2 === 0
});
flipOver('Hello');
makeListFromRange([2,8]);
substitute([58, 14, 48, 2, 31, 29]);
formatDate(new Date('6/15/2018 09:15:00'))