let email = prompt('Please enter an email');
let password;
let newPassword;
let enterOldPassword;
let enterNewPassword;
let confirmPassword;

if (email === '' || email === null) {
	alert('Canceled.')
} else if(email.length < 5) {
	alert("I don't know any emails having name length less than 5 symbols")
} else if (email !== 'user@gmail.com' && email !== 'admin@gmail.com') {
	alert("I don't know you");
} else if(email === 'user@gmail.com' || email === 'admin@gmail.com') {
	password = prompt('Please enter the password');
	if (password === '' || password === null) {
		alert('Canceled.')
	} else if (email === 'user@gmail.com' && password !== 'UserPass' || 
email === 'admin@gmail.com' && password !== 'AdminPass') {
		alert('Wrong password');
	} else if (email === 'user@gmail.com' && password === 'UserPass' || 
email === 'admin@gmail.com' && password === 'AdminPass') {
		alert('Correct.');
newPassword = confirm('Do you want to change your password?'); 
if (newPassword === false) {
alert('You have failed the change.')
} else {
enterOldPassword = prompt('Please provide the old password');
if (enterOldPassword === '' || password === null) {
alert('Canceled.')
					} else if (enterOldPassword === 'UserPass' || enterOldPassword === 'AdminPass') {
							alert('Correct.');
							enterNewPassword = prompt('Please provide the new password');
if (enterNewPassword === '' || password === null) {
									alert('Canceled.')
} else if(enterNewPassword.length < 6) {
alert("It's too short password. Sorry.")
} else {
confirmPassword = prompt('Please enter the new password one more time')
if (enterNewPassword !== confirmPassword) {
alert('You wrote the wrong password')
} else {
alert('You have successfully changed your password.')
}				               
}
}
}
}
}
