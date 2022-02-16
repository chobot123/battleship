const shipsContainer = document.createElement("div");
shipsContainer.className = `ships-container`;

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
        ship.style.gridTemplate = `repeat(${length}, minmax(0, 40px))`;
        ship.setAttribute("draggable", "true");



        for(let i = 0; i < length; i++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.innerHTML = i;
            ship.appendChild(cell);
        }
        return shipWrapper;
}

shipsContainer.appendChild(displayShip('carrier', 5));
shipsContainer.appendChild(displayShip('battleship', 4));
shipsContainer.appendChild(displayShip('cruiser', 3));
shipsContainer.appendChild(displayShip('submarine', 3));
shipsContainer.appendChild(displayShip('destroyer', 2));

export { shipsContainer }





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
