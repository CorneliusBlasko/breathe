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

function hideCircle() {
  if (document.getElementById('pointer').style.visibility == 'hidden') {
    document.getElementById('pointer').style.visibility = 'visible';
    document.getElementById('hideCircle').innerText = 'Oculta la bola';
  } else {
    document.getElementById('pointer').style.visibility = 'hidden';
    document.getElementById('hideCircle').innerText = 'Muestra la bola';
  }
}

function showBackgrounds() {
  console.log('Hello, world');
}

$('button').on('click tap', playPause);

function startStop(e) {
  if (document.getElementById('startStop').innerText == 'Empieza') {
    document.getElementById('startStop').innerText = 'Para';
  } else {
    document.getElementById('startStop').innerText = 'Empieza';
  }
}

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
