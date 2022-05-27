/**
 * @description           Creates the DOM boards for player and computer  
 * @returns { boards }    The DOM container holding both boards
 */
const makeBoards = () => {

    const boards = document.createElement("div");
    boards.className = "boards";
    
    const  playerOne = document.createElement("div");
    const playerTwo = document.createElement("div");
    playerOne.className = 'playerOne';
    playerTwo.className = 'playerTwo';
    playerTwo.style.display = `none`;

    const pOneBoard = document.createElement("div");
    const pTwoBoard = document.createElement("div");
    pOneBoard.className = `board one`;
    pTwoBoard.className = `board two`;

    const pOneBoardTitle = document.createElement("id");
    pOneBoardTitle.id = "board-title";
    pOneBoardTitle.textContent = "My Board";

    const pTwoBoardTitle = document.createElement("id");
    pTwoBoardTitle.id = "board-title";
    pTwoBoardTitle.textContent = "Computer Board";


    makeGrid(pOneBoard);
    makeGrid(pTwoBoard);
    playerOne.appendChild(pOneBoardTitle);
    playerTwo.appendChild(pTwoBoardTitle);
    playerOne.appendChild(pOneBoard);
    playerTwo.appendChild(pTwoBoard);
    boards.appendChild(playerOne);
    boards.appendChild(playerTwo);

    return boards;
}

/**
 * @description                     Creates cells for the board grid
 * 
 * @param {DOMElement} thisBoard    Board DOM element
 */
const makeGrid = (thisBoard) => {
    let j = 0;
    for(let i = 0; i < 100; i++) {
        if(i % 10 === 0 && i > 0){
            j++;
        }
        let cell = document.createElement("div");
        cell.className = 'cell';
        cell.innerHTML = `${j}${i % 10}`;
        cell.style.color = "rgba(0,0,0,0)";
        cell.style.userSelect = "none";
        thisBoard.appendChild(cell);
    }
}

/**
 * @description                 Changes opacity of the board 
 * @param {DOMElement} board    Board DOM element
 */
const toggleBoardOpacity = (board) => {
    board.classList.toggle("opacity");
}

export { makeBoards, toggleBoardOpacity }