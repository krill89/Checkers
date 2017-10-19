var Game = {
  turn: "white",
  whiteScore: 0,
  blackScore: 0;
  stageGame: function() {
    for (var i = 0; i < boardFields.length; i++) {
      temp.push(boardFields[i]);
      if (temp.length == 8) {
        coordinates.push(temp);
        temp = [];
      }
    }

    for (var i = 0; i < coordinates.length; i++) {
      responsiveGrid.push(temp2);
      for (var j = 0; j < coordinates[i].length; j++) {
      var responsiveField = new field(j, i, "neutral");
        temp2.push(responsiveField)
        if (temp2.length == 8) {
          temp2 = [];
        }
      }
    }


    ////Staging Loops - create pawns
    for (var i = 0; i < coordinates.length; i++) {
      if (i == 0 || i === 1 || i === 2) {
        for (var j = 0; j < 4; j++) {
          blackPlayerPawns.push(new blackPawn(j, i, false, counter));
          counter++
        }
      }
    }
    counter = 0;
    for (var i = 0; i < coordinates.length; i++) {
      if (i == 5|| i === 6 || i === 7) {
        for (var j = 0; j < 4; j++) {
          whitePlayerPawns.push(new whitePawn(j, i, false, counter));
          counter++
        }
      }
    }
    counter = 0;

    console.log(blackPlayerPawns);
    console.log(whitePlayerPawns);
    console.log(responsiveGrid);

    ///// Staging Pawns on boardFields
    ///// Staging white player

    for (var i = 5; i < coordinates.length; i++) {
      for (var j = 0; j < coordinates[i].length; j++) {
      var element = document.createElement("div");
      element.classList.add("white-pawn");
        if (coordinates[i][j].classList.contains("black")) {
        coordinates[i][j].appendChild(element);
        whitePlayerPawns[counter].xpos = i;
        whitePlayerPawns[counter].xpos = j;
        responsiveGrid[i][j].group = "white";

        }
      }
    }
    counter = 0;

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < coordinates[i].length; j++) {
      var element = document.createElement("div");
      element.classList.add("black-pawn");
        if (coordinates[i][j].classList.contains("black")) {
        coordinates[i][j].appendChild(element);
        blackPlayerPawns[counter].xpos = i;
        blackPlayerPawns[counter].xpos = j;
        responsiveGrid[i][j].group = "black";

        }
      }
    }
    counter = 0;


  }
}
var = Pawn {
  blackPawn: function (xpos, ypos, promotion, index) {
  this.index = index;
  this.player = "black";
  this.xpos = xpos;
  this.ypos = ypos;
  this.promotion = promotion;
  }

  whitePawn: function(xpos, ypos, promotion, index) {
  this.index = index;
  this.player = "white";
  this.xpos = xpos;
  this.ypos = ypos;
  this.promotion = promotion;
  }
  
}
