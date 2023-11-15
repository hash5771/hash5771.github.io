async function displayQuote(data) {
  const question = data.question;
  const answer = data.answer;

  const jsQuoteText = document.getElementById('js-quote-text')
  jsQuoteText.innerText = question;

  const jsAnswerText = document.getElementById('js-answer-text')
  jsAnswerText.innerText = '';

  const answerButton = document.getElementById('js-tweet');
  answerButton.addEventListener('click', () => {
    jsAnswerText.innerText = answer; 
  })
}

async function getQuote() {
  console.log('Button Clicked!');
  const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
  const response = await fetch(apiEndpoint)

  if (!response.ok) {
    console.log('Error fetching data');
    alert('Error fetching data in getQuote');
    return;
  }

  const data = await response.json();

  await displayQuote(data);
}

const newQuoteButton = document.querySelector('button')

newQuoteButton.addEventListener('click', getQuote)

getQuote();