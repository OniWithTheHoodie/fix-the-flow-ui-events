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
console.log(rocket);

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

/////////////////////////
//Button veranderd kleur
////////////////////////

// variable voor de button
let button = document.querySelector('button');

// function met de naam random als de button gedrukt wordt moet het de berekening terug sturen
// math.Random berekent tussen 0 en 1 * number + 1
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

// Als de button is geklikt is veranderd de achtergrond met verschillende kleuren
button.onclick = () => {
  let randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = randomColor;
};

/////////////////////////
//rotate object
////////////////////////

//voegt een event listener voor de devicemotion op de scherm als er motie is wordt de handlemotion functie uitgevoerd
window.addEventListener('devicemotion', handleMotion);

//ik fetch hier mee uit de DOM ID square en class box
function handleMotion(event) {
  let square = document.getElementById('square');
  const boxes = document.querySelectorAll('.box');
  console.log(square);
  console.log(boxes);

  // hiermee pak ik de rotatie uit X,Y en Z as van RotationRate property van de devicemotion. als er geen rotatie beschikbaar is gaat het default terug naar 0
  let xRotation = event.rotationRate.alpha || 0;
  let yRotation = event.rotationRate.beta || 0;
  let zRotation = event.rotationRate.gamma || 0;
  console.log(xRotation);
  console.log(yRotation);
  console.log(zRotation);

  // dit update de transform van de square element en voegt een rotatie toe van de X,Y en Z as gebaseerd op de rotatieRate
  square.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) rotateZ(${zRotation}deg)`;
  console.log(square);

  // dit is een forEach loop interactie legt met de element box
  // in de loop berekent het de roation variable met index + 1 vermijden we dat het begint van 0graden
  // en vervolgens doe ik 45 * 1
  // box.style.transform veranderd de positie van de box
  boxes.forEach((box, index) => {
    let rotation = 45 * (index + 1);
    box.style.transform = `rotate(${rotation}deg)`;
    console.log(boxes);
  });
}


/////////////////////////
//Card flip
////////////////////////
//ik heb een variable gemaakt deze target de kaart
let card = document.querySelector('.card');
console.log(card);

// ik zeg hier met EventListener dat als de muis op de kaart staat en eraf gehaald wordt er wat moet gebeuren
card.addEventListener('mouseout', flip);
console.log(card);

//met deze functie voeren we de flip uit met de muis functie mouseout
function flip(){
  card.classList.toggle('card-flip');
  console.log('het spint')
}

/////////////////////////
//Bewegend vierkant
////////////////////////
let MovingObject = document.querySelector('.moving-div');
console.log(MovingObject);

MovingObject.addEventListener('mouseenter', gravityLeft);
console.log(MovingObject);

function gravityLeft() {
  MovingObject.classList.toggle('floating');
  console.log('het beweegt van links naar rechts');
}



