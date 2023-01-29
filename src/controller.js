(function exportController1() {
  class Controller1 {
    constructor(name) {
      this.name = name;
      //this.renderPlayer1();
      // this.player1 = player1;
      // document.querySelector('#p1-attack').addEventListener('click', () => {
      // console.log('click');
      // this.renderPlayer1();
      //   })
    }

    /* renderPlayer1() {
      document.querySelector('#player1').style.backgroundImage = "url('./css/images/bulbasaur.png')";
    } */

    renderPlayer1() {  
      const newPlayerElement1 = document.querySelector('#player1');
      newPlayerElement1.setAttribute("src", "./css/images/charmander.png");
    } 

    /*renderPlayer2() {
        const newPlayerElement2 = document.createElement('img');
        newPlayerElement2.setAttribute("src", "./css/images/bulbasaur.png");
        newPlayerElement2.id = 'player2';
        const playerElement2 = document.querySelector('#game');
        playerElement2.appendChild(newPlayerElement2);

    } */

   
    /*animatePlayer1() {
      const backgrounds = ['./css/images/charmander.png', './css/images/bulbasaur.png'];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector('#player1').setAttribute = `url('${
          backgrounds[backgroundIndex % backgrounds.length]
        }')`;
        backgroundIndex += 1;
      }, 1000);
  } */

}


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller1;
  } else {
    window.Controller1 = Controller1;
  }
})();
