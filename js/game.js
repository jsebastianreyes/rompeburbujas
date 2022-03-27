import { getSpeed } from './speed.js'
import { createDOM, random } from './utils/utils.js'
import { getScore } from './score.js'
import { changebackground } from './background.js'
import { viewportSize } from './resize-body.js'
import './botones.js'



//velocidad

const settingSpeed = {
  10: 9,
  20: 8,
  30: 7,
  40: 6,
  50: 5,
  60: 4,
  70: 3,
  80: 2,
  90: 1.5,
  100: 1,
}


const $txtSpeed = document.querySelector('.header-right .speed')
const $app = document.querySelector('#app')
export const $coins = document.querySelector('#coins')



//Inicialiar setInterval
export let bubbles = null



//velocidad inicial
let $speed = 10

function createBubbles(speed){

  const $appInlineSize = $app.getBoundingClientRect().width
  const size = random(10,100)
  const position = random(140,$appInlineSize)


  return `<div class="bubble" style="inline-size:${size}px; animation-duration: ${settingSpeed[speed]}s; left: calc(${position}px - ${size}px)">
    <span></span>
  </div>`
}



export function scoreBubble(){
  const $bubbles = document.querySelectorAll('.bubble')

  $bubbles.forEach(bubble => {
    bubble.addEventListener('click', handlerBubbleClick)
  })

  return $bubbles
}

let scroreGlobal = 0

function handlerBubbleClick(event){

  this.classList.add('is-animated')
  const score =  getSizeBubble(event)
  changebackground(score, $app)
  if (this.hidden === false){
    let $scoreGlobal = scroreGlobal += score
    $coins.textContent = $scoreGlobal
  }
  this.hidden = true
  // this.classList.replace("bubble", "burstBubble");

}


function getSizeBubble(event){

  const bubbleSize = event.currentTarget.offsetHeight
  const score = getScore(bubbleSize)

  return score
}

export async function printBubbles() {
  $app.append(createDOM(createBubbles($speed)))
  $txtSpeed.textContent = `Velocidad x${$speed}`
  scoreBubble()
  $speed = await getSpeed()
}


export async  function startGame(){

  viewportSize($app)
  // // obtener velocidad
 return bubbles = setInterval(printBubbles, 1000);


}




