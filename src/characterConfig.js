/* eslint-disable babel/no-unused-expressions */
const battleCries = [
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

class characterConfig {
  constructor() {
    this.name = names[Math.floor(Math.random() * names.length)];
    this.health = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    this.maxHealth = 10;
    this.dialogue = battleCries[Math.floor(Math.random() * battleCries.length)];
  }
};


module.exports = characterConfig;
