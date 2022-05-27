import { init } from '../UI/init'
import { gameLoop } from './gameLoop';

/**
 * @description              Creates a modal that declares winner and asks the player to 
 *                           restart the game
 * 
 * @param {Object} player 
 */
const announceWinner = (player) => {

    const content = document.querySelector(".content");

    const myModal = document.createElement("div");
    myModal.id = "myModal";
    myModal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const winner = document.createElement("p");
    (player === "computer") ? winner.innerText = `You have lost the battle!`
                            : winner.innerText = `You have defeated the enemy!`;

    const restartBtn = document.createElement("button");
    restartBtn.className = "restart";
    restartBtn.innerText = `Play Again?`;

    content.appendChild(myModal);
    myModal.appendChild(modalContent);
    modalContent.appendChild(winner);
    modalContent.appendChild(restartBtn);

}


/**
 * @description     Adds an event listener to the restart button that deletes all DOM elements
 *                  and then reinitializes the game
 */
const resetGame = () => {
    const reset = document.querySelector(".restart");

    reset.addEventListener("click", () => {
        while(document.body.lastChild){
            document.body.removeChild(document.body.lastChild);
        }
        init();
        gameLoop();
    })
}

export { announceWinner, resetGame }