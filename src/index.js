import _ from 'lodash';
import { init } from './scripts/UI/init';
import  './styles/main.css';
import './styles/normalize.css'

init();
const myBoard = document.querySelector(`.board.one`);
let location = "";
myBoard.addEventListener("dragenter", (e) => {
    e.target.style.backgroundColor = "aqua";
    location = e.target.innerHTML;
}, false)
myBoard.addEventListener("dragleave", (e) => {
    if(e.target.className === "cell"){
        e.target.style.backgroundColor = "";
    }
}, false)
document.addEventListener("dragend", (e) => {
    console.log(location);
}, false)
