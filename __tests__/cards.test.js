import { TestScheduler } from 'jest';
import { Deck } from './../src/cards.js';
import { Card } from './../src/cards.js';


describe('Deck', () => {

  test('Should see if two cards have matching numbers', () =>
  {
    const deck = new Deck();
    const card1 = new Card(1);
    const card2 = new Card(1);
    const card3 = new Card(2);
    deck.cards.push(card1, card2, card3);
    expect(deck.cards[0]).toEqual(deck.cards[2]);
  });

  test()
});