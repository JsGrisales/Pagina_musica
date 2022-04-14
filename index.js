//variables de los ID de los audios
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");
var audio5 = document.getElementById("audio5");
var audio6 = document.getElementById("audio6");
var audio7 = document.getElementById("audio7");
var audio8 = document.getElementById("audio8");

//Array de las variabes (Id)
var audios = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8];

//funciones play & pause
//Audio 1
function playAudio1() {
  audios[0].play();
}
function pauseAudio1() {
  audios[0].pause();
}
//Audio 2
function playAudio2() {
  audios[1].play();
}
function pauseAudio2() {
  audios[1].pause();
}

//Audio 3
function playAudio3() {
  audios[2].play();
}
function pauseAudio3() {
  audios[2].pause();
}

//Audio 4
function playAudio4() {
  audios[3].play();
}
function pauseAudio4() {
  audios[3].pause();
}

//Audio 5
function playAudio5() {
  audios[4].play();
}
function pauseAudio5() {
  audios[4].pause();
}

//Audio 6
function playAudio6() {
  audios[5].play();
}
function pauseAudio6() {
  audios[5].pause();
}

//Audio 7
function playAudio7() {
  audios[6].play();
}
function pauseAudio7() {
  audios[6].pause();
}

//Audio 8
function playAudio8() {
  audios[7].play();
}
function pauseAudio8() {
  audios[7].pause();
}

//Aleatorio
let actual = 0;
function btnAleatorio() {
  var aleatorio = Math.random() * audios.length;
  var aleatorio2 = parseInt(aleatorio, 10);
  if (actual !== aleatorio2) {
    audios[actual].pause();
  }
  audios[aleatorio2].play();
  actual = aleatorio2;
}
