const a = 3;
const b = 3;
console.log((a = b));

//Check if the number is positive number
const number = prompt("Enter a number :");
//check if the number is greater than 0
if (number > 0) {
  //the body to check the if statement
  console.log("The number is positive ");
}

console.log("The if statement is the easy");

//Program to the whether the number is greater than or less than the number

const number1 = 13;
const number2 = 23;

//IAf statement to check whether the number is the greatest or the the smallest

if (number1 > number2) {
  console.log("13 is the greatest");
} else {
  console.log("23 is the largest ");
}

//If ...else if statement
//check if the number if the positive ,negative or the zero

//Program to check if the number is the prime number or not
//take the number from the user
const marks = parseInt(prompt("Enter a positive number :"));

let isPrime = true;

//Check if the number is equal to 1
if (marks === 1) {
  console.log("1 is neither prime nor composite number");
}

//Check if number is greater than 1
else if (marks > 1) {
  //looping through 2 to number -1
  for (let i = 2; i < marks; i++) {
    if (marks % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${marks} is a prime number`);
  } else {
    console.log(`${marks} is not a prime number`);
  }
}
