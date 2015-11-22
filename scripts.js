$(function() { 

	var userScore = 0;
	var computerScore = 0;
	var user_text = $('#user-text');
	var rock = $('.rock');
	var paper = $('.paper');
	var scissors = $('.scissors');

	// COMPUTER SELECTION based on math random 
	function setComputer() {
		computerSelection = Math.random();	

		if(computerSelection < 0.34) {
			computerSelection = 'Rock';
		} else if (computerSelection <= 0.67) {
			computerSelection = 'Paper';
		} else {
			computerSelection = 'Scissors';
		}	
		$('#computer-text').text(computerSelection);
	};	
	// USER SELECTION vs COMPUTER SELECTION		
	function comparisonText() {
		console.log(userSelection, computerSelection) ;

		if(userSelection == computerSelection) {
			$('#comparison-text').text('Tie!');
		} 
		if(userSelection == 'Rock') {
			if(computerSelection == 'Paper') {
				$('#comparison-text').text('Paper WINS!');
				computerScore++;
			} else if(computerSelection == 'Scissors') {
				$('#comparison-text').text('Rock WINS!'); 
				userScore++;
			}
		};
		if(userSelection == 'Paper') {
			if(computerSelection == 'Rock') {
				$('#comparison-text').text('Paper WINS!');
				userScore++;
			} else if(computerSelection == 'Scissors') {
				$('#comparison-text').text('Scissors WINS!');
				computerScore++;
			}
		};
		if(userSelection == 'Scissors') {
			if(computerSelection == 'Rock') {
				$('#comparison-text').text('Rock WINS!');
				computerScore++;
			} else if(computerSelection == 'Paper') {
				$('#comparison-text').text('Scissors WINS!');
				userScore++;
			}
		}; 
		$('#userScore').html(userScore);
		$('#computerScore').html(computerScore);
	};

	// USER SELECTION based on button click
		rock.on('click', function() {
			user_text.text('Rock');
			userSelection = 'Rock';
			setComputer();
			comparisonText();
		});
		paper.on('click', function() {
			user_text.text('Paper');
			userSelection = 'Paper';
			setComputer();
			comparisonText();
		});
		scissors.on('click', function() {
			user_text.text('Scissors');
			userSelection = 'Scissors';
			setComputer();
			comparisonText();
		});

	// Copyright
		var year = new Date().getFullYear();
		$('#year').html(year);
});	
	
	




