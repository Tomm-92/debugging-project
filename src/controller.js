(function exportController1() {
  class Controller1 {
    constructor(player1) {
      this.player1 = player1;
      document.querySelector('#p1-attack').addEventListener('click', () => {
        this.renderPlayer1();
      });
    }

    renderPlayer1() {
      const background = ['./images/bulbasaur.png'];
      document.querySelector('#player1').style.backgroundImage = `url('${
        background}')`;
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller1;
  } else {
    window.Controller1 = Controller1;
  }
})();
