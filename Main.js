main();
function main() {
  // Initialize an empty Deck and and Empty Hand.
  var deck = new Deck();
  var hand = new Hand();
  // Load cards into the Deck.
  deck.loadDeck();
  deck.shuffleCards();

  // Draw 5 cards into Hand.
  hand.addCard(deck.popCard());
  hand.addCard(deck.popCard());
  hand.addCard(deck.popCard());
  hand.addCard(deck.popCard());
  hand.addCard(deck.popCard());

  // Display Hand on screen.
  for (var i = 0; i < hand.cards.length; i++) {
    document.getElementById(i + 1).src =
      "public/images/" + hand.cards[i].suit + "_" + hand.cards[i].rank + ".jpg";
  }

  document.getElementById("high").innerHTML = "High Card: " + hand.high.rank;
  document.getElementById("score").innerHTML =
    "Score   : " + hand.score().string;
}
