const moveList = [];
let direction = ["up", "down", "left", "right"];
let count = 0;

const smartMove = (player, enemyBoard) => {
    
    // player.myTurn = false;

    let choice = {
        
        x : Math.floor(Math.random() * 10),
        y : Math.floor(Math.random() * 10),
        
    }

    if(choice.x % 2 === 0){
        while(choice.y % 2 !== 0){
            choice.y = Math.floor(Math.random() * 10);
        }
    }
    else {
        while(choice.y % 2 === 0){
            choice.y = Math.floor(Math.random() * 10);
        }
    }

    if(enemyBoard.myBoard[choice.x][choice.y].status !== 0){
        return smartMove(player, enemyBoard);
    }

    if(moveList.length === 0) {
        let attackStatus = player.attack(enemyBoard, choice.x, choice.y);
        if(attackStatus.hit){
            moveList.push(choice);
            renderAttack(choice, attackStatus);
            return;
        }
        else {
            renderAttack(choice, attackStatus);
            return;
        }
    }
    else{ 
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
        let attackStatus = player.attack(enemyBoard, up, y);
        if(attackStatus.hit){
            moveList.push(choice); //add to list 
            renderAttack(choice, attackStatus);
        }
        else {
            renderAttack(choice, attackStatus);
            count++;
        }
        return;
    }

    else if(direction[count] === "down" && x < 9 && enemyBoard.myBoard[down][y].status === 0 ){
        choice.x = down;
        let attackStatus = player.attack(enemyBoard, down, y);
        if(attackStatus.hit){
            moveList.push(choice);
            renderAttack(choice, attackStatus);
            return;
        }
        else {

            renderAttack(choice, attackStatus);
            count++;
        }
        return;
    }

    else if(direction[count] === "left" && y > 0 && enemyBoard.myBoard[x][left].status === 0){
        choice.y = left;
        let attackStatus = player.attack(enemyBoard, x, left);
        if(attackStatus.hit){
            moveList.push(choice);
            renderAttack(choice, attackStatus);
            return;
        }
        else {

            renderAttack(choice, attackStatus);
            count++;
        }
        return;
    }
    else if(direction[count] === "right" && y < 9 && enemyBoard.myBoard[x][right].status === 0 ){
        choice.y = right;
        let attackStatus = player.attack(enemyBoard, x, right);
        if(attackStatus.hit){
            moveList.push(choice);
            renderAttack(choice, attackStatus);
            return;
        }
        else {

            renderAttack(choice, attackStatus);
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

const renderAttack = (choice, status) => {

    const enemyBoardDisplay = document.querySelector('.board.one');
    let x = choice.x;
    let y = choice.y;

    if(choice.x === 0){
        x = "";
    }

    let currentCoord = parseInt(x.toString() + y.toString());

    if(status.hit){
        if(status.sunk){
            for(let i = 0; i < status.sunkCoord.length; i++){
                let sunkenCoord = status.sunkCoord[i];
                enemyBoardDisplay.childNodes.item(sunkenCoord)
                    .classList.add("sunk");
                
                //resetMoveList
                if(sunkenCoord < 10){
                    moveList.splice(moveList.indexOf({
                        x: '0',
                        y: sunkenCoord.toString(),
                    }), 1)
                }else {
                    let convertSunkenCoord = sunkenCoord.toString();
                    moveList.splice(moveList.indexOf({
                        x: convertSunkenCoord.charAt(0),
                        y: convertSunkenCoord.charAt(1),
                    }))
                }
            }
            count = 0;
        }
        else {

            enemyBoardDisplay.children[currentCoord].classList.add("hit");

        }
    }
    else {
        
        enemyBoardDisplay.children[currentCoord].classList.add("miss");

    }
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