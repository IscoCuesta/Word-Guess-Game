var RMPlayer = ["SERGIORAMOS", 
"RAFAELVARANE", "DANIELCARVAJAL", "SERGIOREGUILON",
"TONIKROOS", "LUCAMODRIC", "MARCOSLLORENTE", "MARCOASENSIO", "KARIMBENZEMA"
];

var RMPPhoto = {SERGIORAMOS: "./images/ramos.png",
RAFAELVARANE: "./images/varane.png",
DANIELCARVAJAL: "./images/carvajal.png",
SERGIOREGUILON:  "./images/reguilon.png",
TONIKROOS:  "./images/kroos.png",
LUCAMODRIC: "./images/modric.png",
MARCOSLLORENTE: "./images/MARCOSLLORENTE.png",
MARCOASENSIO: "./images/asensio.png",
KARIMBENZEMA: "./images/benzema.png",
REPLAY: "./Images/playersillo.png"
};


var CompGuess = RMPlayer[Math.floor(Math.random() * RMPlayer.length)];

var NameDisplay = "";
var AnameDisplay = [];
var GuessDisplay = document.getElementById("PlayerName");
var UserGuessDisplay = document.getElementById("UserGuesses");
var UserGuessNumbDisplay = document.getElementById("UserGuessesNumb");
var WordsLeft = document.getElementById("WordsLeft");
var AnswersDisplay = document.getElementById("Answers");
var image = document.getElementById("photo");

var AUserGuesses = [];
var UserGuess
var Answers = 0;
var Alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var IsValidKey = true;
var IsAlphaKey = false;
