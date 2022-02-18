
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
    const carrierTwo = Ship('carrier', 5);
    const battleshipTwo = Ship('battleship', 4);
    const cruiserTwo = Ship('cruiser', 3);
    const submarineTwo = Ship('submarine', 3);
    const destroyerTwo = Ship('destroyer', 2);
    
    const playerOne = Player();
    const pOneBoard = Gameboard();
    
    pOneBoard.ships.push(carrier);
    pOneBoard.ships.push(battleship);
    pOneBoard.ships.push(cruiser);
    pOneBoard.ships.push(submarine);
    pOneBoard.ships.push(destroyer);
    
    
    const computer = Player();
    const computerBoard = Gameboard();

    computerBoard.ships.push(carrierTwo);
    computerBoard.ships.push(battleshipTwo);
    computerBoard.ships.push(cruiserTwo);
    computerBoard.ships.push(submarineTwo);
    computerBoard.ships.push(destroyerTwo);
    
    //player one place ships
    renderShips(pOneBoard); 

    //computer to place ships
    let placeCount = 0;
    while(placeCount < 5){
        let alignment = Math.floor(Math.random() * 2);
        (alignment === 0) ? alignment = 'vertical' : alignment = 'horizontal';
        if(computerBoard.placeShip(computerBoard.ships[placeCount],
                                    Math.floor(Math.random() * 10),
                                    Math.floor(Math.random() * 10),
                                    alignment))
        {
            placeCount++;
        }
    }
    
    

}

export {gameLoop}