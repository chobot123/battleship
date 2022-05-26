const makeBoard = () => {

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

//make a grid with class names as array col and rows
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

const toggleBoardOpacity = (board) => {
    board.classList.toggle("opacity");
}

export { makeBoard, toggleBoardOpacity }