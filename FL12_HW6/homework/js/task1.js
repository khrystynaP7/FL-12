const a = prompt('Enter the first number');
const b = prompt('Enter the second number');
const c = prompt('Enter the third number');

if (isNaN(a) || isNaN(b) || isNaN(c)) {
	console.log(`Invalid input data`)
}

let squareRoot = 2;
let multiply = 4;
let multiplyX = 2;

let D = Math.pow(b, squareRoot) - multiply * a * c;
let x = -b / (multiplyX * a);
let x1 = (-b + Math.sqrt(D)) / (multiplyX * a);
let x2 = (-b - Math.sqrt(D)) / (multiplyX * a);

if (D === 0) {
	console.log('x:' + x)
} else if 
   (D > 0) {
console.log('x1:' + x1);
console.log('x2:' + x2)
   } else {
    console.log('No solution')
 }

