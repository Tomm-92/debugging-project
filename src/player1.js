const Character = require('./character1');

class Player extends Character {
  constructor(config) {
    super(config);
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
}


module.exports = Player;
