
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
     * @description                 Using the most recent hit in moveList, the next move is chosen
     *                              by iterating through a direction array that dictates the 
     *                              cardinal direction the computer will choose next, until it misses.
     *                              Then the moveList is reversed to get the initial position and move up
     *                              in the direction array and repeats the step above. If a ship is sunk
     *                              from the latest attack, @renderAttack deletes the cooresponding coordinates
     *                              from moveList and does the above with, if any, remaining moves.
     * 
     * @param {Object} computer     The computer player object
     * @param {Object} playerBoard  The player board object
     * @param {Number} x            x-coordinate of the board to attack (most recent move in moveList)
     * @param {Number} y            y-coordinate of the board to attack (most recent move in moveList)
     */
    const checkAround = (computer, playerBoard, x, y) => {
    
        //count (in computerAttack) iterate through direction
        const direction = ["up", "down", "left", "right"];
        const up = x - 1;
        const down = x + 1;
        const left = y - 1;
        const right = y + 1;
        let choice = {
            x : x, 
            y : y,
        }
        
        if(direction[count] === "up"){
            if(x > 0 && playerBoard.myBoard[up][y].status === 0){ //'empty' cell
                choice.x = up;
                let attackStatus = computer.attack(playerBoard, up, y);
                if(attackStatus.hit){
                    moveList.push(choice); //add to list 
                    renderAttack(choice, attackStatus);
                }
                else { //hit was miss
                    moveList.reverse(); //reverses only in "up"/"left" to correspond with "down"/"right"
                    renderAttack(choice, attackStatus);
                    count++;
                }
            }
            else { //cell is out of bounds or cell has already been hit
                moveList.reverse();
                count++;
                smartMove(computer, playerBoard);
            }
            
        }
    
        else if(direction[count] === "down"){
            if(x < 9 && playerBoard.myBoard[down][y].status === 0 ){ 
                choice.x = down;
                let attackStatus = computer.attack(playerBoard, down, y);
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
                smartMove(computer, playerBoard);
            }
        }
    
        else if(direction[count] === "left"){
            if(y > 0 && playerBoard.myBoard[x][left].status === 0){
                choice.y = left;
                let attackStatus = computer.attack(playerBoard, x, left);
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
                smartMove(computer, playerBoard);
            }
        }

        else if(direction[count] === "right"){
            if(y < 9 && playerBoard.myBoard[x][right].status === 0 ){
                choice.y = right;
                let attackStatus = computer.attack(playerBoard, x, right);
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
                smartMove(computer, playerBoard);
            }
        }
        else {
                while(moveList.length !== 0){
                    moveList.pop();
                }
                count = 0;
                smartMove(computer, playerBoard);
        }
        return;
    }
    
    /**
     * Helper Function
     * @description    Renders whether the attack was a hit or miss and adds to the classList
     *                 accordinly. If the ship is sunk, gets all coordinates and adds to the 
     *                 classList accordingly. Removes all ship coordinates in moveList
     *                 that corespond with the sunken ship.
     * 
     * @param {Object} choice coordinates
     * @param {Object} status Status of ship to check if sunk
     */
    const renderAttack = (choice, status) => {
    
        const playerBoardDisplay = document.querySelector('.board.one');
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
                    playerBoardDisplay.childNodes.item(sunkenCoord)
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
    
                playerBoardDisplay.children[currentCoord].classList.add("hit");
    
            }
        }
        else {
            
            playerBoardDisplay.children[currentCoord].classList.add("miss");
    
        }
    }
    
    return {
        smartMove
    }
})();

/**
 * @description                     Randomly places ships on the board  
 * 
 * @param {Object} computerBoard    The computer board
 */
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