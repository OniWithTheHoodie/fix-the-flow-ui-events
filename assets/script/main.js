/////////////////////////
//wheel spin 360deg
////////////////////////
//ik heb hier de wheel getarget om wat mee te doen met de query selector
let wheel = document.querySelector('.wheel');
console.log(wheel);

//doormiddel van interactie wil ik dat de wiel wat doen in dit geval doormiddel van het klikken en krijgt de functie naam change
wheel.addEventListener('click', spin);
console.log(wheel);

//als de wheel geklikt is wil dat het de aangemaakte css styling gebruikt wordt deze functie zorgt ervoor dat het in effect gaat
function spin(){
  wheel.classList.toggle('show-spin');
  console.log('het spint')
}

//_________________________________________________________________________________

/////////////////////////
//square color change
////////////////////////

//square variable aangemaakt voor mijn square div dat wordt getarget door JS
let square = document.querySelector('.square');
console.log(square);

//met de eventlistener zorgen we dat er wat moet gebeuren als er word gedubbel klikt en krijgt de functie naam colorChange
square.addEventListener('dblclick', colorCHange);
console.log(square);

// met deze function roep ik de styling op in css met classlist en voert het de interactie uit op dubbel klik
function colorCHange(){
  square.classList.toggle('show--sqaure--color');
  console.log('de kleur is veranderd');
}

//_________________________________________________________________________________
/////////////////////////
//Daimond size and color change
////////////////////////
// variable aangemaakt genaamd daimond die ik target met querySelector deze variable krijgt de waarde van deze class
let daimond = document.querySelector('.daimond-size');
console.log(daimond);

// de daimond variable zeg ik nu dat het wat moet doen als de als de muis er over gaat 
daimond.addEventListener('mouseover', hoverd);
console.log(daimond);

// met deze functie zeg ik dat mij daimond groter, kleiner en van kleur veranderd als er wordt gehorverd
function hoverd() {
  daimond.classList.toggle('daimond-size-change');
  console.log('de diamant is groter');
}

/////////////////////////
//Shuriken vanish
////////////////////////
// ik target hier de class shuriken in mijn css door het in een variable in javascript te zetten
let shuriken = document.querySelector('.shuriken');
console.log('shuriken');

// met eventlistener zeg ik dat als ik mijn muis weg hover van het object wat moet gebeuren
shuriken.addEventListener('mouseout', hoverOut);
console.log('shuriken');

// als mijn muis is weg gehoverd verdwijned de shuriken
function hoverOut() {
  // shuriken.classList.add('vanish');
  shuriken.classList.remove('shuriken');
  console.log('de shuriken is verdwenen');
}


/////////////////////////
//Ball bounce with Keydown
////////////////////////

// variable gemaakt dat de styling van de ball heeft 
let ballBOunce = document.querySelector('.ball');
console.log(ballBOunce);

// maken met de eventlistener een functie met keypress 
// met event.key zeg ik als het gelijk is en de zelfde type gelijk is aan A
// moet de bal stuiteren als met de styling van ball-bounce die ik heb getarget met de classlist met toggle zet ik het erop en eraf als a wordt gedrukt
document.addEventListener('keypress', function(event) {
  if (event.key === 'a') {
    ballBOunce.classList.toggle('ball-bounce');
    console.log('de bal stuitert');
  }
});

/////////////////////////
//Rocket lift off
////////////////////////

// ik target de image in mijn mijn hmtl en zet het in een variable
let rocket = document.querySelector('img');
console.log(rocket)

// met de Eventlistener zeg ik dat als de toetsenbord gedrukt de functie RocketPressed wat moet doen
document.addEventListener('keydown', RocketPressed);
console.log(document);

// Ik heb hier de functie ROcketpressed de key 38 gegeven dat is de pijl omhoog
// ik heb met de classlist de class fly opgeroepen als de pijl naar boven wordt gedrukt vliegt het raket omhoog
function RocketPressed(e) {
  if (e.keyCode === 38) {
    rocket.classList.toggle('fly');
    console.log('het raket is gelanceerd');
  }
}