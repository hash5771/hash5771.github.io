const newCountryButton = document.getElementById('js-new-country');
const showAnswerButton = document.getElementById('js-show-answer');

let countryName;
let currentWonPoints = 0;
let currentLostPoints = 0;

async function updatePointsWon() {
  currentWonPoints += 1;
  const points = document.querySelector('.points-won');
  points.innerText = `Points Won: ${currentWonPoints}`;
}

async function updatePointsLost() {
  currentLostPoints += 1;
  const points = document.querySelector('.points-lost');
  points.innerText = `Points Lost: ${currentLostPoints}`
}

async function getCountry() {
  document.getElementById('js-answer-text').innerText = '';
  document.getElementById('answer-box').value = '';

  const apiUrl = 'https://restcountries.com/v3.1/all';
  const response = await fetch(apiUrl);

  if (!response.ok) {
    alert('API Fetch Failed');
    return;
  }

  const body = await response.json(); // returns an array of objects

  const randomIndex = Math.floor(Math.random() * body.length);
  const randomObject = body[randomIndex];

  const cca2 = randomObject.cca2;

  document.getElementById('country-flag').src = `https://flagsapi.com/${cca2}/flat/64.png`;

  countryName = randomObject.name.common;
}

async function showAnswer() {
  document.getElementById('js-answer-text').innerText = countryName;

  const inputBox = document.getElementById('answer-box').value;
  if (inputBox.trim().toLowerCase() == countryName.toLowerCase()) {
    await updatePointsWon();
  } else {
    await updatePointsLost();
  }
}

newCountryButton.addEventListener('click', async () => {
  await getCountry();
});

showAnswerButton.addEventListener('click', async () => {
  await showAnswer();
});

getCountry();