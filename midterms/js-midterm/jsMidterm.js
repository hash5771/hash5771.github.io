let currentPhoneField = 1;

async function begin() {
  document.getElementById('begin-button').disabled = true;
  document.getElementById('stop-button').disabled = false;

  populatePhoneField();
}

async function populatePhoneField() {
  const currentField = document.getElementById(`phone-${currentPhoneField}`);

  randomNumberGenerator = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    currentField.value = randomNumber;
  }, 100);
}

async function stop() {
  clearInterval(randomNumberGenerator);

  if (currentPhoneField < 9) {
    currentPhoneField++;
    populatePhoneField();
  } else {
    document.getElementById('stop-button').disabled = true;
  }
}

async function confirm() {
  const formInputs = document.querySelectorAll('form input');
  let phoneNumber = '';
  formInputs.forEach((input) => {
    phoneNumber += input.value;
  });
  const phoneNumberFormatted = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

  alert(`Your phone number is ${phoneNumberFormatted}!`);
}

async function clear() {
  clearInterval(randomNumberGenerator);
  const formInputs = document.querySelectorAll('form input');
  formInputs.forEach((input) => {
    input.value = '';
  });
  currentPhoneField = 1;
  document.getElementById('begin-button').disabled = false;
  document.getElementById('stop-button').disabled = true;
}

document.getElementById('begin-button').addEventListener('click', begin);
document.getElementById('stop-button').addEventListener('click', stop);
document.getElementById('confirm-button').addEventListener('click', confirm);
document.getElementById('clear-button').addEventListener('click', clear);