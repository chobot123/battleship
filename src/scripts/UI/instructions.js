

/**
 * Module
 * 
 * @description                                     Creates instructions for when the player
 *                                                  is supposed to place ships and game objective afterwords
 * @returns { shipInstructions, gameInstructions }
 */
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
        shipInstructions,
        gameInstructions,
    }

})();

export default instructions;