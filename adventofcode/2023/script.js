const e = require("express");
const fsP = require("fs/promises");

/** DAY 2 */

const OPP_MOVES = {
  "A": "rock",
  "B": "paper",
  "C": "scissors"
}

const MY_MOVES = {
  "X": "rock",
  "Y": "paper",
  "Z": "scissors"
}

const LOSING_MOVES = new Map()
LOSING_MOVES.set("rock", "scissors")
LOSING_MOVES.set("paper", "rock")
LOSING_MOVES.set("scissors", "paper")

const WINNING_MOVES = new Map()
WINNING_MOVES.set("rock", "paper")
WINNING_MOVES.set("paper", "scissors")
WINNING_MOVES.set("scissors", "rock")


let scoreBoard = new Map()
scoreBoard.set("rock", 1)
scoreBoard.set("paper", 2)
scoreBoard.set("scissors", 3)

// async function calcRPSPoints(path) {
//   let content = await fsP.readFile(path, "utf8");
//   let plays = content.split("\n").map(play => play.split(" "));

//   let score = 0;

//   for (let play of plays) {

//     let currScore = 0;

//     let myMove = MY_MOVES[play[1]];
//     let oppMove = OPP_MOVES[play[0]];

//     if (!scoreBoard.get(myMove)) continue;

//     if (myMove === "rock" && oppMove === "scissors") {
//       currScore += 6;
//     } else if (myMove === "paper" && oppMove === "rock") {
//       currScore += 6;
//     } else if (myMove === "scissors" && oppMove === "paper") {
//       currScore += 6;
//     } else if (myMove === oppMove) {
//       currScore += 3;
//     }

//     currScore += scoreBoard.get(myMove);

//     score += currScore
//   }
//   console.log(score)
// }

// calcRPSPoints("rps.txt")

// pt 2

async function calcRPSPoints(path) {
  let content = await fsP.readFile(path, "utf8");
  let plays = content.split("\n").map(play => play.split(" "));

  let score = 0;

  for (let play of plays) {

    let currScore = 0;

    let myMove = play[1];
    let oppMove = OPP_MOVES[play[0]];

    if (!scoreBoard.get(myMove)) continue;

    if (myMove === "X") {
      losing = LOSING_MOVES.get(oppMove)
      currScore = scoreBoard.get(losing)

    } else if (myMove === "Y") {
      draw = oppMove
      currScore = scoreBoard.get(draw) + 3

    } else if (myMove === "Z") {
      winning = WINNING_MOVES.get(oppMove)
      currScore = scoreBoard.get(winning) + 6
    }

    // currScore += scoreBoard.get(myMove);

    score += currScore
  }
  console.log("hello", score)
}

calcRPSPoints("rps.txt")

/** DAY 3 */
