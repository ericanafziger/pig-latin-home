var pigLatin = function(input) {

  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  var words = input.split(" ");
  newWord = "";

  words.forEach(function(word){
    var letterWord = word.toLowerCase();
    var splitWord = letterWord.split("");
    alert(splitWord);

  splitWord.forEach(function(letter){
    if (vowels.indexOf(letter) > -1){
      var joinedWord = splitWord.join("");
      var newWord = joinedWord + "ay";
      alert(newWord);
    } else if (consonants.indexOf(letter) > -1) {
      var firstLetter = splitWord.shift();
      splitWord.push(firstLetter);
      newWord = splitWord.join("")+ "ay";
      alert(newWord);
    }
  })

    // if (splitWord[0]=== "a" || splitWord[0]=== "e" || splitWord[0]=== "i" || splitWord[0]=== "o" || splitWord[0]=== "u") {
    //   var joinedWord = splitWord.join("");
    //   var newWord = joinedWord + "ay";
    //   alert(newWord);
    // } else {
    //   var firstLetter = splitWord.shift();
    //   splitWord.push(firstLetter);
    //   newWord = splitWord.join("")+ "ay";
    //   alert(newWord);
    // }

});//end of words function
}; //end of pigLatin function




//user interface logic below
$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
    var input = $("#input input").val();
    var result = pigLatin(input);
    $("#output").text(result);
  });

});
