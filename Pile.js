/**
 * Pile.js is used as the Super Class for piles of cards, i.e. card decks
 * and card hands. Includes methods for adding/removing cards as well 
 * as shuffling them.
 */
class Pile {
	/**
	 * The constuctor class for initializing a card Pile.
	 *
	 * @param {cards} - a Pile can be created with a list
	 * of cards provided (optional).
	 */
	constructor(cards) {
		this.cards    = cards || [];
		this.high     = null;
		this.suits    = {
			"Hearts"   : [],
			"Diamonds" : [],
			"Clubs"    : [],
			"Spades"   : []
		};
	}
	/**
	 *	This method adds a card to the card list of the Pile.
	 *
	 * @param {object} - Takes in a card object to add to the Pile.
	 */
	addCard(card) {
		// Add card hand and track suits
		
		this.cards.push(card);
		this.suits[card.suit].push(card);


		if(this.high == null) {
			this.high = card;
			return;
		}	
		else if(this.high.compareTo(card) < 0) {
			this.high = card;
		}
	}
	/**
	 *	This method removes a card from the top of the card list in the Pile.
	 *  It also needs to remove the card from the list of suits and preform a 
	 *  cautionary high card check.
     *
     * @return {card} Returns the card popped from the deck.
	 */
	popCard() {
		var card = this.cards[this.cards.length - 1];
        
        // Removes the card from the card list and the suit list
        this.cards.pop();
        this.suits[card.suit].pop()

        // Check if the high card was removed
		if(this.high == card) {
			this.high = this.cards[0];
			
			// Find new high card.
			for(var i = 0; i < this.cards.length; i++) {
				if(this.cards[i].compareTo(this.high) > 1) {
					this.high = this.cards[i];
				}
			}
		}	

		return card;
	}
	/**
	 * This method shuffles the Pile of cards using the Knuth shuffle
	 * algorithm. 
	 */
	 shuffleCards() {

  		for(var i = 0; i < this.cards.length; i++) {
   			var randomIndex = Math.floor(Math.random() * this.cards.length);
    		var temp = this.cards[i];
    		
    		this.cards[i] = this.cards[randomIndex];
    		this.cards[randomIndex] = temp;
  		}
	 }
}