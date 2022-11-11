import { Game, GridSizeEnum, DiscThemeEnum } from "./game";

test("The grid is initialized properly for the 4x4 size", () => {
  // arrange
  const game = new Game({
    gridSize: GridSizeEnum.small,
    playersNumber: 1,
    score: [0],
    discTheme: DiscThemeEnum.numbers,
  });

  // assert
  expect(game.grid.length).toBe(16);
});

test("The grid is initialized properly for the 6x6 size", () => {
  // arrange
  const game = new Game({
    gridSize: GridSizeEnum.large,
    playersNumber: 1,
    score: [0],
    discTheme: DiscThemeEnum.numbers,
  });

  // assert
  expect(game.grid.length).toBe(36);
});

test("When the game starts, player 1 is first", () => {
  // arrange
  const game = new Game({
    gridSize: GridSizeEnum.large,
    playersNumber: 2,
    score: [0, 0],
    discTheme: DiscThemeEnum.numbers,
  });
  // assert
  expect(game.currentTurn).toBe(1);
});
