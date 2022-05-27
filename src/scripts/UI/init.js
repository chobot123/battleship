import { getShips } from "./renderShips/displayShips";
import instructions from './instructions';
const { makeTitle } = require("./header");
const { makeBoards } = require("./boards")


/**
 * @description     Consolidates game creation into
 *                      1) header (title)
 *                      2) body (boards, ships, and instructions)
 */
const init = () => {
    
    const content = document.createElement("div");
    content.className = "content";
    document.body.appendChild(content);

    content.appendChild(makeTitle());
    content.appendChild(makeBoards());
    content.appendChild(getShips());
    content.appendChild(instructions.shipInstructions());
    
}

export {init}