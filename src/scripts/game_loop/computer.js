

const moveList = [];

const smartMove = (player, board) => {
    player.myTurn = false;
    /**
     * If its a hit, push to the array
     * check in all 4 cardinal directions
     * if theres another hit push to array
     * do it from array
     * if there is no hits then pop from array
     * repeat
     */
    //if there is no valid hit, do random hit
    let choice = {
        
        x : Math.floor(Math.random() * 10),
        y : Math.floor(Math.random() * 10),
        hit : false
    }

    console.log(moveList.length);

    if(moveList.length < 1) {
        if(player.attack(board, choice.x, choice.y)){
            moveList.push(choice);
            choice.hit = true;
            return choice;
        }
        else {return choice;}
    }
    else{ //theres a valid hit
        //check direction until another hit
        //if there is push
        //if there isnt pop
        return checkAround(player, board, moveList[moveList.length - 1].x,
                    moveList[moveList.length - 1].y);
    }
}

const checkAround = (player, board, x, y) => {
    console.log(x);
    let up = x - 1;
    let down = x + 1;
    let left = y - 1;
    let right = y + 1;
    let choice = {
        x : x, 
        y : y,
        hit: false
    }
    
    if(board[up][y].status === 0){
        if(player.attack(board, up, y) === true){
            choice.x = up;
            choice.hit = true;
            moveList.push(choice);

            return choice;
        }
    }
    else if(board[down][y].status === 0){
        if(player.attack(board, down, y) === true){
            choice.x = down;
            choice.hit = true;
            moveList.push(choice);
            return choice;
        }
    }
    else if(board[x][left].status === 0){
        if(player.attack(board, x, left) === true){
            choice.y = left;
            choice.hit = true;
            moveList.push(choice);
            return choice;
        }
    }
    else if(board[down][right].status === 0){
        if(player.attack(board, x, down) === true){
            choice.y = down;
            choice.hit = true;
            moveList.push(choice);
            return choice;
        }
    }
    else {
        moveList.pop();
        return choice;
    }
}

export { smartMove }