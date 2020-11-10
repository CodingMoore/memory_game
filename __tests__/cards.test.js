import { TestScheduler } from 'jest';
import { Deck } from './../src/cards.js';
import { card1 } from './../src/cards.js';
import { card2 } from './../src/cards.js';
import { card3 } from './../src/cards.js';

describe('Deck', () => {

  test('Should see if two cards have matching numbers', () =>
  {
    const deck = new Deck();
    deck.cards.push(card1, card2, card3);
    expect(deck.cards[0]).toEqual(deck.cards[1]);
  });
});