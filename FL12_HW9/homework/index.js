//Task 1
function convert() {
	let array = [];
	for(let i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] === 'string') {
			array.push(parseInt(arguments[i]))
		} else {
			array.push(arguments[i].toString())
		}
	}
    return array;
}
convert('1', 2, 3, '4')


//Task 2
function executeforEach(arr, func) {
    for(let i = 0; i < arr.length; i++) {
    func(arr[i])
        }
    }
executeforEach([1,2,3], function(el) {
	console.log( el*2)
})


//Task 3
function mapArray(arr, func) {
let result = [];
	function addArray(el) {
		result.push(func(parseInt(el)));
	}
	executeforEach(arr, addArray);
	return result
}
mapArray([2, '5', 8], function(a) {
	return a+3
})


//Task 4
function filterArray(arr, func) {
let result = [];
executeforEach(arr, function(el) {
	if (func(el) === true) {
		result.push(el);
	}
});
	return result;
}
filterArray([2, 5, 8], function(el) {
	return el % 2 === 0
})


//Task 5
function flipOver(str) {
let newString = ''
for(let i = str.length-1; i>=0; i--) {
    newString += str[i]
}
return newString
}
flipOver('hey world')

//Task 6 
function makeListFromRange(arr) {
   let arrFinal = [];
   for (let i = arr[0]; i <= arr[arr.length-1]; i++) {
    arrFinal.push(i)
   }
    return arrFinal
}
makeListFromRange([2, 7])

//Task 7 
const actors = [
	{name: 'tommy', age: 36},
	{name: 'lee', age: 28}
];
function getArrayOfKeys (arr, keys) {
	let result = [];
	function newArray(el) {
		result.push(el[keys])
	}
	executeforEach(arr, newArray)
	return result;
}
getArrayOfKeys(actors, 'name');

//Task 8
function substitute(arr) {
	let result = [];
	mapArray(arr, function (el) {
		if(el > 30) {
			result.push(el)
		} else {
			result.push('*')
		}
	})
	return result
}
substitute([58,14,2,31,29])

//Task 9
let date = new Date(2019, 0, 2)
function getPastDate(date, days) {
    let result = date.setDate(date.getDate() - days)
    let resultFinal = new Date(result)
    return resultFinal.getDate()
}
getPastDate(date, 365)

//Task10
function formatDate(date) {
	let formatedDate = ''
	let year = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDate();
	let hour = date.getHours();
	let minutes = date.getMinutes();
		if (Number.isNaN(year)) {
			let now = Date.now();
			return now;
		} else {
			formatedDate = year + '/' + month + '/' + day + ' ' + hour + ':' + minutes;
			return formatedDate;
		}
}
formatDate(new Date(''))