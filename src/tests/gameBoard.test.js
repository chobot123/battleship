const myShip = require('../scripts/factory/ship');
const gameBoard = require('../scripts/factory/gameBoard');

const mockBoard = gameBoard();

// test('Check if game board exists', () => {
//     expect(mockBoard.myBoard).toBeInstanceOf(Array);
// })

// test('Check if game board elements hold proper obj values', () => {
//     const mockObj = {
//         ship: 'none',
//         shipPart: 'none',
//         status: 0
//     }
//     for(let i = 0; i < mockBoard.myBoard.length; i++){
//         for(let j = 0; j < mockBoard.myBoard[i].length; j++){
//             expect(mockBoard.myBoard[i][j]).toMatchObject(mockObj);
//         }
//     }
// })

// test('Check if placing ship updates myBoard - horizontal', () => {
//     const mockShip = myShip('mock', 3);
//     mockBoard.placeShip(mockShip, 3, 5, 'horizontal');
//     let pos = 0;
//     for(let i = 5; i < 5 + 3; i++){ // i < starting position + units traveled(length) -- horizontal = change in columns
//         let expectedObj = {
//             ship: 'mock',
//             shipPart: mockShip.shipParts[pos].position,
//             status: 0
//         }
//         expect(mockBoard.myBoard[3][i]).toMatchObject(expectedObj);
//         pos++;
//     }
// })

// test('Check if placing ship updates myBoard - vertical', () => {
//     const mockShip = myShip('mock', 3);
//     mockBoard.placeShip(mockShip, 3, 5);
//     let pos = 0;
//     for(let i = 3; i < 3 + 3; i++){ //i < starting position + units traveled -- vertical = change in rows
//         let expectedObj = {
//             ship: 'mock',
//             shipPart: mockShip.shipParts[pos].position,
//             status: 0
//         }
//         expect(mockBoard.myBoard[i][5]).toMatchObject(expectedObj);
//         pos++;
//     }
// })

// test(`Check if placing ship doesn't work if coords are invalid - out of grid`, () => {
//     const mockShip = myShip('mock', 3);
//     expect(mockBoard.placeShip(mockShip, -1, 5, 'horizontal')).toBe(false);
//     expect(mockBoard.placeShip(mockShip, 11, 5, 'vertical')).toBe(false);
// })


// test(`Check if placing ship doesn't work if coords are invalid - too large for coord`, () => {
//     const mockShip = myShip('mock', 5);
//     expect(mockBoard.placeShip(mockShip, 4, 8, 'horizontal')).toBe(false);
//     expect(mockBoard.placeShip(mockShip, 4, 8, 'vertical')).toBe(true);
// })

test(`Check if receive attack records hit for ship and updates board`, () => {
    const mockShip = myShip('mock', 3);
    expect(mockBoard.placeShip(mockShip, 5, 5)).toBe(true);
    expect(mockBoard.receiveAttack(6,6)).toBe(false);
    // expect(mockBoard.myBoard).toBe(3);
    // expect(mockShip).toBe(false);
})