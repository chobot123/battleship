const Player = () => {

    let myTurn = false;

    const attack = (board, x, y) => {
        board.receiveAttack(x, y);
        myTurn = false; //end turn
    }

    return {
        myTurn,
        attack
    }
}

export { Player }
// module.exports = Player;