
//const Character = require("./character1");

/* class Character {
  constructor(characterConfig) {
    this.name = characterConfig.name;
    this.health = characterConfig.health;
    this.maxHealth = 10;
    this.dialogue = characterConfig.dialogue;
  }

  _takeDamage(damage) {
    this.health = this.health - damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  _heal(potion) {
    this.health = this.health + potion;
    if (this.health > this.maxHealth) {
      this.health = this.maxHealth;
    }
  }

  speak() {
    return this.dialogue;
  }

  get isAlive() {
    return this.health > 0;
  }
} */

(function exportPlayer() {
  if (typeof module !== 'undefined' && module.exports) {
    Character = require("./character1")
  } else {
    Character = window.Character
  }
  class Player extends Character {
    constructor(characterConfig) {
      super(characterConfig);
      this.equippedWeapon = null;
    }

    equip(weapon) {
      this.equippedWeapon = weapon;
    }

    attack(target) {
      target._takeDamage(5);
    }

    heal(self) {
      self._heal(2);
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Player; 
  } else {
    window.Player = Player;
  }
})();
