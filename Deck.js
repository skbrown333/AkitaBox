/**
 * Deck.js Class is used for creating a standard deck of 52 cards. Inherits
 * from Super Class Pile.js.
 */
class Deck extends Pile{
   /**
    * This is the constuctor for the Hand Object Class. Deck.js uses the Pile.js Super Class constuctor.
    */
	constructor() {
		super();
	}
	/**
	 * This method loads the deck with one card of every suit.
	 */
	loadDeck() {
		// Define different suits and ranks for cards. 
		var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
		var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

		// Populate deck with one card of each suit. 
		for (var i = 0; i < suits.length; i++) {
			for(var j = 0; j < ranks.length; j++) {
				var card = new Card(suits[i], ranks[j]);
				this.cards.push(card);
			}
		}
	}
}