import Player from "../scripts/factory/player";
import Gameboard from "../scripts/factory/gameBoard";

test(`If the player attacks the board, the board registers the hit/miss`, () => {
    const mockBoard = Gameboard();
    const mockPlayer = Player();

    expect(mockPlayer.attack(mockBoard, 0, 1))
    .toStrictEqual({
            hit: false,
            ship: "",
            sunk: false, 
            sunkCoord: [],
        });
    expect(mockPlayer.myTurn).toBe(false);
})
