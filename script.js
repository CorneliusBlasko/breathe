/* Gradients for themes 01, 04 */

let blue_1_1 = '#87cefa 0%';
let blue_1_2 = '#00bfff 40%';
let blue_2_1 = '#b0c4de 40%';
let blue_2_2 = '#add8e6 60%';
let blue_3_1 = '#6495ed 60%';
let blue_3_2 = '#4682b4 100%';
let blue_gradient_1 = '#1a5276';
let blue_gradient_2 = '#6495ed';

/* Gradients for themes 02 */

let red_1_1 = '#ffa07a 0%';
let red_1_2 = '#f08080 40%';
let red_2_1 = '#fbcbcb 40%';
let red_2_2 = '#fbb6b6 60%';
let red_3_1 = '#fa8072 60%';
let red_3_2 = '#cd5c5c 100%';

const container = document.getElementById('container');
const text = document.getElementById('text');

let color = '#808000';

const totalTime = 7000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const audio = document.getElementById('myAudio');
let pointer = document.getElementById('pointer');

let themesModal = document.getElementById('themesModal');
let menuButton = document.getElementById('menuButton');
let body = document.getElementById('body');

menuButton.addEventListener('click', openBackgroundSelector);
window.addEventListener('click', clickOutside);

function openBackgroundSelector() {
  themesModal.style.display = 'block';
}

function clickOutside(e) {
  if (e.target == themesModal) {
    themesModal.style.display = 'none';
  }
}

function changeTheme(id) {
  let backgroundValue;
  document.body.style.backgroundImage = "url('./img/" + id + ".jpg')";
  if (id == '02') {
    backgroundValue = getRedTheme();
    document.getElementsByClassName(
      'gradient-circle'
    )[0].style.backgroundImage = backgroundValue;
    console.log('backgroundValue: ' + backgroundValue);
  } else if (id == 01 || id == 04) {
    backgroundValue = getBlueTheme();
    console.log('backgroundValue: ' + backgroundValue);
    console.log(
      'actual value: ' +
        document.getElementsByClassName('gradient-circle')[0].style
          .backgroundImage
    );
  }
  themesModal.style.display = 'none';
}

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

function getRedTheme() {
  return (
    'conic-gradient(' +
    red_1_1 +
    ',' +
    red_1_2 +
    ',' +
    red_2_1 +
    ',' +
    red_2_2 +
    ',' +
    red_3_1 +
    ',' +
    red_3_2 +
    ');'
  );
}

function getBlueTheme() {
  return (
    'conic-gradient(' +
    blue_1_1 +
    ',' +
    blue_1_2 +
    ',' +
    blue_2_1 +
    ',' +
    blue_2_2 +
    ',' +
    blue_3_1 +
    ',' +
    blue_3_2 +
    ');'
  );
}
