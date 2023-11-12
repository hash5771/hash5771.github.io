const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = [
  'images/pic1.jpeg',
  'images/pic2.avif',
  'images/pic3.jpg',
  'images/pic4.jpg',
  'images/pic5.jpg',
];

/* Declaring the alternative text for each image file */
let currentSrc = "xxx";
let currentAlt = "xxx";

/* Looping through images */

for (const image of imageArray) {
  currentSrc = image;
  currentAlt = image;
  const currentImage = document.createElement('img');
  currentImage.src = currentSrc;
  currentImage.alt = currentAlt;
  currentImage.addEventListener('click', () => {
    displayedImage.src = currentImage.src;
    displayedImage.alt = currentImage.alt;
  })
  thumbBar.appendChild(currentImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class');
  console.log(currentClass)
  if (currentClass === 'dark') {
    btn.classList.remove('dark')
    btn.setAttribute('class', 'light')
    btn.innerText = 'Lighten'
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.classList.remove('light')
    btn.setAttribute('class', 'dark')
    btn.innerText = 'Darken'
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'
  }
})
