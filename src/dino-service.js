export default class DinoService {  
  static getDino() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraph=1&words=1`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

export function arrayParser() {
  let arrayDino = ["There are <span id='thisDino'></span> in them there hills", "Nature finds a way, just ask <span id='thisDino'></span>", "Quiet, all of you! We're approaching the <span id='thisDino'></span> paddock!", "Don't you see the danger, John, inherent in what you're doing here? Genetic power is the most awesome force the planet's ever seen, but you wield it like a <span id='thisDino'></span> that's found his dad's gun.", "Oh my God. Do you know what this is? It's a <span id='thisDino'></span> egg. They're breeding.", "By moving the baby <span id='thisDino'> into our camp we may have changed the adult's perceived territory.", "The <span id='thisDino'></span> exists on the planet for the first time in tens of millions of years and the only way you can express yourself is to kill it?"];
  let number = Math.floor(Math.random() * 7);
  return arrayDino[number]
}