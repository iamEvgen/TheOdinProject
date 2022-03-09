function computerPlay() {
    const items = ['rock', 'paper', 'scissors'];
    return items[Math.floor(Math.random() * items.length)];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const winner_combo = ['rockscissors', 'paperrock', 'scissorspaper'];
    if (playerSelection === computerSelection) {
        return 'Tie game!';
    } else if (winner_combo.includes(playerSelection + computerSelection)) {
        return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} \
beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`;
    } else {
        return `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} \
beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
    }
}


function game() {
    let playerSelection;
    let counter = 0;
    let computerSelection;
    let youWins = 0;
    let computerWins = 0;
    while (counter < 5) {
        playerSelection = prompt('Input a number: 1 - rock, 2 - paper, 3 - scissors');
        playerSelection = ['rock', 'paper', 'scissors'][+playerSelection - 1];
        computerSelection = computerPlay();
        let resultOfTheRound = playRound(playerSelection, computerSelection);
        if (resultOfTheRound === 'Tie game!') {
            alert('Tie game');
        } else {
            alert(resultOfTheRound);
            counter++;
            if (resultOfTheRound.startsWith('You Win!')) {
                youWins++;
            } else {
                computerWins++;
            }
        }
    }
    alert(`Game over! YouWins: ${youWins}, computerWins: ${computerWins}`)
}


game();