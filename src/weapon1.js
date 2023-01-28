(function exportCharacter() {
  class Weapon {
    constructor() {
      this.name = 'Blade of death';
      this.damage = 3;
      //this.attackType = weaponConfig.attackType;
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Weapon;
  } else {
    window.Weapon = Weapon;
  }
})();
