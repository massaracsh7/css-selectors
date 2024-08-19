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

describe('create example code', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
    game.levels = mockLevelArr;
  });

  it('should return example HTML code for the first level', () => {
    const codeElement = game.createExampleCode();
    const expectedHTML = '<beach><duck></duck><zebra></zebra><giraffe></giraffe><flamingo></flamingo></beach>';
    expect(codeElement.textContent).toBe(expectedHTML);
  });
});
