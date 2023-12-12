/////////////////////////
//wheel spin 360deg
////////////////////////
//ik heb hier de wheel getarget om wat mee te doen met de query selector
var wheel = document.querySelector('.wheel');

//doormiddel van interactie wil ik dat de wiel wat doen in dit geval doormiddel van het klikken 
wheel.addEventListener('click', spin);

//als de wheel geklikt is wil dat het de aangemaakte css styling gebruikt wordt deze functie zorgt ervoor dat het in effect gaat
function spin(){
  wheel.classList.toggle('show-spin');
}

/////////////////////////
//square color change
////////////////////////

//color change on double click
var square = document.querySelector('.square');

square.addEventListener('dblclick', colorCHange);

function colorCHange(){
  square.classList.toggle('show--sqaure--color');
}
