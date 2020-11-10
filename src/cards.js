

export const card1 = 1;
export const card2 = 1;
export const card3 = 2;
export const card4 = 2;
export const card5 = 3;
export const card6 = 3;
export const card7 = 4;
export const card8 = 4;
const card9 = 5;
const card10 = 5;
const card11 = 6;
const card12 = 6;

export function Deck() {
  this.cards = [];
}

// const deck = new Deck()

Deck.prototype.addCard = function(card) {
  this.cards.push(card);
}

// deck.addCard(card1);
// deck.addCard(card2);
// console.log(deck.cards)



