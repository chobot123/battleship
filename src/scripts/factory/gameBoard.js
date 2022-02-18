

const Gameboard = () => {

    const ships = [];

    const createBoard = () => {
        let tempArray = Array(10);
        for(let i = 0; i < 10; i++){
            tempArray[i] = Array.from({length: 10}, (e) => {
                if(e === undefined){
                    return e = {
                        ship: 'none',
                        shipPart: 'none',
                        status: 0 //0 = nothing, 1 = miss, 2 = hit
                    }
                }
            })
        }
        return tempArray;
    }
    const myBoard = createBoard();

    const noOverlap = (myShip, x, y) => {
        for(let i = y; i < y + myShip.length && i <= 9; i++){
            if(myBoard[x][i].ship !== "none"){
                return false;
            }
        }
        for(let i = x; i < x + myShip.length && i <= 9; i++){
            if(myBoard[i][y].ship !== "none"){
                return false;
            }
        }
        return true;
    }

    const placeShip = (myShip, x, y, align = 'vertical') => {
        x = parseInt(x);
        y = parseInt(y);
        if((x >= 0 && x <= 9) && (y >= 0 && y <= 9) && noOverlap(myShip, x, y)){
            let pos = 0;
            if(align === 'horizontal'){
                if(y + myShip.length > 10){
                    return false;
                }
                for(let i = y; i < y + myShip.length; i++){
                    myBoard[x][i].ship = myShip.name;
                    myBoard[x][i].shipPart = myShip.shipParts[pos].position;
                    pos++;
                }
            }
            else if(align === 'vertical') {
                if(x + myShip.length > 10){

                    return false;
                }
                for(let i = x; i < x + myShip.length; i++){
                    myBoard[i][y].ship = myShip.name;
                    myBoard[i][y].shipPart = myShip.shipParts[pos].position;
                    pos++;
                }
            }
            return true;
        }
        return false;
    }

    
    const receiveAttack = (x, y) => {
        if(myBoard[x][y].ship !== 'none'){
            ships.find(e => e.name = myBoard[x][y].ship)
                .hit(myBoard[x][y].shipPart);

            myBoard[x][y].status = 2;
            return true;
        }
        else {
            myBoard[x][y].status = 1;
            return false;
        }
    }

    const isAllSunk = () => {
        
        return (ships.every(e => e.isSunk === true)) ? true : false;
        
        
    }

    return {
        ships,
        myBoard,
        placeShip,
        receiveAttack,
        isAllSunk
    }
}

module.exports = Gameboard;