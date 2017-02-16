//Game function
function tictac() {
  "use strict";
  var tableI = document.getElementById("table");
  var X = document.querySelector(".X");
  X.addEventListener("click", function() {
    player.gameSym = "X";

    AI.gameSym = "O";
    start();
  });
  var O = document.querySelector(".O");
  O.addEventListener("click", function() {
    player.gameSym = "O";

    AI.gameSym = "X";
    start();
  });
  var cells = document.querySelectorAll("td");
  var para = document.querySelectorAll(".first");
  var table = document.querySelector(".tablecon");
  var gameEnd = false;
  var s1 = document.getElementById("s1");
  var s2 = document.getElementById("s2");
  var s3 = document.getElementById("s3");
  var s4 = document.getElementById("s4");
  var s5 = document.getElementById("s5");
  var s6 = document.getElementById("s6");
  var s7 = document.getElementById("s7");
  var s8 = document.getElementById("s8");
  var s9 = document.getElementById("s9");
  var winner = document.querySelector(".winner");
  var td = document.querySelectorAll("td");
  //create player and computer objects
  var player = {
    gameSym: "",
    hasTurn: false,
    hasWon: false

  };

  var AI = {
    gameSym: "",
    hasTurn: false,
    hasWon: false

  };
//Contains game control functions
  function start() {

    for (var i = 0; i < para.length; i++) {
      para[i].style.display = "none";
    }
    table.style.display = "initial";
    //decide who goes first
    var determine = Math.round(Math.random());

    player.hasTurn = true;
//Function for changing the player/AI's turn
    function changeTurn() {
      if (player.hasTurn) {
        player.hasTurn = false;
        AI.hasTurn = true;
        console.log("AI's turn");
        gameControl();

      } else if (AI.hasTurn) {
        AI.hasTurn = false;
        player.hasTurn = true;
        console.log("Player's turn");
        gameControl();

      }
      detectWin();
    }

    //If it's the player's turn, player chooses what cell to click, it is not finished yet. 
    //If it's the AI's turn, AI chooses a random number between 1 and 8, then should pick a cell that's not occupied. 
    var sqcounter = 0;
    //Alternates between player and AI for turns while keeping track of open squares 
    function gameControl() {
      console.log(sqcounter)
      if (sqcounter !== 9) {
        if (player.hasTurn) {
          sqcounter += 1;
          s1.onclick = function() {
            if ($.trim($("#s1").html()) === '') {
              s1.innerHTML = player.gameSym;
              changeTurn();

            }
          };
          s2.onclick = function() {
            if ($.trim($("#s2").html()) === '') {
              s2.innerHTML = player.gameSym;
              changeTurn();

            }
          };
          s3.onclick = function() {
            if ($.trim($("#s3").html()) === '') {
              s3.innerHTML = player.gameSym;
              changeTurn();

            }
          };
          s4.onclick = function() {
            if ($.trim($("#s4").html()) === '') {
              s4.innerHTML = player.gameSym;
              changeTurn();

            }
          };
          s5.onclick = function() {
            if ($.trim($("#s5").html()) === '') {
              s5.innerHTML = player.gameSym;
              changeTurn();

            }
          };
          s6.onclick = function() {
            if ($.trim($("#s6").html()) === '') {
              s6.innerHTML = player.gameSym;
              changeTurn();

            }
          };
          s7.onclick = function() {
            if ($.trim($("#s7").html()) === '') {
              s7.innerHTML = player.gameSym;
              changeTurn();

            }
          };
          s8.onclick = function() {
            if ($.trim($("#s8").html()) === '') {
              s8.innerHTML = player.gameSym;
              changeTurn();

            }
          };
          s9.onclick = function() {
            if ($.trim($("#s9").html()) === '') {
              s9.innerHTML = player.gameSym;
              changeTurn();

            }
          };

        } else if (AI.hasTurn) {
          sqcounter += 1;
          var randomch = Math.floor((Math.random() * 8) + 0);
          console.log(randomch + "random ch");
          if (cells[randomch].innerHTML !== "X" && cells[randomch].innerHTML !== "O") {
            cells[randomch].innerHTML = AI.gameSym;
            changeTurn();

          } else {
            for (var i = 0; i < cells.length - 1; i++) {

              if (cells[i].innerHTML !== "X" && cells[i].innerHTML !== "O") {
                console.log(i + "inloop");
                cells[i].innerHTML = AI.gameSym;
                changeTurn();
                break;
              }
            }
          }
        }
      } else if(sqcounter === 9) { 
      winner.innerHTML = "There has been a draw!";
      gameEnd = true;
      endReset();
      }
    }
    gameControl();

    function detectWin() {
      for (i = 0; i < cells.length; i++) {
        if (cells[0].innerHTML === player.gameSym && cells[1].innerHTML === player.gameSym && cells[2].innerHTML === player.gameSym) {
          winner.innerHTML = "You are the winner! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[3].innerHTML === player.gameSym && cells[4].innerHTML === player.gameSym && cells[5].innerHTML === player.gameSym) {
          winner.innerHTML = "You are the winner! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[6].innerHTML === player.gameSym && cells[7].innerHTML === player.gameSym && cells[8].innerHTML === player.gameSym) {
          winner.innerHTML = "You are the winner! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[0].innerHTML === player.gameSym && cells[3].innerHTML === player.gameSym && cells[6].innerHTML === player.gameSym) {
          winner.innerHTML = "You are the winner! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[1].innerHTML === player.gameSym && cells[4].innerHTML === player.gameSym && cells[7].innerHTML === player.gameSym) {
          winner.innerHTML = "You are the winner! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[6].innerHTML === player.gameSym && cells[7].innerHTML === player.gameSym && cells[8].innerHTML === player.gameSym) {
          winner.innerHTML = "You are the winner! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[6].innerHTML === player.gameSym && cells[7].innerHTML === player.gameSym && cells[8].innerHTML === player.gameSym) {
          winner.innerHTML = "You are the winner! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        }else if (cells[2].innerHTML === player.gameSym && cells[4].innerHTML === player.gameSym && cells[6].innerHTML === player.gameSym) {
          winner.innerHTML = "You are the winner! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[2].innerHTML === player.gameSym && cells[5].innerHTML === player.gameSym && cells[8].innerHTML === player.gameSym) {
          winner.innerHTML = "You are the winner! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } 
        else if (cells[0].innerHTML === player.gameSym && cells[4].innerHTML === player.gameSym && cells[8].innerHTML === player.gameSym) {
          winner.innerHTML = "You are the winner! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        }else if (cells[0].innerHTML === AI.gameSym && cells[1].innerHTML === AI.gameSym && cells[2].innerHTML === AI.gameSym) {
          winner.innerHTML = "You have been defeated! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[3].innerHTML === AI.gameSym && cells[5].innerHTML === AI.gameSym && cells[4].innerHTML === AI.gameSym) {
          winner.innerHTML = "You have been defeated! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[3].innerHTML === AI.gameSym && cells[5].innerHTML === AI.gameSym && cells[4].innerHTML === AI.gameSym) {
          winner.innerHTML = "You have been defeated! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[0].innerHTML === AI.gameSym && cells[4].innerHTML === AI.gameSym && cells[8].innerHTML === AI.gameSym) {
          winner.innerHTML = "You have been defeated! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[1].innerHTML === AI.gameSym && cells[4].innerHTML === AI.gameSym && cells[7].innerHTML === AI.gameSym) {
          winner.innerHTML = "You are the winner! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[2].innerHTML === AI.gameSym && cells[5].innerHTML === AI.gameSym && cells[8].innerHTML === AI.gameSym) {
          winner.innerHTML = "You are the winner! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[0].innerHTML === AI.gameSym && cells[3].innerHTML === AI.gameSym && cells[6].innerHTML === AI.gameSym) {
          winner.innerHTML = "You are the winner! A new game will start in 5 seconds.";
          gameEnd = true;
          endReset();
          break;
        } else if (cells[2].innerHTML === AI.gameSym && cells[4].innerHTML === AI.gameSym && cells[8].innerHTML === AI.gameSym) {
          winner.innerHTML = "You have been defeated! A new game will start in 5 seconds.";
          endReset();
          break;
        } 
      }
    }

    function endReset() {

      setTimeout(function() {
        if (gameEnd === true) {
          for (var i = 0; i <= 8; i++) {
            td[i].innerHTML = "";
          }
          for (var i = 0; i < para.length; i++) {
            para[i].style.display = "initial";
          }
          sqcounter = 0;
          winner.innerHTML = "";
          tictac();

        }
      }, 5000);

    }
  }
}



tictac();