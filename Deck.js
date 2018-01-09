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
		// Define different ranks for cards. 
		var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

		// Populate deck with one card of each suit. 
		for(var i = 0; i < ranks.length; i++) {
			this.cards.push(new Card("Hearts",   ranks[i]));
			this.cards.push(new Card("Diamonds", ranks[i]));
			this.cards.push(new Card("Clubs",    ranks[i]));
			this.cards.push(new Card("Spades",   ranks[i]));
		}
	}
}