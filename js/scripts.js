$(document).ready(function() {
  var colorPoints = 0;
  var chocolatePoints = 0;
  var bathPoints = 0;
  var hogwartsPoints = 0;
  var ghostPoints = 0;

  $("#inputColor").change(function() {
    var color = ($("#inputColor").val()).toLowerCase();

    if (color === "red") {
      colorPoints = 1;
    }

    else if (color === "orange") {
      colorPoints = 2;
    }

    else if (color === "yellow") {
      colorPoints = 3;
    }

    else if (color === "green") {
      colorPoints = 4;
    }

    else if (color === "blue") {
      colorPoints = 5;
    }

    else if (color === "indigo") {
      colorPoints = 6;
    }

    else if (color === "violet") {
      colorPoints = 7;
    }

    else {
      alert("Not a valid response! Please choose from the possible answers provided");
    }
  });

    $("#inputChocolate").change(function() {
      var chocolate = ($("#inputChocolate").val()).toLowerCase();

      if (chocolate === "dark chocolate") {
        chocolatePoints = 1;
      }

      else if (chocolate === "milk chocolate") {
        chocolatePoints = 2;
      }

      else if (chocolate === "white chocolate") {
        chocolatePoints = 3;
      }

      else {
        alert("Not a valid response! Please choose from the possible answers provided");
      }
    });

});
