document.getElementById("loveForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission action

  var yourName = document.getElementById("yourName").value;
  var theirName = document.getElementById("theirName").value;

  if (!yourName || !theirName) {
      alert("Please enter valid names.");
      return;
  }

  var Calc = Math.random() * 100;
  var Result = Math.floor(Calc) + 1;

  var resultMessage;
  if (Result > 70) {
      resultMessage = "You and " + theirName + " have " + Result + "%. Hold on to this one, you may be onto something good here.";
  } else if (Result > 50 && Result <= 70) {
      resultMessage = "You and " + theirName + " have " + Result + "%. Slowly you might make it, with prayer and a bit hard work, it might stand a chance.";
  } else {
      resultMessage = "You and " + theirName + " have " + Result + "%. Oil meets water, spare yourself abeg! You are chasing shadows.";
  }

  document.getElementById("result").innerText = resultMessage;
  document.getElementById("resultPopup").style.display = "block"; // Display the popup
});

document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("resultPopup").style.display = "none"; // Hide the popup
  document.getElementById("yourName").value = ""; // Clear the input field for your name
  document.getElementById("theirName").value = ""; // Clear the input field for their name
});

