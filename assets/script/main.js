/////////////////////////
//wheel spin 360deg
////////////////////////
//ik heb hier de wheel getarget om wat mee te doen met de query selector
var wheel = document.querySelector('.wheel');

//doormiddel van interactie wil ik dat de wiel wat doen in dit geval doormiddel van het klikken en krijgt de functie naam change
wheel.addEventListener('click', spin);

//als de wheel geklikt is wil dat het de aangemaakte css styling gebruikt wordt deze functie zorgt ervoor dat het in effect gaat
function spin(){
  wheel.classList.toggle('show-spin');
}

//_________________________________________________________________________________

/////////////////////////
//square color change
////////////////////////

//square variable aangemaakt voor mijn square div dat wordt getarget door JS
var square = document.querySelector('.square');

//met de eventlistener zorgen we dat er wat moet gebeuren als er word gedubbel klikt en krijgt de functie naam colorChange
square.addEventListener('dblclick', colorCHange);

// met deze function roep ik de styling op in css met classlist en voert het de interactie uit op dubbel klik
function colorCHange(){
  square.classList.toggle('show--sqaure--color');
}

//_________________________________________________________________________________