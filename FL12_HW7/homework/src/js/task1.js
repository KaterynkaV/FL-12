let email_user = 'user@gmail.com';
let email_admin = 'admin@gmail.com';
let pass_u = 'UserPass';
let pass_a = 'AdminPass';
let password_correct;
let new_pass1 = '';
let new_pass2 = '';
let password = '1';
let change_confirm;

let email = prompt('Enter your email');
if (email === '' || email === null){
	alert('Canceled');
}else if(email.length < 5){
	alert("I don't know any emails having name length less than 5 symbols");
}else if(email === email_user || email=== email_admin){
	password = prompt('Enter your password');
}else{
	alert('I don’t know you');
}


if(!(password ==='1')){
	if(password === '' || password === null ){
		alert('Canceled');
	}else{
		switch (password){
			case pass_u :
			password_correct = email === email_user;
			break;
			case pass_a :
			password_correct = email === email_admin ;
			break;
			default:
			password_correct = false;
		}
		if(!password_correct){
			alert('Wrong password');
		}else{

			change_confirm = confirm('Do you want to change your password?')
			if (!change_confirm){
				alert('You have failed the change.')
			}else{
				password = prompt('Enter your old password');
				switch (password){
					case pass_u :
					password_correct = email === email_user;
					break;
					case pass_a :
					password_correct = email === email_admin;
					break;
					default:
					password_correct = false;
				}
				if(!password_correct){
					alert('Wrong password');
				}else{
					new_pass1 = prompt('Enter your new password');
					if(new_pass1 === '' || new_pass1 === null){
						alert('Canceled');
					} else if (new_pass1.length < 6){
						alert('It’s too short password. Sorry.');
					}else{
						new_pass2 = prompt('Enter your new password again, please');
						if(new_pass1 === new_pass2){
							alert('You have successfully changed your password.');
						}else{
							alert('You wrote the wrong password.');
						}
					}
				}
			}
		}
	}
}else {
	alert('Wrong password')
}
