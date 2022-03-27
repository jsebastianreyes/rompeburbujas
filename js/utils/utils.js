

export function createDOM(string){
  const parser = new DOMParser()
  const HTML = parser.parseFromString(string, "text/html")
  return HTML.body.firstChild
}

export function random(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}



