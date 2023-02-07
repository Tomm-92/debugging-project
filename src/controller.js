(function exportController1() {
  class Controller1 {
    constructor() {
      this.headsUpDisplay();
      document.querySelector("#start-button").addEventListener("click", () => {
        console.log("click");
        this.renderPlayer1();
      });
      document.querySelector("#attack1").addEventListener("click", () => {
        console.log("click");
        this.player1attack();
      });
      document.querySelector("#attack2").addEventListener("click", () => {
        console.log("click");
        this.player2attack();
      });
      document.querySelector("#heal1").addEventListener("click", () => {
        console.log("click");
        this.player1heal();
      });
      document.querySelector("#heal2").addEventListener("click", () => {
        console.log("click");
        this.player2heal();
      });
      document.querySelector("#equip1").addEventListener("click", () => {
        console.log("click");
        this.player1equip();
      });
      //this.renderMessage('Click start to commence the battle')
    }

    player1attack() {
      player1.attack(player2);
      this.headsUpDisplay();
      this.renderMessage(`The ${player1.name} attacks the ${player2.name} <BR> and reduces it's health to ${player2.health}`)
    }

    player2attack() {
      player2.attack(player1);
      this.headsUpDisplay();
    }

    player1heal() {
      player1.heal(player1);
      this.headsUpDisplay();
    }

    player2heal() {
      player2.heal(player2);
      this.headsUpDisplay();
    }

    player1equip() {
      player1.equip(weapon1)
    }

    renderPlayer1() {
      const backgrounds = ["./css/images/char75.png", "./css/images/char3.png"];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector("#player1").style.content = `url('${
          backgrounds[backgroundIndex % backgrounds.length]
        }')`;
        backgroundIndex += 1;
      }, 750);
      this.renderMessage("Lets get this game going!");
      document.querySelector('#game-narrative').firstChild.remove();
    }

    renderPlayer2() {
      const newPlayerElement2 = document.createElement("img");
      newPlayerElement2.setAttribute("src", "./css/images/bulbasaur.png");
      newPlayerElement2.id = "player2";
      const playerElement2 = document.querySelector("#game");
      playerElement2.appendChild(newPlayerElement2);
    }

    renderMessage(message) {
      const messageElement = document.createElement("div");
      messageElement.id = "message";
      messageElement.innerHTML = message;

      const viewport = document.querySelector("#game-narrative");
      viewport.appendChild(messageElement);
      setTimeout(() => {
        viewport.removeChild(messageElement);
      }, 5000);
    }

    headsUpDisplay() {
      const hudMessage1 = `Name: ${character1.name} <br><br><br>Health: ${player1.health} HP <br><br><br> Weapon: choose your weapon! <BR><BR><BR> Inventory: <BR><BR> ${weapon1.weapon}, <BR><BR> ${weapon2.weapon}, <BR><BR> ${weapon3.weapon} `;
      const hudMessage2 = `Name: ${character2.name} <br><br><br> Health: ${player2.health} HP <br><br><br> Weapon: choose your weapon! <BR><BR><BR> Inventory: <BR><BR> ${weapon4.weapon}, <BR><BR> ${weapon5.weapon}, <BR><BR> ${weapon6.weapon} `;
      document.getElementById("p1-hud").innerHTML = hudMessage1;
      document.getElementById("p2-hud").innerHTML = hudMessage2;
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller1;
  } else {
    window.Controller1 = Controller1;
  }
})();
