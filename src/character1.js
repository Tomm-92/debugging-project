class Character {
  constructor(config) {
    this.name = config.name;
    this.health = config.health;
    this.maxHealth = config.maxHealth;
    this.dialogue = config.dialogue;
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

module.exports = Character;
