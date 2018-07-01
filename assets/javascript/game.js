function getNumber() {
    var minNumber = 19; 
    var maxNumber = 101; 
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
    $('#myNumber').html(randomnumber); 
    return false; 
}

window.onload = getNumber; 
document.getElementById("yourNumber").innerHTML = randomnumber;

function myCrystals() {
    var x = Math.floor((Math.random() * 10) + 1);
    document.getElementById(".crystal-image").innerHTML = x;
}

var targetNumber = 50;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  $(".crystal-image").on("click", function() {

    counter += 10;

    alert("New score: " + counter);

    // Here we created some logic to "check" if the click counter matches the targetNumber.
    // Remember, this click event will be triggered with each click.
    // With each click the counter will increase by 10 and be re-evaluated against target.
    if (counter === targetNumber) {

      // If the numbers match we'll celebrate the user's win.
      alert("You win!");
    }

  });

