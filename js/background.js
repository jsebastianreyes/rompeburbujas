
let scoreG = 0
let arrayIMG = 0

export function changebackground(score, $app) {
  scoreG += score
  if (scoreG >= 50) {


    arrayIMG += 1
    scoreG = 0
    if (arrayIMG > 2) {
      arrayIMG = 0
    }

    $app.style.backgroundImage = `url(./img/bg-${arrayIMG}.jpg)`
  }

}