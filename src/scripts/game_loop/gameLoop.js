
/*
    1)Create Players
    2)Create Board
    3)Populate both boards
    4)Attack method
*/

import Gameboard from "../factory/gameBoard";
import { Player } from "../factory/player";
import { renderShips } from "./playerPlaceShip";
import { Ship } from "../factory/ship"

const gameLoop = () => {
    const carrier = Ship('carrier', 5);
    const battleship = Ship('battleship', 4);
    const cruiser = Ship('cruiser', 3);
    const submarine = Ship('submarine', 3);
    const destroyer = Ship('destroyer', 2);
    
    const playerOne = Player();
    const pOneBoard = Gameboard();
    
    pOneBoard.ships.push(carrier);
    pOneBoard.ships.push(battleship);
    pOneBoard.ships.push(cruiser);
    pOneBoard.ships.push(submarine);
    pOneBoard.ships.push(destroyer);
    
    
    const playerTwo = Player();
    const pTwoBoard = Gameboard();
    
    //place the ships and display it
    
    renderShips(pOneBoard); 
}

export {gameLoop}