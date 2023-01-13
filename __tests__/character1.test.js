const Character = require('../src/character1.js');


describe('Character', () => {
  let config;
  let character;

  beforeEach(() => {
    config = {
      name: 'Hero',
      health: 5,
      maxHealth: 10,
      dialogue: 'Huzzah!',
    };

    character = new Character(config);
  });

  describe('Character constuctor with stats', () => {
    it('can be instantiated', () => {
      expect(character).toBeInstanceOf(Object);
    });
    it('has a name', () => {
      expect(character.name).toBe(config.name);
    });
    it('has health', () => {
      expect(character.health).toBe(5);
    });
    it('has maximum health', () => {
      expect(character.maxHealth).toBe(10);
    });
    it('has dialogue', () => {
      expect(character.dialogue).toBe('Huzzah!');
    });
  });

  describe('take damage', () => {
    it('can take damage', () => {
      character._takeDamage(3);
      expect(character.health).toEqual(2);
    });
    it('cannot be damaged less than 0', () => {
      character._takeDamage(7);
      expect(character.health).toEqual(0);
    });
  });

  describe('heal', () => {
    it('can recover health points', () => {
      character._heal(3);
      expect(character.health).toEqual(8);
    });
    it('cannot recover past maximum health', () => {
      character._heal(10);
      expect(character.health).toEqual(10);
    });

    describe('isAlive', () => {
      it('returns alive if health above 0', () => {
        expect(character.isAlive).toBe(true);
      });
      it('it returns not alive if health is 0', () => {
        character.health = 0;
        expect(character.isAlive).toBe(false);
      });
    });

    describe('has dialogue', () => {
      it('can speak', () => {
        expect(character.speak()).toBe('Huzzah!');
      });
    });
  });
});
