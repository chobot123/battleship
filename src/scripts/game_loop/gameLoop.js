
/*
    1)Create Players
    2)Create Board
    3)Populate both boards
    4)Attack method
*/

import Gameboard from "../factory/gameBoard";
import { Player } from "../factory/player";

const playerOne = Player();
const pOneBoard = Gameboard();

const playerTwo = Player();
const pTwoBoard = Gameboard();

//place the ships and display it


//first turn
playerOne.myTurn = true;

//while both teams ships are still alive
while(!pOneBoard.isAllSunk() && !pTwoBoard.isAllSunk()){

}




