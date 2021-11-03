var count = document.getElementById('count');
var input = document.getElementById('input');


// Event listener for text input. 
input.addEventListener('keyup', function(e){
    wordCounter(e.target.value);
  });


// This function counts words when it encounters an empty space.
// It also counts sentences when it encounters a full stop. 
  function wordCounter() {
    var textInput = input.value;
    var wordCount = 0;
    var sentenceCount = 0;
    for (var i = 0; i <= textInput.length; i++) {
      if (textInput.charAt(i) == ' ') {
        wordCount = wordCount + 1;
        }
    
      else if(textInput.charAt(i) == '.' || textInput.charAt(i) == '!' || textInput.charAt(i) == '?'){
        sentenceCount = sentenceCount + 1;
        }

 
    }
    count.innerText = wordCount;
    sentences.innerText = sentenceCount;
  }