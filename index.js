//variables de los ID de los audios
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");
var audio5 = document.getElementById("audio5");
var audio6 = document.getElementById("audio6");
var audio7 = document.getElementById("audio7");
var audio8 = document.getElementById("audio8");

//Variables de los cambios de estilo
var cambiar  = document.getElementById("change");
var cambiar2 = document.getElementById("change2");
var cambiar3 = document.getElementById("change3");
var cambiar4 = document.getElementById("change4");
var cambiar5 = document.getElementById("change5");
var cambiar6 = document.getElementById("change6");
var cambiar7 = document.getElementById("change7");
var cambiar8 = document.getElementById("change8");
var cambiar9 = document.getElementById("change9");
var cambiar10= document.getElementById("change10");
var cambiar11= document.getElementById("change11");
var cambiar12= document.getElementById("change12");
var cambiar13= document.getElementById("change13");
var cambiar14= document.getElementById("change14");
var cambiar15= document.getElementById("change15");
var cambiar16= document.getElementById("change16");

//Array de las variabes (Id)
var audios = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8];

//funciones play & pause
//Audio 1
function playAudio1() {
  audios[0].play();
  cambiar.style.color = 'black';
  cambiar2.style.color = 'black';
}
function pauseAudio1() {
  audios[0].pause();
  cambiar.style.color = '#C1C1C1';
  cambiar2.style.color = '#C1C1C1';
}
//Audio 2
function playAudio2() {
  audios[1].play();
  cambiar3.style.color = 'black';
  cambiar4.style.color = 'black';
}
function pauseAudio2() {
  audios[1].pause();
  cambiar3.style.color = '#C1C1C1';
  cambiar4.style.color = '#C1C1C1';
}

//Audio 3
function playAudio3() {
  audios[2].play();
  cambiar5.style.color = 'black';
  cambiar6.style.color = 'black';
}
function pauseAudio3() {
  audios[2].pause();
  cambiar5.style.color = '#C1C1C1';
  cambiar6.style.color = '#C1C1C1';
}

//Audio 4
function playAudio4() {
  audios[3].play();
  cambiar7.style.color = 'black';
  cambiar8.style.color = 'black';
}
function pauseAudio4() {
  audios[3].pause();
  cambiar7.style.color = '#C1C1C1';
  cambiar8.style.color = '#C1C1C1';
}

//Audio 5
function playAudio5() {
  audios[4].play();
  cambiar13.style.color = 'black';
  cambiar14.style.color = 'black';
}
function pauseAudio5() {
  audios[4].pause();
  cambiar13.style.color = '#C1C1C1';
  cambiar14.style.color = '#C1C1C1';
}

//Audio 6
function playAudio6() {
  audios[5].play();
  cambiar15.style.color = 'black';
  cambiar16.style.color = 'black';
}
function pauseAudio6() {
  audios[5].pause();
  cambiar15.style.color = '#C1C1C1';
  cambiar16.style.color = '#C1C1C1';
}

//Audio 7
function playAudio7() {
  audios[6].play();
  cambiar9.style.color = 'black';
  cambiar10.style.color = 'black';
}
function pauseAudio7() {
  audios[6].pause();
  cambiar9.style.color = '#C1C1C1';
  cambiar10.style.color = '#C1C1C1';
}

//Audio 8
function playAudio8() {
  audios[7].play();
  cambiar11.style.color = 'black';
  cambiar12.style.color = 'black';
}
function pauseAudio8() {
  audios[7].pause();
  cambiar11.style.color = '#C1C1C1';
  cambiar12.style.color = '#C1C1C1';
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



