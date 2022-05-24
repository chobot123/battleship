const displayShip = (name, length) => {

        const shipWrapper = document.createElement("div");
        const ship = document.createElement("div");

        shipWrapper.appendChild(ship);
        shipWrapper.className = `${name}-container`;
        shipWrapper.style.display = `flex`;

        ship.className = name;
        ship.style.display = `grid`;
        ship.style.minWidth = `40px`;
        ship.style.minHeight = `${40 * length}px`;
        ship.style.gridTemplateRows = `repeat(${length}, minmax(0, 40px))`;
        ship.setAttribute("draggable", "true");
        ship.classList.add('vertical');



        for(let i = 0; i < length; i++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.classList.add("ship");
            cell.innerHTML = i;
            cell.setAttribute("clickable", "false");
            cell.style.color = "transparent";
            cell.setAttribute("draggable", "false");
            ship.appendChild(cell);
        }
        return shipWrapper;
}

const makeVertical = (ship) => {

    ship.classList.remove('horizontal');
    ship.classList.add('vertical');
    ship.style.gridTemplateRows = `repeat(${ship.children.length}, minmax(0,40px))`
    ship.style.minHeight = `${40 * length}px`;
    ship.style.minWidth = `40px`;
    ship.style.gridTemplateColumns = "";
}

const makeHorizontal = (ship) => {

    ship.classList.remove('vertical');
    ship.classList.add('horizontal');
    ship.style.gridTemplateColumns = `repeat(${ship.children.length}, minmax(0,40px))`
    ship.style.minHeight = `40px`;
    ship.style.minWidth = `${40 * ship.children.length}px`;
    ship.style.gridTemplateRows = "";
}

const getShips = () => {

    const shipsContainer = document.createElement("div");
    shipsContainer.className = `ships-container`;

    shipsContainer.appendChild(displayShip('carrier', 5));
    shipsContainer.appendChild(displayShip('battleship', 4));
    shipsContainer.appendChild(displayShip('cruiser', 3));
    shipsContainer.appendChild(displayShip('submarine', 3));
    shipsContainer.appendChild(displayShip('destroyer', 2));

    return shipsContainer;
}

export { getShips, makeHorizontal, makeVertical}





// const carrier = document.createElement("div");
// const carrierWrapper = document.createElement("div");
// carrierWrapper.className = "carrier";
// carrierWrapper.appendChild(carrier);
// carrier.className = "carrier-grid";
// carrier.setAttribute("draggable", "true");

// for(let i = 0; i < 5; i++){
//     let cell = document.createElement("div");
//     cell.className = "cell";
//     cell.innerHTML = i;
//     carrier.appendChild(cell);
// }

// const shipWrapper = document.createElement("div");
// shipWrapper.className = `ship wrapper`;
// shipWrapper.appendChild(carrierWrapper);
