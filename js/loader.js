import { startGame } from './game.js'

const $loader = document.querySelector('.loader')
const $btnPlay = document.querySelector('#play')
const $app = document.querySelector('#app')
const $txtLoader = document.querySelector('#txt-loader')


$btnPlay.addEventListener('click', handlerStartGame)
function handlerStartGame(){
  $txtLoader.style.display = 'block'
  $btnPlay.hidden = true
  $txtLoader.textContent = 'Cargando.....'
  $txtLoader.classList.add('is-animated')
  setTimeout(()=>{
    $app.hidden = false
    $loader.hidden = true
    startGame()
  },1200)

}

