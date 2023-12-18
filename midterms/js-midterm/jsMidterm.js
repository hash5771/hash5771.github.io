// BEGIN DEFINITION OF COMPLEX FUNCTIONS
function sumOfPrimeFactors(currentNumber) {
  let sum = 0;
  for (let i = 2; i <= currentNumber; i++) {
      while (currentNumber % i === 0) {
          sum += i;
          currentNumber /= i;
      }
  }
  return sum;
}

function fibonacciPosition(currentNumber) {
  let fib0 = 0, fib1 = 1;
  let pos = 1;
  while (fib1 < currentNumber) {
      let temp = fib1;
      fib1 += fib0;
      fib0 = temp;
      pos++;
  }
  return (fib1 === currentNumber) ? pos : 0;
}

function collatzSequenceSteps(currentNumber) {
  let steps = 0;
  while (currentNumber > 1) {
      currentNumber = (currentNumber % 2 === 0) ? currentNumber / 2 : 3 * currentNumber + 1;
      steps++;
  }
  return steps;
}

function countBinaryOnes(currentNumber) {
  return currentNumber.toString(2).split('1').length - 1;
}

function distinctPrimeCount(currentNumber) {
  const distinctPrimes = new Set();
  let factor = 2;
  while (currentNumber >= factor) {
      if (currentNumber % factor === 0) {
          distinctPrimes.add(factor);
          currentNumber /= factor;
      } else {
          factor++;
      }
  }
  return distinctPrimes.size;
}

function digitSelfPowerSum(currentNumber) {
  return currentNumber.toString().split('').reduce((sum, digit) => sum + Math.pow(parseInt(digit), parseInt(digit)), 0);
}

function reverseAndSubtract(currentNumber) {
  const reversed = parseInt(currentNumber.toString().split('').reverse().join(''));
  return Math.abs(currentNumber - reversed);
}

function gcdWithConstant(currentNumber) {
  function gcd(a, b) {
      return b === 0 ? a : gcd(b, a % b);
  }
  return gcd(currentNumber, 15);
}

function hexadecimalLastDigit(currentNumber) {
  const hex = currentNumber.toString(16);
  return parseInt(hex[hex.length - 1], 16);
}

function countSetBits(currentNumber) {
  let bits = 0;
  while (currentNumber > 0) {
      bits += currentNumber & 1;
      currentNumber >>= 1;
  }
  return bits;
}

function eulerTotient(n) {
  let result = n;
  for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
          while (n % i === 0) n /= i;
          result -= result / i;
      }
  }
  if (n > 1) result -= result / n;
  return result;
}

function absoluteDifferenceFromConstant(n) {
  const constant = 5;
  return Math.abs(n - constant) % 10;
}

function sumOfEvenDigits(n) {
  return n.toString().split('').reduce((sum, digit) => sum + (digit % 2 === 0 ? parseInt(digit, 10) : 0), 0) % 10;
}

function singleDigitExponentiation(n) {
  return Math.pow(2, n) % 10;
}

function modulo10OfFactorial(n) {
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
      factorial *= i;
  }
  return factorial % 10;
}

function sumOfFirstAndLastDigit(n) {
  const digits = n.toString().split('');
  return (parseInt(digits[0], 10) + parseInt(digits[digits.length - 1], 10)) % 10;
}

function sqrtRoundedModulo10(n) {
  return Math.round(Math.sqrt(n)) % 10;
}

// END DEFINITION OF COMPLEX FUNCTIONS

const functionsArray = [
  { 
    func: sumOfPrimeFactors,
    name: "Sum of Prime Factors",
    description: "Calculates the sum of all prime factors of the input number."
  },
  { 
    func: fibonacciPosition,
    name: "Fibonacci Position",
    description: "Finds the position of the input number in the Fibonacci sequence."
  },
  { 
    func: collatzSequenceSteps,
    name: "Collatz Sequence Steps",
    description: "Counts the steps to reach 1 using the Collatz sequence rules from the input number."
  },
  { 
    func: countBinaryOnes,
    name: "Count Binary Ones",
    description: "Counts the number of '1's in the binary representation of the input number."
  },
  { 
    func: distinctPrimeCount,
    name: "Distinct Prime Count",
    description: "Determines the number of distinct prime factors of the input number."
  },
  { 
    func: digitSelfPowerSum,
    name: "Digit Self Power Sum",
    description: "Calculates the sum of each digit of the input number raised to the power of itself."
  },
  { 
    func: reverseAndSubtract,
    name: "Reverse and Subtract",
    description: "Subtracts the reverse of the input number from itself and takes the absolute value."
  },
  { 
    func: gcdWithConstant,
    name: "GCD with Constant",
    description: "Finds the greatest common divisor of the input number and a fixed number (15)."
  },
  { 
    func: hexadecimalLastDigit,
    name: "Hexadecimal Last Digit",
    description: "Converts the input number to hexadecimal and returns the last digit."
  },
  { 
    func: countSetBits,
    name: "Count Set Bits",
    description: "Counts the number of bits set to '1' in the binary form of the input number."
  },
  { 
    func: eulerTotient, 
    name: "Euler's Totient Function", 
    description: "Calculates the number of integers up to a given integer that are relatively prime to it." 
  },
  {
    func: absoluteDifferenceFromConstant,
    name: "Absolute Difference from Constant",
    description: "Calculates the absolute difference between the input number and a constant (5), modulo 10."
  },
  {
    func: sumOfEvenDigits,
    name: "Sum of Even Digits",
    description: "Calculates the sum of the even digits of the input number, modulo 10."
  },
  {
    func: singleDigitExponentiation,
    name: "Single-Digit Exponentiation",
    description: "Raises 2 to the power of the input number, modulo 10."
  },
  {
    func: modulo10OfFactorial,
    name: "Modulo 10 of Factorial",
    description: "Calculates the factorial of the input number, then takes modulo 10."
  },
  {
    func: sumOfFirstAndLastDigit,
    name: "Sum of First and Last Digit",
    description: "Calculates the sum of the first and last digits of the input number, modulo 10."
  },
  {
    func: sqrtRoundedModulo10,
    name: "Square Root, Rounded and Modulo 10",
    description: "Calculates the square root of the input number, rounds it, and then takes modulo 10."
  }
];

const inputBoxFunctionMap = new Map();

async function checkAllNumbersSingleDigit() {
  const inputs = document.querySelectorAll('input');

  let confirmReady = true;

  inputs.forEach((input) => {
    if (input.value === '') {
      confirmReady = false;
    }
    const value = parseInt(input.value, 10)
    if (value < 0 || value > 9) {
      confirmReady = false;
    }
  });

  if (confirmReady) {
    document.getElementById('confirm-button').disabled = false;
  } else {
    document.getElementById('confirm-button').disabled = true;
  }
}

async function addOneForFun() {
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    const inputId = input.getAttribute('id')
    console.log(`${inputId}: ${input.value}`)
    if (input.value !== '') {
      console.log('hello')
      input.value = (parseInt(input.value, 10) + 1) % 10;
    }
  })

  await checkAllNumbersSingleDigit();
}

async function begin() {
  document.getElementById('start-button').disabled = true;
  document.getElementById('reset-button').disabled = false;

  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    input.disabled = false;
    const inputId = input.getAttribute('id');
    const label = document.querySelector(`label[for=${inputId}]`);

    const randomIndex = Math.floor(Math.random() * functionsArray.length);
    const functionObj = functionsArray[randomIndex].func;
    const name = functionsArray[randomIndex].name;
    const description = functionsArray[randomIndex].description;
    label.textContent = `${label.textContent}: ${name}`;
    inputBoxFunctionMap.set(inputId, functionObj);

    const inputContainer = input.parentElement;
    const descriptionDiv = inputContainer.querySelector('.description')

    descriptionDiv.textContent = description;

    input.addEventListener('blur', () => {
      if (input.value !== '') {
        input.value = functionObj(parseInt(input.value));
      }
      checkAllNumbersSingleDigit();
    });

    input.addEventListener('click', addOneForFun);

    functionsArray.splice(randomIndex, 1);
  })
}

document.getElementById('start-button').disabled = false;
document.getElementById('reset-button').disabled = true;
document.getElementById('confirm-button').disabled = true;

document.getElementById('start-button').addEventListener('click', begin);
document.getElementById('reset-button').addEventListener('click', () => {
  window.location.reload(true);
});
document.getElementById('confirm-button').addEventListener('click', () => {
  const number1 = document.getElementById('phone-1').value;
  const number2 = document.getElementById('phone-2').value;
  const number3 = document.getElementById('phone-3').value;
  const number4 = document.getElementById('phone-4').value;
  const number5 = document.getElementById('phone-5').value;
  const number6 = document.getElementById('phone-6').value;
  const number7 = document.getElementById('phone-7').value;
  const number8 = document.getElementById('phone-8').value;
  const number9 = document.getElementById('phone-9').value;
  const number10 = document.getElementById('phone-10').value;
  const numberString = `
    (${number1}${number2}${number3}) ${number4}${number5}${number6} - ${number7}${number8}${number9}${number10}
  `;
  window.location.reload(true);
  alert(`Phone Number Confirmed: ${numberString}`);
});
