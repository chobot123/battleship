const Ship = require('./ship');

let hitProxy = Ship(5);
//all parts are hit
for(let i = 1; i < hitProxy.shipParts.length; i++){
    hitProxy.hit(i);
}


test('creates a ship obj', () => {
    expect(hitProxy).toEqual(expect.objectContaining({
        length: 5,
        shipParts: expect.any(Array),
    }));
})



test('Checks if isSunk Works when all ship parts are hit', () => {

    expect(hitProxy.isSunk()).toBe(true);

})