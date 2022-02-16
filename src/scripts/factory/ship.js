const Ship = (name, length) => {
    
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
            return true;
        }
    }
    
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

// module.exports = Ship;

export { Ship }