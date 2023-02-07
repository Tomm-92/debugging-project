(function exportCharacter() {
  const weapons = [
    'Spiked Boko Bat',
    'Dragonbone Boko Bat',
    'Lizal Forked Boomerang',
    'Feathered Spear',
    'Fishing Harpoon',
    'Flamespear',
    'Forest Dwellers Spear',
    'Forked Lizal Spear',
    'Frostspear',
    'Thunderblade',
    'Travelers Sword',
    'Zora Sword',
    'Royal Guards Claymore',
    'Rusty Claymore',
    'Silver Longsword',
    'Soldiers Claymore',
    'Stone Smasher',
  ];


  class Weapon {
    constructor() {
      this.weapon = weapons[Math.floor(Math.random() * weapons.length)];
      this.damage = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Weapon;
  } else {
    window.Weapon = Weapon;
  }
})();
