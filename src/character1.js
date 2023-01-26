(function exportCharacter() {
  class Character {
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
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Character;
  } else {
    window.Character = Character;
  }
})();
