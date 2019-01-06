POKER HAND EVALUATION
----------------------

1. Introduction/General Overview
2. Set up/Running the project


INTRODUCTION:
-------------

Maintainer: Steffan Brown

This project was based on coding excercise #2.

Exercise 2
	Write some code that will evaluate a poker hand and determine its rank.
	Example:
		Hand: Ah As 10c 7d 6s (Pair of Aces)
		Hand: Kh Kc 3s 3h 2d (2 Pair) Hand: Kh Qh 6h 2h 9h (Flush)

All the code is written in javascript and designed to be run within a web browser.

DOCUMENTATION: located in the "out" folder OR steffan.me

Classes:
	Pile.js:
		Pile.js is a super class for piles of cards (deck/hand).
	Hand.js extends Pile.js:
		Hand.js is an object class used for creating a hand in poker. This includes the
		methods for evaluating the hand as well.
	Deck.js extends Pile.js:
		Deck.js is an object class used for creating a standard deck of 52 cards.
	Card.js:
		Card.js is an object class used for creating a standard playing card.

SET UP:
-------

GITHUB: https://github.com/skbrown333/Poker-Hand-Evaluation 
URL: steffan.me

The code and other files for this project are located at the GITHUB link. In
order to run this project you will need to download all of the files and open the
PokerHand.html file within a web browser. Alternatively, the project is running on
the URL provided (steffan.me) for convenience.
