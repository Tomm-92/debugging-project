(function exportController1() {
  class Controller1 {
    constructor(character1, character2) {
      this.character1 = character1;
      this.character2 = character2;
      this.headsUpDisplay();
      document.querySelector('#start-button').addEventListener('click', () => {
      console.log('click');
      this.renderPlayer1();
      })
    }

    renderPlayer1() {  
        const backgrounds = ['./css/images/char75.png', './css/images/char3.png'];
        let backgroundIndex = 0;
        window.setInterval(() => {
          document.querySelector('#player1').style.content = `url('${
            backgrounds[backgroundIndex % backgrounds.length]
          }')`;
          backgroundIndex += 1;
        }, 750);
        this.renderMessage('Lets get this game going!')
      }

    

    renderPlayer2() {
        const newPlayerElement2 = document.createElement('img');
        newPlayerElement2.setAttribute("src", "./css/images/bulbasaur.png");
        newPlayerElement2.id = 'player2';
        const playerElement2 = document.querySelector('#game');
        playerElement2.appendChild(newPlayerElement2);

    } 

    renderMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.id = 'message';
      messageElement.innerHTML = message;

      const viewport = document.querySelector('#game-narrative');
      viewport.appendChild(messageElement);
      setTimeout(() => {
        viewport.removeChild(messageElement);
      }, 10000);
    }

   headsUpDisplay () {
      const hudMessage1 = `Name: ${this.character1.name} <br><br><br>Health: ${this.character1.health} HP <br><br><br> Weapon: Warhammer`
      const hudMessage2 = `Name: ${this.character2.name} <br><br><br> Health: ${this.character2.health} HP <br><br><br> Weapon: Volcanic Spear`
      document.getElementById('p1-hud').innerHTML = hudMessage1;
      document.getElementById('p2-hud').innerHTML = hudMessage2;
    } 



  }

   



  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller1;
  } else {
    window.Controller1 = Controller1;
  }
})();
