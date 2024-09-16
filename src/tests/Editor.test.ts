/** @type {import('<rootDir>/node_modules/ts-jest/dist/types').InitialOptionsTsJest} */

const mockLevelArr = [{
  helpTitle: 'Select by type A',
  doThis: 'Select the zebra',
  selector: 'zebra',
  arr: ['duck', 'zebra', 'giraffe', 'flamingo'],
  question: ['duck', 'zebra', 'giraffe', 'flamingo'],
  rightAnswer: [1],
},];

const mockGetLevelArrFn = jest.fn().mockImplementation(() => mockLevelArr);

jest.mock('../assets/levels', () => ({
  levels: mockGetLevelArrFn,
}));


import Game from '../modules/Game';

describe('create tag view with data-attributes', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
    game.levels = mockLevelArr;
  });

  it('should return example tag with mock data', () => {
    const htmlTag = game.getHTMLView('duck', 0);
    expect(htmlTag).toBeDefined();
    expect(htmlTag.textContent).toEqual('<duck></duck>');
  })

  it('should return example tag with class', () => {
    const htmlTag = game.getHTMLView('circle.brown', 0);
    expect(htmlTag).toBeDefined();
    expect(htmlTag.textContent).toEqual(`<circle class='brown'></circle>`);
  })

  it('should return example tag with id', () => {
    const htmlTag = game.getHTMLView('circle#watermelon', 0);
    expect(htmlTag).toBeDefined();
    expect(htmlTag.textContent).toEqual(`<circle id='watermelon'></circle>`);
  })

  it('should return example tag with data-num attributes', () => {
    const htmlTag = game.getHTMLView('duck', 0);
    expect(htmlTag.hasAttribute('data-num')).toBeTruthy();
  })

})