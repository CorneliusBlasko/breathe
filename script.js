const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const audio = document.getElementById('myAudio');
let pointer = document.getElementById('pointer');

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

function stopCircle() {
  if (document.getElementById('pointer').style.visibility == 'hidden') {
    document.getElementById('pointer').style.visibility = 'visible';
  } else {
    document.getElementById('pointer').style.visibility = 'hidden';
  }
}

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
