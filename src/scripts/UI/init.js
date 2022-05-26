import { getShips } from "./renderShips/displayShips";
import instructions from './instructions';
const { makeTitle } = require("./header");
const { makeBoard } = require("./boards")



const init = () => {
    
    const content = document.createElement("div");
    content.className = "content";
    document.body.appendChild(content);

    content.appendChild(makeTitle());
    content.appendChild(makeBoard());
    content.appendChild(getShips());
    content.appendChild(instructions.shipInstructions());
    
}

export {init}