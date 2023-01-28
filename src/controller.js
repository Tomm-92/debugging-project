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
        const newPlayerElement = document.createElement('img');
        newPlayerElement.setAttribute("src", "./css/images/test.png");
        newPlayerElement.id = 'player1';
        const playerElement = document.querySelector('#game');
        playerElement.appendChild(newPlayerElement);

      
      
        /*const backgrounds = ['./css/images/test.png', './css/images/test.png'];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector('#game').style.backgroundImage = `url('${
          backgrounds[backgroundIndex % backgrounds.length]
        }')`;
        backgroundIndex += 1;
      }, 1000);
    } */
  }
}
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller1;
  } else {
    window.Controller1 = Controller1;
  }
})();
