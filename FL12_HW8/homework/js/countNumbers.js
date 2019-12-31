function countNumbers(input) {
    let numbers = '';
    let myObject = {};
    for (let i = 0; i < input.length; i++) {
        if (parseInt(input[i])) {
        numbers = numbers + input[i];
        }
    }
    for(let i = 0; i < numbers.length; i++) {
        let addNumber = numbers[i];
        if (myObject[addNumber] !== undefined) {
            ++myObject[addNumber];
        } else {
            myObject[addNumber] = 1;
        }
    }
return myObject;
}

countNumbers('erer384jj444466888jfd123')