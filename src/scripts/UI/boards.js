import _ from "lodash";

const makeBoard = () => {

    const boards = document.createElement("div");
    boards.className = "boards";
    
    const  playerOne = document.createElement("div");
    const playerTwo = document.createElement("div");
    playerOne.className = 'playerOne';
    playerTwo.className = 'playerTwo';

    const pOneBoard = document.createElement("div");
    const pTwoBoard = document.createElement("div");
    pOneBoard.className = `board one`;
    pTwoBoard.className = `board two`;

    // const boardWrapper = document.createElement("div");
    // const boardWrapperTwo = document.createElement("div");
    // boardWrapper.className = `wrapper`;
    // boardWrapperTwo.className = `wrapper`;

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

    makeGrid(pOneBoard);
    makeGrid(pTwoBoard);
    playerOne.appendChild(pOneBoard);
    playerTwo.appendChild(pTwoBoard);
    // playerOne.appendChild(boardWrapper);
    // playerTwo.appendChild(boardWrapperTwo);
    boards.appendChild(playerOne);
    boards.appendChild(playerTwo);

    return boards;
}

export { makeBoard }