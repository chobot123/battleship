const Player = () => {

    let myTurn = false;

    const attack = (board, x, y) => {
        myTurn = false; //end turn
        return board.receiveAttack(x, y);
    }

    return {
        myTurn,
        attack
    }
}

export { Player }
// module.exports = Player;