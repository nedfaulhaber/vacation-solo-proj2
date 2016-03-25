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

    else if (color === "violet") {
      colorPoints = 4;
    }

    else if (color === "blue") {
      colorPoints = 5;
    }

    else if (color === "indigo") {
      colorPoints = 6;
    }

    else if (color === "green") {
      colorPoints = 7;
    }

    else if (color === "") {
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

    else if (chocolate === "") {
    }

    else {
      alert("Not a valid response! Please choose from the possible answers provided");
    }


  });

  $("#inputBath").change(function() {
    var bath = ($("#inputBath").val()).toLowerCase();

    if (bath === "bubble tea") {
      bathPoints = 1;
    }

    else if (bath === "hot cocoa") {
      bathPoints = 2;
    }

    else if (bath === "champagne") {
      bathPoints = 3;
    }

    else if (bath === "") {
    }

    else {
      alert("Not a valid response! Please choose from the possible answers provided");
    }

  });

  $("#inputHogwarts").change(function() {
    var hogwarts = ($("#inputHogwarts").val()).toLowerCase();

    if (hogwarts === "gryffindor") {
      hogwartsPoints = 1;
    }

    else if (hogwarts === "hufflepuff") {
      hogwartsPoints = 2;
    }

    else if (hogwarts === "ravenclaw") {
      hogwartsPoints = 3;
    }

    else if (hogwarts === "slytherin") {
      hogwartsPoints = 4;
    }

    else if (hogwarts === "") {
    }

    else {
      alert("Not a valid response! Please choose from the possible answers provided");
    }

  });

  $("#inputGhost").change(function() {
    var ghost = ($("#inputGhost").val()).toLowerCase();

    if (ghost === "cleopatra") {
      ghostPoints = 1;
    }

    else if (ghost === "david bowie") {
      ghostPoints = 2;
    }

    else if (ghost === "david foster wallace") {
      ghostPoints = 3;
    }

    else if (ghost === "countess bathory") {
      ghostPoints = 4;
    }

    else if (ghost === "") {
    }

    else {
      alert("Not a valid response! Please choose from the possible answers provided");
    }

  });

  $("#submit").click(function(event) {
    destinationPoints = colorPoints+chocolatePoints+bathPoints+hogwartsPoints+ghostPoints;

    if (destinationPoints >= 5 && destinationPoints <= 8) {
      $("#destination1, #Mariana-Trench, #destination2, #Rio, #destination3, #ParisTX, #destination4, #Altair, #destination5, #Yakutsk").hide();
      $("#destination1, #Mariana-Trench").show();
    }

    else if (destinationPoints > 8 && destinationPoints <= 11) {
      $("#destination1, #Mariana-Trench, #destination2, #Rio, #destination3, #ParisTX, #destination4, #Altair, #destination5, #Yakutsk").hide();
      $("#destination2, #Rio").show();
    }

    else if (destinationPoints > 11 && destinationPoints <= 14) {
      $("#destination1, #Mariana-Trench, #destination2, #Rio, #destination3, #ParisTX, #destination4, #Altair, #destination5, #Yakutsk").hide();
      $("#destination3, #ParisTX").show();
    }

    else if (destinationPoints > 14 && destinationPoints <= 18) {
      $("#destination1, #Mariana-Trench, #destination2, #Rio, #destination3, #ParisTX, #destination4, #Altair, #destination5, #Yakutsk").hide();
      $("#destination4, #Altair").show();
    }

    else if (destinationPoints > 18 && destinationPoints <= 21) {
      $("#destination1, #Mariana-Trench, #destination2, #Rio, #destination3, #ParisTX, #destination4, #Altair, #destination5, #Yakutsk").hide();
      $("#destination5, #Yakutsk").show();
    }
    event.preventDefault();
  });
});
