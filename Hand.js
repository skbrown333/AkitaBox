/**
 * Hand.js Class used for creating a hand in Poker.
 * The Hand Object Class inherits from Pile.js and can 
 * build the hand, add cards, and score it.
 */
class Hand extends Pile{
   /**
    * This is the constuctor for the Hand Object Class. Hand.js uses the Pile.js Super Class constuctor.
    * @param {list} - Takes in an optional list of Card Objects.
    */
	constructor(cards) {
		super(cards);
	}
	/**
	 * This is used to score the Hand Object based on standard Poker rules. 
	 * @return {object} Returns an object conataining a scoring string and a list of the 
	 * cards used for scoring.
	 */
	score() {
		// The card list used for scoring
		var cards = [];
		// This if/else code block checks for rank starting from highest (Royal Flush) to lowest
		// (High Card).
		if(this.isRoyalFlush() != null) {
			cards = this.isRoyalFlush();
			return {"string": "Royal Flush.", "cards": cards};
		}
		else if(this.isStraightFlush() != null) {
			cards = this.isStraightFlush();
			return {"string": "Straight Flush.", "cards": cards};
		}
		else if(this.isFourOfKind() != null) {
			cards = this.isFourOfKind()
			return {"string": "Four of a kind. Four " + cards[0].rank + "'s", "cards": cards};
		}
		else if(this.isFullHouse() != null) {
			cards = this.isFullHouse();
			return {"string": "Full House. Three " + cards[0].rank + "'s and two " + cards[3].rank + "'s", "cards": cards};
		}
		else if(this.isFlush() != null) {
			cards = this.isFlush();
			return {"string": "Flush of " + cards[0].suit, "cards": cards};
		}
		else if(this.isStraight() != null) {
			cards = this.isStraight();
			return {"string": "Straight.", "cards": cards};
		}
		else if(this.isThreeOfKind() != null) {
			cards = this.isThreeOfKind();
			return {"string": "Three of a kind. Three " + cards[0].rank + "'s", "cards": cards};
		}
		else if(this.isTwoPair() != null) {
			cards = this.isTwoPair();
			return {"string": "Two Pairs. Pair of " + cards[0].rank + "'s and Pair of " + cards[2].rank + "'s", "cards": cards};
		}
		else if(this.isPair() != null) {
			cards = this.isPair()
			return {"string": "Pair of " + cards[0].rank + "'s", "cards": cards};
		}
		else {
			cards = this.high;
			return {"string": this.high.rank + " high", "cards": cards};
		}
	}
	/**
	 * This method checks whether the hand has a score of Royal Flush.
	 * It uses isStraight() and isFlush() to gather more information about
	 * the hand. 
	 * @return {list} Returns a list of scoring cards. 
	 */
	isRoyalFlush() {
		if(this.isStraight() != null && this.isFlush() != null) {
			var straight = this.isStraight();
			if(straight[0].rank == "10") {
				return straight;
			}
		}
		return null;
	}
    /**
	 * This method checks whether the hand has a score of Straight Flush.
	 * It uses isStraight() and isFlush() to gather more information about
	 * the hand. 
	 * @return {list} Returns a list of scoring cards. 
	 */
	isStraightFlush() {
		if(this.isStraight() != null && this.isFlush() != null) {
			return this.isStraight();
		}
		return null;
	}
	/**
	 * This method checks whether the hand has a score of Four of a Kind.
	 * It uses matchedCards() to gather more information about the hand. 
	 * @return {list} Returns a list of scoring cards. 
	 */
	isFourOfKind() {
		return this.matchCards(4);
	}
	/**
	 * This method checks whether the hand has a score of Full House.
	 * It uses splitCheck() to gather more information about the hand. 
	 * @return {list} Returns a list of scoring cards. 
	 */
	isFullHouse() {
		return this.splitCheck(3);
	}
	/**
	 * This method checks whether the hand has a score of Flush.
	 * It iterates over the Super Class property suits to look for 
	 * five cards of the same suit.  
	 * @return {list} Returns a list of scoring cards. 
	 */
	isFlush() {
		var keys = Object.keys(this.suits);
		for(var i = 0; i < keys.length; i++) {
			if(this.suits[keys[i]].length == 5) {
				return this.suits[keys[i]];
			}
		}
		return null;
	}
	/**
	 * This method checks whether the hand has a score of Straight.
	 * It iterates over the cards to evaluate consecutive ranks. 
	 * @return {list} Returns a list of scoring cards. 
	 */
	isStraight() {
		var copy = this.cards.slice();
		copy = copy.sort(this.compareCards);
		
		for(var i = 0; i < copy.length - 1; i++) {
			if(this.ranks[copy[i+1].rank] - this.ranks[copy[i].rank] != 1) {
				return null;
			}
		}
		return copy;
	}
	/**
	 * This method checks whether the hand has a score of Two Pair's.
	 * It uses splitCheck() to gather more information about the hand. 
	 * @return {list} Returns a list of scoring cards. 
	 */
	isTwoPair() {
		return this.splitCheck(2);
	}
	/**
	 * This method checks whether the hand has a score of Three of a Kind.
	 * It uses splitCheck() to gather more information about the hand. 
	 * @return {list} Returns a list of scoring cards. 
	 */
	isThreeOfKind() {
		return this.matchCards(3);
	}
	/**
	 * This method checks whether the hand has a score of One Pair.
	 * It uses splitCheck() to gather more information about the hand. 
	 * @return {list} Returns a list of scoring cards. 
	 */	
	isPair() {
		return this.matchCards(2);
	}
	/**
	 * This method splits the hand to look for multiple sets of matching
     * cards.
	 * @param {number} - Takes in the size of split.
	 * @return {list} Returns a list of scoring cards. 
	 */
	splitCheck(size) {
		var copy = this.cards.slice();
		var pairs;

		if(this.matchCards(size) == null){
			return null;
		}
		else {
			pairs = this.matchCards(size);
		}

		for(var i = 0; i < size; i++) {
			copy.splice(copy.indexOf(pairs[i]), 1);
		}

		if(this.matchCards(2, copy) != null) {
			return pairs.concat(this.matchCards(2, copy));;
		}

		return null;
	}
	/**
	 * This method looks for n matching cards.  
	 * @param {number} - The number of matching cards.
	 * @param {list} - The card list (optional).
	 * @return {list} Returns a list of scoring cards. 
	 */
	matchCards(number, cards) {
		var count = new Array(14);
		var cardsArray;
		// Handles the optional cards parameter
		if(cards != null) {
			cardsArray = cards;
		}
		else {
			cardsArray = this.cards;
		}
		// Counts the number of card per rank and stores them in a list
		for(var i = 0; i < cardsArray.length; i++) {
			var card = cardsArray[i];
			var index  = card.ranks[card.rank]; 
			
			if(count[index] == null) {
				count[index] = [card];
			}
			else {
				count[index].push(card);
			}
		}
		// Checks the rank count list for length equalling the number parameter
		for(var i = count.length - 1; i > 0; i--) {
			if(count[i] == null) {
				continue;
			}
			if(count[i].length == number) {
				return count[i];
			}
		}
		return null;
	}

}