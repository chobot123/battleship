

const announceWinner = (player) => {

    const content = document.querySelector(".content");

    const myModal = document.createElement("div");
    myModal.id = "myModal";
    myModal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const winner = document.createElement("p");
    (player === "computer") ? winner.innerHTML = `You have lost the battle!`
                            : winner.innerHTML = `You have defeated the enemy!`;

    const restartBtn = document.createElement("button");
    restartBtn.className = "restart";
    restartBtn.innerHTML = `Play Again?`;

    content.appendChild(myModal);
    myModal.appendChild(modalContent);
    modalContent.appendChild(winner);
    modalContent.appendChild(restartBtn);

}

export { announceWinner}