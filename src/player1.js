// eslint-disable-next-line babel/no-unused-expressions

(function exportPlayer() {
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
