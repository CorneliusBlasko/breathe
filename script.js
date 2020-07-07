const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const audio = document.getElementById('myAudio');

breathAnimation();

function breathAnimation() {
  text.innerText = 'Inspira';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Aguanta la respiración';

    setTimeout(() => {
      text.innerText = 'Espira';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

function showBackgrounds() {
  console.log('Hello, world');
}

$('button').on('click tap', playPause);

function playPause(e) {
  $(this).find('.fa').toggleClass('fa, fa-pause fa, fa-play');
  if (
    document.getElementById('muteUnmute').innerHTML ==
    '<i class="fa fa-play"></i>'
  ) {
    audio.pause();
  } else {
    audio.play();
  }
}
