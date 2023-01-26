/* eslint-disable babel/no-unused-expressions */
(function exportcharacterConfig () {

const battle = [
  'your souls are ours!',
  'bring them to their knees!',
  'chaos and anarchy!',
  'we stand together!',
  'dont run, youre already dead!',
  'feed them to the maggots!',
  'obliterate them from history!',
  'death to the enemy!',
  'swift and savage!',
  'let the crows feast tonight!',
  'death and glory!',
  'glory to us all!',
  'prepare to die!',
];

const names = [
  'adder',
  'agama',
  'blind snake',
  'blue racer',
  'boa constrictor',
  'bushmaster',
  'diamond python',
  'habu',
  'whip snake',
  'viper',
  'sidewinder',
  'ringhals',
  'python',
  'pit viper',
  'massasauga',
];

class CharacterConfig {
  constructor() {
    this.name = names[Math.floor(Math.random() * names.length)];
    this.health = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    this.maxHealth = 10;
    this.dialogue = battle[Math.floor(Math.random() * battle.length)];
  }
};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CharacterConfig;
} else {
  window.CharacterConfig = CharacterConfig;
}
})();



//module.exports = characterConfig;
