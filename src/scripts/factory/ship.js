/**
 * Factory Function
 * @description             The ship object to be placed on the game board
 *                          Include individual ship parts to coincide with grid coordinate
 *                          Each ship part has a status and position
 * 
 * @param {String} name     name of the ship
 * @param {Number} length   length of the ship
 * @returns {name, length, shipParts, hit, isSunk}
 */

const Ship = (name, length) => {
    
    //array that uses length of ship to create a collection of ship parts
    const shipParts = Array.apply(null, Array(length))
        .map(function (x, i) { 
            x = {                   //status
                "isHit" : false, 
                "position" : i
            }
            return x;
        }
    ); 

    /**
     * Method
     * @description         Changes status of ship part from 'not hit' to 'hit'
     * 
     * @param {Number} pos  position of ship part
     * @returns {Boolean}   Return TRUE, if hit
     */
    const hit = (pos) => {
        if(shipParts[pos].isHit === false) {
            shipParts[pos].isHit = true;
            return true;
        }
    }
    
    /**
     * Method
     * @description         Filters through each shipPart, and if all art hit, then ship is sunk
     * 
     * @returns {Boolean}   Return TRUE, if all parts are hit, else return FALSE
     */
    const isSunk = () => {
        if(shipParts.filter((e) => {return e.isHit === true}).length === length) {
            return true;
        }
        else {return false;}
    }

    return {
        name,
        length,
        shipParts,
        hit,
        isSunk,
    }
}

export default Ship;