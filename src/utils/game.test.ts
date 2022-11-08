import { Game } from './game';

test('The grid is initialized properly for the 4x4 size', () => {
  // arrange
  const game = new Game('small', 1);

  // assert
  expect(game.grid.length).toBe(16);
});


test('The grid is initialized properly for the 6x6 size', () => {
  // arrange
  const game = new Game('large', 1);

  // assert
  expect(game.grid.length).toBe(36);
});