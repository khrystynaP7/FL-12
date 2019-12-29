let game;
let randomNumber;
let enterUserNumber;
let gameNumber;
let startAmount = 8;
let nextAmount = 4;
let prize;
let startMaxPrize = 100;
let startPrize = 0;
let userNumber;
let lostConfirm;
let wonConfirm;

game = confirm('Do you want to play a game?');

if (game === false) {
	alert('You did not become a billionaire, but can.')
} else if (game === true) {
	do {
		for (let j = 0; j < Infinity; j++) {
			gameNumber = startAmount + j*nextAmount;
			randomNumber = Math.floor(Math.random()*gameNumber);
			for (let i = 0; i < 3; i++) {
				if (i === 0 || i === 1) {
					prize = startMaxPrize/(i+1)*Math.pow(2, j);
				} else if (i === 2) {
					prize = startMaxPrize/(i+2)*Math.pow(2, j);
				}
					enterUserNumber = prompt('Choose a roulette pocket number 0 to ' + gameNumber + '\nAttempts left: ' 
					+ (3-i) + '\nTotal prize: ' + startPrize + '$\nPossible prize on current attempt: ' + prize +' $');
					userNumber = parseFloat(enterUserNumber);
					if(i === 0 && userNumber === randomNumber) {
						prize = startMaxPrize/(i+1)*Math.pow(2, j);
						startPrize = prize;
						break;
					} else if (i === 1 && userNumber === randomNumber) {
						prize = startMaxPrize/(i+1)*Math.pow(2, j);
						startPrize = prize;
						break;
					} else if (i === 2 && userNumber === randomNumber) {
						prize = startMaxPrize/(i+2)*Math.pow(2, j);
						startPrize === prize;
						break;
					} else if (i === 2 !== userNumber === randomNumber) {
						alert('Thank you for your participation. Your prize is: ' + startPrize + '$.');
						lostConfirm = confirm('Do you want to play again?');
						break;
					}
			}
			if (lostConfirm === false) {
			alert('Thank you for your participation. Your prize is: ' + startPrize + '$');
			break;
			} else if (lostConfirm === true) {
continue;
			}
wonConfirm = confirm('Congratulation, you won! Your prize is: ' + startPrize + 
			'$. Do you want to continue?');
			if (wonConfirm === false) {
			break;
			} else {
			continue;
			}
		}
		alert('Thank you for your participation. Your prize is: ' + startPrize + '$');
		lostConfirm = confirm('Do you want to play again?');
		} while (lostConfirm === true);
}