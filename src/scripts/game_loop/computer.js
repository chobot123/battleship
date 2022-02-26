const moveList = [];
let direction = ["up", "down", "left", "right"];
let count = 0;

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


    //go up
    if(direction[count] === "up" && x > 0 && enemyBoard.myBoard[up][y].status === 0 ){
        choice.x = up;
        //if it hits
        if(player.attack(enemyBoard, up, y)){
            moveList.push(choice); //add to list 
            renderAttack(choice);
        }
        else {
            while(moveList.length > 1){
                moveList.pop();
            }
            renderAttack(choice, false);
            count++;
        }
        return;
    }
    else if(direction[count] === "down" && x < 9 && enemyBoard.myBoard[down][y].status === 0 ){
        choice.x = down;
        if(player.attack(enemyBoard, down, y)){
            moveList.push(choice);
            renderAttack(choice);
            return;
        }
        else {
            while(moveList.length > 1){
                moveList.pop();
            }
            renderAttack(choice, false);
            count++;
        }
        return;
    }
    else if(direction[count] === "left" && y > 0 && enemyBoard.myBoard[x][left].status === 0){
        choice.y = left;
        if(player.attack(enemyBoard, x, left)){
            moveList.push(choice);
            renderAttack(choice);
            return;
        }
        else {
            while(moveList.length > 1){
                moveList.pop();
            }
            renderAttack(choice, false);
            count++;
        }
        return;
    }
    else if(direction[count] === "right" && y < 9 && enemyBoard.myBoard[x][right].status === 0 ){
        choice.y = right;
        if(player.attack(enemyBoard, x, right)){
            moveList.push(choice);
            renderAttack(choice);
            return;
        }
        else {
            while(moveList.length > 1){
                moveList.pop();
            }
            renderAttack(choice, false);
            count++;
        }
        return;
    }
    else {
        if(count === 4){
            while(moveList.length !== 0){
                moveList.pop();
            }
            count = 0;
        }
        else{
            while(moveList.length > 1){
                moveList.pop();
            }
            count++;
        }
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

const compPlaceShips = (computerBoard) => {

    let placeCount = 0;
    while(placeCount < 5){
        let alignment = Math.floor(Math.random() * 2);
        (alignment === 0) ? alignment = 'vertical' : alignment = 'horizontal';
        if(computerBoard.placeShip(computerBoard.ships[placeCount],
                                    Math.floor(Math.random() * 10),
                                    Math.floor(Math.random() * 10),
                                    alignment))
        {
            placeCount++;
        }
    }
}



export { smartMove, compPlaceShips }