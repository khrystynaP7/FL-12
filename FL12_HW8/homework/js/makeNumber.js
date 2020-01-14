function makeNumber(string) {
    let newArray = [];
      for (let i = 0; i < string.length; i++) {
        if (parseInt(string[i])) {
        newArray.push(string[i]);
        }
	}
	return newArray.join('');
}

makeNumber('erer384jjjfd123')