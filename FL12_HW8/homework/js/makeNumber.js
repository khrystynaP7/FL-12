function makeNumber(input) {
    let newArray = [];
      for (let i = 0; i < input.length; i++) {
        if (parseInt(input[i])) {
        newArray.push(input[i]);
        }
	}
	return newArray.join('');
}

makeNumber('erer384jjjfd123')