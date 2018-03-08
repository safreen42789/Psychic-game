 
 
 let guessLetter = document.getElementById("guess-letter");
 document.onkeyup = function(event) {
    guessLetter.textContent = event.key;
  };

  