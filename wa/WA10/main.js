const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'Once upon a time, in a land far far away, a TA named :insertx: was filling in as professor Anthony Pinter was away at :inserty:. As the Web class got started, the students learned all about :insertz:. One student named Bob even exclaimed that despite it being 94 fahrenheit outside, they were happy to be sitting in class. As :insertx: continued to teach, 300 pounds of cotton candy flooded the room and the students were ecstatic.'
// const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = [
  'Lila Anson',
  'Grant Lancaster',
  'Jack Manning',
  'Hailey Usher'
]
const insertY = [
  'The Web Awards',
  'Penn State',
  'Disneyworld',
  'Radiator Springs'
]
const insertZ = [
  'HTML',
  'CSS',
  'Javascript'
]

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);


  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300/14)} stone`;
    const temperature =  `${Math.round((94-32) * (5/9))} centigrade`;
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}