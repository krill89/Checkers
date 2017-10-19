// import Pawn from './assets.js';
var hilight = false;
///// Konstruktory
var Game = {
  turn: "white",
  movePhase: false,
  selectedPawnY: 0,
  selectedPawnX: 0,
  deletemode: false
}

function field(xpos, ypos, group) {
this.xpos = xpos;
this.ypos = ypos;
this.group = group;
}
function blackPawn(xpos, ypos, promotion, index) {
this.index = index;
this.player = "black";
this.xpos = xpos;
this.ypos = ypos;
this.promotion = promotion;
}
function whitePawn(xpos, ypos, promotion, index) {
this.index = index;
this.player = "white";
this.xpos = xpos;
this.ypos = ypos;
this.promotion = promotion;
}





///import asset from "./assets.js";

document.addEventListener("DOMContentLoaded", function() {

var boardFields = document.querySelectorAll(".square");
var responsiveGrid = [];
var coordinates = [];
var temp = [];
var temp2 = [];
var blackPlayerPawns = [];
var whitePlayerPawns = [];
var counter = 0;
var deleteButton = document.querySelector(".remove-button");

function changeTurn() {
  if (Game.turn === "white") {
  Game.turn = "black";
  console.log('black')
  document.removeEventListener('click', clickWhitePawn);
} else if (Game.turn === "black") {
  console.log('white')
  Game.turn = "white";
  document.removeEventListener('click', clickBlackPawn);
}
}

function Move() {

  for (var i = 0; i < coordinates.length; i++) {
    for (var j = 0; j < coordinates[i].length; j++) {
      coordinates[i][j].addEventListener("click", function() {
      this.appendChild(document.querySelector(".focus"));


      });
    }
  }

}
function ClickDestination() {
//  for (var i = 0; i < coordinates.length; i++) {
//    for (var j = 0; j < coordinates[i].length; j++) {
//      coordinates[i][j].addEventListener("click", function() {
//        if (!this.hasChildNodes) {
//          Move();
//          changeTurn();
//        }
//        }
//      );
//    }
//  }

  Move();
  console.log(Game.turn);

  }
  function Attack() {
    deleteButton.addEventListener("click", function() {
      console.log(Game.deletemode);
      if (Game.deletemode == false) {
        Game.deletemode = true;
      } else if (Game.deletemode == true) {
        Game.deletemode = false;
      }
      if (Game.deletemode == true) {
        for (var i = 0; i < boardFields.length; i++) {
          var clicked = false;
          boardFields[i].addEventListener("click", function() {
            if(!clicked) {
              this.removeChild(this.childNodes[0]);
              clicked = true;
            }
          });
        }
      }
    });
  }

///// Staging board phase


function stageGame() {

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

//////////////    ----------------------------------
/////////////     |     Staging phase over          |
////////////      |     !!!!!!!!!!!!!!!!!           |
///////////       -----------------------------------

////////// Hilight functions white

stageGame();

var WhitePawnClickable = document.querySelectorAll(".white-pawn");
var BlackPawnClickable = document.querySelectorAll(".black-pawn");


console.log(WhitePawnClickable);

function clickWhitePawn(event) {

    for (var i = 0; i < WhitePawnClickable.length; i++) {
      if (WhitePawnClickable[i].classList.contains("focus") || BlackPawnClickable[i].classList.contains("focus")) {
        WhitePawnClickable[i].classList.remove("focus");
        BlackPawnClickable[i].classList.remove("focus");

      }
    }

      this.classList.toggle("focus");

      for (var i = 0; i < coordinates.length; i++) {
        for (var j = 0; j < coordinates[i].length; j++) {
        if (coordinates[i][j].hasChildNodes() && coordinates[i][j].firstChild.classList.contains("focus")) {
          Game.selectedPawnY = i
          Game.selectedPawnX = j
          console.log(Game.selectedPawnX+" "+Game.selectedPawnY);
        }
        }
      }
}

for (var i = 0; i < WhitePawnClickable.length; i++) {
  WhitePawnClickable[i].addEventListener("click", clickWhitePawn);
}


function clickBlackPawn(event) {
  for (var i = 0; i < BlackPawnClickable.length; i++) {
    if (BlackPawnClickable[i].classList.contains("focus") || WhitePawnClickable[i].classList.contains("focus")) {
      BlackPawnClickable[i].classList.remove("focus");
      WhitePawnClickable[i].classList.remove("focus");

    }
  }
    this.classList.toggle("focus");

    for (var i = 0; i < coordinates.length; i++) {
      for (var j = 0; j < coordinates[i].length; j++) {
      if (coordinates[i][j].hasChildNodes() && coordinates[i][j].firstChild.classList.contains("focus")) {
        Game.selectedPawnY = i
        Game.selectedPawnX = j
        console.log(Game.selectedPawnX+" "+Game.selectedPawnY);
      }
      }
    }
}

for (var i = 0; i < BlackPawnClickable.length; i++) {
  BlackPawnClickable[i].addEventListener("click", clickBlackPawn);
}

for (var i = 0; i < coordinates.length; i++) {
  for (var j = 0; j < coordinates[i].length; j++) {
    coordinates[i][j].dataset.y = i
    coordinates[i][j].dataset.x = j
  }
}


ClickDestination();
Attack();



});
