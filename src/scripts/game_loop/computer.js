const moveList = [];

const smartMove = (player, enemyBoard) => {
    
    // player.myTurn = false;

    let choice = {
        
        x : Math.floor(Math.random() * 10),
        y : Math.floor(Math.random() * 10),
        
    }
    
    if(enemyBoard.myBoard[choice.x][choice.y].status !== 0){
        return smartMove(player, enemyBoard);
    }

    if(moveList.length < 1) {
        if(player.attack(enemyBoard, choice.x, choice.y)){
            moveList.push(choice);
            renderAttack(choice);
            return;
        }
        else {
            renderAttack(choice, false);
            return;
        }
    }
    else{ //theres a valid hit
        //check direction until another hit
        //if there is push
        //if there isnt pop
        checkAround(player, enemyBoard, moveList[moveList.length - 1].x,
            moveList[moveList.length - 1].y);
        console.log(moveList);
        return;    
    }
}

const checkAround = (player, enemyBoard, x, y) => {
    
    let choice = {
        x : x, 
        y : y,
    }
    let up = x - 1;
    let down = x + 1;
    let left = y - 1;
    let right = y + 1;
    console.log(x);
    console.log(y);
    
    if(x > 0 && enemyBoard.myBoard[up][y].status === 0){
        choice.x = up;
        if(player.attack(enemyBoard, up, y) === true){
            moveList.push(choice);
            renderAttack(choice);
        }
        else {
            renderAttack(choice, false);
        }
        return;
    }
    else if(x < 9 && enemyBoard.myBoard[down][y].status === 0){
        choice.x = down;
        if(player.attack(enemyBoard, down, y) === true){
            moveList.push(choice);
            renderAttack(choice);
            return;
        }
        else {
            renderAttack(choice, false);
        }
        return;
    }
    else if(y > 0 && enemyBoard.myBoard[x][left].status === 0){
        choice.y = left;
        if(player.attack(enemyBoard, x, left) === true){
            moveList.push(choice);
            renderAttack(choice);
            return;
        }
        else {
            renderAttack(choice, false);
        }
        return;
    }
    else if(y < 9 && enemyBoard.myBoard[x][right].status === 0){
        choice.y = right;
        if(player.attack(enemyBoard, x, right) === true){
            moveList.push(choice);
            renderAttack(choice);
            return;
        }
        else {
            renderAttack(choice, false);
        }
        return;
    }
    else {
        moveList.pop();
        smartMove(player, enemyBoard);
    }
}

const renderAttack = (choice, isHit = true) => {

    const enemyBoardDisplay = document.querySelector('.board.one');
    let x = choice.x;
    let y = choice.y;

    if(choice.x === 0){
        x = "";
    }

    let coord = parseInt(x.toString() + y.toString());

    (isHit) ?
        enemyBoardDisplay.children[coord].classList.add("hit"):
        enemyBoardDisplay.children[coord].classList.add("miss");
}

export { smartMove }