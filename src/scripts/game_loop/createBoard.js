import Gameboard from "../factory/gameBoard";
import { Ship } from "../factory/ship";

const createBoard = () => {
    
    const board = Gameboard();

    const carrier = Ship('carrier', 5);
    const battleship = Ship('battleship', 4);
    const cruiser = Ship('cruiser', 3);
    const submarine = Ship('submarine', 3);
    const destroyer = Ship('destroyer', 2);

    board.ships.push(carrier);
    board.ships.push(battleship);
    board.ships.push(cruiser);
    board.ships.push(submarine);
    board.ships.push(destroyer);
    
    return board;
}

export default createBoard;