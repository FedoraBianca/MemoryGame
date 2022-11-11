import { Game, GridSizeEnum } from "./game";

test("The grid is initialized properly for the 4x4 size", () => {
  // arrange
  const game = new Game({
    gridSize: GridSizeEnum.small,
    playersNumber: 1,
    score: [],
  });

  // assert
  expect(game.grid.length).toBe(16);
});

test("The grid is initialized properly for the 6x6 size", () => {
  // arrange
  const game = new Game({
    gridSize: GridSizeEnum.large,
    playersNumber: 1,
    score: [],
  });

  // assert
  expect(game.grid.length).toBe(36);
});

test("When the game starts, player 1 is first", () => {
  // arrange
  const game = new Game({
    gridSize: GridSizeEnum.large,
    playersNumber: 2,
    score: [],
  });
  // assert
  expect(game.currentTurn).toBe(1);
});

test("Player turn changes after every move", () => {
  // arrange
  const game = new Game({
    gridSize: GridSizeEnum.large,
    playersNumber: 2,
    score: [],
  });
  let turn1 = game.currentTurn;
  game.flipDisc(0);
  game.flipDisc(1);
  let turn2 = game.currentTurn;
  // assert
  expect(turn1 !== turn2).toBe(true);
});

test("After the last player make a move, it is the turn of the first player", () => {
  // arrange
  const game = new Game({
    gridSize: GridSizeEnum.large,
    playersNumber: 2,
    score: [],
  });
  game.flipDisc(0);
  game.flipDisc(1);
  game.flipDisc(2);
  game.flipDisc(3);
  // assert
  expect(game.currentTurn).toBe(1);
});

test("After a Disc is fliped, its index is the same as lastDiscFliped", () => {
  // arrange
  const game = new Game({
    gridSize: GridSizeEnum.large,
    playersNumber: 4,
    score: [],
  });
  game.flipDisc(0);
  // assert
  expect(game.lastDiscIndex).toBe(0);
});
