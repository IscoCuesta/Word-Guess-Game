//changes the computer guess tu "-" and store it in NameDisplay and in an arrray
for(var i =0; i<CompGuess.length; i++){
    NameDisplay= NameDisplay + "-";
    AnameDisplay[i] = "-";
};
//displays the variable we create

GuessDisplay.textContent = NameDisplay;



//function starts when a key gets up
document.onkeyup = function(event) {
    //stores the user guess and initialices pass values
    UserGuess = event.key.toUpperCase();
    IsAlphaKey=false;
    IsValidKey=true;
    //checks for the key if its a letter
    for(var k = 0; k<Alpha.length;k++){
        if(UserGuess === Alpha[k]){
            IsAlphaKey=true;
        };
    };
    //cheks for the key if its not been used
    for(var k = 0; k<AUserGuesses.length;k++){
        if(UserGuess === AUserGuesses[k]){
            IsValidKey=false;
            break;
        };
    };

    console.log (RMPPhoto.SERGIORAMOS);
    //enters the if only when the key is valid
    if(IsValidKey && IsAlphaKey){
        //adds and displays the user guess to page
        AUserGuesses.push(UserGuess);
        UserGuessDisplay.textContent = AUserGuesses;
        UserGuessNumbDisplay.textContent = AUserGuesses.length;
        //compares the user guess to the computer guess.
        //if it matches adds one to answers and changes the value in
        //the array that displays whith the name
        for(var i =0; i<CompGuess.length; i++){
            if(UserGuess === CompGuess[i]){
                AnameDisplay[i] = UserGuess;
                Answers++;
            };
        };
        //emptys the dismplay variable and fills it with the new contnet in the array
        NameDisplay="";
        for(var j = 0; j<CompGuess.length;j++){
            NameDisplay = NameDisplay + AnameDisplay[j];
        };
        GuessDisplay.textContent = NameDisplay;
        WordsLeft.textContent = CompGuess.length - Answers;
        AnswersDisplay.textContent = Answers;
    };
    if(AUserGuesses.length === 5 && confirm("do you want a Hint?")){
        image.src = RMPPhoto[CompGuess];
    };

    if(Answers === CompGuess.length) {

        image.src = RMPPhoto[CompGuess];
        alert("You Win!");

        if (confirm("Want to play Again?")){
            Answers = 0;
            CompGuess = RMPlayer[Math.floor(Math.random() * RMPlayer.length)];
            NameDisplay = "";
            AnameDisplay = [];
            AUserGuesses = [];
            image.src = RMPPhoto.REPLAY;
            GuessDisplay.textContent = NameDisplay;
            WordsLeft.textContent = CompGuess.length - Answers;
            AnswersDisplay.textContent = Answers;
    
            for(var i =0; i<CompGuess.length; i++){
                NameDisplay= NameDisplay + "-";
                AnameDisplay[i] = "-";
            };
            GuessDisplay.textContent = NameDisplay;
        };
    };
};


