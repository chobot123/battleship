/**
 * Factory Function
 * @description     Determine player turn and which board to attack
 * 
 * @returns { myTurn, attack} 
 */
const Player = () => {

    //status of player turn
    let myTurn = false;

    /**
     * 
     * @param {*} board The board object (see gameBoard)
     * @param {*} x                     the x-coordinate
     * @param {*} y                     the y-coordinate
     * @returns board.receiveAttack     Sends an attack to the chosen board
     */
    const attack = (board, x, y) => {
        myTurn = false;
        return board.receiveAttack(x, y);
    }

    return {
        myTurn,
        attack
    }
}

export default Player;