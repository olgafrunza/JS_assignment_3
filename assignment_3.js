//Assignment 1

function checkType(arg) {
  return typeof arg;
}
console.log(checkType(null));

//Assignment 2

function isPerfectNum(num) {
  let sum = 0;
  for (let j = 1; j < num; j++) {
    if (num % j === 0) {
      sum += j;
    }
  }
  if (sum === num) {
    return `${num} is a Perfect Number`;
  } else {
    return `${num} isn't a Perfect Number`;
  }
}
console.log(isPerfectNum(10));

//Assignment 3

function extractChar(str, num) {
  let out = "";
  for (let j = 0; j < str.length - (str.length - num); j++) {
    out += str[j];
  }
  return out;
}
console.log(extractChar("Clarusway", 6));

/////////////////

const extract = (str, char) => {
  let newWord = "";
  for (let i = 0; i < char; i++) {
    newWord += str[i];
  }
  return newWord;
};

console.log(extract("Clarusway", 6));

//Assignment 4

const guessingGame = () => {
  let life = 5;
  const winingNumber = Math.floor(Math.random() * 100 + 1);
  console.log(winingNumber);
  let guessedNumber;
  do {
    guessedNumber = Number(prompt("Enter a number between 1 - 100:"));
    if (guessedNumber === winingNumber) {
      console.log("Congrats you have guessed our number!");
      break;
    } else {
      console.log(`You have ${life - 1} number of lifes`);
      if (guessedNumber > winingNumber) {
        console.log("Lower");
      } else {
        console.log("Higher");
      }
    }
    life -= 1;
  } while (life > 0);

  if (life === 0) {
    console.log("Sorry but you lost. The number was: " + winingNumber);
  }
};

guessingGame();
