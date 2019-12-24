let a = Number(prompt('enter a = '));
let b = +prompt('enter b');
let c = +prompt('enter c = ');

if (a==='' || b==='' || c===''|| a===null|| b=== null || c===null || isNaN(a) || a===0|| isNaN(b) || isNaN(c) ) {
 alert("Invalid input data");
} else {
	let D = b*b-4*a*c;
	console.log(D);
	if (D<0) {
		console.log('no solution ');
		} else if (D === 0) { 
			let x = -b/(2*a);
			console.log(x);
		} else {
		let x1 = (-b + Math.sqrt(D))/ (2*a);
		let x2 = (-b - Math.sqrt(D))/ (2*a); 
		console.log( `x1 = ${x1} and x2 = ${x2}`);
	}
}


