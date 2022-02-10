const Ship = require('../scripts/factory/ship');

let proxy = Ship('test', 3);

let hitProxy = Ship('hit', 5);
//all parts are hit
for(let i = 0; i < hitProxy.shipParts.length; i++){
    hitProxy.hit(i);
}

test('Creates a ship obj', () => {
    expect(hitProxy).toEqual(expect.objectContaining({
        length: 5,
        shipParts: expect.any(Array),
    }));
})

test('Ship is hit', () => {
    expect(proxy.hit(2)).toBe(true);
})

test('IsSunk if all parts hit', () => {

    expect(hitProxy.isSunk()).toBe(true);

})
