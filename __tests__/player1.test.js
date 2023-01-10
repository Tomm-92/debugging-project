const Player = require('../src/player1.js');

describe('Player constructor function', () => {
  const config = {
    name: 'Hero',
    health: 10,
    maxHealth: 10,
    dialogue: 'Huzzah!',
  };
  const player = new Player(config);

  it('can be instantiated', () => {
    expect(player).toBeInstanceOf(Object);
  });
  it('inherits from character', () => {
    expect(player.name).toEqual(config.name);
    expect(player.health).toEqual(config.health);
    expect(player.maxHealth).toEqual(config.maxHealth);
    expect(player.dialogue).toEqual(config.dialogue);
  });
  it('has a weapon slot', () => {
    expect(player).toHaveProperty('equippedWeapon');
  }); 
});
