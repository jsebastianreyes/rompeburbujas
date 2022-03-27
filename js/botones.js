import './modal.js'
import { scoreBubble, $coins, startGame, bubbles } from "./game.js"


//funcionalidad botones

function pausedAnimate(){
  const $bubbles = scoreBubble()
  $bubbles.forEach(bubble =>{
    bubble.style.animationPlayState  = 'paused'
  })
}
function continueAnimate(){
  const $bubbles = scoreBubble()
  $bubbles.forEach(bubble =>{
    bubble.style.animationPlayState  = 'running'
  })
}

function clearBubbles(){
  const $bubbles = scoreBubble()
  $bubbles.forEach(bubble => {
    bubble.remove()
  })
}

//Botón Cancelar

const $modalFinished = document.querySelector('#modal-finished')
const $btnFinished = document.querySelector('#btn-finished')
const $cancelar = document.querySelector('#cancel')
const $closeFinish = document.querySelector('#closeFinish')
$cancelar.addEventListener('click', () =>{
  location.reload(true)
})


$btnFinished.addEventListener('click', handlerBtnFinish)
$closeFinish.addEventListener('click', handlerContinueGame)

function handlerContinueGame(){
  $modalFinished.close()
  continueAnimate()
  startGame()
}

function handlerBtnFinish(){
  clearBubbles()
  $modalFinished.close()
  $coins.textContent = '0'
  startGame()
  // setInterval(printBubbles, 1000);
}


//Botón Reset
const $reset = document.querySelector('#reset')
$reset.addEventListener('click', handlerOpenModal)

function handlerOpenModal(){

  clearInterval(bubbles);
  pausedAnimate()
  // bubbles = null

  // clearInterval(bubbles);
  $modalFinished.showModal();
}

//boton pausa
const $modalPause = document.querySelector('#modal-paused')
const $pause = document.querySelector('#pause')
const $btnPause = document.querySelector('#resume')

$pause.addEventListener('click', handlerOpenModalPause)


function handlerOpenModalPause(){
  clearInterval(bubbles);
  pausedAnimate()
  $modalPause.showModal();
}

$btnPause.addEventListener('click', ()=>{
  $modalPause.close()
  continueAnimate()
  startGame()
})

// function handlerContinue(){
//   $modalPause.close()
//   continueAnimate()
//   // startGame()
// }

// const $reset = document.querySelector('#reset')
// $reset.addEventListener('click', () => {
  //   clearInterval(bubbles);
  //   bubbles = null;
  // })
  // const $pause = document.querySelector('#pause')
  // $pause.addEventListener('click', () => {
    //   bubbles = setInterval(printBubbles,1000);
// })