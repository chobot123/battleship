
/**
 * Factory Function
 * @description      This function will hold a <ships> array and create a 2D array <myBoard>
 *                   The FF includes functions that places ships on <myBoard>, receives attacks on <myBoard>,
 *                   and updates the status of <ships> depending whether or not a ship that was placed on the board
 *                   was hit, sunk, and in such, whether ALL ships in <ships> have been sunk
 * 
 * @returns { ships, myBoard, placeShip, receiveAttack, isAllSunk } 
 */
const Gameboard = () => {

    //ships array to hold ships
    const ships = [];

    /**
     * Helper Function 
     * @description         CREATE a game board object
     * @returns tempArray   a 2D array where each 'cell' contains the ship name, ship part, and status (0 (DEFAULT) = nothing, 1 = miss, 2 = hit)
     */
    const createBoard = () => {
        let tempArray = Array(10);
        for(let i = 0; i < 10; i++){
            tempArray[i] = Array.from({length: 10}, (e) => {
                if(e === undefined){
                    return e = {
                        ship: 'none',
                        shipPart: 'none',
                        status: 0 
                    }
                }
            })
        }
        return tempArray;
    }
    
    //game board object
    const myBoard = createBoard();

    /**
     * Helper Function for placeShip 
     * @description                   Check whether a ship already exists on the places on the game board myShip was to be potentially placed
     * 
     * @param {Object} myShip         The ship object that is to be potentially placed on the game board
     * @param {Number} x              First parameter of the 2D array, myBoard, and the x-coordinate
     * @param {Number} y              Second parameter of the 2D array, myBoard, and the y-coordinate
     * @param {String} align          The alignment of the ship ('vertical' or 'horizontal')
     * @returns {Boolean}             Return TRUE if there is no coinciding ship on the board coordinates, else return FALSE
     */
    const noOverlap = (myShip, x, y, align) => {
        if(align === 'horizontal'){
            for(let i = y; i < y + myShip.length && i <= 9; i++){
                if(myBoard[x][i].ship !== "none"){
                    return false;
                }
            }
        }
        else if(align === 'vertical'){
            for(let i = x; i < x + myShip.length && i <= 9; i++){
                if(myBoard[i][y].ship !== "none"){
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Method
     * @description                   Check whether the ship to be placed has a valid coordinate, that in its full length
     *                                fits onto the board, and whether it overlaps with any other ships on the board
     * 
     * @param {Object} myShip         The ship object that is to be potentially placed on the game board
     * @param {Number} x              First parameter of the 2D array, myBoard, and the x-coordinate
     * @param {Number} y              Second parameter of the 2D array, myBoard, and the y-coordinate
     * @param {String} align          The alignment of the ship ('vertical' or 'horizontal')
     * @returns {Boolean}             Return TRUE, if ship has been placed on a valid position, and return FALSE, if spot is invalid
     */
    const placeShip = (myShip, x, y, align) => {
        x = parseInt(x);
        y = parseInt(y);
        if((x >= 0 && x <= 9) && (y >= 0 && y <= 9) && noOverlap(myShip, x, y, align)){
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

    /**
     * Method
     * @description                   Check the coordinate on the board to see if there is a ship part.
     *                                 If there is no ship, board status changes to 1 (missed), else 2 (hit),
     *                                 and records whether the hit sunk the ship or not and updates accordingly
     * 
     * @param {Number} x              First parameter of the 2D array, myBoard, and the x-coordinate
     * @param {Number} y              Second parameter of the 2D array, myBoard, and the y-coordinate
     * @returns {status}              An object that records the ship name, hit status, sunk status, and all the
     *                                coordinates on the board that coincide with said sunk ship, if any
     */
    const receiveAttack = (x, y) => {

        let status = {
            ship: "",
            hit: false,
            sunk: false,
            sunkCoord: [],
        }
        if(myBoard[x][y].ship !== 'none'){
            status.ship = myBoard[x][y].ship;
            for(let i = 0; i < ships.length; i++){
                if(ships[i].name === myBoard[x][y].ship){
                    ships[i].hit(myBoard[x][y].shipPart);
                    if(ships[i].isSunk()){
                        status.sunk = true;
                        status.sunkCoord = [...getShip(ships[i].name)];
                    }
                }
            }
            myBoard[x][y].status = 2;
            status.hit = true;
            return status;
        }
        else {
            myBoard[x][y].status = 1;
            return status;
        }
    }

    /**
     * Helper Function
     * @description                 Get the coordinates of a ship
     * @param {String} shipName     The name of the ship
     * @returns {coords}            An array of coordinates (0 -> 99)
     */
    const getShip = (shipName) => {
        let coords = [];
        myBoard.flat().forEach((cell, index) => {
            if(cell.ship === shipName){
                coords.push(index);
            }
        })
        return coords;
    }

    /**
     * Method
     * @description         Check whether all the ships on the board are sunk
     * @returns {Boolean}   Returns a boolean based on the above
     */
    const isAllSunk = () => {
        return (ships.every(e => e.isSunk() === true));
    }

    return {
        ships,
        myBoard,
        placeShip,
        receiveAttack,
        isAllSunk
    }
}

export default Gameboard;