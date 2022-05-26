


const instructions = (() => {

    const instructions = document.createElement("div");
    instructions.className = "instructions";

    const shipInstructions = () => {
        instructions.textContent = "Double Click a Ship to Change Orientation";
        return instructions;
    }

    const gameInstructions = () => {
        instructions.textContent = "Destroy the Enemy Ships";
        return instructions;
    }

    return {
        instructions,
        shipInstructions,
        gameInstructions,
    }

})();

export default instructions;