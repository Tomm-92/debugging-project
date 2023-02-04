
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

    _describeAttack(target) {
      return `${this.name} lets out a ${this.dialogue}, and hits ${target.name} with ${this.equippedWeapon.name} for ${this.equippedWeapon.damage} damage!`;
    }

    equip(weapon) {
      this.equippedWeapon = weapon;
    }

    attack(target) {
      target._takeDamage(this.equippedWeapon.damage);
      return this._describeAttack(target);
    }

    heal(self) {
      self._heal(2);
      return this._describeAttack(target);
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Player; 
  } else {
    window.Player = Player;
  }
})();
