const container = document.getElementById('container');
const text = document.getElementById('text');

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

function changeTheme(id) {
  document.body.style.backgroundImage = "url('./img/" + id + ".jpg')";
  if (id == '02' || id == '08') {
    //RED
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-blue');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-grey');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-pink');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-green');
    document.getElementById('circle').classList.remove('circle-blue');
    document.getElementById('circle').classList.remove('circle-pink');
    document.getElementById('circle').classList.remove('circle-grey');
    document.getElementById('circle').classList.remove('circle-green');
    document.getElementById('gradient').classList.add('gradient-circle-red');
    document.getElementById('circle').classList.add('circle-red');
  } else if (id == '04' || id == '07') {
    //BLUE
    document.getElementById('gradient').classList.remove('gradient-circle-red');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-grey');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-pink');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-green');
    document.getElementById('circle').classList.remove('circle-red');
    document.getElementById('circle').classList.remove('circle-pink');
    document.getElementById('circle').classList.remove('circle-grey');
    document.getElementById('circle').classList.remove('circle-green');
    document.getElementById('gradient').classList.add('gradient-circle-blue');
    document.getElementById('circle').classList.add('circle-blue');
  } else if (id == '03' || id == '09') {
    //GREY
    document.getElementById('gradient').classList.remove('gradient-circle-red');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-blue');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-pink');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-green');
    document.getElementById('circle').classList.remove('circle-red');
    document.getElementById('circle').classList.remove('circle-blue');
    document.getElementById('circle').classList.remove('circle-pink');
    document.getElementById('circle').classList.remove('circle-green');
    document.getElementById('gradient').classList.add('gradient-circle-grey');
    document.getElementById('circle').classList.add('circle-grey');
  } else if (id == '01' || id == '05' || id == '06') {
    //PINK
    document.getElementById('gradient').classList.remove('gradient-circle-red');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-blue');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-grey');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-green');
    document.getElementById('circle').classList.remove('circle-red');
    document.getElementById('circle').classList.remove('circle-blue');
    document.getElementById('circle').classList.remove('circle-grey');
    document.getElementById('circle').classList.remove('circle-green');
    document.getElementById('gradient').classList.add('gradient-circle-pink');
    document.getElementById('circle').classList.add('circle-pink');
  } else if (id == '10') {
    //GREEN
    document.getElementById('gradient').classList.remove('gradient-circle-red');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-blue');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-grey');
    document
      .getElementById('gradient')
      .classList.remove('gradient-circle-pink');
    document.getElementById('circle').classList.remove('circle-pink');
    document.getElementById('circle').classList.remove('circle-blue');
    document.getElementById('circle').classList.remove('circle-red');
    document.getElementById('circle').classList.remove('circle-grey');
    document.getElementById('gradient').classList.add('gradient-circle-green');
    document.getElementById('circle').classList.add('circle-green');
  }
  themesModal.style.display = 'none';
}
