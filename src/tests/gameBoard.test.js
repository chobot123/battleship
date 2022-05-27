import Ship from "../scripts/factory/ship";
import gameBoard from "../scripts/factory/gameBoard";


test('Check if game board exists', () => {
    const mockBoard = gameBoard();
    expect(mockBoard.myBoard).toBeInstanceOf(Array);
})

test('Check if game board elements hold proper obj values', () => {
    const mockBoard = gameBoard();
    const mockObj = {
        ship: 'none',
        shipPart: 'none',
        status: 0
    }
    for(let i = 0; i < mockBoard.myBoard.length; i++){
        for(let j = 0; j < mockBoard.myBoard[i].length; j++){
            expect(mockBoard.myBoard[i][j]).toMatchObject(mockObj);
        }
    }
})

test('Check if placing ship updates myBoard - horizontal', () => {
    const mockBoard = gameBoard();
    const mockShip = Ship('mock', 3);
    mockBoard.ships.push(mockShip);
    mockBoard.placeShip(mockShip, 3, 5, 'horizontal');
    let pos = 0;
    for(let i = 5; i < 5 + 3; i++){ // i < starting position + units traveled(length) -- horizontal = change in columns
        let expectedObj = {
            ship: 'mock',
            shipPart: mockShip.shipParts[pos].position,
            status: 0
        }
        expect(mockBoard.myBoard[3][i]).toMatchObject(expectedObj);
        pos++;
    }
})

test('Check if placing ship updates myBoard - vertical', () => {
    const mockBoard = gameBoard();
    const mockShip = Ship('mock', 3);
    mockBoard.ships.push(mockShip);
    mockBoard.placeShip(mockShip, 3, 5, "vertical");
    let pos = 0;
    for(let i = 3; i < 3 + 3; i++){ //i < starting position + units traveled -- vertical = change in rows
        let expectedObj = {
            ship: 'mock',
            shipPart: mockShip.shipParts[pos].position,
            status: 0
        }
        expect(mockBoard.myBoard[i][5]).toMatchObject(expectedObj);
        pos++;
    }
})

test(`Check if placing ship doesn't work if coords are invalid - out of grid`, () => {
    const mockBoard = gameBoard();
    const mockShip = Ship('mock', 3);
    mockBoard.ships.push(mockShip);
    expect(mockBoard.placeShip(mockShip, -1, 5, 'horizontal')).toBe(false);
    expect(mockBoard.placeShip(mockShip, 11, 5, 'vertical')).toBe(false);
})


test(`Check if placing ship doesn't work if coords are invalid - too large for coord`, () => {
    const mockBoard = gameBoard();
    const mockShip = Ship('mock', 5);
    mockBoard.ships.push(mockShip);
    expect(mockBoard.placeShip(mockShip, 4, 8, 'horizontal')).toBe(false);
    expect(mockBoard.placeShip(mockShip, 4, 8, 'vertical')).toBe(true);
})

test(`Check if receive attack records hit for ship and updates board`, () => {
    const mockBoard = gameBoard();
    const mockShip = Ship('mock', 3);
    mockBoard.ships.push(mockShip);
    expect(mockBoard.placeShip(mockShip, 5, 5, "vertical")).toBe(true);
    expect(mockBoard.receiveAttack(6,5).hit).toBe(true);
    expect(mockBoard.myBoard[6][5].status).toBe(2);
    expect(mockShip.shipParts[1].isHit).toBe(true);
})

test(`Check if board returns coordinates of ship if sunk`, () => {
    const mockBoard = gameBoard();
    const mockShip = Ship('mock', 3);
    mockBoard.ships.push(mockShip);
    expect(mockBoard.placeShip(mockShip, 5, 5, "vertical")).toBe(true);
    for(let x = 5; x < mockShip.length; x++){
        expect(mockBoard.receiveAttack(x, 5).hit).toBe(true);
        if(x === 7){
            expect(mockBoard.receiveAttack(x, 5).sunk).toBe(true);
            expect(mockBoard.receiveAttack(x, 5).sunkCoord).toBe(true);
        }
    }
})

test(`Check if board knows if all ships are sunk`, () => {
    const mockBoard = gameBoard();
    const mockShip1 = Ship('mock', 2);
    const mockShip2 = Ship('mock', 3);
    const mockShip3 = Ship('mock', 4);
    const mockShip4 = Ship('mock', 5);
    mockBoard.ships.push(mockShip1);
    mockBoard.ships.push(mockShip2);
    mockBoard.ships.push(mockShip3);
    mockBoard.ships.push(mockShip4);

    mockBoard.ships.forEach((ship) => {
        for(let i = 0; i < ship.shipParts.length; i++){
            ship.hit(i);
        }
    })
    expect(mockBoard.isAllSunk()).toBe(true);
})