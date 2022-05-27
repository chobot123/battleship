/**
 * @description                 Creates a ship with length cells and with className name
 * @param {String} name         Name of ship
 * @param {Number} length       Length of ship
 * @returns { shipWrapper }     Ship element
 */
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
            cell.style.color = "transparent";
            ship.appendChild(cell);
        }
        return shipWrapper;
}

/**
 * @description                 Makes ship vertical in alignment by removing the class ('horizontal')
 *                              and adding the class ('vertical')
 * 
 * @param {DOMElement} ship     Ship DOM element
 */
const makeVertical = (ship) => {

    ship.classList.remove('horizontal');
    ship.classList.add('vertical');
    ship.style.gridTemplateRows = `repeat(${ship.children.length}, minmax(0,40px))`
    ship.style.minHeight = `${40 * length}px`;
    ship.style.minWidth = `40px`;
    ship.style.gridTemplateColumns = "";
}

/**
 * @description                 Makes ship horizontal in alignment by removing the class ('vertical')
 *                              and adding the class ('horizontal')
 * 
 * @param {DOMElement} ship     Ship DOM element
 */
const makeHorizontal = (ship) => {

    ship.classList.remove('vertical');
    ship.classList.add('horizontal');
    ship.style.gridTemplateColumns = `repeat(${ship.children.length}, minmax(0,40px))`
    ship.style.minHeight = `40px`;
    ship.style.minWidth = `${40 * ship.children.length}px`;
    ship.style.gridTemplateRows = "";
}

/**
 * @description                     Creates a container for all ships and appends all ships to said container
 * 
 * @returns { shipsContainer }      DOM element containing all ships to place
 */
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
