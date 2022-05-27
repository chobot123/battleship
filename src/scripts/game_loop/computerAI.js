
/**
* Module
* @description          The algorithm for the computer to attack
*                       1) The computer makes a "choice" 
*                       2) If the board tile is already hit, reroll
*                       3) If there are no previous valid hits, add the first success to moveList
*                       4) If there was a previous hit, check in the 4 cardinal directions for another hit 
*                       5) Rinse and repeat until all ships are sunk
 *          
 * @returns { smartMove }
 */
const computerAttack =(() => {

    const moveList = [];
    let count = 0; //see @checkAround

    /**
     * Method
     * @description                 The algorithm gets a coordinate (choice); since a ship has a minimum length of 2
     *                              the choice needs to only be 'every other' grid cell (ie [0,0], [0,2]...[1,1], [1,3]).
     *                              The algorithm uses this choice to target a grid cell, but if it has been already targeted
     *                              it recursively runs the function until a valid cell is found, and attacks the cell, adding
     *                              the choice to the moveList. If there are no previous moves found on the moveList, the algorithm 
     *                              then 'checkAround' for its next target.
     * 
     * @param {Object} player       The player 
     * @param {Object} enemyBoard   The board the player attacks
     */
    const smartMove = (player, enemyBoard) => {
        
        let choice = {
            
            x : Math.floor(Math.random() * 10),
            y : Math.floor(Math.random() * 10),
            
        }
        
        //x is even -> y must be even
        if(choice.x % 2 === 0){
            while(choice.y % 2 !== 0){
                choice.y = Math.floor(Math.random() * 10);
            }
        }
        //x is odd -> y must be odd
        else { 
            while(choice.y % 2 === 0){
                choice.y = Math.floor(Math.random() * 10);
            }
        }
        
        //if the cell has already been hit, run smartMove again
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
        else{ //if there are previous valid moves (there has been a successful hit before) 

            checkAround(player, enemyBoard, moveList[moveList.length - 1].x,
                moveList[moveList.length - 1].y);
            return;    
        }
    }
    
    /**
     * Helper Function
     * @description                    
     * @param {Object} player       The player 
     * @param {Object} enemyBoard   The board the player attacks
     * @param {Number} x            x-coordinate of the board to attack
     * @param {Number} y            y-coordinate of the board to attack
     * @returns 
     */
    const checkAround = (player, enemyBoard, x, y) => {
    
        const direction = ["up", "down", "left", "right"];
        const up = x - 1;
        const down = x + 1;
        const left = y - 1;
        const right = y + 1;
        let choice = {
            x : x, 
            y : y,
        }
        
        //go up
        if(direction[count] === "up"){
            if(x > 0 && enemyBoard.myBoard[up][y].status === 0){
                choice.x = up;
                let attackStatus = player.attack(enemyBoard, up, y);
                if(attackStatus.hit){
                    moveList.push(choice); //add to list 
                    renderAttack(choice, attackStatus);
                }
                else {
                    moveList.reverse();
                    renderAttack(choice, attackStatus);
                    count++;
                }
            }
            else {
                moveList.reverse();
                count++;
                smartMove(player, enemyBoard);
            }
            
        }
    
        else if(direction[count] === "down"){
            if(x < 9 && enemyBoard.myBoard[down][y].status === 0 ){
                choice.x = down;
                let attackStatus = player.attack(enemyBoard, down, y);
                if(attackStatus.hit){
                    moveList.push(choice);
                    renderAttack(choice, attackStatus);
                }
                else {
                    renderAttack(choice, attackStatus);
                    count++;
                }
            }
            else {
                count++;
                smartMove(player, enemyBoard);
            }
        }
    
        else if(direction[count] === "left"){
            if(y > 0 && enemyBoard.myBoard[x][left].status === 0){
                choice.y = left;
                let attackStatus = player.attack(enemyBoard, x, left);
                if(attackStatus.hit){
                    moveList.push(choice);
                    renderAttack(choice, attackStatus);
                }
                else {
                    moveList.reverse();
                    renderAttack(choice, attackStatus);
                    count++;
                }
            }
            else {
                moveList.reverse();
                count++;
                smartMove(player, enemyBoard);
            }
        }

        else if(direction[count] === "right"){
            if(y < 9 && enemyBoard.myBoard[x][right].status === 0 ){
                choice.y = right;
                let attackStatus = player.attack(enemyBoard, x, right);
                if(attackStatus.hit){
                    moveList.push(choice);
                    renderAttack(choice, attackStatus);
                }
                else {
                    renderAttack(choice, attackStatus);
                    count++;
                }
            }
            else {
                count = 0;
                smartMove(player, enemyBoard);
            }
        }
        else {
                while(moveList.length !== 0){
                    moveList.pop();
                }
                count = 0;
                smartMove(player, enemyBoard);
        }
        return;
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
                        }), 1)
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
    
    return {
        smartMove
    }
})();

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

export default computerAttack;
export { compPlaceShips }