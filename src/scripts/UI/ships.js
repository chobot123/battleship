const carrier = document.createElement("div");
carrier.className = "carrier";
carrier.setAttribute("draggable", "true");

for(let i = 0; i < 5; i++){
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.innerHTML = i;
    carrier.appendChild(cell);
}

const shipWrapper = document.createElement("div");
shipWrapper.className = `ship wrapper`;
shipWrapper.appendChild(carrier);


export {shipWrapper}