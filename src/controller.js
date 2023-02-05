(function exportController1() {
  class Controller1 {
    constructor(name) {
      this.name = name;
      this.headsUpDisplay();
      document.querySelector('#start-button').addEventListener('click', () => {
      console.log('click');
      this.renderPlayer1();
      })
    }

    /* renderPlayer1() {
      document.querySelector('#player1').style.backgroundImage = "url('./css/images/bulbasaur.png')";
    } */

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
      const hudMessage1 = 'Name: <br> Health: <br> Weapon:'
      document.getElementById('p1-hud').innerHTML = hudMessage1;
      document.getElementById('p2-hud').innerHTML = hudMessage1;
    }



  }

   



  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller1;
  } else {
    window.Controller1 = Controller1;
  }
})();
