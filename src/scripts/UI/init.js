import { shipCount } from "../game_loop/placeShips";
import { getShips } from "./displayShips";

const { makeTitle } = require("./header");
const { makeBoard } = require("./boards")



const init = () => {
    
    const content = document.createElement("div");
    content.className = "content";
    document.body.appendChild(content); 

    content.appendChild(makeTitle());
    content.appendChild(makeBoard());
    content.appendChild(getShips());
    
}

export {init}