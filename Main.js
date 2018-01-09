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


	/*var c1 = new Card("Diamonds", "Jack");
	var c2 = new Card("Diamonds", "Queen");
	var c3 = new Card("Diamonds",   "King");
	var c4 = new Card("Diamonds", "9");
	var c5 = new Card("Diamonds", "10");

	

	hand.addCard(c1);
	hand.addCard(c2);
	hand.addCard(c3);
	hand.addCard(c4);
	hand.addCard(c5);
	console.log(hand);*/



	// Clear screen.
	//document.getElementById("hand").innerHTML = "";
	// Display Hand on screen.

	for(var i = 0; i < hand.cards.length; i++) {
		document.getElementById(i+1).src = "public/images/" + hand.cards[i].suit + "_" + hand.cards[i].rank + ".jpg";
	}

	document.getElementById("high").innerHTML = "High Card: " + hand.high.rank;
	document.getElementById("score").innerHTML = "Score   : " + hand.score().string;
	
}

