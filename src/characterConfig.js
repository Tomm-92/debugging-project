/* eslint-disable babel/no-unused-expressions */
(function exportcharacterConfig() {
  const battle = [
    'Your souls are ours!',
    'Bring them to their knees!',
    'Chaos and anarchy!',
    'We stand together!',
    'Dont run, youre already dead!',
    'Feed them to the maggots!',
    'Obliterate them from history!',
    'Death to the enemy!',
    'Swift and savage!',
    'Let the crows feast tonight!',
    'Death and glory!',
    'Glory to us all!',
    'Prepare to die!',
  ];

  const names = [
    'Adder',
    'Agama',
    'Blind snake',
    'Blue racer',
    'Boa constrictor',
    'Bushmaster',
    'Diamond python',
    'Habu',
    'Whip snake',
    'Viper',
    'Sidewinder',
    'Ringhals',
    'Python',
    'Pit viper',
    'Massasauga',
  ];

  class CharacterConfig {
    constructor() {
      this.name = names[Math.floor(Math.random() * names.length)];
      this.health = Math.floor(Math.random() * (10 - 5 + 1) + 5);
      this.maxHealth = 10;
      this.dialogue = battle[Math.floor(Math.random() * battle.length)];
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CharacterConfig;
  } else {
    window.CharacterConfig = CharacterConfig;
  }
})();


// module.exports = characterConfig;
