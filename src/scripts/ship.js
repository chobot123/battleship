const Ship = (length) => {
    
    const shipParts = Array.apply(null, Array(length))
        .map(function (x, i) { 
            x = {
                "isHit" : false,
                "position" : i
            }
            return x;
        }
    ); 

    const hit = (pos) => {
        if(shipParts[pos].isHit === false) {
            shipParts[pos].isHit = true;
        }
    }
    
    const isSunk = () => {
        if(shipParts.filter((e) => {return e.isHit === true}).length === length) {
            return true;
        }
        else {return false;}
    }

    return {
        length,
        shipParts,
        hit,
        isSunk
    }
}

module.exports = Ship;