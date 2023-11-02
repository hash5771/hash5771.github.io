document.getElementById('btn1').addEventListener('click', function() {
  const button1 = document.getElementById('btn1');
  const currentColor = button1.style.backgroundColor;
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  do {
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
  } while (randomColor === currentColor);
  button1.style.backgroundColor = randomColor;

  if (randomColor === 'yellow' || randomColor === 'orange') {
    button1.style.color = 'black';
  } else {
    button1.style.color = 'white';
  }
});

document.getElementById('btn2').addEventListener('click', function() {
  const currentTextContent = document.getElementById('btn2').textContent;
  const currentTextIndex = parseInt(document.getElementById('btn2').dataset.index, 10);
  const textArray = ['I love Web!', 'I love JavaScript!', 'I love CSS!', 'I love HTML!'];
  const nextTextIndex = (currentTextIndex + 1) % textArray.length;
  document.getElementById('title').textContent = textArray[nextTextIndex];
  document.getElementById('btn2').dataset.index = nextTextIndex;
});

document.getElementById('btn3').addEventListener('mouseenter', function() {
  const buttonThree = document.getElementById('btn3');

  const positionArray = ['tr', 'bl', 'tl', 'br'];
  const currentPosition = buttonThree.dataset.pos;
  const nextPosition = positionArray[(positionArray.indexOf(currentPosition) + 1) % positionArray.length];
  buttonThree.dataset.pos = nextPosition;

  buttonThree.style.top = "";
  buttonThree.style.bottom = "";
  buttonThree.style.right = "";
  buttonThree.style.left = "";

  if (nextPosition === 'tr') {
    buttonThree.style.top = "10px";
    buttonThree.style.right = "10px";
  } else if (nextPosition === 'bl') {
    buttonThree.style.bottom = "10px";
    buttonThree.style.left = "10px";
  } else if (nextPosition === 'tl') {
    buttonThree.style.top = "10px";
    buttonThree.style.left = "10px";
  } else if (nextPosition === 'br') {
    buttonThree.style.bottom = "10px";
    buttonThree.style.right = "10px";
  }
});

document.getElementById('btn3').addEventListener('click', function() {
  document.getElementById('congrats').style.display = "block";
});