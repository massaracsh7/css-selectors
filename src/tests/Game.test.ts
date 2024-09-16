/** @type {import('<rootDir>/node_modules/ts-jest/dist/types').InitialOptionsTsJest} */

const mockLevelArr = [{
  helpTitle: 'Select by type A',
  doThis: 'Select the zebra',
  selector: 'zebra',
  arr: ['duck', 'zebra', 'giraffe', 'flamingo'],
  question: ['duck', 'zebra', 'giraffe', 'flamingo'],
  rightAnswer: [1],
}];

const mockGetLevelArrFn = jest.fn().mockImplementation(() => mockLevelArr);

jest.mock('../assets/levels', () => ({
  levels: mockGetLevelArrFn,
}));

import Game from '../modules/Game';

describe('create scene view', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
    mockGetLevelArrFn.mockClear(); 
    game.levels = mockLevelArr; 
  });

  it('should return the first level from mock data', () => {
    expect(game.levels[game.levelActive]).toBe(mockLevelArr[0]);
  });

  it('should return a defined scene with mock data', () => {
    const scene = game.createScene();
    expect(scene).toBeDefined();
    expect(scene).toMatchSnapshot();
  });
});
