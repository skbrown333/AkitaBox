/**
 * Card.js Class used for creating a Card Object. Includes
 * a compareTo() method for comparing two Card Objects. 
 */
class Card {
	/**
	 * The constructor for building a Card Object.
	 * @param {string} - The suit of the card.
	 * @param {string} - The rank of the card.
	 */
	constructor(suit, rank) {
		this.suit = suit || "No suit has been entered.";
		this.rank = rank || "No rank has been entered.";
		this.ranks = {
			"2"     : 2,			// Map integer values to card ranks
			"3"     : 3,
			"4"     : 4,
			"5"     : 5,
			"6"     : 6,
			"7"     : 7,
			"8"     : 8,
			"9"     : 9,
			"10"    : 10,
			"Jack"  : 11,
			"Queen" : 12,
			"King"  : 13,
			"Ace"   : 14
		};
	}
	/**
	 * This method compares the Card Object to another and determines
	 * which is a higher card.
	 * @param {object} - The Card Object to compare against.
	 * @return {number} Returns 1 for greater, -1 for less, and 0 for equal.
	 */
	compareTo(card) {

		if(this.ranks[this.rank] > this.ranks[card.rank]) {
			return 1;
		}
		else if(this.ranks[this.rank] < this.ranks[card.rank]) {
			return -1;
		}
		else {
			return 0;
		}

	}
}