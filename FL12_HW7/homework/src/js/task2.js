let play;
let beginningOfInterval;
let endOfInterval;
let guess = false; 
let prizes;
let winning = 0;
let continueGame = false;
let new_game = true;
let random;
let userBid;

play = confirm('Do you want to play a game?');
if (!play){
	alert('You did not become a billionaire, but can');
} else{
	while(play){
		guess = false;
		if(new_game){
			beginningOfInterval = 0;
			endOfInterval = 8;
			winning = 0;
			prizes = [100, 50, 25];
		} else{
			endOfInterval += 4;
			for(let i = 0; i < 3; i++){
				prizes[i] = prizes[i] * 2;
			}
		}
		
		random = Math.floor(Math.random()*(endOfInterval - beginningOfInterval + 1 )) + beginningOfInterval; 
		console.log(random);
		
		for (let i = 3; i > 0; i--) {
			userBid = +prompt('Choose a roulette pocket number  from ' + beginningOfInterval + ' to ' + endOfInterval +
						'\n Attempts left: '+ i + '\n Total prize: ' + winning + 
						' $ \n Possible prize on current attempt: ' + prizes[3-i]
						+' $');
			

			if( userBid === random){
				console.log('Ypa')
				guess = true;
				winning += prizes[3-i];
				break;
			}
		}

		if(!guess){
			alert('Thank you for your participation. Your prize is: ' + winning);
			play = confirm('Do you want play again?');
		} else{
			continueGame = confirm('Congratulation, you won!\nYour prize is: '
								+ winning + ' $.\n Do you want to continue?');
			if(!continueGame){
				alert('Thank you for your participation. Your prize is: ' + winning);
				play = confirm('Do you want play again?');
				new_game = true;
			}else{
				new_game = false;
			}
		}
		console.log(play);
	}
}