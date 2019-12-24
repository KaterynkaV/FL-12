let a = prompt('enter a = ');
let b = prompt('enter b');
let c = prompt('enter c = ');

if(a==='' || b==='' || c==='' || a===null|| b=== null || c===null || isNaN(+a) || isNaN(+b) || isNaN(+c)){
	alert('input values should be ONLY numbers' );
} else {
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
if (a <=0 || b<= 0 || c<=0){
	alert('A triangle must have 3 sides with a positive definite length ');
} else if( a+b<=c || a+c<=b || b+c<=a){
	alert('Triangle doesn’t exist');
	console.log('Triangle doesn’t exist');
}else if( a === b && b === c){
	console.log('Equilateral triangle');
} else if( a===b || a===c || b===c){
	console.log('Isosceles triangle');
} else {
	console.log('Scalene triangle');
}
}


		
