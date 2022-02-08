const SHIP = (length) => {
    
    shipParts = Array.apply(null, Array(length))
        .map(function (x, i) { 
            x = {
                "isHit" : false,
                "position" : i
            }
        }
    ); 

    const hit = (pos) => {
        if(shipParts[pos].isHit === false) {
            return true;
        }
    }
    
    const isSunk = () => {
        if(shipParts.filter((e) => {e.isHit === true}).length === length - 1) {
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