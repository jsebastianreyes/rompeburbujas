export function getScore(size) {
  let score = 0

  if (size >= 10 && size < 20) {
    score = 10
  }
  else if (size >= 20 && size < 30) {
    score = 9
  }
  else if (size >= 30 && size < 40) {
    score = 8
  }
  else if (size >= 40 && size < 50) {
    score = 7
  }
  else if (size >= 50 && size < 60) {
    score = 6
  }
  else if (size >= 60 && size < 70) {
    score = 5
  }
  else if (size >= 70 && size < 80) {
    score = 4
  }
  else if (size >= 80 && size < 90) {
    score = 3
  }

  else{
    score = 1
  }

  return score

}