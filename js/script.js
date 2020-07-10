/* STRINGS */

let breatheIn = 'Inspira';
let hold = 'Aguanta la respiración...';
let breatheOut = 'Espira';
let themeSelector = 'Selecciona el fondo que más te guste';

let breatheInES = 'Inspira';
let holdES = 'Aguanta la respiración';
let breatheOutES = 'Espira';
let hidePointerES = 'Oculta la bola';
let showPointerES = 'Muestra la bola';
let themeSelectorES = 'Selecciona el fondo que más te guste';

let breatheInEN = 'Breathe In';
let holdEN = 'Hold...';
let breatheOutEN = 'Breathe out';
let hidePointerEN = 'Hide the ball';
let showPointerEN = 'Show the ball';
let themeSelectorEN = 'Select your favorite background';

const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const audio = document.getElementById('myAudio');
let pointer = document.getElementById('pointer');
let language = 'ES';

let themesModal = document.getElementById('themesModal');
let menuButton = document.getElementById('menuButton');
let body = document.getElementById('body');
let languageButton = document.getElementById('languageButton');

menuButton.addEventListener('click', openBackgroundSelector);
languageButton.addEventListener('click', changeLanguage);
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
  text.innerText = breatheIn;
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = hold;

    setTimeout(() => {
      text.innerText = breatheOut;
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

function hideCircle() {
  if (document.getElementById('pointer').style.visibility == 'hidden') {
    document.getElementById('pointer').style.visibility = 'visible';
    document.getElementById('hideCircle').innerText = changePointerText(true);
  } else {
    document.getElementById('pointer').style.visibility = 'hidden';
    document.getElementById('hideCircle').innerText = changePointerText(false);
  }
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

function changeLanguage() {
  if (language == 'ES') {
    language = 'EN';
    changeCircleText(language);
    document.getElementById('themeSelectorLabel').innerText = themeSelectorEN;
    setHideLabelLanguage(language);
  } else {
    language = 'ES';
    changeCircleText(language);
    document.getElementById('themeSelectorLabel').innerText = themeSelectorES;
    setHideLabelLanguage(language);
  }
}

function changePointerText(hidden) {
  if (hidden) {
    if (language == 'ES') {
      return hidden ? hidePointerES : showPointerES;
    } else {
      return hidden ? hidePointerEN : showPointerEN;
    }
  } else {
    if (language == 'ES') {
      return hidden ? hidePointerES : showPointerES;
    } else {
      return hidden ? hidePointerES : showPointerEN;
    }
  }
}

function setHideLabelLanguage(language) {
  if (language == 'ES') {
    if (document.getElementById('pointer').style.visibility == 'visible') {
      document.getElementById('hideCircle').innerText = showPointerES;
    } else {
      document.getElementById('hideCircle').innerText = hidePointerES;
    }
  } else {
    if (document.getElementById('pointer').style.visibility == 'visible') {
      document.getElementById('hideCircle').innerText = showPointerEN;
    } else {
      document.getElementById('hideCircle').innerText = hidePointerEN;
    }
  }
}

function changeCircleText(language) {
  if (language == 'ES') {
    if (text.innerText == breatheIn) {
      text.innerText = breatheInES;
    } else if (text.innerText == hold) {
      text.innerText = holdES;
    } else if (text.innerText == breatheOut) {
      text.innerText = breatheOutES;
    }
    hold = holdES;
    breatheOut = breatheOutES;
    breatheIn = breatheInES;
  } else if (language == 'EN') {
    if (text.innerText == breatheIn) {
      text.innerText = breatheInEN;
    } else if (text.innerText == hold) {
      text.innerText = holdEN;
    } else if (text.innerText == breatheOut) {
      text.innerText = breatheOutEN;
    }
    hold = holdEN;
    breatheOut = breatheOutEN;
    breatheIn = breatheInEN;
  }
}
