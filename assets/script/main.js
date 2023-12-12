// let interaction = document.querySelector('a:nth-of-type(12)')

// interaction.addEventListener('click', jumpHandler)
// interaction.addEventListener('animationend', jumpHandler)

// function jumpHandler() {
//   interaction.classList.toggle('jump')
// }

// wheel
//ik heb hier de wheel getarget om wat mee te doen met de query selector
var wheel = document.querySelector('.wheel');

//doormiddel van interactie wil ik dat de wiel wat doen in dit geval doormiddel van het klikken 
wheel.addEventListener('click', spin);

//als de wheel geklikt is wil dat het de aangemaakte css styling gebruikt
function spin(){
  wheel.classList.toggle('show-spin');
}