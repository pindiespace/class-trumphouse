/** 
 * trumphouse - an es5 OOP program
 */

// VIEW-LIKE
// makes a visual object that you can see onscreen with a DIV
var DOMPiece = function ( image ) {
    this.elem = document.createElement( 'div' );
    this.elem.appendChild( document.createElement( 'img') );
};

// GAME CHARACTERS
var Trump = function ( name, src ) {
	this.elem = new DOMPiece( src );
	this.fullName = name; 
};

var Candidate = function ( name, src ) {
	this.elem = new DOMPiece( src );
	this.fullName = name; 
};

var User = function ( level, src ) {
	this.elem = new DOMPiece( src );
	this.skill = level;
};


// THE MAIN GAME
var trumphouse = (function() {

	this.BEGINNER = 1;
	this.EXPERIENCED = 2;

	function init () {

		console.log( 'in init' );

		this.candidates = []; // array holding candidates

		// attach a Trump inside 'trumphouse'
		this.trump = new Trump( "Donald J. Trump", 'img/players/trump.png' );

		// attach the player
		this.player = new User(this.BEGINNER, 'PUT AN IMAGE HERE');

		// attach candidates to the candidates array
		this.candidates.push( new Candidate( "Hillary Clinton", 'img/bricks/clinton.png') );
		this.candidates.push( new Candidate( "Ted Cruz" ) );
		this.candidates.push( new Candidate( "Bernie Sanders" ) );
		this.candidates.push( new Candidate( "John Kasich" ) );
		this.candidates.push( new Candidate( "Jill Stein" ) );
		this.candidates.push( new Candidate( "Gary Johnson" ) );

	};

	/* 
	 * MODEL
	 * Store the game score
	 * Score timing (if the game is time)
	 * Store parameters for game size, object size defaults
	 */


	/* 
	 * VIEW
	 * The background to the game
	 * The White House image
	 * A "Trump" Logo
	 * Characters (candidates and Trump)
     * The user (a paddle)
	 */

	/*
	 * CONTROLLER
	 * Detect user pressing the arrow keys
	 * Detect collisions 
     */


	return {

		init: init

	};

}());
