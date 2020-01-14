function countNumbers(string) {
    let numbers = '';
    let myObject = {};
    for (let i = 0; i < string.length; i++) {
        if (parseInt(string[i])) {
        numbers = numbers + string[i];
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