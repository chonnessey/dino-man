export default class DinoService {  
  static getDino() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1`;
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


// and we roll a dice to see which number pops up
// this in an array
// 0. There are <span id=this dino> in them there hills
// 1. Nature finds a way, just ask <span id=this dino>
// 2. Quiet, all of you! They're approaching the <span id=thisDino></span> paddock!
// 3. Don't you see the danger, John, inherent in what you're doing here? Genetic power is the most awesome force the planet's ever seen, but you wield it like a <span id=thisDino></span> that's found his dad's gun.
// 4. Oh my God. Do you know what this is? It's a <span id=thisDino></span> egg. They're breeding.
// 5. By moving the baby <span id="thisDino"> into our camp we may have changed the adult's perceived territory.
// 6. The <span id="thisDino"></span> exists on the planet for the first time in tens of millions of years and the only way you can express yourself is to kill it?
