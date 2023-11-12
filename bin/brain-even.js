import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(
    `Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`
  );
  for (let i = 0; i <= 2; i += 1) {
    const num = getRandomNumber(1, 50);
    console.log(`${'Question:'} ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (
      (num % 2 === 0 && answer === 'yes') ||
      (num % 2 !== 0 && answer === 'no')
    ) {
      console.log('Correct!');
    } else {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.)\nLet's try again, ${userName}`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

game();
