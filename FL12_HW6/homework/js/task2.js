let a = parseFloat(prompt('Enter the first triangle side length'));
let b = parseFloat(prompt('Enter the second triangle side length'));
let c = parseFloat(prompt('Enter the third triangle side length'));

if (a === '' || isNaN(a) || b === '' || isNaN(b) || c === '' || isNaN(c)) {
    alert('Input values should be ONLY numbers');
}
if (a || b || c === 0) {
	alert('A triangle must have 3 sides with a positive definite length');
}

if (a === b && b === c && c === a) {
	console.log('Equilateral triangle')
} else if (a === b || b === c || c === a) {
	console.log('Isosceles triangle')
} else if (a+b<c || b+c<a || a+c<b) {
	console.log('Triangle doesn’t exist')
} else {
	console.log('Scalene triangle')
}
