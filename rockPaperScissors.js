const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }
  else{
    console.log('error');
  }
};

const getComputerChoice = () => {
let wholeNumber = Math.floor(Math.random() * 3);
if (wholeNumber === 0){
  return 'rock';
}
else if (wholeNumber === 1){
  return 'paper';
}
else{
  return 'scissors';
}
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return "The game was a tie";
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return "The Computer Won";
    } else {
      return "You won!";
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return "The Computer Won";
    } else{
      return "You won!";
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return "The Computer Won";
    } else{
      return "You won!";
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

