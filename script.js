// Grabbing HTML
const container = document.querySelector('.container'),
      text = document.querySelector('#text');

// Timer on the circle
const totalTime = 7500, //(7.5 seconds)
      breatheTime = (totalTime / 5) * 2,
      holdTime = totalTime / 5;


 breatheAnimation()     
// Function to control the animation
function breatheAnimation() {
  text.innerHTML = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink'
    }, holdTime)
  }, breatheTime)
}

// Set Interval will run the function every 7.5 seconds
setInterval(breatheAnimation, totalTime);

