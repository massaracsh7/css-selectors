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

describe('show right answer', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    jest.clearAllTimers();
  });

  it('should show right answer in the input', () => {
    const game = new Game();
    game.levels = mockLevelArr;
    game.showAnswer();
    jest.runAllTimers();
    expect(game.inputCss.value).toEqual('zebra');
  });
});
